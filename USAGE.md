# Usage Guide

This package can be used in two ways:

## 1. As a Standalone Application

Run the app directly for development or production:

### Development Mode

```bash
npm install
npm start
```

This will start the development server at `http://localhost:3000`

### Production Build

```bash
npm run build:app
```

This creates a production build in the `build/` folder that can be deployed.

### Features
- ✅ Full development environment with hot reload
- ✅ Production-ready build
- ✅ All features working out of the box
- ✅ Quiz data included in public folder

## 2. As a React Component Package

Install and use in your own React application:

### Installation

```bash
npm install k8s-quiz-game
```

### Usage

```jsx
import K8sQuizGame from 'k8s-quiz-game';

function App() {
  return <K8sQuizGame />;
}
```

### Setup Required

After installation, copy the quiz data file:

```bash
cp node_modules/k8s-quiz-game/dist/quiz_game_data.json public/
```

## Package Scripts

- `npm start` - Run standalone app in development mode
- `npm run build:app` - Build standalone app for production
- `npm run build:package` or `npm run build` - Build package for publishing
- `npm test` - Run tests

## Project Structure

```
k8s-quiz-game/
├── src/
│   ├── app.js          # Entry point for standalone app
│   ├── index.js        # Entry point for package exports
│   ├── components/     # React components
│   ├── hooks/          # Custom hooks
│   └── data/           # Game data
├── public/             # Public assets (for standalone app)
├── dist/               # Built package (for npm)
└── build/              # Built app (for deployment)
```

## Development Workflow

### Working on the Component

1. Make changes to components in `src/components/`
2. Test in standalone app: `npm start`
3. Build package: `npm run build:package`
4. Test package locally: `npm link` (then use in another project)

### Publishing Updates

1. Make your changes
2. Test in standalone app: `npm start`
3. Build package: `npm run build:package`
4. Update version: `npm version patch|minor|major`
5. Publish: `npm publish`

## Notes

- The standalone app uses `src/app.js` as entry point
- The package uses `src/index.js` as entry point
- Both point to the same component, just different entry points
- Quiz data is in `public/quiz_game_data.json` for the app
- Quiz data is copied to `dist/` when building the package

