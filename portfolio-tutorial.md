# 🚀 Free Developer Portfolio Website — Complete Tutorial
### For: Rasindu (RCHKaushalya) | Hosted on GitHub Pages, Zero Cost

---

## 📋 Table of Contents

1. [Overview](#1-overview)
2. [What You'll Build](#2-what-youll-build)
3. [Step 1 — Set Up Your Repository](#3-step-1--set-up-your-repository)
4. [Step 2 — Build the Portfolio HTML](#4-step-2--build-the-portfolio-html)
5. [Step 3 — Deploy with GitHub Pages](#5-step-3--deploy-with-github-pages)
6. [Step 4 — Add a Custom Domain (Optional, Free)](#6-step-4--add-a-custom-domain-optional-free)
7. [Step 5 — Keep It Updated](#7-step-5--keep-it-updated)
8. [GitHub Profile Audit & Improvements](#8-github-profile-audit--improvements)
9. [Improved GitHub Profile README](#9-improved-github-profile-readme)

---

## 1. Overview

**Tools Used (all 100% free):**

| Tool | Purpose |
|---|---|
| GitHub Pages | Free static site hosting |
| GitHub.com | Code storage & version control |
| Freenom / js.org | Free custom domain (optional) |
| Google Fonts | Free typography |
| Font Awesome CDN | Free icons |

**Your portfolio URL will be:**
```
https://rchkaushalya.github.io/
```

---

## 2. What You'll Build

A single-page portfolio with:
- Hero section with your name & tagline
- About section
- Skills section
- Projects section (auto-linked to your GitHub repos)
- Contact section

No frameworks, no build tools, no npm — just HTML, CSS, and JavaScript. Works everywhere.

---

## 3. Step 1 — Set Up Your Repository

### 3.1 Create the special repository

Your portfolio will live at a repo named **exactly** after your GitHub username.

1. Go to [github.com/new](https://github.com/new)
2. Set **Repository name** to: `rchkaushalya.github.io`
3. Set visibility to **Public**
4. Check **Add a README file**
5. Click **Create repository**

> ⚠️ The repo name must match your username exactly in lowercase, followed by `.github.io`. This is what activates GitHub Pages for your root URL.

### 3.2 Clone it locally

```bash
git clone https://github.com/RCHKaushalya/rchkaushalya.github.io
cd rchkaushalya.github.io
```

---

## 4. Step 2 — Build the Portfolio HTML

Create a file called `index.html` in the root of your repo with the code below. **Edit every section marked with `<!-- EDIT THIS -->`.**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Rasindu Kaushalya — CS Undergraduate & Systems Developer</title>
  <meta name="description" content="Portfolio of Rasindu Kaushalya — Systems programming, OS development, AI/ML, and compiler design."/>

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Inter:wght@300;400;600&display=swap" rel="stylesheet"/>

  <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>

  <style>
    /* ── Variables ── */
    :root {
      --bg: #0d1117;
      --surface: #161b22;
      --border: #30363d;
      --accent: #58a6ff;
      --accent2: #3fb950;
      --text: #e6edf3;
      --muted: #8b949e;
      --font-mono: 'JetBrains Mono', monospace;
      --font-sans: 'Inter', sans-serif;
    }

    /* ── Reset ── */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      background: var(--bg);
      color: var(--text);
      font-family: var(--font-sans);
      line-height: 1.7;
    }
    a { color: var(--accent); text-decoration: none; }
    a:hover { text-decoration: underline; }

    /* ── Nav ── */
    nav {
      position: fixed; top: 0; width: 100%;
      background: rgba(13,17,23,0.85);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--border);
      z-index: 100;
      display: flex; justify-content: space-between; align-items: center;
      padding: 1rem 2rem;
    }
    .nav-logo { font-family: var(--font-mono); font-weight: 700; color: var(--accent); font-size: 1.1rem; }
    .nav-links { display: flex; gap: 2rem; list-style: none; }
    .nav-links a { color: var(--muted); font-size: 0.9rem; transition: color 0.2s; }
    .nav-links a:hover { color: var(--text); text-decoration: none; }

    /* ── Sections ── */
    section { padding: 6rem 2rem; max-width: 900px; margin: 0 auto; }

    /* ── Hero ── */
    #hero {
      min-height: 100vh;
      display: flex; flex-direction: column; justify-content: center;
      padding-top: 5rem;
    }
    .hero-tag {
      font-family: var(--font-mono);
      color: var(--accent2);
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }
    .hero-name {
      font-size: clamp(2.5rem, 7vw, 5rem);
      font-weight: 600;
      line-height: 1.1;
      letter-spacing: -0.02em;
    }
    .hero-sub {
      font-family: var(--font-mono);
      color: var(--muted);
      font-size: clamp(1rem, 2.5vw, 1.2rem);
      margin: 1.2rem 0 2.5rem;
    }
    .hero-sub span { color: var(--accent); }
    .btn {
      display: inline-flex; align-items: center; gap: 0.5rem;
      background: var(--accent); color: #0d1117;
      padding: 0.75rem 1.5rem; border-radius: 6px;
      font-weight: 600; font-size: 0.95rem;
      transition: opacity 0.2s;
    }
    .btn:hover { opacity: 0.85; text-decoration: none; }
    .btn-ghost {
      background: transparent; color: var(--accent);
      border: 1px solid var(--accent);
      margin-left: 1rem;
    }
    .btn-ghost:hover { background: rgba(88,166,255,0.1); }

    /* ── About ── */
    .section-title {
      font-family: var(--font-mono);
      font-size: 0.85rem;
      color: var(--accent2);
      text-transform: uppercase;
      letter-spacing: 0.15em;
      margin-bottom: 0.5rem;
    }
    .section-heading {
      font-size: 1.8rem; font-weight: 600;
      margin-bottom: 1.5rem;
    }
    .about-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 3rem; align-items: start; }
    .about-text p { color: var(--muted); margin-bottom: 1rem; }
    .about-text p strong { color: var(--text); }
    .about-info { font-family: var(--font-mono); font-size: 0.85rem; }
    .about-info div { margin-bottom: 0.8rem; }
    .about-info .label { color: var(--muted); }
    .about-info .val { color: var(--accent); }

    /* ── Skills ── */
    .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.2rem; }
    .skill-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 1.5rem;
      transition: border-color 0.2s;
    }
    .skill-card:hover { border-color: var(--accent); }
    .skill-card h3 { font-family: var(--font-mono); font-size: 0.9rem; color: var(--accent); margin-bottom: 0.8rem; }
    .skill-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; }
    .tag {
      background: rgba(88,166,255,0.1);
      color: var(--accent);
      padding: 0.2rem 0.6rem;
      border-radius: 4px;
      font-size: 0.8rem;
      font-family: var(--font-mono);
    }

    /* ── Projects ── */
    .projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.2rem; }
    .project-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 1.5rem;
      display: flex; flex-direction: column;
      transition: border-color 0.2s, transform 0.2s;
    }
    .project-card:hover { border-color: var(--accent); transform: translateY(-3px); }
    .project-card h3 { font-family: var(--font-mono); font-size: 1rem; margin-bottom: 0.5rem; }
    .project-card p { color: var(--muted); font-size: 0.9rem; flex: 1; margin-bottom: 1rem; }
    .project-meta { display: flex; align-items: center; justify-content: space-between; }
    .project-lang {
      display: flex; align-items: center; gap: 0.4rem;
      font-size: 0.8rem; color: var(--muted); font-family: var(--font-mono);
    }
    .lang-dot { width: 10px; height: 10px; border-radius: 50%; background: var(--accent2); }
    .lang-dot.rust { background: #dea584; }
    .lang-dot.c { background: #555555; }
    .lang-dot.python { background: #3572A5; }
    .lang-dot.asm { background: #6E4C13; }
    .project-link { font-size: 0.8rem; font-family: var(--font-mono); }

    /* ── Contact ── */
    .contact-wrapper {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 3rem;
      text-align: center;
    }
    .contact-wrapper p { color: var(--muted); max-width: 500px; margin: 0.8rem auto 2rem; }
    .social-links { display: flex; justify-content: center; gap: 1.5rem; margin-top: 2rem; flex-wrap: wrap; }
    .social-links a {
      display: flex; align-items: center; gap: 0.5rem;
      color: var(--muted); font-size: 0.9rem;
      border: 1px solid var(--border);
      padding: 0.6rem 1.2rem; border-radius: 6px;
      transition: color 0.2s, border-color 0.2s;
    }
    .social-links a:hover { color: var(--accent); border-color: var(--accent); text-decoration: none; }

    /* ── Footer ── */
    footer {
      text-align: center;
      padding: 2rem;
      border-top: 1px solid var(--border);
      color: var(--muted);
      font-size: 0.85rem;
      font-family: var(--font-mono);
    }

    /* ── Responsive ── */
    @media (max-width: 600px) {
      .about-grid { grid-template-columns: 1fr; }
      nav { padding: 1rem; }
      .nav-links { gap: 1rem; }
    }
  </style>
</head>
<body>

<!-- ── Navigation ── -->
<nav>
  <span class="nav-logo">rchkaushalya<span style="color:var(--accent2)">_</span></span>
  <ul class="nav-links">
    <li><a href="#about">About</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>

<!-- ── Hero ── -->
<section id="hero">
  <p class="hero-tag">// Hello, World!</p>
  <!-- EDIT THIS: Your name -->
  <h1 class="hero-name">Rasindu<br>Kaushalya</h1>
  <!-- EDIT THIS: Your tagline -->
  <p class="hero-sub">Systems Programmer · OS Developer · <span>AI/ML Enthusiast</span></p>
  <div>
    <a href="#projects" class="btn"><i class="fa fa-code"></i> View My Work</a>
    <a href="#contact" class="btn btn-ghost"><i class="fa fa-envelope"></i> Get In Touch</a>
  </div>
</section>

<!-- ── About ── -->
<section id="about">
  <p class="section-title">// About Me</p>
  <h2 class="section-heading">Who I Am</h2>
  <div class="about-grid">
    <div class="about-text">
      <!-- EDIT THIS: Your bio -->
      <p>
        I'm a <strong>final-year Computer Science undergraduate</strong> at Trincomalee Campus, University of Trincomalee,
        with a deep passion for low-level systems programming and high-level AI/ML applications.
      </p>
      <p>
        I'm currently exploring research at the intersection of <strong>operating systems, compilers, and artificial intelligence</strong>.
        My long-term goal is to build a domain-specific programming language and an AI-powered shell
        designed for productivity-driven developer environments.
      </p>
      <p>
        When I'm not writing C or Rust, I'm documenting my journey through system programming,
        reading about compiler design, or experimenting with OS bootloaders from scratch.
      </p>
    </div>
    <div class="about-info">
      <!-- EDIT THIS: Your details -->
      <div><span class="label">University  </span><span class="val">Trincomalee Campus</span></div>
      <div><span class="label">Degree      </span><span class="val">BSc Computer Science</span></div>
      <div><span class="label">Year        </span><span class="val">Final Year</span></div>
      <div><span class="label">Location    </span><span class="val">Sri Lanka 🇱🇰</span></div>
      <div><span class="label">Focus       </span><span class="val">Systems / OS / AI</span></div>
      <div><span class="label">Status      </span><span class="val" style="color:var(--accent2)">Open to Opportunities</span></div>
    </div>
  </div>
</section>

<!-- ── Skills ── -->
<section id="skills">
  <p class="section-title">// Skills</p>
  <h2 class="section-heading">My Tech Toolbox</h2>
  <div class="skills-grid">
    <div class="skill-card">
      <h3><i class="fa fa-microchip"></i> Systems Programming</h3>
      <div class="skill-tags">
        <span class="tag">C</span>
        <span class="tag">C++</span>
        <span class="tag">Rust</span>
        <span class="tag">Assembly</span>
      </div>
    </div>
    <div class="skill-card">
      <h3><i class="fa fa-brain"></i> AI / ML</h3>
      <div class="skill-tags">
        <span class="tag">Python</span>
        <span class="tag">NumPy</span>
        <span class="tag">ML Concepts</span>
      </div>
    </div>
    <div class="skill-card">
      <h3><i class="fa fa-desktop"></i> Desktop / GUI</h3>
      <div class="skill-tags">
        <span class="tag">Kivy</span>
        <span class="tag">Python</span>
        <span class="tag">JavaScript</span>
      </div>
    </div>
    <div class="skill-card">
      <h3><i class="fa fa-server"></i> OS & Low Level</h3>
      <div class="skill-tags">
        <span class="tag">Bootloader</span>
        <span class="tag">Kernel Dev</span>
        <span class="tag">Shell Design</span>
        <span class="tag">Memory Alloc</span>
      </div>
    </div>
    <div class="skill-card">
      <h3><i class="fa fa-tools"></i> Dev Tools</h3>
      <div class="skill-tags">
        <span class="tag">Git</span>
        <span class="tag">Linux</span>
        <span class="tag">VS Code</span>
        <span class="tag">GDB</span>
      </div>
    </div>
    <!-- EDIT THIS: Add more skill cards as needed -->
  </div>
</section>

<!-- ── Projects ── -->
<section id="projects">
  <p class="section-title">// Projects</p>
  <h2 class="section-heading">Things I've Built</h2>
  <div class="projects-grid">

    <!-- EDIT THIS: Replace with your real projects from GitHub -->
    <div class="project-card">
      <h3>🦀 todo-rust</h3>
      <p>A command-line to-do list app built in Rust — my introduction to ownership, traits, and Cargo.</p>
      <div class="project-meta">
        <span class="project-lang"><span class="lang-dot rust"></span> Rust</span>
        <a href="https://github.com/RCHKaushalya/todo-rust" class="project-link" target="_blank">View on GitHub →</a>
      </div>
    </div>

    <div class="project-card">
      <h3>🧠 pocket-allocator</h3>
      <p>A minimal custom memory allocator written in Rust — exploring heap management from scratch.</p>
      <div class="project-meta">
        <span class="project-lang"><span class="lang-dot rust"></span> Rust</span>
        <a href="https://github.com/RCHKaushalya/pocket-allocator" class="project-link" target="_blank">View on GitHub →</a>
      </div>
    </div>

    <div class="project-card">
      <h3>🐚 mini-shell</h3>
      <p>A mini Unix shell written in C with command parsing, process forking, and basic piping support.</p>
      <div class="project-meta">
        <span class="project-lang"><span class="lang-dot c"></span> C</span>
        <a href="https://github.com/RCHKaushalya/mini-shell" class="project-link" target="_blank">View on GitHub →</a>
      </div>
    </div>

    <div class="project-card">
      <h3>⚙️ os-bootloader</h3>
      <p>First project in my OS development roadmap — a bootloader written in x86 Assembly that boots into protected mode.</p>
      <div class="project-meta">
        <span class="project-lang"><span class="lang-dot asm"></span> Assembly</span>
        <a href="https://github.com/RCHKaushalya/os-bootloader" class="project-link" target="_blank">View on GitHub →</a>
      </div>
    </div>

    <div class="project-card">
      <h3>🖥️ os-kernel</h3>
      <p>Second step of the OS roadmap — a minimal kernel with basic interrupt handling and memory layout setup.</p>
      <div class="project-meta">
        <span class="project-lang"><span class="lang-dot c"></span> C / Makefile</span>
        <a href="https://github.com/RCHKaushalya/os-kernel" class="project-link" target="_blank">View on GitHub →</a>
      </div>
    </div>

    <div class="project-card">
      <h3>🖼️ Desktop Apps with Kivy</h3>
      <p>A collection of GUI applications built with Kivy — exploring Python-based desktop development.</p>
      <div class="project-meta">
        <span class="project-lang"><span class="lang-dot python"></span> Python / Kivy</span>
        <a href="https://github.com/RCHKaushalya/Desktop-Apps-with-Kivy" class="project-link" target="_blank">View on GitHub →</a>
      </div>
    </div>

  </div>
</section>

<!-- ── Contact ── -->
<section id="contact">
  <div class="contact-wrapper">
    <p class="section-title">// Contact</p>
    <h2 class="section-heading">Let's Build Something</h2>
    <!-- EDIT THIS: Your message -->
    <p>
      I'm always open to interesting collaborations, research discussions,
      or just talking about OS internals and compilers. Drop me a message.
    </p>
    <!-- EDIT THIS: Your email -->
    <a href="mailto:rchkaushalya@gmail.com" class="btn">
      <i class="fa fa-envelope"></i> rchkaushalya@gmail.com
    </a>
    <div class="social-links">
      <a href="https://github.com/RCHKaushalya" target="_blank"><i class="fa-brands fa-github"></i> GitHub</a>
      <!-- EDIT THIS: Add LinkedIn, Twitter etc. if you have them -->
      <!-- <a href="https://linkedin.com/in/yourprofile" target="_blank"><i class="fa-brands fa-linkedin"></i> LinkedIn</a> -->
    </div>
  </div>
</section>

<!-- ── Footer ── -->
<footer>
  <!-- EDIT THIS: Your name -->
  <p>Built by Rasindu Kaushalya · Hosted on GitHub Pages · <span id="year"></span></p>
</footer>

<script>
  document.getElementById('year').textContent = new Date().getFullYear();
</script>
</body>
</html>
```

Save this as `index.html` in your repo root.

---

## 5. Step 3 — Deploy with GitHub Pages

### 5.1 Push your code

```bash
git add index.html
git commit -m "Add portfolio website"
git push origin main
```

### 5.2 Enable GitHub Pages

1. Go to your repo on GitHub: `github.com/RCHKaushalya/rchkaushalya.github.io`
2. Click **Settings** (top menu)
3. In the left sidebar, click **Pages**
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

### 5.3 Wait ~2 minutes, then visit:

```
https://rchkaushalya.github.io
```

> ✅ GitHub Pages automatically deploys every time you push to `main`. Just push and it updates.

---

## 6. Step 4 — Add a Custom Domain (Optional, Free)

### Option A: Free `.js.org` subdomain (for developers)

1. Go to [js.org](https://js.org) and follow their [instructions](https://github.com/js-org/js.org)
2. You can get `rchkaushalya.js.org` for free via a pull request
3. Add a `CNAME` file to your repo root with:
   ```
   rchkaushalya.js.org
   ```

### Option B: Free domain from Freenom (`.tk`, `.ml`, etc.)

1. Go to [freenom.com](https://freenom.com) and search for a free domain
2. Point it to GitHub's servers by adding these DNS records:
   ```
   A    185.199.108.153
   A    185.199.109.153
   A    185.199.110.153
   A    185.199.111.153
   ```
3. Add a `CNAME` file to your repo root with your new domain name
4. In GitHub Pages Settings, enter your custom domain

---

## 7. Step 5 — Keep It Updated

Every time you finish a new project:

1. Open `index.html`
2. Add a new `<div class="project-card">` block in the projects section
3. Run:
   ```bash
   git add index.html
   git commit -m "Add new project: <project-name>"
   git push
   ```

Your site updates automatically within seconds.

---

## 8. GitHub Profile Audit & Improvements

Here's a full audit of your GitHub profile and what to improve:

### ✅ What's Good
- You have a profile README — most developers don't. Good start.
- Clear focus area (systems + AI/ML) is well communicated.
- 33 repos shows real activity.
- Good variety of languages (Rust, C, Python, Assembly).
- Popular repos are pinned and relevant.

---

### ❌ What Needs Fixing

| Issue | Fix |
|---|---|
| **No profile picture** (using default avatar) | Add a real photo — this is the #1 trust signal on GitHub |
| **No bio** (below username) | Add a 1-line bio in Settings → Profile |
| **No location set** | Add "Sri Lanka" in profile settings |
| **Email not shown publicly** | Enable "Show email" in settings if comfortable |
| **No website/portfolio link** | Once built, add your GitHub Pages URL to your profile |
| **Most repos have no description** | Add a short description to every public repo |
| **`pocket-allocator` has no README** | Projects without READMEs look abandoned |
| **`os-kernel` has no README** | Same — critical for systems projects |
| **No topics/tags on repos** | Add topics like `rust`, `systems-programming`, `os-dev` to each repo |
| **Profile README email uses `< >` angle brackets** | Use a proper markdown link: `[rchkaushalya@gmail.com](mailto:...)` |
| **No LinkedIn/social links in README** | Even a placeholder helps recruiters find you |
| **Contribution graph has gaps** | Try to commit something every few days — even docs count |

### 🔧 Quick Wins (Do These Today)

1. **Add a profile photo** — Settings → Profile → Change profile picture
2. **Fill in your bio** — Settings → Profile → Bio: `CS undergrad | Systems Programming | OS Dev | Rust & C`
3. **Add location** — Settings → Profile → Location: `Sri Lanka`
4. **Add your portfolio link** — Settings → Profile → Website (after Step 3 above)
5. **Add descriptions** to your top 6 pinned repos — click the pencil icon on each repo

---

## 9. Improved GitHub Profile README

Replace your current `RCHKaushalya/RCHKaushalya/README.md` with this:

```markdown
<h1 align="center">
  Hey, I'm Rasindu 👋
</h1>

<p align="center">
  <strong>CS Undergraduate · Systems Programmer · OS & Compiler Enthusiast</strong><br/>
  Trincomalee Campus, University of Trincomalee 🇱🇰
</p>

<p align="center">
  <a href="mailto:rchkaushalya@gmail.com">
    <img src="https://img.shields.io/badge/Email-rchkaushalya@gmail.com-blue?style=flat-square&logo=gmail"/>
  </a>
  <a href="https://rchkaushalya.github.io">
    <img src="https://img.shields.io/badge/Portfolio-rchkaushalya.github.io-green?style=flat-square&logo=github"/>
  </a>
</p>

---

## About Me

I'm a final-year Computer Science undergraduate with a deep interest in **low-level systems programming** and **AI/ML research**. I build things close to the metal — bootloaders, custom memory allocators, shells — while also exploring how AI can be layered on top of these systems.

**Long-term goal:** Build a domain-specific programming language and an AI-powered shell for developer productivity environments.

---

## 🧰 Tech Stack

**Systems & Low Level**
`C` · `C++` · `Rust` · `x86 Assembly` · `Makefile`

**AI / ML & Scripting**
`Python` · `JavaScript` · `NumPy`

**GUI & Desktop**
`Kivy` · `Python`

**Tools**
`Git` · `Linux` · `VS Code` · `GDB`

---

## 🚀 Featured Projects

| Project | Description | Language |
|---|---|---|
| [todo-rust](https://github.com/RCHKaushalya/todo-rust) | CLI to-do app — learning Rust ownership & traits | Rust |
| [pocket-allocator](https://github.com/RCHKaushalya/pocket-allocator) | Custom memory allocator from scratch | Rust |
| [mini-shell](https://github.com/RCHKaushalya/mini-shell) | Unix-like mini shell with process forking | C |
| [os-bootloader](https://github.com/RCHKaushalya/os-bootloader) | x86 bootloader into protected mode | Assembly |
| [os-kernel](https://github.com/RCHKaushalya/os-kernel) | Minimal kernel — interrupts & memory layout | C / Makefile |
| [Desktop-Apps-with-Kivy](https://github.com/RCHKaushalya/Desktop-Apps-with-Kivy) | GUI app collection with Python & Kivy | Python |

---

## 📈 GitHub Stats

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=RCHKaushalya&show_icons=true&theme=github_dark&hide_border=true" height="160"/>
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=RCHKaushalya&layout=compact&theme=github_dark&hide_border=true" height="160"/>
</p>

---

## 🌱 Currently Working On

- 🚀 Intelligent OS shell (AI-powered command suggestions)
- 🧪 Prototyping domain-specific language features for AI/ML workflows
- 📚 Documenting my systems programming & compiler design journey

---

> *"Code is poetry. The OS is the orchestra. AI is the symphony."*

<p align="center">
  <img src="https://komarev.com/ghpvc/?username=RCHKaushalya&color=58a6ff&style=flat-square" alt="Profile views"/>
</p>
```

---

## ✅ Final Checklist

- [ ] Created `rchkaushalya.github.io` repo
- [ ] Added `index.html` with your details filled in
- [ ] Pushed to GitHub
- [ ] Enabled GitHub Pages in Settings
- [ ] Visited `https://rchkaushalya.github.io` and confirmed it works
- [ ] Added portfolio URL to GitHub profile
- [ ] Added profile photo
- [ ] Filled in bio, location in GitHub settings
- [ ] Replaced profile README with improved version
- [ ] Added descriptions to all pinned repos
- [ ] Added topics/tags to repos

---

*Tutorial written for Rasindu Kaushalya (RCHKaushalya). Free hosting via GitHub Pages — no credit card, no expiry.*
