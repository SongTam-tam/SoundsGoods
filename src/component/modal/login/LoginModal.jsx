import { useState } from "react";
import useUserStore from "../../../store/userSlice";
import "./style.scss";
import { IoClose } from "react-icons/io5";

const LoginModal = ({ onClose, onJoin }) => {
  const login = useUserStore((state) => state.login);
  const [loginForm, setLoginForm] = useState({ loginEmail: "", loginPW: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("members")) || [];
    const user = users.find(
      (u) =>
        u.loginId === loginForm.loginEmail && u.password === loginForm.loginPW
    );

    if (user) {
      login({ name: user.name, loginId: user.loginId });
      alert(`${user.name}님, 오신 걸 환영합니다.`);
      onClose();
    } else {
      alert("로그인 정보를 확인해주세요.");
    }
  };

  const onHandleClick = () => {
    onJoin();
    onClose();
  };

  return (
    <div className="login">
      <p className="close">
        <IoClose onClick={onClose} />
      </p>
      <h1>로그인</h1>

      <div className="loginInput">
        <p>
          <input
            type="text"
            name="loginEmail"
            placeholder="아이디"
            value={loginForm.loginEmail}
            onChange={handleChange}
          />
        </p>

        <p>
          <input
            type="password"
            name="loginPW"
            placeholder="비밀번호"
            value={loginForm.loginPW}
            onChange={handleChange}
          />
        </p>
      </div>

      <div className="btn1">
        <button className="on" type="button" onClick={handleLogin}>
          로그인
        </button>
      </div>

      <ul>
        <li>아이디 찾기</li>
        <li>비밀번호 찾기</li>
        <li onClick={onHandleClick}>회원가입</li>
      </ul>

      <i className="snslogin">
        <p>
          <img
            src="/images/icons/login01.png"
            alt="googlelogin"
            width={32}
            height={32}
          />
        </p>
        <p>
          <img
            src="/images/icons/login02.png"
            alt="applelogin"
            width={32}
            height={32}
          />
        </p>
        <p>
          <img
            src="/images/icons/login03.png"
            alt="kakaologin"
            width={32}
            height={32}
          />
        </p>
      </i>
    </div>
  );
};

export default LoginModal;
