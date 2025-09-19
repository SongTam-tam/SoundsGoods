import React from 'react';
import './style.scss';
import Mymusic_right_List from './Mymusic_right_List';

const Mymusic_right = () => {
    return (
        <div className="Mymusic_right">
            <div className="Mymusic_title">
                <h2>최근 들은 노래</h2>
            </div>
            <Mymusic_right_List />
        </div>
    );
};

export default Mymusic_right;
