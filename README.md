# DEESC Prototyping

Electronics and embedded-systems portfolio, hosted at https://deescproto.com.

## Pages

- `index.html`: the Modular Drone Platform and HITL Test Platform only.
- `people.html`: Finch Voice Assistant and Haptic Reminder.
- `projects.html`: short explanations of smaller projects.
- `lessons-learned.html`: personal reflection on engineering interviews and understanding projects end to end.
- `about.html`: engineering background, capabilities and contact links.
- `project.html?id=...`: project notes, documents and keyboard-accessible photo galleries.

## Editing

This is a static site with no build step or server dependencies. Shared project records are in `projects-data.js`; the listing pages contain their own HTML for immediate loading. Update both when changing a project summary. Shared styling is in `styles.css`.

Keep `CNAME` unchanged to preserve the custom domain. Root-level `photo-*.webp` files are optimized portfolio photos. The original galleries and engineering documents remain in `assets/`.

Project states distinguish working hardware, active development and design targets. The lead photo uses a studio background treatment; the project galleries include original bench and design imagery.

## Local preview

Serve this folder with any static web server. For example: `python -m http.server 8765`.

The gallery supports keyboard navigation with Left/Right and Escape. The mobile navigation, semantic headings, skip link and reduced-motion styles are included in the site.

## November 2, 2026 update

The drone and HITL project pages now include hardware architecture, signal paths, software flow and verification examples. The HITL page opens with the supplied 3D PCB render and uses the same image first in its gallery. `case-study.css` styles the added sections. The routing explorer is an illustration and does not connect to hardware.

The HITL page leads with alternating numbered bench-photo, AI motor-tuning and Ethernet sections. Its network evidence includes original Wireshark screenshots, a small packet-capture excerpt, a nine-profile CSV and a JSON summary. The final diagnostic matrix passed application checks; the page also records TCP connection resets/retries and distinguishes CPU/SPI clock speeds from Ethernet link rate. The capture excerpt includes board-related ARP/ICMP traffic from outside the final matrix; frame numbers differ from the original screenshots.

The AI-assisted motor section cites the completed 89-job tuning session and its lookup-table check, current trips and speed-ripple limitations. Its JSON summary describes the division between trial planning, Python checks and local ESC commutation. No physical hardware is controlled by this website.

The supplied PDB, FMU, motor-drive and encoder schematics were used only to explain the system. They are not included in this package. The new public document, `assets/docs/HITL-schematic-sheets.pdf`, contains the supplied eight-page HITL draft with personal author names removed. Existing documents for unrelated portfolio projects are retained.

When deploying, replace the site contents with this package while preserving any hosting configuration outside it. If applying an overlay to an existing checkout, also remove `assets/projects/modular-drone-platform/04.png`: this old circuit-diagram image has been removed from the updated site. Keep `CNAME` unchanged. This package does not itself update the live website.
