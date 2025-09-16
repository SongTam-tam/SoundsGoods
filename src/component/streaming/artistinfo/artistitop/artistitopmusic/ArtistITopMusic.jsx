import ArtistITopMusicItem from './ArtistITopMusicItem';
import './style.scss';

const ArtistITopMusic = ({ data }) => {
    return (
        <div id="artist-i-top-music">
            <h2>인기곡</h2>
            <table>
                {/* <caption>아티스트별 인기곡 리스트입니다.</caption> */}
                <colgroup>
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                </colgroup>
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
