# WorkNova — Team Task Manager

A modern full-stack task management web application built using React, Express, MongoDB, and TypeScript.

WorkNova helps teams create projects, manage tasks, assign work, track task progress, and monitor project status using a clean and responsive dashboard interface.

---

# Features

## Authentication

- JWT-based Signup & Login
- Secure Protected Routes
- Persistent User Authentication
- Admin & Member Roles

---

# Dashboard

- Project Statistics
- Task Statistics
- In Progress Tasks
- Completed Tasks
- Overdue Tasks
- Task Status Monitoring
- Task Activity Section
- Interactive Pie Chart Analytics
- Responsive Dashboard Layout

---

# Project Management

- Create Projects
- Update Projects
- Delete Projects
- Team Collaboration
- Admin-controlled Workspace

---

# Task Management

- Create Tasks
- Assign Tasks
- Update Task Status
- Track Task Progress
- Overdue Task Monitoring

---

# Extra Features

- Dark / Light Theme
- Responsive Sidebar
- Modern Dashboard Cards
- Role-based Access Control
- Clean UI Design
- Interactive Task Activity Section

---

# Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, TypeScript, Tailwind CSS, Vite |
| Routing | React Router v6 |
| Charts | Recharts |
| Icons | Lucide React |
| Backend | Node.js, Express, TypeScript |
| Database | MongoDB with Mongoose |
| Authentication | JWT |
| Deployment | Railway |

---

# Project Structure

```txt
team-task-manager/
│
├── backend/
│   ├── src/
│   │   ├── config/         # MongoDB configuration
│   │   ├── controllers/    # Route controllers
│   │   ├── middleware/     # JWT authentication middleware
│   │   ├── models/         # Database models
│   │   ├── routes/         # Express routes
│   │   └── index.ts
│   │
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/
│   ├── src/
│   │   ├── components/     # Sidebar & UI components
│   │   ├── context/        # Authentication context
│   │   ├── pages/          # Dashboard, Login, Projects
│   │   ├── services/       # Axios API setup
│   │   ├── types/          # Shared types
│   │   └── main.tsx
│   │
│   ├── package.json
│   └── vite.config.ts
│
├── package.json
└── README.md
```

---

# Local Development Setup

## Prerequisites

Install the following:

- Node.js v18 or higher
- MongoDB Community Server

OR

- MongoDB Atlas Cloud Database

---

# Open Project

Open the project folder in your code editor or terminal:

```bash
cd team-task-manager
```

---

# Backend Setup

Move to backend folder:

```bash
cd backend
```

Create a `.env` file inside backend folder:

```env
MONGODB_URI=mongodb://localhost:27017/team-task-manager

JWT_SECRET=your-secret-key

PORT=5000

NODE_ENV=development
```

Install backend dependencies:

```bash
npm install
```

Run backend server:

```bash
npm run dev
```

Backend runs on:

```txt
http://localhost:5000
```

---

# Frontend Setup

Open another terminal:

```bash
cd frontend
```

Install frontend dependencies:

```bash
npm install
```

Run frontend:

```bash
npm run dev
```

Frontend runs on:

```txt
http://localhost:5173
```

---

# API Reference

## Authentication

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/signup` | Register new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/me` | Get current user |

---

## Projects

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/projects` | Get all projects |
| POST | `/api/projects` | Create project |
| GET | `/api/projects/:id` | Get project |
| PUT | `/api/projects/:id` | Update project |
| DELETE | `/api/projects/:id` | Delete project |

---

## Tasks

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/projects/:id/tasks` | Get project tasks |
| POST | `/api/projects/:id/tasks` | Create task |
| PUT | `/api/projects/:id/tasks/:taskId` | Update task |
| DELETE | `/api/projects/:id/tasks/:taskId` | Delete task |

---

## Dashboard

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/dashboard` | Dashboard analytics |

---

# Dashboard Analytics

The dashboard provides:

- Total Projects
- Total Tasks
- In Progress Tasks
- Completed Tasks
- Overdue Tasks
- Task Status Tracking
- Task Activity Monitoring
- Pie Chart Analytics

---

# User Roles

| Feature | Admin | Member |
|---|---|---|
| Create Projects | ✅ | ❌ |
| Manage Projects | ✅ | ❌ |
| Create Tasks | ✅ | ❌ |
| Update Assigned Tasks | ✅ | ✅ |
| Delete Tasks | ✅ | ❌ |

---

# Deployment

## Deploying on Railway

WorkNova can be deployed easily using Railway with MongoDB Atlas.

---

## Step 1 — Create MongoDB Atlas Database

1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account
3. Create a free M0 Cluster
4. Create a database user
5. Allow network access from anywhere (`0.0.0.0/0`)
6. Copy your MongoDB connection string

Example:

```env
mongodb+srv://USERNAME:PASSWORD@cluster.mongodb.net/team-task-manager
```

---

## Step 2 — Push Project to GitHub

Initialize git:

```bash
git init
```

Add files:

```bash
git add .
```

Commit changes:

```bash
git commit -m "initial commit"
```

Connect GitHub repository:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
```

Push code:

```bash
git branch -M main

git push -u origin main
```

---

## Step 3 — Deploy on Railway

1. Go to https://railway.app
2. Login with GitHub
3. Click New Project
4. Select Deploy from GitHub Repo
5. Select your repository
6. Railway automatically detects the project

---

## Step 4 — Add Environment Variables

Open Railway Dashboard → Variables

Add:

| Variable | Value |
|---|---|
| `MONGODB_URI` | Your MongoDB Atlas URL |
| `JWT_SECRET` | Your JWT Secret |
| `NODE_ENV` | production |
| `PORT` | 5000 |

---

## Step 5 — Generate Public Domain

1. Open Railway Project
2. Go to Settings
3. Open Networking
4. Click Generate Domain

Your app will be live at:

```txt
https://your-app-name.up.railway.app
```

---

# Production Build Process

```txt
npm run build
  ├── frontend build → frontend/dist
  └── backend build → backend/dist

npm start
  └── node backend/dist/index.js
```

The backend serves:

- REST API
- Frontend static files

Everything runs from a single Railway deployment.

---

# Environment Variables

| Variable | Required | Description |
|---|---|---|
| `MONGODB_URI` | Yes | MongoDB connection string |
| `JWT_SECRET` | Yes | JWT secret key |
| `PORT` | No | Backend port |
| `NODE_ENV` | No | Environment mode |

---

# Future Improvements

- Real-time Notifications
- Drag & Drop Task Board
- Team Chat System
- Email Notifications
- Activity Logs
- Advanced Dashboard Analytics

---

# Author

Sunny Raj

---

# License

MIT License