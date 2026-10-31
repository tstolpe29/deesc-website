# DEESC Prototyping

Thomas Stolpe's electronics and embedded-systems portfolio, hosted at https://deescproto.com.

## Pages

- `index.html`: the Modular Drone Platform and HITL Test Platform only.
- `people.html`: Finch Voice Assistant and Haptic Reminder.
- `projects.html`: short explanations of smaller projects.
- `about.html`: engineering background, capabilities and contact links.
- `project.html?id=...`: project notes, documents and keyboard-accessible photo galleries.

## Editing

This is a static site with no build step or server dependencies. Shared project records are in `projects-data.js`; the listing pages contain their own HTML for immediate loading. Update both when changing a project summary. Shared styling is in `styles.css`.

Keep `CNAME` unchanged to preserve the custom domain. Root-level `photo-*.webp` files are optimized portfolio photos. The original galleries and engineering documents remain in `assets/`.

Project states distinguish working hardware, active development and design targets. The lead photo uses a studio background treatment; the project galleries include original bench and design imagery.

## Local preview

Serve this folder with any static web server. For example: `python -m http.server 8765`.

The gallery supports keyboard navigation with Left/Right and Escape. The mobile navigation, semantic headings, skip link and reduced-motion styles are included in the site.
