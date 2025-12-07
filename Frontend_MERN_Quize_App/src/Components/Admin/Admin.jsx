import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllUserDataFromBackend } from "../../Redux/action.js";
import { UserdetailForAdmin } from "./UserdetailForAdmin.jsx";


export const Admin = () => {
  const allUsers = useSelector((state) => state.mernQuize.Alluser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addquiz = () => {
    navigate("/addquiz");
  };

  useEffect(() => {
    dispatch(getAllUserDataFromBackend());
  }, [dispatch]);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto p-8">
        {/* Admin Profile Section */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">Hi Admin,</h1>
            <h2 className="text-3xl font-medium text-blue-600 dark:text-blue-400 mt-2">Rishika </h2>
          </div>
        </div>

        {/* Add Quiz Button */}
        <div className="flex justify-end mb-8">
          <button onClick={addquiz} className="bg-orange-600 text-white py-2 px-6 rounded-md font-semibold hover:bg-orange-700 transition duration-300">
            ADD QUIZ
          </button>
        </div>

        {/* User Scores Monitoring Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">All Users' Quiz Scores</h2>

          {/* Display User Details, Scores, and Quizzes Attempted */}
          <div className="overflow-x-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4">
            <table className="min-w-full table-auto border-collapse">
              <thead>
                <tr>
                  <th className="py-3 px-6 text-left text-gray-600 dark:text-gray-300">User Name</th>
                  <th className="py-3 px-6 text-left text-gray-600 dark:text-gray-300">Email</th>
                  <th className="py-3 px-6 text-left text-gray-600 dark:text-gray-300">Score</th>
                  <th className="py-3 px-6 text-left text-gray-600 dark:text-gray-300">Quizzes Attempted</th>
                </tr>
              </thead>
              <tbody>
              {allUsers?.map((user, index) => (
                  <tr key={index} className="bg-gray-100 dark:bg-gray-700 dark:text-white">
                    <td className="py-3 px-6">{user.name}</td>
                    <td className="py-3 px-6">{user.email}</td>
                    <td className="py-3 px-6">{user.score || "Not yet taken"}</td>
                    <td className="py-3 px-6">
                      {/* Display Quizzes Attempted with scores */}
                      {user.quizzesAttempted ? user.quizzesAttempted.map((quiz, idx) => (
                        <div key={idx}>
                          <strong>Quiz {idx + 1}: </strong> Score: {quiz.score} <br />
                        </div>
                      )) : "No quizzes attempted"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Displaying User Data */}
        <div className="mt-10">
          <UserdetailForAdmin data={allUsers} />
        </div>
      </div>
    </div>
  );
};