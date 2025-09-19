import React from 'react';
import artistsData from '../../../../assets/api/main_Artist_data';
import './style.scss';
import ArtistsMainItem from './ArtistsMainItem';

const ArtistMainList = () => {
    const data = artistsData.slice(0, 9);

    return (
        <ul className="artist_list_main">
            {data.map((item) => (
                <ArtistsMainItem
                    key={item.id}
                    id={item.id}
                    ganre={item.ganre}
                    artist={item.artist}
                    artist_img={item.artist_img}
                />
            ))}
        </ul>
    );
};

export default ArtistMainList;
