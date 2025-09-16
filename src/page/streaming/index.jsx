import { useParams } from 'react-router-dom';
import StreamingMainWrap from '../../component/streaming/streamingmain/StreamingMainWrap';
import StreamingMenu from '../../component/streaming/streamingmenu/StreamingMenu';
import './style.scss';
import { useEffect, useState } from 'react';
import genre from '../../assets/api/genre';

const Streaming = () => {
    const { title } = useParams(); // URL :title 가져오기
    const [selectedGenre, setSelectedGenre] = useState(genre[0]);

    useEffect(() => {
        const found = genre.find((g) => g.genre === title);
        if (found) setSelectedGenre(found);
    }, [title]);
    return (
        <div id="streaming">
            <StreamingMenu />
            <StreamingMainWrap data={selectedGenre} allGenres={genre} onSelect={setSelectedGenre} />
        </div>
    );
};

export default Streaming;
