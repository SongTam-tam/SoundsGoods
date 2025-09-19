// Top100MusicItem.jsx
import { useEffect, useState } from 'react';
import './style.scss';
import { usemainAlbumStore } from '../../../../store';

const Top100MusicItem = ({ item, rank, isSelected }) => {
    const [minute, setMinute] = useState(0);
    const [liked, setLiked] = useState(false);
    const [favorited, setFavorited] = useState(false);
    const MStart = usemainAlbumStore((state) => state.MStart); // ✅ MStart 가져오기

    useEffect(() => {
        setMinute(Math.floor(Math.random() * 60));
    }, []);

    return (
        <tr className={isSelected ? 'selected' : ''}>
            <td className="col-rank-td">{rank}</td>
            <td className="col-album-td">
                <img src={item.image} alt="" />
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
                onClick={() => MStart(item.id, 'top')} // ✅ 여기서 재생 실행
            >
                <img src="/images/streaming/icon_play.png" alt="play" />
            </td>
            {/* 하트 아이콘 */}
            <td className="col-like-td icon" onClick={() => setLiked((prev) => !prev)}>
                <img
                    src={
                        liked
                            ? '/images/streaming/icon_heart_on.png'
                            : '/images/streaming/icon_heart.png'
                    }
                    alt="like"
                />
            </td>

            {/* 별 아이콘 */}
            <td className="col-fav-td icon" onClick={() => setFavorited((prev) => !prev)}>
                <img
                    src={
                        favorited
                            ? '/images/streaming/icon_star_on.png'
                            : '/images/streaming/icon_star.png'
                    }
                    alt="favorite"
                />
            </td>
        </tr>
    );
};

export default Top100MusicItem;
