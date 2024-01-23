import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Hàm submit form
  const handleSubmit = (e) => {
    // Ngăn chặn sự kiện load lại trang
    e.preventDefault();

    if (email === "nvquy@gmail.com" && password === "123456") {
      // Chuyển hướng về trang Home
      //   window.location.href = "/";
      navigate("/");
    } else {
      // Chuyển hướng về trang login
      //   window.location.href = "/login";
      navigate("/login");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
}
