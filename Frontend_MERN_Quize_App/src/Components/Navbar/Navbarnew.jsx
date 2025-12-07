import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Logouthandleraction } from "../../Redux/action"; 
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Navbarnew = () => {
  const userId = useSelector((state) => state.mernQuize.userId);
  const userName = useSelector((state) => state.mernQuize.userName);
  const adminName = useSelector((state) => state.mernQuize.adminName);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logouthandler = () => {
    // Logout logic
    if (userName !== null) {
      dispatch(Logouthandleraction()); // Dispatch logout action
      toast(`${userName} Successfully Logout `, { type: "success" });
    }
    if (adminName === "Rishika") {
      toast(`Rishika Successfully Logout `, { type: "success" });
      dispatch(Logouthandleraction());
    }

    
    navigate("/");
  };

  const profilenavigate = () => {
    navigate("/profile");
  };

  return (
    <div className="w-11/12 h-24 m-auto flex bg-slate-50 mb-8 dark:bg-slate-800">
      <Link to="/" className="w-4/12 flex">
      </Link>
      <div className="w-8/12 flex justify-end items-center space-x-8 mr-[76px]">
        {userName ? (
          <>
            <button
              onClick={profilenavigate}
              className="text-xl font-medium text-gray-900 dark:text-gray-300"
            >
              Profile
            </button>
            <button
              onClick={logouthandler}
              className="text-xl font-medium text-red-500 dark:text-red-400"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link 
              to="/login" 
              className="text-xl font-medium text-gray-900 dark:text-gray-300"
            >
              Login
            </Link>
            <Link 
              to="/register" 
              className="text-xl font-medium text-gray-900 dark:text-gray-300"
            >
              Register
            </Link>
          </>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Navbarnew;
