// FARMORA – Farmer Command Center & Telemetry Dashboard
function FarmerDashboard({ user, setCurrentTab, lang, openAuthModal, showToast }) {
  const [activeWeatherDistrict, setActiveWeatherDistrict] = React.useState("thanjavur");
  const weather = districtsWeather[activeWeatherDistrict] || districtsWeather.thanjavur;

  // Farm tasks scheduled
  const tasks = [
    {
      id: 1,
      time: "Today, 04:30 PM",
      titleEn: "WaterWise Drip Irrigation Cycle",
      titleTa: "சொட்டு நீர் பாசன சுழற்சி (1 மணி 15 நிமிடம்)",
      crop: "Paddy • 2 Acres",
      status: "Scheduled",
      icon: "💧"
    },
    {
      id: 2,
      time: "Tomorrow, 07:00 AM",
      titleEn: "Foliar Spray: Pseudomonas fluorescens",
      titleTa: "சூடோமோனாஸ் உயிரி மருந்து தெளிப்பு",
      crop: "Tomato • Plot B",
      status: "Pending",
      icon: "🍃"
    },
    {
      id: 3,
      time: "Wed, 09:00 AM",
      titleEn: "Waste to Wealth Straw Shredding",
      titleTa: "வைக்கோல் துண்டாக்கி மண்புழு தொட்டி அமைத்தல்",
      crop: "Paddy Straw • 3 Tons",
      status: "Upcoming",
      icon: "♻️"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 animate-fadeIn">
      {/* Top Welcome Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-teal-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/80 text-emerald-200 text-xs font-bold uppercase tracking-wider">
            <span>👨‍🌾</span>
            <span>{t("dashLocation", lang)}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            {user ? `${lang === "ta" ? "வணக்கம்" : "Vanakkam"}, ${user.name}!` : t("dashGreeting", lang)}
          </h1>
          <p className="text-emerald-100 text-xs sm:text-sm font-normal">
            {lang === "ta"
              ? "உங்கள் பண்ணையின் மண் வளம், பாசனம் மற்றும் சந்தை நிலவரங்கள் அனைத்தும் சிறப்பான நிலையில் உள்ளன."
              : "Farm telemetry, micro-climate, and water management are operating in optimal thresholds."}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setCurrentTab("waterwise")}
            className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold text-xs shadow-md transition-all cursor-pointer flex items-center gap-1.5"
          >
            <span>💧</span>
            <span>Water Schedule</span>
          </button>
          {!user && (
            <button
              onClick={openAuthModal}
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs transition-all cursor-pointer"
            >
              Update Farm Profile
            </button>
          )}
        </div>
      </div>

      {/* 4 Telemetry Statistics Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white rounded-2xl border border-stone-200 p-5 shadow-sm space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-stone-500 uppercase">
              {t("farmHealthIndex", lang)}
            </span>
            <span className="text-lg">🌿</span>
          </div>
          <p className="text-2xl sm:text-3xl font-black text-emerald-900">88 / 100</p>
          <span className="text-[11px] text-emerald-700 font-semibold block">
            ● Optimal Soil Vigor
          </span>
        </div>

        <div className="bg-white rounded-2xl border border-stone-200 p-5 shadow-sm space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-stone-500 uppercase">
              {t("activeCrops", lang)}
            </span>
            <span className="text-lg">🌾</span>
          </div>
          <p className="text-2xl sm:text-3xl font-black text-stone-900">3 Plots</p>
          <span className="text-[11px] text-stone-600 font-medium block">
            Paddy (BPT), Tomato, Sugarcane
          </span>
        </div>

        <div className="bg-white rounded-2xl border border-stone-200 p-5 shadow-sm space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-stone-500 uppercase">
              {t("totalAcreage", lang)}
            </span>
            <span className="text-lg">🗺️</span>
          </div>
          <p className="text-2xl sm:text-3xl font-black text-stone-900">
            {user ? `${user.landSize || 4.5} Acres` : "4.5 Acres"}
          </p>
          <span className="text-[11px] text-stone-600 font-medium block">
            Alluvial Delta Basin
          </span>
        </div>

        <div className="bg-white rounded-2xl border border-stone-200 p-5 shadow-sm space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-stone-500 uppercase">
              {t("waterSavedMonth", lang)}
            </span>
            <span className="text-lg">💧</span>
          </div>
          <p className="text-2xl sm:text-3xl font-black text-emerald-700">142,500 L</p>
          <span className="text-[11px] text-emerald-700 font-semibold block">
            +42% vs Flood Baseline
          </span>
        </div>
      </div>

      {/* Main Grid: Soil Scorecard + Weather Widget on Left, Scheduled Tasks & Actions on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN: Soil Nutrient Scorecard & Weather Alert */}
        <div className="lg:col-span-6 space-y-6">
          {/* Soil Health Scorecard */}
          <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-7 shadow-sm space-y-5">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <div>
                <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">
                  Soil Testing Laboratory Telemetry
                </span>
                <h3 className="text-lg font-extrabold text-stone-900">
                  {t("soilMetrics", lang)}
                </h3>
              </div>
              <span className="text-xs bg-emerald-50 text-emerald-800 font-bold px-2.5 py-1 rounded-full border border-emerald-200">
                pH 6.8 (Neutral)
              </span>
            </div>

            <div className="space-y-3.5">
              {/* Nitrogen */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-stone-700">Available Nitrogen (N)</span>
                  <span className="text-emerald-800">285 kg/ha (Medium)</span>
                </div>
                <div className="h-2.5 w-full bg-stone-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-600 rounded-full" style={{ width: "68%" }}></div>
                </div>
              </div>

              {/* Phosphorus */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-stone-700">Available Phosphorus (P)</span>
                  <span className="text-emerald-800">22.4 kg/ha (Optimal)</span>
                </div>
                <div className="h-2.5 w-full bg-stone-100 rounded-full overflow-hidden">
                  <div className="h-full bg-teal-600 rounded-full" style={{ width: "82%" }}></div>
                </div>
              </div>

              {/* Potassium */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-stone-700">Available Potassium (K)</span>
                  <span className="text-emerald-800">310 kg/ha (High)</span>
                </div>
                <div className="h-2.5 w-full bg-stone-100 rounded-full overflow-hidden">
                  <div className="h-full bg-green-600 rounded-full" style={{ width: "90%" }}></div>
                </div>
              </div>

              {/* Organic Carbon */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-stone-700">Soil Organic Carbon (SOC)</span>
                  <span className="text-amber-800">0.72% (Requires Compost)</span>
                </div>
                <div className="h-2.5 w-full bg-stone-100 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full" style={{ width: "55%" }}></div>
                </div>
              </div>
            </div>

            <div className="p-3 bg-stone-50 rounded-2xl border border-stone-200 text-xs text-stone-600 leading-relaxed flex items-center gap-2">
              <span>💡</span>
              <span>
                {lang === "ta" 
                  ? "மண் கரிம அளவை 1% ஆக உயர்த்த 2 டன் மண்புழு உரத்தை இடவும்." 
                  : "Apply 2 Tons of Vermicompost from Module 04 to elevate Soil Organic Carbon above 0.9%."}
              </span>
            </div>
          </div>

          {/* Micro-Climate Weather Snapshot */}
          <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-7 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                <span>🌦️</span>
                <span>{weather.district}</span>
              </h3>
              <button
                onClick={() => setCurrentTab("weatherMandi")}
                className="text-xs text-emerald-700 font-bold hover:underline"
              >
                Full Forecast →
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-black text-stone-900">{weather.temp}°C</p>
                <p className="text-xs text-stone-600 mt-0.5">{weather.condition}</p>
              </div>
              <div className="text-right text-xs text-stone-600 space-y-1">
                <p>Humidity: <strong className="text-stone-900">{weather.humidity}%</strong></p>
                <p>Wind: <strong className="text-stone-900">{weather.windSpeed}</strong></p>
                <p>ET₀: <strong className="text-stone-900">{weather.et0}</strong></p>
              </div>
            </div>

            {/* Spray Advisory Pill */}
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-950 flex items-center justify-between">
              <span className="font-bold">🌿 Spray Window: {weather.sprayAdvisory.window}</span>
              <span className="bg-emerald-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded">
                OPTIMAL
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Scheduled Farm Tasks & AI Shortcuts */}
        <div className="lg:col-span-6 space-y-6">
          {/* Scheduled Farm Tasks */}
          <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-7 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-stone-900 flex items-center gap-2 border-b border-stone-100 pb-3">
              <span>📅</span>
              <span>{t("upcomingTasks", lang)}</span>
            </h3>

            <div className="space-y-3">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="p-3.5 rounded-2xl border border-stone-200 bg-stone-50/70 hover:bg-emerald-50/40 transition-colors flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-xl shadow-xs">
                      {task.icon}
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-stone-900">
                        {lang === "ta" ? task.titleTa : task.titleEn}
                      </h4>
                      <p className="text-[11px] text-stone-500">
                        {task.time} • <strong className="text-emerald-800">{task.crop}</strong>
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                    {task.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick AI Shortcuts */}
          <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-7 shadow-sm space-y-4">
            <h3 className="text-xs font-bold text-stone-700 uppercase tracking-wider flex items-center gap-1.5">
              <span>⚡</span>
              <span>{t("quickActions", lang)}</span>
            </h3>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setCurrentTab("waterwise")}
                className="p-4 rounded-2xl border border-stone-200 bg-stone-50 hover:bg-emerald-50 hover:border-emerald-300 text-left transition-all cursor-pointer space-y-1 group"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform inline-block">💧</span>
                <p className="text-xs font-bold text-stone-900 group-hover:text-emerald-800">
                  {t("waterwise", lang)}
                </p>
                <p className="text-[11px] text-stone-500">
                  Calculate pump runtime
                </p>
              </button>

              <button
                onClick={() => setCurrentTab("mandimate")}
                className="p-4 rounded-2xl border border-stone-200 bg-stone-50 hover:bg-emerald-50 hover:border-emerald-300 text-left transition-all cursor-pointer space-y-1 group"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform inline-block">📈</span>
                <p className="text-xs font-bold text-stone-900 group-hover:text-emerald-800">
                  {t("mandimate", lang)}
                </p>
                <p className="text-[11px] text-stone-500">
                  Market prices & profit
                </p>
              </button>

              <button
                onClick={() => setCurrentTab("farmvoice")}
                className="p-4 rounded-2xl border border-stone-200 bg-stone-50 hover:bg-emerald-50 hover:border-emerald-300 text-left transition-all cursor-pointer space-y-1 group"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform inline-block">🎙️</span>
                <p className="text-xs font-bold text-stone-900 group-hover:text-emerald-800">
                  {t("farmvoice", lang)}
                </p>
                <p className="text-[11px] text-stone-500">
                  Ask voice assistant
                </p>
              </button>

              <button
                onClick={() => setCurrentTab("wastewealth")}
                className="p-4 rounded-2xl border border-stone-200 bg-stone-50 hover:bg-emerald-50 hover:border-emerald-300 text-left transition-all cursor-pointer space-y-1 group"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform inline-block">♻️</span>
                <p className="text-xs font-bold text-stone-900 group-hover:text-emerald-800">
                  {t("wastewealth", lang)}
                </p>
                <p className="text-[11px] text-stone-500">
                  Composting & sharing
                </p>
              </button>

              <button
                onClick={() => setCurrentTab("cropdoctor")}
                className="p-4 rounded-2xl border border-stone-200 bg-stone-50 hover:bg-emerald-50 hover:border-emerald-300 text-left transition-all cursor-pointer space-y-1 group"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform inline-block">🩺</span>
                <p className="text-xs font-bold text-stone-900 group-hover:text-emerald-800">
                  {t("cropdoctor", lang)}
                </p>
                <p className="text-[11px] text-stone-500">
                  Leaf pathology scan
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
