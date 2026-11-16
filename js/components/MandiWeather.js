// FARMORA – Weather & Wholesale Mandi Market Section
function MandiWeather({ lang, showToast }) {
  const [selectedDistrictKey, setSelectedDistrictKey] = React.useState("thanjavur");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCommodityFilter, setSelectedCommodityFilter] = React.useState("all");

  const weather = districtsWeather[selectedDistrictKey] || districtsWeather.thanjavur;

  // Filtered mandi prices
  const filteredPrices = React.useMemo(() => {
    return mandiPrices.filter((item) => {
      const matchesSearch =
        item.commodity.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.market.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.variety.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.tamilCommodity && item.tamilCommodity.includes(searchQuery));

      const matchesFilter =
        selectedCommodityFilter === "all" ||
        item.commodity.toLowerCase().includes(selectedCommodityFilter.toLowerCase());

      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, selectedCommodityFilter]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-teal-900 to-emerald-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/80 text-emerald-200 text-xs font-bold uppercase tracking-wider mb-3">
            <span>🌦️</span>
            <span>Real-time Agricultural Telemetry</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {t("wmTitle", lang)}
          </h1>
          <p className="text-emerald-100/90 text-sm sm:text-base mt-2 font-normal leading-relaxed">
            {t("wmSubtitle", lang)}
          </p>
        </div>
      </div>

      {/* 1. WEATHER SECTION */}
      <section className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4">
          <div>
            <h2 className="text-xl font-extrabold text-stone-900">
              {lang === "ta" ? "வேளாண் வானிலை & தெளிப்பு வழிகாட்டி" : "Micro-Climate Agro-Meteorology"}
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              Evapotranspiration, solar radiation, and spray window analytics
            </p>
          </div>

          {/* District Switcher */}
          <div className="flex items-center gap-2">
            <label className="text-xs font-bold text-stone-600 uppercase">
              {t("selectDistrict", lang)}:
            </label>
            <select
              value={selectedDistrictKey}
              onChange={(e) => setSelectedDistrictKey(e.target.value)}
              className="bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-xs font-bold text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="thanjavur">Thanjavur (Cauvery Delta)</option>
              <option value="coimbatore">Coimbatore (Western Zone)</option>
              <option value="madurai">Madurai (Southern Zone)</option>
              <option value="salem">Salem & Namakkal Zone</option>
            </select>
          </div>
        </div>

        {/* Current Weather Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Main Temperature Card */}
          <div className="md:col-span-5 bg-gradient-to-br from-emerald-50 via-teal-50 to-white rounded-2xl p-6 border border-emerald-200/80 flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">
                {lang === "ta" ? weather.tamilDistrict : weather.district}
              </span>
              <p className="text-4xl sm:text-5xl font-black text-emerald-950 mt-1">
                {weather.temp}°C
              </p>
              <p className="text-xs font-semibold text-stone-600 mt-1">
                {lang === "ta" ? weather.tamilCondition : weather.condition} (Feels like {weather.feelsLike}°C)
              </p>
            </div>
            <span className="text-5xl">⛅</span>
          </div>

          {/* Secondary Agro Weather Metrics */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200 text-center">
              <span className="text-[10px] font-bold text-stone-500 uppercase block">Humidity</span>
              <p className="text-lg font-black text-stone-900 mt-0.5">{weather.humidity}%</p>
              <span className="text-[10px] text-stone-500">Dew Point 22°</span>
            </div>

            <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200 text-center">
              <span className="text-[10px] font-bold text-stone-500 uppercase block">Wind Speed</span>
              <p className="text-lg font-black text-stone-900 mt-0.5">{weather.windSpeed.split(" ")[0]}</p>
              <span className="text-[10px] text-stone-500">{weather.windDirection}</span>
            </div>

            <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200 text-center">
              <span className="text-[10px] font-bold text-stone-500 uppercase block">Rain Chance</span>
              <p className="text-lg font-black text-emerald-700 mt-0.5">{weather.rainfallProb}</p>
              <span className="text-[10px] text-stone-500">Next 12 Hours</span>
            </div>

            <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200 text-center">
              <span className="text-[10px] font-bold text-stone-500 uppercase block">Ref ET (ET₀)</span>
              <p className="text-lg font-black text-stone-900 mt-0.5">{weather.et0}</p>
              <span className="text-[10px] text-stone-500">Penman Standard</span>
            </div>
          </div>
        </div>

        {/* Agrochemical Spray Window Advisory */}
        <div className={`p-4 sm:p-5 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
          weather.sprayAdvisory.status === "OPTIMAL"
            ? "bg-emerald-50 border-emerald-200 text-emerald-950"
            : weather.sprayAdvisory.status === "MODERATE"
            ? "bg-amber-50 border-amber-200 text-amber-950"
            : "bg-red-50 border-red-200 text-red-950"
        }`}>
          <div className="flex items-start gap-3">
            <span className="text-2xl mt-0.5">🌿</span>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wide">
                  {t("sprayAdvisory", lang)}: <span className="underline">{weather.sprayAdvisory.status}</span>
                </h4>
              </div>
              <p className="text-xs font-bold mt-0.5">
                {t("optimalSpray", lang)}: {lang === "ta" ? weather.sprayAdvisory.tamilWindow : weather.sprayAdvisory.window}
              </p>
              <p className="text-[11px] opacity-90 mt-0.5 leading-relaxed">
                {weather.sprayAdvisory.reason}
              </p>
            </div>
          </div>

          <span className={`px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider flex-shrink-0 ${
            weather.sprayAdvisory.status === "OPTIMAL"
              ? "bg-emerald-700 text-white"
              : weather.sprayAdvisory.status === "MODERATE"
              ? "bg-amber-600 text-white"
              : "bg-red-600 text-white"
          }`}>
            {weather.sprayAdvisory.status}
          </span>
        </div>

        {/* 5-Day Agro Forecast */}
        <div className="space-y-3 pt-2">
          <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wider">
            {t("fiveDayForecast", lang)}
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {weather.forecast.map((fc, idx) => (
              <div
                key={idx}
                className="bg-stone-50 rounded-2xl p-3.5 border border-stone-200 text-center space-y-1.5"
              >
                <span className="text-xs font-extrabold text-stone-700 block uppercase">
                  {fc.day}
                </span>
                <span className="text-2xl block">{fc.icon}</span>
                <p className="text-xs font-black text-stone-900">
                  {fc.tempMax}° / <span className="text-stone-500 font-normal">{fc.tempMin}°</span>
                </p>
                <span className="text-[10px] text-emerald-800 font-bold block bg-emerald-100/60 rounded px-1 py-0.5">
                  🌧️ {fc.rain} Rain
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. MANDI WHOLESALE MARKET PRICE TICKER */}
      <section className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4">
          <div>
            <h2 className="text-xl font-extrabold text-stone-900">
              {t("mandiPricesTitle", lang)}
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              Live wholesale arrivals directly from Regulated APMC Mandis across Tamil Nadu
            </p>
          </div>

          {/* Search & Filter */}
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="text"
              placeholder={t("searchCommodity", lang)}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-56 bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2 text-xs font-medium text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <select
              value={selectedCommodityFilter}
              onChange={(e) => setSelectedCommodityFilter(e.target.value)}
              className="w-full sm:w-36 bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-xs font-bold text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="all">All Crops</option>
              <option value="paddy">Paddy / Rice</option>
              <option value="cotton">Cotton</option>
              <option value="turmeric">Turmeric</option>
              <option value="tomato">Tomato</option>
              <option value="onion">Onion</option>
            </select>
          </div>
        </div>

        {/* Responsive Mandi Price Table */}
        <div className="overflow-x-auto rounded-2xl border border-stone-200">
          <table className="w-full text-left text-xs">
            <thead className="bg-stone-100/80 text-stone-700 font-extrabold uppercase tracking-wider text-[11px] border-b border-stone-200">
              <tr>
                <th className="py-3 px-4">{t("commodity", lang)}</th>
                <th className="py-3 px-4">{t("variety", lang)}</th>
                <th className="py-3 px-4">{t("market", lang)}</th>
                <th className="py-3 px-4 text-right">{t("minPrice", lang)}</th>
                <th className="py-3 px-4 text-right">{t("maxPrice", lang)}</th>
                <th className="py-3 px-4 text-right">{t("modalPrice", lang)}</th>
                <th className="py-3 px-4 text-center">{t("trend", lang)}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-stone-800">
              {filteredPrices.map((item) => (
                <tr key={item.id} className="hover:bg-emerald-50/40 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-stone-900">
                    {lang === "ta" && item.tamilCommodity ? item.tamilCommodity : item.commodity}
                  </td>
                  <td className="py-3.5 px-4 text-stone-600">
                    {lang === "ta" && item.tamilVariety ? item.tamilVariety : item.variety}
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-emerald-900">
                    📍 {lang === "ta" && item.tamilMarket ? item.tamilMarket : item.market}
                  </td>
                  <td className="py-3.5 px-4 text-right font-medium text-stone-600">
                    ₹{item.minPrice.toLocaleString()}
                  </td>
                  <td className="py-3.5 px-4 text-right font-medium text-stone-600">
                    ₹{item.maxPrice.toLocaleString()}
                  </td>
                  <td className="py-3.5 px-4 text-right font-extrabold text-stone-900 text-sm">
                    ₹{item.modalPrice.toLocaleString()}
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-extrabold ${
                      item.trendDirection === "up"
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-red-100 text-red-800"
                    }`}>
                      {item.trendDirection === "up" ? "▲" : "▼"} {item.trend}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-stone-500 pt-2 gap-2">
          <span>✓ Data synchronized every 4 hours from Agmarknet API</span>
          <span className="text-emerald-800 font-semibold">
            All prices normalized to Indian Standard Quintal (100 kg)
          </span>
        </div>
      </section>
    </div>
  );
}
