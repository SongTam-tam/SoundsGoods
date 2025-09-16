import React from 'react';

const ArtistItem = ({ ganre, artist, artist_img }) => {
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

export default ArtistItem;
