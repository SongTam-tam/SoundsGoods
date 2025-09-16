import React from 'react';
import PopupBtnItem from './PopupBtnItem';
import './style.scss';
const btn = [
    {
        id: 1,
        bt: '성수',
    },
    {
        id: 2,
        bt: '여의도',
    },
    {
        id: 3,
        bt: '홍대 / 신촌',
    },
    {
        id: 4,
        bt: '강남',
    },
    {
        id: 5,
        bt: '잠실',
    },
    {
        id: 6,
        bt: '대구',
    },
    {
        id: 7,
        bt: '울산',
    },
    {
        id: 8,
        bt: '경기 / 인천',
    },
    {
        id: 9,
        bt: '경상권',
    },
];
const PopupBtnList = () => {
    return (
        <ul className="btn_ul">
            {btn.map((item) => (
                <PopupBtnItem key={item.id} {...item} />
            ))}
        </ul>
    );
};

export default PopupBtnList;
