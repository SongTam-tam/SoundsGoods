import React from 'react';
import newData from '../../../../assets/api/musicComponents/newData_51_100';
import NewItem from './NewItem';
import './style.scss';
const NewList = () => {
    const data = newData.slice(0, 2);
    return (
        <ul className="new_list">
            {data.map((item) => (
                <NewItem key={item.id} {...item} />
            ))}
        </ul>
    );
};

export default NewList;
