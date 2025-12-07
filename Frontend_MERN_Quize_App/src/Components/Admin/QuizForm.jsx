import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postQuizObj, quizSuccess } from "../../Redux/action.js";

export const QuizForm = () => {
  const data = useSelector((state) => state.mernQuize.questions);
  const dispatch = useDispatch();

  const [ans, setAns] = useState([
    { option: "", isCorrect: false, id: 0 },
    { option: "", isCorrect: false, id: 1 },
    { option: "", isCorrect: false, id: 2 },
    { option: "", isCorrect: false, id: 3 },
  ]);

  const [quiz, setQuiz] = useState({
    title: "",
    questions: "",
    options: ans,
    correctAnswer: "",
  });

  const handleQuiz = (event) => {
    event.preventDefault();
    dispatch(quizSuccess(quiz));
  };

  const handleUploadnew = (event) => {
    event.preventDefault();
    const obj = {
      title: data[0].title,
      questionArray: data,
    };
    dispatch(postQuizObj(obj));
  };

  const handleType = (id) => (event) => {
    const { name, value } = event.target;
    setAns((prev) =>
      ans?.map((item) =>
        item.id === id
          ? { ...item, [name]: value == "true" ? true : value }
          : item
      )
    );
    setQuiz({ ...quiz, options: ans });
  };

  return (
    <div className="w-10/12 flex flex-wrap justify-center items-center text-black dark:text-white mx-auto">
      <div className="w-full md:w-1/2 mt-10 flex justify-center">
        <img className="h-64 md:h-80" src="./feedback.gif" alt="feedback" />
      </div>

      <div className="w-full md:w-1/2 mt-6 px-4">
        <div className="flex items-center text-orange-500 text-2xl font-bold font-serif mb-6 justify-center">
          <h1>Add Questions</h1>
          <img
            src="./add.gif"
            alt="add icon"
            className="w-16 h-16 md:w-20 md:h-20 ml-3"
          />
        </div>
        <form className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg dark:border dark:border-gray-700">
          <label
            className="block uppercase tracking-wide text-xs font-bold text-orange-500 mb-2 dark:text-orange-400"
            htmlFor="quiz-title"
          >
            Title
          </label>
          <input
            className="w-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white border border-orange-300 dark:border-orange-500 rounded py-2 px-4 mb-4 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-300"
            id="quiz-title"
            type="text"
            placeholder="Enter the quiz title"
            onChange={(event) => {
              setQuiz({ ...quiz, title: event.target.value });
            }}
          />

          <label
            className="block uppercase tracking-wide text-xs font-bold text-orange-500 mb-2 dark:text-orange-400"
            htmlFor="quiz-question"
          >
            Question
          </label>
          <input
            className="w-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white border border-orange-300 dark:border-orange-500 rounded py-2 px-4 mb-4 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-300"
            id="quiz-question"
            type="text"
            placeholder="Enter the question"
            onChange={(event) =>
              setQuiz({ ...quiz, questions: event.target.value })
            }
          />

          <label
            className="block uppercase tracking-wide text-xs font-bold text-orange-500 mb-2 dark:text-orange-400"
            htmlFor="quiz-options"
          >
            Options
          </label>
          <div id="quiz-options">
            {ans?.map((x) => (
              <div key={x.id} className="flex gap-3 items-center mb-4">
                <input
                  className="w-2/3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white border border-orange-300 dark:border-orange-500 rounded py-2 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-300"
                  type="text"
                  placeholder={`Option ${x.id}`}
                  name="option"
                  value={x.option}
                  onChange={(e) => handleType(x.id)(e)}
                />
                <select
                  className="w-1/3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white border border-orange-300 dark:border-orange-500 rounded py-2 px-3 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-300"
                  name="isCorrect"
                  onChange={(e) => handleType(x.id)(e)}
                >
                  <option value="">Select</option>
                  <option value={true}>True</option>
                  <option value={false}>False</option>
                </select>
              </div>
            ))}
          </div>

          <label
            className="block uppercase tracking-wide text-xs font-bold text-orange-500 mb-2 dark:text-orange-400"
            htmlFor="quiz-answer"
          >
            Answer
          </label>
          <input
            className="w-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white border border-orange-300 dark:border-orange-500 rounded py-2 px-4 mb-4 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-300"
            id="quiz-answer"
            type="text"
            placeholder="Enter the correct answer"
            onChange={(event) =>
              setQuiz({ ...quiz, correctAnswer: event.target.value })
            }
          />

          <div className="flex justify-between">
            <button
              onClick={handleQuiz}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded shadow-md transition-all duration-200"
            >
              Submit
            </button>
            <button
              onClick={handleUploadnew}
              className="bg-orange-200 hover:bg-orange-300 text-orange-700 font-semibold py-2 px-6 rounded shadow-md transition-all duration-200"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
