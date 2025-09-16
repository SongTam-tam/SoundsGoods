import { useState } from 'react';
import ArtistCategoryItem from './ArtistCategoryItem';
import './style.scss';
import artist_info from '../../../../assets/api/artist_info';

const ArtistCategory = () => {
    const [artist] = useState(artist_info);

    return (
        <section id="artist-category">
            <div className="artist-category-top">
                <h2>아티스트별</h2>
                <div className="artist-sort">
                    <div className="sort-down">정렬</div>
                    <div className="sorting">
                        <ul>
                            <li className="sorting-title">정렬</li>
                            <li>가나다순</li>
                            <li>알파벳순</li>
                            <li>인기순</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="artist-category-list">
                {artist.slice(0, 15).map((item) => (
                    <ArtistCategoryItem key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
};

export default ArtistCategory;
