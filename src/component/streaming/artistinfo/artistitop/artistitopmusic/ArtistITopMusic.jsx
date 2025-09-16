import ArtistITopMusicItem from './ArtistITopMusicItem';
import './style.scss';

const ArtistITopMusic = ({ data }) => {
    return (
        <div id="artist-i-top-music">
            <h2>인기곡</h2>
            <table>
                <tbody>
                    {data.album.map((item, index) => (
                        <ArtistITopMusicItem key={index} item={item} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ArtistITopMusic;
