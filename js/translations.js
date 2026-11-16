// FARMORA by AgriMitra AI – Bilingual Dictionary (English & Tamil)
const translations = {
  en: {
    // Navigation
    brandName: "FARMORA",
    tagline: "Intelligent Agriculture & Farmer Empowerment Platform",
    home: "Home",
    modules: "Core AI Solutions",
    waterwise: "WaterWise AI",
    mandimate: "MandiMate",
    farmvoice: "FarmVoice AI",
    wastewealth: "Waste to Wealth",
    cropdoctor: "Crop Doctor AI",
    dashboard: "Farmer Dashboard",
    weatherMandi: "Weather & Mandi",
    cropCalendar: "Crop Calendar",
    aboutUs: "About Project",
    contactUs: "Farmer Support",
    login: "Farmer Login",
    register: "Register Farm",
    helpline: "Toll-Free Kisan Help",
    langSwitch: "தமிழ்",

    // Hero Section
    heroBadge: "National AgriTech Innovation 2026 • AgriMitra AI",
    heroTitle1: "Intelligent Farming,",
    heroTitle2: "Empowered Farmers.",
    heroSubtitle: "AgriMitra AI is an integrated digital agriculture platform delivering four interconnected solutions: precision water management, agricultural market price comparison, voice-based assistance in regional languages, and sustainable agro-waste utilization.",
    getStarted: "Launch 4 AI Solutions",
    exploreTools: "Explore Modules",
    demoVideo: "Watch Walkthrough",
    statFarmers: "42,000+ Farmers Enrolled",
    statWaterSaved: "3.4 Billion Liters Saved",
    statAccuracy: "₹14,500 Avg Profit Gain / Lot",
    statWealth: "₹18.4 Cr Waste Monetized",

    // Features Section
    featuresTitle: "Four Interconnected AI Solutions",
    featuresSubtitle: "Engineered specifically to solve smallholder farming challenges: water efficiency, price transparency, language barriers, and waste underutilization.",
    
    // Tool 1: WaterWise AI
    tool1Title: "WaterWise AI",
    tool1Subtitle: "Intelligent Irrigation Assistant",
    tool1Desc: "Provides crop-based water requirement calculations based on FAO-56 Penman-Monteith, soil texture, growth stage, and motor run-time schedules.",

    // Tool 2: MandiMate
    tool2Title: "MandiMate",
    tool2Subtitle: "Smart Agricultural Market Intelligence",
    tool2Desc: "Offers agricultural market price comparison across regional APMC mandis and selling-value estimation with transport deductions to support informed marketing decisions.",

    // Tool 3: FarmVoice AI
    tool3Title: "FarmVoice AI",
    tool3Subtitle: "Voice-Based Farming Assistant",
    tool3Desc: "Provides accessible voice-based agricultural assistance in regional languages, including Tamil and English, with spoken audio synthesis.",

    // Tool 4: Farm Waste to Wealth
    tool4Title: "Farm Waste to Wealth",
    tool4Subtitle: "Composting, Biomass Reuse & Resource Sharing",
    tool4Desc: "Promotes sustainable agricultural waste utilization through rapid composting, high-value mushroom/biomass reuse, and community equipment sharing.",

    // Tool 5: Crop Doctor (Bonus)
    tool5Title: "Crop Doctor AI",
    tool5Subtitle: "Plant Disease & Health Diagnosis",
    tool5Desc: "Computer vision leaf disease diagnosis with dual organic biological controls and safe chemical treatment plans.",

    launchTool: "Open Solution",

    // Why Choose Farmora
    whyTitle: "Why Farmers Choose AgriMitra AI & Farmora",
    whySubtitle: "Built ground-up with rural agronomic constraints in mind.",
    benefit1Title: "45% Water Conserved",
    benefit1Desc: "Precision pump run-times prevent root asphyxiation, power wastage, and deplete groundwater aquifers.",
    benefit2Title: "Maximum Market Realization",
    benefit2Desc: "Identifies top-paying APMC mandis and eliminates village broker deductions with transparent profit calculations.",
    benefit3Title: "Zero Language Barrier",
    benefit3Desc: "Speak naturally in Tamil or English. Web Speech intelligence speaks back clear agronomist guidance.",
    benefit4Title: "Zero Stubble Burning",
    benefit4Desc: "Turns crop residues into ₹20,000+ extra income per hectare through mushrooms, vermicomposting, and machinery sharing.",

    // How It Works
    howTitle: "Simple 4-Step Farming Workflow",
    step1Title: "1. Select Crop & Field Area",
    step1Desc: "Input your crop, land acreage, and local soil composition.",
    step2Title: "2. Check Water & Market Prices",
    step2Desc: "Get exact pump run-time and compare today's top mandi rates.",
    step3Title: "3. Ask Spoken Voice Queries",
    step3Desc: "Speak in Tamil or English to diagnose crop issues or find nearby shared machinery.",
    step4Title: "4. Monetize Harvest & Residues",
    step4Desc: "Sell at optimal market windows and convert residual biomass into profitable compost or mushrooms.",

    // WaterWise AI
    wwTitle: "WaterWise AI – Intelligent Irrigation Assistant",
    wwSubtitle: "Crop Evapotranspiration (ETc) & Soil Hydraulic Calculator",
    selectCrop: "Select Crop",
    selectSoil: "Soil Texture Type",
    enterArea: "Land Cultivation Area",
    areaUnit: "Unit",
    irrigationMethod: "Irrigation System",
    growthStage: "Current Growth Stage",
    weatherCondition: "Current Weather Condition",
    calculateWater: "Calculate Water Requirement",
    calculating: "Computing FAO-56 Penman Algorithm...",
    dailyRequirement: "Daily Crop Water Need",
    weeklyRequirement: "Weekly Volume Required",
    recommendedRunTime: "Suggested Pump Run-Time",
    waterSavedVsFlood: "Water Saved vs Traditional Flood",
    bestIrrigationWindow: "Optimal Irrigation Window",
    irrigationSchedule: "7-Day Irrigation Schedule",
    waterTipsTitle: "Precision Water Conservation Tips",
    litersPerDay: "Liters / Day",
    litersTotal: "Liters",
    cubicMeters: "m³ / Week",
    hoursPerDay: "Hours / Day",

    // MandiMate AI
    mmTitle: "MandiMate – Smart Agricultural Market Intelligence",
    mmSubtitle: "Market Price Comparison & Selling-Value Estimation Engine",
    estGrossRevenue: "Gross Selling Value",
    estNetPayout: "Net Farmer Payout",
    estDeductions: "Transport & Market Deductions",
    estProfitGain: "Extra Profit vs Middleman",
    selectCommodity: "Select Commodity",
    enterQuantity: "Harvest Quantity to Sell",
    selectGrade: "Quality Grade",
    chooseMarket: "Destination APMC Mandi",
    logisticsVehicle: "Transport Mode",

    // Farm Voice
    fvTitle: "FarmVoice AI – Voice-Based Farming Assistant",
    fvSubtitle: "Conversational Regional Intelligence in Tamil & English",
    tapToSpeak: "Tap Microphone to Speak",
    listening: "Listening carefully...",
    processingVoice: "Understanding your agriculture query...",
    speakInLanguage: "Speak in Tamil or English",
    quickQuestionsTitle: "Or tap popular farmer questions:",
    assistantResponse: "Agronomist Response",
    audioPlaying: "Playing Spoken Audio...",
    stopAudio: "Stop Audio",
    listenAgain: "Listen Spoken Answer",
    micPermissionNotice: "Microphone access is enabled via Web Speech API with native speech synthesis.",

    // Waste to Wealth
    w2wTitle: "Farm Waste to Wealth – Composting, Biomass Reuse & Resource Sharing",
    w2wSubtitle: "Sustainable Agricultural Waste Management & Community Sharing Hub",
    selectWasteType: "Select Agricultural Residue Type",
    enterWasteQuantity: "Residue Quantity (Tons)",
    potentialIncome: "Estimated Economic Value",
    co2Averted: "CO2 Emissions Prevented",
    productsGenerated: "High-Margin By-Products",
    stepByStepGuide: "Step-by-Step DIY Conversion Guide",
    marketBuyers: "Verified Agri-Recyclers & Buyers",
    connectBuyer: "Connect Buyer",
    burnPreventionAlert: "By converting this waste instead of burning, you protect community health and generate valuable organic manure.",

    // Dashboard
    dashTitle: "Farmer Command Center",
    dashGreeting: "Vanakkam, Farmer Murugan!",
    dashLocation: "Thanjavur Delta Zone, Tamil Nadu",
    farmHealthIndex: "Soil Health Index",
    activeCrops: "Active Cultivations",
    totalAcreage: "Total Farm Area",
    waterSavedMonth: "Water Conserved This Month",
    upcomingTasks: "Scheduled Farm Tasks",
    soilMetrics: "Macro-Nutrient Field Status (NPK)",
    quickActions: "Quick AI Shortcuts",

    // Weather & Mandi
    wmTitle: "Live Agri-Weather & Mandi Price Ticker",
    wmSubtitle: "Micro-climate forecasting and live wholesale market arrivals",
    selectDistrict: "Select Agricultural District",
    fiveDayForecast: "5-Day Weather Outlook",
    sprayAdvisory: "Agrochemical Spray Window Advisory",
    optimalSpray: "Optimal Spray Window Today",
    mandiPricesTitle: "Wholesale Mandi Commodity Rates",
    commodity: "Commodity",
    variety: "Variety",
    market: "Mandi Market",
    minPrice: "Min Price (₹/Q)",
    maxPrice: "Max Price (₹/Q)",
    modalPrice: "Modal Price (₹/Q)",
    trend: "24h Trend",
    searchCommodity: "Search crop or mandi...",

    // Crop Calendar
    ccTitle: "Interactive Crop Calendar & Season Planner",
    ccSubtitle: "Milestone roadmap for Kuruvai, Samba, and Navarai cultivation cycles",

    // About & Contact
    aboutTitle: "About AgriMitra AI & Farmora",
    hackathonTitle: "AgriMitra AI – Intelligent Agriculture Platform Showcase",
    problemStatement: "Problem Statement",
    solutionArch: "Solution Architecture",
    sdgAlignment: "UN Sustainable Development Goals (SDGs)",
    contactTitle: "Farmer Support & Innovation Feedback",
    contactSubtitle: "Have questions or need technical support? We are here for farmers.",
    farmerHelplineNumber: "1800-419-3276 (Toll-Free 24x7)",
    sendFeedback: "Submit Message",
    footerDisclaimer: "Farmora by AgriMitra AI is an intelligent agriculture platform designed to empower farmers with smarter decisions. Consult local Krishi Vigyan Kendra (KVK) agronomists for certified field guidance."
  },

  ta: {
    // Navigation
    brandName: "ஃபார்மோரா (FARMORA)",
    tagline: "அக்ரிமித்ரா AI – நுண்ணறிவு விவசாயம் & உழவர் மேம்பாட்டு தளம்",
    home: "முகப்பு",
    modules: "4 முக்கிய தீர்வுகள்",
    waterwise: "வாட்டர்வைஸ் AI",
    mandimate: "மண்டிமேட்",
    farmvoice: "ஃபார்ம்வாய்ஸ் AI",
    wastewealth: "கழிவிலிருந்து செல்வம்",
    cropdoctor: "பயிர் மருத்துவர் AI",
    dashboard: "உழவர் டாஷ்போர்டு",
    weatherMandi: "வானிலை & மண்டி விலை",
    cropCalendar: "பயிர் நாள்காட்டி",
    aboutUs: "திட்டம் பற்றி",
    contactUs: "உழவர் உதவி",
    login: "உழவர் உள்நுழைவு",
    register: "விவசாய பதிவு",
    helpline: "இலவச உழவர் உதவி எண்",
    langSwitch: "English",

    // Hero Section
    heroBadge: "தேசிய வேளாண் தொழில்நுட்ப கண்டுபிடிப்பு • அக்ரிமித்ரா AI",
    heroTitle1: "நுண்ணறிவு விவசாயம்,",
    heroTitle2: "வளமான உழவர் வாழ்வு.",
    heroSubtitle: "அக்ரிமித்ரா AI (AgriMitra AI) விவசாயிகளின் உற்பத்தி திறனை உயர்த்தவும், செலவைக் குறைத்து லாபத்தை பெருக்கவும் நான்கு ஒருங்கிணைந்த சேவைகளை வழங்குகிறது: துல்லிய நீர்ப்பாசனம், மண்டி விலை ஒப்பீடு, தமிழ் குரல் உதவி மற்றும் பண்ணைக் கழிவு மேலாண்மை.",
    getStarted: "4 தீர்வுகளையும் தொடங்கு",
    exploreTools: "சேவைகளை காண்க",
    demoVideo: "செயல்முறை விளக்கம்",
    statFarmers: "42,000+ உழவர்கள் பயன்பெறுகின்றனர்",
    statWaterSaved: "3.4 பில்லியன் லிட்டர் நீர் சேமிப்பு",
    statAccuracy: "₹14,500 கூடுதல் மண்டி லாபம்",
    statWealth: "₹18.4 கோடி கழிவு மதிப்பு உருவாக்கம்",

    // Features Section
    featuresTitle: "அக்ரிமித்ரா AI – நான்கு ஒருங்கிணைந்த சேவைகள்",
    featuresSubtitle: "தண்ணீர் பற்றாக்குறை, சந்தை விலை அறியாமை, மொழி தடைகள் மற்றும் பயிர்க்கழிவு எரிப்புக்கு நவீன தீர்வுகள்.",
    
    // Tool 1: WaterWise AI
    tool1Title: "வாட்டர்வைஸ் AI (WaterWise AI)",
    tool1Subtitle: "நுண்ணறிவு நீர்ப்பாசன வழிகாட்டி",
    tool1Desc: "பயிர் வகை, வளர்ச்சி பருவம், மண் தன்மை மற்றும் வானிலையை கணக்கிட்டு துல்லியமான நீர் அளவு மற்றும் மோட்டார் இயங்கும் நேரத்தை கணக்கிடுகிறது.",

    // Tool 2: MandiMate
    tool2Title: "மண்டிமேட் (MandiMate)",
    tool2Subtitle: "வேளாண் சந்தை நுண்ணறிவு & விற்பனை மதிப்பு கணிப்பான்",
    tool2Desc: "பல்வேறு ஒழுங்குமுறை மண்டிகளின் நேரடி விலை ஒப்பீடு மற்றும் போக்குவரத்து செலவு கழித்து விவசாயி பெறும் நிகர லாபத்தை கணக்கிடுகிறது.",

    // Tool 3: FarmVoice AI
    tool3Title: "ஃபார்ம்வாய்ஸ் AI (FarmVoice AI)",
    tool3Subtitle: "குரல் வழி விவசாய உதவியாளர்",
    tool3Desc: "தட்டச்சு செய்யாமல் தமிழ் அல்லது ஆங்கிலத்தில் பேசி உரங்கள், நோய்கள், பாசன அளவு மற்றும் மண்டி விலைகளை குரல் வழியே அறியலாம்.",

    // Tool 4: Farm Waste to Wealth
    tool4Title: "கழிவிலிருந்து செல்வம் (Farm Waste to Wealth)",
    tool4Subtitle: "மட்கு உரம், பயோமாஸ் மறுபயன்பாடு & வளப் பகிர்வு",
    tool4Desc: "வைக்கோல், சோகைகளை எரிக்காமல் மண்புழு உரம், சிப்பிக் காளான் வளர்ப்பு மற்றும் அண்டை விவசாயிகளுடன் இயந்திரங்களைப் பகிரும் வசதி.",

    // Tool 5: Crop Doctor
    tool5Title: "பயிர் மருத்துவர் AI (Crop Doctor AI)",
    tool5Subtitle: "இலை நோய் & பூச்சி தாக்குதல் கண்டறிதல்",
    tool5Desc: "இலை புகைப்படத்தை ஸ்கேன் செய்து நோய்களை கண்டறிந்து இயற்கை மற்றும் ரசாயன மருந்து அளவுகளை பரிந்துரைக்கிறது.",

    launchTool: "சேவையைத் தொடங்கு",

    // Why Choose Farmora
    whyTitle: "விவசாயிகள் ஏன் அக்ரிமித்ரா AI ஃபார்மோராவை விரும்புகிறார்கள்?",
    whySubtitle: "சிறு மற்றும் குறு விவசாயிகளின் உண்மை களத் தேவைகளுக்காக உருவாக்கப்பட்டது.",
    benefit1Title: "45% வரை நீர் சேமிப்பு",
    benefit1Desc: "துல்லிய பாசன நேரம் மூலம் நிலத்தடி நீர் பாதுகாக்கப்பட்டு பயிர் வேர்கள் அழுகாமல் காக்கப்படுகிறது.",
    benefit2Title: "இடைத்தரகர்கள் இல்லாத கூடுதல் லாபம்",
    benefit2Desc: "அதிக விலை தரும் மண்டிகளை அடையாளம் கண்டு, கிராமப்புற புரோக்கர்களின் கமிஷனைத் தவிர்த்து கூடுதல் லாபம் பெறலாம்.",
    benefit3Title: "100% தமிழ் குரல் வழி சேவை",
    benefit3Desc: "எழுத்துத் தேவை இல்லை; தாய்மொழியான தமிழில் பேசி உடனுக்குடன் விஞ்ஞானபூர்வ ஆலோசனைகளைப் பெறலாம்.",
    benefit4Title: "வைக்கோல் எரிப்புக்கு முற்றுப்புள்ளி",
    benefit4Desc: "கழிவுகளை மண்புழு உரம், காளான் மற்றும் இயந்திரப் பகிர்வு மூலம் ஹெக்டேருக்கு ₹20,000 வரை கூடுதல் வருவாயாக மாற்றலாம்.",

    // How It Works
    howTitle: "எளிய 4-படி உழவு முறை",
    step1Title: "1. பயிர் மற்றும் பரப்பளவு தேர்வு",
    step1Desc: "உங்கள் பயிர் வகை, ஏக்கர் அளவு மற்றும் மண் வகையை உள்ளிடுங்கள்.",
    step2Title: "2. பாசனம் & மண்டி விலை சரிபார்ப்பு",
    step2Desc: "மோட்டார் இயங்கும் நேரம் மற்றும் அதிக விலை தரும் மண்டியை அறியுங்கள்.",
    step3Title: "3. குரல் வழியே கேள்வி கேளுங்கள்",
    step3Desc: "தமிழில் பேசி பயிர் சந்தேகங்கள் அல்லது இயந்திர வாடகை விவரங்களை கேளுங்கள்.",
    step4Title: "4. அறுவடை & கழிவு மூலம் வருமானம்",
    step4Desc: "சரியான சந்தையில் விற்று, பயிர்க் கழிவை உரமாக மாற்றி கூடுதல் வருமானம் ஈட்டுங்கள்.",

    // WaterWise AI
    wwTitle: "வாட்டர்வைஸ் AI – நுண்ணறிவு நீர்ப்பாசன வழிகாட்டி",
    wwSubtitle: "பயிர் ஆவியாதல் காரணி & மண் ஹைட்ராலிக் கணக்கீட்டு முறை",
    selectCrop: "பயிரைத் தேர்ந்தெடுக்கவும்",
    selectSoil: "மண் வகை",
    enterArea: "சாகுபடி நிலப்பரப்பு",
    areaUnit: "அளவு அலகு",
    irrigationMethod: "நீர்ப்பாசன முறை",
    growthStage: "பயிரின் வளர்ச்சி நிலை",
    weatherCondition: "தற்போதைய வானிலை",
    calculateWater: "நீர் தேவையை கணக்கிடுக",
    calculating: "FAO-56 வழிமுறை மூலம் கணக்கிடப்படுகிறது...",
    dailyRequirement: "தினசரி பயிர் நீர் தேவை",
    weeklyRequirement: "வாராந்திர மொத்த நீர் அளவு",
    recommendedRunTime: "பரிந்துரைக்கப்படும் மோட்டார் இயங்கும் நேரம்",
    waterSavedVsFlood: "சேமிக்கப்படும் நீர் சதவீதம்",
    bestIrrigationWindow: "நீர் பாய்ச்ச உகந்த நேரம்",
    irrigationSchedule: "7-நாள் பாசன அட்டவணை",
    waterTipsTitle: "துல்லிய நீர் மேலாண்மை குறிப்புகள்",
    litersPerDay: "லிட்டர் / நாள்",
    litersTotal: "லிட்டர்",
    cubicMeters: "கன மீட்டர் / வாரம்",
    hoursPerDay: "மணி நேரம் / நாள்",

    // MandiMate AI
    mmTitle: "மண்டிமேட் – வேளாண் சந்தை நுண்ணறிவு",
    mmSubtitle: "ஒழுங்குமுறை விற்பனைக்கூட நேரடி விலை ஒப்பீடு & விற்பனை மதிப்பு கணிப்பான்",
    estGrossRevenue: "மொத்த விற்பனை மதிப்பு",
    estNetPayout: "நிகர வருமானம்",
    estDeductions: "போக்குவரத்து & மண்டி கட்டணக் கழிவுகள்",
    estProfitGain: "இடைத்தரகரை விட கூடுதல் லாபம்",
    selectCommodity: "விளைபொருள் தேர்வு",
    enterQuantity: "விற்பனை அளவு",
    selectGrade: "தர வகை",
    chooseMarket: "விற்பனை மண்டி",
    logisticsVehicle: "போக்குவரத்து வாகனம்",

    // Farm Voice
    fvTitle: "ஃபார்ம்வாய்ஸ் AI – குரல் வழி விவசாய உதவியாளர்",
    fvSubtitle: "கிராமப்புற உழவர்களுக்கான தமிழ் மற்றும் ஆங்கில குரல் நுண்ணறிவு",
    tapToSpeak: "பேச மைக்ரோஃபோனைத் தொடவும்",
    listening: "கவனமாகக் கேட்கிறது...",
    processingVoice: "விவசாயக் கேள்வியைப் புரிந்து கொள்கிறது...",
    speakInLanguage: "தமிழில் அல்லது ஆங்கிலத்தில் பேசலாம்",
    quickQuestionsTitle: "அல்லது அடிக்கடி கேட்கப்படும் கேள்விகள்:",
    assistantResponse: "வேளாண் விஞ்ஞானி பதில்",
    audioPlaying: "குரல் ஒலி கேட்கிறது...",
    stopAudio: "ஒலியை நிறுத்து",
    listenAgain: "பதிலை மீண்டும் கேட்கவும்",
    micPermissionNotice: "மைக்ரோஃபோன் வசதி உங்கள் உலாவியில் இயக்கப்பட்டுள்ளது.",

    // Waste to Wealth
    w2wTitle: "கழிவிலிருந்து செல்வம் – உரம், மறுபயன்பாடு & வளப் பகிர்வு",
    w2wSubtitle: "நிலையான கழிவு மேலாண்மை மற்றும் சமூக இயந்திரப் பகிர்வு",
    selectWasteType: "பயிர்க் கழிவு வகையைத் தேர்ந்தெடுக்கவும்",
    enterWasteQuantity: "கழிவு அளவு (டன்கள்)",
    potentialIncome: "எதிர்பார்க்கப்படும் பொருளாதார மதிப்பு",
    co2Averted: "தவிர்க்கப்படும் கார்பன் டை ஆக்சைடு",
    productsGenerated: "உயர்மதிப்பு துணைப் பொருட்கள்",
    stepByStepGuide: "படி-படியான செய்முறை வழிகாட்டி",
    marketBuyers: "சரிபார்க்கப்பட்ட மறுசுழற்சி வாங்குவோர்",
    connectBuyer: "வாங்குவோரைத் தொடர்பு கொள்ள",
    burnPreventionAlert: "கழிவுகளை எரிக்காமல் மறுசுழற்சி செய்வதன் மூலம் மண் வளம் பாதுகாக்கப்படுகிறது.",

    // Dashboard
    dashTitle: "உழவர் முதன்மைக் கட்டுப்பாட்டு மையம்",
    dashGreeting: "வணக்கம், விவசாயி முருகன்!",
    dashLocation: "தஞ்சாவூர் காவிரி டெல்டா, தமிழ்நாடு",
    farmHealthIndex: "மண் வளக் குறியீடு",
    activeCrops: "செயலில் உள்ள சாகுபடிகள்",
    totalAcreage: "மொத்த நிலப்பரப்பு",
    waterSavedMonth: "இம்மாதம் சேமிக்கப்பட்ட நீர்",
    upcomingTasks: "திட்டமிடப்பட்ட பண்ணைப் பணிகள்",
    soilMetrics: "மண் முதன்மை ஊட்டச்சத்துக்கள் (NPK)",
    quickActions: "விரைவு AI குறுக்குவழிகள்",

    // Weather & Mandi
    wmTitle: "நேரடி வேளாண் வானிலை & மண்டி விலை",
    wmSubtitle: "நுண் வானிலை முன்னறிவிப்பு மற்றும் நேரடி சந்தை வரத்து",
    selectDistrict: "வேளாண் மாவட்டத்தைத் தேர்வு செய்க",
    fiveDayForecast: "5-நாள் வானிலை முன்னறிவிப்பு",
    sprayAdvisory: "பூச்சிக்கொல்லி தெளிப்பு நேர வழிகாட்டி",
    optimalSpray: "இன்றைய உகந்த தெளிப்பு நேரம்",
    mandiPricesTitle: "மொத்த மண்டி விளைபொருள் விலைகள்",
    commodity: "விளைபொருள்",
    variety: "ரகம்",
    market: "மண்டி சந்தை",
    minPrice: "குறைந்தபட்ச விலை (₹/கு)",
    maxPrice: "அதிகபட்ச விலை (₹/கு)",
    modalPrice: "சராசரி விலை (₹/கு)",
    trend: "24 மணி நேர போக்கு",
    searchCommodity: "பயிர் அல்லது மண்டியைத் தேடுக...",

    // Crop Calendar
    ccTitle: "ஊடாடும் பயிர் நாள்காட்டி & பருவத் திட்டமிடல்",
    ccSubtitle: "குறுவை, சம்பா மற்றும் நவரை சாகுபடி சுழற்சி வழிகாட்டி",

    // About & Contact
    aboutTitle: "அக்ரிமித்ரா AI ஃபார்மோரா பற்றி",
    hackathonTitle: "தேசிய வேளாண் தொழில்நுட்பத் திட்டம் 2026",
    problemStatement: "சிக்கல் அறிக்கை",
    solutionArch: "தீர்வு கட்டமைப்பு",
    sdgAlignment: "ஐ.நா. நிலையான வளர்ச்சி இலக்குகள் (SDGs)",
    contactTitle: "உழவர் உதவி & பின்னூட்டம்",
    contactSubtitle: "ஏதேனும் சந்தேகங்கள் உள்ளதா? நாங்கள் விவசாயிகளுக்காகவே இருக்கிறோம்.",
    farmerHelplineNumber: "1800-419-3276 (கட்டணமில்லா சேவை)",
    sendFeedback: "செய்தியை அனுப்புக",
    footerDisclaimer: "ஃபார்மோரா அக்ரிமித்ரா AI விவசாயிகளுக்கு நுண்ணறிவு முடிவுகளை எடுக்க உதவும் தளம். அவசர கள முடிவுகளுக்கு உங்கள் பகுதி வேளாண் அலுவலர்களை அணுகவும்."
  }
};

// Global Translation Helper
function t(key, lang = "en") {
  if (translations[lang] && translations[lang][key]) {
    return translations[lang][key];
  }
  if (translations.en && translations.en[key]) {
    return translations.en[key];
  }
  return key;
}
