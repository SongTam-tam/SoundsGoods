import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import MusicModal from '../page/musicModal';
import { usemainAlbumStore } from '../store';
import Login from '../page/login';
import Join from '../page/join';
import HeaderM from './mobileHeader/HeaderM';
import { useEffect, useState } from 'react';

const Layout = () => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <div id="wrap">
            {width > 1024 ? <Header /> : <HeaderM />}
            <main>
                <Outlet />
                <MusicModal />

                {/* <Login /> */}
                {/* <Join /> */}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
