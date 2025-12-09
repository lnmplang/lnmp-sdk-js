# Automated Release System

## How It Works

The SDK uses **fully automated releases** triggered by merging to `main`.

### Workflow

1. **Make changes** → Create PR
2. **PR merged to main** → Auto-release workflow triggers
3. **Workflow automatically:**
   - Reads core protocol version from Rust crate
   - Syncs SDK major.minor with core (e.g., core `0.5.13` → SDK `0.5.x`)
   - Bumps patch version for SDK changes
   - Builds WASM + TypeScript
   - Runs all tests
   - Creates git tag
   - Creates GitHub Release
   - Publishes to NPM

### Version Strategy

**SDK version format: `MAJOR.MINOR.PATCH`**

- `MAJOR.MINOR` = Core protocol version (synced from Rust crate)
- `PATCH` = SDK-specific changes

**Examples:**
- Core: `0.5.13` → SDK: `0.5.0` (first SDK release for 0.5.x)
- Core: `0.5.13` → SDK: `0.5.1` (SDK bug fix)
- Core: `0.6.0` → SDK: `0.6.0` (core breaking change, auto-sync)

### Manual Intervention

**Not needed!** Everything is automatic.

If you need to manually publish:
```bash
npm version patch  # or minor/major
git push --follow-tags
```

### Skipping Release

Add `[skip ci]` to commit message to prevent auto-release.

## CI/CD Pipeline

```
PR Created → CI Tests
     ↓
Merged to main → Auto Release
     ↓
Version Bump → Build → Test → Tag → GitHub Release → NPM Publish
```

## Monitoring

- **GitHub Actions**: https://github.com/lnmplang/lnmp-sdk-js/actions
- **NPM Releases**: https://www.npmjs.com/package/@lnmp/lnmp
- **GitHub Releases**: https://github.com/lnmplang/lnmp-sdk-js/releases
