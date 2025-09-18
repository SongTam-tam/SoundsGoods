import React from 'react';
import { useNavigate } from 'react-router-dom';

const NoCart = () => {
    const nav = useNavigate()
    return (
        <div className='noCart'>
            <img src="/images/cart/cart.png" alt="" />
            <p>장바구니가 비었어요</p>
            <button onClick={()=>nav('/goods')}>
                굿즈 보러가기
            </button>
        </div>
    );
};

export default NoCart;