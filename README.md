# Viraj Somani - Portfolio Website

A modern, responsive portfolio website showcasing fullstack development experience.

## Project Structure

```
portfolio/
├── frontend/             # React + Vite client
│   ├── public/
│   │   ├── viraj1.jpg
│   │   └── _redirects
│   ├── src/
│   │   ├── components/   # UI components
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
│
└── backend/              # Node.js + Express server
    ├── .env
    ├── package.json
    └── server.js
```

## Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS, React Icons
- **Backend**: Node.js, Express, Nodemailer, CORS, Dotenv

## Getting Started

### 1. Run Everything Concurrently (Root)

From the root `portfolio/` folder:

```bash
# Run both frontend & backend together
npm run dev
```

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend API: [http://localhost:5000](http://localhost:5000)

### 2. Or Run Separately

#### Frontend (React + Vite)
```bash
cd frontend
npm install
npm run dev      # Start Vite dev server on port 3000
npm run build    # Build production bundle in frontend/dist
npm run preview  # Preview production build
```

#### Backend (Node + Express)
```bash
cd backend
npm install
npm run dev      # Start server with nodemon auto-reload
npm start        # Start server with standard node
```

## Available Scripts (Root)

- `npm run dev` - Runs both frontend and backend concurrently
- `npm run dev:frontend` - Starts only the frontend Vite dev server
- `npm run dev:backend` - Starts only the Express backend server
- `npm run build` - Builds the frontend for production
- `npm start` - Starts the backend server in production mode

## Contact

- Email: virajsomani10@gmail.com
- Phone: +91 8780674650
- Location: Ahmedabad, Gujarat, India

## License

This project is open source and available under the MIT License.
