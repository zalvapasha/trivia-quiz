import React, { useState, useEffect } from "react";
import Quiz from "../components/Quiz";
import Timer from "../components/Timer";
import Result from "../components/Result";

import datas from "../utils/dummy.json";

import { useQuiz } from "../hooks/useQuiz";

const QuizPage = () => {
  const [quizEnded, setQuizEnded] = useState(true);
  const [result, setResult] = useState(datas);

  const { questions, answers } = useQuiz();

  const handleEndQuiz = () => {
    const correctAnswers = answers.filter(
      (answer, index) => answer === questions[index].correct_answer
    ).length;
    const totalQuestions = answers.length;
    const incorrectAnswers = totalQuestions - correctAnswers;

    setResult({
      correct: correctAnswers,
      incorrect: incorrectAnswers,
      total: totalQuestions,
    });
    setQuizEnded(true);
  };

  console.log(datas);

  useEffect(() => {
    if (quizEnded) {
      localStorage.removeItem("quizProgress");
    }
  }, [quizEnded]);

  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 600); // 10 minutes timer
  return (
    <div className="flex flex-col justify-center items-center max-w-3xl h-screen mx-auto p-4">
      <div className="flex justify-center items-end bg-white rounded-[40px] h-full w-full p-5">
        <div>
          {quizEnded ? (
            <Result {...result} />
          ) : (
            <>
              <Timer timeLeft={timeLeft} />
              <Quiz onEndQuiz={handleEndQuiz} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
