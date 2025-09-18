import React from 'react';

const MapItem = ({item ,handleItemClick}) => {
    const {id,isOn,isChk,title,more,desc,mark,ff,img,img2} = item
    return (
        <li className={isOn ? 'active' : ''} onClick={()=>handleItemClick(id)}>
            <div className="view">
                <div className="pic">
                    <img src={img} alt="" />
                </div>
                <p className='title'>
                    <strong>{title}</strong>
                    <span>{mark}</span>
                </p>
            </div>
            <div className='more_text'>
                <strong>{desc}</strong>
                <span>{more}</span>
                <em>{ff}</em>
            </div>
        </li>
    );
};

export default MapItem;