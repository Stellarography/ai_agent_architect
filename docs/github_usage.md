# Basic GitHub Usage Guide

This guide covers the fundamental Git commands for interacting with a GitHub repository.

## Prerequisites

*   **Git Installed:** Ensure you have Git installed on your system. Download from [https://git-scm.com/](https://git-scm.com/).
*   **GitHub Account:** You need a GitHub account. Sign up at [https://github.com/](https://github.com/).
*   **Repository Created:** You should have a repository created on GitHub.

## Initial Setup (If not already done)

1.  **Initialize Git Repository (Local):**
    If your project isn't already a Git repository, navigate to your project's root directory in the terminal and run:
    ```bash
    git init
    ```

2.  **Add Remote Repository:**
    Link your local repository to the remote repository on GitHub. Replace `<repository_url>` with the URL provided by GitHub (e.g., `https://github.com/your-username/your-repository.git`).
    ```bash
    git remote add origin <repository_url>
    ```
    You can verify the remote was added using:
    ```bash
    git remote -v
    ```

## Common Workflow

1.  **Check Status:**
    See which files have been modified, added, or are untracked.
    ```bash
    git status
    ```

2.  **Stage Changes:**
    Add specific files you want to include in your next commit.
    ```bash
    git add <file_name>
    ```
    Or add all modified/new files:
    ```bash
    git add .
    ```

3.  **Commit Changes:**
    Save your staged changes to the local repository history with a descriptive message.
    ```bash
    git commit -m "Your descriptive commit message here"
    ```

4.  **Push Changes:**
    Upload your local commits to the remote repository (e.g., `origin`) on the specified branch (e.g., `main` or `master`).
    ```bash
    git push origin <branch_name>
    ```
    *(Commonly `git push origin main` or `git push origin master`)*

5.  **Pull Changes:**
    Download changes from the remote repository to your local repository. This is important to do before starting new work if others might have pushed changes.
    ```bash
    git pull origin <branch_name>
    ```

## Branching and Merging

Working on branches keeps your main codebase stable while you develop features or fix bugs.

1.  **Create and Switch to a New Branch:**
    ```bash
    git checkout -b <new_branch_name>
    ```

2.  **Switch Between Branches:**
    ```bash
    git checkout <existing_branch_name>
    ```

3.  **List Branches:**
    ```bash
    git branch
    ```

4.  **Merge Changes:**
    First, switch to the branch you want to merge *into* (e.g., `main`).
    ```bash
    git checkout main
    ```
    Then, merge the changes *from* your feature branch.
    ```bash
    git merge <feature_branch_name>
    ```
    Resolve any merge conflicts if they occur.

5.  **Push New Branch:**
    If you created a branch locally and want it on GitHub:
    ```bash
    git push -u origin <new_branch_name>
    ```
    *(The `-u` flag sets the upstream tracking reference)*

## Further Learning

*   **GitHub Docs:** [https://docs.github.com/en](https://docs.github.com/en)
*   **Git Documentation:** [https://git-scm.com/doc](https://git-scm.com/doc)
*   **Interactive Tutorial:** [https://learngitbranching.js.org/](https://learngitbranching.js.org/)