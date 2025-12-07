import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  loginAdminId,
  loginAdminName,
  loginUser,
  loginUserName,
} from "../../Redux/action.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios
      .post("https://mern-quiz-server-sudhir.onrender.com/login", user)  
      .then((res) => {
        if (res.data.user && res.data.user.email === "admin@example.com") {
          dispatch(loginAdminId(res.data.user._id));
          dispatch(loginAdminName(res.data.user.name));
          toast(`Welcome Admin ${res.data.user.name}`, { type: "success" });
          
          navigate("/admin");  
        } else {
          dispatch(loginUser(res.data.user._id));
          dispatch(loginUserName(res.data.user.name));
          toast("Successfully Logged In", { type: "success" });
          
          navigate("/profile");  
        }
      })
      .catch((err) => {
        toast("Invalid Credentials", { type: "error" });
      });
  };

  return (
    <div className="flex justify-around items-center m-auto mt-16 mb-16">
      <div className="login">
        <h1 className="text-2xl font-semibold">Login</h1>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Enter your Email"
        />
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Enter your Password"
        />
        <div>
          <button onClick={login} className="login-btn">
            Login
          </button>
          <ToastContainer />
        </div>
        <div className="or-divider">OR</div>
        <Link to="/register">
          <button className="register-btn">Register</button>
        </Link>
      </div>
      <div className="login-image">
        <img src="./login.gif" alt="login gif" />
      </div>
    </div>
  );
};
