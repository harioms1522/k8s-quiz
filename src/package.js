// Package entry point - exports for use as a component in other apps
// This file is used by rollup to build the package
export { default } from './components/K8sQuizGame';
export { default as K8sQuizGame } from './components/K8sQuizGame';

// Export hooks if needed
export { useGameState } from './hooks/useGameState';

// Export data structures if needed
export { LEVELS, ACTS, ACHIEVEMENTS, SPELLS } from './data/gameData';

