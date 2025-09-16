import { useEffect, useState } from 'react';
import PopupMainList from './popupList/PopupMainList';
import './style.scss';

const PopupMain = () => {
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
        <section className="popup_main">
            <h2>최근 팝업 / 이벤트 소개</h2>
            <div className="popup_main_sub">
                {width > 1024 && (
                    <div className="popup_left">
                        <img src="/images/main/main_con5_01.jpg" alt="" />
                    </div>
                )}
                <div className="popup_right">
                    <PopupMainList />
                </div>
            </div>
        </section>
    );
};

export default PopupMain;
