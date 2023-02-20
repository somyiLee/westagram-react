import React from "react";
import ReactDOM from "react-dom/client";
// import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />); // 초기 설정
// Main 컴포넌트 확인 시에는 root.render(<Main />);
// Login 컴포넌트 확인 시에는 root.render(<Login />);
