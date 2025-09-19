import React, { useState } from 'react';
import { usemainAlbumStore } from '../../../store';

const Mymusic_right_Item = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const { MStart, MStop } = usemainAlbumStore();
    const handleClick = () => {
        if (isPlaying) {
            // 재생 중이면 일시정지
            MStop(data.id); // 필요 시 스토어에서 정지 함수 호출
            setIsPlaying(false);
        } else {
            // 정지 상태면 재생
            MStart(data.id, type); // type 전달로 topData / mainAlAtData 구분
            setIsPlaying(true);
        }
    };
    return (
        <div className="Mymusic_right_Item" onClick={handleClick}>
            <div className="right_img">
                <img src="../../../../../public/images/mymusic/music1.jpg" alt="" />
            </div>
            <div className="right_text">
                <div className="title">
                    <h2>아아아</h2>
                    <div className="subtitle">
                        <p>ㅏㅇ아아ㅏㅇ</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mymusic_right_Item;
