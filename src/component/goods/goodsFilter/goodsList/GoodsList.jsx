import React, { useEffect } from 'react';
import { useGoodsStore } from '../../../../store';
import GoodsItem from './GoodsItem';
import './style.scss';

const GoodsList = () => {
    const goods = useGoodsStore((state) => state.goods);

    return (
        <ul className="goods_page_goods_list">
            {goods.map((goods) => (
                <GoodsItem key={goods.id} goods={goods} />
            ))}
        </ul>
    );
};

export default GoodsList;
