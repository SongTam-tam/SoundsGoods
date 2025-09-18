import { useEffect, useState } from 'react';
import ArtistGoodsItem from './ArtistGoodsItem';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import goods from '../../../../assets/api/goods';

const ArtistGoods = () => {
    const [goodsData] = useState(goods);
    const [sliceStart, setSliceStart] = useState(0);
    const [width, setWidth] = useState(window.innerWidth);
    const navigate = useNavigate();
    const onClick = () => {
        navigate(`/goods`);
    };

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // 랜덤으로 5개 보여주는 함수 // 굿즈 갯수 추가
    useEffect(() => {
        const itemsToShow = width <= 1024 ? 3 : 5;
        const maxStart = goodsData.length - itemsToShow;
        const start = Math.floor(Math.random() * (maxStart + 1));
        setSliceStart(start);
    }, [goodsData, width]);
    const itemsToShow = width <= 1024 ? 3 : 5;

    return (
        <section id="artist-goods">
            <div>
                <h2>
                    새로 나온 아티스트 굿즈
                    <img src="/images/streaming/more_color.png" alt="" onClick={onClick} />
                </h2>
            </div>
            <div className="artist-goods-list">
                {goodsData.slice(sliceStart, sliceStart + itemsToShow).map((item) => (
                    <ArtistGoodsItem key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
};

export default ArtistGoods;
