// FARMORA – Crop Disease & Agronomic Pathology Database for MandiMate AI
const demoDiseases = [
  {
    id: "paddy-blast",
    crop: "Paddy / Rice",
    tamilCrop: "நெல்",
    diseaseName: "Rice Blast (Magnaporthe oryzae)",
    tamilName: "நெல் குலை நோய் / இலைக் கருகல்",
    sampleImage: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80",
    confidence: 96.8,
    severity: "Severe",
    severityColor: "red",
    pathogen: "Fungal (Magnaporthe oryzae)",
    symptoms: "Diamond or spindle-shaped lesions with gray centers and reddish-brown borders on leaf blades. Panicle neck rot causing empty white grains.",
    organicTreatment: [
      "Foliar spray with Pseudomonas fluorescens @ 2.5 kg/ha or 10g/liter of water at 10-day intervals.",
      "Spray 5% Neem Seed Kernel Extract (NSKE) or 3% Neem oil with soap emulsifier.",
      "Apply Vermicompost enriched with Trichoderma harzianum @ 50 kg/acre."
    ],
    chemicalTreatment: [
      "Spray Tricyclazole 75% WP @ 0.6g/liter (120g/acre) at early symptom onset.",
      "Alternative: Isoprothiolane 40% EC @ 1.5 ml/liter or Kasugamycin 3% SL @ 2.5 ml/liter.",
      "Safety: 21-day harvest waiting period. Wear protective respirator and gloves while spraying."
    ],
    fertilizerAdvisory: "Avoid excessive split application of Nitrogen (Urea); apply Potash (MOP) @ 25 kg/acre to strengthen cell walls against fungal hyphae penetration.",
    cropCare: "Drain standing water from the field for 48 hours to aerate soil, then refill with fresh shallow water."
  },
  {
    id: "tomato-late-blight",
    crop: "Tomato",
    tamilCrop: "தக்காளி",
    diseaseName: "Early & Late Blight (Phytophthora infestans)",
    tamilName: "தக்காளி இலைக்கருகல் & அடி அழுகல்",
    sampleImage: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=600&q=80",
    confidence: 95.2,
    severity: "Moderate to High",
    severityColor: "amber",
    pathogen: "Oomycete / Water Mold",
    symptoms: "Water-soaked irregular dark brown patches starting from leaf tips, with white cottony fungal growth on underside in humid mornings.",
    organicTreatment: [
      "Spray Bordeaux Mixture 1% (Copper sulphate + Slaked lime) as a preventative barrier.",
      "Trichoderma viride foliar wash @ 5g/liter mixed with 1% cow dung slurry filtrate.",
      "Panchagavya foliar spray @ 30ml/liter to induce systemic resistance."
    ],
    chemicalTreatment: [
      "Spray Metalaxyl 8% + Mancozeb 64% WP (Ridomil MZ) @ 2g/liter of water.",
      "Secondary option: Cymoxanil 8% + Mancozeb 64% WP @ 2.5g/liter.",
      "Safety: Spray during morning 7 AM - 9 AM. Avoid spraying before rain."
    ],
    fertilizerAdvisory: "Ensure balanced Calcium Nitrate application to avoid Blossom End Rot; reduce foliar Nitrogen.",
    cropCare: "Prune bottom 12 inches of infected foliage to prevent splash-up spore contamination from wet soil."
  },
  {
    id: "cotton-leaf-curl",
    crop: "Cotton",
    tamilCrop: "பருத்தி",
    diseaseName: "Cotton Leaf Curl Virus (CLCuV)",
    tamilName: "பருத்தி இலைச்சுருள் நச்சுயிரி",
    sampleImage: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?auto=format&fit=crop&w=600&q=80",
    confidence: 93.6,
    severity: "Moderate",
    severityColor: "amber",
    pathogen: "Begomovirus (Transmitted by Bemisia tabaci Whitefly)",
    symptoms: "Upward or downward cupping of leaves, thickening of primary and secondary veins, and formation of enations (leaf-like outgrowths) on underside.",
    organicTreatment: [
      "Install Yellow Sticky Traps @ 15-20 traps per acre to capture vector whiteflies.",
      "Foliar spray with Beauveria bassiana @ 5ml/liter of water.",
      "Spray Neem oil 10,000 PPM @ 2ml/liter every 7 days."
    ],
    chemicalTreatment: [
      "Control whitefly vector with Diafenthiuron 50% WP @ 1.2g/liter.",
      "Or spray Flonicamid 50% WG @ 0.3g/liter or Spiromesifen 22.9% SC @ 1 ml/liter.",
      "Safety: Rotate pesticide chemical groups to prevent insect resistance development."
    ],
    fertilizerAdvisory: "Foliar spray of 19-19-19 water soluble fertilizer @ 5g/liter + Micronutrient mixture @ 2g/liter to revive leaf vigor.",
    cropCare: "Uproot and bury heavily stunted virus-infested plants outside the field perimeter."
  },
  {
    id: "sugarcane-red-rot",
    crop: "Sugarcane",
    tamilCrop: "கரும்பு",
    diseaseName: "Sugarcane Red Rot (Colletotrichum falcatum)",
    tamilName: "கரும்பு செவ்வழுகல் நோய்",
    sampleImage: "https://images.unsplash.com/photo-1546768292-fb12f6c92568?auto=format&fit=crop&w=600&q=80",
    confidence: 97.4,
    severity: "Severe",
    severityColor: "red",
    pathogen: "Fungal (Colletotrichum falcatum)",
    symptoms: "Yellowing and withering of upper leaves (third or fourth leaf from top). Split cane shows longitudinal reddening with distinctive white transverse bands.",
    organicTreatment: [
      "Hot water treatment of seed setts at 52°C for 30 minutes before planting.",
      "Dip setts in Trichoderma harzianum @ 10g/liter slurry for 15 minutes before sowing.",
      "Incorporate green manure (Dhaincha / Sunnhemp) into soil during land preparation."
    ],
    chemicalTreatment: [
      "Sett treatment with Carbendazim 50% WP @ 1g/liter of water.",
      "Soil drenching around clump base with Copper Oxychloride 50% WP @ 3g/liter.",
      "Safety: Avoid waterlogging in the field; provide deep drainage trenches."
    ],
    fertilizerAdvisory: "Apply recommended Potassium (Potash) in two splits; avoid excess urea during formative stage.",
    cropCare: "Do not ratoon infected fields. Follow minimum 2-year crop rotation with paddy or pulses."
  },
  {
    id: "banana-sigatoka",
    crop: "Banana",
    tamilCrop: "வாழை",
    diseaseName: "Black & Yellow Sigatoka (Mycosphaerella musicola)",
    tamilName: "வாழை சிகடோகா இலைப்புள்ளி நோய்",
    sampleImage: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=600&q=80",
    confidence: 94.1,
    severity: "Moderate",
    severityColor: "amber",
    pathogen: "Fungal (Ascomycete)",
    symptoms: "Small chlorotic streaks running parallel to leaf veins, enlarging into dark brown elliptical spots with gray center and yellow halo.",
    organicTreatment: [
      "Foliar spray with Bacillus subtilis @ 5ml/liter + organic wetting agent.",
      "Spray mineral oil or petroleum-based agricultural spray oil (Banole) @ 10ml/liter.",
      "Soil application of Pseudomonas @ 25g/plant mixed in well-rotted farmyard manure."
    ],
    chemicalTreatment: [
      "Spray Propiconazole 25% EC @ 1 ml/liter or Difenoconazole 25% EC @ 1 ml/liter.",
      "Alternate with Mancozeb 75% WP @ 2g/liter to prevent resistance.",
      "Safety: Ensure uniform coverage on both upper and lower leaf surfaces."
    ],
    fertilizerAdvisory: "Supply micronutrient zinc sulphate @ 0.5% + Borax 0.2% to fortify leaf cuticle integrity.",
    cropCare: "Deleafing: Mechanically cut and burn severely infected leaves to reduce airborne ascospore load."
  },
  {
    id: "healthy-crop",
    crop: "Paddy & Millets",
    tamilCrop: "ஆரோக்கியமான நெல் பயிர்",
    diseaseName: "Healthy Crop Tissue (No Pathogen Detected)",
    tamilName: "ஆரோக்கியமான பயிர் (நோய்த்தொற்று இல்லை)",
    sampleImage: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=600&q=80",
    confidence: 98.9,
    severity: "Optimal Health",
    severityColor: "green",
    pathogen: "None (Healthy Chlorophyll & Cell Wall Matrix)",
    symptoms: "Vibrant emerald green leaf blade, uniform vein architecture, no necrotic lesions, vigorous turgor pressure.",
    organicTreatment: [
      "Continue bi-weekly application of Jeevamrutham or Panchagavya @ 3% as tonic.",
      "Maintain active mulching to protect topsoil beneficial microbial consortium."
    ],
    chemicalTreatment: [
      "No chemical fungicides or insecticides required.",
      "Save money and protect beneficial predator insects like spiders and ladybird beetles."
    ],
    fertilizerAdvisory: "Maintain standard split schedule: NPK 120:60:60 kg/ha in scheduled split doses.",
    cropCare: "Monitor field water depth (maintain 2-3 cm) and inspect leaves weekly for early pest scouts."
  }
];
