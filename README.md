# 📚 Personal Reading List (State & Data)

![Vercel Deployment](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)
![License](https://img.shields.io/badge/License-Personal_Use-blue?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Stack-HTML5_%7C_CSS3_%7C_JS-orange?style=for-the-badge)

A single-page reading list backed by a persistent storage implementation (`localStorage`), complete with explicit state handling for loading, error, and empty states, plus full item addition and deletion.

🌐 **Live Demo:** [personal-reading-list.vercel.app](https://personal-reading-list.vercel.app/)

---

## ✨ Features

- **Persistent Web Storage:** Full CRUD functionality for books and articles with automatic state sync via `localStorage`.
- **Comprehensive UI States:** Native views built to handle loading, error recovery, empty lists, and populated book collections.
- **Interactive Reviewer Toolbar:** Dedicated top toolbar designed to simulate network delays, force storage exceptions, and reload sample data instantly.
- **Zero-Build Architecture:** Single-file web application powered by vanilla JavaScript and native DOM manipulation.

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6+ Web Storage API, Async State Handlers)
- **Persistence:** Browser `localStorage` API
- **Deployment & Hosting:** Vercel Static Hosting

---

## 📁 Repository Structure

```text
PersonalReadingList/
├── index.html          # Consolidated dashboard layout and state templates
├── app.js             # Data handlers
