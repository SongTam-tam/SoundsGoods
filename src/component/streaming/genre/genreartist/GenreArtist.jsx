import GenreArtistItem from './GenreArtistItem';
import './style.scss';
const GenreArtist = ({ data }) => {
    return (
        <section id="genre-artist">
            <h2>{data.genre} 대표 아티스트</h2>
            <div className="genre-artist-list">
                {data.singer.map((item, index) => (
                    <GenreArtistItem key={index} item={item} />
                ))}
            </div>
        </section>
    );
};
export default GenreArtist;
