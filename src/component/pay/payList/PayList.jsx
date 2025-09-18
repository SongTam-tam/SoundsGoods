import React from 'react';
import './style.scss'
import { useGoodsStore } from '../../../store';
import PayItem from './PayItem';
const PayList = () => {
    const payment = useGoodsStore(state=>state.payment)
    return (
        <ul className='payment_list'>
            {payment.map(item=><PayItem key={item.id} item={item}/>)}
        </ul>
    );
};

export default PayList;