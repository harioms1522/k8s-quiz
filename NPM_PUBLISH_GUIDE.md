# NPM Publishing Guide

## Authentication Setup

The package is built successfully! To publish, you need to set up npm authentication.

### Option 1: Enable Two-Factor Authentication (Recommended)

1. Go to https://www.npmjs.com/settings/[your-username]/profile
2. Enable Two-Factor Authentication (2FA)
3. Follow the setup instructions
4. Try publishing again: `npm publish`

### Option 2: Use Granular Access Token

1. Go to https://www.npmjs.com/settings/[your-username]/tokens
2. Click "Generate New Token"
3. Select "Granular Access Token"
4. Choose:
   - Token name: "k8s-quiz-game-publish"
   - Expiration: Choose your preference
   - Access: "Read and write" for the package
   - Package: Select "k8s-quiz-game" or "All packages"
5. Copy the token
6. Login with the token:
   ```bash
   npm login
   # Username: your-username
   # Password: [paste the token]
   # Email: your-email@example.com
   ```
7. Publish: `npm publish`

### Option 3: Use Automation Token

1. Go to https://www.npmjs.com/settings/[your-username]/tokens
2. Click "Generate New Token"
3. Select "Automation" token type
4. Copy the token
5. Login:
   ```bash
   npm login --auth-type=legacy
   # Username: your-username
   # Password: [paste the token]
   # Email: your-email@example.com
   ```
6. Publish: `npm publish`

## Publishing Steps

Once authenticated:

1. **Verify you're logged in:**
   ```bash
   npm whoami
   ```

2. **Check package name availability:**
   - The package name `k8s-quiz-game` might already be taken
   - If so, you'll need to use a scoped package: `@your-username/k8s-quiz-game`
   - Update `package.json`:
     ```json
     "name": "@your-username/k8s-quiz-game"
     ```

3. **Build the package:**
   ```bash
   npm run build:package
   ```

4. **Publish:**
   ```bash
   npm publish
   ```
   
   For scoped packages (if using @your-username):
   ```bash
   npm publish --access public
   ```

## Package Status

✅ **Build**: Successful
✅ **Package Size**: 115.0 kB (unpacked: 472.9 kB)
✅ **Files Included**:
   - dist/index.js (CommonJS)
   - dist/index.esm.js (ES Module)
   - dist/quiz_game_data.json
   - Source maps
   - README.md
   - package.json

## Troubleshooting

### Package name already taken

If `k8s-quiz-game` is taken, use a scoped package:

1. Update `package.json`:
   ```json
   "name": "@your-username/k8s-quiz-game"
   ```

2. Publish with public access:
   ```bash
   npm publish --access public
   ```

### Authentication still failing

1. Clear npm cache: `npm cache clean --force`
2. Logout and login again: `npm logout` then `npm login`
3. Verify token is valid at https://www.npmjs.com/settings/[your-username]/tokens

### Version already published

If version 1.1.0 already exists:

1. Update version in `package.json`:
   ```bash
   npm version patch  # 1.1.0 -> 1.1.1
   # or
   npm version minor  # 1.1.0 -> 1.2.0
   # or
   npm version major  # 1.1.0 -> 2.0.0
   ```

2. Publish again: `npm publish`

## After Publishing

Once published, users can install:

```bash
npm install k8s-quiz-game
```

Or if using scoped package:

```bash
npm install @your-username/k8s-quiz-game
```

## Next Steps

1. Set up authentication (choose one of the options above)
2. Check if package name is available
3. Publish: `npm publish`
4. Share your package! 🎉

