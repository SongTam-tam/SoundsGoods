import React, { useEffect, useState } from 'react';
import './style.scss';
import mainPopupData from '../../../../assets/api/mainPopupData';
import PopupMainItem from './PopupMainItem';
const PopupMainList = () => {
    const today = new Date();
    const [width, setWidth] = useState(window.innerWidth);
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // 01~12
    const day = String(today.getDate()).padStart(2, '0'); // 01~31
    const data = mainPopupData.slice(0, 3);
    const formatted = `${year}-${month}-${day}`;
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <ul className="popup_right_list">
            {width > 1024
                ? mainPopupData.map((popup) => <PopupMainItem key={popup.id} popup={popup} />)
                : data.map((popup) => <PopupMainItem key={popup.id} popup={popup} />)}
        </ul>
    );
};

export default PopupMainList;
