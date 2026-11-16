// FARMORA by AgriMitra AI – Circular Agro-Waste, Composting & Resource-Sharing Database

const wasteData = [
  {
    id: "rice-straw",
    name: "Rice / Paddy Straw",
    tamilName: "நெல் வைக்கோல்",
    icon: "🌾",
    avgQuantityPerAcre: "2.5 - 3.5 Tons / Season",
    valuePerTon: 3400, // INR
    co2SavedPerTon: 1460, // kg CO2 avoided vs stubble burning
    highValueProducts: [
      {
        name: "Oyster Mushroom Cultivation (Pleurotus ostreatus)",
        tamilName: "சிப்பி காளான் வளர்ப்பு",
        yieldMultiplier: "1 Ton Straw yields 400 - 600 kg fresh mushrooms",
        estimatedRevenue: "₹70,000 - ₹90,000 per ton converted",
        timeRequired: "22 - 28 Days",
        difficulty: "Easy to Moderate"
      },
      {
        name: "Silica-Rich Vermicompost & Biochar",
        tamilName: "மண்புழு உரம் & பயோ-கரி",
        yieldMultiplier: "1 Ton Straw yields 600 kg high-grade organic manure",
        estimatedRevenue: "₹6,000 - ₹8,500",
        timeRequired: "45 - 60 Days",
        difficulty: "Easy"
      },
      {
        name: "Eco-Friendly Packing Material & Biodegradable Tableware",
        tamilName: "மக்கும் பேக்கிங் & தட்டுகள்",
        yieldMultiplier: "Direct industrial sale to bio-packaging startups",
        estimatedRevenue: "₹3,800 - ₹4,800 / Ton",
        timeRequired: "Immediate Sale",
        difficulty: "Direct B2B Linkage"
      }
    ],
    diySteps: [
      {
        step: 1,
        title: "Straw Collection & Chopping",
        tamilTitle: "சேகரிப்பு மற்றும் நறுக்குதல்",
        desc: "Collect dry paddy straw and chop into 2-3 inch bits using a straw chopper or tractor attachment."
      },
      {
        step: 2,
        title: "Cold Water Soaking & Sterilization",
        tamilTitle: "ஊறவைத்தல் & கிருமி நீக்கம்",
        desc: "Soak chopped straw in clean water with 2% carbendazim + formalin solution or hot water steam (80°C) for 4 hours."
      },
      {
        step: 3,
        title: "Spawning & Layering in Polybags",
        tamilTitle: "விதை இடுதல் (Spawning)",
        desc: "Layer shade-dried moist straw alternating with high-yielding oyster mushroom spawn in perforated 60x30cm bags."
      },
      {
        step: 4,
        title: "Cropping & Harvesting",
        tamilTitle: "அறுவடை & பேக்கிங்",
        desc: "Maintain 85% relative humidity in dark thatched shed. Harvest fresh mushroom flushes starting on day 18-20."
      }
    ],
    tips: [
      "Never burn paddy straw: Burning destroys beneficial azotobacter and mycorrhizal fungi in the top 3 inches of soil.",
      "In situ incorporation using a 'Super Seeder' or 'Happy Seeder' adds 12 kg Nitrogen, 3 kg Phosphorus, and 40 kg Potassium per acre.",
      "Bale and store in raised dry sheds with tarpaulin covers to protect from monsoons."
    ],
    verifiedBuyers: [
      { name: "AgriCycle Green Solutions", location: "Thanjavur & Trichy", type: "Bio-Briquettes", contact: "98421-XXXXX" },
      { name: "EcoShroom Agri Farms", location: "Coimbatore", type: "Mushroom Spawn Link", contact: "94432-XXXXX" },
      { name: "Tamil Nadu Biomass Energy Park", location: "Pudukkottai", type: "Power Plant Biomass", contact: "98400-XXXXX" }
    ]
  },
  {
    id: "sugarcane-bagasse",
    name: "Sugarcane Bagasse & Trash",
    tamilName: "கரும்பு சக்கை & சோகை",
    icon: "🎋",
    avgQuantityPerAcre: "4.0 - 6.0 Tons / Season",
    valuePerTon: 2900,
    co2SavedPerTon: 1800,
    highValueProducts: [
      {
        name: "High-Calorie Bio-Coal Pellets / Fuel Briquettes",
        tamilName: "பயோ-நிலக்கரி உருண்டைகள்",
        yieldMultiplier: "Calorific value: 3800 - 4200 kcal/kg (clean boiler fuel)",
        estimatedRevenue: "₹8,500 - ₹11,500 per ton compressed",
        timeRequired: "Continuous line process",
        difficulty: "Moderate"
      },
      {
        name: "Biodegradable Pulp Plates & Containers",
        tamilName: "கரும்பு சக்கை உணவுக் கிண்ணங்கள்",
        yieldMultiplier: "Replaces single-use plastic in catering",
        estimatedRevenue: "₹18,000 - ₹25,000 / ton processed",
        timeRequired: "Manufacturing unit link",
        difficulty: "B2B Supply"
      },
      {
        name: "Lignocellulosic Enriched Compost",
        tamilName: "செறிவூட்டப்பட்ட மட்கிய உரம்",
        yieldMultiplier: "Accelerated decomposition with Trichoderma viride",
        estimatedRevenue: "₹5,000 - ₹6,500 / ton",
        timeRequired: "35 - 45 Days",
        difficulty: "Easy"
      }
    ],
    diySteps: [
      {
        step: 1,
        title: "Trash Shredding & Sun Drying",
        tamilTitle: "சோகை அரைத்தல் & உலர்த்துதல்",
        desc: "Run dry sugarcane trash through a mobile shredder to achieve 15-20mm particle size."
      },
      {
        step: 2,
        title: "Bio-Inoculant Pre-Treatment",
        tamilTitle: "உயிரி நுண்ணுயிர் தெளிப்பு",
        desc: "Spray cow dung slurry fortified with Pleurotus sajor-caju culture and 1% urea solution to lower C:N ratio."
      },
      {
        step: 3,
        title: "Windrow Turning & Aeration",
        tamilTitle: "குவியல் கிளறி காற்றோட்டம் அளித்தல்",
        desc: "Stack into 1.5m high windrows. Turn the pile on day 14 and day 28 to ensure complete aerobic thermophilic breakdown."
      },
      {
        step: 4,
        title: "Final Screening & Field Application",
        tamilTitle: "சலித்தல் & உரமாகப் பயன்படுத்துதல்",
        desc: "Screen through 4mm wire mesh. Yields dark, friable humus packed with humic acid."
      }
    ],
    tips: [
      "In sugarcane ratoon crops, never burn trash! Mulching with trash saves 30% soil moisture and suppresses weed growth.",
      "Trash mulching reduces soil temperature by 4-6°C in peak summer, fostering earthworm multiplication."
    ],
    verifiedBuyers: [
      { name: "Kothari Sugars Co-gen Plant", location: "Kattur, Trichy", type: "Boiler Biomass", contact: "97901-XXXXX" },
      { name: "GreenEarth Molded Pulp", location: "Karur", type: "Eco-Packaging", contact: "94422-XXXXX" }
    ]
  },
  {
    id: "coconut-husk",
    name: "Coconut Husk & Coir Pith",
    tamilName: "தேங்காய் மட்டை & தென்னை நார்க்கழிவு",
    icon: "🥥",
    avgQuantityPerAcre: "1.5 - 2.5 Tons / Month",
    valuePerTon: 4800,
    co2SavedPerTon: 950,
    highValueProducts: [
      {
        name: "Washed Low-EC Coir Pith Blocks (5 kg)",
        tamilName: "கழுவப்பட்ட காயர் பித் கட்டிகள்",
        yieldMultiplier: "Export grade substrate for Dutch hydroponics & nursery potting",
        estimatedRevenue: "₹18,000 - ₹24,000 / Ton",
        timeRequired: "15 Days (Desalination & Pressing)",
        difficulty: "Commercial Value"
      },
      {
        name: "Coir Geo-Textiles for Soil Erosion Control",
        tamilName: "மண் அரிப்பு தடுப்பு காயர் வலைகள்",
        yieldMultiplier: "Sold to highways and forestry departments",
        estimatedRevenue: "₹45 - ₹65 / square meter",
        timeRequired: "Machine weaving",
        difficulty: "FPO / Self Help Group"
      },
      {
        name: "Pleurotus-Enriched Organic Manure",
        tamilName: "காயர் மண்புழு உரம்",
        yieldMultiplier: "Water-holding capacity improves by 500%",
        estimatedRevenue: "₹7,500 - ₹9,000 / Ton",
        timeRequired: "30 Days",
        difficulty: "Easy"
      }
    ],
    diySteps: [
      {
        step: 1,
        title: "Tannin & Salt Leaching",
        tamilTitle: "உப்புத்தன்மை நீக்குதல்",
        desc: "Wash raw coir pith with fresh rain water to bring electrical conductivity (EC) below 0.5 mS/cm."
      },
      {
        step: 2,
        title: "Fungal Inoculation (Mushroom Spawn)",
        tamilTitle: "பூஞ்சை உட்செலுத்துதல்",
        desc: "Layer 100 kg washed pith with 1 kg Pleurotus sajor-caju spawn and 1 kg urea to degrade resilient lignin."
      },
      {
        step: 3,
        title: "Moisture Regulation (50%)",
        tamilTitle: "ஈரப்பதம் பராமரிப்பு",
        desc: "Sprinkle water every 3 days. Cover with black polythene sheet to retain metabolic warmth."
      },
      {
        step: 4,
        title: "Harvesting Cured Black Gold Pith",
        tamilTitle: "மட்கிய காயர் பித் அறுவடை",
        desc: "After 30 days, the brown pith converts into pitch-black, odorless organic soil conditioner with 5x water holding power."
      }
    ],
    tips: [
      "Adding 2 kg cured coir pith per drip emitter increases sandy soil water holding capacity by 40%.",
      "Pollachi and Thanjavur coir FPOs offer free de-fibering training for farmer groups."
    ],
    verifiedBuyers: [
      { name: "Delta Coir Exports", location: "Pattukkottai", type: "Hydroponic Substrate", contact: "98425-XXXXX" },
      { name: "Annamalai Coir Products", location: "Pollachi", type: "Geotextiles", contact: "94437-XXXXX" }
    ]
  },
  {
    id: "banana-stem",
    name: "Banana Pseudostem & Leaves",
    tamilName: "வாழை மரத்தண்டு & இலைகள்",
    icon: "🍌",
    avgQuantityPerAcre: "12.0 - 18.0 Tons / Harvest",
    valuePerTon: 2200,
    co2SavedPerTon: 2100,
    highValueProducts: [
      {
        name: "High-Tensile Banana Craft Fiber & Handloom Yarn",
        tamilName: "வாழை நார் கைவினை & நெசவு நூல்",
        yieldMultiplier: "1 Ton stem yields 25 kg premium natural fiber (₹220/kg)",
        estimatedRevenue: "₹5,500 / Ton stem",
        timeRequired: "Mobile Raspador extraction (1 Day)",
        difficulty: "Moderate"
      },
      {
        name: "Liquid Organic Sap (Bio-Fertilizer & Potassium Tonic)",
        tamilName: "வாழை சாறு பொட்டாசியம் டானிக்",
        yieldMultiplier: "Extracts 300 Liters liquid sap per ton, rich in natural Potassium",
        estimatedRevenue: "₹15,000 / Ton (₹50 / Liter)",
        timeRequired: "Instant Press Extraction",
        difficulty: "High Return"
      },
      {
        name: "Scutcher Vermicompost",
        tamilName: "வாழைக் கழிவு மண்புழு உரம்",
        yieldMultiplier: "Residual pith from extraction converts to vermicompost in 25 days",
        estimatedRevenue: "₹4,000 / Ton",
        timeRequired: "25 Days",
        difficulty: "Easy"
      }
    ],
    diySteps: [
      {
        step: 1,
        title: "Stem Sheath Peeling",
        tamilTitle: "வாழை மட்டை பிரித்தெடுத்தல்",
        desc: "Peel outer and inner leaf sheaths within 48 hours of fruit bunch harvest."
      },
      {
        step: 2,
        title: "Raspador Machine Extraction",
        tamilTitle: "இயந்திரம் மூலம் நார் பிரிப்பு",
        desc: "Feed sheath strips into a portable Raspador machine to extract lustrous golden-white fibers."
      },
      {
        step: 3,
        title: "Sap Collection & Filtration",
        tamilTitle: "வாழை திரவ சாறு சேகரிப்பு",
        desc: "Collect expressible juice from the machine tray; filter through fine cloth. This contains 2.4% organic Potassium."
      },
      {
        step: 4,
        title: "Fiber Sun-Drying & Grading",
        tamilTitle: "நார் உலர்த்துதல் & தரம் பிரித்தல்",
        desc: "Hang extracted strands on bamboo poles in shade. Grade by length and luster for craft buyers."
      }
    ],
    tips: [
      "Banana sap applied at 10% foliar spray enhances grain weight in paddy and brix sugar levels in sugarcane.",
      "KVK Sirugamani in Trichy rents out mobile raspador extractors to farmers for ₹300/day."
    ],
    verifiedBuyers: [
      { name: "Sirugamani Banana FPO Hub", location: "Sirugamani, Trichy", type: "Handloom Weavers", contact: "94420-XXXXX" },
      { name: "Kaveri Natural Fibers", location: "Kumbakonam", type: "Eco-Bags & Crafts", contact: "98428-XXXXX" }
    ]
  },
  {
    id: "vegetable-waste",
    name: "Mandi & Vegetable Waste",
    tamilName: "சந்தை & காய்கறிக் கழிவுகள்",
    icon: "🥬",
    avgQuantityPerAcre: "1.0 - 2.0 Tons / Harvest",
    valuePerTon: 3600,
    co2SavedPerTon: 1100,
    highValueProducts: [
      {
        name: "Rapid Bio-Methanation (Cooking Gas & Biogas Slurry)",
        tamilName: "பயோகேஸ் & திரவ உரக் கரைசல்",
        yieldMultiplier: "1 Ton wet waste yields 45 m³ methane biogas (equivalent to 1.5 LPG cylinders)",
        estimatedRevenue: "₹3,500 fuel value + liquid manure",
        timeRequired: "Continuous Digestor",
        difficulty: "Moderate"
      },
      {
        name: "Fast-Cycle Vermicompost with African Nightcrawlers",
        tamilName: "ஆப்பிரிக்க மண்புழு உரம் (40 நாட்கள்)",
        yieldMultiplier: "1 Ton green waste yields 450 kg dark, fine vermicast",
        estimatedRevenue: "₹5,400 / Ton",
        timeRequired: "40 Days",
        difficulty: "Easy"
      }
    ],
    diySteps: [
      {
        step: 1,
        title: "Segregation & Crushing",
        tamilTitle: "பிரித்தல் & நசுக்குதல்",
        desc: "Remove non-biodegradables and chop into pulp using a mechanical shredder."
      },
      {
        step: 2,
        title: "Moisture Balancing with Dry Browns",
        tamilTitle: "காய்ந்த இலைகளுடன் கலக்குதல்",
        desc: "Mix wet vegetable waste with 30% dry paddy straw or saw dust to prevent anaerobic putrefaction and foul odor."
      },
      {
        step: 3,
        title: "Cow Dung & Yeast Inoculation",
        tamilTitle: "சாணம் & நுரைம கரைசல் சேர்த்தல்",
        desc: "Add 5% fresh cow dung slurry to seed the bacterial microbiome."
      },
      {
        step: 4,
        title: "Decomposition Cycle",
        tamilTitle: "முதிர்ந்த உரம் பெறுதல்",
        desc: "Turn every 10 days. Within 35 days, odor disappears and high-nitrogen organic compost is ready."
      }
    ],
    tips: [
      "Avoid citrus peels and raw onions in large quantities inside vermicompost bins as acidity harms earthworms."
    ],
    verifiedBuyers: [
      { name: "GreenPower Bio-Methanators", location: "Dindigul", type: "Biogas Off-take", contact: "97911-XXXXX" },
      { name: "Organic Valley Nurseries", location: "Madurai", type: "Compost Bulk", contact: "94431-XXXXX" }
    ]
  }
];

// Scientific Composting Methodologies (FAO & TNAU Protocols)
const compostingProtocols = [
  {
    id: "vermicompost",
    title: "Rapid Vermicomposting (Eisenia fetida / Eudrilus eugeniae)",
    tamilTitle: "மண்புழு உரம் தயாரிப்பு (45-60 நாட்கள்)",
    icon: "🪱",
    durationDays: 45,
    cnRatio: "25:1 to 30:1",
    moistureTarget: "50% - 60%",
    npkRating: "N: 1.8 - 2.5% | P: 1.5% | K: 1.8%",
    description: "Converts farm crop residues and cow dung into biologically dynamic earthworm castings rich in auxins, gibberellins, and beneficial microflora.",
    tamilDescription: "பண்ணைக் கழிவுகள் மற்றும் சாணத்தை மண்புழுக்களின் மூலம் 45 நாட்களில் பயிர்களுக்கு உகந்த ஊட்டச்சத்து நிறைந்த இயற்கை உரமாக மாற்றும் முறை.",
    steps: [
      { step: 1, title: "Bed Preparation", desc: "Build shaded brick beds (10ft length x 3ft width x 2ft depth) with bottom drainage holes." },
      { step: 2, title: "Base Bedding Layer", desc: "Lay 3 inches of chopped paddy straw or dry coconut coir at the bottom for drainage and aeration." },
      { step: 3, title: "Residue & Dung Sandwich", desc: "Add 6-inch alternate layers of pre-decomposed farm waste and 15-day aged semi-dry cow dung." },
      { step: 4, title: "Earthworm Inoculation", desc: "Introduce 1 kg (approx 1,000 active earthworms) of Eisenia fetida per 100 kg of organic waste." },
      { step: 5, title: "Moisture Maintenance", desc: "Sprinkle water every 2 days to maintain 50-60% moisture. Keep covered with wet gunny bags." },
      { step: 6, title: "Harvesting Castings", desc: "Stop watering 4 days before harvest. Scrape granular tea-powder-like castings from the top layer." }
    ]
  },
  {
    id: "aerobic_windrow",
    title: "Thermophilic Aerobic Windrow Composting",
    tamilTitle: "வெப்பநிலை சீராக்கப்பட்ட குவியல் மட்க வைப்பு (60 நாட்கள்)",
    icon: "🔥",
    durationDays: 60,
    cnRatio: "30:1",
    moistureTarget: "55%",
    npkRating: "N: 1.2% | P: 0.8% | K: 1.2%",
    description: "High-temperature composting method that naturally reaches 55°C – 65°C, effectively sterilizing weed seeds, fungal spores, and root nematodes.",
    tamilDescription: "இயற்கையாக 60°C வரை வெப்பமடைந்து களை விதைகள் மற்றும் நோய் நுண்ணுயிரிகளை அழித்து சுத்தமான மட்கிய உரம் தயாரிக்கும் முறை.",
    steps: [
      { step: 1, title: "Pile Geometry", desc: "Construct a windrow pile 1.5 meters high, 2 meters wide, and 5-10 meters long in a well-drained area." },
      { step: 2, title: "C:N Ratio Blending", desc: "Mix 60% Carbon-rich browns (straw, trash) with 40% Nitrogen-rich greens (fresh waste, cattle manure)." },
      { step: 3, title: "Bio-Consortium Spray", desc: "Spray Trichoderma viride + Pleurotus sajor-caju fungal consortium (1 kg/ton) mixed in jaggery water." },
      { step: 4, title: "Thermophilic Peak (Day 5-15)", desc: "Internal temperature naturally rises to 60°C. Monitor with a long-stem compost thermometer." },
      { step: 5, title: "Aeration Turning (Day 15, 30, 45)", desc: "Turn the windrow using a tractor loader or manual shovel to introduce fresh oxygen." },
      { step: 6, title: "Curing & Stabilization", desc: "Temperature drops below 35°C on day 50. Humus becomes sweet-smelling, dark brown, and crumbly." }
    ]
  },
  {
    id: "microbial_bokashi",
    title: "Microbially-Accelerated Bokashi / Biochar Fermentation",
    tamilTitle: "நுண்ணுயிர் செறிவூட்டப்பட்ட பொகாஷி / பயோசார் உரம் (20 நாட்கள்)",
    icon: "🧪",
    durationDays: 20,
    cnRatio: "20:1",
    moistureTarget: "40%",
    npkRating: "N: 2.2% | P: 1.8% | K: 2.4%",
    description: "Fast anaerobic fermentation using Effective Microorganisms (Lactic acid bacteria, photosynthetic yeasts) mixed with crushed biochar.",
    tamilDescription: "மக்கவைக்கும் நன்மை பயக்கும் நுண்ணுயிரிகள் (EM) மற்றும் கரித்தூளைக் கொண்டு துர்நாற்றமின்றி 20 நாட்களில் தயாரிக்கும் முறை.",
    steps: [
      { step: 1, title: "Inoculant Activation", desc: "Dissolve 100ml EM solution and 100g organic jaggery in 5 liters clean chlorine-free water." },
      { step: 2, title: "Biochar & Residue Blend", desc: "Mix finely chopped crop residue with 10% crushed biochar for permanent carbon sequestration." },
      { step: 3, title: "Hermetic Compaction", desc: "Pack tightly into airtight 200-liter drums or sealed silage pits to eliminate all oxygen pockets." },
      { step: 4, title: "Fermentation (14-20 Days)", desc: "Lactic acid fermentation preserves nutrients without greenhouse gas methane release." },
      { step: 5, title: "Soil Incorporation", desc: "Apply directly to field furrows; earthworms and soil microbes instantly colonize the fermented biomass." }
    ]
  }
];

// Agro-Resource Sharing Hub Listings (Community Equipment & Residue Exchange)
const resourceSharingListings = {
  equipment: [
    {
      id: "eq-1",
      name: "High-Density Straw Baler (Round 30kg Bales)",
      tamilName: "வைக்கோல் கட்டும் இயந்திரம் (Baler)",
      owner: "Farmer K. Raman",
      tamilOwner: "விவசாயி கே. ராமன்",
      village: "Thiruvaiyaru, Thanjavur",
      distanceKm: 3.2,
      rate: "₹450 / Acre or ₹1,200 / Day",
      availability: "Available Today 🟢",
      phone: "98421-12345",
      icon: "🚜",
      rating: 4.9,
      totalShares: 48
    },
    {
      id: "eq-2",
      name: "Mobile Biomass Shredder & Chipper (25 HP)",
      tamilName: "மொபைல் சோகை மற்றும் தண்டு நறுக்கும் இயந்திரம்",
      owner: "Farmer V. Murugesan",
      tamilOwner: "விவசாயி வி. முருகேசன்",
      village: "Papanasam, Thanjavur",
      distanceKm: 5.8,
      rate: "₹350 / Hour",
      availability: "Available Tomorrow 🟡",
      phone: "94432-67890",
      icon: "⚙️",
      rating: 4.8,
      totalShares: 62
    },
    {
      id: "eq-3",
      name: "Tractor-Mounted Super Seeder (Zero-Tillage)",
      tamilName: "சூப்பர் சீடர் டிராக்டர் கருவி",
      owner: "TNAU Custom Hiring Center",
      tamilOwner: "தமிழ்நாடு வேளாண் பல்கலைக்கழக வாடகை மையம்",
      village: "Kumbakonam Hub",
      distanceKm: 8.5,
      rate: "₹1,400 / Acre (Including Diesel)",
      availability: "Available Today 🟢",
      phone: "0435-2401234",
      icon: "🌱",
      rating: 5.0,
      totalShares: 115
    },
    {
      id: "eq-4",
      name: "Windrow Compost Turner & Aerator",
      tamilName: "மட்கு உரக் குவியல் கிளறும் கருவி",
      owner: "Cauvery Delta FPO",
      tamilOwner: "காவிரி டெல்டா உழவர் உற்பத்தியாளர் நிறுவனம்",
      village: "Budalur, Thanjavur",
      distanceKm: 11.0,
      rate: "₹600 / Hour",
      availability: "Available on Booking 🟡",
      phone: "97900-54321",
      icon: "🔄",
      rating: 4.7,
      totalShares: 34
    }
  ],
  biomassExchange: [
    {
      id: "bio-1",
      title: "5 Tons Clean Paddy Straw Bales",
      tamilTitle: "5 டன் நெல் வைக்கோல் கட்டுகள் தயார்",
      seller: "Farmer S. Ganesan",
      location: "Thanjavur Delta",
      price: "₹1,200 / Ton (Or Free for Self-Transport)",
      type: "Surplus Offer 📢",
      phone: "98429-11223"
    },
    {
      id: "bio-2",
      title: "Wanted: 10 Tons Sugarcane Trash for Mushroom Unit",
      tamilTitle: "காளான் வளர்ப்பிற்கு 10 டன் கரும்பு சோகை தேவை",
      buyer: "EcoShroom Bio Farm",
      location: "Trichy Road",
      offering: "₹1,800 / Ton Spot Cash Payment",
      type: "Residue Demand 🔍",
      phone: "94438-55443"
    },
    {
      id: "bio-3",
      title: "4 Tons Shredded Coconut Fronds & Husks",
      tamilTitle: "4 டன் நறுக்கிய தென்னை மட்டை & ஓலைகள்",
      seller: "Farmer T. Arumugam",
      location: "Pattukkottai",
      price: "Barter: Exchange for 10 Bags Vermicompost",
      type: "Barter Trade 🔄",
      phone: "98433-88776"
    }
  ]
};
