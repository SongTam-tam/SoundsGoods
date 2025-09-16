import React from 'react';
import './style.scss';
import PopupSw from '../../component/popup/popupSwiper/PopupSw';
import Festival from '../../component/popup/festival/Festival';
import LimitPopup from '../../component/popup/limitPopup/LimitPopup';
const Popup = () => {
    return (
        <div id="popup">
            <div className="inner">
                <PopupSw />
                <Festival />
                <LimitPopup />
            </div>
        </div>
    );
};

export default Popup;
