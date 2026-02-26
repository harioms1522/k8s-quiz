import React, { useState, useEffect, useCallback } from 'react';
import { ACTS } from '../data/gameData';
import styles from './QuizModal.module.css';

const QuizModal = ({ questId, onClose, onComplete }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState({});
  const [error, setError] = useState(null);
  const [quizData, setQuizData] = useState(null);

  const quest = ACTS.flatMap(a => a.quests).find(q => q.id === questId);

  useEffect(() => {
    loadQuizData();
  }, []);

  const loadQuestions = useCallback(() => {
    if (!quizData) return;

    setLoading(true);
    setError(null);
    setSubmitted({});

    try {
      // Load questions from JSON file
      if (quizData[questId] && quizData[questId].questions) {
        setQuestions(quizData[questId].questions);
        setLoading(false);
      } else {
        setError(`Questions not found for quest "${questId}". Please ensure quiz_game_data.json contains data for this quest.`);
        setLoading(false);
      }
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }, [quizData, questId]);

  useEffect(() => {
    if (quizData) {
      loadQuestions();
    }
  }, [questId, quizData, loadQuestions]);

  const loadQuizData = async () => {
    try {
      const response = await fetch('/quiz_game_data.json');
      if (!response.ok) {
        throw new Error('Failed to load quiz data');
      }
      const data = await response.json();
      setQuizData(data);
    } catch (err) {
      console.error('Error loading quiz data:', err);
      setError('Failed to load quiz data. Please ensure quiz_game_data.json is in the public folder.');
      setLoading(false);
    }
  };

  const selectOption = (qIdx, optIdx) => {
    if (submitted[qIdx] !== undefined) return; // already answered

    setSubmitted(prev => ({ ...prev, [qIdx]: optIdx }));
  };

  const getTierCounts = () => {
    const counts = { beginner: 0, intermediate: 0, advanced: 0 };
    questions.forEach(question => {
      const tier = question.tier || 'beginner';
      if (counts[tier] !== undefined) {
        counts[tier]++;
      }
    });
    return counts;
  };

  const getScore = () => {
    const total = questions.length;
    const correct = Object.entries(submitted).filter(([idx, ans]) => {
      return ans === questions[parseInt(idx)].correct;
    }).length;
    return { correct, total };
  };

  const getProgress = () => {
    const total = questions.length;
    if (total === 0) return 0;
    const answered = Object.keys(submitted).length;
    return (answered / total) * 100;
  };

  const canComplete = () => {
    const { correct, total } = getScore();
    // Require 16 out of 20 questions correct (80%)
    const requiredCorrect = 16;
    return Object.keys(submitted).length === total && correct >= requiredCorrect;
  };

  const handleRetry = () => {
    setSubmitted({});
    loadQuestions();
  };

  const handleComplete = () => {
    if (canComplete()) {
      onComplete();
    }
  };

  const { correct, total } = getScore();
  const allAnswered = Object.keys(submitted).length === total;
  const passed = canComplete();
  const tierCounts = getTierCounts();

  // Modal should always be visible when questId is provided
  return (
    <div 
      className={`${styles.quizBackdrop} ${styles.active}`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className={styles.quizModal}>
        <div className={styles.quizHeader}>
          <div className={styles.quizQuestTitle}>
            {quest ? quest.title : 'Loading...'}
          </div>
          <div className={styles.quizMetaRow}>
            <div className={styles.quizTierBadges}>
              {tierCounts.beginner > 0 && (
                <span className={`${styles.tierBadge} ${styles.beginner}`}>
                  {tierCounts.beginner} BEGINNER
                </span>
              )}
              {tierCounts.intermediate > 0 && (
                <span className={`${styles.tierBadge} ${styles.intermediate}`}>
                  {tierCounts.intermediate} INTERMEDIATE
                </span>
              )}
              {tierCounts.advanced > 0 && (
                <span className={`${styles.tierBadge} ${styles.advanced}`}>
                  {tierCounts.advanced} ADVANCED
                </span>
              )}
            </div>
            <div className={styles.quizScoreDisplay}>
              {correct} / {total || 0}
            </div>
          </div>
          <div className={styles.quizProgressBar}>
            <div 
              className={styles.quizProgressFill}
              style={{ width: `${getProgress()}%` }}
            ></div>
          </div>
        </div>

        <div className={styles.quizBody}>
          {loading && (
            <div className={styles.quizLoading}>
              <div className={styles.quizLoadingIcon}>⚙️</div>
              <div className={styles.quizLoadingText}>
                The Oracle is forging your trial...
              </div>
              <div className={styles.quizLoadingSub}>
                LOADING QUESTIONS
              </div>
            </div>
          )}

          {error && (
            <div className={styles.quizLoading}>
              <div className={styles.quizLoadingIcon}>⚠️</div>
              <div className={styles.quizLoadingText}>
                The Oracle's connection was severed.
              </div>
              <div className={styles.quizLoadingSub}>{error}</div>
            </div>
          )}

          {!loading && !error && questions.length > 0 && (
            <div className={styles.quizQuestions}>
              {questions.map((q, idx) => {
                const tier = q.tier || 'beginner';
                const isAnswered = submitted[idx] !== undefined;
                const isCorrect = isAnswered && submitted[idx] === q.correct;
                const optLabels = ['A', 'B', 'C', 'D'];

                return (
                  <div
                    key={idx}
                    className={`${styles.questionBlock} ${isAnswered ? (isCorrect ? styles.correct : styles.wrong) : ''} ${styles.visible}`}
                  >
                    <div>
                      <span className={`${styles.qTierLabel} ${styles[tier]}`}>
                        {tier.toUpperCase()}
                      </span>
                      <span className={styles.qNumber}>#{idx + 1}</span>
                    </div>
                    <div className={styles.qText}>{q.question}</div>
                    <div className={styles.qOptions}>
                      {q.options.map((opt, oi) => {
                        const isSelected = submitted[idx] === oi;
                        const isCorrectOption = oi === q.correct;
                        const showCorrect = isAnswered;

                        return (
                          <div
                            key={oi}
                            className={`${styles.qOption} ${isSelected ? styles.selected : ''} ${showCorrect && isCorrectOption ? styles.correctAns : ''} ${showCorrect && isSelected && !isCorrect ? styles.wrongAns : ''} ${isAnswered ? styles.disabled : ''}`}
                            onClick={() => selectOption(idx, oi)}
                          >
                            <span className={styles.qOptKey}>{optLabels[oi]}</span>
                            <span>{opt}</span>
                          </div>
                        );
                      })}
                    </div>
                    {isAnswered && (
                      <div className={`${styles.qExplanation} ${styles.show} ${isCorrect ? styles.correctExp : styles.wrongExp}`}>
                        {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {!loading && (
          <div className={styles.quizFooter}>
            <div className={`${styles.quizResultMsg} ${allAnswered ? (passed ? styles.pass : styles.fail) : styles.pending}`}>
              {allAnswered
                ? passed
                  ? `⚔️ TRIAL COMPLETE — ${correct}/${total} correct (16+ required). You may claim your XP.`
                  : `✕ TRIAL FAILED — ${correct}/${total} correct. You need at least 16 correct answers to pass.`
                : `Answer all ${total} questions to complete the trial. Need 16+ correct to pass.`}
            </div>
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              {!passed && allAnswered && (
                <button
                  className={`${styles.quizBtn} ${styles.quizBtnRetry} ${styles.show}`}
                  onClick={handleRetry}
                >
                  ↺ Retry
                </button>
              )}
              {passed && (
                <button
                  className={`${styles.quizBtn} ${styles.quizBtnComplete} ${styles.show}`}
                  onClick={handleComplete}
                >
                  ⚔️ Mark Complete
                </button>
              )}
              <button
                className={`${styles.quizBtn} ${styles.quizBtnClose}`}
                onClick={onClose}
              >
                ✕ Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizModal;

