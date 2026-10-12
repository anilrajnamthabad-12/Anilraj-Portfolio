# 🚀 Anil Raj - Developer Portfolio Website

A modern, high-performance, responsive personal portfolio website engineered for **Anil Raj**, a graduate fresher aspiring for **Python Full Stack Developer** and **Python / SQL Developer** positions. 

Designed with a sleek **dark navy** glassmorphism aesthetic, accessible semantic layout, mobile-first responsiveness, and pre-configured for automated **GitHub Pages** deployment via GitHub Actions.

---

## 🌟 Key Features

- **Recruiter-Focused Architecture:** Clear visual hierarchy highlighting core strengths (Python OOP, SQL, Relational Schema Design, Generative AI) and immediate availability.
- **Glassmorphic Dark Navy UI/UX:** Built with a sophisticated color palette (`#0a0f1d`, indigo `#6366f1`, purple `#8b5cf6`, and cyan `#06b6d4`).
- **100% Vanilla Web Performance:** Zero external heavy framework bundles (React/Vue/Bootstrap) – loads instantly in under 1 second with a high Lighthouse score.
- **Responsive Navigation:** Smooth mobile drawer navigation, hamburger toggle, and desktop links with automatic section scroll highlighting (ScrollSpy).
- **Comprehensive Project Showcase:** Detailed project cards for:
  1. *ATM System using Python OOP*
  2. *SQL Database Management & Query Practice*
  3. *Generative AI Chatbot (Streamlit & Gemini)*
  4. *Personal Portfolio Website (CI/CD)*
- **Verified Logistics Internship Section:** Dedicated experience card detailing tasks, SQL queries, and learnings from **Yuva Logistics**.
- **Interactive Contact Features:**
  - One-click copy email button with feedback tooltip.
  - Direct mail client link.
  - Interactive contact form with client-side input validation and `mailto:` action fallback.
- **Accessibility & Motion First:** Full keyboard navigation support (`:focus-visible`), WCAG AA compliant contrast ratios, ARIA attributes, and automatic respect for the user's `prefers-reduced-motion` settings.
- **Automated CI/CD Pipeline:** Includes a production-ready GitHub Actions workflow (`.github/workflows/pages.yml`) for seamless deployment.

---

## 🛠️ Technologies Used

| Technology | Purpose |
| :--- | :--- |
| **HTML5** | Semantic structure, SEO metadata, Open Graph social cards, accessibility |
| **CSS3** | CSS custom properties (variables), Flexbox, CSS Grid, media queries, animations |
| **JavaScript (ES6+)** | Mobile menu state, scroll spy, client-side form validation, clipboard API |
| **Google Fonts** | `Inter` (primary typography) & `JetBrains Mono` (code/tech badges) |
| **GitHub Actions** | Automated CI/CD build and artifact deployment to GitHub Pages |
| **GitHub Pages** | Fast, free global static web hosting with SSL certificate |

---

## 📂 Folder Structure

```text
my-portfolio/
├── index.html                   # Main semantic website structure & content
├── style.css                    # Responsive stylesheet & dark navy theme
├── script.js                    # Mobile menu, scrollspy, validation, copy script
├── README.md                    # Project documentation & deployment guide
├── .gitignore                   # Ignores OS, IDE, and temporary files
├── assets/
│   ├── images/
│   │   └── profile-placeholder.svg  # Professional vector developer placeholder
│   ├── icons/                   # Directory for custom icons / SVGs
│   └── Anil_Resume.pdf          # Resume PDF file for direct download
└── .github/
    └── workflows/
        └── pages.yml            # Automated GitHub Pages CI/CD workflow
```

---

## 💻 Running the Project Locally

No complex dependencies, `npm install`, or backend servers are required to preview the site.

### Method 1: Double-Click (Direct Browser Open)
Simply double-click the `index.html` file or drag it into any modern web browser (Google Chrome, Firefox, Microsoft Edge, Safari).

### Method 2: VS Code Live Server (Recommended)
1. Open **Visual Studio Code**.
2. Open the `my-portfolio` folder (**File** → **Open Folder...**).
3. Install the **Live Server** extension by *Ritwick Dey* (ID: `ritwickdey.liveserver`) from the Extensions marketplace (`Ctrl+Shift+X`).
4. Right-click `index.html` and select **"Open with Live Server"** (or click **"Go Live"** in the bottom status bar).
5. The site will automatically launch at `http://127.0.0.1:5500/index.html` with instant live reload on every file save.

### Method 3: Python Built-In HTTP Server
If Python is installed on your machine:
```bash
# Navigate to the project root folder
cd my-portfolio

# Launch Python's lightweight web server
python -m http.server 8000
```
Open your browser and navigate to `http://localhost:8000`.

---

## ✏️ Customization Guide

All placeholders in `index.html` are clearly marked with brackets like `[YOUR-...]`. Use VS Code's global search (`Ctrl+Shift+F`) to find and replace the following:

### 1. Contact Information & Social Links
| Search For | Replace With | Location |
| :--- | :--- | :--- |
| `[YOUR-GITHUB-USERNAME]` | Your actual GitHub username (e.g., `anilraj-dev`) | `index.html` |
| `[YOUR-LINKEDIN-USERNAME]` | Your LinkedIn public profile handle | `index.html` |
| `[YOUR-PROFESSIONAL-EMAIL@EXAMPLE.COM]` | Your active professional email address | `index.html` |
| `[City, State, India]` | Your current city and state | `index.html` |

### 2. Education & Internship Details
- **Education Section (`#education`):** Update `[Your Degree & Branch]` (e.g., *B.Tech in Computer Science and Engineering*), `[Your College / University Name]`, and graduation year.
- **Internship Section (`#experience`):** Update the exact role title (e.g., *Data Operations Intern*) and exact dates worked at **Yuva Logistics** (e.g., *June 2024 – August 2024*).
- **Certifications (`#certifications`):** Replace placeholder certification names, issuing organizations, and credential links with your verified credentials.

### 3. Adding Your Real Resume PDF
1. Export your official, reviewed resume as a PDF file.
2. Name the file exactly:
   ```text
   Anil_Resume.pdf
   ```
3. Copy or move this file into the `assets/` directory:
   ```text
   my-portfolio/assets/Anil_Resume.pdf
   ```
4. By keeping the exact filename `Anil_Resume.pdf`, all download buttons across the navigation bar and hero section will work automatically.

### 4. Adding Your Real Profile Photo (Optional)
If you wish to display your real photograph instead of the vector SVG:
1. Save your professional headshot image (e.g., `anil-photo.jpg` or `anil-photo.png`) inside `assets/images/`.
2. Open `index.html` and update the `src` attribute of the avatar image:
   ```html
   <!-- Change this: -->
   <img src="assets/images/profile-placeholder.svg" ... />

   <!-- To this: -->
   <img src="assets/images/anil-photo.jpg" ... />
   ```

---

## 🚢 Git Setup & GitHub Upload Instructions

Follow these exact terminal commands to push your project to a new GitHub repository:

### Step 1: Create a New GitHub Repository
1. Log in to [GitHub](https://github.com).
2. Click the **`+`** icon in the top-right corner and select **New repository**.
3. Repository name: `portfolio` (or `anil-raj-portfolio`).
4. Set visibility to **Public** (required for free GitHub Pages).
5. **Do NOT** initialize with a README, `.gitignore`, or license (as we already have complete files ready locally).
6. Click **Create repository**.
7. Copy your repository's HTTPS URL:
   ```text
   https://github.com/<YOUR-USERNAME>/<YOUR-REPOSITORY-NAME>.git
   ```

### Step 2: Initialize Git & Push from Terminal / PowerShell
Open your terminal (or PowerShell in Windows) inside the `my-portfolio` folder and run:

```bash
# 1. Initialize local Git repository
git init

# 2. Stage all project files
git add .

# 3. Create initial commit
git commit -m "Initial portfolio website for Anil Raj"

# 4. Set the default branch to main
git branch -M main

# 5. Connect your local repository to your remote GitHub repository
# (Replace with your actual copied GitHub repository URL)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY-NAME.git

# 6. Push your code to GitHub
git push -u origin main
```

---

## 🌐 Deploying to GitHub Pages

You have **two deployment options**. Both are 100% free and support static websites.

### Option A: Automated GitHub Actions Deployment (Recommended)
Because this repository includes `.github/workflows/pages.yml`, GitHub can build and deploy automatically on every push:

1. In your GitHub repository, click on **Settings** (tab at the top).
2. In the left sidebar, click on **Pages** (under the "Code and automation" section).
3. Under **Build and deployment** → **Source**, change the dropdown from **Deploy from a branch** to:
   ```text
   GitHub Actions
   ```
4. Save the setting.
5. Click on the **Actions** tab at the top of your repository to view the running workflow.
6. Once the green checkmark appears (typically ~30–45 seconds), your website is live!

---

### Option B: Deploy Directly from Branch
If you prefer not using GitHub Actions:

1. Go to your repository **Settings** → **Pages**.
2. Under **Build and deployment** → **Source**, ensure **Deploy from a branch** is selected.
3. Under **Branch**:
   - Select **`main`**.
   - Select folder: **`/ (root)`**.
4. Click **Save**.
5. Wait 1–2 minutes for GitHub to publish the static files.

---

### 🔗 Expected Deployment URL Format

Your live website will be accessible globally at:
```text
https://<YOUR-GITHUB-USERNAME>.github.io/<YOUR-REPOSITORY-NAME>/
```

*(For example: `https://anilraj.github.io/portfolio/`)*

> [!NOTE]
> **Important Note for Static Hosting:**
> GitHub Pages hosts static client-side websites (HTML, CSS, JavaScript). It cannot execute live Python code directly in the browser (such as running a native Python interpreter or direct local MySQL server). For Python projects (like the *Generative AI Chatbot* or *ATM CLI*), you can host live demos for free on platforms like **Streamlit Community Cloud** or **Render**, and link them directly to the cards in the portfolio.

---

## 🔍 Troubleshooting & Quality Checklist

| Issue | Cause | Solution |
| :--- | :--- | :--- |
| **CSS or images not loading on GitHub Pages** | Absolute URLs instead of relative paths | Ensure all asset paths are relative (e.g. `style.css` and `assets/...`, not `/style.css`). All paths in this project are already pre-configured relatively! |
| **Resume download returns 404** | Filename mismatch or file not in `assets/` | Verify that your PDF file is placed in `assets/Anil_Resume.pdf` with the exact capitalization. |
| **GitHub Actions workflow fails** | Workflow permissions disabled | Go to **Settings** → **Actions** → **General** → **Workflow permissions**, and select **"Read and write permissions"**. |
| **Site changes not appearing after git push** | Browser caching | Hard refresh the browser using `Ctrl + F5` (Windows) or `Cmd + Shift + R` (Mac). |

---

## 📄 License & Attribution

This portfolio is developed for **Anil Raj**. Feel free to use the layout and structure as a template for personal professional portfolios.
