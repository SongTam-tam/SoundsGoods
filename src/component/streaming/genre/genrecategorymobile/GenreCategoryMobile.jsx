import './style.scss';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link, useNavigate } from 'react-router-dom';

const GenreCategoryMobile = ({ allGenres, selectedGenre, onSelect }) => {
    const navigate = useNavigate();
    return (
        <section id="genre-category-mobile">
            <h2>장르별 음악</h2>
            <div className="genre-category-list-mobile">
                <Swiper className="mySwiper" spaceBetween={16} slidesPerView={2.5}>
                    {allGenres?.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="genre-sub-img-mobile"
                                onClick={() => {
                                    onSelect(item);
                                    navigate(`/streaming/genre/${item.genre}`, {
                                        state: item,
                                    });
                                }}
                            >
                                <img
                                    src={`/images/streaming/genre_${item.genre.toLowerCase()}_s.jpg`}
                                    alt={item.genre}
                                />
                                <span>{item.genre}</span>
                            </div>
                            <p>{item.genre}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default GenreCategoryMobile;
