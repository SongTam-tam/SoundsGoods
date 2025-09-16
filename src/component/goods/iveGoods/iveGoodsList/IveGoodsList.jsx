import React from 'react';
import { useGoodsStore } from '../../../../store';
import IveGoodsItem from './IveGoodsItem';
import './style.scss';
const IveGoodsList = () => {
    const iveGoods = useGoodsStore((state) => state.iveGoods);

    return (
        <ul className="ive_goods_list">
            {iveGoods.map((ive) => (
                <IveGoodsItem key={ive.id} {...ive} />
            ))}
        </ul>
    );
};

export default IveGoodsList;
