# 🇦🇿 Travely — Azerbaijan Travel Assistant (SaaS)
Travely is a modern, AI-powered travel platform designed to help tourists explore Azerbaijan with ease. Built as a full-stack SaaS application, it provides intelligent trip planning, real-time arrival guidance, curated destinations, and a conversational travel assistant.
Here’s a clean, production-ready **README.md** tailored for your upgraded **Travely – Azerbaijan Travel Assistant SaaS**:

# 🇦🇿 Travely — Azerbaijan Travel Assistant (SaaS)

Travely is a modern, AI-powered travel platform designed to help tourists explore Azerbaijan with ease. Built as a full-stack SaaS application, it provides intelligent trip planning, real-time arrival guidance, curated destinations, and a conversational travel assistant.


## ✨ Features

### 🧭 Modular Dashboard (Modern UX)

* Collapsible **Sidebar Navigation**
* Clean separation of features into focused modules:

  * 🗺️ Travel Planner (AI itinerary generator)
  * 🛬 I Just Landed (Arrival + transport hub)
  * 🏨 Accommodations & Shopping
  * 🍽️ Gastronomy & Culture
  * 💬 Ask Travel AI (chat interface)

### 🌍 Global Controls

* 🌐 Multi-language support: **EN / RU / TR / AR**
* 📍 Dynamic city switching:

  * Baku, Gabala, Ismayilli, Sheki, Guba, Lankaran
* Instant UI updates based on city & language


## 🚀 Core Modules

### 🗺️ Travel Planner

* AI-generated multi-day itineraries
* Inputs:

  * City
  * Days
  * Budget
  * Interests
* Output: structured JSON mapped to UI cards


### 🛬 I Just Landed (Arrival Hub)

* Step-by-step arrival guidance
* Real transport pricing (⚠️ Updated):

  * **Metro/Bus fare: 0.60 AZN**
* Includes:

  * Aero Express route (GYD → 28 May)
  * Taxi pricing insights
  * BakuKart usage guide

#### 🔗 Official Transit Tools

* Metro Map & Schedule
  [http://baku-metro.gov.az/](http://baku-metro.gov.az/)
* Digital Transport Platform (AYNA)
* Google Maps live navigation


### 🏨 Accommodations & Shopping

* Hotels categorized:

  * Luxury
  * Mid-range
  * Budget / Hostels
* Shopping:

  * Modern malls (Deniz Mall, Port Baku)
  * Traditional bazaars (Taza, Yasil)
  * Souvenir hubs (Icherisheher)


### 🍽️ Gastronomy & Culture

* Restaurants
* Local cuisine
* Museums & heritage sites


### 💬 Ask Travel AI

* Fullscreen conversational assistant
* Context-aware (city + language)
* Concierge-level responses


## 🧠 AI Behavior (System Design)

The AI acts as:

> **Elite Local Concierge of Azerbaijan**

### Rules:

* Always uses selected language (no mixing)
* Uses accurate transport pricing (**0.60 AZN**)
* Recommends BakuKart usage:

  * Available at airport & metro stations
* Returns structured JSON for itineraries:

```json
[
  {
    "day": 1,
    "time": "09:00",
    "title": "Visit Old City",
    "cost": "Free",
    "location": "Icherisheher",
    "description": "Explore historic streets and landmarks"
  }
]
```

---

## 🏗️ Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* Lucide React Icons
* State: Context API / Zustand (recommended)

### Backend

* FastAPI (Python)
* RESTful architecture
* AI integration ready (OpenAI / local LLM)


## 📡 API Specification

### 1. Plan Trip

```
POST /api/v1/plan-trip
```

**Request:**

```json
{
  "city": "Baku",
  "days": 3,
  "budget": "medium",
  "interests": ["culture", "food"],
  "language": "EN"
}
```

### 2. AI Chat

```
POST /api/v1/chat
```

### 3. Destinations

```
GET /api/v1/destinations?city=Baku&category=food&lang=EN
```

**Categories:**

* places
* food
* museums
* hotels
* shopping


### 4. Arrival Guide

```
GET /api/v1/arrival-guide?city=Baku&lang=EN
```


## 🎨 UI/UX Principles

* Minimalist, non-cluttered interface
* Card-based design
* Smooth transitions (no reloads)
* Mobile-first responsive layout
* Clear CTAs for navigation & actions


## 🔒 Production Readiness

* Modular architecture
* Scalable API design
* Clean separation of concerns
* Ready for:

  * Authentication (JWT)
  * Payments (Stripe)
  * Bookings integration


## 📈 Future Improvements

* Real-time transport APIs
* Hotel booking integrations
* Offline itinerary mode
* AI voice assistant
* Personalized recommendations

