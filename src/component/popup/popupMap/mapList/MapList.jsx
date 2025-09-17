import React from 'react';
import MapItem from './MapItem';

const MapList = ({data}) => {
    return (
        <ul className='map_list_popup'>
            {data.map(item=><MapItem key={item.id} item={item}/>)}
        </ul>
    );
};

export default MapList;