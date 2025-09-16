import { useNavigate } from 'react-router-dom';
import './style.scss';

const ArtistCategoryItem = ({ item }) => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate(`/streaming/artistinfo/${item.id}`);
    };

    return (
        <>
            <div className="artist-category-item">
                <img src={item.imageS || '/images/streaming/artist.png'} alt="" onClick={onClick} />
                <h3>{item.artist}</h3>
            </div>
        </>
    );
};

export default ArtistCategoryItem;
