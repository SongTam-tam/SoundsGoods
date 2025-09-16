import StreamingMenu from '../../../component/streaming/streamingmenu/StreamingMenu';
import ArtistWrap from '../../../component/streaming/artist/ArtistWrap';
import './style.scss';
import { useState } from 'react';
import artist_info from '../../../assets/api/artist_info';

const Artist = () => {
    const [data, setData] = useState(artist_info);
    return (
        <div id="artist">
            <StreamingMenu />
            <ArtistWrap data={data} />
        </div>
    );
};

export default Artist;
