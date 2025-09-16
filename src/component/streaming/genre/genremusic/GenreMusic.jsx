import { useEffect, useState } from 'react';
import GenreMusicList from './GenreMusicList';
import './style.scss';

const GenreMusic = ({ data }) => {
    const [selectedAll, setSelectedAll] = useState(false);
    const [sortType, setSortType] = useState('최신순');
    const [sortedList, setSortedList] = useState([...(data.music || [])]);
    const [sortOpen, setSortOpen] = useState(false);
    const handleSelectAll = () => {
        setSelectedAll((prev) => !prev);
    };
    const toggleSort = () => setSortOpen(!sortOpen);

    useEffect(() => {
        let newList = [...(data.music || [])];

        if (sortType === '최신순') {
            newList.sort((a, b) => new Date(b.release) - new Date(a.release));
        } else if (sortType === '인기순') {
            newList.sort(() => Math.random() - 0.5);
        } else if (sortType === '이름순') {
            newList.sort((a, b) => a.title.localeCompare(b.title));
        }

        setSortedList(newList);
    }, [sortType, data.music]);

    return (
        <section id="genre-music">
            <h2>{data.genre} 카테고리의 모든 음악</h2>
            <div className="genre-music-top">
                <div className="genre-music-btn">
                    <button onClick={handleSelectAll}>
                        {selectedAll ? '전체 해제' : '전체 선택'}
                    </button>
                    <button>전체 재생</button>
                </div>
                <div className="genre-music-sort">
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
            <GenreMusicList data={sortedList} selectedAll={selectedAll} />
        </section>
    );
};

export default GenreMusic;
