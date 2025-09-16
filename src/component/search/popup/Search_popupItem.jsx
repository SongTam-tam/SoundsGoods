import React from 'react';
import './style.scss';
const Search_popupItem = ({ item }) => {
    return (
        <div className="popupItem">
            <img src={item.img} alt="" />
            <div className="popupInfo">
                <div className="popuptitle">
                    <h2>{item.desc}</h2>
                </div>
                <div className="popupDate">
                    <h3>{item.date}</h3>
                </div>
                <div className="popupListen">
                    <p>{item.title}</p>
                </div>
            </div>
        </div>
    );
};

export default Search_popupItem;
