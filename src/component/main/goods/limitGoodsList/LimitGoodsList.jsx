import React, { useEffect, useMemo, useState } from 'react';
import { useGoodsStore } from '../../../../store';
import LimitGoodsItem from './LimitGoodsItem';
import './style.scss';
const LimitGoodsList = () => {
    const { shuffl } = useGoodsStore();
    useEffect(() => {
        shuffl();
    }, []);
    const goods = useGoodsStore((state) => state.goods);
    const goodsMain = useGoodsStore((state) => state.goodsMain);

    return (
        <ul className="goods_list_limit">
            {goodsMain.map((item) => (
                <LimitGoodsItem key={item.id} item={item} />
            ))}
        </ul>
    );
};

export default LimitGoodsList;
