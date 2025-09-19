import { useNavigate } from 'react-router-dom';
import './style.scss';

const RecArtistItem = ({ item }) => {
    const navigate = useNavigate();
    const onClick = () => {
        navigate(`/streaming/artistinfo/${item.id}`);
    };

    return (
        <li className="rec-artist-item" onClick={onClick}>
            <img src={item.imageS} alt="" />
            <h3>{item.artist}</h3>
            <h4>{item.category}</h4>
        </li>
    );
};

export default RecArtistItem;
