import React, { useEffect } from 'react';
import goods from '../../assets/api/goods';
import WishItem from './WishItem';
import './style.scss';
import { useGoodsStore } from '../../store';
const WishList = () => {
    const wish = useGoodsStore((state) => state.wish);
    return (
        <ul className="cart_wish_list">
            {wish.map((item) => (
                <WishItem key={item.id} item={item} />
            ))}
        </ul>
    );
};

export default WishList;
