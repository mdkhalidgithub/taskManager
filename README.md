# Task Manager

A modern, fullstack Task Manager application built with React (Vite + Tailwind CSS) for the frontend and Node.js, Express, and MongoDB for the backend. Features user authentication, task CRUD, and JWT-based security.

---

## Features
- User registration and login (JWT authentication, bcrypt password hashing)
- Add, edit, delete, and view your tasks
- Responsive, clean UI with Tailwind CSS
- RESTful API backend with Express and MongoDB
- Protected routes for authenticated users

---

## Tech Stack
- **Frontend:** React, Vite, Tailwind CSS, React Router, Context API
- **Backend:** Node.js, Express, MongoDB (Atlas or local), Mongoose, JWT, bcryptjs

---

## Getting Started

### 1. Clone the Repository
```bash
# Clone the repo
git clone https://github.com/your-username/taskMangr.git
cd taskMangr
```

---

### 2. Setup Backend
```bash
cd backend
npm install
```

#### Create a `.env` file in `backend/`:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

#### Start the backend server:
```bash
node server.js
# or, for development
yarn global add nodemon
nodemon server.js
```

---

### 3. Setup Frontend
```bash
cd ../ # Go back to project root
npm install
```

#### Start the frontend dev server:
```bash
npm run dev
```

---

## API Endpoints
- `POST   /api/register` — Register user
- `POST   /api/login` — Login user
- `GET    /api/tasks` — Get tasks (auth required)
- `POST   /api/tasks` — Add task (auth required)
- `PUT    /api/tasks/:id` — Update task (auth required)
- `DELETE /api/tasks/:id` — Delete task (auth required)

All protected endpoints require an `Authorization: Bearer <token>` header.

---

## Folder Structure
```
taskMangr/
  backend/
    models/
    routes/
    middleware/
    server.js
    .env
  src/
    components/
    pages/
    context/
    App.jsx
    main.jsx
  package.json
  README.md
```

---

## Notes
- You can use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for a free cloud database, or run MongoDB locally.
- Passwords are hashed with bcrypt before storage.
- JWT tokens are used for authentication and must be sent in the `Authorization` header for protected routes.
- The frontend and backend can be run independently for development.

---

## License
MIT
