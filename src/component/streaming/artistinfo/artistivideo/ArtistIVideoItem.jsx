import './style.scss';
import { useState } from 'react';

const ArtistIVideoItem = ({ item }) => {
    const [play, setPlay] = useState(false);
    return (
        <div className="artist-i-video-item">
            {play ? (
                <iframe
                    src={`https://www.youtube.com/embed/${item.track}?autoplay=1&modestbranding=1&rel=0`}
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                ></iframe>
            ) : (
                <div className="video-thumbnail" onClick={() => setPlay(true)}>
                    <img
                        src={`https://img.youtube.com/vi/${item.track}/hqdefault.jpg`}
                        alt={item.title}
                    />
                    <div className="play-icon">
                        <img
                            src="/images/streaming/mv-play-icon.png"
                            alt="재생"
                        />
                    </div>
                </div>
            )}
            <div className="video-item-text">
                <h3>{item.title}</h3>
                <h4>{item.album}</h4>
                <p>{item.release}</p>
            </div>
        </div>
    );
};

export default ArtistIVideoItem;
