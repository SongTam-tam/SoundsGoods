import { Link, NavLink, useNavigate } from 'react-router-dom';
import './style.scss';
import { useState } from 'react';
import Login from '../../../page/login';
import useUserStore from '../../../store/userSlice';

const StreamingMenu = () => {
    const navigate = useNavigate();
    const toggleLogin = () => setIsLoginOpen((prev) => !prev);
    const { isLoggedIn, logout } = useUserStore();
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const goMymusic = () => {
        navigate('/mymusic');
    };
    const goAccess = () => {
        navigate('/mymusic/Access');
    };
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
                    {isLoggedIn ? (
                        <li onClick={goMymusic}>
                            <NavLink className={({ isActive }) => (isActive ? 'active' : '')}>
                                마이뮤직
                            </NavLink>
                        </li>
                    ) : (
                        <li onClick={goAccess}>
                            <NavLink className={({ isActive }) => (isActive ? 'active' : '')}>
                                마이뮤직
                            </NavLink>
                        </li>
                    )}

                    {!isLoggedIn ? (
                        <li className="btt_common" onClick={toggleLogin}>
                            <NavLink to="" className={({ isActive }) => (isActive ? 'active' : '')}>
                                로그인
                            </NavLink>
                        </li>
                    ) : (
                        <li className="btt_common" onClick={logout}>
                            <NavLink to="" className={({ isActive }) => (isActive ? 'active' : '')}>
                                로그아웃
                            </NavLink>
                        </li>
                    )}
                </ul>
            </div>
            {isLoginOpen && <Login onClose={toggleLogin} />}
        </section>
    );
};

export default StreamingMenu;
