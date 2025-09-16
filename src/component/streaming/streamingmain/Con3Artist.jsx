import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import main_Artist_data from '../../../assets/api/main_Artist_data';
import Con3ArtistItem from './Con3ArtistItem';

const Con3Artist = () => {
    const [artist, setArtist] = useState(main_Artist_data);
    const navigate = useNavigate('');
    const onClick = () => {
        navigate('/streaming/top100');
    };

    return (
        <div className="con-inner">
            <h3>
                아티스트별 음악
                <Link to="artist">
                    <img src="/images/streaming/more.png" alt="" onClick={onClick} />
                </Link>
            </h3>
            <ul className="artist-wrap">
                {artist.slice(0, 8).map((item) => (
                    <Con3ArtistItem key={item.id} data={item} />
                ))}
            </ul>
        </div>
    );
};

export default Con3Artist;
