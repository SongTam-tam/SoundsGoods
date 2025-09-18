import { useEffect, useState } from 'react';

const ArtistITopMusicItem = ({ item }) => {
    const [minute, setMinute] = useState(0);
    const [like, setLike] = useState(false);
    const [fav, setFav] = useState(false);

    useEffect(() => {
        const randomMinute = Math.floor(Math.random() * 60);
        setMinute(randomMinute);
    }, []);
    return (
        <tr>
            <td className="artist-music-1">
                <img src={item.image || '/images/streaming/album.png'} alt={item.title} />
            </td>
            <td className="artist-music-2">
                <strong>{item.title}</strong>
                <p>{item.album}</p>
            </td>
            <td className="artist-music-3">3:{minute < 10 ? `0${minute}` : minute}</td>
            <td className="artist-music-4 icon">
                <img src="/images/streaming/icon_play.png" alt="재생" />
            </td>
            <td className="artist-music-5 icon">
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
            <td className="artist-music-6 icon">
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

export default ArtistITopMusicItem;
