import React from 'react';

const PopupMainItem = ({ popup }) => {
    const { id, title, img, desc } = popup;
    return (
        <li className="lili2">
            <div className="pic">
                <img src={img} alt="" />
            </div>
            <strong>{title}</strong>
            <span>{desc}</span>
        </li>
    );
};

export default PopupMainItem;
