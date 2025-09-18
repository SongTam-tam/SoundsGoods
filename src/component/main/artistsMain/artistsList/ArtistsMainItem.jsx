import React from 'react';

const ArtistsMainItem = ({ ganre, artist, artist_img }) => {
    return (
        <li>
            <div className="pic">
                <img src={artist_img} alt="" />
            </div>
            <strong>{artist}</strong>
            <span>{ganre}</span>
        </li>
    );
};

export default ArtistsMainItem;
