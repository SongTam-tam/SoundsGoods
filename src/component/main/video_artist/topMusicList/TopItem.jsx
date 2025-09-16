import React from 'react';

const TopItem = ({ image, title, artist }) => {
    return (
        <li>
            <img src={image} alt="" />
            <p>
                <strong>{title}</strong>
                <span>{artist}</span>
            </p>
        </li>
    );
};

export default TopItem;
