import './style.scss';

import { FaStar } from 'react-icons/fa';
const Review = ({ title }) => {
    return (
        <div className="review_box">
            <p className="review_one">
                <span>리뷰</span>
                <span>한줄평</span>
            </p>
            <div className="con">
                <div className="profile">
                    <img src="/images/icons/profile.png" alt="" />
                    <div className="name_star">
                        <strong>김*래</strong>
                        <ul className="star">
                            <li>
                                <i>
                                    <FaStar />
                                </i>
                            </li>
                            <li>
                                <i>
                                    <FaStar />
                                </i>
                            </li>
                            <li>
                                <i>
                                    <FaStar />
                                </i>
                            </li>
                            <li>
                                <i>
                                    <FaStar />
                                </i>
                            </li>
                            <li>
                                <i>
                                    <FaStar />
                                </i>
                            </li>
                            <li>(2025.05.20)</li>
                        </ul>
                        {/* star */}
                    </div>
                    {/* name_star */}
                </div>
                {/* profile */}
                <p className="album">{title}</p>
                <p className="good_review">아주 좋아요</p>
                <p className="review_text">{`“포장이 꼼꼼해서 파손 없이 잘 도착했어요. 사진보다 실물이 훨씬 예쁘고 퀄리티도
                 만족스럽습니다. 팬이라면 꼭 소장할 만한 굿즈예요.”`}</p>
                <p className="help_text">
                    <span>6명에게 도움 됨</span>
                    <button>도움이 돼요</button>
                    <button>도움이 안 돼요</button>
                </p>
            </div>
            {/* con */}
            <div className="con">
                <div className="profile">
                    <img src="/images/icons/profile.png" alt="" />
                    <div className="name_star">
                        <strong>유*윤</strong>
                        <ul className="star">
                            <li>
                                <i>
                                    <FaStar />
                                </i>
                            </li>
                            <li>
                                <i>
                                    <FaStar />
                                </i>
                            </li>
                            <li>
                                <i>
                                    <FaStar />
                                </i>
                            </li>
                            <li>
                                <i>
                                    <FaStar />
                                </i>
                            </li>
                            <li>
                                <i>
                                    <FaStar />
                                </i>
                            </li>
                            <li>(2025.05.20)</li>
                        </ul>
                        {/* star */}
                    </div>
                    {/* name_star */}
                </div>
                {/* profile */}
                <p className="album">{title}</p>
                <p className="good_review">보통</p>
                <p className="review_text">{`“사진이랑 거의 동일하고 색감이 더 선명합니다. 다만 사이즈가 생각보다 작아서 참
                고하시면 좋을 것 같아요.”`}</p>
                <p className="help_text">
                    <span>6명에게 도움 됨</span>
                    <button>도움이 돼요</button>
                    <button>도움이 안 돼요</button>
                </p>
            </div>
            {/* con */}
            <div className="con">
                <div className="profile">
                    <img src="/images/icons/profile.png" alt="" />
                    <div className="name_star">
                        <strong>강*선</strong>
                        <ul className="star">
                            <li>
                                <i>
                                    <FaStar />
                                </i>
                            </li>
                            <li>
                                <i>
                                    <FaStar />
                                </i>
                            </li>
                            <li>
                                <i>
                                    <FaStar />
                                </i>
                            </li>
                            <li>
                                <i>
                                    <FaStar />
                                </i>
                            </li>
                            <li>
                                <i>
                                    <FaStar />
                                </i>
                            </li>
                            <li>(2025.05.20)</li>
                        </ul>
                        {/* star */}
                    </div>
                    {/* name_star */}
                </div>
                {/* profile */}
                <p className="album">{title}</p>
                <p className="good_review">좋아요</p>
                <p className="review_text">{`“배송은 조금 느렸지만 기다린 보람이 있네요. 재질이 탄탄하고 디자인도 고급스러
                워서 데일리로 쓰기 좋아요.”`}</p>
                <p className="help_text">
                    <span>6명에게 도움 됨</span>
                    <button>도움이 돼요</button>
                    <button>도움이 안 돼요</button>
                </p>
            </div>
            {/* con */}
        </div>
    );
};

export default Review;
