---
description: Commit changes, update docs, and create a PR
---

# Commit and PR Workflow

This workflow orchestrates the process of updating documentation and creating a pull request.

1.  **Update Documentation**
    Read the `README.md` and use the `technical-writer` skill to ensure it accurately reflects the latest changes in the codebase.
    If changes are needed, apply them to the `README.md`.

2.  **Commit Changes**
    Stage all modified files and commit them with a descriptive message:
    ```bash
    git add -A
    git commit -m "<type>(<scope>): <summary>"
    git push origin HEAD
    ```
    Use the PR title format from the `create-pr` skill for the commit message.

3.  **Create Pull Request**
    Once changes are committed and pushed, use the `create-pr` skill to create the Pull Request.
    Follow the instructions in the `create-pr` skill to generate a proper title and description.
