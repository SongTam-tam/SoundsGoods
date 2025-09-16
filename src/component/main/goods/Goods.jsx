import React, { useEffect, useState } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import LimitGoodsList from './limitGoodsList/LimitGoodsList';
import ExpectedGoodsList from './expectedGoods/ExpectedGoodsList';
import GoodsCategory from './goodsCategory/GoodsCategory';

const Goods = () => {
    const today = new Date();
    const [width, setWidth] = useState(window.innerWidth);
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // 01~12
    const day = String(today.getDate()).padStart(2, '0'); // 01~31

    const formatted = `${year}-${month}-${day}`;
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <section id="goods">
            <div className="inner">
                <h2 className="goods_title">더 다양한 다양한 굿즈를 SOUNDSGOODS에서</h2>
                <GoodsCategory />
                <div className="limit_goods_title">
                    <h2>한정판 예약 기간 임박 굿즈</h2>
                    <p>한정판 굿즈를 만나볼 수 있는 마지막 기회</p>
                </div>
                <LimitGoodsList />
                <div className="expected_goods_title">
                    <h2>판매 예정</h2>
                    <p>아티스트와의 함께할 순간을 더 특별하게</p>
                </div>
                <ExpectedGoodsList />
            </div>
        </section>
    );
};

export default Goods;
