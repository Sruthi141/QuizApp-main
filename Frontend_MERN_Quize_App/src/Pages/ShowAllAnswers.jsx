import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const ShowAllAnswers = () => {
  const resultUser = useSelector((state) => state.mernQuize.result);
  const singleQuiz = useSelector((state) => state?.mernQuize.QuizData);
  const questionArr = singleQuiz[0]?.questionArray;

  return (
    <div className="w-11/12 mx-auto mt-12">
      <h1 className="text-3xl font-bold text-orange-600 text-center mb-12">
        Answer Review
      </h1>
      
      <div className="flex flex-col md:flex-row justify-between gap-8">
        {/* QUESTIONS COLUMN */}
        <div className="w-full md:w-5/12 bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-orange-600 text-center mb-4">
            Questions
          </h2>
          {questionArr?.map((e, index) => (
            <div className="border-b-2 py-2" key={index}>
              <p className="text-lg text-gray-800">
                {index + 1}. {e.questions}
              </p>
            </div>
          ))}
        </div>

        {/* USER ANSWERS COLUMN */}
        <div className="w-full md:w-3/12 bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-orange-600 text-center mb-4">
            Your Answers
          </h2>
          {resultUser?.map((e, index) => (
            <div className="border-b-2 py-2 text-center" key={index}>
              <p className="text-lg text-gray-800">{e}</p>
            </div>
          ))}
        </div>

        {/* CORRECT ANSWERS COLUMN */}
        <div className="w-full md:w-3/12 bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-orange-600 text-center mb-4">
            Correct Answers
          </h2>
          {questionArr?.map((e, index) => (
            <div className="border-b-2 py-2 text-center" key={index}>
              <p className="text-lg text-orange-500">{e.correctAnswer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Final Marks Button */}
      <div className="flex justify-center mt-12">
        <div className="bg-orange-500 p-2 rounded-lg shadow-lg w-48 text-center">
          <Link to="/result">
            <button className="text-xl font-bold text-white hover:bg-orange-700 px-4 py-2 rounded-md transition duration-300 ease-in-out">
              View Final Marks
            </button> 
          </Link>
        </div>
      </div>
    </div>
  );
};
