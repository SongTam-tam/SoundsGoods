import './style.scss';

const GenreArtistItem = ({ item }) => {
    return (
        <div className="genre-artist-item">
            <img src={item.artistimg} alt="" />
            <h3>{item.artist}</h3>
        </div>
    );
};

export default GenreArtistItem;
