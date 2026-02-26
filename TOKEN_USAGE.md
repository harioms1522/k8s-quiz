# Using NPM Token for Publishing

## Method 1: Environment Variable (Recommended)

Set the token as an environment variable before publishing:

### Windows (PowerShell):
```powershell
$env:NPM_TOKEN="your-token-here"
npm publish --access public
```

### Windows (CMD):
```cmd
set NPM_TOKEN=your-token-here
npm publish --access public
```

### Linux/Mac:
```bash
export NPM_TOKEN="your-token-here"
npm publish --access public
```

## Method 2: .npmrc File (Most Common)

Create or edit `.npmrc` file in your project root:

```ini
//registry.npmjs.org/:_authToken=your-token-here
```

Then publish:
```bash
npm publish --access public
```

**Note**: Add `.npmrc` to `.gitignore` to avoid committing your token!

## Method 3: npm config set

Set the token globally or locally:

```bash
# Global (for all projects)
npm config set //registry.npmjs.org/:_authToken your-token-here

# Local (for this project only)
npm config set //registry.npmjs.org/:_authToken your-token-here --location=project
```

Then publish:
```bash
npm publish --access public
```

## Method 4: Direct in Command (Not Recommended)

You can pass it directly, but it's less secure:

```bash
npm publish --access public --//registry.npmjs.org/:_authToken=your-token-here
```

## Getting Your Token

1. Go to: https://www.npmjs.com/settings/harioms1522/tokens
2. Click "Generate New Token"
3. Choose "Granular Access Token" or "Automation"
4. Copy the token immediately (you won't see it again!)

## Complete Example

```bash
# 1. Get your token from npmjs.com
# 2. Set it (choose one method above)
# 3. Publish

npm publish --access public
```

## Security Best Practices

1. ✅ Use `.npmrc` file (and add to `.gitignore`)
2. ✅ Use environment variables
3. ✅ Use granular access tokens (not full account tokens)
4. ❌ Don't commit tokens to git
5. ❌ Don't share tokens publicly

## Verify Token Works

Before publishing, test authentication:

```bash
npm whoami
# Should show: harioms1522
```

If it shows your username, the token is working!

