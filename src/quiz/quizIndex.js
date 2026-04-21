import { bindoQuiz } from "./bindoQuiz";
import { paiQuiz } from "./paiQuiz";
import { matematikaQuiz } from "./matematikaQuiz";
import { ipaQuiz } from "./ipaquiz";
import { barabQuiz } from "./barabquiz";
import { ppquiz } from "./ppquiz";
export const quizDatabase = {
  "bahasa-indonesia": bindoQuiz,
  pp: ppquiz,
  pai: paiQuiz,
  ipa: ipaQuiz,
  matematika: matematikaQuiz,
  "bahasa-arab": barabQuiz,
};
