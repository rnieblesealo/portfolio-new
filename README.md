# Todo

- [x] Links for CodePath project repos
- [x] Update gif for Lucina
- [x] Memory Well link takes you to the page itself
- [ ] Language name on hover

# Notes

### Loading Markdown Articles

- Markdowns are assets in `public/`, so it should be `fetch()`ed and not imported as a module.

### Single Page App

- All React router apps are SPAs (Single-Page Applications)
- SPAs have only 1 `index.html` file; all routes are client-side 
    - React router just swaps the picture in a single "main" frame (`index.html`); it doesn't actually *move* frames (i.e. other HTML files)
    - If we try to load Markdown as full page link, Vercel will look for that URL in server as a separate "frame"
    - But it doesn't exist!
    - To fix this, we need to tell Vercel that we're an SPA and to route everything through `index.html`, our main frame
    - This will ensure things like the Markdown links work, because they're handled by the React router and not Vercel
    - That's what the `vercel.json` file takes care of
