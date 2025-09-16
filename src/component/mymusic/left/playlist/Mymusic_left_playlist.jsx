import React from 'react';
import Mymusic_left_playList2 from './Mymusic_left_playList2';
import { FaAngleRight } from 'react-icons/fa6';
const Mymusic_left_playlist = () => {
    return (
        <div className="Mymusic_left_playlist">
            <div className="left_playlist">
                <div className="left_playlisttitle">
                    <h2>저장한 플레이리스트</h2>
                    <FaAngleRight />
                </div>
                <Mymusic_left_playList2 />
            </div>
        </div>
    );
};

export default Mymusic_left_playlist;
