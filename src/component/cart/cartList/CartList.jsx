import React from 'react';
import { useGoodsStore } from '../../../store';
import CartItem from './CartItem';
import './style.scss';

const CartList = () => {
    const cart = useGoodsStore((state) => state.cart);
    return (
        <ul className="cart_list">
            {cart.map((item) => (
                <CartItem key={item.id} item={item} />
            ))}
        </ul>
    );
};

export default CartList;
