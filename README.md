# 📚 Personal Reading List (State & Data)

![License](https://img.shields.io/badge/License-Personal_Use-blue?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Stack-HTML5_%7C_CSS3_%7C_JS-orange?style=for-the-badge)

A single-page reading list backed by a persistent storage implementation (`localStorage`), complete with explicit state handling for loading, error, and empty states, plus full item addition and deletion.

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

---

## 📁 Repository Structure

```text
PersonalReadingList/
├── index.html          # Consolidated dashboard layout and state templates
├── app.js             # Data handlers, state machines, and DOM logic
├── style.css          # Glassmorphic UI layout and state styling
└── README.md          # Documentation and reviewer guide
