import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { IoIosClose } from 'react-icons/io';
import { useGoodsStore } from '../../store';
import { toast } from 'react-toastify';
const WishItem = ({ item }) => {
    const {
        id,
        artist,
        title,
        category,
        price,
        release,
        cpn,
        imageM,
        imageS,
        remain,
        quantity,
        like,
        modal,
        chk,
        bookmark,
        count,
    } = item;
const {delWish} = useGoodsStore()
const Del = (x) =>{
    delWish(x)
    toast('위시리스트 삭제')
}
    return (
        <li className="li">
            <p className="heart_icons">
                <i>
                    <FaHeart />
                </i>
            </p>
            <div className="wish_pic">
                <img src={imageM} alt="" />
            </div>
            <div className="wish_list_text">
                <strong>{title}</strong>
                <div className="con_text">
                    <ul className="co co1">
                        <li>{artist}</li>
                        <li>{category}</li>
                    </ul>
                    <ul className="co co2">
                        <li>{cpn}</li>
                        <li>{release}</li>
                    </ul>
                </div>
                <p className="wish_price">₩ {price.toLocaleString()}</p>
                <div className="con_text2">
                    <ul className="co co1">
                        <li>남은수량</li>
                        <li>{remain}</li>
                    </ul>
                    <ul className="co co2">
                        <li>리뷰</li>
                        <li>2,567건</li>
                    </ul>
                </div>
            </div>
            <div className="btn_close">
                <p className="ppp">
                    <button>구매 하러가기</button>
                </p>
                <button className="close" onClick={()=>Del(id)}>
                    <i>
                        <IoIosClose />
                    </i>
                </button>
            </div>
        </li>
    );
};

export default WishItem;
