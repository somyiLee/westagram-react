import React from "react";
import { Link } from "react-router-dom";
import "../../style/reset.css";
import "../../style/common.css";
import "./Login.scss";

const Login = () => {
  return (
    <div className="loginContainer">
      <h1>Westagram</h1>
      <form>
        <input type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
        <input type="password" placeholder="비밀번호" />
        <button type="button" disabled>
          <Link to="/main">로그인</Link>
        </button>
      </form>
      <div className="pwSearch">
        <Link to="/">비밀번호를 잊으셨나요?</Link>
      </div>
    </div>
  );
};

export default Login;
