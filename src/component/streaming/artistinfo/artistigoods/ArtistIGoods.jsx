import { useEffect, useState } from 'react';
import ArtistIGoodsItem from './ArtistIGoodsItem';
import './style.scss';
import { Link } from 'react-router-dom';

const ArtistIGoods = ({ data }) => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const visibleGoods =
        width > 1024 ? data?.goods?.slice(0, 5) : data?.goods?.slice(0, 3);

    return (
        <section id="artist-i-goods">
            <div>
                <h2>
                    {data?.artist
                        ? `${data.artist} 굿즈 예매하기`
                        : '아티스트 정보 없음'}
                    <Link to="">
                        <img
                            src="/images/streaming/more_color.png"
                            alt="더보기"
                        />
                    </Link>
                </h2>
            </div>
            <div className="artist-i-goods-list">
                {visibleGoods && visibleGoods.length > 0 ? (
                    visibleGoods.map((item, index) => (
                        <ArtistIGoodsItem key={index} item={item} />
                    ))
                ) : (
                    <div className="no-goods">등록된 굿즈가 없습니다.</div>
                )}
            </div>
        </section>
    );
};

export default ArtistIGoods;
