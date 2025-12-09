# Release Process

## How to Release

1. **Update version in `package.json`:**
   ```bash
   npm version patch  # 0.1.0 -> 0.1.1
   npm version minor  # 0.1.0 -> 0.2.0
   npm version major  # 0.1.0 -> 1.0.0
   ```

2. **Commit and push:**
   ```bash
   git push origin main --follow-tags
   ```

3. **Create GitHub Release:**
   - Go to: https://github.com/lnmplang/lnmp-sdk-js/releases/new
   - Choose the tag that was just created
   - Write release notes
   - Click "Publish release"

4. **Automatic NPM Publish:**
   - GitHub Actions will automatically publish to NPM
   - Check: https://github.com/lnmplang/lnmp-sdk-js/actions

## Version Guidelines

- **Patch** (0.1.x): Bug fixes, small changes
- **Minor** (0.x.0): New features, backward compatible
- **Major** (x.0.0): Breaking changes

## Example Release Notes Template

```markdown
## What's Changed
- Feature: Added X functionality
- Fix: Resolved Y issue
- Chore: Updated dependencies

## Breaking Changes (if major)
- Changed API for Z

**Full Changelog**: https://github.com/lnmplang/lnmp-sdk-js/compare/v0.1.0...v0.2.0
```
