import React from 'react';
import './style.scss'
import Payment from '../../component/pay/Payment';
const Pay = () => {
    return (
        <div id='pay'>
            <div className="inner">
                <h2 className='title'>주문 / 결제</h2>
                <Payment/>
            </div>
        </div>
    );
};

export default Pay;