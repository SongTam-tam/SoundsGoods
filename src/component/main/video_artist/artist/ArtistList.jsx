import React from 'react';
import { usemainAlbumStore } from '../../../../store';
import ArtistItem from './ArtistItem';
import './style.scss';
const ArtistList = () => {
    const mainAlAtData = usemainAlbumStore((state) => state.mainAlAtData);
    const data = mainAlAtData.slice(0, 9);
    return (
        <ul className="artist_list_main">
            {data.map((item) => (
                <ArtistItem key={item.id} {...item} />
            ))}
        </ul>
    );
};

export default ArtistList;
