import React, { useEffect, useState } from 'react';
import popupData from '../../../assets/api/mapData'
import './style.scss';
import MapList from './mapList/MapList';
const PopupMap = () => {
    const [data,setData] = useState(popupData)
    useEffect(() => {
        // SDK가 로드됐는지 확인
        if (window.kakao && window.kakao.maps) {
          const container = document.getElementById('map');
          const options = {
            center: new window.kakao.maps.LatLng(37.5253019, 126.9255316),
            level: 5,
          };
          new window.kakao.maps.Map(container, options);
        }
      }, []);
    return (
        <div className="popup_map">
            <div className="left_map">
                <div className="popup_search">
                    <p className="more_title">
                        <img src="/images/icons/right.png" alt="" />
                        <strong>더 많은 팝업을 찾아보세요</strong>
                    </p>
                    <MapList data={data}/>
                </div>
                <div className="map_pic">
                    <div id="map"></div>
                </div>
            </div>

            <div className="right_pic"></div>
        </div>
    );
};

export default PopupMap;
