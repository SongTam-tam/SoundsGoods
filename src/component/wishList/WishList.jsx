import React from 'react';
import goods from '../../assets/api/goods';
import WishItem from './WishItem';
import './style.scss';
const WishList = () => {
    const data = goods.slice(2, 4);
    return (
        <ul className="cart_wish_list">
            {data.map((item) => (
                <WishItem key={item.id} item={item} />
            ))}
        </ul>
    );
};

export default WishList;
