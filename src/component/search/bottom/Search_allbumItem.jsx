import React, { useEffect, useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import '../bottom/style.scss';
const Search_allbumItem = ({ item }) => {
    const [heart, setHeart] = useState(0);
    const [liked, setLiked] = useState(false);

    const onClick = () => {
        setLiked((prev) => !prev);
        setHeart((prev) => (liked ? prev - 1 : prev + 1));
    };

    useEffect(() => {
        const randomHeart = Math.floor(Math.random() * 1000000);
        setHeart(randomHeart);
    }, []);

    return (
        <div className="allbumItem">
            <img src={item.image} alt="" />
            <div className="allbunInfo">
                <div className="allbumtitle">
                    <h2>
                        {item.title} <br />
                        {item.album}
                    </h2>
                </div>
                <div className="allbumDate" onClick={onClick}>
                    <h3>
                        {item.release} | {liked ? <FaHeart color="red" /> : <FaRegHeart />}
                        {heart.toLocaleString()}
                    </h3>
                </div>
                <div className="allbumListen">
                    <p>앨범 듣기</p>
                </div>
            </div>
        </div>
    );
};

export default Search_allbumItem;
