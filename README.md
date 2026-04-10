# Portfolio

## Overview

This repository contains a full-stack personal portfolio application with a React frontend and a Node.js backend. The frontend presents portfolio content such as profile details, skills, projects, and contact information, while the backend powers the contact form by storing submissions in MongoDB and sending email notifications.

## Project Structure

```text
Portfolio/
|-- frontend/   # React + Vite client
|-- backend/    # Express + MongoDB API
|-- README.md
```

## Architecture

### Frontend

The frontend is built with React and Vite and provides:

- A responsive portfolio homepage
- Project detail pages
- A blog route placeholder
- A contact form connected to the backend API
- Tailwind CSS styling and Framer Motion animations

### Backend

The backend is built with Express and MongoDB and provides:

- A `POST /api/contact` endpoint
- Validation for contact form submissions
- MongoDB storage for submitted messages
- Email notifications using Nodemailer and Gmail

## Tech Stack

### Frontend

- React 19
- Vite 7
- React Router DOM
- Tailwind CSS
- Framer Motion
- React Hot Toast
- React Icons

### Backend

- Node.js
- Express
- MongoDB with Mongoose
- Nodemailer
- CORS
- Dotenv

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm
- MongoDB connection string
- Gmail account with an app password for email sending

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd Portfolio
```

### 2. Install Dependencies

Install frontend dependencies:

```bash
cd frontend
npm install
```

Install backend dependencies:

```bash
cd ../backend
npm install
```

## Environment Variables

### Frontend `.env`

Create a `.env` file inside `frontend/`:

```env
VITE_API_URL=http://localhost:5001
```

### Backend `.env`

Create a `.env` file inside `backend/`:

```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
EMAIL_USER=your_gmail_address
EMAIL_PASS=your_gmail_app_password
```

## Running the Project

### Start the Backend

From the `backend/` folder:

```bash
npm run dev
```

The backend will start on:

```text
http://localhost:5001
```

### Start the Frontend

From the `frontend/` folder:

```bash
npm run dev
```

The frontend will usually run on:

```text
http://localhost:5173
```

## Available Scripts

### Frontend

- `npm run dev` - Start the Vite development server
- `npm run build` - Build the frontend for production
- `npm run preview` - Preview the production frontend build
- `npm run lint` - Run ESLint

### Backend

- `npm run dev` - Start the backend with Nodemon
- `npm start` - Start the backend in normal mode

## API

### Contact Endpoint

```http
POST /api/contact
```

Request body:

```json
{
  "name": "Your Name",
  "email": "your@email.com",
  "message": "Your message"
}
```

Successful response:

```json
{
  "success": true,
  "message": "Message sent successfully"
}
```

## Frontend and Backend Flow

1. The user submits the contact form from the frontend.
2. The frontend sends the form data to `VITE_API_URL/api/contact`.
3. The backend validates the request.
4. The backend stores the message in MongoDB.
5. The backend sends an email notification to the configured Gmail account.

## Notes

- `node_modules` and `.env` files are excluded from version control.
- The frontend and backend are developed and run separately.
- The backend must be running for the contact form to work correctly.

## License

This project is intended for personal portfolio use.
