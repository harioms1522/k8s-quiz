# Fixing 403 Error When Publishing

## The Problem

You're getting `403 Forbidden - You may not perform that action with these credentials`. This usually means:

1. **Token doesn't have write permissions** - The token might be read-only
2. **Token type is wrong** - Need "Automation" or "Granular Access Token" with write access
3. **Package scope issue** - Sometimes scoped packages work better

## Solutions

### Solution 1: Use Scoped Package Name (Easiest)

Update your package name to use your username scope:

1. **Edit `package.json`:**
   ```json
   "name": "@harioms1522/k8s-quiz-game"
   ```

2. **Publish with public access:**
   ```bash
   npm publish --access public
   ```

Scoped packages often work better with tokens and have fewer permission issues.

### Solution 2: Create New Token with Write Access

1. Go to: https://www.npmjs.com/settings/harioms1522/tokens
2. Delete your current token (if it exists)
3. Click "Generate New Token"
4. Choose **"Automation"** token type (this has full write access)
   - OR choose "Granular Access Token" with:
     - Access: **"Read and write"**
     - Package: **"All packages"** or **"k8s-quiz-game"**
5. Copy the token
6. Update `.npmrc`:
   ```
   //registry.npmjs.org/:_authToken=your-new-token-here
   ```
7. Try publishing again:
   ```bash
   npm publish --access public
   ```

### Solution 3: Verify Token Permissions

Check what your current token can do:

```bash
npm whoami
# Should show: harioms1522

npm token list
# Shows your tokens and their permissions
```

If you see your token but it's read-only, you need to create a new one with write access.

### Solution 4: Use npm login Instead

Sometimes using `npm login` works better than tokens:

1. Remove token from `.npmrc` (or delete the file)
2. Login:
   ```bash
   npm login
   # Username: harioms1522
   # Password: [your npm password or token]
   # Email: [your email]
   ```
3. Publish:
   ```bash
   npm publish --access public
   ```

## Recommended: Use Scoped Package

**This is the easiest solution!** Scoped packages work better with tokens:

1. **Update package.json:**
   ```json
   {
     "name": "@harioms1522/k8s-quiz-game",
     ...
   }
   ```

2. **Publish:**
   ```bash
   npm publish --access public
   ```

3. **Users install it as:**
   ```bash
   npm install @harioms1522/k8s-quiz-game
   ```

## Quick Fix Command

If you want to try the scoped package approach quickly:

```bash
# Update package name
# (Edit package.json manually or use sed/npm version)

# Then publish
npm publish --access public
```

## Still Not Working?

1. **Check npm registry:**
   ```bash
   npm config get registry
   # Should show: https://registry.npmjs.org/
   ```

2. **Clear npm cache:**
   ```bash
   npm cache clean --force
   ```

3. **Try logging out and back in:**
   ```bash
   npm logout
   npm login
   npm publish --access public
   ```

