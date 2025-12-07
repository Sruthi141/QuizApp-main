import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Profile = () => {
  const userName = useSelector((state) => state.mernQuize.userName);

  return (
    <div className="container mx-auto my-10 p-4 max-w-7xl bg-white dark:bg-gray-800 shadow-xl rounded-2xl">
      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-teal-500 text-3xl font-extrabold italic dark:text-teal-400">
          Welcome to Your Profile, {userName} 👋
        </h1>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center space-x-10">
        {/* Avatar Section */}
        <div className="flex justify-center w-1/2">
          <img
            src="./profile.gif"
            alt="profile"
            className="w-full h-full object-cover rounded-full shadow-lg dark:border-4 dark:border-teal-400"
          />
        </div>

        {/* Greeting Message */}
        <div className="w-full text-center lg:text-left lg:w-1/2 mt-6 lg:mt-0">
          <h2 className="text-xl text-sky-600 font-bold dark:text-sky-400">
            Welcome, {userName}!
          </h2>
          <p className="mt-2 text-md text-gray-700 dark:text-gray-200">
            Here's your profile and dashboard to access quizzes, track progress, and more!
          </p>
        </div>
      </div>

      {/* Action Button */}
      <div className="flex justify-center mt-10">
        <Link to="/">
          <button className="bg-teal-500 text-white text-xl font-bold px-6 py-3 rounded-md shadow-lg hover:bg-teal-600 dark:bg-teal-700 dark:hover:bg-teal-600">
            Attempt Quiz
          </button>
        </Link>
      </div>
    </div>
  );
};
