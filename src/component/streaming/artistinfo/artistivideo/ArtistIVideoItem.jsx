import './style.scss';

const ArtistIVideoItem = ({ item }) => {
    return (
        <div className="artist-i-video-item">
            <iframe
                src={`https://www.youtube.com/embed/${item.track}?controls=0&modestbranding=1&rel=0`}
                title="THE BOYZ(더보이즈) 'THRILL RIDE' MV"
                frameBorder="0"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
            ></iframe>

            <div className="video-item-text">
                <h3>{item.title}</h3>
                <h4>{item.album}</h4>
                <p>{item.release}</p>
            </div>
        </div>
    );
};

export default ArtistIVideoItem;
