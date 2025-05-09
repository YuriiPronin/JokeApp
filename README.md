# Jokes App 😄

A frontend application that displays a list of jokes with the ability to add, delete, refresh and load more — built with React, Redux Toolkit and MUI.  
Fully compliant with test task requirements and extended with production-level structure, error handling, and architecture best practices.

---

## 🛠️ Stack

- **React (TypeScript)**
- **Redux Toolkit**
- **MUI (Material UI)**
- **localStorage**
- **Custom Fetch API with Interceptors**

---

## ⚙️ Features

- 🔄 Load initial jokes (max 10, adjusted if user-added exist)
- ➕ Add a new unique joke (stored in localStorage)
- ❌ Delete jokes (also clears from localStorage if user-added)
- ♻️ Refresh a single joke (replaces with a unique one)
- 📦 Load more (fetch 10 more jokes, no duplication, not saved in LS)
- ⚠️ Global error handling (with user-friendly `Snackbar`)
- ✅ Responsive layout with MUI
- 🧼 Clean architecture with separation of concerns

---

## 🧠 Architectural Decisions

- `Redux Toolkit` used for both global state and user-added joke tracking
- LocalStorage integrated manually via `store.subscribe()` + slice segregation
- `addedJokes` are stored and replayed on app load
- `addFromApi` vs `addJoke` separate logic for precise control over persistence
- Custom fetch layer with interceptor for centralized error logic
- Styled via MUI with reusable components like `BaseButton`, `JokeCard`, `JokeActions`
- Snackbar placed top-center for maximum visibility
- Performance-conscious components: used `React.memo`, `useCallback` in key places (`JokeCard`, `JokeActions`, and handler functions) to prevent unnecessary re-renders and ensure scalability

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm start
```

> Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

---

## 💡 Possible Improvements

- Add unit tests (e.g. for reducers or API utils)
- Persist theme mode (dark/light)
- Use `RTK Query` if API logic gets more complex
- Add filters by joke type or keyword
- Accessibility improvements (ARIA)
  _Note: I'm still learning best practices in accessibility. This is one of the areas I plan to grow in._

---

Made with ❤️ and attention to detail by **Yurii Pronin**
