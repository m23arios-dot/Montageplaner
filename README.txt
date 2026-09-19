Montageplaner

V31 – Deployment & Cache Fix

- Visual design and V30 functionality preserved.
- Fixed the Service Worker so it no longer references the missing geratemacher-logo.png.
- New cache version: montageplaner-v31.
- Old Service Worker caches are removed automatically.
- The current index.html is requested from the network first, so GitHub Pages updates are visible.
- Service Worker activates immediately and takes control of the current page.
- Pagination and existing navigation remain unchanged.

Installation on GitHub Pages:
1. Upload/replace index.html, manifest.json and sw.js in the repository root.
2. Replace README.txt.
3. Wait for the GitHub Pages deployment to show the green check.
4. Open the site once in a normal browser window.
5. If an old PWA is still open, close it completely and open the site again.
