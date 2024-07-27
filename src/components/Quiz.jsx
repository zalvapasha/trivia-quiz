import React, { useEffect, useState } from "react";
import { useQuiz } from "../hooks/useQuiz";

const Quiz = ({ onEndQuiz }) => {
  const { questions, currentQuestionIndex, getCurrentQuestion, handleAnswer } =
    useQuiz();
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const currentQuestion = getCurrentQuestion();

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);

    setSelectedAnswer(null);
  };

  useEffect(() => {
    if (!currentQuestion) {
      onEndQuiz();
    }
  }, [currentQuestion, onEndQuiz]);

  if (!currentQuestion) {
    return null;
  }

  const renderAnswers = () => {
    if (currentQuestion.type === "multiple") {
      return (
        <div className="w-full grid grid-cols-2 grid-rows-2 size-4/5 gap-5">
          <button className="bg-blue-600 rounded-[20px]">Answer 1</button>{" "}
          <button className="bg-red-600 rounded-[20px]">Answer 2</button>
          <button className="bg-orange-600 rounded-[20px]">
            Answer 3
          </button>{" "}
          <button className="bg-green-600 rounded-[20px]">Answer 4</button>
        </div>
      );
    } else if (currentQuestion.type === "boolean") {
      return (
        <div className="w-full grid grid-cols-2 grid-rows-2 size-4/5 gap-5">
          <button className="bg-green-600 rounded-[20px]">True</button>{" "}
          <button className="bg-red-600 rounded-[20px]">False</button>
        </div>
      );
    }

    return (
      <div className="flex flex-col justify-end items-center w-full h-1/2 ">
        <h1>Quiz Question</h1>
        {renderAnswers()}
      </div>
    );
  };
};

export default Quiz;
