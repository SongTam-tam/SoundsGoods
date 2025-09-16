import React from 'react';
import './style.scss';
const MagazinTidins = () => {
    return (
        <div className="tidings_mag">
            <div className="tidings_text">
                <h2>지금 주목할 매거진 소식</h2>
                <p>{`K-POP부터 인디까지, 놓치면 아쉬운 음악 이야기.
                 아티스트의 비하인드 스토리와 최신 굿즈 공개. 
                 오늘도 새로운 음악 뉴스가 당신을 기다립니다.`}</p>
                <div className="tidings_btn">
                    <button>
                        <img src="/images/icons/white_next.png" alt="" />
                    </button>
                    <span>더 많은 매거진 알아보기</span>
                </div>
            </div>
        </div>
    );
};

export default MagazinTidins;
