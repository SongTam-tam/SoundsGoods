import { useEffect, useState } from 'react';
import { usemainAlbumStore } from '../../../../store';
import './style.scss';

const LatestMusicItem = ({ item, isSelected }) => {
    const [minute, setMinute] = useState(0);
    const MStart = usemainAlbumStore((state) => state.MStart);

    useEffect(() => {
        setMinute(Math.floor(Math.random() * 60));
    }, []);

    return (
        <tr className={isSelected ? 'selected' : ''}>
            <td className="col-album-td">
                <img src={item.image} alt={item.title} />
            </td>
            <td className="col-title-td">
                <strong>{item.title}</strong>
                <p>{item.album}</p>
            </td>
            <td className="col-artist-td">
                <p>{item.artist}</p>
            </td>
            <td className="col-time-td">3:{minute < 10 ? `0${minute}` : minute}</td>
            <td className="col-release-td">{item.release}</td>
            <td
                className="col-play-td icon"
                onClick={() => MStart(item.id, 'latest')} // ✅ map 결과 클릭 시 재생
            >
                <img src="/images/streaming/icon_play.png" alt="play" />
            </td>
            <td className="col-like-td icon">
                <img src="/images/streaming/icon_heart.png" alt="like" />
            </td>
            <td className="col-fav-td icon">
                <img src="/images/streaming/icon_star.png" alt="favorite" />
            </td>
        </tr>
    );
};

export default LatestMusicItem;
