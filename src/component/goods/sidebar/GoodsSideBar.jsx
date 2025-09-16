import './style.scss';
import { IoMdSearch } from 'react-icons/io';
const GoodsSideBar = () => {
    return (
        <div className="goods_side_bar">
            <div className="side_inner">
                <h2>굿즈 찾기</h2>
                <div className="side_sort">
                    <div className="sort_text">
                        <p>정렬</p>
                        <img src="images/icons/black_top.png" alt="" />
                    </div>
                    <div className="side_sort_btns">
                        <button>
                            <span>최근순</span>
                        </button>
                        <button>
                            <span>인기순</span>
                        </button>
                        <button>
                            <span>기본순</span>
                        </button>
                    </div>
                </div>
                <div className="side_sort_price">
                    <div className="sort_text">
                        <p>가격</p>
                        <img src="images/icons/black_top.png" alt="" />
                    </div>
                    <ul className="sort_price">
                        <li className="on">
                            <span></span>
                            <p>1만원 미만</p>
                        </li>
                        <li>
                            <span></span>
                            <p>1 ~2만원대</p>
                        </li>
                        <li>
                            <span></span>
                            <p>3~4만원대</p>
                        </li>
                        <li>
                            <span></span>
                            <p>5~6만원대</p>
                        </li>
                        <li>
                            <span></span>
                            <p>10만원 이상</p>
                        </li>
                    </ul>
                </div>
                <div className="sort_input">
                    <div className="sort_text">
                        <p>필터</p>
                        <img src="images/icons/black_top.png" alt="" />
                    </div>
                    <form action="" className="artist_search">
                        <input type="text" name="" id="" placeholder="아티스트 찾기" />
                        <i>
                            <IoMdSearch />
                        </i>
                    </form>
                </div>
                <div className="sort_product">
                    <div className="sort_text">
                        <p>제품</p>
                    </div>
                    <ul className="product_filter">
                        <li>CD / DVD</li>
                        <li>Merch</li>
                        <li>도서</li>
                        <li>의류</li>
                        <li>기타</li>
                    </ul>
                    <div className="sold_out">
                        <p>slod out 포함</p>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div className="sold_out">
                        <p>판매 예정 포함</p>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>
                <p className="filter_btn">
                    <button>필터 적용하기</button>
                </p>
            </div>
        </div>
    );
};

export default GoodsSideBar;
