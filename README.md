# Engineering portfolio

A responsive, accessible static portfolio for **Alice Record**. It uses plain HTML, CSS, and a tiny JavaScript file—no build step or package installation is required.

## Make it yours

1. Edit `index.html`: update the name, location and role placeholders, profile copy, contact address, social URLs, and fictional sample case studies. The starting profile identifies a Year 2 Integrated Design and Mechanical Engineering student at the University of Bath; update it if needed. Keep only skills and claims that accurately reflect your experience. The case studies included now are illustrative concepts only, not completed work.
2. Update the page title, description, and theme color in the `<head>` to match your details and brand.
3. Adjust colors, type, and layout in `styles.css`. The Google Fonts are optional; the page falls back to generic sans-serif and monospace fonts if they cannot load.
4. Preview locally by opening `index.html` in a browser, or serve the repository root with any static file server.

The Project 01 video is stored at `assets/videos/project-01-smart-insole.mp4`. Replace that file to update the video shown in the first slideshow slide. The materials research, electronics objectives, and final design images are stored at `assets/images/project-01-materials-research.png` (slide 02), `assets/images/project-01-electronics-objectives.png` (slide 03), and `assets/images/project-01-final-design.png` (slide 04); replace a file to update its image.

To add more Project 01 slides, duplicate a `.carousel-slide` block inside `.carousel-slides` in `index.html`. Set its `data-slide-label` to a short description and replace the placeholder with an image or video. The counter and accessible slide numbering update automatically.

## Publish at `https://alicerecord.github.io/`

This repository is configured as a root user site, so the page and stylesheet use relative paths and do not require a project-site base URL.

1. Push the site to the `main` branch of `Alicerecord/Alicerecord.github.io`.
2. In the repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
3. The workflow in `.github/workflows/pages.yml` publishes the repository root on each push to `main`. You can also start it from **Actions → Deploy portfolio to GitHub Pages → Run workflow**.
4. Once the deployment finishes, verify `https://alicerecord.github.io/`. GitHub Pages may take a few minutes to serve the first deployment.

The workflow requires the repository's Pages deployment permissions, which are enabled through GitHub's Pages environment and Actions configuration. No secrets or external build service are required.
