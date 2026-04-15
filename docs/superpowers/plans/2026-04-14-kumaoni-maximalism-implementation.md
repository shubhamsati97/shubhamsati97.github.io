# Kumaoni Maximalism ("The Hidden Heritage") Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the portfolio landing page into a "Hidden Heritage" psychedelic maximalist experience rooted in Kumaoni culture.

**Architecture:** A layered DOM structure where a central "Mandala Engine" sits behind high-impact outlined typography and a symmetrical navigation grid. Motion is driven by CSS Keyframe animations for a "breathing" effect.

**Tech Stack:** HTML5, Vanilla CSS (Gradients, Animations, Glassmorphism), Google Fonts (Noto Sans Devanagari, Prata, Inter).

---

### Task 1: Setup Foundations (Fonts & CSS Variables)

**Files:**
- Modify: `index.html` (Add fonts)
- Modify: `css/style.css` (Update :root variables)

- [ ] **Step 1: Add Google Fonts to index.html**
```html
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@900&family=Prata&family=Inter:wght@300;400;700;900&display=swap" rel="stylesheet">
```

- [ ] **Step 2: Define "Hidden Heritage" CSS Variables**
```css
:root {
    --gerua-deep: #8C2D25;
    --gerua-liquid: #61100b;
    --biswar-white: #FFF8E1;
    --pahadi-gold: #D4AF37;
    --pichora-saffron: #E98923;
    --mandala-opacity: 0.15;
}
```

- [ ] **Step 3: Commit**
```bash
git add index.html css/style.css
git commit -m "feat: setup fonts and color variables for Hidden Heritage theme"
```

---

### Task 2: Implement Background Engine (Liquid & Mandala)

**Files:**
- Modify: `index.html` (Add background layers)
- Modify: `css/style.css` (Add animations)

- [ ] **Step 1: Add background containers to index.html**
```html
<div class="bg-engine">
    <div class="liquid-layer"></div>
    <div class="mandala-container">
        <div class="mandala-layer layer-1"></div>
        <div class="mandala-layer layer-2"></div>
        <div class="mandala-layer layer-3"></div>
        <div class="bindu"></div>
    </div>
    <div class="lion-watermark">🦁</div>
</div>
```

- [ ] **Step 2: Add Liquid Background and Mandala Styles to css/style.css**
```css
.bg-engine {
    position: fixed;
    inset: 0;
    background: var(--gerua-liquid);
    overflow: hidden;
    z-index: -1;
}

.liquid-layer {
    position: absolute;
    width: 150%;
    height: 150%;
    background: radial-gradient(circle at 30% 30%, var(--gerua-deep) 0%, transparent 50%), 
                radial-gradient(circle at 70% 70%, #4a0805 0%, transparent 50%);
    filter: blur(80px);
    opacity: 0.9;
    animation: liquid-flow 25s infinite alternate;
}

@keyframes liquid-flow {
    0% { transform: scale(1); }
    100% { transform: scale(1.1) translate(5%, 5%); }
}

.mandala-container {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.mandala-layer {
    position: absolute;
    border-radius: 50%;
}

.layer-1 {
    width: 1000px;
    height: 1000px;
    border: 1px dashed rgba(255, 248, 225, 0.1);
    animation: rotate-slow 80s linear infinite;
}

.layer-2 {
    width: 800px;
    height: 800px;
    border: 2px solid rgba(212, 175, 55, 0.05);
    animation: rotate-slow 50s linear reverse infinite;
}

.layer-3 {
    width: 400px;
    height: 400px;
    background: repeating-conic-gradient(from 0deg, var(--biswar-white) 0deg 1deg, transparent 1deg 15deg);
    opacity: 0.15;
    animation: pulse 12s ease-in-out infinite;
}

.bindu {
    width: 10px;
    height: 10px;
    background: var(--pahadi-gold);
    border-radius: 50%;
    box-shadow: 0 0 30px var(--pahadi-gold);
}

@keyframes rotate-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes pulse { 0%, 100% { opacity: 0.1; transform: scale(1); } 50% { opacity: 0.2; transform: scale(1.05); } }
```

- [ ] **Step 3: Add Lion Watermark and Borders**
```css
.lion-watermark {
    position: absolute;
    top: 10%;
    right: 5%;
    font-size: 300px;
    opacity: 0.03;
    filter: grayscale(1) invert(1);
    transform: rotate(15deg);
    pointer-events: none;
}

body::before, body::after {
    content: '';
    position: fixed;
    left: 0;
    width: 100%;
    height: 60px;
    background: repeating-linear-gradient(45deg, rgba(255, 248, 225, 0.05) 0px, rgba(255, 248, 225, 0.05) 2px, transparent 2px, transparent 25px);
    z-index: 1000;
}

body::before { top: 0; border-bottom: 1px solid rgba(212, 175, 55, 0.1); }
body::after { bottom: 0; border-top: 1px solid rgba(212, 175, 55, 0.1); }
```

- [ ] **Step 4: Commit**
```bash
git add index.html css/style.css
git commit -m "feat: implement background engine and hidden watermark"
```

---

### Task 3: Implement Hero Section (Hindi Typography)

**Files:**
- Modify: `index.html` (Update header)
- Modify: `css/style.css` (Update header styles)

- [ ] **Step 1: Update Header in index.html**
```html
<header class="hero">
    <h1 class="name-hindi">शुभम सती</h1>
    <div class="subtitle-container">
        <div class="rule"></div>
        <p class="role">Software Engineer</p>
        <div class="rule"></div>
    </div>
</header>
```

- [ ] **Step 2: Add Header Styles to css/style.css**
```css
.hero {
    position: relative;
    z-index: 100;
    padding-top: 15vh;
}

.name-hindi {
    font-family: 'Noto Sans Devanagari', sans-serif;
    font-size: clamp(80px, 15vw, 140px);
    line-height: 1.1;
    margin: 0;
    color: transparent;
    -webkit-text-stroke: 1.5px var(--biswar-white);
    filter: drop-shadow(0 0 15px rgba(255, 248, 225, 0.3));
    letter-spacing: -2px;
}

.subtitle-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    margin-top: 20px;
}

.rule {
    width: 100px;
    height: 1px;
    background: linear-gradient(to right, transparent, var(--pahadi-gold));
}

.rule:last-child {
    background: linear-gradient(to left, transparent, var(--pahadi-gold));
}

.role {
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 12px;
    color: var(--pahadi-gold);
    font-weight: 300;
    opacity: 0.7;
    margin: 0;
}
```

- [ ] **Step 3: Commit**
```bash
git add index.html css/style.css
git commit -m "feat: implement Hindi typography hero section"
```

---

### Task 4: Implement Navigation Grid (Chowkies)

**Files:**
- Modify: `index.html` (Update navigation)
- Modify: `css/style.css` (Update nav styles)

- [ ] **Step 1: Update Navigation in index.html**
```html
<nav class="nav-grid">
    <a href="https://drive.google.com/uc?export=download&id=112fFJXYiUmPWHA_ue9t9rWBJHmk9XwBG" class="chowky-item" target="_blank">
        <div class="chowky-inner">
            <div class="vasudhara">
                <span></span><span></span><span></span>
            </div>
            <span class="label">RESUMÈ</span>
        </div>
    </a>
    <a href="./workspace/workspace.html" class="chowky-item" target="_blank">
        <div class="chowky-inner">
            <div class="star-motif"></div>
            <span class="label">WORKSPACE</span>
        </div>
    </a>
    <a href="/ReadingList/" class="chowky-item" target="_blank">
        <div class="chowky-inner">
            <div class="circular-motif"></div>
            <span class="label">READING LIST</span>
        </div>
    </a>
    <a href="mailto:shubhamsati7991@gmail.com" class="chowky-item">
        <div class="chowky-inner">
            <div class="frame-motif"></div>
            <span class="label">CONTACT</span>
        </div>
    </a>
</nav>
```

- [ ] **Step 2: Add Navigation Styles to css/style.css**
```css
.nav-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    max-width: 400px;
    margin: 60px auto;
    position: relative;
    z-index: 100;
}

.chowky-item {
    text-decoration: none;
    transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.chowky-inner {
    width: 140px;
    height: 140px;
    background: rgba(255, 248, 225, 0.05);
    border: 1px solid rgba(255, 248, 225, 0.2);
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(5px);
}

.chowky-item:nth-child(2) .chowky-inner { background: rgba(212, 175, 55, 0.05); border-color: rgba(212, 175, 55, 0.2); }
.chowky-item:nth-child(3) .chowky-inner { background: rgba(233, 137, 35, 0.05); border-color: rgba(233, 137, 35, 0.2); }

.label {
    font-family: 'Inter', sans-serif;
    font-size: 10px;
    font-weight: 400;
    letter-spacing: 4px;
    color: var(--biswar-white);
    margin-top: 10px;
}

.chowky-item:hover .chowky-inner {
    background: rgba(255, 248, 225, 0.15);
    border-color: var(--biswar-white);
    transform: scale(1.05);
    box-shadow: 0 0 50px rgba(255, 248, 225, 0.2);
}

/* Abstract Aipan Motifs */
.vasudhara { display: flex; gap: 5px; }
.vasudhara span { width: 2px; height: 30px; background: var(--biswar-white); opacity: 0.6; }

.star-motif { width: 30px; height: 30px; border: 1px solid var(--pahadi-gold); transform: rotate(45deg); position: relative; }
.star-motif::after { content: ''; position: absolute; inset: 0; border: 1px solid var(--pahadi-gold); transform: rotate(45deg); }

.circular-motif { width: 30px; height: 30px; border: 1px solid var(--pichora-saffron); border-radius: 50%; position: relative; }
.circular-motif::after { content: ''; position: absolute; inset: 5px; border: 1px dashed var(--pichora-saffron); border-radius: 50%; }

.frame-motif { width: 30px; height: 30px; border: 1px solid var(--biswar-white); position: relative; }
```

- [ ] **Step 3: Commit**
```bash
git add index.html css/style.css
git commit -m "feat: implement navigation grid with Aipan motifs"
```

---

### Task 5: Final Polish (Footer & Responsiveness)

**Files:**
- Modify: `index.html` (Update footer)
- Modify: `css/style.css` (Final styles)

- [ ] **Step 1: Update Footer in index.html**
```html
<footer class="social-links">
    <a href="https://github.com/shubhamsati97" target="_blank">GITHUB</a>
    <a href="https://www.linkedin.com/in/shubhamsati1997/" target="_blank">LINKEDIN</a>
    <a href="https://psnprofiles.com/nerdadhd97" target="_blank">PLAYSTATION</a>
</footer>
```

- [ ] **Step 2: Add Footer Styles and Mobile Fixes**
```css
.social-links {
    position: fixed;
    bottom: 80px;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 30px;
    z-index: 100;
    opacity: 0.5;
}

.social-links a {
    color: var(--biswar-white);
    text-decoration: none;
    font-size: 10px;
    letter-spacing: 2px;
    transition: opacity 0.3s;
}

.social-links a:hover { opacity: 1; }

@media (max-width: 768px) {
    .name-hindi { font-size: 60px; }
    .nav-grid { gap: 20px; }
    .chowky-inner { width: 110px; height: 110px; }
}
```

- [ ] **Step 3: Clean up old styles**
Remove old `.name`, `.line`, `.container`, `.box*`, and other deprecated classes from `style.css`.

- [ ] **Step 4: Commit**
```bash
git add index.html css/style.css
git commit -m "feat: finalize footer and responsiveness, cleanup old styles"
```
