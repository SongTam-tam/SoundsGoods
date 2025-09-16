import GenreArtistItem from './GenreArtistItemMobile';
import './style.scss';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

const GenreArtistMobile = () => {
    const slideCount = 5;
    return (
        <section id="genre-artist-mobile">
            <h2>DANCE 대표 아티스트</h2>
            <div className="genre-artist-list-mobile">
                <Swiper className="mySwiper" slidesPerView={4.8} spaceBetween={20}>
                    {Array(slideCount)
                        .fill(0)
                        .map((_, i) => (
                            <SwiperSlide key={i}>
                                <GenreArtistItem />
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </section>
    );
};

export default GenreArtistMobile;
