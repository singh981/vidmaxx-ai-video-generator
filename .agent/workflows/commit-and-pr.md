---
description: Commit changes, update docs, run code review, and create a PR
---

# Commit and PR Workflow

This workflow orchestrates the process of updating documentation, reviewing code, and creating a pull request.

1.  **Update Documentation**
    Read the `README.md` and use the `technical-writer` skill to ensure it accurately reflects the latest changes in the codebase.
    If changes are needed, apply them to the `README.md`.

2.  **Code Review**
    Run the CodeRabbit CLI to review the changes.
    ```bash
    coderabbit --prompt-only
    ```
    *Note: Run this in the background if possible, or wait for it to complete.*

3.  **Fix Issues**
    Review the output from CodeRabbit. If there are any issues reported, fix them.
    Repeat the review process if critical issues were found and fixed.

4.  **Create Pull Request**
    Once the code is reviewed and documentation is updated, use the `create-pr` skill to create the Pull Request.
    Follow the instructions in the `create-pr` skill to generate a proper title and description.
