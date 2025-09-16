import React from 'react';

const FestivalItem = ({ item }) => {
    const { img, title, mark, release } = item;
    return (
        <li>
            <div className="pic">
                <img src="" alt="" />
            </div>
            <div className="text_con">
                <strong>{title}</strong>
                <span>{mark}</span>
                <em>{release}</em>
            </div>
        </li>
    );
};

export default FestivalItem;
