import React from 'react';
import './style.scss'
import Payment from '../../component/pay/Payment';
import { useGoodsStore } from '../../store';
const Pay = () => {
     const payment = useGoodsStore(state=>state.payment)
    return (
        <div id='pay'>
            <div className="inner">
                <h2 className='title'>주문 / 결제</h2>
               {payment.length > 0 && <Payment/>}
            </div>
        </div>
    );
};

export default Pay;