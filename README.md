# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

💡 What I Learned from This Project
React State Management:
Learned how to manage dynamic UI using useState, including handling user selections, tracking scores, and navigating between questions.

Component Rendering Logic:
Practiced conditional rendering in React to display one question at a time and show a final result screen after the quiz ends.

Array Mapping & Dynamic UI:
Used .map() to dynamically render quiz questions and multiple-choice options from an array of data.

User Interaction Handling:
Implemented functions to respond to user input (clicking answers), check for correctness, and calculate scores.

Basic UI Design with Tailwind CSS:
Improved UI styling using Tailwind CSS classes to make a clean and responsive quiz interface.

App Structure and Clean Code:
Structured the app into readable sections and separated logic for better maintainability and scalability.

Restart Functionality:
Added the ability to restart the quiz, resetting state and enabling replayability.
