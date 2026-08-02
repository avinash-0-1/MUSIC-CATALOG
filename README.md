# 🎵 Music Catalog Insights Platform

A full-stack music discovery and analytics platform that allows users to search songs from Apple's iTunes catalog, build a personal music library, visualize listening insights, and receive AI-powered music recommendations.

---

## 📖 Overview

Music Catalog Insights Platform is a modern full-stack web application developed as part of a software engineering assignment.

The application integrates Apple's iTunes Search API with a secure backend and a personalized user library. Users can search songs, save them to their own collection, analyze listening trends through interactive charts, and receive intelligent music recommendations.

---

## ✨ Features

### 🔐 Authentication

- User Registration
- User Login
- JWT Authentication
- BCrypt Password Encryption
- Protected Routes

---

### 🎵 Music Search

- Search songs using iTunes Search API
- Debounced Search
- Pagination
- Album Artwork
- Song Details

---

### 📚 Personal Library

- Save Songs
- Remove Songs
- Edit Ratings
- Personal Notes
- Duplicate Prevention

---

### 📊 Analytics Dashboard

Interactive charts including:

- Genre Distribution
- Top Artists
- Release Timeline
- Rating Distribution

---

### 🤖 AI Recommendations

Rule-based recommendation engine that analyzes:

- Favorite Genres
- Favorite Artists
- Listening Patterns

and recommends similar songs.

---

### ⚡ Performance

- Search Result Caching
- Debounced Search
- Pagination
- Centralized Error Handling

---

## 🏗️ Tech Stack

### Frontend

- React
- Vite
- React Router
- Axios
- Recharts
- Tailwind CSS (Optional)

### Backend

- Spring Boot 3
- Java 21
- Spring Security
- JWT Authentication
- Spring Data JPA

### Database

- MySQL

### External API

- Apple iTunes Search API

### Deployment

- Frontend → Vercel

- Backend → Render

- Database → MySQL Cloud

---

## 🧱 System Architecture

```
React (Vite)
      │
 HTTPS + JWT
      │
Spring Boot API
      │
 ├────────── MySQL
 │
 ├────────── iTunes Search API
 │
 └────────── AI Recommendation Engine
```

---

## 📂 Project Structure

```
Music-Catalog-Insights/

docs/
    PRD.md
    EXECUTIVE_SUMMARY.md
    API.md
    DATABASE.md
    DESIGN_SYSTEM.md

frontend/

backend/

README.md
```

---

## 🔑 Core Modules

- Authentication
- Music Search
- Personal Library
- Analytics
- AI Recommendations

---

## 📡 REST API

| Method | Endpoint |
|---------|----------|
| POST | /api/auth/register |
| POST | /api/auth/login |
| GET | /api/search |
| GET | /api/library |
| POST | /api/library |
| PUT | /api/library/{id} |
| DELETE | /api/library/{id} |
| GET | /api/analytics |
| GET | /api/ai/recommendations |

---

## 📊 Analytics

The dashboard visualizes:

- Genre Distribution
- Top Artists
- Songs by Release Year
- Rating Histogram

---

## 🔒 Security

- JWT Authentication
- BCrypt Password Hashing
- Protected REST APIs
- Environment Variables
- CORS Configuration
- Centralized Exception Handling

---

## 🚀 Getting Started

### Clone Repository

```bash
git clone <repository-url>
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
./mvnw spring-boot:run
```

---

## ⚙️ Environment Variables

Backend

```env
DATABASE_URL=

DATABASE_USERNAME=

DATABASE_PASSWORD=

JWT_SECRET=

CORS_ORIGIN=
```

Frontend

```env
VITE_API_BASE_URL=
```

---

## 📖 Documentation

Detailed project documentation is available inside the `docs/` folder.

- Product Requirements Document (PRD)
- Executive Summary
- API Documentation
- Database Design
- Design System
- Architecture Diagrams

---

## 📌 Future Improvements

- LLM-powered AI Insights
- Playlist Generation
- OAuth Login
- Music Streaming Integration
- Advanced Recommendation Engine
- Admin Dashboard

---

## 👨‍💻 Author

Avinash Raj
