# 🚀 Prajwal Achwale — Developer Portfolio

[![Live Portfolio](https://img.shields.io/badge/Live%20Demo-prajwalprogrammer.github.io%2Fportfolio-brightgreen?style=for-the-badge&logo=github)](https://prajwalprogrammer.github.io/portfolio/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-prajwalachwale-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/prajwalachwale/)
[![LeetCode](https://img.shields.io/badge/LeetCode-800%2B%20Solved%20(1720)-FFA116?style=for-the-badge&logo=leetcode&logoColor=white)](https://leetcode.com/prajwal_29/)
[![GeeksforGeeks](https://img.shields.io/badge/GeeksforGeeks-Rank%20112th-2F8D46?style=for-the-badge&logo=geeksforgeeks&logoColor=white)](https://auth.geeksforgeeks.org/user/prajwal_29/)

> Modern, responsive, and performance-optimized personal portfolio website showcasing distributed backend architecture, microservices engineering, production projects, and competitive programming achievements.

---

## 📌 Table of Contents

- [Overview](#-overview)
- [✨ Key Features](#-key-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📂 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
- [🌐 Deployment](#-deployment)
- [⚙️ Customization Guide](#️-customization-guide)
- [📬 Contact & Connect](#-contact--connect)
- [📄 License](#-license)

---

## 📖 Overview

This repository contains the source code for the personal developer portfolio of **Prajwal Achwale**, a **Java Backend Developer & Software Engineer** with 2+ years of experience in distributed systems, Spring Boot, Clojure microservices, Rest.li, GraphQL, WebSockets, Pub/Sub, AWS, and Docker.

The portfolio is designed with a sleek dark-mode aesthetic, modular architecture, and zero unnecessary dependencies. It serves as an interactive resume and showcase for prospective teams, recruiters, and engineering collaborators.

---

## ✨ Key Features

- **💻 Interactive Code Terminal Hero**
  - Displays developer metadata in an authentic, syntax-highlighted Java class mockup (`PrajwalAchwale.java`) complete with macOS-style window controls.
  - Zero awkward whitespace or placeholder imagery.
- **🎯 4-Pillar Engineering Highlights**
  - Features core competencies: *Scalable Backend*, *Real-Time & Events*, *Cloud & Databases*, and *DSA & Problem Solving*.
- **🧭 Professional Journey Timeline**
  - Chronological breakdown of software engineering experience (Software Engineer 2 at Raja Software Labs, Unique School App India, Freelance) and academic background (VIT Pune Computer Science, 8.76 CGPA).
  - Detailed bullet points and technology stack badges.
- **⚡ Categorized Core Skills Tabs**
  - Tabbed interface switching between *Backend & Systems*, *Databases & Cloud*, *Frontend & Mobile*, and *CS Fundamentals*.
  - Visual animated proficiency meters.
- **🎨 Filterable Projects Gallery**
  - Powered by **MixItUp.js** for smooth CSS3 animation and filtering across categories (*All*, *Backend*, *Web*, *Mobile*, *Systems & Blockchain*).
  - Includes direct GitHub source links, live demo links, and Android APK downloads.
- **🏆 Interactive Achievements Modals**
  - Pop-up modals detailing LeetCode (800+ solved, rating 1720 / top 11%), GeeksforGeeks (Ranked 112th), Flipkart GRID 4.0 Semifinalist, Fiverr 5-star rating, and international conference paper publications (INCOFT-2022, ICCCE-2023).
  - Backdrop-click dismiss and keyboard accessible.
- **📩 Contact Form & Instant Messaging**
  - Direct WhatsApp chat integration (`wa.me`) and pre-configured form submission backend.
- **📱 Fully Responsive Design**
  - Mobile-first approach supporting desktop, tablet, and mobile with an off-canvas drawer navigation.

---

## 🛠️ Tech Stack

### Frontend & Core
- **Markup**: [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML) (Semantic, Accessible, Open Graph SEO)
- **Styling**: [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) (CSS Variables, Flexbox, CSS Grid, Custom Media Queries)
- **Scripting**: [Vanilla JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) (ES6+)

### Libraries & External Assets
- **Animations & Filtering**: [MixItUp 3](https://www.kunkalabs.com/mixitup/) (Animated project grid filtering)
- **Sliders & Carousels**: [Swiper.js](https://swiperjs.com/) (Touch-enabled slider support)
- **Iconography**:
  - [Unicons by Iconscout](https://iconscout.com/unicons)
  - [Boxicons](https://boxicons.com/)
  - [Iconify](https://iconify.design/) (Brand icons for LeetCode, GFG, GitHub, LinkedIn)
- **Typography**: [Google Fonts — Poppins](https://fonts.google.com/specimen/Poppins)
- **Backend Form Handling**: [Getform.io](https://getform.io/)

---

## 📂 Project Structure

```text
portfolio/
├── assets/
│   ├── css/
│   │   ├── style.css               # Main custom stylesheet & theme variables
│   │   └── swiper-bundle.min.css   # Swiper carousel styling
│   ├── js/
│   │   ├── main.js                 # UI logic (sidebar, tabs, modals, active scroll)
│   │   ├── mixitup.min.js          # MixItUp portfolio filter engine
│   │   └── swiper-bundle.min.js    # Swiper library bundle
│   └── img/                        # Project screenshots & thumbnails
├── index.html                      # Main entrypoint document
├── Prajwal_Resume.pdf              # Downloadable CV document
└── README.md                       # Repository documentation
```

---

## 🚀 Getting Started

Since this project is built entirely with pure HTML, CSS, and Vanilla JavaScript, there are **no build steps, node_modules, or bundlers required**.

### Option 1: Live Preview with VS Code Live Server
1. Clone the repository:
   ```bash
   git clone https://github.com/prajwalprogrammer/portfolio.git
   cd portfolio
   ```
2. Open the folder in [VS Code](https://code.visualstudio.com/):
   ```bash
   code .
   ```
3. Install the **Live Server** extension (by Ritwick Dey).
4. Right-click `index.html` and select **"Open with Live Server"**.

### Option 2: Run via Local HTTP Server (Python)
```bash
# Python 3
python -m http.server 8000
```
Open [http://localhost:8000](http://localhost:8000) in your web browser.

### Option 3: Double-Click
Simply double-click `index.html` to open it directly in any modern browser.

---

## 🌐 Deployment

This site is statically hosted via **GitHub Pages**.

### Deploy to GitHub Pages:
1. Push your changes to the `main` (or `master`) branch:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   ```
2. In your GitHub repository, navigate to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
4. Select `main` branch and `/ (root)` folder.
5. Click **Save**. Your site will be live at:
   ```text
   https://<username>.github.io/<repository-name>/
   ```

---

## ⚙️ Customization Guide

### Updating Personal Information
- Edit `index.html`:
  - `<title>` and `<meta>` tags for SEO description and author details.
  - Section `#home`: Greeting, role title, summary description, and contact pills.
  - Section `#about`: Bio paragraphs and highlight cards.

### Updating Resume
- Replace `Prajwal_Resume.pdf` with your new resume PDF keeping the exact file name, or update the download link attribute in `index.html`:
  ```html
  <a href="./Prajwal_Resume.pdf" class="button" download>Download CV</a>
  ```

### Adding New Projects
- Add a new `.work__card` element inside the `.work__container` div in `index.html`:
  ```html
  <div class="work__card mix backend">
      <img src="assets/img/your-project.png" alt="Project Name" class="work__img">
      <span class="work__tag">Java • Spring Boot • AWS</span>
      <h3 class="work__title">Your Project Title</h3>
      <p class="work__description">Concise overview of architecture and impact.</p>
      <div class="work__buttons">
          <a href="https://github.com/your-username/repo" target="_blank" class="work__button">
              <i class="uil uil-github"></i> GitHub <i class="uil uil-arrow-right work__button-icon"></i>
          </a>
      </div>
  </div>
  ```
  *Make sure the category class matches one of the filter buttons: `backend`, `web`, `app`, or `system`.*

### Updating Contact Form
- In `index.html`, locate `<form class="contact__form">` and replace the `action` attribute with your own form endpoint (e.g. from [Getform](https://getform.io/), [Formspree](https://formspree.io/), or [Formspark](https://formspark.io/)):
  ```html
  <form action="https://getform.io/f/YOUR-UNIQUE-ENDPOINT" method="post" class="contact__form">
  ```

---

## 📬 Contact & Connect

- **Name**: Prajwal Achwale
- **Role**: Java Backend Developer | Software Engineer
- **Location**: Pune, Maharashtra, India
- **Email**: [prajwalachwale29@gmail.com](mailto:prajwalachwale29@gmail.com)
- **LinkedIn**: [linkedin.com/in/prajwalachwale](https://www.linkedin.com/in/prajwalachwale/)
- **GitHub**: [github.com/prajwalprogrammer](https://github.com/prajwalprogrammer)
- **LeetCode**: [leetcode.com/prajwal_29](https://leetcode.com/prajwal_29/)
- **Portfolio**: [prajwalprogrammer.github.io/portfolio](https://prajwalprogrammer.github.io/portfolio/)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

&#169; 2026 [Prajwal Achwale](https://github.com/prajwalprogrammer). All rights reserved.
