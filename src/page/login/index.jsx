import React from 'react';
import './style.scss';
import LoginModal from '../../component/modal/login/LoginModal';

const Login = ({ onClose, onJoin }) => {
    return (
        <div className="overray">
            <div className="modal">
                <LoginModal onClose={onClose} onJoin={onJoin} />
            </div>
        </div>
    );
};

export default Login;
