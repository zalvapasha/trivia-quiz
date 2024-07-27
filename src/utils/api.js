import axios from "axios";

const API_URL =
  "https://opentdb.com/api.php?amount=10&category=15&difficulty=easy";

export const getQuestions = async () => {
  const response = await axios.get(API_URL);
  return response.data.results.map((question) => ({
    ...question,
    all_answers: [...question.incorrect_answers, question.correct_answer],
  }));
};
