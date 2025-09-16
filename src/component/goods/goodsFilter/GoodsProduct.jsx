import GoodsFilter from './goodsFilter/GoodsFilter';
import GoodsList from './goodsList/GoodsList';
import './style.scss';
const GoodsProduct = () => {
    return (
        <section className="goods_product_filter">
            <h2 className="goods_title_p">더 다양한 다양한 굿즈를 SOUNDSGOODS에서</h2>
            <GoodsFilter />
            <h2 className="goodsList_title_p">ALL</h2>
            <GoodsList />
        </section>
    );
};

export default GoodsProduct;
