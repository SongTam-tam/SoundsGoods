import GenreArtistItemMobile from './GenreArtistItemMobile';
import './style.scss';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

const GenreArtistMobile = ({ data }) => {
    return (
        <section id="genre-artist-mobile">
            <h2>DANCE 대표 아티스트</h2>
            <div className="genre-artist-list-mobile">
                <Swiper
                    className="mySwiper"
                    slidesPerView={4.8}
                    spaceBetween={20}
                >
                    {data.singer.map((item, index) => (
                        <SwiperSlide>
                            <GenreArtistItemMobile key={index} item={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default GenreArtistMobile;
