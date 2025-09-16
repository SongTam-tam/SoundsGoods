import Magazine2 from '../magazine2/Magazine2';
import Magazine3 from '../magazine3/Magazine3';
import './style.scss';

const Magazine1 = () => {
    return (
        <div className="inner">
            <div className="content1">
                <div className="day21">
                    <h2>21</h2>
                    <ul className="magazine21">
                        <li>제니, 지금 K팝 최고의 빛이 나는 솔로</li>
                        <li>제42회 VMA, 후보에 오른 아티스트들</li>
                        <li>요즘 히트곡들은 모두 Vince의 손끝에서 만들어진다. </li>
                        <li>
                            <img src="./images/main/main_con6_04.jpg" alt="로제" />
                            <div className="mg-title">
                                <h3>로제&브루노 마스</h3>
                                <span>댓글 96 | 조회 1,872</span>
                            </div>
                            <p>
                                가수 로제와 브루노 마스가 함께 불렀으며, 한국의 술자리 게임
                                '아파트'에서 영감을 얻어 만들어졌습니다. 
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="day22">
                    <h2>22</h2>
                    <ul className="magazine22">
                        <li>
                            <img
                                src="./images/magazine/magazine01.jpg"
                                alt="임영웅"
                                style={{ width: 340 }}
                            />
                            <div className="mg-title">
                                <h3>임영웅</h3>
                                <span>댓글 96 | 조회 1,872</span>
                            </div>

                            <p>
                                '순간을 영원처럼'은 임영웅의 따뜻한 보컬과 평범한 일상 속에서 서로
                                미워하지 말고 사랑하며 순간을 영원처럼 살아가자는 메시지가 있습니다
                            </p>
                        </li>
                        <li>
                            <img
                                src="./images/magazine/magazine02.jpg"
                                alt="제니"
                                style={{ width: 340 }}
                            />
                            <div className="mg-title">
                                <h3>제니</h3>
                                <span>댓글 96 | 조회 1,872</span>
                            </div>
                            <p>
                                멋진 태도와 퍼포먼스에 반한 많은 사람들이 'like JENNIE'의 댄스를
                                따라 추며 호응을 보내고 있습니다.
                            </p>
                        </li>
                        <li>만화 찢고 나왔어요! K팝과 만화가의 컬래버레이션</li>
                    </ul>
                </div>
                <div className="day23">
                    <h2>23</h2>
                    <ul className="magazine23">
                        <li>
                            <h3>
                                코르티스는 18일 데뷔 앨범 타이틀곡, 'What You Want'(왓 유 원트)를
                                발매했다. 
                            </h3>
                            <img
                                src="./images/magazine/magazine04.jpg"
                                alt="코르티스"
                                style={{ width: 400 }}
                            />

                            <h3>선 밖에서 나타난 코르티스, 자신들을 보여준 패기의 '영크크'</h3>
                            <span>댓글 96 | 조회 1,872</span>

                            <p>
                                'What You Want'는 새로운 세상에 발을 들인 코르티스의 다짐을 담은
                                선언문이다. 1960년대 사이키델릭 록의 향수를 담은 기타 리프와 힙합
                                기반의 붐뱁 리듬이 섞였으며, 원하는 것을 주저하지 않고 손에 넣겠다는
                                신인다운 패기를 담았습니다.
                            </p>
                        </li>
                        <li>2025년 숏폼을 지배 중인 노래 리스트</li>
                        <li>누가 무대에 오를까? 2025 코첼라 페스티벌</li>
                    </ul>
                </div>
                <div className="day24">
                    <h2>
                        24 <span className="today">Today</span>
                    </h2>
                    <ul className="magazine24">
                        <li>
                            <img src="./images/magazine/magazine05.jpg" alt="아이브" />
                            <div className="mg-title">
                                <h3> 아이브(IVE)</h3>
                                <span>댓글 96 | 조회 1,872</span>
                            </div>
                            <p>
                                완벽함의 틈을 인정하면서도 그것마저 하나의 매력으로 전환하는 방식.
                                이번 앨범은 그렇게 아이브다운 비밀을 만들었습니다.
                            </p>
                        </li>

                        <li>
                            <img src="./images/magazine/magazine06.jpg" alt="전소미" />
                            <div className="mg-title">
                                <h3> 전소미</h3>
                                <span>댓글 96 | 조회 1,872</span>
                            </div>
                            <p>더블랙레이블 주가 더 끌어올린 터줏대감의 품격.</p>
                        </li>
                    </ul>
                </div>
            </div>
            <Magazine2 />
            <Magazine3 />
        </div>
    );
};

export default Magazine1;
