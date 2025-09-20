import { useState, useEffect } from 'react';

const Con1Latest = () => {
    const videos = [
        {
            id: 'con1-video1',
            src: 'https://github.com/SongTam-tam/SoundsGoods_image/raw/main/videos/hoshinogen.mp4',
            title: '2 (feat. Lee Youngji)',
            artist: 'Gen Hoshino',
            date: '2025.9.15',
        },
        {
            id: 'con1-video2',
            src: 'https://github.com/SongTam-tam/SoundsGoods_image/raw/main/videos/ziont.mp4',
            title: 'Heroine',
            artist: '자이언티 (Zion.T)',
            date: '2025.9.5',
        },
        {
            id: 'con1-video3',
            src: 'https://github.com/SongTam-tam/SoundsGoods_image/raw/main/videos/jaessbee.mp4',
            title: 'SHUT THAT',
            artist: '재쓰비 (JAESSBEE)',
            date: '2025.8.15',
        },
    ];

    // 화면 크기 상태 관리
    const [isMobile, setIsMobile] = useState(false);

    // 각 비디오 상태 관리
    const [playingStates, setPlayingStates] = useState(
        videos.reduce((acc, v) => ({ ...acc, [v.id]: false }), {})
    );

    // 화면 크기 감지
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 393);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

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

    // 393px 이하에서는 2개만, 그 이상에서는 모든 비디오 표시
    const displayVideos = isMobile ? videos.slice(0, 2) : videos;

    return (
        <div className="con1 inner">
            <h3>지금 뜨고 있는 VIDEO</h3>
            <ul className="latest-wrap">
                {displayVideos.map((v) => (
                    <li key={v.id}>
                        <div className="video-wrap">
                            <video id={v.id}>
                                <source src={v.src} type="video/mp4" />
                            </video>

                            <button className="play-btn" onClick={() => handleClick(v.id)}>
                                <img
                                    src={
                                        playingStates[v.id]
                                            ? '/images/streaming/mv-pause-icon.png'
                                            : '/images/streaming/mv-play-icon.png'
                                    }
                                    alt={playingStates[v.id] ? 'Pause' : 'Play'}
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

export default Con1Latest;
