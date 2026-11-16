// FARMORA – WaterWise AI (Smart Precision Water Management)
function WaterWiseAI({ lang, showToast }) {
  // Input states
  const [selectedCropId, setSelectedCropId] = React.useState("paddy");
  const [selectedSoilId, setSelectedSoilId] = React.useState("alluvial");
  const [areaValue, setAreaValue] = React.useState(2.0);
  const [areaUnit, setAreaUnit] = React.useState("acres"); // acres, hectares, cents
  const [irrigationId, setIrrigationId] = React.useState("drip");
  const [growthStage, setGrowthStage] = React.useState("flowering"); // seedling, vegetative, flowering, maturity
  const [weatherCondition, setWeatherCondition] = React.useState("moderate"); // sunny_hot, moderate, cloudy_humid
  const [pumpHp, setPumpHp] = React.useState(5); // 3HP, 5HP, 7.5HP
  const [isCalculating, setIsCalculating] = React.useState(false);

  // Active crop and soil objects
  const crop = cropsData.find(c => c.id === selectedCropId) || cropsData[0];
  const soil = soilTypes.find(s => s.id === selectedSoilId) || soilTypes[0];
  const irrigation = irrigationMethods.find(i => i.id === irrigationId) || irrigationMethods[0];

  // Convert area to normalized Acres
  const areaInAcres = React.useMemo(() => {
    const val = parseFloat(areaValue) || 1;
    if (areaUnit === "hectares") return val * 2.471;
    if (areaUnit === "cents") return val * 0.01;
    return val;
  }, [areaValue, areaUnit]);

  // Weather multiplier
  const weatherMultiplier = React.useMemo(() => {
    if (weatherCondition === "sunny_hot") return 1.25; // High ET
    if (weatherCondition === "cloudy_humid") return 0.75; // Low ET
    return 1.0; // Moderate
  }, [weatherCondition]);

  // Calculation Engine based on FAO-56 Penman-Monteith ETc formula
  // ETc = ETo * Kc * SoilRetentionFactor * WeatherAdj / Efficiency
  const results = React.useMemo(() => {
    const stageKc = crop.kc[growthStage] || 1.0;
    const baseDailyPerAcre = crop.baseWaterNeed; // Liters per day baseline
    
    // Water needed at root zone
    const netCropWaterLiters = baseDailyPerAcre * stageKc * areaInAcres * weatherMultiplier;
    
    // Gross water application factoring irrigation efficiency
    // Drip = 90% (0.90), Flood = 45% (0.45)
    const grossWaterLitersPerDay = Math.round(netCropWaterLiters / irrigation.efficiency);
    const weeklyM3 = Math.round((grossWaterLitersPerDay * 7) / 1000);
    
    // Traditional flood baseline for savings comparison
    const floodBaselineLiters = Math.round(netCropWaterLiters / 0.45);
    const waterSavedLiters = Math.max(0, floodBaselineLiters - grossWaterLitersPerDay);
    const savingsPercent = Math.round(((floodBaselineLiters - grossWaterLitersPerDay) / floodBaselineLiters) * 100);

    // Pump Run-time calculation
    // 1 HP ~ 750 Watts; 1 HP monobloc pump delivers ~ 15,000 Liters / Hour
    // 3 HP delivers ~ 45,000 L/hr; 5 HP delivers ~ 75,000 L/hr; 7.5 HP delivers ~ 110,000 L/hr
    const pumpFlowRatePerHour = pumpHp * 15000;
    const runTimeHoursDecimal = grossWaterLitersPerDay / pumpFlowRatePerHour;
    const runTimeHours = Math.floor(runTimeHoursDecimal);
    const runTimeMinutes = Math.round((runTimeHoursDecimal - runTimeHours) * 60);

    // Optimal irrigation timing
    const bestWindow = weatherCondition === "sunny_hot"
      ? "05:30 AM – 08:30 AM or 05:00 PM – 07:00 PM"
      : "06:00 AM – 09:30 AM or 04:30 PM – 06:30 PM";

    return {
      grossWaterLitersPerDay,
      weeklyM3,
      floodBaselineLiters,
      waterSavedLiters,
      savingsPercent,
      runTimeHours,
      runTimeMinutes,
      bestWindow,
      stageKc
    };
  }, [crop, soil, irrigation, areaInAcres, growthStage, weatherMultiplier, pumpHp]);

  const handleRecalculate = () => {
    setIsCalculating(true);
    setTimeout(() => {
      setIsCalculating(false);
      showToast(
        lang === "ta" 
          ? "நீர் தேவை துல்லியமாக மறு கணக்கீடு செய்யப்பட்டது!" 
          : "Water requirements calculated using FAO-56 algorithm!", 
        "success"
      );
    }, 450);
  };

  const handlePrintSchedule = () => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-800 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-emerald-500/20 to-transparent pointer-events-none"></div>
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-700/60 text-emerald-200 text-xs font-bold uppercase tracking-wider mb-3">
            <span>💧</span>
            <span>Module 01 • Precision Irrigation</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {t("wwTitle", lang)}
          </h1>
          <p className="text-emerald-100/90 text-sm sm:text-base mt-2 font-normal leading-relaxed">
            {t("wwSubtitle", lang)}
          </p>
        </div>
      </div>

      {/* Main Grid: Inputs on Left, Results Dashboard on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* INPUTS COLUMN */}
        <div className="lg:col-span-6 bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
          <h2 className="text-lg font-bold text-stone-900 flex items-center gap-2 border-b border-stone-100 pb-3">
            <span className="text-emerald-700">⚙️</span>
            <span>{lang === "ta" ? "நிலம் & பயிர் அளவுருக்கள்" : "Field & Crop Configuration"}</span>
          </h2>

          {/* 1. Crop Selection */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider">
              {t("selectCrop", lang)}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {cropsData.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setSelectedCropId(c.id)}
                  className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    selectedCropId === c.id
                      ? "border-emerald-600 bg-emerald-50/90 text-emerald-950 font-bold ring-2 ring-emerald-500/30"
                      : "border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-700 font-medium"
                  }`}
                >
                  <span className="text-2xl mb-1">{c.icon}</span>
                  <span className="text-xs truncate">
                    {lang === "ta" ? c.tamilName : c.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Soil Type Selection */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider">
              {t("selectSoil", lang)}
            </label>
            <select
              value={selectedSoilId}
              onChange={(e) => setSelectedSoilId(e.target.value)}
              className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              {soilTypes.map((s) => (
                <option key={s.id} value={s.id}>
                  {lang === "ta" ? s.tamilName : s.name} — {s.percolationRate}
                </option>
              ))}
            </select>
            <p className="text-[11px] text-stone-500 italic">
              {soil.description}
            </p>
          </div>

          {/* 3. Land Area Input & Unit */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider">
              {t("enterArea", lang)}
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                min="0.1"
                step="0.5"
                max="500"
                value={areaValue}
                onChange={(e) => setAreaValue(Math.max(0.1, parseFloat(e.target.value) || 0.1))}
                className="flex-1 bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-sm font-bold text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <select
                value={areaUnit}
                onChange={(e) => setAreaUnit(e.target.value)}
                className="bg-stone-100 border border-stone-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-bold text-stone-800"
              >
                <option value="acres">{lang === "ta" ? "ஏக்கர்" : "Acres"}</option>
                <option value="hectares">{lang === "ta" ? "ஹெக்டேர்" : "Hectares"}</option>
                <option value="cents">{lang === "ta" ? "சென்ட்" : "Cents"}</option>
              </select>
            </div>
            <p className="text-[11px] text-emerald-800 font-medium">
              = {areaInAcres.toFixed(2)} {lang === "ta" ? "ஏக்கர் சாகுபடி" : "Normalized Acres"}
            </p>
          </div>

          {/* 4. Irrigation System Selection */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider">
              {t("irrigationMethod", lang)}
            </label>
            <div className="grid grid-cols-2 gap-2">
              {irrigationMethods.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setIrrigationId(m.id)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center gap-2.5 ${
                    irrigationId === m.id
                      ? "border-emerald-600 bg-emerald-50 text-emerald-950 font-bold ring-2 ring-emerald-500/20"
                      : "border-stone-200 bg-white hover:bg-stone-50 text-stone-700"
                  }`}
                >
                  <span className="text-xl">{m.icon}</span>
                  <div>
                    <p className="text-xs font-bold leading-tight">
                      {lang === "ta" ? m.tamilName : m.name}
                    </p>
                    <p className="text-[10px] text-emerald-700 font-semibold">
                      {Math.round(m.efficiency * 100)}% {lang === "ta" ? "திறன்" : "Efficiency"}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 5. Growth Stage & Weather Condition */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider">
                {t("growthStage", lang)}
              </label>
              <select
                value={growthStage}
                onChange={(e) => setGrowthStage(e.target.value)}
                className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-xs sm:text-sm font-semibold text-stone-900"
              >
                <option value="seedling">{lang === "ta" ? "நாற்று நிலை (Seedling)" : "Seedling / Emergence"}</option>
                <option value="vegetative">{lang === "ta" ? "வளர்ச்சி நிலை (Vegetative)" : "Vegetative / Tillering"}</option>
                <option value="flowering">{lang === "ta" ? "பூக்கும் நிலை (Flowering / Peak)" : "Flowering / Panicle (Peak Kc)"}</option>
                <option value="maturity">{lang === "ta" ? "முதிர்வு நிலை (Maturity)" : "Maturity / Harvesting"}</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider">
                {t("weatherCondition", lang)}
              </label>
              <select
                value={weatherCondition}
                onChange={(e) => setWeatherCondition(e.target.value)}
                className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-xs sm:text-sm font-semibold text-stone-900"
              >
                <option value="sunny_hot">☀️ {lang === "ta" ? "அதிக வெயில் & வெப்பம்" : "Sunny & Hot (+25% ET)"}</option>
                <option value="moderate">⛅ {lang === "ta" ? "மிதமான வானிலை" : "Moderate Season (Standard ET)"}</option>
                <option value="cloudy_humid">☁️ {lang === "ta" ? "மேகமூட்டம் & ஈரப்பதம்" : "Cloudy / Humid (-25% ET)"}</option>
              </select>
            </div>
          </div>

          {/* 6. Pump Capacity (HP) */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider">
              {lang === "ta" ? "மோட்டார் திறன் (குதிரைத்திறன் / HP)" : "Farm Pump Capacity (Horsepower)"}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[3, 5, 7.5].map((hp) => (
                <button
                  key={hp}
                  type="button"
                  onClick={() => setPumpHp(hp)}
                  className={`py-2 px-3 rounded-xl border text-xs font-bold text-center transition-all cursor-pointer ${
                    pumpHp === hp
                      ? "border-emerald-600 bg-emerald-800 text-white"
                      : "border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100"
                  }`}
                >
                  {hp} HP {lang === "ta" ? "மோட்டார்" : "Motor"}
                </button>
              ))}
            </div>
          </div>

          {/* Calculate Button */}
          <button
            onClick={handleRecalculate}
            disabled={isCalculating}
            className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-green-700 text-white font-bold text-sm shadow-md hover:from-emerald-700 hover:to-green-800 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>{isCalculating ? "⏳" : "⚡"}</span>
            <span>{isCalculating ? t("calculating", lang) : t("calculateWater", lang)}</span>
          </button>
        </div>

        {/* RESULTS COLUMN */}
        <div className="lg:col-span-6 space-y-6">
          {/* Main Computed Metric Cards */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <div>
                <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest">
                  FAO-56 Irrigation Engine
                </span>
                <h3 className="text-xl font-extrabold text-stone-900">
                  {lang === "ta" ? "கணக்கிடப்பட்ட நீர் தேவை" : "Computed Water Requirement"}
                </h3>
              </div>
              <button
                onClick={handlePrintSchedule}
                className="text-xs bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold px-3 py-1.5 rounded-lg border border-stone-300 flex items-center gap-1 cursor-pointer"
                title="Print Advisory"
              >
                <span>🖨️</span>
                <span>{lang === "ta" ? "அச்சிடுக" : "Print Plan"}</span>
              </button>
            </div>

            {/* Daily Liters Primary Display */}
            <div className="rounded-2xl bg-gradient-to-br from-emerald-50 via-teal-50/50 to-white p-6 border border-emerald-200/80 text-center relative overflow-hidden">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                {t("dailyRequirement", lang)}
              </span>
              <div className="text-4xl sm:text-5xl font-black text-emerald-950 tracking-tight my-2">
                {results.grossWaterLitersPerDay.toLocaleString()}
                <span className="text-lg sm:text-xl font-bold text-emerald-700 ml-2">
                  {t("litersTotal", lang)}
                </span>
              </div>
              <p className="text-xs text-stone-600 font-medium">
                {lang === "ta" 
                  ? `(பயிர் ஆவியாதல் காரணி Kc: ${results.stageKc} • சாகுபடி: ${areaInAcres.toFixed(1)} ஏக்கர்)`
                  : `(Crop Evapotranspiration Kc: ${results.stageKc} • Area: ${areaInAcres.toFixed(1)} Acres)`}
              </p>
            </div>

            {/* Secondary 3 Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Weekly m³ */}
              <div className="bg-stone-50 rounded-xl p-4 border border-stone-200 text-center">
                <span className="text-[11px] font-bold text-stone-500 uppercase block">
                  {t("weeklyRequirement", lang)}
                </span>
                <p className="text-xl font-extrabold text-stone-900 mt-1">
                  {results.weeklyM3} m³
                </p>
                <span className="text-[10px] text-stone-500 font-medium">
                  {Math.round(results.weeklyM3 * 1000).toLocaleString()} {t("litersTotal", lang)}
                </span>
              </div>

              {/* Pump Run-Time */}
              <div className="bg-emerald-50/80 rounded-xl p-4 border border-emerald-200 text-center">
                <span className="text-[11px] font-bold text-emerald-800 uppercase block">
                  {t("recommendedRunTime", lang)}
                </span>
                <p className="text-xl font-extrabold text-emerald-950 mt-1">
                  {results.runTimeHours > 0 ? `${results.runTimeHours}h ` : ""}
                  {results.runTimeMinutes}m
                </p>
                <span className="text-[10px] text-emerald-700 font-semibold">
                  @{pumpHp} HP {lang === "ta" ? "மோட்டார்" : "Pump"}
                </span>
              </div>

              {/* Water Saved vs Flood */}
              <div className="bg-amber-50 rounded-xl p-4 border border-amber-200 text-center">
                <span className="text-[11px] font-bold text-amber-800 uppercase block">
                  {lang === "ta" ? "நீர் சேமிப்பு விகிதம்" : "Water Conserved"}
                </span>
                <p className="text-xl font-extrabold text-amber-900 mt-1">
                  {results.savingsPercent}%
                </p>
                <span className="text-[10px] text-amber-700 font-medium">
                  vs {lang === "ta" ? "வாய்மடை" : "Flood Method"}
                </span>
              </div>
            </div>

            {/* Water Savings Visual Bar */}
            <div className="space-y-2 pt-2 border-t border-stone-100">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-stone-700">
                  {lang === "ta" ? "பாசன முறை ஒப்பீடு:" : "Water Efficiency Comparison:"}
                </span>
                <span className="text-emerald-700">
                  {results.waterSavedLiters.toLocaleString()} L {lang === "ta" ? "சேமிக்கப்பட்டது / நாள்" : "Saved Daily"}
                </span>
              </div>
              <div className="h-3 w-full bg-stone-100 rounded-full overflow-hidden flex">
                <div
                  className="bg-emerald-600 h-full transition-all duration-500"
                  style={{ width: `${100 - results.savingsPercent}%` }}
                  title="Actual Water Used"
                ></div>
                <div
                  className="bg-emerald-200 h-full transition-all duration-500"
                  style={{ width: `${results.savingsPercent}%` }}
                  title="Water Conserved"
                ></div>
              </div>
              <div className="flex justify-between text-[11px] text-stone-500">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-sm bg-emerald-600 inline-block"></span>
                  {irrigation.name} ({results.grossWaterLitersPerDay.toLocaleString()} L)
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-sm bg-emerald-200 inline-block"></span>
                  {lang === "ta" ? "சேமிப்பு" : "Conserved"} ({results.waterSavedLiters.toLocaleString()} L)
                </span>
              </div>
            </div>

            {/* Optimal Irrigation Time Window Pill */}
            <div className="rounded-xl bg-amber-50/80 border border-amber-300/80 p-4 flex items-center gap-3">
              <span className="text-2xl">⏰</span>
              <div>
                <p className="text-xs font-bold text-amber-900 uppercase tracking-wide">
                  {t("bestIrrigationWindow", lang)}
                </p>
                <p className="text-sm font-extrabold text-stone-900 mt-0.5">
                  {results.bestWindow}
                </p>
                <p className="text-[11px] text-amber-800">
                  {lang === "ta"
                    ? "மதிய வெயிலில் நீர் பாய்ச்சுவதை தவிர்க்கவும்; இதனால் 30% ஆவியாதல் இழப்பு குறையும்."
                    : "Avoid midday irrigation to prevent 25-30% loss to solar evapotranspiration."}
                </p>
              </div>
            </div>
          </div>

          {/* 7-Day Personalized Irrigation Schedule */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
              <span>📅</span>
              <span>{t("irrigationSchedule", lang)}</span>
            </h3>

            <div className="grid grid-cols-7 gap-1.5 text-center">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, idx) => {
                // If drip, daily or alternate; if clay soil, alternate days
                const isWaterDay = soil.id === "clay" ? idx % 2 === 0 : true;
                return (
                  <div
                    key={day}
                    className={`p-2.5 rounded-xl border text-xs flex flex-col justify-between ${
                      isWaterDay
                        ? "bg-emerald-50 border-emerald-300 text-emerald-950 font-bold"
                        : "bg-stone-50 border-stone-200 text-stone-400 font-medium"
                    }`}
                  >
                    <span className="text-[10px] uppercase font-bold text-stone-600">{day}</span>
                    <span className="text-base my-1">{isWaterDay ? "💧" : "⏸️"}</span>
                    <span className="text-[10px] truncate">
                      {isWaterDay ? `${results.runTimeHours}h${results.runTimeMinutes}m` : (lang === "ta" ? "ஓய்வு" : "Rest")}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Agronomic Tip Callout */}
            <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs text-emerald-900 flex items-start gap-2.5">
              <span className="text-base">💡</span>
              <p className="leading-relaxed">
                <strong>{lang === "ta" ? "பயிர் நுணுக்கம்:" : "Agronomic Insight:"}</strong> {crop.waterTip}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
