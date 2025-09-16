import React from 'react';
import { usemainAlbumStore } from '../../../../store';
import MainAlbumItem from './MainAlbumItem';
import './style.scss';

const MainAlbumList = () => {
    const mainAlAtData = usemainAlbumStore((state) => state.mainAlAtData);
    const data = mainAlAtData.slice(0, 4);
    return (
        <ul className="main_album_list">
            {data.map((al) => (
                <MainAlbumItem key={al.id} al={al} />
            ))}
        </ul>
    );
};

export default MainAlbumList;
