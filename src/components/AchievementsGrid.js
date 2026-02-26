import React from 'react';
import { ACHIEVEMENTS } from '../data/gameData';
import styles from './AchievementsGrid.module.css';

const AchievementsGrid = ({ state, onToggle }) => {
  return (
    <div className={styles.achievementsGrid}>
      {ACHIEVEMENTS.map((a, i) => {
        const earned = !!state.achievements[a.id];
        const isToggleable = !a.id.startsWith('act') && a.id !== 'warlord';

        return (
          <div
            key={a.id}
            className={`${styles.achievement} ${earned ? styles.earned : ''}`}
            style={{ animationDelay: `${i * 0.05}s` }}
            onClick={isToggleable ? () => onToggle(a.id) : undefined}
          >
            <span className={styles.achIcon}>{a.icon}</span>
            <div className={styles.achInfo}>
              <span className={styles.achName}>{a.name}</span>
              <span className={styles.achDesc}>{a.desc}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AchievementsGrid;

