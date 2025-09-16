import React from 'react';
import topdata from '../../../../assets/api/musicComponents/top_1_50';
import TopItem from './TopItem';
import './style.scss';
const TopList = () => {
    const data = topdata.slice(0, 8);
    return (
        <ul className="top_list">
            {data.map((item) => (
                <TopItem key={item.id} {...item} />
            ))}
        </ul>
    );
};

export default TopList;
