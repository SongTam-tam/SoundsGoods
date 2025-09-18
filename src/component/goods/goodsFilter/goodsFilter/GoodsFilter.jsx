import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import { useGoodsStore } from '../../../../store';
const GoodsFilter = () => {
    const {filterCD} = useGoodsStore()
    return (
        <ul className="goods_category_list_p">
            <li  onClick={()=>filterCD('CD/DVD')}>
                <Link>
                    <div>
                        <img src="/images/main/cd.jpg" alt="" />
                    </div>
                    <span>CD / DVD</span>
                </Link>
            </li>
            <li onClick={()=>filterCD('MD')}>
                <Link>
                    <div>
                        <img src="/images/main/md.jpg" alt="" />
                    </div>
                    <span>MD</span>
                </Link>
            </li>
            <li onClick={()=>filterCD('Book')}> 
                <Link>
                    <div>
                        <img src="/images/main/book.jpg" alt="" />
                    </div>
                    <span>BOOK</span>
                </Link>
            </li>
            <li onClick={()=>filterCD('Clothes')}>
                <Link>
                    <div>
                        <img src="/images/main/clothes.png" alt="" />
                    </div>
                    <span>CLOTHES</span>
                </Link>
            </li>
            <li onClick={()=>filterCD('Etc.')}>
                <Link>
                    <div>
                        <img src="/images/main/etc.jpg" alt="" />
                    </div>
                    <span>ETC</span>
                </Link>
            </li>
        </ul>
    );
};

export default GoodsFilter;
