import React from 'react';
import { useGoodsStore } from '../../../../store';
import ExpectedGoodsItem from './ExpectedGoodsItem';
import './style.scss';

const ExpectedGoodsList = () => {
    const goodsMain2 = useGoodsStore((state) => state.goodsMain2);
    return (
        <ul className="goods_list_expected">
            {goodsMain2.map((item) => (
                <ExpectedGoodsItem key={item.id} item={item} />
            ))}
        </ul>
    );
};

export default ExpectedGoodsList;
