import './style.scss';

const ArtistITopIntro = ({ data }) => {
    return (
        <div id="artist-i-top-intro">
            <h2>소개</h2>
            <div className="artist-text">
                <div className="artist-intro">
                    <p>데뷔 : {data.debut}</p>
                    <p>소속사 : {data.cpn}</p>
                    <p>활동유형 : {data.type}</p>
                    <p>멤버 : {data.members}</p>
                </div>
                <article className="artist-desc">{data.desc}</article>
            </div>
        </div>
    );
};

export default ArtistITopIntro;
