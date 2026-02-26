import React from 'react';
import { LEVELS } from '../data/gameData';
import styles from './CharacterSheet.module.css';

const CharacterSheet = ({ state, totalXP, currentLevel }) => {
  const xp = totalXP;
  const level = currentLevel;
  const nextLevel = LEVELS.find(l => l.xp > xp);
  const xpPercent = (xp / 1000) * 100;

  return (
    <div className={styles.charSheet}>
      <div className={styles.sectionTitle}>§ Character Sheet</div>
      <div className={styles.charGrid}>
        <div className={styles.charStat}>
          <span className={styles.statLabel}>Class</span>
          <span className={styles.statValue}>Backend Engineer</span>
        </div>
        <div className={styles.charStat}>
          <span className={styles.statLabel}>Specialization</span>
          <span className={styles.statValue}>Django · FastAPI · K8s</span>
        </div>
        <div className={styles.charStat}>
          <span className={styles.statLabel}>Starting Level</span>
          <span className={styles.statValue}>5 — Apprentice Operator</span>
        </div>
        <div className={styles.charStat}>
          <span className={styles.statLabel}>Current Title</span>
          <span className={styles.statValue}>{level.title}</span>
        </div>
      </div>
      <div className={styles.xpSection}>
        <div className={styles.xpHeader}>
          <span className={styles.xpLabel}>EXPERIENCE POINTS</span>
          <span className={styles.xpNumbers}>
            <span>{xp}</span> / 1000 XP
          </span>
        </div>
        <div className={styles.xpTrack}>
          <div 
            className={styles.xpFill} 
            style={{ width: `${xpPercent}%` }}
          ></div>
        </div>
        <div className={styles.levelDisplay}>
          <div className={styles.levelBadge}>
            <span className={styles.levelNum}>{level.lv}</span>
            <span className={styles.levelWord}>LEVEL</span>
          </div>
          <div className={styles.levelTitleDisplay}>
            <span className={styles.currentTitle}>{level.title}</span>
            <div className={styles.nextLevelHint}>
              {nextLevel
                ? `${nextLevel.xp - xp} XP until Level ${nextLevel.lv} — ${nextLevel.title}`
                : '★ Maximum level achieved. You are the Cluster Warlord.'}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sectionTitle}>§ Abilities</div>
      <div className={styles.abilitiesGrid}>
        {LEVELS.slice(1).map(l => {
          const unlocked = level.lv >= l.lv;
          return (
            <div
              key={l.lv}
              className={`${styles.ability} ${unlocked ? styles.unlocked : styles.locked}`}
            >
              <div className={styles.abilityIcon}>{l.ability.icon}</div>
              <div className={styles.abilityInfo}>
                <span className={styles.abilityName}>{l.ability.name}</span>
                <span className={styles.abilityDesc}>{l.ability.desc}</span>
              </div>
              <span className={styles.abilityLevel}>LV {l.lv}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CharacterSheet;

