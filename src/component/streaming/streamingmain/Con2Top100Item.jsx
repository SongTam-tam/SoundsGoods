import { useState } from 'react';

const Con2Top100Item = ({ data }) => {
    const [isPlaying, setIsPlaying] = useState(false); // 기본: 정지 상태
    const handleClick = () => {
        setIsPlaying((prev) => !prev); // true/false 토글
    };
    return (
        <div className="rank">
            <li>
                <div className="img-wrap">
                    <strong>{data.id}</strong>
                    <img src={data.image} alt="" />
                    <button className="play-btn" onClick={handleClick}>
                        <img
                            className="img"
                            src={
                                isPlaying
                                    ? '/images/streaming/mv-pause-icon.png' // 재생 중 → pause 아이콘
                                    : '/images/streaming/mv-play-icon.png' // 정지 상태 → play 아이콘
                            }
                            alt={isPlaying ? 'Pause' : 'Play'}
                            style={{ cursor: 'pointer' }}
                        />
                    </button>
                </div>
                <h4>{data.title}</h4>
                <strong>{data.artist}</strong>
                <p>{data.release}</p>
            </li>
        </div>
    );
};

export default Con2Top100Item;
