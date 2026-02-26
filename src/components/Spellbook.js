import React from 'react';
import { SPELLS } from '../data/gameData';
import styles from './Spellbook.module.css';

const Spellbook = () => {
  const copySpell = (cmd) => {
    navigator.clipboard.writeText(cmd).catch(() => {});
  };

  return (
    <div className={styles.spellbook}>
      <div className={styles.charSheet}>
        <div className={styles.sectionTitle}>§ Spellbook — Quick Commands</div>
        <div className={styles.spellGrid}>
          {SPELLS.map((spell, idx) => (
            <div key={idx} className={styles.spell}>
              <span className={styles.spellName}>{spell.name}</span>
              <code
                className={styles.spellCmd}
                onClick={() => copySpell(spell.cmd)}
              >
                {spell.cmd}
              </code>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Spellbook;

