import ArtistIGoodsItem from './ArtistIGoodsItem';
import './style.scss';
import { Link } from 'react-router-dom';

const ArtistIGoods = ({ data }) => {
    return (
        <section id="artist-i-goods">
            <div>
                <h2>
                    {data?.artist || '아티스트 정보 없음'}
                    <Link to="">
                        <img src="/images/streaming/more_color.png" alt="더보기" />
                    </Link>
                </h2>
            </div>
            <div className="artist-i-goods-list">
                {data?.goods && data.goods.length > 0 ? (
                    data.goods.map((item, index) => <ArtistIGoodsItem key={index} item={item} />)
                ) : (
                    <div className="no-goods">등록된 굿즈가 없습니다.</div>
                )}
            </div>
        </section>
    );
};

export default ArtistIGoods;
