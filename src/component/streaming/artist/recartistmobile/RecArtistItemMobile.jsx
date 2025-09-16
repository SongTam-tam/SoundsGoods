import './style.scss';

const RecArtistItemMobile = ({ item }) => {
    return (
        <div className="rec-artist-item-mobile">
            <img src={item.imageS} alt="" />
            <h3>{item.artist}</h3>
        </div>
    );
};

export default RecArtistItemMobile;
