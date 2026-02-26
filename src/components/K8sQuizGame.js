import React, { useState, useMemo } from 'react';
import CharacterSheet from './CharacterSheet';
import ActsContainer from './ActsContainer';
import AchievementsGrid from './AchievementsGrid';
import Spellbook from './Spellbook';
import QuizModal from './QuizModal';
import Toast from './Toast';
import { ACTS, LEVELS } from '../data/gameData';
import { useGameState } from '../hooks/useGameState';
import { ThemeProvider } from '../context/ThemeContext';
import styles from './K8sQuizGame.module.css';

const K8sQuizGameInner = () => {
  const { state, markQuestDone, toggleAchievement, unlockAchievement } = useGameState();
  const [toast, setToast] = useState(null);
  const [quizQuestId, setQuizQuestId] = useState(null);
  const [levelUpFlash, setLevelUpFlash] = useState(false);

  const totalXP = useMemo(() => {
    let xp = 0;
    ACTS.forEach(act => act.quests.forEach(q => {
      if (state.quests[q.id]) xp += q.xp;
    }));
    return xp;
  }, [state.quests]);

  const currentLevel = useMemo(() => {
    let lv = LEVELS[0];
    for (const l of LEVELS) {
      if (totalXP >= l.xp) lv = l;
    }
    return lv;
  }, [totalXP]);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 3500);
  };

  const handleQuestClick = (questId) => {
    const quest = ACTS.flatMap(a => a.quests).find(q => q.id === questId);
    if (!quest) return;

    // If already done, clicking un-does it
    if (state.quests[questId]) {
      markQuestDone(questId, false);
      return;
    }

    // Otherwise open quiz
    setQuizQuestId(questId);
  };

  const handleQuestComplete = (questId) => {
    const prevLevel = currentLevel.lv;
    const quest = ACTS.flatMap(a => a.quests).find(q => q.id === questId);
    
    markQuestDone(questId, true);

    if (quest) {
      showToast(`⚔️ Quest complete! +${quest.xp} XP`);
    }

    // Check for level up after state updates
    setTimeout(() => {
      const newXp = totalXP + (quest?.xp || 0);
      let newLv = LEVELS[0];
      for (const l of LEVELS) {
        if (newXp >= l.xp) newLv = l;
      }

      if (newLv.lv > prevLevel) {
        showToast(`⚔️ LEVEL UP! You are now Level ${newLv.lv} — ${newLv.title}`);
        setLevelUpFlash(true);
        setTimeout(() => setLevelUpFlash(false), 1500);
      }

      if (newXp >= 1000) unlockAchievement('warlord');
    }, 100);

    // Check for achievements
    const questsDone = Object.values(state.quests).filter(Boolean).length + 1;
    if (questsDone === 1) unlockAchievement('first-blood');
    
    // Check act completions
    const actIds = ['act1-done', 'act2-done', 'act3-done'];
    ACTS.forEach((act, i) => {
      const allDone = act.quests.every(q => {
        if (q.id === questId) return true;
        return state.quests[q.id];
      });
      if (allDone && actIds[i]) {
        unlockAchievement(actIds[i]);
      }
    });
  };

  return (
    <div className={styles.app}>
      <div className={styles.sparks} id="sparks"></div>
      {levelUpFlash && <div className={styles.levelupOverlay}></div>}
      
      {toast && <Toast message={toast} />}

      <div className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.runeBorder}>⟨ KUBERNETES CHRONICLES ⟩</div>
          <h1>Cluster Warlord</h1>
          <p className={styles.heroSubtitle}>
            A Backend Engineer's Journey from Apprentice to Master of the Control Plane
          </p>
        </div>
      </div>

      <CharacterSheet 
        state={state}
        totalXP={totalXP}
        currentLevel={currentLevel}
      />

      <div className={styles.ornament}>— ⚔ —</div>

      <ActsContainer 
        state={state}
        onQuestClick={handleQuestClick}
      />

      <div className={styles.ornament}>— ⚔ —</div>

      <AchievementsGrid 
        state={state}
        onToggle={toggleAchievement}
      />

      <div className={styles.ornament}>— ⚔ —</div>

      <Spellbook />

      <footer className={styles.footer}>
        ⚔️ May your pods stay Running and your pipelines stay green.
      </footer>

      {quizQuestId && (
        <QuizModal
          questId={quizQuestId}
          onClose={() => setQuizQuestId(null)}
          onComplete={() => {
            handleQuestComplete(quizQuestId);
            setQuizQuestId(null);
          }}
        />
      )}
    </div>
  );
};

const K8sQuizGame = ({ theme, ...props }) => (
  <ThemeProvider initialTheme={theme}>
    <K8sQuizGameInner {...props} />
  </ThemeProvider>
);

export default K8sQuizGame;

