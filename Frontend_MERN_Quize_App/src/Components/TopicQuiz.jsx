import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const TopicQuiz = () => {
  const userId = useSelector((state) => state.mernQuize.userId);

  return (
    <div className="mt-10 mb-10 text-black dark:text-white">
      {/* Header Section */}
      <div className="text-center mb-6">
        <h1 className="font-bold text-3xl text-gray-800 dark:text-white">
          Prepare By Topics
        </h1>
      </div>

      {/* Grid for Topics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto">
        {[
          { title: "HTML", link: "html", img: "/html-5.gif" },
          { title: "CSS", link: "css", img: "./css3.gif" },
          { title: "JavaScript", link: "javascript", img: "./javascript.gif" },
          { title: "React", link: "react", img: "./react.gif" },
          { title: "Redux", link: "redux", img: "./redux.svg" },
          { title: "MongoDB", link: "mongodb", img: "./mongo.gif" },
        ].map((topic, index) => (
          <Link
            key={index}
            to={userId ? `/quiz/${topic.link}` : "/register"}
            className="group flex items-center justify-between bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="w-full h-32 flex">
              {/* Text Section with Green Background */}
              <div className="flex justify-center items-center bg-green-600 w-2/3 h-full">
                <h1 className="font-bold text-xl text-white">{topic.title}</h1>
              </div>

              {/* Image Section */}
              <div className="w-1/3 flex justify-center items-center">
                <img
                  src={topic.img}
                  alt={topic.title}
                  className="object-contain w-20 h-20 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
};

export default TopicQuiz;
