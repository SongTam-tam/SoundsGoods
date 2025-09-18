import React from 'react';
import MapItem from './MapItem';
import './style.scss'
const MapList = ({data,handleItemClick}) => {
    return (
        <ul className='map_list_popup'>
            {data.map(item=><MapItem key={item.id} item={item} handleItemClick={handleItemClick}/>)}
        </ul>
    );
};

export default MapList;