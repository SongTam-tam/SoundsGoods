import React, { useState } from 'react';
import './style.scss';
import { FaChevronRight } from 'react-icons/fa';
import Login from '../../../page/login';
import { useNavigate } from 'react-router-dom';
import Join from '../../../page/join';
const Mymusic_Access = () => {
    const navigate = useNavigate();
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const toggleLogin = () => setIsLoginOpen((prev) => !prev);
    const [isJoinOpen, setIsJoinOpen] = useState(false);
    const toggleJoin = () => setIsJoinOpen((prev) => !prev);

    const onLogin = () => {
        toggleLogin();
        navigate('/');
    };
    return (
        <div className="inner">
            <div className="access">
                <img src="../../../../public/images/icons/Login_Acess.png" alt="" />
            </div>
            <div className="text">
                <p>
                    로그인하고 나만의 <span>할인 이용권</span>을 확인해 보세요!
                    <br /> 카카오톡으로 할인혜택을 받아보세요.
                </p>
            </div>
            <div className="login-button">
                <button onClick={toggleLogin}>
                    <FaChevronRight />
                    로그인하기
                </button>
                <button onClick={toggleJoin}>
                    <FaChevronRight />
                    회원가입
                </button>
            </div>
            {isLoginOpen && <Login onClose={onLogin} />}
            {isJoinOpen && <Join onClose={toggleJoin} />}
        </div>
    );
};

export default Mymusic_Access;
