import React, { useEffect } from 'react';
import goods from '../../assets/api/goods';
import WishItem from './WishItem';
import './style.scss';
import { useGoodsStore } from '../../store';
const WishList = () => {
    const { shuffl } = useGoodsStore();
    useEffect(() => {
        shuffl();
    }, []);
    const goodspush = useGoodsStore((state) => state.goodspush);
    return (
        <ul className="cart_wish_list">
            {goodspush.map((item) => (
                <WishItem key={item.id} item={item} />
            ))}
        </ul>
    );
};

export default WishList;
