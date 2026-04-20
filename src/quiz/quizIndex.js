import { bindoQuiz } from './bindoQuiz';
import { paiQuiz } from './paiQuiz';
import { matematikaQuiz } from './matematikaQuiz';
import ipaQuiz from './ipaQuiz.json';

export const quizDatabase = {
  "bahasa-indonesia": bindoQuiz,
  "pai": paiQuiz,
  "ipa": ipaQuiz,
  "matematika": matematikaQuiz,
};
