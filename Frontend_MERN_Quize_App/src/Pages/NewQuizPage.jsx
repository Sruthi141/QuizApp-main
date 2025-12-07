import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuizDataFrombackend } from "../Redux/action.js";

export const NewQuizPage = () => {
  const data = useSelector((state) => state.mernQuize.QuizData);
  const [count, setCount] = useState(0);
  const [clickoption, setClickOption] = useState(false);

  const handleAnswer = (index, e, el) => {
    if (clickoption === false) {
      if (el.answer[0][index] === el.correctAnswer) {
        setCount(count + 1);
      }
    }
  };

  // ------taking path from window object and comparing with the backend data
  const pathname = window.location.pathname
    .split("")
    .splice(1, window.location.pathname.length)
    .join("");

  const filtertopicwise = data.filter((el) => {
    return pathname === el.title;
  });

  const newfilterquestions = filtertopicwise[0]?.questions;
  const dispatch = useDispatch();

  const fetchQuizData = () => {
    dispatch(fetchQuizDataFrombackend());
  };

  useEffect(() => {
    fetchQuizData();
  }, []);

  const handlecount = (index) => {
    setClickOption(true);
  };

  return (
    <div className="relative">
      {/* Score Display */}
      <div className="absolute right-10 top-10 border-2 border-orange-500 text-orange-500 font-bold py-2 px-4 rounded-lg shadow-lg dark:border-orange-700 dark:text-orange-400">
        <h1 className="text-lg">Score: {count}</h1>
      </div>

      {/* Quiz Container */}
      <div className="mt-16 mx-auto w-11/12 lg:w-9/12 dark:bg-gray-900">
        {newfilterquestions?.map((el, index) => (
          <div
            key={index}
            className="border-2 border-gray-200 rounded-lg p-6 mb-6 shadow-md bg-white dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="mb-4">
              <p className="text-orange-600 font-semibold text-lg dark:text-orange-400">
                Question {index + 1}:
              </p>
              <p className="text-gray-800 text-lg dark:text-gray-100">{el.que}</p>
            </div>

            <div className="mt-4">
              {el?.answer[0]?.map((option, optionIndex) => (
                <div
                  key={optionIndex}
                  className="flex items-center space-x-3 cursor-pointer group dark:hover:bg-gray-700"
                  onClick={() => handleAnswer(optionIndex, option, el)}
                >
                  <p className="text-gray-500 dark:text-gray-300">
                    {optionIndex + 1}) 
                  </p>
                  <div className="w-full">
                    <li className="list-none text-gray-700 group-hover:text-orange-500 group-hover:font-semibold dark:text-gray-300 dark:group-hover:text-orange-500 transition-all duration-200">
                      {option}
                    </li>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

