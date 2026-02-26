# Publishing and Using as an NPM Package

## Building the Package

1. Install dependencies:
```bash
npm install
```

2. Build the package:
```bash
npm run build
```

This will create a `dist` folder with the bundled component.

## Publishing to NPM

### First Time Publishing

1. Make sure you're logged in to npm:
```bash
npm login
```

2. Update the version in `package.json` if needed:
```bash
npm version patch  # for bug fixes
npm version minor  # for new features
npm version major  # for breaking changes
```

3. Publish:
```bash
npm publish
```

### Updating the Package

1. Make your changes
2. Update version: `npm version patch|minor|major`
3. Build: `npm run build`
4. Publish: `npm publish`

## Using the Package in Your React App

### Installation

```bash
npm install k8s-quiz-game
```

### Basic Usage

```jsx
import React from 'react';
import K8sQuizGame from 'k8s-quiz-game';
import 'k8s-quiz-game/dist/index.css'; // If CSS is extracted

function App() {
  return (
    <div>
      <K8sQuizGame />
    </div>
  );
}
```

### Setting Up Quiz Data

The component expects quiz data at `/quiz_game_data.json` in your public folder.

1. Copy the quiz data file to your app's `public` folder:
```bash
cp node_modules/k8s-quiz-game/dist/quiz_game_data.json public/quiz_game_data.json
```

Or manually copy from `node_modules/k8s-quiz-game/dist/quiz_game_data.json` to your `public` folder.

### Using with Create React App

1. Install:
```bash
npx create-react-app my-app
cd my-app
npm install k8s-quiz-game
```

2. Copy quiz data:
```bash
cp node_modules/k8s-quiz-game/dist/quiz_game_data.json public/
```

3. Use in your component:
```jsx
import K8sQuizGame from 'k8s-quiz-game';

function App() {
  return <K8sQuizGame />;
}
```

### Using with Next.js

1. Install:
```bash
npm install k8s-quiz-game
```

2. Copy quiz data to `public` folder:
```bash
cp node_modules/k8s-quiz-game/dist/quiz_game_data.json public/
```

3. Use in a page:
```jsx
import dynamic from 'next/dynamic';

const K8sQuizGame = dynamic(() => import('k8s-quiz-game'), {
  ssr: false,
});

export default function QuizPage() {
  return <K8sQuizGame />;
}
```

### Using with Vite

1. Install:
```bash
npm install k8s-quiz-game
```

2. Copy quiz data to `public` folder:
```bash
cp node_modules/k8s-quiz-game/dist/quiz_game_data.json public/
```

3. Use in your component:
```jsx
import K8sQuizGame from 'k8s-quiz-game';

function App() {
  return <K8sQuizGame />;
}
```

## Package Structure

After building, the `dist` folder contains:
- `index.js` - CommonJS bundle
- `index.esm.js` - ES Module bundle
- `quiz_game_data.json` - Quiz questions data
- Source maps (`.map` files)

## Important Notes

1. **Quiz Data File**: The component requires `quiz_game_data.json` in the public folder. Make sure to copy it after installation.

2. **CSS Modules**: The component uses CSS Modules. The styles are bundled with the component, so no additional CSS import is needed.

3. **LocalStorage**: The component uses localStorage with the key `k8s_rpg_v3` to persist game state.

4. **Peer Dependencies**: React and React-DOM are peer dependencies, so they must be installed in your app.

## Troubleshooting

### Quiz data not loading
- Ensure `quiz_game_data.json` is in your `public` folder
- Check browser console for fetch errors
- Verify the file path is accessible at `/quiz_game_data.json`

### Styles not applying
- CSS Modules are bundled with the component
- If using Next.js, you may need to configure CSS modules in `next.config.js`

### Build errors
- Make sure all dependencies are installed: `npm install`
- Check Node.js version (requires Node 14+)

