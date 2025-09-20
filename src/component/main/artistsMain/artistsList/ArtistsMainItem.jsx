import React from 'react';
import { NavLink } from 'react-router-dom';

const ArtistsMainItem = ({ id, ganre, artist, artist_img }) => (
    <li>
        <NavLink to={`/streaming/artistinfo/${id}`}>
            <div className="pic">
                <img src={artist_img} alt={artist} />
            </div>
            <strong>{artist}</strong>
            <span>{ganre}</span>
        </NavLink>
    </li>
);

export default ArtistsMainItem;
