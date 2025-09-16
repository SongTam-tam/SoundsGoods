import { create } from 'zustand';
import main_Artist_data from '../assets/api/main_Artist_data';
import goodsData from '../assets/api/goods';
// 작업 수정

// YT 상수 정의를 함수 내부로 이동하거나 안전하게 처리
const getYT = () => {
    if (typeof window === 'undefined') return null;
    return window.YT || null;
};

export const usemainAlbumStore = create((set, get) => {
    return {
        mainAlAtData: main_Artist_data,
        musicOn: false,
        musicModal: null,
        players: {},
        ytReady: false,
        currentPlayerId: null,

        // YouTube API 초기화 함수
        onTrack: (id) =>
            set((state) => ({
                mainAlAtData: state.mainAlAtData.map((item) =>
                    item.id === id ? { ...item, actv: true } : { ...item, actv: false }
                ),
            })),

        initYouTube: () => {
            return new Promise((resolve) => {
                if (typeof window === 'undefined') {
                    resolve(false);
                    return;
                }

                // 이미 YouTube API가 로드된 경우
                if (window.YT && window.YT.Player) {
                    set({ ytReady: true });
                    resolve(true);
                    return;
                }

                // YouTube API가 아직 로드되지 않은 경우
                if (!window.onYouTubeIframeAPIReady) {
                    window.onYouTubeIframeAPIReady = () => {
                        set({ ytReady: true });
                        resolve(true);
                    };
                }

                // 10초 타임아웃 설정
                const timeout = setTimeout(() => {
                    console.error('YouTube API loading timeout');
                    resolve(false);
                }, 10000);

                // 주기적으로 확인
                const interval = setInterval(() => {
                    if (window.YT && window.YT.Player) {
                        clearInterval(interval);
                        clearTimeout(timeout);
                        set({ ytReady: true });
                        resolve(true);
                    }
                }, 100);
            });
        },

        // 플레이어 생성 함수 (수정된 버전)
        createPlayer: (track) => {
            return new Promise((resolve, reject) => {
                const { players, currentPlayerId } = get();
                const YT = getYT(); // 안전하게 YT 객체 가져오기

                if (!YT) {
                    reject(new Error('YouTube API not loaded'));
                    return;
                }

                console.log('Creating player for track:', track.id);

                // 기존 재생 중인 플레이어 정지
                if (currentPlayerId && players[currentPlayerId]) {
                    console.log('Stopping previous player:', currentPlayerId);
                    try {
                        players[currentPlayerId].pauseVideo();
                    } catch (error) {
                        console.log('Error pausing previous player:', error);
                    }
                }

                // 이미 플레이어가 있으면 재생 시작
                if (players[track.id]) {
                    console.log('Using existing player:', track.id);
                    try {
                        // playVideo()는 Promise를 반환하지 않으므로 then() 사용 불가
                        players[track.id].playVideo();
                        set({ currentPlayerId: track.id });
                        resolve(players[track.id]);
                    } catch (error) {
                        console.error('Error with existing player:', error);
                        delete players[track.id];
                    }
                    return;
                }

                // 새 플레이어 생성
                console.log('Creating new player for:', track.id);
                let playerElement = document.getElementById(`youtube-player-${track.id}`);
                if (!playerElement) {
                    playerElement = document.createElement('div');
                    playerElement.id = `youtube-player-${track.id}`;
                    playerElement.style.display = 'none';
                    document.body.appendChild(playerElement);
                }

                try {
                    const player = new YT.Player(`youtube-player-${track.id}`, {
                        videoId: track.yid,
                        width: '0',
                        height: '0',
                        playerVars: {
                            autoplay: 1,
                            modestbranding: 1,
                            rel: 0,
                            enablejsapi: 1,
                            origin: window.location.origin,
                        },
                        events: {
                            onReady: (event) => {
                                console.log('Player is ready for:', track.id);
                                try {
                                    event.target.playVideo();
                                    set({ currentPlayerId: track.id });
                                    resolve(event.target);
                                } catch (error) {
                                    console.error('Error in onReady:', error);
                                    reject(error);
                                }
                            },
                            onStateChange: (event) => {
                                console.log('Player state changed:', event.data, 'for:', track.id);
                                if (event.data === YT.PlayerState.PLAYING) {
                                    set({ currentPlayerId: track.id });
                                } else if (event.data === YT.PlayerState.ENDED) {
                                    set({ currentPlayerId: null });
                                }
                            },
                            onError: (event) => {
                                console.error(
                                    'YouTube Player Error:',
                                    event.data,
                                    'for:',
                                    track.id
                                );
                                reject(new Error(`YouTube error: ${event.data}`));
                            },
                        },
                    });

                    set({
                        players: {
                            ...players,
                            [track.id]: player,
                        },
                    });
                } catch (error) {
                    console.error('Error creating YouTube player:', error);
                    reject(error);
                }
            });
        },

        // 음악 재생 시작 (수정된 버전)
        MStart: async (id) => {
            try {
                const track = get().mainAlAtData.find((item) => item.id === id);
                if (!track) {
                    console.error('Track not found:', id);
                    return;
                }

                set({ musicOn: true, musicModal: track });

                // YouTube API 준비 확인
                if (!get().ytReady) {
                    const isReady = await get().initYouTube();
                    if (!isReady) {
                        console.error('YouTube API failed to load');
                        return;
                    }
                }

                const { currentPlayerId, players } = get();
                const YT = getYT();

                if (currentPlayerId === id && players[id]) {
                    // 같은 트랙이면 일시정지 토글
                    try {
                        const playerState = players[id].getPlayerState();
                        if (playerState === YT.PlayerState.PLAYING) {
                            players[id].pauseVideo();
                        } else {
                            players[id].playVideo();
                        }
                    } catch (error) {
                        console.error('Error toggling play/pause:', error);
                    }
                } else {
                    // 다른 트랙이면 새로 재생
                    await get().createPlayer(track);
                }
            } catch (error) {
                console.error('Error in MStart:', error);
            }
        },

        // 음악 정지
        MStop: (id) => {
            const { players } = get();
            if (players[id]) {
                try {
                    players[id].pauseVideo();
                    set({ currentPlayerId: null });
                } catch (error) {
                    console.error('Error stopping player:', error);
                }
            }
        },

        // 볼륨 설정
        setVolume: (id, volume) => {
            const { players } = get();
            if (players[id] && typeof players[id].setVolume === 'function') {
                try {
                    players[id].setVolume(volume);
                } catch (error) {
                    console.error('Error setting volume:', error);
                }
            }
        },

        // 모달 닫기
        closeModal: () => {
            const { players, musicModal } = get();

            if (musicModal && players[musicModal.id]) {
                try {
                    players[musicModal.id].stopVideo();
                } catch (error) {
                    console.error('Error stopping video:', error);
                }
            }

            set({
                musicOn: false,
                musicModal: null,
                currentPlayerId: null,
            });
        },
    };
});
export const useGoodsStore = create((set, get) => {
    return {
        goods: localStorage.getItem('goods')
            ? JSON.parse(localStorage.getItem('goods'))
            : goodsData,

        cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
        iveGoods: localStorage.getItem('iveGoods')
            ? JSON.parse(localStorage.getItem('iveGoods'))
            : [],
        goodsMain: localStorage.getItem('goodsMain')
            ? JSON.parse(localStorage.getItem('goodsMain'))
            : [],
        goodsMain2: localStorage.getItem('goodsMain2')
            ? JSON.parse(localStorage.getItem('goodsMain2'))
            : [],

        wish: localStorage.getItem('wish') ? JSON.parse(localStorage.getItem('wish')) : [],

        // 상태로 변경
        itemTotal: 0,
        paymentTotal: 0,
        cartItemCount: 0,
        updateTotals: () => {
            const { cart } = get();
            const newItemTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
            const newCartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

            set({
                itemTotal: newItemTotal,
                paymentTotal: newItemTotal + 3000,
                cartItemCount: newCartItemCount,
            });
        },
        shuffl: () => {
            const { goods } = get();
            const limitData = [...goods].sort(() => Math.random() - 0.5).slice(0, 5);
            localStorage.setItem('goodsMain', JSON.stringify(limitData));
            const limitData2 = [...goods].sort(() => Math.random() - 0.5).slice(0, 5);
            localStorage.setItem('goodsMain2', JSON.stringify(limitData2));
            const limitData3 = [...goods].sort(() => Math.random() - 0.5).slice(0, 6);
            localStorage.setItem('iveGoods', JSON.stringify(limitData3));
            set({ goodsMain: limitData, goodsMain2: limitData2, iveGoods: limitData3 });
        },

        cartPush: (x, quantity = 1) => {
            const { goods, cart } = get();
            const id = x.id;
            const currentGoodsItem = goods.find((item) => item.id === id);

            if (!currentGoodsItem) return;

            // 디버깅: 현재 goods 항목 확인
            console.log('Current goods item:', currentGoodsItem);
            console.log('Quantity in goods:', currentGoodsItem.quantity);

            const existingCartItemIndex = cart.findIndex((cartItem) => cartItem.id === id);

            if (existingCartItemIndex !== -1) {
                // 장바구니에 이미 있는 경우
                const updatedCart = [...cart];
                const existingItem = updatedCart[existingCartItemIndex];

                // 디버깅: 기존 장바구니 항목 확인
                console.log('Existing cart item:', existingItem);

                // goods의 quantity를 사용하여 증가
                const newQuantity = existingItem.quantity + currentGoodsItem.quantity;

                updatedCart[existingCartItemIndex] = {
                    ...existingItem,
                    quantity: newQuantity,
                    itemtotal: existingItem.price * newQuantity,
                    totalPrice: existingItem.price * newQuantity,
                };

                localStorage.setItem('cart', JSON.stringify(updatedCart));
                set({ cart: updatedCart });

                // 디버깅: 업데이트 후 확인
                console.log('Updated quantity:', newQuantity);
            } else {
                // 장바구니에 없는 경우 - goods의 quantity를 사용
                const newCartItem = {
                    ...currentGoodsItem,
                    quantity: currentGoodsItem.quantity, // goods의 quantity 사용
                    itemtotal: currentGoodsItem.price * currentGoodsItem.quantity,
                    totalPrice: currentGoodsItem.price * currentGoodsItem.quantity,
                };

                const newCart = [...cart, newCartItem];
                localStorage.setItem('cart', JSON.stringify(newCart));
                set({ cart: newCart });

                // 디버깅: 새로 추가된 항목 확인
                console.log('New cart item:', newCartItem);
            }

            // totals 업데이트 호출 추가
            get().updateTotals();
        },
        delCart: (x) => {
            const { cart } = get();
            const del = cart.filter((item) => item.id !== x);
            localStorage.setItem('cart', JSON.stringify(del));
            set({ cart: del });
        },
        upCountGoods: (x) => {
            const { goods } = get();
            const id = x;
            const item = goods.map((item) =>
                item.id === id
                    ? {
                          ...item,
                          quantity: item.quantity + 1,
                          itemtotal: item.price * (item.quantity + 1), // itemtotal 업데이트
                          totalPrice: item.price * (item.quantity + 1),
                      }
                    : item
            );

            set({ goods: item });
        },
        upCount: (x) => {
            const { cart } = get();
            const id = x;
            const item = cart.map((item) =>
                item.id === id
                    ? {
                          ...item,
                          quantity: item.quantity + 1,
                          itemtotal: item.price * (item.quantity + 1), // itemtotal 업데이트
                          totalPrice: item.price * (item.quantity + 1),
                      }
                    : item
            );
            localStorage.setItem('cart', JSON.stringify(item));
            set({ cart: item });
        },
        downCountGoods: (id) => {
            const { goods } = get();
            const itemIndex = goods.findIndex((goodsItem) => goodsItem.id === id);

            if (itemIndex !== -1) {
                const updatedGoods = [...goods];
                const item = updatedGoods[itemIndex];

                if (item.quantity > 1) {
                    updatedGoods[itemIndex] = {
                        ...item,
                        quantity: item.quantity - 1,
                        itemtotal: item.price * (item.quantity - 1), // itemtotal 업데이트
                        totalPrice: item.price * (item.quantity - 1),
                    };

                    set({ goods: updatedGoods });
                }
            }
        },
        downCount: (id) => {
            const { cart } = get();
            const itemIndex = cart.findIndex((cartItem) => cartItem.id === id);

            if (itemIndex !== -1) {
                const updatedCart = [...cart];
                const item = updatedCart[itemIndex];

                if (item.quantity > 1) {
                    updatedCart[itemIndex] = {
                        ...item,
                        quantity: item.quantity - 1,
                        itemtotal: item.price * (item.quantity - 1), // itemtotal 업데이트
                        totalPrice: item.price * (item.quantity - 1),
                    };
                    localStorage.setItem('cart', JSON.stringify(updatedCart));
                    set({ cart: updatedCart });
                }
            }
        },
        totalCart: (x) => {
            const { cart } = get();
            const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
            localStorage.setItem('cart', JSON.stringify(total));
            set({ itemTotal: total });
        },
        isLike: (id) =>
            set((state) => {
                const newGoods = state.goods.map((item) =>
                    item.id === id ? { ...item, like: !item.like } : item
                );
                const newGoodsMain = state.goodsMain.map((item) =>
                    item.id === id
                        ? {
                              ...item,
                              like: !item.like,
                              count: !item.like ? item.count + 1 : item.count - 1,
                          }
                        : item
                );

                localStorage.setItem('goods', JSON.stringify(newGoods));
                localStorage.setItem('goodsMain', JSON.stringify(newGoodsMain));

                return { goods: newGoods, goodsMain: newGoodsMain };
            }),
        isLike2: (id) =>
            set((state) => {
                const newGoods = state.goods.map((item) =>
                    item.id === id ? { ...item, like: !item.like } : item
                );
                const newGoodsMain2 = state.goodsMain2.map((item) =>
                    item.id === id
                        ? {
                              ...item,
                              like: !item.like,
                              count: !item.like ? item.count + 1 : item.count - 1,
                          }
                        : item
                );

                localStorage.setItem('goods', JSON.stringify(newGoods));
                localStorage.setItem('goodsMain2', JSON.stringify(newGoodsMain2));

                return { goods: newGoods, goodsMain2: newGoodsMain2 };
            }),
    };
});
