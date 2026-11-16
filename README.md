# FARMORA by AgriMitra AI – Intelligent Agriculture & Farmer Empowerment Platform 🌱

> **National AgriTech Innovation & Farmer Empowerment Showcase 2026**  
> *Pioneering sustainable digital agriculture through intelligent water management, agricultural market price intelligence, bilingual voice AI, and circular agro-waste monetization & resource sharing.*

---

## 🌟 Problem Statement & Solution

### The Core Challenges:
Farmers face several interconnected challenges in modern agriculture:
1. **Inefficient Water Management:** Uncontrolled flood irrigation and lack of crop-specific water calculations lead to groundwater depletion and power wastage.
2. **Lack of Reliable Agricultural Market Prices:** Farmers lack transparent wholesale price comparison across regional APMC mandis, losing up to 20% to village middlemen.
3. **Language and Technology Barriers:** Complex web portals and typing interfaces exclude rural farmers who need timely farming advice in their regional languages like Tamil.
4. **Underutilization of Agricultural Waste:** Millions of tons of crop residues are burned or discarded annually, causing environmental pollution and missing valuable composting, mushroom cultivation, and monetization opportunities.

### The Proposed Solution: AgriMitra AI / Farmora
**AgriMitra AI** is an integrated AI-powered digital agriculture platform designed to empower farmers through four interconnected solutions:

1. **WaterWise AI – Intelligent Irrigation Assistant:** Provides crop-based water requirement calculations (FAO-56 Penman-Monteith) and intelligent irrigation recommendations with pump runtime schedules.
2. **MandiMate – Smart Agricultural Market Intelligence:** Offers agricultural market price comparison across regional APMC mandis and selling-value estimation with transport deductions to support informed marketing decisions.
3. **FarmVoice AI – Voice-Based Farming Assistant:** Provides accessible voice-based agricultural assistance in regional languages, including Tamil and English, with real-time audio synthesis.
4. **Farm Waste to Wealth – Composting, Biomass Reuse & Resource Sharing:** Promotes sustainable agricultural waste utilization through scientific composting, biomass reuse (oyster mushrooms & bio-fuel briquettes), and community equipment sharing opportunities.

---

## 🎨 Design Philosophy & Color Palette

- **Palette**: Forest and Emerald Greens (`#14532d`, `#15803d`, `#22c55e`), Soft Earthy Creams (`#fbf9f4`, `#f7f4ea`), Crisp Clean Whites (`#ffffff`), and Harvest Amber Gold (`#d97706`).
- **Typography**: Plus Jakarta Sans & Inter for clean numerical telemetry, paired with **Mukta Malar** for authentic, readable Tamil typography.
- **Farmer-Friendly UI**: High contrast, tactile cards, intuitive icons, interactive sliders, voice triggers, and zero jargon.
- **Bilingual Core**: Full seamless toggle between **English** and **தமிழ் (Tamil)** across every navigation link, calculation engine, diagnostic advisory, and conversational voice response.

---

## 🚀 The Four Interconnected AI Solutions

### 1. 💧 WATERWISE AI – Intelligent Irrigation Assistant
- **Crop Hydraulic Engine**: Select from 8 key regional crops (Paddy, Sugarcane, Cotton, Maize, Banana, Groundnut, Tomato, Chili) with FAO crop evapotranspiration coefficients ($K_c$) mapped across 4 growth stages (Seedling, Vegetative, Flowering/Peak, Maturity).
- **Soil Texture Profiles**: Clay, Loamy, Sandy, Black Cotton, Red Laterite, Alluvial Delta with respective infiltration and capillary water holding capacities.
- **Acreage & Unit Flexibility**: Input in Acres, Hectares, or Cents.
- **Irrigation Efficiency Model**: Drip (90% efficiency), Micro-Sprinkler (75%), Furrow (60%), and Traditional Flood (45%).
- **Outputs**:
  - Daily gross water requirement in Liters.
  - Weekly volume in Cubic Meters ($m^3$).
  - Pump run-time calculation customized for 3 HP, 5 HP, or 7.5 HP electric/solar motors.
  - Direct water savings percentage vs traditional flood (e.g. 45% water saved).
  - Optimal diurnal irrigation window (e.g. 5:30 AM – 8:30 AM to prevent solar evaporation).
  - 7-Day personalized irrigation calendar.
  - Printable / Exportable irrigation advisory schedule.

---

### 2. 📈 MANDIMATE – Smart Agricultural Market Intelligence
- **Multi-Mandi Price Comparison**: Real-time modal, minimum, and maximum prices across major Tamil Nadu and regional APMC regulated markets (Thanjavur, Madurai, Coimbatore, Erode, Trichy, Salem, Perambalur, Tiruvannamalai, Virudhunagar).
- **Selling-Value & Net Profit Estimator**:
  - Input harvest quantity in Quintals, 50kg/75kg Bags, Tonnes, or Kilograms.
  - Quality grading multiplier: Grade A Premium (+8%), Grade B Standard (100%), Grade C Mixed (-10%).
  - Transport logistics deduction: Real-time calculation factoring vehicle type (Tractor Trolley, Tata Ace mini-truck, 4-Tonne Lorry, Auto) and distance in kilometers.
  - Mandi fee & weighing cess deduction (1.5% APMC fee).
  - **Net Farmer Take-Home Payout (₹)**.
  - **Middleman Arbitrage Gain**: Highlights exact extra rupees earned (e.g. "You earn **₹14,500 MORE** by using MandiMate compared to local village brokers!").
- **7-Day Price Trend & Historical Outlook**: Visual price momentum bar chart.
- **Government MSP Benchmark**: Live comparison showing whether current APMC modal price exceeds Central Government Minimum Support Price (MSP).
- **Automated Price Alerts**: Set trigger price thresholds to receive SMS/WhatsApp price spike alerts.
- **APMC Market Directory**: Verified direct telephone numbers for Regulated Market Committee Secretaries.

---

### 3. 🎙️ FARMVOICE AI – Voice-Based Farming Assistant
- **Microphone Input**: Real-time speech recognition powered by Web Speech API (`webkitSpeechRecognition` / `SpeechRecognition`) with intelligent fallback simulator.
- **Bilingual Fluency**: Speaks and understands both **Tamil (தமிழ்)** and **Indian English**.
- **Voice Synthesis (Text-to-Speech)**: Integrated audio synthesizer (`window.speechSynthesis`) speaking answers aloud for non-literate farmers.
- **Audio Waveform Visualizer**: Pulsing microphone state with animated audio frequencies.
- **Pre-Seeded Regional Query Chips**:
  - *"What is the market price of paddy in Thanjavur today?"* / *"இன்று தஞ்சாவூர் மண்டி நெல் கொள்முதல் விலை என்ன?"*
  - *"Where should I sell my shallots for maximum profit?"* / *"சின்ன வெங்காயத்தை எந்த மண்டியில் விற்றால் அதிக லாபம் கிடைக்கும்?"*
  - *"How much water is needed for 2 acres of sugarcane?"* / *"2 ஏக்கர் கரும்பு பயிருக்கு ஒரு நாளைக்கு எவ்வளவு தண்ணீர் தேவை?"*
  - *"How to rent a straw baler nearby?"* / *"எனக்கு அருகில் வைக்கோல் கட்டும் இயந்திரம் எப்படி வாடகைக்கு எடுப்பது?"*
  - *"What are the government subsidies for drip irrigation in Tamil Nadu?"* / *"தமிழ்நாட்டில் சொட்டு நீர் பாசனத்திற்கு அரசு வழங்கும் மானியம் எவ்வளவு?"*

---

### 4. ♻️ FARM WASTE TO WEALTH – Composting, Biomass Reuse & Resource Sharing
- **1. Biomass Reuse & Monetization**:
  - Residue selection: Rice straw, Sugarcane bagasse/trash, Coconut husk & coir pith, Banana pseudostem & leaves, Vegetable/market residue.
  - Quantity slider: 0.5 to 30 Tons.
  - Economic revenue calculator: High-margin by-products including Oyster mushroom cultivation (₹70,000 - ₹90,000/ton), Vermicompost, Bio-coal fuel briquettes, Coir pith blocks, and Banana craft fibers.
  - $CO_2$ emissions prevented by avoiding stubble burning (kg of $CO_2$ saved).
  - Verified buyers & off-taker directory with direct connection simulator.
- **2. Scientific Composting Hub**:
  - Three detailed composting protocols:
    - *Rapid Vermicomposting (Eisenia fetida)* (45 days, detailed layering, moisture 50-60%).
    - *Thermophilic Aerobic Windrow Composting* (60 days, 55-65°C heat cycle for weed seed destruction).
    - *Microbially-Accelerated Bokashi / Biochar Fermentation* (20 days anaerobic fermentation).
  - Interactive Carbon-to-Nitrogen (C:N) ratio balancer for browns (straw) and greens (cow dung).
- **3. Agro-Resource Sharing Hub**:
  - *Community Equipment Sharing*: Rent nearby straw balers, biomass shredders, tractor super seeders, and compost turners from neighbor farmers at transparent hourly/acre rates.
  - *Biomass Surplus Exchange*: Buy, sell, or barter crop residues with dairy farms and mushroom growers.
  - Interactive modal to list new equipment or surplus biomass.

---

### 5. 🩺 CROP DOCTOR AI (Bonus Module) – Plant Disease & Health Diagnosis
- **Computer Vision Leaf Pathology**: Drag-and-drop or upload symptomatic leaf photos.
- **Interactive Scanning Animation**: Laser scan overlay with cellular pattern analysis telemetry.
- **6 Realistic Demo Farm Samples**:
  - *Rice Blast* (*Magnaporthe oryzae*)
  - *Tomato Early/Late Blight* (*Phytophthora infestans*)
  - *Cotton Leaf Curl Virus* (*CLCuV*)
  - *Sugarcane Red Rot* (*Colletotrichum falcatum*)
  - *Banana Black Sigatoka* (*Mycosphaerella musicola*)
  - *Healthy Crop Tissue* (Optimal Chlorophyll Vigor)
- **Dual Remedy Action Plan**:
  - *Organic & Biological Solutions*: Neem oil (10,000 PPM), *Pseudomonas fluorescens*, *Trichoderma viride*, Panchagavya, Bordeaux mixture.
  - *Chemical Treatments*: Mancozeb, Tricyclazole, Metalaxyl with exact dilution rates, safety precautions, and mandatory pre-harvest waiting periods.

---

## 📊 Additional Platform Features

1. **Farmer Command Center (Dashboard)**:
   - Personalized greeting and farm health telemetry (Soil Health Index: 88/100, Total acreage, Water saved this month).
   - NPK Macro-nutrient field status scorecard (Nitrogen, Phosphorus, Potassium, Soil Organic Carbon, pH 6.8).
   - Scheduled farm tasks and quick shortcuts to all 4 AI modules.

2. **Live Agri-Weather & Mandi Market Section**:
   - Micro-climate weather for major agricultural zones (Thanjavur, Coimbatore, Madurai, Salem).
   - Agrochemical Spray Window advisory (*OPTIMAL*, *MODERATE*, or *RESTRICTED*).
   - 5-Day agro-weather forecast.
   - Searchable wholesale Mandi commodity rate table.

3. **Interactive Seasonal Crop Calendar**:
   - Milestones for Kuruvai, Samba/Thaladi, and Navarai/Rabi seasons covering land prep, transplanting, top-dressing, irrigation peaks, and harvesting.

---

## 🛠️ Technology Stack

- **Frontend Core**: React 18 (UMD CDN), Babel Standalone (in-browser JSX compilation).
- **Styling**: Tailwind CSS (CDN configured with agricultural palette: emerald, brand greens, and earthy creams).
- **Audio & Speech**: Web Speech API (`SpeechRecognition` & `SpeechSynthesis`) with native browser integration.
- **Typography**: Google Fonts (*Plus Jakarta Sans*, *Inter*, *Mukta Malar* for authentic Tamil).
- **No Build Step Required**: 100% self-contained static architecture that runs instantly via local HTTP server or static file hosting.

---

## ⚡ How to Run Farmora Locally

1. **Double click** `start_farmora.bat` or run:
   ```powershell
   ./start_farmora.ps1
   ```
2. Or run any static web server:
   ```bash
   python -m http.server 3000
   ```
3. Open `http://localhost:3000` in your browser.
