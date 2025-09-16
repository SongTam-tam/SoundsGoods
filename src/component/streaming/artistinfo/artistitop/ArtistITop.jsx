import './style.scss';
import ArtistITopIntro from './artistitopintro/ArtistITopIntro';
import ArtistITopMusic from './artistitopmusic/ArtistITopMusic';

const ArtistITop = ({ data }) => {
    return (
        <section id="artist-i-top">
            <div className="artist-i-top-left">
                <ArtistITopIntro data={data} />
            </div>
            <div className="artist-i-top-right">
                <ArtistITopMusic data={data} />
            </div>
        </section>
    );
};

export default ArtistITop;
