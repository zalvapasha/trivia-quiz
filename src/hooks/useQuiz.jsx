import { useEffect, useState } from "react";
import { getQuestions } from "../utils/api";
import { saveQuizProgress, loadQuizProgress } from "../utils/progress";

export const useQuiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const loadQuiz = async () => {
      const savedProgress = loadQuizProgress();
      if (savedProgress) {
        setQuestions(savedProgress.questions);
        setCurrentQuestionIndex(savedProgress.currentQuestionIndex);
        setAnswers(savedProgress.answers);
      } else {
        const fetchedQuestions = await getQuestions();
        setQuestions(fetchedQuestions);
      }
    };

    loadQuiz();
  }, []);

  useEffect(() => {
    saveQuizProgress({ questions, currentQuestionIndex, answers });
  }, [questions, currentQuestionIndex, answers]);

  const getCurrentQuestion = () => {
    return questions[currentQuestionIndex];
  };

  const handleAnswer = (selectedAnswer) => {
    setAnswers([...answers, selectedAnswer]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return {
    questions,
    currentQuestionIndex,
    getCurrentQuestion,
    handleAnswer,
  };
};
