import React from 'react';

const LimitPopupItem = ({ img, release, title, id, mark }) => {
    return (
        <li>
            <div className="pic">
                <img src={img} alt="" />
            </div>
            <div className="text_con">
                <strong>{title}</strong>
                <span>{release}</span>
                <em>{mark}</em>
            </div>
        </li>
    );
};

export default LimitPopupItem;
