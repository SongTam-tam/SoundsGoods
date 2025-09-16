import './style.scss';

const GenreArtistItemMobile = ({ item }) => {
    return (
        <div className="genre-artist-item-mobile">
            <img src={item.artistimg} alt="" />
            <h3>{item.artist}</h3>
        </div>
    );
};

export default GenreArtistItemMobile;
