import { useNavigate } from 'react-router-dom';
import './style.scss';

const ArtistGoodsItem = ({ item }) => {
    const navigate = useNavigate();

    const formattedPrice = item?.price
        ? item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        : null;

    const onClick = () => {
        navigate(`/goods/${item?.id || '#'}`);
    };

    return (
        <div className="artist-goods-item">
            <div className="goods-img" onClick={onClick}>
                <img
                    src={item?.imageM || '/images/streaming/goods_placeholder.png'}
                    alt={item?.title || '상품 이미지 없음'}
                />
                <p>

                    <img src="/images/streaming/goods_heart.png" alt="좋아요" />

                    <img src="/images/streaming/goods_heart.png" alt="" />

                </p>
            </div>
            <div className="artist-goods-text">
                <h3>{item?.title || '상품 정보 없음'}</h3>
                <h4>₩ {formattedPrice || '가격 정보 없음'}</h4>
            </div>
        </div>
    );
};

export default ArtistGoodsItem;
