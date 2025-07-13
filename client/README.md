# 🌤️ Weather Forecast App

A full-stack weather application that allows users to search for weather, view a forecast, and **save, edit, and delete** weather data. Built using **React, Node.js, Express, and MongoDB**, it supports **real-time API calls**, **map integration**, and **CRUD operations** via a database.

👉 Live Demo: [https://pma-assessment2.vercel.app](https://pma-assessment2.vercel.app)

---

## ✅ What This App Can Do

### 🌍 Location-Based Weather Search
- Users can enter **any city, town, or landmark**
- Or choose to use **current location** via geolocation

### 📡 Real-Time Weather (via WeatherAPI)
- Displays **temperature**, **humidity**, **conditions**, **wind speed**, and **UV index**
- Enhanced with **weather icons** and emojis

### 📅 5-Day Forecast
- Auto-fetched after each search
- Shows **max/min temperatures**, **condition**, **rain chance**, and **wind**

### 🕒 Hourly Forecast (Optional Toggle)
- View hourly data for the current day
- Toggle on/off for user preference

### 💾 Forecast History (Persistent Storage with MongoDB)
- **Save** forecasts with:
  - Location
  - Date range
  - Summary weather data
- **Read** all saved entries on the `/history` page
- **Edit** temperature, humidity, and conditions
- **Delete** any forecast entry

### 🗺️ Embedded Google Map
- Shows approximate location of city searched
- Fully responsive iframe

### 📱 Responsive Design
- Mobile & tablet friendly
- Adjusts layout and card stacking on small screens

### ℹ️ About Buttons
- “About Me” button for developer info
- “About PMA” button linking to company mission

---

## 🧠 Technical Highlights

| Feature              | Tech Used                  |
|----------------------|----------------------------|
| Frontend             | React (Vite)               |
| Backend              | Node.js + Express          |
| Database             | MongoDB (Mongoose)         |
| API Integration      | WeatherAPI, Google Maps    |
| Deployment           | Vercel (Frontend), Render (Backend optional) |
| Styling              | CSS and Bootstrap          |
| CRUD Functionality   | Full Create / Read / Update / Delete |

---

## 🧪 Use Case Example

1. A user enters **“Seattle”**, selects a **5-day range**
2. App shows:
   - **Current weather**
   - **5-day forecast**
   - Optional hourly toggle
   - Google Map preview
3. User clicks **"Save Forecast"**
4. Forecast is stored in **MongoDB**
5. User can then:
   - Go to **History**
   - **Edit** the saved weather details
   - **Delete** the forecast

---

## 👩‍💻 Author

**Anusha Shivakumar**  
AI Engineer Intern Applicant  
[GitHub](https://github.com/AnushaShivakumar) | [LinkedIn](https://www.linkedin.com/in/anusha-shivakumar/)

---

## 🏢 About PMA

> PM Accelerator (PMA) is a learning accelerator designed to help future product managers and engineers learn practical, portfolio-ready skills. Learn more:  
[🔗 PMA LinkedIn](https://www.linkedin.com/company/product-manager-accelerator)

---

## 🎬 Demo Video

🎥 Link: [Insert Google Drive / Loom / YouTube video link here]

---

## 🌐 Deployment Links

* **Frontend**: [https://pma-assessment2.vercel.app](https://pma-assessment2.vercel.app)
* **GitHub Repo**: [https://github.com/AnushaShivakumar/PMA\_Assessment2](https://github.com/AnushaShivakumar/PMA_Assessment2)

---
