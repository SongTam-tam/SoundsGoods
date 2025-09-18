import React, { useEffect, useState, useRef } from 'react';
import popupData from '../../../assets/api/mapData';
import './style.scss';
import MapList from './mapList/MapList';

const PopupMap = () => {
    const [data, setData] = useState(popupData);
    const [bigData, setBigData] = useState(popupData[0]);
    const [map, setMap] = useState(null);
    const [markers, setMarkers] = useState([]);
    const mapRef = useRef(null);

    useEffect(() => {
        if (window.kakao && window.kakao.maps) {
            const container = document.getElementById('map');
            const options = {
                center: new window.kakao.maps.LatLng(37.5253019, 126.9255316),
                level: 5,
            };
            
            const newMap = new window.kakao.maps.Map(container, options);
            setMap(newMap);
            
     
            createMarkers(newMap);
        }
    }, []);


    const createMarkers = (mapObj) => {
        const newMarkers = data.map(item => {
            const markerPosition = new window.kakao.maps.LatLng(item.lat, item.lng);
            const marker = new window.kakao.maps.Marker({
                position: markerPosition,
            });
            
            marker.setMap(mapObj);
            
     
            window.kakao.maps.event.addListener(marker, 'click', () => {
                handleItemClick(item.id);
            });
            
            return marker;
        });
        
        setMarkers(newMarkers);
    };

   
    const handleItemClick = (id) => {
      
        const updatedData = data.map(item => ({
            ...item,
            isOn: item.id === id
        }));
        
        setData(updatedData);
        
      
        const selectedItem = updatedData.find(item => item.id === id);
        setBigData(selectedItem);
        
        if (map) {
            const moveLatLon = new window.kakao.maps.LatLng(selectedItem.lat, selectedItem.lng);
            map.setCenter(moveLatLon);
            map.setLevel(3); 
        }
    };

    return (
        <div className="popup_map">
            <div className="left_map">
                <div className="popup_search">
                    <p className="more_title">
                        <img src="/images/icons/right.png" alt="" />
                        <strong>더 많은 팝업을 찾아보세요</strong>
                    </p>
                    <MapList data={data} handleItemClick={handleItemClick} />
                </div>
                <div className="map_pic">
                    <div id="map" ref={mapRef}></div>
                </div>
            </div>

            <div className="right_pic">
                <img src={bigData.img2} alt="" />
            </div>
        </div>
    );
};

export default PopupMap;