import React, { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "./login.scss";
import eye from "../../assets/eye.svg";
import eyeSlash from "../../assets/eye-slash.svg";

const Login = () => {
  let navigate = useNavigate();
  let [openEye, setOpenEye] = useState(false);
  const [username, setUsername] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");
  const [loading, setLoading] = useState(false);

  function handleOpenEye() {
    setOpenEye(true);
  }
  function handleCloseEye() {
    setOpenEye(false);
  }

  const handleLogin = (e) => {
    e.preventDefault();
    let user = { username, password };
    setLoading(true);

    axios
      .post("https://dummyjson.com/auth/login", user)
      .then((res) => {
        console.log(res.data);
        // toast.success("welcome")
        localStorage.setItem("x-auth-token", res.data.token);
        navigate("/admin/create");
      })
      .catch((err) => {
        console.log(err);
        toast.error("username or password is incorrect");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="login container">
      <h2 className="login__title">Login</h2>

      <form className="login__form" onSubmit={handleLogin} action="">
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          name=""
        />
        <div className="password__login">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={!openEye ? "password" : "text"}
            name=""
          />
          {openEye ? (
            <img
              onClick={handleCloseEye}
              className="eye"
              width="25"
              src={eyeSlash}
              alt=""
            />
          ) : (
            <img
              onClick={handleOpenEye}
              className="eye"
              width="25"
              src={eye}
              alt=""
            />
          )}
        </div>
        <button
          className={loading ? "loginBtn disabled" : "loginBtn"}
          disabled={loading}
        >
          {loading ? "Loading..." : "Log in"}
        </button>
      </form>
      <div className="login__btns">
        <button onClick={() => navigate("/")}>Go Home</button>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </div>
  );
};

export default memo(Login);
