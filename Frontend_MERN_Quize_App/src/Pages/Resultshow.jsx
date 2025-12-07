import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Resultshow = () => {
  let [count, setCount] = useState(0);
  let [feedback, setFeedback] = useState("");
  const UserName = useSelector((state) => state.mernQuize.userName);
  const resultUser = useSelector((state) => state.mernQuize.result);

  let originalResult = [];
  const singleQuiz = useSelector((state) => state?.mernQuize.QuizData);
  const questionArr = singleQuiz[0]?.questionArray;

  const filterAtualAnswer = (el) => {
    el.map((e) => {
      originalResult.push(e.correctAnswer);
    });
  };
  filterAtualAnswer(questionArr);

  for (let i = 0; i < originalResult.length; i++) {
    for (let j = 0; j < resultUser.length; j++) {
      if (resultUser[j] == originalResult[i]) {
        count++;
      }
    }
  }

  const calcPercent = () => {
    const percentage = Math.round((count / resultUser.length) * 100);
    if (percentage > 90) {
      setFeedback(`Congratulations! You cleared the Test! ${UserName}`);
    } else if (percentage > 50 && percentage < 90) {
      setFeedback(
        `Congratulations! You cleared the Test! and Keep Practicing ${UserName}`
      );
    } else {
      setFeedback(
        `Sorry!, You are failed to complete the Test! You need to Work Hard! and Keep Practicing  ${UserName}`
      );
    }

  };
  useEffect(() => {
    calcPercent();
  });
  return (
    <div className="w-11/12 mx-auto shadow-lg rounded-lg bg-white mt-16 p-6">
  <h1 className="text-4xl font-bold text-orange-600 text-center mb-8 mt-4">
    Result Analysis
  </h1>
  <div className="flex flex-col md:flex-row justify-between items-center">
    {/* Image Section */}
    <div className="w-full md:w-2/5">
      <img
        src="./resultAnalysis.gif"
        alt="Result Analysis"
        className="rounded-lg shadow-md"
      />
    </div>

    {/* Feedback Section */}
    <div className="w-full md:w-2/5 mt-8 md:mt-0 p-4 md:p-8 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-orange-500 mb-4">{feedback}</h2>
      
      <div className="text-lg text-gray-700">
        <p>
          <strong>Total Marks:</strong>{" "}
          <span className={`font-bold text-xl ${count === 0 ? 'text-red-500' : 'text-teal-500'}`}>
            {count}/{questionArr?.length}
          </span>
        </p>
      </div>
    </div>
  </div>

  {/* Button Section */}
  <div className="flex justify-center mt-8">
    <Link to="/">
      <button className="bg-orange-500 hover:bg-orange-600 text-white text-xl font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out">
        Attempt More Quiz
      </button>
    </Link>
  </div>
</div>

  );
};
