import React from 'react';
import LimitedGoodsList from './limitGoodsList/LimitedGoodsList';
import './style.scss';
const LimitGoods = () => {
    return (
        <section className="limit_goods">
            <div className="limit_goods_title_p">
                <h2>한정판 예약 기간 임박 굿즈</h2>
                <p>한정판 굿즈를 만나볼 수 있는 마지막 기회</p>
            </div>
            <LimitedGoodsList />
        </section>
    );
};

export default LimitGoods;
