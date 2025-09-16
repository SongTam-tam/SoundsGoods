import { useEffect, useState } from 'react';
import './style.scss';
import Top100MusicList from './Top100MusicList';
import top_1_50 from '../../../../assets/api/musicComponents/top_1_50';
const Top100Music = () => {
    const [sortType, setSortType] = useState('최신순');
    const [sortedList, setSortedList] = useState([...(top_1_50 || [])]);
    const [sortOpen, setSortOpen] = useState(false);
    const toggleSort = () => setSortOpen(!sortOpen);
    useEffect(() => {
        let newList = [...(top_1_50 || [])];
        if (sortType === '최신순') {
            newList.sort((a, b) => new Date(b.release) - new Date(a.release));
        } else if (sortType === '인기순') {
            newList.sort(() => Math.random() - 0.5);
        } else if (sortType === '이름순') {
            newList.sort((a, b) => a.title.localeCompare(b.title));
        }
        setSortedList(newList);
    }, [sortType, top_1_50]);
    return (
        <section id="top100-music">
            <h2>인기 차트 TOP 50</h2>
            <div className="top100-music-top">
                <div className="top100-music-btn">
                    <button>전체 선택</button>
                    <button>전체 재생</button>
                </div>
                <div className="top100-music-sort">
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
            <Top100MusicList data={sortedList} />
        </section>
    );
};
////
export default Top100Music;
