import { useEffect, useState } from 'react';
import { usemainAlbumStore } from '../../../../store';

import './style.scss';

const GenreMusicItem = ({ item, isSelected }) => {
    const [minute, setMinute] = useState(0);
    const [like, setLike] = useState(false);
    const [fav, setFav] = useState(false);
    const MStart = usemainAlbumStore((state) => state.MStart); // ✅ MStart 가져오기
    const isMobile = window.innerWidth <= 768;

    useEffect(() => {
        const randomMinute = Math.floor(Math.random() * 60);
        setMinute(randomMinute);
    }, []);

    return (
        <tr className={isSelected ? 'selected' : ''}>
            <td className="col-album-td">
                <img src={item.image} alt="" />
            </td>
            <td className="col-title-td">
                <strong>{item.title}</strong>
                <p>{isMobile ? item.artist : item.album}</p>
            </td>
            <td className="col-artist-td">
                <p>{item.artist}</p>
            </td>
            <td className="col-time-td">3:{minute < 10 ? `0${minute}` : minute}</td>
            <td className="col-release-td">{item.release}</td>
            <td
                className="col-play-td icon"
                onClick={() => MStart(item.id, 'genre')} // ✅ 여기서 재생 실
            >
                <img src="/images/streaming/icon_play.png" alt="" />
            </td>
            <td className="col-like-td icon">
                <img
                    src={
                        like
                            ? '/images/streaming/icon_heart_on.png'
                            : '/images/streaming/icon_heart.png'
                    }
                    alt="좋아요"
                    onClick={() => setLike(!like)}
                />
            </td>
            <td className="col-fav-td icon">
                <img
                    src={
                        fav
                            ? '/images/streaming/icon_star_on.png'
                            : '/images/streaming/icon_star.png'
                    }
                    alt="찜하기"
                    onClick={() => setFav(!fav)}
                />
            </td>
        </tr>
    );
};

export default GenreMusicItem;
