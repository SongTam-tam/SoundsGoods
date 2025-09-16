import React from 'react';
import { useNavigate } from 'react-router-dom';

const ArtistIGoodsItem = ({ item }) => {
    const navigate = useNavigate();
    const formattedPrice = item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    const onClick = () => {
        navigate(`/goods/${item.id}`);
    };
    return (
        <div className="artist-i-goods-item" onClick={onClick}>
            <div className="artist-i-goods-img">
                <img src={item.imageM} />
                <p>
                    <img src="../../../../../public/images/streaming/goods_heart.png" alt="" />
                </p>
            </div>
            <div className="artist-i-goods-text">
                <h3>{item.title}</h3>
                <h4>{formattedPrice} 원</h4>
            </div>
        </div>
    );
};

export default ArtistIGoodsItem;
