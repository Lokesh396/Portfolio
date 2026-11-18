# ⚡ DevPortfolio – React & Tailwind Developer Portfolio

A clean, fast, and fully customizable developer portfolio built using **React** and **Tailwind CSS** — designed to showcase your skills, experience, and projects professionally.

> 🔗 **Live Preview**: [https://lokesh396.github.io/Portfolio/](https://lokesh396.github.io/Portfolio/)

---

## ✨ Features

- 🚀 Built with **React** + **Tailwind CSS**
- 🎯 Fully **responsive** and **mobile-friendly**
- ⚡ **Fast performance** and optimized build with Vite
- 📄 Resume-style layout with **About**, **Skills**, **Experience**, **Projects**, **Certifications** and **Contact**
- 🧩 Just update a data file — no backend needed
- 🆓 **MIT licensed**, open to use and modify

---

## 📸 Preview

![Portfolio Preview](public/portfolio.png)

---

## 🛠️ Tech Stack

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [ReactIcons](https://react-icons.github.io/react-icons/)

---

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Lokesh396/Portfolio.git
cd Portfolio
npm install
npm run dev
```

##### Update the data.js file inside the utils folder.

---

## 🚀 Deployment (GitHub Pages)

The site is a static SPA served from `https://lokesh396.github.io/Portfolio/` — no server, no Vercel.

- `vite.config.js` sets `base: '/Portfolio/'` so assets resolve from the repo sub-path.
- `src/App.jsx` mounts `BrowserRouter` with that same base as `basename`.
- `npm run build` also copies `dist/index.html` to `dist/404.html` (GitHub Pages has no SPA rewrites, so unknown paths — e.g. a refresh on `/Portfolio/archive` — are served the app) and writes `dist/.nojekyll`.
- `.github/workflows/deploy.yml` builds on every push to `main` and publishes `dist/` via `actions/deploy-pages`.

One-time repo setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**. After that, pushes to `main` deploy automatically.

```bash
npm run build                        # verify the static output locally
npx vite preview --base /Portfolio/  # preview at http://localhost:4173/Portfolio/
```

---

## 🙏 Credits

This project is **inspired by** [Brittany Chiang’s portfolio](https://brittanychiang.com/), one of the most iconic open-source developer portfolios.

> All design credit goes to **Brittany Chiang** — thank you for making your work open-source and inspiring developers around the world. 🙌

---

## 🧑‍💻 Author

**C Lokesh Kumar Reddy**  
[LinkedIn](https://www.linkedin.com/in/c-lokesh-kumar-reddy-30a5681a1/)  
[GitHub](https://github.com/Lokesh396)
