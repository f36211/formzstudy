import { bindoQuiz } from './bindoQuiz';
import { paiQuiz } from './paiQuiz';
import { matematikaQuiz } from './matematikaQuiz';

export const quizDatabase = {
  "bahasa-indonesia": bindoQuiz,
  "pai": paiQuiz,
  "matematika": matematikaQuiz,
};
