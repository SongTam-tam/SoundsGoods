import ArtistITopMusicItem from './ArtistITopMusicItem';
import './style.scss';

const ArtistITopMusic = ({ data }) => {
    return (
        <div id="artist-i-top-music">
            <h2>인기곡</h2>
            <table>
                <colgroup>
                    <col className="col-album" />
                    <col className="col-title" />
                    <col className="col-time" />
                    <col className="col-play" />
                    <col className="col-like" />
                    <col className="col-fav" />
                </colgroup>
                <thead>
                    <tr>
                        <th></th>
                        <th>곡명</th>
                        <th>재생시간</th>
                        <th className="th-icon">재생</th>
                        <th className="th-icon">좋아요</th>
                        <th className="th-icon">찜하기</th>
                    </tr>
                </thead>
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
