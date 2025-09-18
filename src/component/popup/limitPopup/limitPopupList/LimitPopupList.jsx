import React from 'react';
import './style.scss';
import LimitPopupItem from './LimitPopupItem';

const limit = [
    {
        id: 1,
        title: 'Spotify X Seventeen ‘Carat Station Seoul’',
        release: '25. 08. 30 - 25. 10. 31',
        mark: '건국대',
        img: '/images/popup/pop_con3_01.jpg',
    },
    {
        id: 2,
        title: 'JIMIN ‘MUSE’ 앨범 테마',
        release: '25. 09. 01 - 25. 09. 30',
        mark: '강남',
        img: '/images/popup/pop_con3_02.jpg',
    },
    {
        id: 3,
        title: 'Zeroni Home Party Pop-Up',
        release: '25. 08. 01 - 25. 09. 30',
        mark: '홍대',
        img: '/images/popup/pop_con3_03.jpg',
    },
    {
        id: 4,
        title: 'Stray Kids × SKZOO 팝업스토어 ‘The Victory’',
        release: '25. 08. 29 - 25. 09. 30',
        mark: '여의도',
        img: '/images/popup/pop_con3_04.jpg',
    },
    {
        id: 5,
        title: 'aespa “Armageddon: The Mystery Circle”',
        release: '25. 07. 30 - 25. 08. 30',
        mark: '왕십리',
        img: '/images/popup/pop_con3_05.jpg',
    },
    {
        id: 6,
        title: 'The Boyz – “Lucky Little Things”',
        release: '25. 09. 03 - 25. 09. 06',
        mark: '성수동',
        img: '/images/popup/pop_con3_06.jpg',
    },
];

const LimitPopupList = () => {
    return (
        <ul className="limit_popup_list">
            {limit.map((item) => (
                <LimitPopupItem key={item.id} {...item} />
            ))}
        </ul>
    );
};

export default LimitPopupList;
