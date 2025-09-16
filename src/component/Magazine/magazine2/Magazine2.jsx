import './style.scss';

const Magazine2 = () => {
    return (
        <div className="content2">
            <div className="pick">
                <a href="">
                    <img src="./images/magazine/magazine_pick01.jpg" alt="pick" />
                </a>

                <div className="title">
                    <h2>EDITOR’S PICK</h2>
                    <strong>넷플릭스 오리지널 미국 애니메이션 영화</strong>
                    <p>
                        대한민국의 K-POP 아이돌을 소재로 하는 최초의 해외 제작 애니메이션이며 역사상
                        최초로 K-POP 음악을 활용한 뮤지컬 애니메이션 줄여서 '케데헌' 또는
                        '케데몬'이라고 불리며 영미권에선 'KPDH' 또는 'KDH'라고 줄여 부른다.
                    </p>
                    <div className="subes">
                        <div className="sub1">
                            <a href="">
                                <img src="./images/magazine/magazine_pick02.jpg" alt="Artiste" />
                            </a>
                            <h3>Artiste</h3>
                            <p>
                                OST 앨범 전체도 빌보드 200차트에 8위로 데뷔, 이후 3위까지 오르며
                                애니메이션 사운드트랙으로서 전례 없는 성과를 기록했습니다.
                            </p>
                        </div>
                        <div className="sub2">
                            <a href="">
                                <img src="./images/magazine/magazine_pick03.jpg" alt="헌트릭스" />
                            </a>
                            <h3>헌트릭스</h3>
                            <p>
                                데뷔 5년 차인 세계적으로 아이돌이자, 악령들을 물리치는 퇴마사 헌터.
                            </p>
                        </div>
                        <div className="sub3">
                            <a href="사자보이즈">
                                <img src="./images/magazine/magazine_pick04.jpg" alt="" />
                            </a>
                            <h3>사자보이즈</h3>
                            <p>
                                검은 수트와 카리스마 넘치는 퍼포먼스로, 이들은 영혼을 데려가는
                                저승사자의 이미지를 K-팝 아이돌의 화려함과 절묘하게 섞어내어 가상의
                                존재임에도 실제 아이돌 못지않은 매력을 발산하며 팬덤을 형성하고
                                있습니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Magazine2;
