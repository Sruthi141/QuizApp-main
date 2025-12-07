import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });
  const navigate = useNavigate();

  const register = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && password === reEnterPassword) {
      axios
        .post("https://mern-quiz-server-sudhir.onrender.com/register", user)
        .then((res) => {
          toast("Successfully Registered", {
            type: "success",
          });
          setTimeout(() => {
            navigate("/login");
          }, 3000);
        })
        .catch((err) => {
          toast("Invalid Input", {
            type: "error",
          });
        });
    } else {
      toast("Invalid Input", {
        type: "error",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div className="flex w-full justify-center m-auto mt-10 registermain">
      <div className="register">
        <p className="text-2xl font-semibold">Register</p>
        <input
          type="text"
          name="name"
          value={user.name}
          placeholder="Your Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          value={user.email}
          placeholder="Your Email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="Your Password"
          onChange={handleChange}
        />
        <input
          type="password"
          name="reEnterPassword"
          value={user.reEnterPassword}
          placeholder="Re-enter Password"
          onChange={handleChange}
        />
        <button
          className="clicabledivRegsiter"
          onClick={register}
        >
          Register
        </button>
        <ToastContainer />
        <div className="or-divider">OR</div>
        <Link to="/login">
          <div className="clicablediv">
            Login
          </div>
        </Link>
      </div>
      <div className="login-image">
        <img src="./login.gif" alt="login gif" />
      </div>
    </div>
  );
};
