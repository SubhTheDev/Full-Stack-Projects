function createQuizResult(questions, userAnswers) {
  //counts the number of correct question using a hashmap and get
  let correctCount = 0;
  const questionMap = new Map(questions.map((q) => [q.id, q.correctAnswer]));
  const answerMap = userAnswers.map((a) => {
    const check = questionMap.get(a.questionId);
    const isCorrect = check !== undefined && check === a.answer;
    if (isCorrect) {
      correctCount++;
    }
    return correctCount;
  });

  //calculates percentage
  const totalQuestions = questions.length;
  const percentage = (correctCount / totalQuestions) * 100;

  //shows message based on percentage
  const message = percentage >= 70 ? "You passed" : "Keep practising";

  return {
    correctCount,
    totalQuestions,
    percentage,
    message,
  };
}

const questions = [
  { id: 1, correctAnswer: "B" },
  { id: 2, correctAnswer: "A" },
  { id: 3, correctAnswer: "D" },
  { id: 4, correctAnswer: "C" },
];
const userAnswers = [
  { questionId: 1, answer: "B" },
  { questionId: 2, answer: "C" },
  { questionId: 3, answer: "D" },
  { questionId: 4, answer: "C" },
];

console.log(createQuizResult(questions, userAnswers));
const partialAnswers = [{ questionId: 1, answer: "B" }];
console.log(createQuizResult(questions, partialAnswers));
