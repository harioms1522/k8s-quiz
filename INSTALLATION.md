# Installation Guide

## Quick Start

### 1. Install the Package

```bash
npm install k8s-quiz-game
```

### 2. Copy Quiz Data File

The component needs the quiz data file in your public folder. Copy it after installation:

**For Create React App / Vite:**
```bash
cp node_modules/k8s-quiz-game/dist/quiz_game_data.json public/quiz_game_data.json
```

**For Next.js:**
```bash
cp node_modules/k8s-quiz-game/dist/quiz_game_data.json public/quiz_game_data.json
```

**Windows (PowerShell):**
```powershell
Copy-Item node_modules\k8s-quiz-game\dist\quiz_game_data.json public\quiz_game_data.json
```

### 3. Use in Your Component

```jsx
import React from 'react';
import K8sQuizGame from 'k8s-quiz-game';

function App() {
  return (
    <div>
      <K8sQuizGame />
    </div>
  );
}

export default App;
```

## Complete Examples

### Create React App

```bash
# Create new app
npx create-react-app my-app
cd my-app

# Install package
npm install k8s-quiz-game

# Copy quiz data
cp node_modules/k8s-quiz-game/dist/quiz_game_data.json public/

# Use in src/App.js
```

```jsx
// src/App.js
import React from 'react';
import K8sQuizGame from 'k8s-quiz-game';
import './App.css';

function App() {
  return (
    <div className="App">
      <K8sQuizGame />
    </div>
  );
}

export default App;
```

### Next.js

```bash
# Create new app
npx create-next-app my-app
cd my-app

# Install package
npm install k8s-quiz-game

# Copy quiz data
cp node_modules/k8s-quiz-game/dist/quiz_game_data.json public/
```

```jsx
// pages/quiz.js or app/quiz/page.js
import dynamic from 'next/dynamic';

// Disable SSR for this component
const K8sQuizGame = dynamic(() => import('k8s-quiz-game'), {
  ssr: false,
});

export default function QuizPage() {
  return (
    <div>
      <h1>Kubernetes Quiz Game</h1>
      <K8sQuizGame />
    </div>
  );
}
```

### Vite

```bash
# Create new app
npm create vite@latest my-app -- --template react
cd my-app
npm install

# Install package
npm install k8s-quiz-game

# Copy quiz data
cp node_modules/k8s-quiz-game/dist/quiz_game_data.json public/
```

```jsx
// src/App.jsx
import K8sQuizGame from 'k8s-quiz-game';

function App() {
  return (
    <div>
      <K8sQuizGame />
    </div>
  );
}

export default App;
```

## Troubleshooting

### Quiz data not loading

**Problem**: Quiz modal shows "Questions not found" error.

**Solution**: 
1. Verify `quiz_game_data.json` is in your `public` folder
2. Check that the file is accessible at `/quiz_game_data.json` in your browser
3. For Next.js, ensure the file is in the `public` directory (not `public/quiz_game_data.json`)

### Styles not working

**Problem**: Component looks unstyled.

**Solution**: 
- CSS Modules are bundled with the component
- If using Next.js, you may need to add CSS module support in `next.config.js`:
```js
module.exports = {
  // ... other config
  webpack: (config) => {
    config.module.rules.push({
      test: /\.module\.css$/,
      use: [
        {
          loader: 'css-loader',
          options: {
            modules: true,
          },
        },
      ],
    });
    return config;
  },
};
```

### Build errors

**Problem**: Errors when building your app.

**Solution**:
- Ensure React 16.8+ is installed: `npm install react react-dom`
- Check Node.js version (requires 14+)
- Clear cache: `rm -rf node_modules package-lock.json && npm install`

## Package Requirements

- React >= 16.8.0
- React-DOM >= 16.8.0
- Node.js >= 14.0.0

## Features

- ✅ Self-contained component
- ✅ CSS Modules (no style conflicts)
- ✅ LocalStorage persistence
- ✅ No external dependencies (except React)
- ✅ Works with all React frameworks

