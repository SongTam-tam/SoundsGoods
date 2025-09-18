import React, { useEffect, useState } from 'react';
import { IoTodayOutline } from 'react-icons/io5';
import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import { useGoodsStore } from '../../../../store';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const LimitedGoodsItem = ({ item }) => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const { title, price, release, id, imageM, count, like } = item;
    const today = new Date();
    const releaseData = new Date(release.replace(/-/g, '/'));
    const diffTime = releaseData - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const { isLike, isLikeWithWish } = useGoodsStore();
    const wishadd = (x) => {
        if (like) {
            toast('위시리스트 삭제');
            isLikeWithWish(x);
        } else {
            toast('위시리스트');
            isLikeWithWish(x);
        }
    };
    return (
        <li className="lilili">
            <div className="goods_pic">
                <img src={imageM} alt="" />
                {width > 1024 ? (
                    <p className="like_count" onClick={() => wishadd(id)}>
                        {like ? (
                            <i style={{ color: '#ff0000' }}>
                                <FaHeart />
                            </i>
                        ) : (
                            <i style={{ color: '#fff' }}>
                                <FaRegHeart />
                            </i>
                        )}
                        <span> {count}</span>
                    </p>
                ) : (
                    <p className="like_count_mobile" onClick={() => wishadd(id)}>
                        {like ? (
                            <i style={{ color: '#ff0000' }}>
                                <FaHeart />
                            </i>
                        ) : (
                            <i style={{ color: 'rgba(0,0,0,0.1)' }}>
                                <FaRegHeart />
                            </i>
                        )}
                    </p>
                )}
            </div>
            {width > 1024 && (
                <div className="bottom_text">
                    <strong>{title}</strong>
                    <span>₩{price.toString()}</span>
                </div>
            )}
            {width < 1024 && (
                <div className="bottom_text_mobile">
                    <strong>{title}</strong>
                    <span>₩{price.toString()}</span>
                </div>
            )}
        </li>
    );
};

export default LimitedGoodsItem;
