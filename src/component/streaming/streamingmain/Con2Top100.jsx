import { useState, useEffect } from 'react';
import top_1_50 from '../../../assets/api/musicComponents/top_1_50';
import Con2Top100Item from './Con2Top100Item';
import { Link } from 'react-router-dom';
// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

const Con2Top100 = () => {
    const [data, setData] = useState(top_1_50);
    const [isMobile, setIsMobile] = useState(false);

    // 화면 크기 감지
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 768); // 768px 이하를 모바일로 설정
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return (
        <div className="con2 inner">
            <h3>
                인기 차트 TOP 50
                <Link to="top100">
                    <img src="/images/streaming/more.png" alt="" />
                </Link>
            </h3>

            {isMobile ? (
                // 모바일: Swiper 사용
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={10}
                    slidesPerView={3.33} // 2개 완전히 보이고, 다음 슬라이드 일부 보임
                    className="top100-swiper"
                >
                    {data.slice(0, 7).map((item) => (
                        <SwiperSlide width={100} height={100} key={item.id}>
                            <Con2Top100Item data={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                // 데스크톱/태블릿: 일반 ul/li 사용
                <ul className="top100-wrap">
                    {data.slice(0, 7).map((item) => (
                        <Con2Top100Item key={item.id} data={item} />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Con2Top100;
