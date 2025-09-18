import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ArtistIGoodsItem = ({ item }) => {
    const navigate = useNavigate();
    const formattedPrice = item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    const onClick = () => {
        navigate(`/goods/${item.id}`);
    };
    const [like, setLike] = useState(false);

    return (
        <div className="artist-i-goods-item">
            <div className="artist-i-goods-img">
                <img src={item.imageM} />
                <p>
                    <img
                        src={
                            like
                                ? '/images/streaming/goods_heart_on.png'
                                : '/images/streaming/goods_heart.png'
                        }
                        alt="좋아요"
                        onClick={() => setLike(!like)}
                    />
                </p>
            </div>
            <div className="artist-i-goods-text" onClick={onClick}>
                <h3>{item.title}</h3>
                <h4>₩ {formattedPrice}</h4>
            </div>
        </div>
    );
};

export default ArtistIGoodsItem;
