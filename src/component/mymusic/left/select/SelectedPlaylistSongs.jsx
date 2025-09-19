import React from "react";
import "./style.scss";

const SelectedPlaylistSongs = ({ playlist, onDeselect }) => {
  if (!playlist) return null;

  return (
    <div className="selected_playlist_songs">
      <div className="playlist_header">
        <button className="back_btn" onClick={onDeselect}>
          <h2> ← 전체 목록</h2>
        </button>
      </div>
      <div className="likemusic">
        <h3>플레이리스트 : {playlist.name}</h3>
      </div>
      <ul>
        {playlist.songs.length > 0 ? (
          playlist.songs.map((song, index) => <li key={index}>{song}</li>)
        ) : (
          <div className="nonebox">
            <h2>저장된 음악이 없습니다.</h2>
          </div>
        )}
      </ul>
    </div>
  );
};

export default SelectedPlaylistSongs;
