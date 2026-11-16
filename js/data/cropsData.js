// FARMORA – Crop and Soil Hydraulic Database for WaterWise AI
const cropsData = [
  {
    id: "paddy",
    name: "Paddy / Rice",
    tamilName: "நெல்",
    icon: "🌾",
    category: "Cereal",
    baseWaterNeed: 4500, // Liters per acre per day baseline
    kc: { seedling: 1.05, vegetative: 1.20, flowering: 1.35, maturity: 0.90 },
    durationDays: 120,
    idealSoil: ["clay", "alluvial", "black"],
    criticalStages: "Tillering, Panicle Initiation, Flowering",
    waterTip: "Adopt Alternate Wetting and Drying (AWD) to save 30% water without reducing yield."
  },
  {
    id: "sugarcane",
    name: "Sugarcane",
    tamilName: "கரும்பு",
    icon: "🎋",
    category: "Cash Crop",
    baseWaterNeed: 5200,
    kc: { seedling: 0.70, vegetative: 1.25, flowering: 1.30, maturity: 0.75 },
    durationDays: 360,
    idealSoil: ["loamy", "alluvial", "black"],
    criticalStages: "Formative phase, Grand growth period",
    waterTip: "Sub-surface drip fertigation increases sucrose recovery and saves 40% water."
  },
  {
    id: "cotton",
    name: "Cotton",
    tamilName: "பருத்தி",
    icon: "☁️",
    category: "Fiber",
    baseWaterNeed: 3100,
    kc: { seedling: 0.65, vegetative: 1.05, flowering: 1.20, maturity: 0.60 },
    durationDays: 160,
    idealSoil: ["black", "loamy"],
    criticalStages: "Square formation, Boll burst",
    waterTip: "Avoid excess irrigation during late boll maturation to prevent boll rot."
  },
  {
    id: "maize",
    name: "Maize / Corn",
    tamilName: "மக்காச்சோளம்",
    icon: "🌽",
    category: "Cereal",
    baseWaterNeed: 2800,
    kc: { seedling: 0.50, vegetative: 0.95, flowering: 1.20, maturity: 0.65 },
    durationDays: 105,
    idealSoil: ["loamy", "alluvial", "red"],
    criticalStages: "Tasseling, Silking, Grain filling",
    waterTip: "Ensure adequate moisture during silking stage; water stress here causes 40% yield drop."
  },
  {
    id: "banana",
    name: "Banana",
    tamilName: "வாழை",
    icon: "🍌",
    category: "Horticulture",
    baseWaterNeed: 4800,
    kc: { seedling: 0.75, vegetative: 1.10, flowering: 1.25, maturity: 1.00 },
    durationDays: 330,
    idealSoil: ["alluvial", "clay", "loamy"],
    criticalStages: "Bunch emergence, Fruit filling",
    waterTip: "Drip irrigation with fertigation every 3 days prevents leaf scorch."
  },
  {
    id: "groundnut",
    name: "Groundnut / Peanut",
    tamilName: "வேர்க்கடலை",
    icon: "🥜",
    category: "Oilseed",
    baseWaterNeed: 2400,
    kc: { seedling: 0.45, vegetative: 0.85, flowering: 1.15, maturity: 0.55 },
    durationDays: 110,
    idealSoil: ["red", "sandy", "loamy"],
    criticalStages: "Pegging, Pod formation",
    waterTip: "Light sprinkler irrigation at 10-day intervals prevents soil compaction around pegs."
  },
  {
    id: "tomato",
    name: "Tomato",
    tamilName: "தக்காளி",
    icon: "🍅",
    category: "Vegetable",
    baseWaterNeed: 2600,
    kc: { seedling: 0.50, vegetative: 0.90, flowering: 1.15, maturity: 0.75 },
    durationDays: 95,
    idealSoil: ["loamy", "red", "alluvial"],
    criticalStages: "Flowering, Fruit set",
    waterTip: "Mulching with paddy straw reduces evaporation by 45% and stops blossom end rot."
  },
  {
    id: "chili",
    name: "Chili",
    tamilName: "மிளகாய்",
    icon: "🌶️",
    category: "Spices",
    baseWaterNeed: 2300,
    kc: { seedling: 0.45, vegetative: 0.85, flowering: 1.10, maturity: 0.70 },
    durationDays: 120,
    idealSoil: ["black", "loamy", "red"],
    criticalStages: "Flower bud initiation, Pod ripening",
    waterTip: "Irrigate in early mornings to prevent fungal damping-off diseases."
  }
];

const soilTypes = [
  {
    id: "clay",
    name: "Clay Soil",
    tamilName: "களிமண்",
    retentionFactor: 1.25,
    percolationRate: "Slow (Low drainage)",
    description: "High water holding capacity. Retains moisture for 5-7 days; requires less frequent but careful irrigation."
  },
  {
    id: "loamy",
    name: "Loamy Soil",
    tamilName: "வண்டல் / செம்மண் கலவை",
    retentionFactor: 1.00,
    percolationRate: "Moderate (Ideal balance)",
    description: "Optimal agricultural soil. Excellent air-water balance; retains nutrients and drains excess water effectively."
  },
  {
    id: "sandy",
    name: "Sandy Soil",
    tamilName: "மணல் பாங்கான மண்",
    retentionFactor: 0.75,
    percolationRate: "Very Rapid",
    description: "Low water retention. Requires frequent, short micro-drip cycles to prevent deep percolation loss."
  },
  {
    id: "black",
    name: "Black Cotton Soil",
    tamilName: "கரிசல் மண்",
    retentionFactor: 1.30,
    percolationRate: "Very Slow",
    description: "Rich in montmorillonite clay. Swells when wet and shrinks when dry; holds water for long cycles."
  },
  {
    id: "red",
    name: "Red Laterite Soil",
    tamilName: "செம்மண்",
    retentionFactor: 0.90,
    percolationRate: "Moderate-Fast",
    description: "Permeable and well-drained. Rich in iron oxides; benefits significantly from organic compost mulching."
  },
  {
    id: "alluvial",
    name: "Alluvial Soil (River Delta)",
    tamilName: "வண்டல் மண் (டெல்டா)",
    retentionFactor: 1.10,
    percolationRate: "Moderate",
    description: "Extremely fertile river silt. Retains optimal capillary water for paddy, banana, and sugarcane."
  }
];

const irrigationMethods = [
  {
    id: "drip",
    name: "Precision Drip Irrigation",
    tamilName: "சொட்டு நீர் பாசனம்",
    efficiency: 0.90, // 90% water reaching root zone
    waterSavings: "40% - 50%",
    icon: "💧",
    notes: "Applies water directly to root zone with minimal evaporation."
  },
  {
    id: "sprinkler",
    name: "Micro-Sprinkler System",
    tamilName: "தெளிப்பு நீர் பாசனம்",
    efficiency: 0.75,
    waterSavings: "20% - 30%",
    icon: "🚿",
    notes: "Ideal for groundnut, pulses, and leafy crops in undulating terrain."
  },
  {
    id: "furrow",
    name: "Furrow / Ridge Irrigation",
    tamilName: "பார் பாசனம்",
    efficiency: 0.60,
    waterSavings: "10% - 15%",
    icon: "〰️",
    notes: "Channels water between crop rows; better than basin flood."
  },
  {
    id: "flood",
    name: "Traditional Flood / Basin",
    tamilName: "வாய்மடை பாய்ச்சல்",
    efficiency: 0.45,
    waterSavings: "0% (Baseline)",
    icon: "🌊",
    notes: "High percolation and evaporation losses; causes soil salinization."
  }
];
