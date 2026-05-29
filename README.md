# 🚀 Codemeet - Real-Time Collaborative Coding Interview Platform

<div align="center">

![Codemeet Logo](https://img.shields.io/badge/Codemeet-Interview%20Platform-blueviolet?style=for-the-badge&logo=codepen)
![Status](https://img.shields.io/badge/Status-Active%20Development-brightgreen?style=for-the-badge)
![License](https://img.shields.io/badge/License-ISC-blue?style=for-the-badge)

**A Full-Stack Real-Time Interview Platform with Integrated Video Calls, Live Chat, and Code Execution**

[Features](#-features) • [Tech Stack](#-tech-stack) • [Installation](#-installation) • [Architecture](#-architecture) • [API Documentation](#-api-documentation)

</div>

---

## 📋 Overview

**Codemeet** is a sophisticated, production-ready interview platform designed to revolutionize technical hiring. It seamlessly integrates video conferencing, real-time messaging, and live code execution in a single, unified platform. Whether you're conducting technical interviews, competitive programming sessions, or collaborative coding sessions, Codemeet provides all the tools you need with an exceptional user experience.

The platform leverages cutting-edge technologies including **Stream.io for real-time communication**, **Clerk for secure authentication**, **Inngest for background job processing**, and **Monaco Editor for professional code editing**.

---

## ✨ Key Features

### 🎥 **Real-Time Video Conferencing**
- Crystal-clear HD video calls powered by Stream.io Video SDK
- Multi-participant support with speaker layout
- Automatic call quality optimization
- Real-time participant tracking

### 💬 **Integrated Live Chat**
- Instant messaging during coding sessions using Stream Chat
- Thread-based conversations for organized discussions
- Real-time message delivery with read receipts
- Persistent chat history per session

### 💻 **Professional Code Editor**
- Monaco Editor integration (same as VS Code)
- Syntax highlighting for multiple languages
- Real-time code sharing and collaboration
- Auto-completion and intelligent suggestions

### 🏆 **Curated Problem Library**
- Hand-picked coding challenges spanning multiple difficulties
- Easy, Medium, and Hard problem categories
- Comprehensive problem descriptions with examples
- Constraint specifications and test cases

### 📊 **Session Management**
- Create and host interview sessions
- Join active sessions with ease
- Session history tracking
- Real-time status monitoring

### 🔐 **Secure Authentication**
- Enterprise-grade security with Clerk authentication
- OAuth support for social login
- User profile management
- Secure API endpoints with middleware protection

### 📧 **Background Job Processing**
- Email notifications via Inngest
- Automated workflow triggers
- Reliable task scheduling
- Error handling and retries

### 🎨 **Beautiful, Responsive UI**
- Modern design with TailwindCSS & DaisyUI
- Mobile-responsive interface
- Smooth animations and transitions
- Dark mode support

### 📈 **User Dashboard**
- Session statistics and analytics
- Recent sessions overview
- Problem-solving history
- Performance metrics

---

## 🛠 Tech Stack

### **Backend**
```
Framework:        Express.js 5.1.0
Runtime:          Node.js (ES Modules)
Database:         MongoDB with Mongoose
Authentication:   Clerk Express
Video/Chat:       Stream.io Node SDK & Stream Chat
Job Queue:        Inngest
Dev Tools:        Nodemon
```

### **Frontend**
```
Framework:        React 19.1.1
Build Tool:       Vite 7.1.7
UI Library:       TailwindCSS 4.1.18 & DaisyUI 5.5.17
State Management: TanStack React Query 5.90.5
Code Editor:      Monaco Editor 4.7.0
Video/Chat:       Stream.io React SDKs
HTTP Client:      Axios
Routing:          React Router 7.9.4
Notifications:    React Hot Toast & Canvas Confetti
Date Handling:    date-fns
Icons:            Lucide React
UI Components:    React Resizable Panels
```

### **DevTools & Linting**
```
Linter:           ESLint 9.36.0
Type Checking:    React Types 19.1.13
```

---

## 📁 Project Structure

```
codemeet/
├── 📄 package.json                 # Root package configuration
│
├── backend/                        # Express.js API Server
│   ├── src/
│   │   ├── server.js               # Main server entry point
│   │   ├── controllers/
│   │   │   ├── chatController.js   # Stream chat token generation
│   │   │   └── sessionController.js # Session CRUD operations
│   │   ├── routes/
│   │   │   ├── chatRoutes.js       # Chat endpoints
│   │   │   └── sessionRoutes.js    # Session endpoints
│   │   ├── models/
│   │   │   ├── User.js             # User schema with Clerk integration
│   │   │   └── Session.js          # Session schema
│   │   ├── middleware/
│   │   │   └── protectRoute.js     # JWT/Clerk authentication middleware
│   │   └── lib/
│   │       ├── db.js               # MongoDB connection
│   │       ├── env.js              # Environment configuration
│   │       ├── ingest.js           # Inngest job definitions
│   │       └── stream.js           # Stream.io client initialization
│   └── package.json
│
└── frontend/                       # React + Vite SPA
    ├── src/
    │   ├── main.jsx                # React entry point
    │   ├── App.jsx                 # Main App component with routing
    │   ├── index.css               # Global styles
    │   ├── pages/
    │   │   ├── HomePage.jsx        # Landing page
    │   │   ├── DashboardPage.jsx   # User dashboard
    │   │   ├── ProblemsPage.jsx    # Problems listing
    │   │   ├── ProblemPage.jsx     # Single problem view with editor
    │   │   └── SessionPage.jsx     # Live session with video & chat
    │   ├── components/
    │   │   ├── VideoCallUI.jsx     # Video call interface
    │   │   ├── ActiveSessions.jsx  # Active sessions list
    │   │   ├── CodeEditorPanel.jsx # Monaco editor wrapper
    │   │   ├── OutputPanel.jsx     # Code execution output
    │   │   ├── ProblemDescription.jsx
    │   │   ├── CreateSessionModal.jsx
    │   │   ├── RecentSessions.jsx
    │   │   ├── StatsCards.jsx
    │   │   ├── Navbar.jsx
    │   │   └── WelcomeSection.jsx
    │   ├── hooks/
    │   │   ├── useSessions.js      # Session management hook
    │   │   └── useStreamClient.js  # Stream.io client hook
    │   ├── lib/
    │   │   ├── axios.js            # Configured axios instance
    │   │   ├── piston.js           # Code execution API integration
    │   │   ├── stream.js           # Stream client initialization
    │   │   └── utils.js            # Utility functions
    │   ├── api/
    │   │   └── sessions.js         # Session API calls
    │   └── data/
    │       └── problems.js         # Problem database
    ├── public/                     # Static assets
    ├── vite.config.js              # Vite configuration
    ├── eslint.config.js            # ESLint rules
    ├── tailwind.config.js          # TailwindCSS theming
    ├── package.json
    └── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher) or **yarn**
- **MongoDB** (local or MongoDB Atlas cloud instance)
- **Git**

### Installation & Setup

#### 1️⃣ Clone the Repository

```bash
# Using HTTPS
git clone https://github.com/ggoswami777/codemeet.git

# Or using SSH
git clone git@github.com:ggoswami777/codemeet.git

# Navigate to project directory
cd codemeet
```

#### 2️⃣ Environment Configuration

Create `.env` files for both backend and frontend:

**Backend** - `backend/.env`:
```env
# Server Configuration
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173

# Database
MONGODB_URI=mongodb://localhost:27017/codemeet
# Or use MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/codemeet

# Clerk Authentication
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

# Stream.io Credentials
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret

# Inngest API Key (for background jobs)
INNGEST_API_KEY=your_inngest_api_key
INNGEST_EVENT_KEY=your_inngest_event_key
```

**Frontend** - `frontend/.env`:
```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_API_URL=http://localhost:5000/api
VITE_STREAM_API_KEY=your_stream_api_key
```

#### 3️⃣ Install Dependencies

```bash
# Install root dependencies
npm install

# Install backend dependencies
npm install --prefix backend

# Install frontend dependencies
npm install --prefix frontend
```

#### 4️⃣ Start the Application

**Option A: Development Mode** (Run backend and frontend separately)

Terminal 1 - Start Backend:
```bash
npm run dev --prefix backend
# Server runs on http://localhost:5000
```

Terminal 2 - Start Frontend:
```bash
npm run dev --prefix frontend
# Client runs on http://localhost:5173
```

**Option B: Production Build**

```bash
# Build the entire application
npm run build

# Start the production server
npm start
# Application runs on http://localhost:5000
```

#### 5️⃣ Access the Application

Open your browser and navigate to:
- **Development**: `http://localhost:5173`
- **Production**: `http://localhost:5000`

---

## 📡 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication
All protected endpoints require Clerk authentication via middleware. Include authorization headers automatically when using the axios client.

### **Chat Endpoints**

#### Get Stream Chat Token
```http
GET /api/chat/token
Authorization: Bearer <clerk_token>

Response (200 OK):
{
  "token": "eyJhbGc...",
  "userId": "user_123",
  "apiKey": "stream_api_key"
}
```

### **Session Endpoints**

#### Create a New Session
```http
POST /api/sessions
Content-Type: application/json
Authorization: Bearer <clerk_token>

Request Body:
{
  "problem": "two-sum",
  "difficulty": "easy"
}

Response (201 Created):
{
  "_id": "session_123",
  "problem": "two-sum",
  "difficulty": "easy",
  "host": "user_123",
  "participant": null,
  "status": "active",
  "callId": "",
  "createdAt": "2024-01-15T10:30:00Z"
}
```

#### Get All Active Sessions
```http
GET /api/sessions/active
Authorization: Bearer <clerk_token>

Response (200 OK):
[
  {
    "_id": "session_123",
    "problem": "two-sum",
    "difficulty": "easy",
    "host": { "_id": "user_123", "name": "John Doe", "profileImage": "..." },
    "participant": null,
    "status": "active"
  },
  ...
]
```

#### Get My Recent Sessions
```http
GET /api/sessions/my-recent
Authorization: Bearer <clerk_token>

Response (200 OK):
[...]
```

#### Get Session by ID
```http
GET /api/sessions/:id
Authorization: Bearer <clerk_token>

Response (200 OK):
{
  "_id": "session_123",
  "problem": "two-sum",
  "difficulty": "easy",
  "host": { ... },
  "participant": { ... },
  "status": "active"
}
```

#### Join a Session
```http
POST /api/sessions/:id/join
Authorization: Bearer <clerk_token>

Response (200 OK):
{
  "_id": "session_123",
  "problem": "two-sum",
  "participant": "user_456",
  "status": "active",
  "callId": "generated_call_id"
}
```

#### End a Session
```http
POST /api/sessions/:id/end
Authorization: Bearer <clerk_token>

Response (200 OK):
{
  "_id": "session_123",
  "status": "completed"
}
```

### **Health Check**
```http
GET /api/health

Response (200 OK):
{
  "msg": "api is up and running"
}
```

---

## 🏗 Architecture Overview

### System Design

```
┌─────────────────────────────────────────────────────────────┐
│                    CLIENT LAYER (React)                     │
│  ┌────────────────┬────────────────┬──────────────────────┐ │
│  │  Video UI      │  Code Editor   │  Chat Interface      │ │
│  │  (SpeakerView) │  (Monaco)      │  (Stream Chat)       │ │
│  └────────────────┴────────────────┴──────────────────────┘ │
│                            ↓                                 │
│  ┌────────────────────────────────────────────────────────┐ │
│  │         React Router + Clerk Authentication            │ │
│  │         State Management (React Query)                 │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
              ↓ (Axios HTTP Calls)
┌─────────────────────────────────────────────────────────────┐
│                   API GATEWAY (Express.js)                  │
│  ┌────────────────┬────────────────┬──────────────────────┐ │
│  │  Chat Routes   │  Session Routes │ Auth Middleware    │ │
│  └────────────────┴────────────────┴──────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
         ↓ (Controllers)
┌─────────────────────────────────────────────────────────────┐
│              BUSINESS LOGIC LAYER                           │
│  ┌────────────────┬────────────────────────────────────────┐│
│  │ Session CRUD   │      Chat Token Generation            ││
│  │ User Management │      Stream Integration              ││
│  └────────────────┴────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────────────────────────┐
│         DATA PERSISTENCE LAYER (MongoDB)                    │
│  ┌────────────────┬────────────────────────────────────────┐│
│  │ Users Collection   │ Sessions Collection               ││
│  │ • name             │ • problem                         ││
│  │ • email            │ • difficulty                      ││
│  │ • clerkId          │ • host (ref to User)             ││
│  │ • profileImage     │ • participant (ref to User)      ││
│  │ • timestamps       │ • status (active/completed)      ││
│  │                    │ • callId                          ││
│  │                    │ • timestamps                      ││
│  └────────────────┴────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│         EXTERNAL SERVICES INTEGRATION                       │
├─────────────────┬──────────────────┬───────────────────────┤
│  STREAM.IO      │  CLERK AUTH      │  INNGEST JOBS        │
│  ────────────   │  ─────────────   │  ──────────────      │
│  • Video Call   │  • User Auth     │  • Email Notify      │
│  • Chat Stream  │  • OAuth         │  • Job Scheduling   │
│  • Real-time    │  • JWT Tokens    │  • Event Driven      │
└─────────────────┴──────────────────┴───────────────────────┘
```

### Data Flow

1. **User Authentication**: User logs in via Clerk → Frontend stores auth token
2. **Session Creation**: User creates session → Express API stores in MongoDB
3. **Session Joining**: Participant joins → System generates Stream.io call ID
4. **Real-time Communication**: 
   - Video: Stream.io Video SDK handles peer-to-peer connection
   - Chat: Stream Chat SDK manages real-time messaging
5. **Session Completion**: Either participant ends session → Status updated in DB

---

## 🔑 Key Technologies Explained

### Stream.io Integration
- **Video SDK**: Handles real-time video conferencing with automatic quality adaptation
- **Chat SDK**: Provides real-time messaging with persistence, read receipts, and threading

### Clerk Authentication
- Secure OAuth provider integration
- Session management and JWT token handling
- User profile management with custom fields

### Inngest Background Jobs
- Triggers email notifications when sessions start/end
- Handles asynchronous task processing without blocking main thread
- Automatic retry logic for failed jobs

### Monaco Editor
- Same code editor used in VS Code
- Syntax highlighting for 100+ languages
- IntelliSense and auto-completion
- Integrated terminal support

---

## 🧪 Testing

### Run Linting
```bash
npm run lint --prefix frontend
```

### Build for Production
```bash
npm run build --prefix frontend
```

---

## 📦 Deployment

### Deploy on Vercel (Frontend)
```bash
npm install -g vercel
vercel --prod --prefix frontend
```

### Deploy on Heroku (Backend)
```bash
heroku login
heroku create your-app-name
git push heroku main
```

### Deploy Entire App on Railway
1. Push to GitHub
2. Connect repository to Railway
3. Set environment variables
4. Deploy!

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards
- Use ESLint configuration provided
- Follow React best practices and hooks patterns
- Write meaningful commit messages
- Keep components modular and reusable

---

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

---

## 🙌 Acknowledgments

- **Stream.io** - For excellent video and chat SDKs
- **Clerk** - For seamless authentication
- **MongoDB** - For flexible database
- **Inngest** - For reliable background jobs
- **Monaco Editor** - For professional code editing
- **TailwindCSS & DaisyUI** - For beautiful UI components

---

## 📧 Contact & Support

For support, email support@codemeet.io or open an issue on GitHub.

---

## 🎯 Roadmap

- [ ] Code Execution Integration with Piston API
- [ ] Whiteboard Integration for visual problem solving
- [ ] Interview Recording and Playback
- [ ] Advanced Analytics Dashboard
- [ ] Mobile App (React Native)
- [ ] AI-powered Problem Suggestions
- [ ] Interview Templates and Rubrics
- [ ] Payment Integration for Premium Features

---

<div align="center">

**⭐ If you find this project useful, please consider giving it a star! ⭐**

Made with ❤️ by [Gaurav Goswami](https://github.com/ggoswami777)

</div>
