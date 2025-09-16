import { useParams } from 'react-router-dom';
import ArtistInfoWrap from '../../../component/streaming/artistinfo/ArtistInfoWrap';
import StreamingMenu from '../../../component/streaming/streamingmenu/StreamingMenu';
import './style.scss';
import artist_info from '../../../assets/api/artist_info';

const ArtistInfo = () => {
    const { id } = useParams();

    const artist1 = artist_info.find((a) => a.id === Number(id));
    if (!artist1) return <p>아티스트 정보를 찾을 수 없습니다.</p>;

    return (
        <div id="artistinfo">
            <StreamingMenu />
            <ArtistInfoWrap data={artist1} />
        </div>
    );
};

export default ArtistInfo;
