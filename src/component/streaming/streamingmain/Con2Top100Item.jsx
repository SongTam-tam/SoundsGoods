// Con2Top100Item.jsx
import { useState } from 'react';
import { usemainAlbumStore } from '../../../store';

const Con2Top100Item = ({ data, type }) => {
    const { MStart, MStop } = usemainAlbumStore();
    const [isPlaying, setIsPlaying] = useState(false);

    const handleClick = () => {
        if (isPlaying) {
            // 재생 중이면 일시정지
            MStop(data.id); // 필요 시 스토어에서 정지 함수 호출
            setIsPlaying(false);
        } else {
            // 정지 상태면 재생
            MStart(data.id, type); // type 전달로 topData / mainAlAtData 구분
            setIsPlaying(true);
        }
    };

    return (
        <li className="rank">
            <div className="img-wrap">
                <strong>{data.id}</strong>
                <img src={data.image} alt="" />
                <button className="play-btn" onClick={handleClick}>
                    <img
                        className="img"
                        src={
                            isPlaying
                                ? '/images/streaming/mv-pause-icon.png'
                                : '/images/streaming/mv-play-icon.png'
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
    );
};

export default Con2Top100Item;
