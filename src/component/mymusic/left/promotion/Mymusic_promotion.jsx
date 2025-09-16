import React from 'react';
import { FaAngleRight } from 'react-icons/fa6';
import Mymusic_PromotionList from './Mymusic_PromotionList';

const Mymusic_promotion = () => {
    return (
        <div className="Mymusic_promotion">
            <div className="Mymusic_promotion_List">
                <div className="Mymusic_promotion_title">
                    <h2>이용권을 구매해서 더 많은 스트리밍을 즐겨보세요</h2>
                    <FaAngleRight />
                </div>
                <Mymusic_PromotionList />
            </div>
        </div>
    );
};

export default Mymusic_promotion;
