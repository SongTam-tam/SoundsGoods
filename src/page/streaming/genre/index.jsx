import { useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import GenreWrap from '../../../component/streaming/genre/GenreWrap';
import StreamingMenu from '../../../component/streaming/streamingmenu/StreamingMenu';
import genre from '../../../assets/api/genre';
import './style.scss';

const Genre = () => {
    const { title } = useParams();
    const location = useLocation();

    const [selectedGenre, setSelectedGenre] = useState(location.state || genre[0]);

    useEffect(() => {
        if (title) {
            const found = genre.find((g) => g.genre === title);
            if (found) setSelectedGenre(found);
        }
    }, [title]);

    return (
        <div id="genre">
            <StreamingMenu />
            <GenreWrap data={selectedGenre} allGenres={genre} onSelect={setSelectedGenre} />
        </div>
    );
};

export default Genre;
