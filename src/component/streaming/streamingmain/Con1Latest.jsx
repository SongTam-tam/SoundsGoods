import { useState } from 'react';

const Con1Latest = () => {
    const [isPlaying, setIsPlaying] = useState(false); // 기본: 정지 상태
    const handleClick = () => {
        setIsPlaying((prev) => !prev); // true/false 토글
    };
    return (
        <div className="con-inner">
            <h3>지금 뜨고 있는 VIDEO</h3>
            <ul className="latest-wrap">
                <li>
                    <img src="" alt="" />
                    <button className="play-btn" onClick={handleClick}>
                        <img
                            src={
                                isPlaying
                                    ? '/images/streaming/mv-pause-icon.png' // 재생 중 → pause 아이콘
                                    : '/images/streaming/mv-play-icon.png' // 정지 상태 → play 아이콘
                            }
                            alt={isPlaying ? 'Pause' : 'Play'}
                            style={{ cursor: 'pointer' }}
                        />
                    </button>
                    <h4>Album Name</h4>
                    <strong>Artist Name</strong>
                    <p>2025.09.08</p>
                </li>
                <li>
                    <img src="" alt="" />
                    <button className="play-btn" onClick={handleClick}>
                        <img
                            src={
                                isPlaying
                                    ? '/images/streaming/mv-pause-icon.png' // 재생 중 → pause 아이콘
                                    : '/images/streaming/mv-play-icon.png' // 정지 상태 → play 아이콘
                            }
                            alt={isPlaying ? 'Pause' : 'Play'}
                            style={{ cursor: 'pointer' }}
                        />
                    </button>
                    <h4>Album Name</h4>
                    <strong>Artist Name</strong>
                    <p>2025.09.08</p>
                </li>
                <li>
                    <img src="" alt="" />
                    <button className="play-btn" onClick={handleClick}>
                        <img
                            src={
                                isPlaying
                                    ? '/images/streaming/mv-pause-icon.png' // 재생 중 → pause 아이콘
                                    : '/images/streaming/mv-play-icon.png' // 정지 상태 → play 아이콘
                            }
                            alt={isPlaying ? 'Pause' : 'Play'}
                            style={{ cursor: 'pointer' }}
                        />
                    </button>
                    <h4>Album Name</h4>
                    <strong>Artist Name</strong>
                    <p>2025.09.08</p>
                </li>
            </ul>
        </div>
    );
};

export default Con1Latest;
