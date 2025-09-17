import './style.scss';
import { Link } from 'react-router-dom';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import ArtistIAlbumItemMobile from './ArtistIAlbumItemMobile';

const ArtistIAlbumMobile = ({ data }) => {
    return (
        <section id="artist-i-album-mobile">
            <div>
                <h2>
                    앨범
                    <Link to="">
                        <img src="/images/streaming/more.png" alt="" />
                    </Link>
                </h2>
            </div>
            <div className="artist-i-cover-mobile">
                <Swiper className="mySwiper" slidesPerView={3.2} spaceBetween={10}>
                    {data.album.map((item) => (
                        <SwiperSlide>
                            <ArtistIAlbumItemMobile key={item.id} item={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default ArtistIAlbumMobile;
