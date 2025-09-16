import React from 'react';
import Search_goodsItem from './Search_goodsItem';
import './style.scss';
const Search_goodsList = ({ data }) => {
    return (
        <div className="goodsList">
            <div className="goodsTitle">
                <h2>굿즈 검색결과</h2>
                <h3>더보기</h3>
            </div>
            <div className="goods">
                {data
                    .flatMap((artist) => artist.goods || [])
                    .map((goods) => (
                        <Search_goodsItem key={goods.id} item={goods} />
                    ))}
            </div>
        </div>
    );
};

export default Search_goodsList;
