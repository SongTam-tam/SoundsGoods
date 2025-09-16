import React from 'react';

const IveGoodsItem = ({ title, imageM, price }) => {
    return (
        <li>
            <div className="ive_pic">
                <img src={imageM} alt="" />
            </div>
            <p>
                <strong>{title}</strong>
                <span>₩{price.toLocaleString()}</span>
            </p>
        </li>
    );
};

export default IveGoodsItem;
