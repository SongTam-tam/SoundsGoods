import React, { useEffect, useState } from 'react';

const Search_MusicItem = ({ item }) => {
    const [minute, setMinute] = useState(0);

    useEffect(() => {
        const randomMinute = Math.floor(Math.random() * 60);
        setMinute(randomMinute);
    }, []);
    return (
        <tr>
            <td className="col-album-td">
                <img src={item.image} alt="" />
            </td>
            <td className="col-title-td">
                {item.title}
                <p>{item.album}</p>
            </td>
            <td className="col-artist-td">{item.artist}</td>
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

export default Search_MusicItem;
