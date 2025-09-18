import React from 'react';
import { usemainAlbumStore } from '../../../../store';
import './style.scss';
import ArtistMobileItem from './ArtistMobileItem';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
const ArtistMobileList = () => {
    const mainAlAtData = usemainAlbumStore((state) => state.mainAlAtData);
    const data = mainAlAtData.slice(0, 9);
    return (
        <div className="artist_list_main">
            <Swiper className="mySwiper" slidesPerView={3}>
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <ArtistMobileItem {...item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ArtistMobileList;
