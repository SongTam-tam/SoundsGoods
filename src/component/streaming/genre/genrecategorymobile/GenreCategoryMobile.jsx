import './style.scss';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

const GenreCategoryMobile = () => {
    const genres = [
        { name: 'DANCE', img: '/images/streaming/genre_dance_s.jpg' },
        { name: 'JAZZ', img: '/images/streaming/genre_jazz_s.jpg' },
        { name: 'ROCK', img: '/images/streaming/genre_rock_s.jpg' },
        { name: 'BALLAD', img: '/images/streaming/genre_ballad_s.jpg' },
        { name: 'POP', img: '/images/streaming/genre_pop_s.jpg' },
        { name: 'HIPHOP', img: '/images/streaming/genre_hiphop_s.jpg' },
        { name: 'OST', img: '/images/streaming/genre_ost_s.jpg' },
        { name: 'INDIE', img: '/images/streaming/genre_indie_s.jpg' },
    ];
    return (
        <section id="genre-category-mobile">
            <h2>
                장르별 음악
                <Link to="">
                    <img src="/images/streaming/more.png" alt="" />
                </Link>
            </h2>
            <div className="genre-category-list-mobile">
                <Swiper className="mySwiper" spaceBetween={16} slidesPerView={2.5}>
                    {genres.map((genre) => (
                        <SwiperSlide key={genre.name}>
                            <div className="genre-sub-img-mobile">
                                <img src={genre.img} alt={genre.name} />
                                <span>{genre.name}</span>
                            </div>
                            <p>{genre.name}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default GenreCategoryMobile;
