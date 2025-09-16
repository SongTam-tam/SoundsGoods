import { useState, useEffect } from 'react';
import LatestMusicList from './LatestMusicList';
import './style.scss';
import newData_51_100 from '../../../../assets/api/musicComponents/newData_51_100';

const LatestMusicListWrap = () => {
    const [musicData, setMusicData] = useState([...(newData_51_100 || [])]);
    const [selectedAll, setSelectedAll] = useState(false);
    const [sortType, setSortType] = useState('최신순');
    const [sortedList, setSortedList] = useState([...(newData_51_100 || [])]);
    const [sortOpen, setSortOpen] = useState(false);

    const handleSelectAll = () => {
        setSelectedAll((prev) => !prev);
    };

    const toggleSort = () => setSortOpen(!sortOpen);

    useEffect(() => {
        let newList = [...(newData_51_100 || [])];
        if (sortType === '최신순') {
            newList.sort((a, b) => new Date(b.release) - new Date(a.release));
        } else if (sortType === '인기순') {
            newList.sort(() => Math.random() - 0.5);
        } else if (sortType === '이름순') {
            newList.sort((a, b) => a.title.localeCompare(b.title));
        }
        setSortedList(newList);
        setMusicData(newList);
    }, [sortType, newData_51_100]);

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
                    <div className="sort-down" onClick={toggleSort}>
                        정렬
                    </div>

                    <div className="sorting">
                        {sortOpen && (
                            <ul className={`sorting ${sortOpen ? 'on' : ''}`}>
                                <li className="sorting-title">정렬</li>
                                {['최신순', '인기순', '이름순'].map((type) => (
                                    <li
                                        key={type}
                                        className={sortType === type ? 'on' : ''}
                                        onClick={() => {
                                            setSortType(type);
                                            setSortOpen(false);
                                        }}
                                    >
                                        {type}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
            <LatestMusicList data={sortedList} selectedAll={selectedAll} />
        </section>
    );
};

export default LatestMusicListWrap;
