
# AI A2Z Sheet

A Striver A2Z-sheet-style tracker for AI course topics. Plain HTML/CSS/JS — no build step, no framework.

## Go live in 3 steps

1. Create a new GitHub repo (e.g. `ai-a2z-sheet`) and push these 3 files (`index.html`, `topics.js`, `README.md`) to the `main` branch.
2. In the repo: **Settings → Pages → Source → Deploy from a branch → main → / (root) → Save**.
3. Wait ~1 minute. Your live link will be:
   `https://<your-github-username>.github.io/ai-a2z-sheet/`

Every time you push a change, the live site updates automatically within a minute.

## Adding a new topic later

Open `topics.js` and add a new object to the `topics` array, following the same shape as the existing ones:

```js
{
  id: "unique-id-here",
  category: "Category Name",       // reuses existing category if name matches exactly
  name: "Display Name",
  difficulty: "Easy",              // Easy | Medium | Hard
  theoryLink: "https://...",
  pythonCode: `
your python code here
`,
  vizSteps: [
    "step 1 text",
    "step 2 text",
    "step 3 text"
  ]
}
```

Commit and push — done, it appears live with no other changes needed.

## Notes
- Progress checkboxes are saved in your browser's localStorage (per-device, not synced across devices).
- `vizSteps` is a simple text step-through for now — good enough to explain the algorithm's flow; can be upgraded to canvas/graphics later without changing the data format.
