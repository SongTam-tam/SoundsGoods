import React from 'react';

const MapItem = ({item}) => {
    const {id,isOn,isChk,title,more,desc,mark,ff} = item
    return (
        <li className={isOn ? 'active' : ''}>
            <div className="view">
                <div className="pic">
                    <img src="" alt="" />
                </div>
                <p className='title'>
                    <strong></strong>
                    <span></span>
                </p>
            </div>
        </li>
    );
};

export default MapItem;