const Result = ({ correct, incorrect, total }) => {
  console.log(correct, incorrect, total);

  return (
    <div>
      <h2>Quiz Results</h2>
      <p>Correct Answers: {correct}</p>
      <p>Incorrect Answers: {incorrect}</p>
      <p>Total Questions Answered: {total}</p>
    </div>
  );
};

export default Result;
