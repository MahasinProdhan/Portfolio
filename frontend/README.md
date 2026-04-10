# Mahasin Prodhan Portfolio Frontend

## Overview

This is the frontend for a personal portfolio website built with React and Vite. It highlights Mahasin Prodhan's profile, skills, projects, education, and contact information in a fast, responsive single-page experience.

## Features

- Responsive portfolio landing page
- Section-based homepage with hero, about, skills, projects, education, and contact areas
- Project details route for individual project views
- Blog route placeholder
- Contact form with toast-based success and error feedback
- Smooth modern UI powered by Tailwind CSS and Framer Motion

## Tech Stack

- React 19
- Vite 7
- React Router DOM
- Tailwind CSS
- Framer Motion
- React Hot Toast
- React Icons
- Axios

## Project Structure

```text
frontend/
|-- public/
|-- src/
|   |-- assets/
|   |-- components/
|   |-- data/
|   |-- pages/
|   |-- sections/
|   |-- utils/
|   |-- App.jsx
|   |-- main.jsx
|   |-- index.css
|-- index.html
|-- package.json
|-- postcss.config.js
```

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm

### Installation

```bash
cd frontend
npm install
```

### Environment Variables

Create a `.env` file inside `frontend/` and add:

```env
VITE_API_URL=http://localhost:5000
```

This value is used by the contact form to send requests to:

```text
/api/contact
```

## Available Scripts

### Start Development Server

```bash
npm run dev
```

Runs the app in development mode with hot reload.

### Build for Production

```bash
npm run build
```

Creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

Serves the production build locally for preview.

### Run Linting

```bash
npm run lint
```

Checks the codebase using ESLint.

## Routes

- `/` - Home page
- `/projects/:id` - Project details page
- `/blog` - Blog page
- `*` - Not found page

## Notes

- The contact form depends on a backend service being available at `VITE_API_URL`.
- Toast notifications are configured globally in `src/main.jsx`.
- Styling is handled with Tailwind CSS and project-level custom styles.

## License

This project is for personal portfolio use.
