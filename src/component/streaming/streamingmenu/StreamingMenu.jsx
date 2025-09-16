import { Link, NavLink } from 'react-router-dom';
import './style.scss';

const StreamingMenu = () => {
    return (
        <section id="streamingmenu">
            <div className="menu_inner">
                <ul>
                    <li>
                        <NavLink
                            to="/streaming/"
                            end
                            className={({ isActive }) => (isActive ? 'active' : '')}
                        >
                            홈
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/streaming/top100"
                            className={({ isActive }) => (isActive ? 'active' : '')}
                        >
                            인기 차트 TOP 50
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/streaming/latestmusic"
                            className={({ isActive }) => (isActive ? 'active' : '')}
                        >
                            최신 음악
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/streaming/genre"
                            className={({ isActive }) => (isActive ? 'active' : '')}
                        >
                            장르별 음악
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/streaming/artist"
                            className={({ isActive }) => (isActive ? 'active' : '')}
                        >
                            아티스트별 음악
                        </NavLink>
                    </li>
                </ul>
                <ul className="streamingmenu_btt">
                    <li>
                        <NavLink
                            to="/mymusic"
                            className={({ isActive }) => (isActive ? 'active' : '')}
                        >
                            마이뮤직
                        </NavLink>
                    </li>
                    <li className="btt_common">
                        <NavLink to="" className={({ isActive }) => (isActive ? 'active' : '')}>
                            설정
                        </NavLink>
                    </li>
                    <li className="btt_common">
                        <NavLink to="" className={({ isActive }) => (isActive ? 'active' : '')}>
                            로그아웃
                        </NavLink>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default StreamingMenu;
