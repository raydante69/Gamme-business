import React, { useState, useEffect } from 'react';
import { CheckCircle2, XCircle, HelpCircle, Award } from 'lucide-react';
import { QUIZ_DATA, QuizQuestion } from '../src/data/quizQuestions';
import confetti from 'canvas-confetti';

interface PageQuizProps {
  pageId: string;
  title?: string;
  description?: string;
}

const PageQuiz: React.FC<PageQuizProps> = ({ pageId, title = "Testez vos connaissances", description }) => {
  const allQuestions = QUIZ_DATA[pageId] || [];
  
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    // Pick 10 random questions on mount
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    setQuizQuestions(shuffled.slice(0, Math.min(10, shuffled.length)));
  }, [allQuestions]);

  if (allQuestions.length === 0) return null;

  const handleOptionSelect = (qIndex: number, optIndex: number) => {
    if (showResults) return;
    setAnswers(prev => ({ ...prev, [qIndex]: optIndex }));
  };

  const allAnswered = quizQuestions.length > 0 && Object.keys(answers).length === quizQuestions.length;

  const handleValidate = () => {
    if (!allAnswered) return;
    setShowResults(true);
    
    // Calculate score
    let score = 0;
    quizQuestions.forEach((q, idx) => {
      if (answers[idx] === q.correct) score++;
    });

    if (score / quizQuestions.length >= 0.7) {
      // Confetti
      const duration = 3 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
      const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;
      const interval: any = setInterval(function() {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);
        const particleCount = 50 * (timeLeft / duration);
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
      }, 250);
    }
  };

  const getScore = () => {
    let score = 0;
    quizQuestions.forEach((q, idx) => {
      if (answers[idx] === q.correct) score++;
    });
    return score;
  };

  return (
    <div className="my-12 max-w-4xl mx-auto" id="quiz-section">
      <div className="mb-10 text-center">
        <div className="w-16 h-16 bg-myu-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <HelpCircle className="text-myu-teal" size={32} />
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-black text-gray-900 mb-4">{title}</h2>
        {description && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>}
      </div>

      <div className="space-y-8">
        {quizQuestions.map((q, qIndex) => (
          <div key={qIndex} className="bg-white rounded-[2rem] p-6 md:p-10 shadow-sm border-2 border-gray-100 hover:border-myu-teal/20 transition-all duration-300">
            <div className="flex flex-col items-center gap-4 mb-8 text-center">
              <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0 shadow-sm">
                <span className="font-black text-xl text-gray-400">{qIndex + 1}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">{q.question}</h3>
            </div>
            
            <div className="flex flex-col gap-3 max-w-2xl mx-auto">
              {q.options.map((opt, optIndex) => {
                const isSelected = answers[qIndex] === optIndex;
                const isCorrect = q.correct === optIndex;
                const showCorrect = showResults && isCorrect;
                const showIncorrect = showResults && isSelected && !isCorrect;

                let btnClass = "p-5 rounded-2xl border-2 text-center transition-all duration-300 group relative ";
                
                if (showResults) {
                  if (showCorrect) {
                    btnClass += "border-emerald-500 bg-emerald-50 text-emerald-900 shadow-sm";
                  } else if (showIncorrect) {
                    btnClass += "border-red-500 bg-red-50 text-red-900 shadow-sm";
                  } else {
                    btnClass += "border-gray-100 bg-gray-50 opacity-50";
                  }
                } else {
                  if (isSelected) {
                    btnClass += "border-myu-teal bg-myu-teal/5 text-myu-teal shadow-md scale-[1.02]";
                  } else {
                    btnClass += "border-gray-200 bg-white hover:border-myu-teal/40 hover:bg-gray-50 text-gray-700 hover:scale-[1.01]";
                  }
                }

                return (
                  <button
                    key={optIndex}
                    onClick={() => handleOptionSelect(qIndex, optIndex)}
                    disabled={showResults}
                    className={btnClass}
                  >
                    <div className="flex items-center justify-center">
                      <span className="font-medium text-lg">{opt}</span>
                      {showResults && showCorrect && <CheckCircle2 className="text-emerald-500 absolute right-5" size={24} />}
                      {showResults && showIncorrect && <XCircle className="text-red-500 absolute right-5" size={24} />}
                    </div>
                  </button>
                );
              })}
            </div>
            
            {showResults && answers[qIndex] !== q.correct && (
              <div className="mt-8 max-w-2xl mx-auto animate-fade-in-up text-center">
                <div className="p-5 bg-amber-50 border-t-4 border-amber-400 rounded-b-2xl rounded-t-lg text-amber-900">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <XCircle size={18} className="text-amber-600" />
                    <span className="font-black uppercase tracking-wider text-xs text-amber-600">Explication</span>
                  </div>
                  <p className="font-medium">{q.explanation}</p>
                </div>
              </div>
            )}
            {showResults && answers[qIndex] === q.correct && (
              <div className="mt-8 max-w-2xl mx-auto animate-fade-in-up text-center">
                <div className="p-5 bg-emerald-50 border-t-4 border-emerald-400 rounded-b-2xl rounded-t-lg text-emerald-900">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <CheckCircle2 size={18} className="text-emerald-600" />
                    <span className="font-black uppercase tracking-wider text-xs text-emerald-600">Excellent !</span>
                  </div>
                  <p className="font-medium">{q.explanation}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {!showResults ? (
        <div className="mt-12 text-center sticky bottom-8 z-40">
          <div className="inline-block bg-white/80 backdrop-blur-md p-2 rounded-full shadow-2xl border border-gray-200">
            <button
              onClick={handleValidate}
              disabled={!allAnswered}
              className={`px-10 py-5 rounded-full font-black text-lg transition-all duration-500 flex items-center gap-3 ${
                allAnswered 
                  ? 'bg-myu-teal text-white hover:scale-105 shadow-xl shadow-myu-teal/30' 
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            >
              {allAnswered ? (
                <>
                  <CheckCircle2 size={24} />
                  Valider mes réponses
                </>
              ) : (
                `Répondez aux ${quizQuestions.length} questions pour valider`
              )}
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-16 bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl border-4 border-myu-teal/10 text-center animate-fade-in-up relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-myu-teal via-myu-purple to-pink-500"></div>
          
          <div className="w-24 h-24 bg-gradient-to-br from-myu-teal to-myu-purple rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl rotate-3">
            <Award className="text-white" size={48} />
          </div>
          
          <h3 className="text-4xl md:text-5xl font-display font-black text-gray-900 mb-4">Résultats du Quiz</h3>
          
          <div className="inline-flex items-baseline gap-2 mb-8 bg-gray-50 px-8 py-4 rounded-3xl border border-gray-100">
            <span className="font-black text-myu-teal text-6xl">{getScore()}</span>
            <span className="text-2xl font-bold text-gray-400">/ {quizQuestions.length}</span>
          </div>
          
          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-xl text-gray-700 font-medium leading-relaxed">
              {getScore() / quizQuestions.length === 1 
                ? "Un sans-faute ! Vous maîtrisez ce sujet sur le bout des doigts. Félicitations !" 
                : getScore() / quizQuestions.length >= 0.7 
                ? "Très bon score ! Vous avez acquis les connaissances essentielles de ce module." 
                : getScore() / quizQuestions.length >= 0.4
                ? "Pas mal ! Vous êtes sur la bonne voie. N'hésitez pas à revoir les points qui vous ont posé problème."
                : "C'est un bon début d'apprentissage. Prenez le temps de revoir le cours et retentez votre chance !"}
            </p>
          </div>

          <button
            onClick={() => {
              setShowResults(false);
              setAnswers({});
              const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
              setQuizQuestions(shuffled.slice(0, Math.min(10, shuffled.length)));
              window.scrollTo({ top: document.getElementById('quiz-section')?.offsetTop || 0, behavior: 'smooth' });
            }}
            className="px-10 py-5 bg-gray-900 text-white rounded-full font-black text-lg hover:scale-105 transition-transform shadow-xl hover:shadow-gray-900/20"
          >
            Recommencer un nouveau quiz
          </button>
        </div>
      )}
    </div>
  );
};

export { PageQuiz };
