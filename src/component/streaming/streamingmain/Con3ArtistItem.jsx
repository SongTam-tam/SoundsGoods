import React from 'react';

const Con3ArtistItem = ({ data }) => {
    return (
        <li key={data.id} data={data}>
            <img src={data.artist_img} alt="" />
            <h4>{data.artist}</h4>
            <p>{data.ganre}</p>
        </li>
    );
};

export default Con3ArtistItem;
