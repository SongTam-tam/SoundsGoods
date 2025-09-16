import { useEffect, useState } from 'react';
import './style.scss';

const GenreMusicItem = ({ item, isSelected }) => {
    const [minute, setMinute] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

    useEffect(() => {
        const randomMinute = Math.floor(Math.random() * 60);
        setMinute(randomMinute);
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
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
            <td className="col-play-td icon">
                <img src="/images/streaming/icon_play.png" alt="" />
            </td>
            <td className="col-like-td icon">
                <img src="/images/streaming/icon_heart.png" alt="" />
            </td>
            <td className="col-fav-td icon">
                <img src="/images/streaming/icon_star.png" alt="" />
            </td>
        </tr>
    );
};

export default GenreMusicItem;
