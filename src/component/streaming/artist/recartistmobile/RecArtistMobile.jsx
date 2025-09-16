import { useEffect, useState } from 'react';
import RecArtistItemMobile from './RecArtistItemMobile';
import './style.scss';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

const RecArtistMobile = ({ data }) => {
    // const slideCount = 8;
    const [sliceStart, setSliceStart] = useState(0);
    useEffect(() => {
        if (data.length === 0) return;
        const maxStart = Math.max(0, data.length - 8);
        const start = Math.floor(Math.random() * (maxStart + 1));
        setSliceStart(start);
    }, [data]);
    return (
        <section id="rec-artist-mobile">
            <h2>
                추천 아티스트
                <Link to="">
                    <img src="/images/streaming/more.png" alt="더보기" />
                </Link>
            </h2>
            <div className="rec-artist-list-mobile">
                <Swiper
                    className="mySwiper"
                    slidesPerView={4.8}
                    spaceBetween={20}
                >
                    {data.slice(sliceStart, sliceStart + 8).map((item) => (
                        <SwiperSlide key={item.id}>
                            <RecArtistItemMobile item={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default RecArtistMobile;
