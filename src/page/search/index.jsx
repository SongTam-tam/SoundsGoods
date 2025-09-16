import React, { useState } from 'react';
import './style.scss';
import Search_allbumList from '../../component/search/bottom/Search_allbumList';
import Search_goodsList from '../../component/search/goods/Search_goodsList';
import Search_popupList from '../../component/search/popup/Search_popupList';
import Search_Profile from '../../component/search/profile/Search_Profile';
import Search_MusicList from '../../component/search/music/Search_MusicList';
import { useParams } from 'react-router-dom';
import artist_info from '../../assets/api/artist_info';
import Noresult from '../../component/search/Fail/Noresult';
import RecArtist from '../../component/streaming/artist/recartist/RecArtist';

const Search = () => {
    const { text } = useParams();
    const [data] = useState(artist_info);

    const query = text?.toLowerCase() || '';

    const artistData = artist_info.reduce((acc, item) => {
        if (!acc.some((a) => a.artist === item.artist)) {
            acc.push(item);
        }
        return acc;
    }, []);

    const filterData = data.filter(
        (item) =>
            item.artist?.toLowerCase().includes(query) || item.title?.toLowerCase().includes(query)
    );

    const artistFilter = artistData.filter((item) => item.artist?.toLowerCase().includes(query));

    return (
        <div className="inner">
            <div className="search">
                <div className="toptext">
                    <h2>'{text}'에 대한 검색결과 입니다.</h2>
                </div>

                {filterData.length === 0 && artistFilter.length === 0 ? (
                    <>
                        <Noresult text={text} />
                    </>
                ) : (
                    <>
                        <Search_Profile data={artistFilter} data1={filterData} />
                        <Search_MusicList data={filterData} />
                        <Search_allbumList data={filterData} />
                        <Search_goodsList data={filterData} />
                        <Search_popupList data={filterData} />
                    </>
                )}
            </div>
        </div>
    );
};

export default Search;
