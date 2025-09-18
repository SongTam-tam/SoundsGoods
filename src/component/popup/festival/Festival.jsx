import React from 'react';
import './style.scss';
import FestivalList from './festivalList/FestivalList';
const Festival = () => {
    return (
        <div className="festival">
            <div className="festival_left">
                <div className="pic">
                    <img src="/images/popup/pop_con2_left01.jpg" alt="" />
                </div>
                <div className="festival_text">
                    <strong>{`핫한 부산에서 열리는
시원한 워터밤 페스티벌`}</strong>
                    <div className="con">
                        <ul className="festival_ul">
                            <li>위치</li>
                            <li>부산, 워터밤</li>
                        </ul>
                        <ul className="festival_ul">
                            <li>기간</li>
                            <li>2025. 10. 10</li>
                        </ul>
                    </div>
                    <span>
                        워터밤은 여름마다 서울·부산 등에서 열리는 대규모 뮤직 페스티벌로,
                        EDM·힙합·K-POP 축제
                    </span>
                </div>
            </div>
            <div className="festival_right">
                <div className="title_box">
                    <h2>지금바로 사전 예약 가능 !</h2>
                    <span>전체보기</span>
                </div>
                <FestivalList />
            </div>
        </div>
    );
};

export default Festival;
