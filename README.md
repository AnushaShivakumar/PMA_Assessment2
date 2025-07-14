# 🌦️ Full Stack Weather Forecast App – Assessment 2 Submission

This is my submission for **Tech Assessment 2** as part of the application for the **AI Engineer Intern position at Product Manager Accelerator (PMA)**.

The goal of this assessment was to create a weather forecasting application that goes beyond a basic search tool — with full **CRUD functionality**, real-time weather via external APIs, smart data validation, and persistent database storage. It’s built using the **MERN stack** and includes thoughtful user experience decisions.

> ✅ Assessment 2 builds directly on top of Assessment 1. Please refer to both sections below for a breakdown of features.

---

## ✅ What I've Built — Summary

- 🌤️ **Search & view** real-time weather for any location (by city, landmark, zip, etc.)
- 📍 Option to fetch weather based on **current GPS location**
- 📅 Display **5-day forecast**
- 🕒 View **hourly updates**
- 🧠 Users can **manually save forecasts** (data isn’t saved by default to prevent clutter)
- 🗃️ **History page** to **Read**, **Edit**, **Update**, or **Delete** saved records
- 🗺️ **Google Maps** integration to visualize searched location
- 🧩 Modular React components, built to scale
- 🌐 Fully responsive UI (mobile, tablet, desktop)

---

## 💻 Tech Stack

| Layer      | Technology Used                     |
|------------|-------------------------------------|
| Frontend   | React (Vite), Axios, Tailwind CSS   |
| Backend    | Node.js, Express                    |
| Database   | MongoDB (via Mongoose)              |
| APIs       | [WeatherAPI](https://www.weatherapi.com/), Google Maps Embed |
| Deployment | Vercel (Frontend), Render (Backend) |

---

## 🎯 Assessment 1 — Core Weather App

**✅ Requirements Covered:**

- Let users search by any location (city, landmark, etc.)
- Show current weather details clearly (temp, humidity, condition, etc.)
- Added icons and visual styling for readability
- Added 5-day forecast with rich card UI
- Used **WeatherAPI** to fetch **real, live weather data**
- Used browser **geolocation API** to fetch weather for user’s current location
- Responsive and polished UI for all screen sizes

---

## 🔧 Assessment 2 — Advanced (Full Stack)

### 2.1 ✅ CRUD Functionality (with MongoDB)

**✔ CREATE:**
- Weather is **not auto-saved**. Users **explicitly choose to save** forecasts they care about.
- This prevents redundant or unnecessary database entries.
- Each saved entry includes: location, date range, current weather info, and 5-day forecast data.
- Location + date validation is handled at the backend before saving.

**✔ READ:**
- A dedicated **History page** displays all saved weather records.
- Forecast cards include detailed data, all retrieved from MongoDB.

**✔ UPDATE:**
- Users can **inline edit** saved entries (e.g., temp, humidity, condition).
- After editing, they can **Save changes**, which updates the database.

**✔ DELETE:**
- Users can remove any saved forecast from the database with one click.

---

### 2.2 ✅ API Integration

- 🗺️ Integrated **Google Maps Embed API** to display a visual map for the searched location.
- ❗ While YouTube or other APIs were optional, I focused on solid weather + map integration for clarity.

---

## 📂 Project Structure

```
PMA_Assessment2/
├── client/               # React frontend
│   ├── components/       # Modular components like WeatherCard, SearchBar, MapView, etc.
│   ├── pages/            # History page and main view
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── server/               # Node.js + Express backend
│   ├── models/           # Mongoose models
│   ├── routes/           # Forecast API routes (CRUD)
│   └── server.js         # Entry point for backend server
├── .env.example          # Environment variable samples
└── README.md
```

---

## 🧰 Technologies Used

### **Frontend**

* ⚛️ **React** (with Vite) — for a fast, component-based UI
* 🎨 **Tailwind CSS** — utility-first responsive styling
* 🌐 **Axios** — API requests
* 📍 **Geolocation API** — fetch user’s current position
* 🗺️ **Google Maps Embed API** — map integration
* 🧪 **React Hooks (useState, useEffect, useNavigate)** — for state and routing control
* 🔗 **React Router** — navigation between homepage and history
* 📦 **Vercel** — for frontend deployment

### **Backend**

* 🌐 **Node.js** + **Express.js** — REST API and server logic
* 🛠️ **Mongoose** — MongoDB object modeling
* 🧪 **CORS** + **dotenv** — middleware and config setup
* 🚀 **Render** — for backend deployment

### **Database**

* 🍃 **MongoDB** (via Atlas cloud) — NoSQL document-based storage

### **External APIs**

* 🌤️ **[WeatherAPI](https://www.weatherapi.com/)** — real-time and forecast weather data
* 🗺️ **Google Maps Embed API** — visual location rendering

### **Dev Tools & Utilities**

* 🔍 **VS Code** — development
* 🧪 **Postman** — API testing
* 📁 **Git** & **GitHub** — version control & collaboration
* ⚙️ **.env files** — for secure API key and DB URI configuration

---
