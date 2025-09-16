import './style.scss';

const RecArtistItem = ({ item }) => {
    return (
        <li className="rec-artist-item">
            <img src={item.imageS} alt="" />
            <h3>{item.artist}</h3>
            <h4>{item.category}</h4>
        </li>
    );
};

export default RecArtistItem;
