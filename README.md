# Divyam.web Portfolio

A modern, responsive personal portfolio website for **Divyam Kumar Choubey** (CSE student at NIT Manipur), built with vanilla HTML, CSS, and JavaScript.

## Overview

This project showcases:
- personal introduction and career objective
- technical skills
- major projects with source/demo links
- education and certification details
- contact and social profiles

The site includes a dynamic typing headline, dark/light theme toggle with persistence, and a mobile-friendly navigation menu.

## Tech Stack

- `HTML5`
- `CSS3`
- `JavaScript (ES6)`
- `Typed.js` (for animated typing text)
- `Font Awesome` (icons)
- `Google Fonts` (`Poppins`, `Raleway`)

## Project Structure

```text
Divyam.web/
├── index.html
├── style.css
├── script.js
├── profile_placeholder.jpg
├── developer.png
├── Divyam_Choubey_Resume.pdf
├── Flappy_Bird.mp4
└── AquaMark.mp4
```

## Key Features

- Responsive single-page layout with section-based navigation
- Sticky header with smooth scrolling
- Hero section with animated role text via `Typed.js`
- Downloadable resume button
- Dark/Light mode toggle with `localStorage` theme memory
- Mobile slide-in menu with close-on-link-click behavior
- Dedicated sections:
  - About
  - Skills
  - Projects
  - Education & Certifications
  - Contact

## Run Locally

Because this is a static site, no build step is required.

1. Clone or download the project.
2. Open `index.html` directly in your browser.

Optional (recommended for local development):
- Use a local server such as VS Code Live Server.

## Customization Guide

- Update content: edit `index.html`
- Update styling/theme colors: edit CSS variables in `style.css` (`:root` and `.light-mode`)
- Update typing roles/theme logic/mobile nav behavior: edit `script.js`
- Replace assets:
  - profile image: `profile_placeholder.jpg`
  - favicon: `developer.png`
  - resume: `Divyam_Choubey_Resume.pdf`
  - demo videos: `Flappy_Bird.mp4`, `AquaMark.mp4`

## External Dependencies (CDN)

Loaded in `index.html`:
- Typed.js: `https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js`
- Font Awesome 6.5.1: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css`
- Google Fonts: `Poppins`, `Raleway`

## Deployment

This site can be deployed to any static hosting provider:
- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting

## Author

**Divyam Kumar Choubey**
- GitHub: <https://github.com/Divyam16choubey>
- LinkedIn: <https://linkedin.com/in/divyam-kumar-choubey-a3ab6b2a6>
- Email: <mailto:divyam@nitmanipur.ac.in>
