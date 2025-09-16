import React from 'react';

import './style.scss';
import { useNavigate } from 'react-router-dom';
const Search_goodsItem = ({ item }) => {
    const navigate = useNavigate();
    const onClick = () => {
        navigate(`/goods/${item.id}`);
    };
    return (
        <div className="GoodsItem" onClick={onClick}>
            <img src={item.imageM} alt="" />
            <div className="heartbox">
                <img src="/public/images/icons/heart.png" alt="" />
            </div>
            <div className="GoodsInfo">
                <div className="GoodsPrice">
                    <h2>{item.title}</h2> <p>₩{item.price.toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
};

export default Search_goodsItem;
