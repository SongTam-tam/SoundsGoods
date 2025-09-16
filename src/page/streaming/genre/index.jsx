import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import GenreWrap from '../../../component/streaming/genre/GenreWrap';
import StreamingMenu from '../../../component/streaming/streamingmenu/StreamingMenu';
import genre from '../../../assets/api/genre';
import './style.scss';

const Genre = () => {
    const { title } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [selectedGenre, setSelectedGenre] = useState(null);

    useEffect(() => {
        if (title && title !== title.toLowerCase()) {
            navigate(`/streaming/genre/${title.toLowerCase()}`, { replace: true });
        }
    }, [title, navigate]);

    useEffect(() => {
        if (title) {
            // URL 파라미터랑 genre 값 비교
            const found = genre.find((g) => g.genre.toLowerCase() === title.toLowerCase());
            setSelectedGenre(found);
        } else if (location.state) {
            // state로 넘어온 경우
            setSelectedGenre(location.state);
        } else {
            // 기본값은 첫 번째 장르
            setSelectedGenre(genre[0]);
        }
    }, [title, location.state]);

    if (!selectedGenre) return null; // 로딩 대기

    return (
        <div id="genre">
            <StreamingMenu />
            <GenreWrap data={selectedGenre} allGenres={genre} onSelect={setSelectedGenre} />
        </div>
    );
};

export default Genre;
