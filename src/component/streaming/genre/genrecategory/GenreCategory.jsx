import './style.scss';
import { Link, useNavigate } from 'react-router-dom';
const GenreCategory = ({ allGenres, selectedGenre, onSelect }) => {
    const navigate = useNavigate();
    return (
        <section id="genre-category">
            <h2>장르별 음악</h2>
            <ul className="genre-sub">
                {allGenres?.map((item, index) => (
                    <li key={index}>
                        <div
                            className="genre-sub-img"
                            onClick={() => {
                                onSelect(item);
                                navigate(`/streaming/genre/${item.genre}`, {
                                    state: item,
                                });
                            }}
                        >
                            <img
                                src={`/images/streaming/genre_${item.genre.toLowerCase()}_s.jpg`}
                                alt={item.genre}
                            />
                            <span>{item.genre}</span>
                        </div>
                        <p>{item.genre}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};
export default GenreCategory;
