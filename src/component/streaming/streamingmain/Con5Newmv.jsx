import { useState } from 'react';

const Con5Newmv = () => {
    const videos = [
        {
            id: 'video1',
            src: 'https://github.com/SongTam-tam/SoundsGoods_image/raw/main/videos/famous.mp4',
            title: 'FAMOUS',
            artist: 'ALLDAY PROJECT',
            date: '2025.6.16',
        },
        {
            id: 'video2',
            src: 'https://github.com/SongTam-tam/SoundsGoods_image/raw/main/videos/epikhigh.mp4',
            title: '미슐랭 Cypher',
            artist: '에픽하이(Epik High)',
            date: '2024.10.18',
        },
        {
            id: 'video3',
            src: 'https://github.com/SongTam-tam/SoundsGoods_image/raw/main/videos/neverendingstory.mp4',
            title: 'Never Ending Story',
            artist: '아이유(IU)',
            date: '2025.5.27',
        },
    ];

    // 각 비디오 상태 관리
    const [playingStates, setPlayingStates] = useState(
        videos.reduce((acc, v) => ({ ...acc, [v.id]: false }), {})
    );

    const handleClick = (id) => {
        setPlayingStates((prev) => {
            const newState = { ...prev, [id]: !prev[id] };

            // 실제 video element 재생/정지
            const videoEl = document.getElementById(id);
            if (videoEl) {
                if (newState[id]) videoEl.play();
                else videoEl.pause();
            }

            return newState;
        });
    };

    return (
        <div className="con5 inner">
            <h3>새로 나온 MUSIC VIDEO</h3>
            <div className="mv-visual-wrap">
                <div className="video">
                    <iframe
                        width="710"
                        height="400"
                        src="https://www.youtube.com/embed/CgCVZdcKcqY?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=CgCVZdcKcqY"
                        title="dd"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="text-wrap">
                    <strong>뛰어(JUMP)</strong>
                    <em>
                        BLACKPINK<span>발매일: 2025.09.02</span>
                    </em>
                    <p>
                        디지털 싱글 '뛰어(JUMP)'는 블랙핑크가 처음으로 선보이는
                        하드스타일(Hardstyle) 장르의 곡으로, 서부 영화의 한 장면을 연상케 하는
                        인상적인 기타 리프 인트로와 함께 시작된다.
                        <br />
                        <br />각 멤버의 개성이 담긴 보컬 탑 라인 위로 강렬한 비트와 예측 불가능한
                        훅이 어우러지며, 듣는 순간 도파민을 자극하는 중독적인 에너지를 발산한다.
                    </p>
                </div>
            </div>
            <ul className="newmv-wrap">
                {videos.map((v) => (
                    <li key={v.id}>
                        <div className="video-wrap">
                            <video width="444" height="250" id={v.id}>
                                <source src={v.src} type="video/mp4" />
                            </video>

                            {/* 버튼을 video-wrap 안으로 이동 */}
                            <button className="play-btn" onClick={() => handleClick(v.id)}>
                                <img
                                    src={
                                        playingStates[v.id]
                                            ? '/images/streaming/mv-pause-icon.png'
                                            : '/images/streaming/mv-play-icon.png'
                                    }
                                    alt={playingStates[v.id] ? 'Pause' : 'Play'}
                                    style={{ cursor: 'pointer' }}
                                />
                            </button>
                        </div>
                        <h4>{v.title}</h4>
                        <strong>{v.artist}</strong>
                        <p>{v.date}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Con5Newmv;
