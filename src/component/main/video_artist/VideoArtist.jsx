import { Link } from 'react-router-dom';
import MainAlbumList from './albumList/MainAlbumList';
import ArtistList from './artist/ArtistList';
import './style.scss';
import TopList from './topMusicList/TopList';
import NewList from './newMusic/NewList';
import { useEffect, useState } from 'react';
import MainAlbumMobileItem from './albumListMobile/MainAlbumMobileItem';
import MainAlbumMobileList from './albumListMobile/MainAlbumMobileList';
import ArtistMobileList from './artistMobile/ArtistMobileList';

const VideoArtist = () => {
    const today = new Date();
    const [width, setWidth] = useState(window.innerWidth);
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // 01~12
    const day = String(today.getDate()).padStart(2, '0'); // 01~31

    const formatted = `${year}-${month}-${day}`;
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <section id="video_artist">
            <div className="inner">
                <h2>지금 뜨고있는 Video</h2>
                {width > 1024 ? <MainAlbumList /> : <MainAlbumMobileList />}
                <h2 className="artist_title">Artists</h2>
                {width > 1024 && (
                    <strong className="artist_sub_title">
                        일상 속 작은 순간까지 특별하게 채워드립니다.
                    </strong>
                )}
                {width > 1024 ? <ArtistList /> : <ArtistMobileList />}
                {width > 1024 && (
                    <div className="more_main_artist">
                        <button>
                            <img src="/images/icons/white_next.png" alt="" />
                        </button>
                        <span>더 많은 아티스트 찾아보기</span>
                    </div>
                )}

                <div className="top_new_list">
                    <div className="main_artist_left">
                        <div className="text_right_box">
                            <strong>지금 사람들이 많이 찾고 있는 곡들이에요</strong>
                            {width < 1024 && <span>{formatted}</span>}
                        </div>

                        <TopList />
                        {width > 1024 ? (
                            <div className="btn_top_new">
                                <button>
                                    <img src="/images/icons/white_next.png" alt="" />
                                </button>
                                <span>플레이하기</span>
                            </div>
                        ) : (
                            <div className="btn_top_new_m">
                                <button>
                                    <img src="/images/icons/white_next.png" alt="" />
                                </button>
                                <span>플레이하기</span>
                            </div>
                        )}
                    </div>
                    <div className="main_artist_right">
                        <div className="text_right_box">
                            <strong>최신 앨범을 소개해드려요</strong>
                            <span>{formatted}</span>
                        </div>
                        <NewList />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoArtist;
