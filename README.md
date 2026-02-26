# Kubernetes Chronicles - RPG Quiz Game

A React component for an interactive RPG-style quiz game to learn Kubernetes. This component can be easily integrated into your portfolio or other React projects.

## Features

- 🎮 RPG-style progression system with levels, XP, and abilities
- 📚 Four acts covering Kubernetes fundamentals to advanced topics
- ✅ Interactive quiz system with 20 questions per quest
- 🏆 Achievement system
- 📖 Spellbook with quick kubectl commands
- 💾 Local storage persistence
- 🎨 Beautiful dark theme with RPG aesthetics

## Installation & Usage

### Option 1: Run as Standalone App

Perfect for development, testing, or deploying as a standalone application.

```bash
# Install dependencies
npm install

# Run in development mode
npm start

# Build for production
npm run build:app
```

The app will run on `http://localhost:3000` with hot reload enabled.

### Option 2: Use as NPM Package

Install and use in your own React application:

```bash
# Install the package
npm install k8s-quiz-game
```

Then use in your React app:

```jsx
import K8sQuizGame from 'k8s-quiz-game';

function App() {
  return <K8sQuizGame />;
}
```

**That's it!** The quiz data is bundled with the component - no additional setup needed.

### Building the Package

To build the package for publishing:

```bash
npm run build:package
# or
npm run build
```

This creates a `dist` folder ready for publishing to npm.

## Project Structure

```
k8s-quiz-game/
├── src/
│   ├── components/
│   │   ├── K8sQuizGame.js          # Main component
│   │   ├── CharacterSheet.js       # Character stats and XP
│   │   ├── ActsContainer.js        # Quest acts
│   │   ├── QuizModal.js            # Quiz interface
│   │   ├── AchievementsGrid.js     # Achievements display
│   │   ├── Spellbook.js            # Quick commands
│   │   └── Toast.js                # Toast notifications
│   ├── hooks/
│   │   └── useGameState.js         # State management hook
│   ├── data/
│   │   └── gameData.js             # Game data (levels, acts, etc.)
│   └── index.js
├── docs/
│   ├── quiz_game_basic.html        # Original HTML version
│   └── quiz_game_data.json         # Quiz questions data
└── public/
```

## Quiz Data

The quiz questions are loaded from `docs/quiz_game_data.json`. The JSON structure should be:

```json
{
  "quest-id": {
    "title": "Quest Title",
    "questions": [
      {
        "tier": "beginner|intermediate|advanced",
        "question": "Question text?",
        "options": ["Option A", "Option B", "Option C", "Option D"],
        "correct": 0,
        "explanation": "Explanation text"
      }
    ]
  }
}
```

## Customization

### Styling

All components use CSS Modules. You can customize the theme by modifying the CSS variables in each component's `.module.css` file:

```css
:root {
  --bg: #0d0a06;
  --ember: #f97316;
  --sage: #4ade80;
  /* ... */
}
```

### Game Data

Modify `src/data/gameData.js` to customize:
- Levels and XP requirements
- Acts and quests
- Achievements
- Spells (commands)

## State Management

The game state is persisted in localStorage with the key `k8s_rpg_v3`. The state includes:
- Completed quests
- Unlocked achievements

## Development

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

## License

MIT

## Credits

Original design inspired by RPG-style learning platforms. Converted from HTML to React for better reusability and integration.

