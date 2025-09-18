import { useNavigate } from 'react-router-dom';
import './style.scss';

const GenreArtistItem = ({ item }) => {
    const navigate = useNavigate();

    return (
        <div className="genre-artist-item">
            <img src={item.artistimg} alt="" />
            <h3>{item.artist}</h3>
        </div>
    );
};

export default GenreArtistItem;
