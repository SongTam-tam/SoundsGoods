import ArtistIAlbumItem from './ArtistIAlbumItem';
import './style.scss';
import { Link } from 'react-router-dom';

const ArtistIAlbum = ({ data }) => {
    return (
        <section id="artist-i-album">
            <div>
                <h2>
                    앨범
                    <Link to="">
                        <img src="../../../../../public/images/streaming/more.png" alt="" />
                    </Link>
                </h2>
            </div>
            <div className="artist-i-cover">
                {data.album.map((item) => (
                    <ArtistIAlbumItem key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
};

export default ArtistIAlbum;
