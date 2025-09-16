import GenreArtist from './genreartist/GenreArtist';
import GenreCategory from './genrecategory/GenreCategory';
import GenreImg from './genreimg/GenreImg';
import GenreMusic from './genremusic/GenreMusic';
import './style.scss';
const GenreWrap = ({ data, allGenres, onSelect }) => {
    return (
        <section id="genre-wrap">
            <div className="genre-img">
                <GenreImg data={data} />
            </div>
            <div className="genre_con">
                <GenreCategory allGenres={allGenres} selectedGenre={data} onSelect={onSelect} />
                <GenreArtist data={data} />
                <GenreMusic data={data} />
            </div>
        </section>
    );
};
export default GenreWrap;
