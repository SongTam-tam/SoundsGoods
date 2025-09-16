import ArtistIAlbum from './artistialbum/ArtistIAlbum';
import ArtistIGoods from './artistigoods/ArtistIGoods';
import ArtistIImg from './artistiimg/ArtistIImg';
import ArtistITop from './artistitop/ArtistITop';
import ArtistIVideo from './artistivideo/ArtistIVideo';
import './style.scss';

const ArtistInfoWrap = ({ data }) => {
    return (
        <section id="artist-info-wrap">
            <div className="artist-info-img">
                <ArtistIImg data={data} />
            </div>
            <div className="artist-info-con">
                <ArtistITop data={data} />
                <ArtistIAlbum data={data} />
                <ArtistIVideo data={data} />
                <ArtistIGoods data={data} />
            </div>
        </section>
    );
};

export default ArtistInfoWrap;
