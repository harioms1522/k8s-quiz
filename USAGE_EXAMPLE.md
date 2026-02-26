# Usage Examples

## Using as a Component in Your Portfolio

### Basic Usage

```jsx
import React from 'react';
import K8sQuizGame from './components/K8sQuizGame';

function Portfolio() {
  return (
    <div>
      <h1>My Portfolio</h1>
      <section id="projects">
        <h2>Projects</h2>
        <K8sQuizGame />
      </section>
    </div>
  );
}

export default Portfolio;
```

### With Custom Wrapper

```jsx
import React from 'react';
import K8sQuizGame from './components/K8sQuizGame';
import './portfolio-styles.css';

function Portfolio() {
  return (
    <div className="portfolio-container">
      <header>
        <h1>John Doe - Full Stack Developer</h1>
      </header>
      
      <main>
        <section className="project-section">
          <h2>Kubernetes Learning Game</h2>
          <p>An interactive RPG-style quiz game for learning Kubernetes</p>
          <div className="quiz-game-wrapper">
            <K8sQuizGame />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Portfolio;
```

### With Routing (React Router)

```jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import K8sQuizGame from './components/K8sQuizGame';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/k8s-quiz" element={<K8sQuizGame />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

## Styling Integration

The component uses CSS Modules, so it won't conflict with your existing styles. However, if you need to override styles:

```css
/* Your portfolio styles */
.quiz-game-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

/* Override specific game styles if needed */
.quiz-game-wrapper :global(.hero h1) {
  font-size: 3rem; /* Custom size */
}
```

## State Management

The game manages its own state via localStorage. If you need to access the game state:

```jsx
import { useGameState } from './hooks/useGameState';

function MyComponent() {
  const { state } = useGameState();
  
  // Access completed quests
  const completedQuests = Object.keys(state.quests).filter(
    id => state.quests[id]
  );
  
  // Access achievements
  const earnedAchievements = Object.keys(state.achievements).filter(
    id => state.achievements[id]
  );
  
  return (
    <div>
      <p>Completed Quests: {completedQuests.length}</p>
      <p>Achievements: {earnedAchievements.length}</p>
    </div>
  );
}
```

## Customization

### Changing Game Data

Edit `src/data/gameData.js` to customize:
- Levels and XP requirements
- Quest content
- Achievements
- Commands in spellbook

### Changing Theme Colors

Edit the CSS variables in each component's `.module.css` file:

```css
:root {
  --bg: #0d0a06;        /* Background */
  --ember: #f97316;     /* Primary accent */
  --sage: #4ade80;      /* Success color */
  /* ... */
}
```

## Quiz Data

The quiz questions are loaded from `docs/quiz_game_data.json`. Make sure this file is accessible. If you're using a bundler that doesn't support JSON imports, you may need to:

1. Convert JSON to a JS module
2. Use a fetch request to load the data
3. Configure your bundler to handle JSON imports

### Alternative: Load Quiz Data via API

You can modify `QuizModal.js` to load questions from an API:

```jsx
const loadQuestions = async () => {
  try {
    const response = await fetch(`/api/quiz/${questId}`);
    const data = await response.json();
    setQuestions(data.questions);
  } catch (err) {
    setError(err.message);
  }
};
```

