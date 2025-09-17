import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import artist_Info from '../../../assets/api/artist_info';
import Con3ArtistItem from './Con3ArtistItem';
// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Con3Artist = () => {
    const [artist, setArtist] = useState(artist_Info);
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();

    const onClick = () => {
        navigate('/streaming/top100');
    };

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 768); // 768px 이하를 모바일로 판단
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return (
        <div className="con3 inner">
            <h3>
                아티스트별 음악
                <Link to="artist">
                    <img src="/images/streaming/more.png" alt="" onClick={onClick} />
                </Link>
            </h3>
            {isMobile ? (
                <Swiper slidesPerView={4.8} spaceBetween={20} className="artist-swiper">
                    {artist.slice(0, 8).map((item) => (
                        <SwiperSlide className="artist-slide" key={item.id}>
                            <Con3ArtistItem data={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <ul className="artist-wrap">
                    {artist.slice(0, 8).map((item) => (
                        <Con3ArtistItem key={item.id} data={item} />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Con3Artist;
