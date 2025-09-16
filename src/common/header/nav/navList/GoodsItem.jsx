import React from 'react';
import './Goodsstyle.scss';
import { useNavigate } from 'react-router-dom';
const GoodsItem = ({ data }) => {
    const navigate = useNavigate();
    const onClick = () => {
        navigate(`/goods/${data.id}`);
    };
    return (
        <div className="goodsbox">
            <div className="goodsitembox" onClick={onClick}>
                <div className="imgbox">
                    <img src={data.imageM} alt="" />
                </div>
                <div className="goodTextbox">
                    <h2>{data.artist}</h2>
                    <h3>{data.title}</h3>
                    <h4>{data.price}원</h4>
                </div>
            </div>
        </div>
    );
};

export default GoodsItem;
