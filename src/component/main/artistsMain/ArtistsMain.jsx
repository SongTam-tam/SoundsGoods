import { useEffect, useState } from 'react';

import './style.scss';
import ArtistMobileList from './artistMobile/ArtistMobileList';
import ArtistsMainList from './artistsList/ArtistsMainList';

const ArtistsMain = () => {
    const today = new Date();
    const [width, setWidth] = useState(window.innerWidth);
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // 01~12
    const day = String(today.getDate()).padStart(2, '0'); // 01~31

    const formatted = `${year}-${month}-${day}`;
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <section className="artists_main">
            <h2 className="artist_title">Artists</h2>
            <div className="artist_list_main">
                {width > 1024 ? <ArtistsMainList /> : <ArtistMobileList />}
            </div>
        </section>
    );
};

export default ArtistsMain;
