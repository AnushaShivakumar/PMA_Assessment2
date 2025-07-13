<!-- @format -->

# 🌤️ Weather Forecast App

A sleek and interactive weather forecast application built with **React**, providing users with real-time weather updates, a 5-day forecast, and an optional hourly breakdown—powered by the WeatherAPI.

---

## ✨ Features

### 🌍 Location-Based Search

- 🔍 Search for any city or region.
- 📍 Use your current location via geolocation for instant forecasts.

### 📦 Real-Time Weather Details

- 🌡️ Temperature (actual and feels-like)
- 💧 Humidity
- ☁️ Cloud cover
- 🌬️ Wind speed and direction
- ☀️ UV index

### 📅 5-Day Forecast

- Visually rich cards showing:
  - Max & Min Temperatures
  - Humidity
  - Rain chance
  - Wind speed
  - Weather conditions with icons

### 🕒 Hourly Forecast (Toggle)

- Toggle to display hourly weather for today.
- Displays:
  - Hourly temperature
  - Weather condition icons
  - Timestamp

### 🗺️ Interactive Map View

- Embedded **Google Maps** preview of the forecast location.

### 👩‍💻 About Sections

- Buttons in the footer linking to:
  - **About Me** (Developer Info)
  - **About PMA** (Project/Motivation Overview)

### 📜 History (UI Button in place)

- Placeholder for future implementation of search history or previous forecasts.

### 🎨 Responsive & Accessible Design

- Clean, modern interface with soft gradients and dark card elements.
- Fully responsive layout for desktop and mobile.

---

## 🚀 Getting Started

### Prerequisites

- Node.js `>= 14`
- WeatherAPI key ([Get one here](https://www.weatherapi.com/))

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/weather-forecast-app.git
   cd weather-forecast-app
   ```

````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Add your API Key**

   Create a `.env` file in the root:

   ```bash
   VITE_WEATHER_API_KEY=your_api_key_here
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

---

## 🧠 Project Structure

```
src/
├── components/
│   ├── SearchBar.jsx
│   ├── WeatherCard.jsx
│   ├── ForecastList.jsx
│   ├── HourlyForecast.jsx
│   ├── MapView.jsx
│   ├── InfoButton.jsx
│   └── Footer.jsx
├── services/
│   └── weatherService.js
├── App.jsx
└── App.css
```

---

## 🛠️ Technologies Used

* ⚛️ React (Vite)
* 📡 WeatherAPI
* 🗺️ Google Maps Embed
* 📦 CSS Modules / Vanilla CSS
* 🧪 DevTools for debugging

---

## 🙌 Author

**Anusha Shiva Kumar**
Frontend Developer passionate about clean design, responsive layouts, and intuitive UI/UX.
\[LinkedIn] · \[GitHub] · \[Portfolio]

---
````
