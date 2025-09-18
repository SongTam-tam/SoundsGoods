import { useCallback, useEffect, useState } from 'react';
import { usemainAlbumStore } from '../../store';
import './style.scss';

const MusicModal = () => {
    const { musicOn, musicModal, players, closeModal, setVolume } = usemainAlbumStore();

    const [currentVolume, setCurrentVolume] = useState(40);
    const [isPlay, setIsPlay] = useState(true);
    const [isExpanded, setIsExpanded] = useState(false); // 기본 축소형

    // 플레이어 상태 동기화
    useEffect(() => {
        if (musicModal && players[musicModal.id]) {
            setIsPlay(true);
            setVolume(musicModal.id, currentVolume);
        }
    }, [musicModal, players, currentVolume, setVolume]);

    const handlePlayPause = useCallback(() => {
        if (!musicModal || !players[musicModal.id]) return;

        const player = players[musicModal.id];
        const playerState = player.getPlayerState?.();

        if (playerState === 1) {
            player.pauseVideo?.();
            setIsPlay(false);
        } else {
            player.playVideo?.();
            setIsPlay(true);
        }
    }, [musicModal, players]);

    // 모달이 없으면 렌더하지 않음
    if (!musicOn || !musicModal) return null;
    const { artist, album, title, album_img, id } = musicModal;

    return (
        <>
            {/* 축소형 뮤직 플레이어 */}
            {!isExpanded && (
                <div className="bottom-music-player">
                    <div className="left-close">
                        <button className="close" onClick={closeModal}>
                            <img src="/images/icons/icon-gray-close.png" alt="" />
                        </button>
                    </div>
                    <div className="controller-wrap">
                        <div className="center-controller">
                            <button className="shuffle">
                                <img src="/images/icons/shurple.png" alt="" />
                            </button>
                            <button className="btn-prev">
                                <img src="/images/icons/prev.png" alt="" />
                            </button>
                            <button className="btn-play">
                                <img src="/images/icons/play.png" alt="" />
                            </button>
                            <button className="btn-next">
                                <img src="/images/icons/next.png" alt="" />
                            </button>
                            <button className="repeat">
                                <img src="/images/icons/loop.png" alt="" />
                            </button>
                        </div>
                        <div className="center-bar">
                            <span className="current-time">00:46</span>
                            <div className="progress-container">
                                <div className="progress-bar">
                                    <div className="progress-handle"></div>
                                </div>
                            </div>
                            <span className="whole-play-time">03:25</span>
                        </div>
                        <div className="right-controls">
                            <div className="volume-container">
                                <img src="/images/icons/icon-volume.png" alt="" />
                                <div className="volume-slider">
                                    <div className="volume-bar">
                                        <div className="volume-handle"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-expand">
                        <button className="expand" onClick={() => setIsExpanded(true)}>
                            <img src="/images/icons/icon-expand.png" alt="" />
                        </button>
                    </div>
                </div>
            )}

            {/* 확장형 모달: isExpanded가 true일 때만 렌더 */}
            {isExpanded && (
                <div className="music_modal">
                    <div className="album_pic">
                        <div className="img-wrap">
                            <img
                                className="change"
                                src="/images/icons/change.png"
                                alt="Collapse"
                                onClick={() => setIsExpanded(false)}
                            />
                            <img
                                className="close"
                                src="/images/icons/close.png"
                                alt=""
                                onClick={closeModal}
                            />
                            <img src={album_img} alt="" />
                        </div>
                        <p>
                            <strong>{title}</strong>
                            <span>{artist}</span>
                        </p>
                    </div>
                    <div className="player_controll">
                        <button className="btn shurple">
                            <img src="/images/icons/shurple.png" alt="" />
                        </button>
                        <button className="btn prev">
                            <img src="/images/icons/prev.png" alt="" />
                        </button>
                        <button className="btn play" onClick={handlePlayPause}>
                            <img
                                src={isPlay ? '/images/icons/pause.png' : '/images/icons/play.png'}
                                alt={isPlay ? 'Pause' : 'Play'}
                            />
                        </button>
                        <button className="btn next">
                            <img src="/images/icons/next.png" alt="" />
                        </button>
                        <button className="btn loop">
                            <img src="/images/icons/loop.png" alt="" />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default MusicModal;
