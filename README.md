# Anas Mahmud — Personal Portfolio Website

A minimal, modern, professional, and creative personal portfolio website for **Anas Mahmud** — an aspiring video editor, graphic designer, and digital marketing learner from Dhaka, Bangladesh.

---

## 🚀 Overview

- **Website Owner**: Anas Mahmud
- **Location**: Dhaka, Bangladesh
- **Status**: Student at **As-Sunnah Skill Development Institute** (Course: *SBMC — Small Business Management Course*)
- **Theme**: Black-based dark theme with vibrant purple accents + instant Light Mode toggle
- **Language**: 100% English
- **Tech Stack**: React 19, TypeScript, Tailwind CSS v4, Lucide Icons, Vite

---

## 📂 Project Structure

```
.
├── index.html                  # SEO metadata, Open Graph, Schema.org Person data
├── metadata.json               # Platform applet configuration
├── package.json                # Dependencies and npm build scripts
├── public/
│   ├── robots.txt              # Search engine crawling rules
│   └── sitemap.xml             # Website XML sitemap structure
├── src/
│   ├── App.tsx                 # Main application shell with theme context & modals
│   ├── main.tsx                # React entry point
│   ├── index.css               # Global styles & Tailwind imports
│   ├── data/
│   │   └── portfolioData.ts    # ✏️ MAIN FILE FOR ALL CONTENT UPDATES
│   └── components/
│       ├── Navbar.tsx          # Responsive navigation & Light/Dark theme toggle
│       ├── Hero.tsx            # Hero section with profile photo & main headline
│       ├── About.tsx           # About bio, location & student info card
│       ├── Skills.tsx          # Categorized skills with beginner/learning badges
│       ├── Services.tsx        # 8 core creative services & disclaimer
│       ├── Experience.tsx      # SBMC learning experience & curriculum areas
│       ├── Contact.tsx         # Contact form with validation & spam protection
│       ├── Footer.tsx          # Copyright, policy links & placeholder social icons
│       ├── PrivacyPolicyModal.tsx # Privacy policy modal
│       └── TermsModal.tsx      # Terms and conditions modal
└── README.md                   # This setup and maintenance guide
```

---

## 🛠️ Files a Beginner Can Easily Edit

1. **`src/data/portfolioData.ts`**:
   - Update your name, location, course name, institute, and headline text.
   - Change your profile image URL (`profileImage`).
   - Modify skill levels (`Beginner`, `Learning`, `Developing`).
   - Customize service descriptions.
   - Update social media links when available.

2. **`index.html`**:
   - Update page `<title>` and `<meta name="description">` if needed.

3. **`src/components/Contact.tsx`**:
   - Update form handling or replace the email placeholder `YOUR_EMAIL@example.com` in `portfolioData.ts`.

---

## 💻 Local Development Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run local development server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:3000`.

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Lint and typecheck**:
   ```bash
   npm run lint
   ```

---

## 🔥 Firebase Deployment Guide

This project is fully ready to deploy to **Firebase Hosting**.

### Step 1: Install Firebase CLI
```bash
npm install -g firebase-tools
```

### Step 2: Log in to Firebase
```bash
firebase login
```

### Step 3: Initialize Firebase in the Project Root
```bash
firebase init
```
- Select **Hosting: Configure files for Firebase Hosting**.
- Choose your Firebase Project.
- Specify `dist` as your public directory.
- Configure as a single-page app (SPA): **Yes** (`y`).
- Set up automatic builds and deploys with GitHub: Optional (`y` or `n`).

### Step 4: Build & Deploy
```bash
npm run build
firebase deploy --only hosting
```

---

## 🔐 Environment Variables & Optional Firebase Firestore Setup

To connect the contact form to **Firebase Firestore** or **EmailJS** in the future:

1. Create a `.env` file in the root directory (refer to `.env.example`):
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

No secrets or private credentials are exposed in the frontend code.

---

## 📝 Remaining Information Placeholders

When you are ready to update your real email address or social links:

- **Email Address**: Replace `YOUR_EMAIL@example.com` in `src/data/portfolioData.ts`.
- **Social Media Links**: Update YouTube, Facebook, Instagram, and LinkedIn links in `src/data/portfolioData.ts`.

---

## 📄 License & Attribution

Created for **Anas Mahmud**. All rights reserved.
