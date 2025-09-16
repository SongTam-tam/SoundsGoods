import React, { useEffect, useMemo, useState } from 'react';
import { useGoodsStore } from '../../../../store';
import './style.scss';
import LimitedGoodsItem from './LimitedGoodsItem';
const LimitedGoodsList = () => {
    const { shuffl } = useGoodsStore();
    useEffect(() => {
        shuffl();
    }, []);
    const goods = useGoodsStore((state) => state.goods);
    const goodsMain = useGoodsStore((state) => state.goodsMain);

    return (
        <ul className="goods_list_limit_p">
            {goodsMain.map((item) => (
                <LimitedGoodsItem key={item.id} item={item} />
            ))}
        </ul>
    );
};

export default LimitedGoodsList;
