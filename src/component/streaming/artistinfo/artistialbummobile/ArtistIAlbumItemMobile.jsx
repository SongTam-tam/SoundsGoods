import './style.scss';

const ArtistIAlbumItemMobile = ({ item }) => {
    return (
        <div className="artist-i-album-item">
            <img src={item.image} alt="" />
            <div className="album-item-text">
                <h3>{item.title}</h3>
                <h4>{item.artist}</h4>
                <p>{item.release}</p>
            </div>
        </div>
    );
};

export default ArtistIAlbumItemMobile;
