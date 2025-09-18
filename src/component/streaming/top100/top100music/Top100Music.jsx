import { useEffect, useState } from 'react';
import './style.scss';
import Top100MusicList from './Top100MusicList';
import top_1_50 from '../../../../assets/api/musicComponents/top_1_50';

const Top100Music = () => {
    const [sortType, setSortType] = useState('정렬');
    const [sortedList, setSortedList] = useState([...(top_1_50 || [])]);
    const [sortOpen, setSortOpen] = useState(false);
    const [selectedAll, setSelectedAll] = useState(false);

    const handleSelectAll = () => {
        setSelectedAll((prev) => !prev);
    };

    const toggleSort = () => setSortOpen((prev) => !prev);

    useEffect(() => {
        let topList = [...top_1_50];
        if (sortType === '최신순') {
            topList.sort((a, b) => new Date(b.release) - new Date(a.release));
        } else if (sortType === '인기순') {
            // 임시: 랜덤 정렬
            topList.sort(() => Math.random() - 0.5);
        } else if (sortType === '이름순') {
            topList.sort((a, b) => a.title.localeCompare(b.title));
        }
        setSortedList(topList);
    }, [sortType]);

    return (
        <section id="top100-music">
            <h2>인기 차트 TOP 50</h2>
            <div className="top100-music-top">
                <div className="top100-music-btn">
                    <button onClick={handleSelectAll}>
                        {selectedAll ? '전체 해제' : '전체 선택'}
                    </button>
                    <button>전체 재생</button>
                </div>
                <div className="top100-music-sort">
                    {!sortOpen && (
                        <div className="sort-down" onClick={toggleSort}>
                            {sortType}
                        </div>
                    )}
                    <ul className={`sorting-list ${sortOpen ? 'on' : ''}`}>
                        <li className="sorting-title" onClick={() => setSortOpen(false)}>
                            정렬
                        </li>
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
                </div>
            </div>

            <Top100MusicList data={sortedList} selectedAll={selectedAll} />
        </section>
    );
};

export default Top100Music;
