import StreamingMenu from '../../../component/streaming/streamingmenu/StreamingMenu';
import Top100Wrap from '../../../component/streaming/top100/Top100Wrap';
import './style.scss';

const Top100 = () => {
    return (
        <div id="top100">
            <StreamingMenu />
            <Top100Wrap />
        </div>
    );
};

export default Top100;
