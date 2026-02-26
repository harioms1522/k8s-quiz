import React, { useState } from 'react';
import { ACTS } from '../data/gameData';
import styles from './ActsContainer.module.css';

const ActsContainer = ({ state, onQuestClick }) => {
  const [openActs, setOpenActs] = useState({ 'I': true });

  const toggleAct = (actId) => {
    setOpenActs(prev => ({
      ...prev,
      [actId]: !prev[actId]
    }));
  };

  return (
    <div className={styles.acts}>
      {ACTS.map((act, i) => {
        const done = act.quests.filter(q => state.quests[q.id]).length;
        const total = act.quests.length;
        const circumference = 2 * Math.PI * 15;
        const offset = circumference * (1 - done / total);
        const isOpen = openActs[act.id];

        return (
          <div key={act.id} className={`${styles.actCard} ${styles[act.cls]}`}>
            <div 
              className={styles.actHeader} 
              onClick={() => toggleAct(act.id)}
            >
              <span className={styles.actRoman}>{act.id}</span>
              <div className={styles.actInfo}>
                <span className={styles.actName}>{act.name}</span>
                <span className={styles.actSubtitle}>{act.subtitle}</span>
              </div>
              <span className={styles.actXpBadge}>{act.xp} XP</span>
              <div className={styles.actProgressRing}>
                <svg width="40" height="40" viewBox="0 0 40 40">
                  <circle 
                    className={styles.ringBg} 
                    cx="20" cy="20" r="15"
                  />
                  <circle 
                    className={styles.ringFill} 
                    cx="20" cy="20" r="15"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                  />
                </svg>
                <div className={styles.ringText}>{done}/{total}</div>
              </div>
              <span className={`${styles.actArrow} ${isOpen ? styles.open : ''}`}>▶</span>
            </div>
            {isOpen && (
              <div className={styles.actBody}>
                <div className={styles.actLore}>{act.lore}</div>
                <div className={styles.quests}>
                  {act.quests.map(q => {
                    const isBoss = q.boss;
                    const isDone = !!state.quests[q.id];
                    const tagHtml = q.tags.map(t => {
                      if (t === 'BOSS' || t === 'FINAL BOSS') {
                        return (
                          <span key={t} className={`${styles.qTag} ${styles.qBoss}`}>
                            ⚔️ {t}
                          </span>
                        );
                      }
                      if (t.startsWith('~')) {
                        return (
                          <span key={t} className={`${styles.qTag} ${styles.qTime}`}>
                            {t}
                          </span>
                        );
                      }
                      return (
                        <span key={t} className={`${styles.qTag} ${styles.qTool}`}>
                          {t}
                        </span>
                      );
                    });

                    return (
                      <div
                        key={q.id}
                        className={`${styles.quest} ${isBoss ? styles.boss : ''} ${isDone ? styles.done : ''}`}
                        onClick={() => onQuestClick(q.id)}
                      >
                        <div className={styles.questCheckbox}>
                          {isDone ? '✓' : ''}
                        </div>
                        <div className={styles.questContent}>
                          <div className={styles.questTitle}>
                            {isBoss && <span className={styles.bossSkull}>💀</span>}
                            {q.title}
                          </div>
                          <div className={styles.questMeta}>
                            {tagHtml}
                            <span className={`${styles.qTag} ${styles.qXp}`}>
                              +{q.xp} XP
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className={styles.actReward}>
                  <span className={styles.rewardIcon}>{act.reward.icon}</span>
                  <div className={styles.rewardText}>
                    <span className={styles.rewardTitle}>{act.reward.title}</span>
                    <span className={styles.rewardDesc}>{act.reward.desc}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ActsContainer;

