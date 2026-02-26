import { useState, useEffect } from 'react';

const STORAGE_KEY = 'k8s_rpg_v3';

export const useGameState = () => {
  const [state, setState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : { quests: {}, achievements: {} };
    } catch {
      return { quests: {}, achievements: {} };
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const saveState = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  };

  const markQuestDone = (questId, done) => {
    setState(prev => ({
      ...prev,
      quests: {
        ...prev.quests,
        [questId]: done
      }
    }));
  };

  const toggleAchievement = (achievementId) => {
    setState(prev => ({
      ...prev,
      achievements: {
        ...prev.achievements,
        [achievementId]: !prev.achievements[achievementId]
      }
    }));
  };

  const unlockAchievement = (achievementId) => {
    setState(prev => {
      if (prev.achievements[achievementId]) return prev;
      return {
        ...prev,
        achievements: {
          ...prev.achievements,
          [achievementId]: true
        }
      };
    });
  };

  return {
    state,
    saveState,
    markQuestDone,
    toggleAchievement,
    unlockAchievement
  };
};

