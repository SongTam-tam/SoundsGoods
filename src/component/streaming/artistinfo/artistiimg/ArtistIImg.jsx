import './style.scss';

const ArtistIImg = ({ data }) => {
    return (
        <section id="artist-i-img">
            <p>
                <img src={data.image} alt="" />
            </p>
            <div className="artist-info-title">
                <h2>{data.category}</h2>
                <h3>{data.artist}</h3>
            </div>
        </section>
    );
};

export default ArtistIImg;
