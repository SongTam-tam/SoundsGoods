import React from 'react';
import ShoppingCart from '../../component/cart/ShoppingCart';
import './style.scss';
import WishList from '../../component/wishList/WishList';
import { useGoodsStore } from '../../store';
import NoCart from '../../component/cart/NoCart';
import NoWish from '../../component/cart/NoWish';
const Cart = () => {
    const cart = useGoodsStore((state) => state.cart);
    const wish = useGoodsStore((state) => state.wish);
    return (
        <div id="cart">
            <div className="inner">
                <h2 className="cart_co cart_title">장바구니</h2>
                {cart.length > 0 ? <ShoppingCart /> : <NoCart/>}
                <h2 className="cart_co wish_goods_title">관심 굿즈</h2>
                {wish.length > 0 ? <WishList /> : <NoWish/>}
            </div>
        </div>
    );
};

export default Cart;
