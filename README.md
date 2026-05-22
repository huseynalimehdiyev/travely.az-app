# 🗺️ Travely – Azerbaijan Travel Assistant (MVP)

Welcome to *Travely*, an advanced, AI-powered travel assistant meticulously designed for tourists visiting Azerbaijan. Operating as an elite, high-tier digital concierge, Travely transforms how global travelers plan trips, discover authentic culinary gems, navigate transit systems, and experience local culture across Azerbaijan's historical regions.

This repository hosts the full production-ready MVP code, featuring a state-of-the-art modular dashboard architecture, live contextual AI chat integration, and precise up-to-date transit structures.

---

## 🎯 Project Vision & Core Strategy
Travely bridges the gap between chaotic general search engine results and expensive personal tour guides. Operating with a hyper-localized intelligence matrix, it serves real-time data tuned dynamically to the visitor's selected language, target Azerbaijani city, budget range, and precise interest clusters.

### Key Targets:
* *Hyper-Localized AI Concierge:* Behaves like an elite local guide, offering realistic advice, optimal travel windows, and authenticated hidden gems.
* *Up-to-Date Transit Integrity:* Eliminates outdated regional cost metrics by implementing the verified *0.60 AZN* unified Baku metro and public bus transit fares.
* *Intuitive UI/UX Overhaul:* Replaces complex single-page grid layouts with an asynchronous, state-driven left sidebar menu, perfect for mobile-first scanning and seamless state management.

---

## 👥 Meet the Development Team
*Huseynali Mehdiyev,
*Amin İsrafilov
---

## 🌍 Core Modules & System Architecture

### 1. 🗺️ Travel Planner Matrix
* *Dynamic Intake:* Accepts destination adjustments (Baku, Gabala, Ismayilli, Sheki, Guba, Lankaran), duration matrix (days), budget brackets, and personal lifestyle profiles (Food, Nature, Culture, Nightlife).
* *Structured Output Engine:* Generates real-time, day-by-day chronologically mapped itineraries formatted to fit precise UI components (Time, Cost, Activity, Exact Location, Description).

### 2. 🛬 "I Just Landed" & Transit Hub
* *Arrival Vector Navigation:* Comprehensive guide detailing immediate exit steps from Heydar Aliyev International Airport (GYD) using the official Aero Express bus (to 28 May Station) or validated Baku Taxi tariffs.
* *BakuKart Onboarding:* Instant onboarding steps instructions on sourcing, loading, and scanning RFID transit media at electronic access gates.
* *Live Official Integration Links:*
    * *Official Metro Map & Live Schedules* 🔗 [Baku Metropoliten Official Site](http://baku-metro.gov.az/)
    * *Live Bus Tracking & Digital Transit* 🔗 [AYNA Portal (Rəqəmsal İnkişaf və Nəqliyyat Nazirliyi)](https://mincom.gov.az/)
    * *Deep-Linked Navigation* 🔗 Integrated Google Maps transit routes directly focused on active coordinates.

### 3. 🏨 Accommodations & Shopping Hub
* *Tiered Stays Database:* Micro-filtered categories spanning Luxury stays (e.g., Fairmont Baku Flame Towers), Mid-range boutique hotels, and highly secure budget-friendly hostels.
* *Commercial & Cultural Retail:* Showcases high-end contemporary retail centers (Deniz Mall, Port Baku Mall) alongside historical traditional bazaars (Yaşıl Bazar, Təzə Bazar) and artisan souvenir vendors in Icherisheher.

### 4. 🍽️ Gastronomy & Culture Vault
* *Culinary Curations:* Dedicated profiles for iconic dishes (Plov/Shah Plov, Dolma, Qutab, Saj, Kebabs) tagged cleanly with price brackets, ingredient indicators, and certified halal statuses.
* *Historical Landmarks:* Pre-populated, highly performant component lists showcasing top regional attractions (Heydar Aliyev Center, Gobustan, Palace of the Shaki Khans) operating instantly before external LLM queries respond.

### 5. 💬 Fullscreen Conversational Travel AI
* *State-Aware Interaction:* Context-locked chat system utilizing active language models. If the user shifts the active global selector to Arabic and selects "Sheki", the engine limits processing scope exclusively to Sheki's historical context rendered in Arabic.

---

## 🎨 UI/UX Specifications
* *Design Paradigm:* Dark deep slate navy background palette #0f172a juxtaposed cleanly with highly bright accent cards (#1e293b), custom rounded alert boundaries, desaturated tags, and sharp typography.
* *Sidebar Framework:* Left-aligned, collapsible asynchronous sidebar control layer eliminating full-page refreshes.
* *Responsive Scaling:* Strict flex/block liquid layout tailored perfectly for viewing on mobile browsers during walking tours or active navigation.

---

## ⚙️ Engineering Tech Stack

### Frontend Architecture
* *Framework:* React 18+ (Functional Components & Hooks)
* *Styling Engine:* Tailwind CSS 3+ for ultra-fast utility styling
* *Icons Framework:* lucide-react for responsive minimalist iconography

### Backend Architecture
* *Core Engine:* Python 3.10+ using *FastAPI* for high-throughput, low-latency performance
* *AI Orchestration:* Google Gemini / OpenAI structural streaming integrations
* *Data Models:* Pydantic validation structures ensuring reliable JSON parsing

---

## 🔌 API Blueprint & Endpoint Mapping

### POST /api/v1/plan-trip
Handles algorithmic generation of itineraries based on custom parameters.
```json
{
  "city": "Baku",
  "days": 3,
  "budget": "Mid-range",
  "interests": ["culture", "food"],
  "language": "en"
}
