import React from 'react';
import './style.scss';
const PopupMap = () => {
    return (
        <div className="popup_map">
            <div className="left_map">
                <div className="popup_search">
                    <p className="more_title">
                        <img src="/images/icons/right.png" alt="" />
                        <strong>더 많은 팝업을 찾아보세요</strong>
                    </p>
                </div>
                <div className="map_pic"></div>
            </div>

            <div className="right_pic"></div>
        </div>
    );
};

export default PopupMap;
