import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  ArrowLeft, 
  RotateCcw, 
  Trophy, 
  BrainCircuit, 
  BookOpen,
  ChevronRight
} from 'lucide-react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { quizDatabase } from '../quiz/quizIndex';
import { subjectsData } from '../data/mockData';
import useAppStore from '../store/useAppStore';
import { MathJax } from 'better-react-mathjax';

export default function Quiz() {
  const { subjectId } = useParams();
  const navigate = useNavigate();
  const { setQuizScore } = useAppStore();

  const wrapMath = (str) => {
    if (typeof str !== "string") return str;
    if (str.includes("\\(") || str.includes("\\[") || str.includes("$$")) return str;
    if (/\\[a-zA-Z]/.test(str)) return `\\(${str}\\)`;
    return str;
  };

  const forceMath = (str) => {
    if (typeof str !== "string") return str;
    if (str.includes("\\(") || str.includes("\\[") || str.includes("$$")) return str;
    return `\\(${str}\\)`;
  };

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // Filter questions for the specific subject
  const quizQuestions = useMemo(() => {
    if (!subjectId) return [];
    return quizDatabase[subjectId] || [];
  }, [subjectId]);

  const question = quizQuestions[currentQuestionIndex];
  const progressPercent = quizQuestions.length > 0 ? ((currentQuestionIndex + 1) / quizQuestions.length) * 100 : 0;

  // If no subject is selected, show the selection screen
  if (!subjectId) {
    return (
      <div className="w-full animation-fade-in pb-20">
        <header className="mb-12">
          <h1 className="text-3xl lg:text-4xl font-black tracking-tighter text-[var(--text-main)] m-0 uppercase mb-3">
            Pilih Mata Pelajaran
          </h1>
          <p className="text-sm font-medium text-[var(--text-muted)] m-0 uppercase tracking-widest leading-relaxed">
            Uji pemahamanmu dengan kuis spesifik subjek
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjectsData.map((subject) => {
            const hasQuiz = !!quizDatabase[subject.slug];
            return (
              <Link 
                key={subject.slug} 
                to={hasQuiz ? `/quiz/${subject.slug}` : '#'} 
                className={`group no-underline block h-full ${!hasQuiz ? 'opacity-60 cursor-not-allowed' : ''}`}
              >
                <div className={`h-full bg-[var(--bg-card)] border border-[var(--border-card)] rounded-3xl p-8 shadow-[var(--shadow-soft)] transition-all duration-300 ${hasQuiz ? 'hover:shadow-[var(--shadow-md)] hover:border-[var(--accent-blue)] hover:-translate-y-1' : ''}`}>
                  <div className="flex items-center justify-between mb-6">
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner"
                      style={{ background: `${subject.color}15`, color: subject.color }}
                    >
                      <BookOpen size={28} strokeWidth={2.5} />
                    </div>
                    {hasQuiz ? (
                      <div className="w-10 h-10 rounded-full bg-[var(--bg-alternate)] flex items-center justify-center text-[var(--text-muted)] group-hover:bg-[var(--accent-blue)] group-hover:text-white transition-all">
                        <ChevronRight size={20} />
                      </div>
                    ) : (
                      <span className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)] bg-[var(--bg-alternate)] px-3 py-1 rounded-full">Coming Soon</span>
                    )}
                  </div>
                  <h3 className="text-xl font-black text-[var(--text-main)] m-0 uppercase tracking-tight mb-2">
                    {subject.title}
                  </h3>
                  <p className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider m-0">
                    {quizDatabase[subject.slug]?.length || 0} Soal Latihan
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }

  const handleOptionSelect = (index) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(index);
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    setIsAnswerSubmitted(true);
    if (selectedOption === question.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsAnswerSubmitted(false);

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // Save score to store
      const finalScore = Math.round((score / quizQuestions.length) * 100);
      setQuizScore(subjectId, finalScore);
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setShowResult(false);
  };

  if (!question && !showResult) {
    return (
      <div className="w-full animation-fade-in pb-20">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 mb-8 text-sm text-[var(--text-secondary)] hover:text-[var(--text-main)] transition-colors cursor-pointer border-0 bg-transparent"
        >
          <ArrowLeft size={16} /> Kembali
        </button>
        <div className="max-w-2xl mx-auto text-center py-20">
          <BrainCircuit size={48} className="mx-auto mb-4 text-slate-300" />
          <h2 className="text-2xl font-semibold text-[var(--text-main)] mb-2">Belum Ada Soal</h2>
          <p className="text-[var(--text-secondary)]">Kuis untuk mata pelajaran ini belum tersedia.</p>
        </div>
      </div>
    );
  }

  const scorePercent = quizQuestions.length > 0 ? Math.round((score / quizQuestions.length) * 100) : 0;

  return (
    <div className="w-full animation-fade-in pb-20">
      {/* Header with Title & Back Button */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 md:mb-12">
        <div className="text-left">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-[var(--text-main)] m-0 uppercase">
            Kuis Materi
          </h1>
          <p className="text-xs md:text-sm font-medium text-[var(--text-muted)] m-0 mt-1 uppercase tracking-widest leading-relaxed">
            {subjectId?.replace('-', ' ')}
          </p>
        </div>
        <button
          onClick={() => navigate(-1)}
          className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-alternate)] transition-all cursor-pointer border border-[var(--border-card)] bg-[var(--bg-card)] shadow-sm active:scale-95"
        >
          <ArrowLeft size={16} /> 
          <span>Keluar Kuis</span>
        </button>
      </div>

      <main className="flex flex-col items-center justify-center relative">
        {/* Soft decorative blurs */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[var(--accent-blue)]/8 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-emerald-400/6 rounded-full blur-3xl -z-10" />

        <div className="w-full max-w-2xl">
          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key={`question-${currentQuestionIndex}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="bg-[var(--bg-card)] border border-[var(--border-card)] shadow-sm rounded-2xl p-6 sm:p-8"
              >
                {/* Progress header */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-[var(--accent-blue-soft)] text-[var(--accent-blue)] flex items-center justify-center">
                        <BrainCircuit size={18} />
                      </div>
                      <span className="text-[10px] font-medium text-[var(--text-muted)] uppercase tracking-widest">
                        Soal {currentQuestionIndex + 1} / {quizQuestions.length}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-emerald-soft)] text-[var(--accent-emerald)] text-[10px] font-medium">
                      {score} BENAR
                    </div>
                  </div>
                  <div className="w-full bg-[var(--bg-alternate)] rounded-full h-2 overflow-hidden shadow-inner">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${progressPercent}%` }}
                      transition={{ duration: 0.6, ease: "circOut" }}
                      className="h-full bg-[var(--accent-blue)] shadow-[0_0_10px_rgba(59,130,246,0.3)]"
                    />
                  </div>
                </div>

                {/* Question text */}
                <div className="relative mb-8">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-[var(--accent-blue)] rounded-full opacity-20" />
                  <h2 className="text-lg sm:text-xl font-medium text-[var(--text-main)] leading-relaxed m-0">
                    <MathJax dynamic inline>{wrapMath(question.question)}</MathJax>
                  </h2>
                </div>

                {/* Options */}
                <div className="flex flex-col gap-2.5 mb-6">
                  {question.options.map((option, index) => {
                    const isSelected = selectedOption === index;
                    const isCorrect = isAnswerSubmitted && index === question.correctAnswer;
                    const isWrong = isAnswerSubmitted && isSelected && index !== question.correctAnswer;

                    let cardStyle = "relative flex items-center gap-3 px-4 py-3.5 rounded-xl border text-left cursor-pointer transition-all duration-150 ";

                    if (!isAnswerSubmitted) {
                      cardStyle += isSelected
                        ? "border-[var(--accent-blue)] bg-[var(--accent-blue)]/5 ring-1 ring-[var(--accent-blue)]/20"
                        : "border-[var(--border-card)] hover:border-[var(--accent-blue)]/30 hover:bg-black/2 dark:hover:bg-white/2";
                    } else {
                      if (isCorrect) {
                        cardStyle += "border-emerald-500/50 bg-emerald-500/5";
                      } else if (isWrong) {
                        cardStyle += "border-rose-500/50 bg-rose-500/5";
                      } else {
                        cardStyle += "border-[var(--border-card)] opacity-40 cursor-not-allowed";
                      }
                    }

                    return (
                      <motion.button
                        key={index}
                        whileHover={!isAnswerSubmitted ? { x: 4 } : {}}
                        whileTap={!isAnswerSubmitted ? { scale: 0.99 } : {}}
                        onClick={() => handleOptionSelect(index)}
                        disabled={isAnswerSubmitted}
                        className={cardStyle}
                      >
                        <div className={`flex w-9 h-9 rounded-xl items-center justify-center text-sm shrink-0 transition-all duration-300 font-medium shadow-sm
                          ${!isAnswerSubmitted && isSelected ? 'bg-[var(--accent-blue)] text-white scale-110' : ''}
                          ${!isAnswerSubmitted && !isSelected ? 'bg-[var(--bg-card)] border border-[var(--border-card)] text-[var(--text-muted)]' : ''}
                          ${isAnswerSubmitted && isCorrect ? 'bg-[var(--accent-emerald)] text-white' : ''}
                          ${isAnswerSubmitted && isWrong ? 'bg-rose-500 text-white' : ''}
                          ${isAnswerSubmitted && !isCorrect && !isWrong ? 'bg-[var(--bg-main)] border border-[var(--border-card)] opacity-30 text-[var(--text-muted)]' : ''}
                        `}>
                          {String.fromCharCode(65 + index)}
                        </div>
                        <span className={`text-[15px] font-normal leading-snug ${isAnswerSubmitted && !isCorrect && !isWrong ? 'text-[var(--text-muted)]' : 'text-[var(--text-main)]'}`}>
                          <MathJax dynamic inline>{wrapMath(option)}</MathJax>
                        </span>

                        {/* Feedback icons */}
                        {isAnswerSubmitted && isCorrect && (
                          <CheckCircle2 className="absolute right-3.5 text-emerald-500" size={20} />
                        )}
                        {isAnswerSubmitted && isWrong && (
                          <XCircle className="absolute right-3.5 text-rose-500" size={20} />
                        )}
                      </motion.button>
                    );
                  })}
                </div>

                {/* Explanation */}
                <AnimatePresence>
                  {isAnswerSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mb-6 overflow-hidden"
                    >
                      <div className={`p-4 rounded-xl border text-[14px] leading-relaxed
                        ${selectedOption === question.correctAnswer
                          ? 'bg-emerald-500/5 border-emerald-500/20'
                          : 'bg-rose-500/5 border-rose-500/20'
                        }`}
                      >
                        <p className={`font-bold mb-1 ${selectedOption === question.correctAnswer ? 'text-emerald-500' : 'text-rose-500'}`}>
                          {selectedOption === question.correctAnswer ? 'Benar! 🎉' : 'Kurang tepat 😅'}
                        </p>
                        <div className="text-[var(--text-secondary)] m-0 leading-relaxed">
                          <MathJax dynamic inline>{forceMath(question.explanation)}</MathJax>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Action buttons */}
                <div className="flex justify-end pt-4 border-t border-[var(--border-card)]">
                  {!isAnswerSubmitted ? (
                    <button
                      onClick={handleSubmit}
                      disabled={selectedOption === null}
                      className="px-6 py-2.5 bg-[var(--accent-blue)] hover:opacity-90 disabled:bg-slate-200 dark:disabled:bg-slate-700 disabled:text-slate-400 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-all duration-150 active:scale-[0.97] cursor-pointer border-0"
                    >
                      Kirim Jawaban
                    </button>
                  ) : (
                    <button
                      onClick={handleNext}
                      className="px-6 py-2.5 bg-[var(--text-main)] hover:opacity-90 text-[var(--bg-main)] font-medium rounded-lg transition-all duration-150 flex items-center gap-2 active:scale-[0.97] cursor-pointer border-0"
                    >
                      {currentQuestionIndex < quizQuestions.length - 1 ? 'Soal Berikutnya' : 'Lihat Hasil'}
                      <ArrowRight size={16} />
                    </button>
                  )}
                </div>
              </motion.div>
            ) : (
              /* ─── Results Screen ─── */
              <motion.div
                key="result-block"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
                className="bg-[var(--bg-card)] border border-[var(--border-card)] shadow-[var(--shadow-lg)] rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden"
              >
                {/* Result Background Decoration */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[var(--accent-blue)] via-[var(--accent-indigo)] to-[var(--accent-emerald)]" />
                
                <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 text-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg rotate-3">
                  <Trophy size={48} strokeWidth={2.5} />
                </div>

                <h2 className="text-3xl font-bold text-[var(--text-main)] mb-2 uppercase tracking-tighter">
                  Kuis Selesai!
                </h2>
                <p className="text-[var(--text-muted)] mb-10 font-medium uppercase tracking-[0.2em] text-xs">
                  Hasil Evaluasi Belajar Anda
                </p>

                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
                  <div className="bg-[var(--bg-alternate)] border border-[var(--border-card)] rounded-2xl p-6 shadow-inner">
                    <p className="text-[10px] font-medium text-[var(--text-muted)] uppercase tracking-widest mb-2">Benar</p>
                    <p className="text-3xl font-bold text-[var(--accent-emerald)] m-0">{score}</p>
                  </div>
                  <div className="bg-[var(--bg-alternate)] border border-[var(--border-card)] rounded-2xl p-6 shadow-inner">
                    <p className="text-[10px] font-medium text-[var(--text-muted)] uppercase tracking-widest mb-2">Salah</p>
                    <p className="text-3xl font-bold text-[var(--accent-rose)] m-0">{quizQuestions.length - score}</p>
                  </div>
                  <div className="bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-indigo)] rounded-2xl p-6 shadow-lg shadow-blue-500/20">
                    <p className="text-[10px] font-medium text-white/70 uppercase tracking-widest mb-2">Nilai</p>
                    <p className="text-3xl font-bold text-white m-0">{scorePercent}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                   <button
                    onClick={handleRestart}
                    className="px-8 py-4 bg-[var(--bg-card)] hover:bg-[var(--bg-alternate)] text-[var(--text-main)] font-medium rounded-2xl transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 cursor-pointer border-2 border-[var(--border-card)] shadow-sm uppercase text-xs tracking-[0.15em]"
                  >
                    <RotateCcw size={18} strokeWidth={3} />
                    Ulangi Kuis
                  </button>
                  <button
                    onClick={() => navigate(-1)}
                    className="px-8 py-4 bg-[var(--accent-blue)] hover:shadow-xl hover:shadow-blue-500/30 text-white font-medium rounded-2xl transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 cursor-pointer border-0 shadow-lg uppercase text-xs tracking-[0.15em]"
                  >
                    Selesai & Keluar
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
