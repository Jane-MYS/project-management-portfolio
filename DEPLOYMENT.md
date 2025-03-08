
1️⃣ Initial Setup
✅ A. Ensure gh-pages Is Installed
bash
Copy
Edit
npm install gh-pages --save-dev
This package allows us to deploy our built project to GitHub Pages.
2️⃣ Configure vite.config.ts
✅ A. Modify the Base Path
Open vite.config.ts and update the base path to match your GitHub repository name:

ts
Copy
Edit
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "/project-management-portfolio/", // Change to match your repo name
  plugins: [react()],
  build: {
    outDir: "dist", // Ensure the correct output directory
  },
});
Save the file.
3️⃣ Build the Project
✅ Run the following command:
bash
Copy
Edit
npm run build
This creates a dist/ folder containing the production build.
4️⃣ Deploy to GitHub Pages
✅ A. Ensure dist/ Is Tracked by Git
Remove dist/ from .gitignore (if it's there), then add and commit:

bash
Copy
Edit
git add .gitignore
git commit -m "Allow dist folder for deployment"
✅ B. Deploy Only dist/ to gh-pages
bash
Copy
Edit
git add -f dist
git commit -m "Deploy built files"
git subtree push --prefix dist origin gh-pages
🚀 This ensures only the built files are deployed, keeping your repo clean.

5️⃣ Verify Deployment
1️⃣ Wait 2-5 minutes for GitHub Pages to process the update.
2️⃣ Visit your live site:
👉 https://jane-mys.github.io/project-management-portfolio/
3️⃣ Hard Refresh:

Windows/Linux: CTRL + SHIFT + R
Mac: CMD + SHIFT + R
4️⃣ Open Developer Console (F12 → Console) and check for errors.
🛠️ Troubleshooting
❌ Error: 404 on Some Files (e.g., src/main.tsx)
Ensure vite.config.ts has the correct base path matching the repo name.
Run:
bash
Copy
Edit
npm run build
git add -f dist
git commit -m "Fix base path issue"
git subtree push --prefix dist origin gh-pages
Wait a few minutes and hard refresh the page.
❌ Error: non-fast-forward When Pushing
If GitHub rejects the push:

bash
Copy
Edit
git push origin --delete gh-pages
git subtree push --prefix dist origin gh-pages
❌ Error: Cannot Delete Branch 'gh-pages' Checked Out
Switch to the main branch first:
bash
Copy
Edit
git checkout main
git branch -D gh-pages
git fetch origin
git checkout -b gh-pages origin/main
📌 Future Updates
When making changes to your project, simply follow these steps:

bash
Copy
Edit
npm run build
git add -f dist
git commit -m "Update deployment"
git subtree push --prefix dist origin gh-pages
🚀 This updates your live site with the latest version.

🎉 Done!
You now have a fully deployed Vite + React project on GitHub Pages. 🚀🎉
If anything breaks, check the troubleshooting section and re-deploy.