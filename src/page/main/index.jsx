import React from 'react';
import './style.scss';
import Main_visual from '../../component/main/main_visual/Main_visual';
import VideoArtist from '../../component/main/video_artist/VideoArtist';
import IveSecret from '../../component/main/iveSecret/IveSecret';
import Goods from '../../component/main/goods/Goods';
import PopupMain from '../../component/main/popupMain/PopupMain';
import MagazineMain from '../../component/main/magazineMain/MagazineMain';
const Main = () => {
    return (
        <div id="main home">
            <Main_visual />
            <VideoArtist />
            <IveSecret />
            <Goods />
            <PopupMain />
            <MagazineMain />
        </div>
    );
};

export default Main;
