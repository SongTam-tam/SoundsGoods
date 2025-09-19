import React from 'react';

const IveItem = ({ id, yid, img, isShow }) => {
    
    return (
        <li className={isShow ? 'show' : ''}>
            <img src={img} alt="" />
        </li>
    );
};

export default IveItem;
