# Git Sync Troubleshooting Guide

## Common Sync Issues Resolution

1. **Check Current Status**
```bash
git status
```

2. **Fetch All Remote Changes**
```bash
git fetch --all
```

3. **Reset Local Branch to Match Remote**
If you need to force sync with remote:
```bash
git reset --hard origin/main
```

4. **Force Pull (use with caution)**
If normal pull fails:
```bash
git pull --allow-unrelated-histories origin main
```

5. **Force Push (use with caution)**
If you're certain your local changes are correct:
```bash
git push -f origin main
```

## Prevention Steps

1. Always pull before making changes:
```bash
git pull origin main
```

2. Check branch status:
```bash
git branch -v
```

3. Verify remote connection:
```bash
git remote -v
```

## Common Issues

- **Unrelated Histories**: Often happens with new repositories
- **Divergent Branches**: Local and remote have different commit histories
- **Merge Conflicts**: Conflicting changes in same files
- **Authentication Issues**: Check your GitHub credentials

Remember to backup your work before using force commands!
