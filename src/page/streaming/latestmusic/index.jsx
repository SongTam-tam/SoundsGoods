import LatestMusicWrap from '../../../component/streaming/latestmusic/LatestMusicWrap';
import StreamingMenu from '../../../component/streaming/streamingmenu/StreamingMenu';
import './style.scss';

const LatestMusic = () => {
    return (
        <div id="latestmusic">
            <StreamingMenu />
            <LatestMusicWrap />
        </div>
    );
};

export default LatestMusic;
