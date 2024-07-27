const QUIZ_PROGRESS_KEY = "quizProgress";

export const saveQuizProgress = (progress) => {
  localStorage.setItem(QUIZ_PROGRESS_KEY, JSON.stringify(progress));
};

export const loadQuizProgress = () => {
  const progress = localStorage.getItem(QUIZ_PROGRESS_KEY);
  return progress ? JSON.parse(progress) : null;
};
