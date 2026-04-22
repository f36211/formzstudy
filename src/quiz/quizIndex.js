import { bindoQuiz } from "./bindoQuiz";
import { paiQuiz } from "./paiQuiz";
import { mtkquiz } from "./mtkquiz";
import { ipaQuiz } from "./ipaquiz";
import { barabQuiz } from "./barabquiz";
import { ppquiz } from "./ppquiz";
import { ipsquiz } from "./ipsquiz";
export const quizDatabase = {
  "bahasa-indonesia": bindoQuiz,
  pp: ppquiz,
  pai: paiQuiz,
  ipa: ipaQuiz,
  matematika: mtkquiz,
  "bahasa-arab": barabQuiz,
  ips: ipsquiz,
};
