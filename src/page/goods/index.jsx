import GoodsProduct from '../../component/goods/goodsFilter/GoodsProduct';

import GoodsMain from '../../component/goods/goodsMain/GoodsMain';
import LimitGoods from '../../component/goods/imitGoods/LimitGoods';
import IveGoods from '../../component/goods/iveGoods/IveGoods';
import GoodsSideBar from '../../component/goods/sidebar/GoodsSideBar';
import './style.scss';
const Goods = () => {
    return (
        <div id="goods">
            <div className="inner">
                <GoodsSideBar />
                <GoodsMain />
                <IveGoods />
                <LimitGoods />
                <GoodsProduct />
            </div>
        </div>
    );
};

export default Goods;
