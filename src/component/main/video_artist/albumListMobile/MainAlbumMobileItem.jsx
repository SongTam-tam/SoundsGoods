import React, { useEffect } from 'react';
import { usemainAlbumStore } from '../../../../store';
const MainAlbumMobileItem = ({ al }) => {
    if (!al) return null;
    const { id, artist, album, artist_img, album_img, yid, actv } = al;
    const { MStart, onTrack } = usemainAlbumStore();

    // 컴포넌트 마운트 시 YouTube 플레이어 요소 미리 생성
    useEffect(() => {
        const playerElementId = `youtube-player-${id}`;
        let element = document.getElementById(playerElementId);

        if (!element) {
            element = document.createElement('div');
            element.id = playerElementId;
            element.style.display = 'none';
            document.body.appendChild(element);
        }

        return () => {
            // 필요시 cleanup 로직
        };
    }, [id]);
    const onMusic = (x) => {
        MStart(x);
        onTrack(x);
    };

    return (
        <div onClick={() => onMusic(id)} className={`video_item ${actv ? 'active' : ''}`}>
            <div className="album_pic">
                <img src={album_img} alt={album} />
            </div>
            <div className="artist_pic">
                <div className="pic2">
                    <img src={artist_img} alt={artist} />
                </div>
            </div>
            <p>
                <strong>{album}</strong>
            </p>
        </div>
    );
};

export default React.memo(MainAlbumMobileItem);
