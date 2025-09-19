import { create } from 'zustand';
import goodsData from '../assets/api/goods';
import top_1_50 from '../assets/api/musicComponents/top_1_50';
import newData_51_100 from '../assets/api/musicComponents/newData_51_100';
import genre from '../assets/api/genre';
import artist_info from '../assets/api/artist_info';
import main_Artist_data from '../assets/api/main_Artist_data';
// 작업 수정

// YT 상수 정의를 함수 내부로 이동하거나 안전하게 처리
const getYT = () => {
    if (typeof window === 'undefined') return null;
    return window.YT || null;
};

export const usemainAlbumStore = create((set, get) => {
    return {
        topData: top_1_50,
        genreData: genre,
        latestData: newData_51_100,
        artistData: artist_info,
        mainArtistData: main_Artist_data,
        musicOn: false,
        musicModal: null,
        players: {},
        ytReady: false,
        currentPlayerId: null,

        // 시간 포맷 함수 추가
        formatTime: (time) => {
            if (!time || isNaN(time)) return '00:00';
            const minutes = Math.floor(time / 60);
            const seconds = Math.floor(time % 60);
            return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        },

        // YouTube API 초기화 함수
        onTrack: (id, type) => {
            if (type === 'top') {
                set((state) => {
                    const selectedTrack = state.topData.find((item) => item.id === id);

                    if (selectedTrack) get().createPlayer(selectedTrack);

                    return {
                        topData: state.topData.map((item) =>
                            item.id === id ? { ...item, actv: true } : { ...item, actv: false }
                        ),
                        musicModal: selectedTrack,
                    };
                });
            } else if (type === 'latest') {
                set((state) => {
                    const selectedTrack = state.latestData.find((item) => item.id === id);

                    if (selectedTrack) get().createPlayer(selectedTrack);

                    return {
                        latestData: state.latestData.map((item) =>
                            item.id === id ? { ...item, actv: true } : { ...item, actv: false }
                        ),
                        musicModal: selectedTrack,
                    };
                });
            } else if (type === 'genre') {
                set((state) => {
                    const selectedTrack = state.genreData.find((item) => item.id === id);

                    if (selectedTrack) get().createPlayer(selectedTrack);

                    return {
                        genreData: state.genreData.map((item) =>
                            item.id === id ? { ...item, actv: true } : { ...item, actv: false }
                        ),
                        musicModal: selectedTrack,
                    };
                });
            } else if (type === 'artistInfo') {
                set((state) => {
                    // 모든 아티스트의 앨범을 하나의 배열로 펼침
                    const allAlbums = state.artistData.flatMap((artist) => artist.album);

                    // id로 선택
                    const selectedTrack = allAlbums.find((albumItem) => albumItem.id === id);

                    // 선택된 트랙이 있으면 재생
                    if (selectedTrack) get().createPlayer(selectedTrack);

                    return {
                        artistData: state.artistData.map((artist) => ({
                            ...artist,
                            album: artist.album.map((albumItem) =>
                                albumItem.id === id
                                    ? { ...albumItem, actv: true }
                                    : { ...albumItem, actv: false }
                            ),
                        })),
                        musicModal: selectedTrack || null,
                    };
                });
            } else if (type === 'main') {
                set((state) => {
                    const selectedTrack = state.mainArtistData.find((item) => item.id === id);

                    if (selectedTrack) get().createPlayer(selectedTrack);

                    return {
                        artistData: state.mainArtistData.map((item) =>
                            item.id === id ? { ...item, actv: true } : { ...item, actv: false }
                        ),
                        musicModal: selectedTrack,
                    };
                });
            }
        },

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
                const { players, currentPlayerId, timeInterval } = get();
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
                        videoId: track.track,
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
                                    // 총 재생시간 저장
                                    const duration = event.target.getDuration();
                                    set({ duration });

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

                                    // 이전 interval 정리
                                    if (timeInterval) clearInterval(timeInterval);

                                    // currentTime 주기적 업데이트
                                    const interval = setInterval(() => {
                                        const { players, currentPlayerId } = get();
                                        if (currentPlayerId && players[currentPlayerId]) {
                                            const player = players[currentPlayerId];
                                            if (player && player.getCurrentTime) {
                                                set({ currentTime: player.getCurrentTime() });
                                            }
                                        }
                                    }, 1000);

                                    set({ timeInterval: interval });
                                } else if (event.data === YT.PlayerState.ENDED) {
                                    set({ currentPlayerId: null, currentTime: 0 });
                                    if (timeInterval) clearInterval(timeInterval);
                                } else if (event.data === YT.PlayerState.PAUSED) {
                                    if (timeInterval) clearInterval(timeInterval);
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

        // MStart도 type 추가
        MStart: async (id, type) => {
            const state = get();
            let track = null;

            if (type === 'top') track = state.topData.find((item) => item.id === id);
            else if (type === 'latest') track = state.latestData.find((item) => item.id === id);
            else if (type === 'genre') track = state.genreData.find((item) => item.id === id);
            else if (type === 'artistInfo') track = state.artistData.find((item) => item.id === id);
            else if (type === 'main') track = state.mainArtistData.find((item) => item.id === id);

            if (!track) return;

            // album_img 필드 없으면 image로 매핑
            if (!track.album_img && track.image) track.album_img = track.image;

            set({ musicOn: true, musicModal: track });

            // YouTube API 준비
            if (!state.ytReady) {
                const isReady = await state.initYouTube();
                if (!isReady) return;
            }

            const { currentPlayerId, players } = get();
            const YT = getYT();

            if (currentPlayerId === id && players[id]) {
                try {
                    const playerState = players[id].getPlayerState();
                    if (playerState === YT.PlayerState.PLAYING) {
                        players[id].pauseVideo();
                    } else {
                        players[id].playVideo();
                    }
                } catch (error) {
                    console.error(error);
                }
            } else {
                await state.createPlayer(track);
            }
        },

        MStop: (id) => {
            const { players } = get();
            if (players[id]) {
                try {
                    players[id].pauseVideo();
                    set({ currentPlayerId: null });
                } catch (error) {
                    console.error(error);
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
        payment: localStorage.getItem('payment') ? JSON.parse(localStorage.getItem('payment')) : [],
        complete: localStorage.getItem('complete')
            ? JSON.parse(localStorage.getItem('complete'))
            : [],
        iveGoods: localStorage.getItem('iveGoods')
            ? JSON.parse(localStorage.getItem('iveGoods'))
            : [],
        goodsMain: localStorage.getItem('goodsMain')
            ? JSON.parse(localStorage.getItem('goodsMain'))
            : [],
        goodsMain2: localStorage.getItem('goodsMain2')
            ? JSON.parse(localStorage.getItem('goodsMain2'))
            : [],
        goodspush: localStorage.getItem('goodspush')
            ? JSON.parse(localStorage.getItem('goodspush'))
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
                paymentTotal: newItemTotal + 2000,
                cartItemCount: newCartItemCount,
            });
        },
        updateTotals2: () => {
            const { payment } = get();
            const newItemTotal = payment.reduce((sum, item) => sum + item.price * item.quantity, 0);
            const newCartItemCount = payment.reduce((sum, item) => sum + item.quantity, 0);

            set({
                itemTotal: newItemTotal,
                paymentTotal: newItemTotal + 2000,
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
            const limitData4 = [...goods].sort(() => Math.random() - 0.5).slice(0, 2);
            localStorage.setItem('goodspush', JSON.stringify(limitData4));
            set({
                goodsMain: limitData,
                goodsMain2: limitData2,
                iveGoods: limitData3,
                goodspush: limitData4,
            });
        },
        completePush: (orderData) => {
            const { complete } = get();
            const newComplete = [...complete, orderData];
            localStorage.setItem('complete', JSON.stringify(newComplete));
            set({ complete: newComplete });
            localStorage.setItem('cart', JSON.stringify([]));
            set({ cart: [], payment: [] });
        },
        toggleCheck: (id) => {
            const { cart } = get();
            const updatedCart = cart.map((item) =>
                item.id === id ? { ...item, chk: !item.chk } : item
            );
            set({ cart: updatedCart });
            get().updateTotals();
        },

        toggleAllCheck: (checked) => {
            const { cart } = get();
            const updatedCart = cart.map((item) => ({ ...item, chk: checked }));
            set({ cart: updatedCart });
            get().updateTotals();
        },
        payPush2: (x) => {
            const { cart, payment } = get();
            const id = x.id;
            const checkedItems = cart.filter((item) => item.chk === true);
            const existingIds = new Set(payment.map((item) => item.id));
            const newItems = checkedItems.filter((item) => !existingIds.has(item.id));
            const updatedItems = [...newItems];
            localStorage.setItem('payment', JSON.stringify(updatedItems));
            set({ payment: updatedItems });
        },
        payPush: (x) => {
            const { goods, payment } = get();
            const id = x.id;
            const item = goods.find((item) => item.id === id);
            const updataItem = [item];
            localStorage.setItem('payment', JSON.stringify(updataItem));
            set({ payment: updataItem });
        },
        filterCD: (x) => {
            set((state) => ({
                goods: [...goodsData].filter((item) => item.category === x),
            }));
            window.scrollTo({
                top: 1500,
                behavior: 'smooth',
            });
        },
        newSort: () => {
            set((state) => ({
                goods: [...state.goods].sort((a, b) => a.title.localeCompare(b.title)),
            }));
            window.scrollTo({
                top: 1500,
                behavior: 'smooth',
            });
        },
        topSort: () => {
            set((state) => ({
                goods: [...state.goods].sort((a, b) => a.cpn.localeCompare(b.cpn)),
            }));
            window.scrollTo({
                top: 1500,
                behavior: 'smooth',
            });
        },
        defaultSort: () => {
            set((state) => ({
                goods: [...state.goods].sort((a, b) => a.id - b.id),
            }));
            window.scrollTo({
                top: 1500,
                behavior: 'smooth',
            });
        },
        priceFilter1: () => {
            set((state) => ({
                goods: [...goodsData].filter((item) => item.price < 10000),
            }));
            window.scrollTo({
                top: 1500,
                behavior: 'smooth',
            });
        },
        priceFilter2: () => {
            set((state) => ({
                goods: [...goodsData].filter((item) => item.price > 10000 && item.price < 20000),
            }));
            window.scrollTo({
                top: 1500,
                behavior: 'smooth',
            });
        },
        priceFilter3: () => {
            set((state) => ({
                goods: [...goodsData].filter((item) => item.price > 30000 && item.price < 40000),
            }));
            window.scrollTo({
                top: 1500,
                behavior: 'smooth',
            });
        },
        priceFilter4: () => {
            set((state) => ({
                goods: [...goodsData].filter((item) => item.price > 50000 && item.price < 60000),
            }));
            window.scrollTo({
                top: 1500,
                behavior: 'smooth',
            });
        },
        priceFilter5: () => {
            set((state) => ({
                goods: [...goodsData].filter((item) => item.price > 100000),
            }));
            window.scrollTo({
                top: 1500,
                behavior: 'smooth',
            });
        },
        artistSearch: (id) => {
            set((state) => ({
                goods: [...goodsData].filter((item) =>
                    item.artist.toLowerCase().includes(id.toLowerCase())
                ),
            }));
            window.scrollTo({
                top: 1500,
                behavior: 'smooth',
            });
        },
        wishPush: (x) => {
            const { goods, wish } = get();
            const id = x.id;

            // goods에서 아이템 찾기
            const item = goods.find((item) => item.id === id);

            if (!item) {
                console.error('Item not found in goods');
                return;
            }

            // 이미 wish에 있는지 확인
            const alreadyInWish = wish.some((wishItem) => wishItem.id === id);
            if (alreadyInWish) {
                console.log('Item already in wish list');
                return;
            }

            const add = [...wish, item];
            localStorage.setItem('wish', JSON.stringify(add));
            set({ wish: add });
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
        delWish: (x) => {
            const { wish, goodsMain } = get();
            const del = wish.filter((item) => item.id !== x);
            const delItem = goodsMain.map((item) =>
                item.id === x ? { ...item, like: false } : item
            );
            localStorage.setItem('wish', JSON.stringify(del));
            localStorage.setItem('goodsMain', JSON.stringify(delItem));
            set({ wish: del, goodsMain: delItem });
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
        isLikeWithWish: (id) => {
            const { goods, wish } = get();

            const item = goods.find((item) => item.id === id);

            if (!item) {
                console.error('Item not found');
                return;
            }

            const newLikeState = !item.like;

            // 모든 상태 업데이트를 한 번에 처리
            set((state) => {
                // goods 업데이트
                const newGoods = state.goods.map((item) =>
                    item.id === id ? { ...item, like: newLikeState } : item
                );

                const newGoodsMain = state.goodsMain.map((item) =>
                    item.id === id
                        ? {
                              ...item,
                              like: newLikeState,
                              count: newLikeState
                                  ? (item.count || 0) + 1
                                  : Math.max(0, (item.count || 0) - 1),
                          }
                        : item
                );

                // wish 업데이트
                let newWish = [...state.wish];
                if (newLikeState) {
                    // 추가
                    const alreadyInWish = newWish.some((wishItem) => wishItem.id === id);
                    if (!alreadyInWish) {
                        newWish = [...newWish, { ...item, like: newLikeState }];
                    }
                } else {
                    // 제거
                    newWish = newWish.filter((wishItem) => wishItem.id !== id);
                }

                // localStorage 저장
                localStorage.setItem('goods', JSON.stringify(newGoods));
                localStorage.setItem('goodsMain', JSON.stringify(newGoodsMain));
                localStorage.setItem('wish', JSON.stringify(newWish));

                return {
                    goods: newGoods,
                    goodsMain: newGoodsMain,
                    wish: newWish,
                };
            });
        },
        isLike2WithWish: (id) => {
            const { goods, wish } = get();

            const item = goods.find((item) => item.id === id);

            if (!item) {
                console.error('Item not found');
                return;
            }

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
            });

            if (!item.like) {
                const alreadyInWish = wish.some((wishItem) => wishItem.id === id);

                if (!alreadyInWish) {
                    const add = [...wish, item];
                    localStorage.setItem('wish', JSON.stringify(add));
                    set({ wish: add });
                }
            }
        },
    };
});
