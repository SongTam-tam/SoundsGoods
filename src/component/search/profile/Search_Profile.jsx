import React from 'react';
import './style.scss';

const Search_Profile = ({ data }) => {
    if (!data || data.length === 0) {
        return <div className="profile-box">검색된 아티스트가 없습니다.</div>;
    }

    const artist = data[0];

    return (
        <div className="profile-box">
            <div className="imgbox">
                <img src={artist.imageS} alt={artist.artist} />
            </div>
            <div className="textbox">
                <h2>{artist.artist}</h2>
                <div className="profile-info">
                    <div className="profile-info1">
                        <h3>데뷔</h3>
                        <h3>활동유형</h3>
                        <h3>활동장르</h3>
                        <h3>소속사</h3>
                    </div>
                    <div className="profile-info2">
                        <h3>{artist.debut || '정보없음'}</h3>
                        <h3>{artist.type || '정보없음'}</h3>
                        <h3>{artist.category || '정보없음'}</h3>
                        <h3>{artist.cpn || '정보없음'}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search_Profile;
