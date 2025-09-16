import React from 'react';
import IveItem from './IveItem';
import './style.scss';
const IveList = ({ data }) => {
    return (
        <ul className="ive_list">
            {data.map((item) => (
                <IveItem key={item.id} {...item} />
            ))}
        </ul>
    );
};

export default IveList;
