// FARMORA – Micro-Climate & Agricultural Meteorology Database
const districtsWeather = {
  thanjavur: {
    district: "Thanjavur (Cauvery Delta)",
    tamilDistrict: "தஞ்சாவூர் (டெல்டா மண்டலம்)",
    temp: 31,
    feelsLike: 35,
    condition: "Partly Cloudy with High Humidity",
    tamilCondition: "பகுதி மேகமூட்டம் & அதிக ஈரப்பதம்",
    icon: "partly-cloudy",
    humidity: 78,
    rainfallProb: "15%",
    windSpeed: "7 km/h (Gentle Breeze)",
    windDirection: "South-East",
    et0: "4.8 mm/day",
    uvIndex: 7,
    sprayAdvisory: {
      status: "OPTIMAL",
      statusColor: "emerald",
      window: "Today 04:00 PM – 06:45 PM",
      tamilWindow: "இன்று மாலை 04:00 – 06:45 மணி வரை",
      reason: "Wind speed is calm (< 8 km/h), ambient temperature dropping below 30°C, and rain probability is under 20%. No drift loss."
    },
    forecast: [
      { day: "Mon", tempMax: 32, tempMin: 24, rain: "10%", condition: "Sunny", icon: "☀️" },
      { day: "Tue", tempMax: 31, tempMin: 25, rain: "25%", condition: "Scattered Clouds", icon: "⛅" },
      { day: "Wed", tempMax: 30, tempMin: 24, rain: "60%", condition: "Light Shower", icon: "🌦️" },
      { day: "Thu", tempMax: 32, tempMin: 23, rain: "15%", condition: "Clear Sky", icon: "☀️" },
      { day: "Fri", tempMax: 33, tempMin: 24, rain: "5%", condition: "Hot & Sunny", icon: "☀️" }
    ]
  },
  coimbatore: {
    district: "Coimbatore (Western Agro Zone)",
    tamilDistrict: "கோயம்புத்தூர் (மேற்கு மண்டலம்)",
    temp: 28,
    feelsLike: 29,
    condition: "Pleasant & Breezy",
    tamilCondition: "மிதமான காற்று & இதமான சூழல்",
    icon: "cloudy",
    humidity: 62,
    rainfallProb: "10%",
    windSpeed: "12 km/h",
    windDirection: "South-West (Palghat Gap)",
    et0: "5.1 mm/day",
    uvIndex: 6,
    sprayAdvisory: {
      status: "MODERATE",
      statusColor: "amber",
      window: "Tomorrow Morning 06:30 AM – 08:30 AM",
      tamilWindow: "நாளை காலை 06:30 – 08:30 மணி வரை",
      reason: "Midday winds exceed 15 km/h causing spray droplet drift. Spray during early dawn hours."
    },
    forecast: [
      { day: "Mon", tempMax: 29, tempMin: 21, rain: "5%", condition: "Pleasant", icon: "⛅" },
      { day: "Tue", tempMax: 28, tempMin: 20, rain: "15%", condition: "Cool Breeze", icon: "⛅" },
      { day: "Wed", tempMax: 27, tempMin: 21, rain: "40%", condition: "Overcast", icon: "☁️" },
      { day: "Thu", tempMax: 29, tempMin: 21, rain: "10%", condition: "Sunny", icon: "☀️" },
      { day: "Fri", tempMax: 30, tempMin: 22, rain: "5%", condition: "Clear", icon: "☀️" }
    ]
  },
  madurai: {
    district: "Madurai (Southern Dry Zone)",
    tamilDistrict: "மதுரை (தென் மண்டலம்)",
    temp: 34,
    feelsLike: 38,
    condition: "Hot & Dry",
    tamilCondition: "வெப்பமான வானிலை",
    icon: "sunny",
    humidity: 52,
    rainfallProb: "5%",
    windSpeed: "9 km/h",
    windDirection: "North-East",
    et0: "6.2 mm/day",
    uvIndex: 9,
    sprayAdvisory: {
      status: "RESTRICTED",
      statusColor: "red",
      window: "Evening Only: 05:30 PM – 07:00 PM",
      tamilWindow: "மாலை மட்டும்: 05:30 – 07:00 மணி",
      reason: "High noon temperature (> 34°C) causes rapid evaporation of spray droplets and leaf scorching. Avoid daytime spraying."
    },
    forecast: [
      { day: "Mon", tempMax: 35, tempMin: 26, rain: "0%", condition: "Hot & Dry", icon: "☀️" },
      { day: "Tue", tempMax: 34, tempMin: 25, rain: "5%", condition: "Sunny", icon: "☀️" },
      { day: "Wed", tempMax: 33, tempMin: 25, rain: "10%", condition: "Partly Cloudy", icon: "⛅" },
      { day: "Thu", tempMax: 34, tempMin: 26, rain: "0%", condition: "Clear Sky", icon: "☀️" },
      { day: "Fri", tempMax: 35, tempMin: 26, rain: "0%", condition: "Hot", icon: "☀️" }
    ]
  },
  salem: {
    district: "Salem & Namakkal Zone",
    tamilDistrict: "சேலம் & நாமக்கல் மண்டலம்",
    temp: 32,
    feelsLike: 34,
    condition: "Sunny with Gentle Breeze",
    tamilCondition: "வெயில் & மிதமான தென்றல்",
    icon: "sunny",
    humidity: 58,
    rainfallProb: "8%",
    windSpeed: "8 km/h",
    windDirection: "South-East",
    et0: "5.4 mm/day",
    uvIndex: 8,
    sprayAdvisory: {
      status: "OPTIMAL",
      statusColor: "emerald",
      window: "Today 04:30 PM – 06:30 PM",
      tamilWindow: "இன்று மாலை 04:30 – 06:30 மணி",
      reason: "Excellent humidity and temperature conditions; high chemical absorption efficiency."
    },
    forecast: [
      { day: "Mon", tempMax: 33, tempMin: 23, rain: "5%", condition: "Sunny", icon: "☀️" },
      { day: "Tue", tempMax: 32, tempMin: 24, rain: "10%", condition: "Clear", icon: "☀️" },
      { day: "Wed", tempMax: 31, tempMin: 23, rain: "20%", condition: "Passing Cloud", icon: "⛅" },
      { day: "Thu", tempMax: 32, tempMin: 22, rain: "5%", condition: "Bright", icon: "☀️" },
      { day: "Fri", tempMax: 33, tempMin: 23, rain: "0%", condition: "Hot", icon: "☀️" }
    ]
  }
};
