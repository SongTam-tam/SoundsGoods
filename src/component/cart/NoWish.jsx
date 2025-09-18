import React from 'react';
import { useNavigate } from 'react-router-dom';

const NoWish = () => {
    const nav = useNavigate()
    return (
        <div className='noWish'>
        <img src="/images/cart/wish_list.png" alt="" />
        <p>장바구니가 비었어요</p>
        <button onClick={()=>nav('/goods')}>
            굿즈 보러가기
        </button>
    </div>
    );
};

export default NoWish;