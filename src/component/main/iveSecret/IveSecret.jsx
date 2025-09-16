import React, { useEffect, useState } from 'react';
import './style.scss';
import IveList from './leftIveList/IveList';
import ivedata from '../../../assets/api/iveData';
const IveSecret = () => {
    const [data, setData] = useState(ivedata);
    const [musicVedio, setMusicVedio] = useState(ivedata[0]);
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
        <section className="ive_secret">
            {width < 1024 && <h2 className="ive_title_mobile">NEW IVE SECRET</h2>}
            <div className="music_video_right">
                <iframe src="https://www.youtube.com/embed/B1ShLiq3EVc" className="muvi"></iframe>
            </div>
            <div className="left_ive_secret">
                {width > 1024 && (
                    <div className="left_ive_text">
                        <h2>{`NEw
IVE SECRET`}</h2>
                        <ul className="textBox">
                            <li>
                                <p>발매일</p>
                                <p>2025.08.25</p>
                            </li>
                            <li>
                                <p>장르</p>
                                <p>댄스 / 발라드</p>
                            </li>
                            <li>
                                <p>발매사</p>
                                <p>카카오엔터테인먼트</p>
                            </li>
                            <li>
                                <p>기획사</p>
                                <p>스타쉽엔터테인먼트</p>
                            </li>
                        </ul>
                        <div className="btn_more">
                            <button>
                                <img src="/images/icons/white_next.png" alt="" />
                            </button>
                            <span>앨범 구매하기</span>
                        </div>
                    </div>
                )}
                <IveList data={data} />
            </div>
            {width < 1024 && (
                <div className="ive_secret_mobile">
                    <strong>아이브 (IVE) - 미니앨범 4집 [IVE SECRET]</strong>
                    <span>발매일 | 2025.08.25</span>
                    <div className="btn_ive">
                        <button>
                            <img src="/images/icons/white_next.png" alt="" />
                        </button>
                        <span>앨범 구매하기</span>
                    </div>
                </div>
            )}
        </section>
    );
};

export default IveSecret;
