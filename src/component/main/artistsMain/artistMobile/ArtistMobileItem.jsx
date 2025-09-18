import React from 'react';

const ArtistMobileItem = ({ ganre, artist, artist_img }) => {
    return (
        <div className="li">
            <div className="pic">
                <img src={artist_img} alt="" />
            </div>
            <strong>{artist}</strong>
            <span>{ganre}</span>
        </div>
    );
};

export default ArtistMobileItem;
