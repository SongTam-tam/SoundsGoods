import RecArtistItemMobile from './RecArtistItemMobile';
import './style.scss';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

const RecArtistMobile = () => {
    const slideCount = 8;
    return (
        <section id="rec-artist-mobile">
            <h2>
                추천 아티스트
                <Link to="">
                    <img src="/images/streaming/more.png" alt="" />
                </Link>
            </h2>
            <div className="rec-artist-list-mobile">
                <Swiper className="mySwiper" slidesPerView={4.8} spaceBetween={20}>
                    {Array(slideCount)
                        .fill(0)
                        .map((_, i) => (
                            <SwiperSlide key={i}>
                                <RecArtistItemMobile />
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </section>
    );
};

export default RecArtistMobile;
