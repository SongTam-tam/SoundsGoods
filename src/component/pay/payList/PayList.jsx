import React from 'react';
import './style.scss'
import { useGoodsStore } from '../../../store';
import PayItem from './PayItem';
const PayList = () => {
    const cart = useGoodsStore(state=>state.cart)
    return (
        <ul className='payment_list'>
            {cart.map(item=><PayItem key={item.id} item={item}/>)}
        </ul>
    );
};

export default PayList;