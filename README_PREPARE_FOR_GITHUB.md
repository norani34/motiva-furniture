# Publish-ready folder (instructions)

This repository contains a build output in the `dist/` folder which is ready-to-publish as a static website.

What I prepared for you:

- `dist/` — built static site (contains `index.html`, `assets/`, and images).
- `publish_prepare.ps1` — PowerShell script that copies `dist/` to a new `publish/` folder and initializes a Git repository there with an initial commit.
- `.gitignore` — common ignores for publishing a web project.

How to create the ready-to-publish folder and initialize Git (Windows PowerShell):

1. Open PowerShell in the project root.
2. Run:

```powershell
.\publish_prepare.ps1 -PublishFolder publish
```

This will:
- Copy `dist/` into `publish/` (mirroring files).
- Initialize a new Git repository inside `publish/`.
- Make an initial commit with message: "Initial commit ready for GitHub".

To push to GitHub:

```powershell
cd publish
git remote add origin https://github.com/<your-username>/<your-repo>.git
git branch -M main
git push -u origin main
```

Replace `<your-username>` and `<your-repo>` with your repository details.

Notes:
- The `dist/index.html` file was updated to use relative asset paths so the site works when served from the `publish/` folder or GitHub Pages.
- If you already have a build pipeline, you can instead copy the latest `dist/` into `publish/` before running the script.
