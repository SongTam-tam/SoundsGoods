import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import jazz_401_450 from '../../../assets/api/musicComponents/jazz_401_450';
import genre from '../../../assets/api/genre';
const Con4Genre = ({ allGenres, selectedGenre, onSelect }) => {
    const navigate = useNavigate();
    return (
        <div className="con4 inner">
            <h3>
                장르별 음악
                <Link to="genre">
                    <img src="/images/streaming/more.png" alt="" />
                </Link>
            </h3>
            <ul className="genre-wrap">
                {allGenres.map((item, index) => (
                    <li key={index}>
                        <div
                            className="genre-sub-img"
                            onClick={() => {
                                onSelect(item);
                                navigate(`/streaming/genre/${item.genre}`), { state: item };
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
        </div>
    );
};
export default Con4Genre;
