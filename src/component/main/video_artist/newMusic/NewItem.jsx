import React from 'react';

const NewItem = ({ image, title, release }) => {
    return (
        <li>
            <img src={image} alt="" />
            <strong>{title}</strong>
            <span>{release}</span>
        </li>
    );
};

export default NewItem;
