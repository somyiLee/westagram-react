import React from "react";
import "./Login.css";
import "../../style/common.css";

const loginWrap = () => {
  return (
    <div className="loginWrap">
      <h1>Westagram</h1>
      <form>
        <input
          type="text"
          className="loginInput"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input type="password" className="loginInput" placeholder="비밀번호" />
        <button className="logBtn" disabled>
          로그인
        </button>
      </form>
      <div className="pwSearch">
        <a href="#none">비밀번호를 잊으셨나요?</a>
      </div>
    </div>
  );
};

// const loginInput = document.getElementsByTagName("input")[0];
// const passwordInput = document.getElementsByTagName("input")[1];
// const loginBtn = document.getElementsByClassName("logBtn")[0];

// const validate = () => {
//   this.value.indexOf("@") > -1 && passwordInput.value.length >= 5
//     ? loginBtn.classList.add("loginBtnAbled")
//     : loginBtn.classList.remove("loginBtnAbled");
// };

export default loginWrap;
