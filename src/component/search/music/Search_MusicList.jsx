import React from 'react';
import './style.scss';
import Search_MusicItem from './Search_MusicItem';
const Search_MusicList = ({ data }) => {
    return (
        <div className="musicList">
            <div className="musicTitle">
                <h2>곡 검색결과</h2>
                <h3>더보기</h3>
            </div>
            <table>
                <colgroup>
                    <col className="col-album" />
                    <col className="col-title" />
                    <col className="col-artist" />
                    <col className="col-time" />
                    <col className="col-release" />
                    <col className="col-play" />
                    <col className="col-like" />
                    <col className="col-fav" />
                </colgroup>
                <thead>
                    <tr>
                        <th></th>
                        <th>곡명</th>
                        <th>아티스트명</th>
                        <th>재생시간</th>
                        <th>발매일</th>
                        <th className="th-icon">재생</th>
                        <th className="th-icon">좋아요</th>
                        <th className="th-icon">찜하기</th>
                    </tr>
                </thead>
                <tbody>
                    {data
                        .flatMap((artist) => artist.album || [])
                        .map((album) => (
                            <Search_MusicItem key={album.id} item={album} />
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default Search_MusicList;
