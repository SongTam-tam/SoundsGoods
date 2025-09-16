import { useState } from 'react';
import LatestMusicList from './LatestMusicList';
import './style.scss';
import newData_51_100 from '../../../../assets/api/musicComponents/newData_51_100';

const LatestMusicListWrap = () => {
    const [musicData, setMusicData] = useState(newData_51_100);
    const [selectedAll, setSelectedAll] = useState(false);

    const handleSelectAll = () => {
        setSelectedAll((prev) => !prev);
    };

    return (
        <section id="latest-music">
            <h2>최신 음악</h2>
            <div className="latest-music-top">
                <div className="latest-music-btn">
                    <button onClick={handleSelectAll}>
                        {selectedAll ? '전체 해제' : '전체 선택'}
                    </button>
                    <button>전체 재생</button>
                </div>
                <div className="latest-music-sort">
                    <div className="sort-down">정렬</div>
                    <div className="sorting">
                        <ul>
                            <li className="sorting-title">정렬</li>
                            <li>최신순</li>
                            <li>인기순</li>
                            <li>이름순</li>
                        </ul>
                    </div>
                </div>
            </div>
            <LatestMusicList data={musicData} selectedAll={selectedAll} />
        </section>
    );
};

export default LatestMusicListWrap;
