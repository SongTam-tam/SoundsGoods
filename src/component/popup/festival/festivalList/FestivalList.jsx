import React from 'react';
import './style.scss';
import FestivalItem from './FestivalItem';

const popupFestival = [
    {
        id: 1,
        img: '/images/popup/main_con_03.jpg',
        title: 'COACHELLA',
        mark: '캘리포니아 | 코첼라',
        release: '2025. 09~2025. 10',
    },
    {
        id: 2,
        img: '/images/popup/pop_con2_02.jpg',
        title: '2025 서울재즈페스티벌',
        mark: '서울 올림픽공원 | 페스티벌',
        release: '2025. 10. 01~10. 20',
    },
    {
        id: 3,
        img: '/images/popup/pop_con2_03.jpg',
        title: 'MAMA',
        mark: '홍콩 카이탁 스타디움 | 마마 어워즈',
        release: '2025. 12. 01~12. 08',
    },
    {
        id: 4,
        img: '/images/popup/pop_con2_04.jpg',
        title: 'THE AIR HOUSE',
        mark: '추후공개 | 페스티벌',
        release: '2025. 10. 01~10. 30',
    },
    {
        id: 5,
        img: '/images/popup/pop_con2_05.jpg',
        title: '2025 EDC KOREA',
        mark: '인천 인스파이어 리조트 | 페스티벌',
        release: '2025. 07. 01~08. 16',
    },
    {
        id: 6,
        img: '/images/popup/pop_con2_06.jfif',
        title: '대구힙합페스티벌',
        mark: '대구 | 페스티벌',
        release: '2025. 07. 01~8. 30',
    },
];

const FestivalList = () => {
    return (
        <ul className="festival_list">
            {popupFestival.map((item) => (
                <FestivalItem key={item.id} item={item} />
            ))}
        </ul>
    );
};

export default FestivalList;
