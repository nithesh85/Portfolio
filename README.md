# Nithesh — Developer Portfolio Web Application

> **First-Year Master of Computer Applications (MCA) Student**  
> **Poornaprajna Institute of Management (PIM), Udupi, Karnataka**  
> *Aspiring Software Developer &bull; Web Development & Full-Stack Focus*

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Theme](https://img.shields.io/badge/Theme-Orange_%26_Charcoal-EA580C)](style.css)
[![Accessibility](https://img.shields.io/badge/Accessibility-WCAG_2.1_AA-success)](https://www.w3.org/WAI/standards-guidelines/wcag/)

---

## 📌 Overview

This repository contains the complete, production-ready source code for **Nithesh's Personal Developer Portfolio Website**. Built strictly using **semantic HTML5, Vanilla CSS3, and ES6+ JavaScript**, the portfolio is fast, lightweight, and fully accessible across all screen sizes.

The website faithfully represents Nithesh's authentic academic journey at **Poornaprajna Institute of Management (PIM), Udupi**, displaying self-evaluated core programming proficiencies without inflation, highlighting university laboratory coursework, and mapping out a clear technical roadmap for 2026–2028.

---

## ✨ Key Features & Highlights

### 🎨 1. Design System & Theme Engine
- **Curated Palette:** Modern **Orange (`#EA580C` / `#F97316`)** and **Charcoal (`#121417` / `#0C0E12`)** aesthetic.
- **Default Appearance:** Clean, high-contrast **Light Mode** as per specification.
- **Dark Theme Toggle:** Integrated light/dark switcher with smooth CSS transitions and persistent user preference saved in `localStorage`.
- **Micro-Interactions:** Subtle card hover elevation, focus-visible accessibility rings, and full compliance with `prefers-reduced-motion`.

### 🧭 2. Header & Navigation
- **Sticky Glassmorphism Header:** Floating frosted glass effect with active section highlighting powered by `IntersectionObserver`.
- **Top Academic Status Bar:** Real-time indicator highlighting first-year status and open availability for internships.
- **Responsive Drawer:** Slide-in mobile menu with keyboard trap, smooth backdrop blur, and Esc-key dismissal.

### 🚀 3. Hero Showcase (Text-Focused Introduction)
- Direct elevator pitch with location pill (*Udupi, Karnataka, India*).
- Live pulsing availability badge for internships & collaborations.
- Interactive **Terminal Spotlight Widget** showcasing parsed JSON academic metadata with colored syntax highlighting.
- Fast action buttons for exploring work, initiating contact, or viewing the resume.

### 🎓 4. Authentic Academic Background
- Spotlight on **Poornaprajna Institute of Management (PIM)**, Udupi (2026–2028 MCA batch).
- Specialization in *Computer Applications & Software Development*.
- Academic principles highlighting rigorous coursework in SDLC, Data Structures, OOP, and Relational Databases.
- Natural languages spoken: **English** (Professional Working) and **Kannada** (Native / Fluent).

### 📊 5. Verified Skills & Visual Proficiency Meters
- **No Exaggeration Policy:** Core programming languages are presented honestly with a 5-tier visual meter and verified `Basic` badges:
  - **Python:** Basic (Level 2 of 5)
  - **C:** Basic (Level 2 of 5)
  - **Java:** Basic (Level 2 of 5)
- **Categorized Tech Stack Grid:**
  - *Frontend:* HTML5, CSS3, JavaScript (ES6+)
  - *Backend:* Node.js
  - *Databases & Storage:* MySQL
  - *Data Science & AI:* NumPy, Pandas
  - *Cloud & Deployment:* GitHub Pages, Google Cloud
  - *Core CS & Tools:* GitHub, Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP)

### 🔬 6. Learning Journey & Active Explorations
In place of a traditional or fabricated project showcase, this section features genuine coursework and hands-on experiments:
- **Interactive Filter Tabs:** Filter between *All Items*, *Coursework Labs*, *Active Experiments*, and *Technical Roadmap*.
- **Coursework Labs:**
  - *C Programming & Memory Allocation Lab:* Pointers, structs, dynamic memory (`malloc`/`free`), and search routines.
  - *Object-Oriented Programming in Java:* Inheritance, interfaces, abstract classes, and custom exception handling.
  - *Relational Database Design & MySQL:* 3NF normalization, relational modeling, and SQL JOINs.
- **Active Experiments:**
  - *Semantic Web Interfaces & Responsive Layouts:* Pure HTML5/CSS3 exploration.
  - *Data Manipulation with NumPy & Pandas:* DataFrames and data wrangling.
- **2026–2028 Technical Roadmap:** Planned milestones for full-stack Node.js development, REST APIs, and Google Cloud deployment.

### 📄 7. Printable Resume Modal
- Pop-up modal presenting a formatted, clean Curriculum Vitae.
- Integrated **"Print / Save PDF"** button.
- Dedicated `@media print` stylesheet that isolates the CV document and hides website chrome for crisp PDF exports.

### 📬 8. Contact & Social Channels
- Direct copy-to-clipboard functionality for email (`nitheshmca@gmail.com`) and phone (`+91 9353393824`).
- Interactive contact form with real-time validation and automated `mailto:` client launch.
- Verified links to GitHub and location banner for Udupi, Karnataka.

---

## 📂 Project Structure

```text
resumebuilder/
├── index.html       # Semantic HTML5 markup, meta tags, and structured sections
├── style.css        # Vanilla CSS design system, color variables, and responsive rules
├── script.js        # Vanilla ES6+ interactivity, theme engine, and modal logic
└── README.md        # Project documentation and deployment instructions
```

---

## 🚀 Getting Started & Local Development

This project has **zero external package dependencies** and can be run immediately on any system.

### Option 1: Direct Browser Opening
Simply double-click [`index.html`](file:///c:/Users/Dell/resumebuilder/index.html) or open it inside any modern browser (Chrome, Edge, Firefox, Safari).

### Option 2: Using Python's Built-in HTTP Server (Recommended)
Open your terminal in the project directory and run:

```bash
# Start local server on port 8000
python -m http.server 8000
```
Then navigate to: **`http://localhost:8000`**

### Option 3: Using Node.js `npx serve`
```bash
npx serve .
```

### Option 4: VS Code Live Server Extension
1. Open the project folder in VS Code.
2. Right-click on `index.html` and select **"Open with Live Server"**.

---

## 🌐 Deployment to GitHub Pages

To deploy this portfolio online for free using GitHub Pages:

1. Initialize git and commit your files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Nithesh Developer Portfolio"
   ```
2. Create a repository on [GitHub](https://github.com/new) (e.g. `nithesh-portfolio`).
3. Link the remote and push:
   ```bash
   git remote add origin https://github.com/<your-username>/nithesh-portfolio.git
   git branch -M main
   git push -u origin main
   ```
4. On GitHub, navigate to **Settings &rarr; Pages**.
5. Under **Branch**, select `main` and root `/`, then click **Save**.
6. Your portfolio will be live at `https://<your-username>.github.io/nithesh-portfolio/`.

---

## ♿ Accessibility & Standards

- **Semantic HTML5:** Structured with `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, and `<footer>`.
- **Keyboard Navigable:** Visible focus rings (`:focus-visible`) across all interactive buttons, inputs, and links.
- **Screen Reader Support:** Accessible `aria-label`, `aria-expanded`, `aria-hidden`, and `role` attributes on dialogs and buttons.
- **Color Contrast:** High-contrast text exceeding WCAG 2.1 AA standards in both Light and Dark themes.
- **Motion Sensitivity:** Respects user accessibility settings via `@media (prefers-reduced-motion: reduce)`.

---

## 👤 Student Profile Summary

- **Name:** Nithesh
- **Academic Degree:** Master of Computer Applications (MCA) — 2026–2028 Cohort
- **Institution:** Poornaprajna Institute of Management (PIM), Udupi, Karnataka, India
- **Email:** [nitheshmca@gmail.com](mailto:nitheshmca@gmail.com)
- **Phone:** [+91 9353393824](tel:9353393824)
- **GitHub:** [github.com/dashboard](https://github.com/dashboard)
- **Target Roles:** Software Developer, Web Developer

---

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). You are welcome to adapt and customize it for educational or portfolio purposes.
