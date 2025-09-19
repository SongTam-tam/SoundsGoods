import ArtistIVideoItem from './ArtistIVideoItem';
import './style.scss';

const ArtistIVideo = ({ data }) => {
    return (
        <section id="artist-i-video">
            <div>
                <h2>뮤직비디오</h2>
            </div>
            <div className="artist-i-video-list">
                {data.album.slice(0, 3).map((item) => (
                    <ArtistIVideoItem key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
};

export default ArtistIVideo;
