import React from 'react';
import './style.scss';
import PopupSw from '../../component/popup/popupSwiper/PopupSw';
import Festival from '../../component/popup/festival/Festival';
import LimitPopup from '../../component/popup/limitPopup/LimitPopup';
import PopupMap from '../../component/popup/popupMap/PopupMap';
const Popup = () => {
    return (
        <div id="popup">
            <div className="inner">
                <PopupSw />
                <Festival />      
                <LimitPopup />
                <PopupMap />
            </div>
        </div>
    );
};

export default Popup;
