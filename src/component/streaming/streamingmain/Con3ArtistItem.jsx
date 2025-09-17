import React from 'react';
import { Link } from 'react-router-dom';

const Con3ArtistItem = ({ data }) => {
    return (
        <li key={data.id} data={data}>
            <Link to={`/streaming/artistinfo/${data.id}`}>
                <img src={data.imageS} alt={data.artist} />
            </Link>
            <h4>{data.artist}</h4>
            <p>{data.category}</p>
        </li>
    );
};

export default Con3ArtistItem;
