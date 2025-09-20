import { useNavigate } from 'react-router-dom';
import './style.scss';

const RecArtistItemMobile = ({ item }) => {
    const navigate = useNavigate();
    const onClick = () => {
        navigate(`/streaming/artistinfo/${item.id}`);
    };

    return (
        <div className="rec-artist-item-mobile" onClick={onClick}>
            <img src={item.imageS} alt="" />
            <h3>{item.artist}</h3>
        </div>
    );
};

export default RecArtistItemMobile;
