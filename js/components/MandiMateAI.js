// FARMORA by AgriMitra AI – MandiMate (Smart Agricultural Market Intelligence & Selling-Value Estimator)
function MandiMateAI({ lang, showToast }) {
  const [activeSubTab, setActiveSubTab] = React.useState("estimator"); // "estimator" | "comparison" | "radar"
  const [selectedCommodityId, setSelectedCommodityId] = React.useState("paddy-ponni");
  
  // Selling-Value Estimator States
  const [quantityValue, setQuantityValue] = React.useState(25); // e.g. 25 quintals
  const [quantityUnit, setQuantityUnit] = React.useState("quintals"); // quintals, bags50, bags75, tonnes, kgs
  const [qualityGrade, setQualityGrade] = React.useState("gradeA"); // gradeA (+8%), gradeB (modal), gradeC (-10%)
  const [transportMode, setTransportMode] = React.useState("mini_truck"); // tractor, mini_truck, lorry_4t, auto
  const [selectedMarketIndex, setSelectedMarketIndex] = React.useState(0);
  
  // Search & Filter for Comparison
  const [categoryFilter, setCategoryFilter] = React.useState("all");
  const [searchQuery, setSearchQuery] = React.useState("");

  // Alert simulation
  const [alertTargetPrice, setAlertTargetPrice] = React.useState(2500);
  const [alertPhone, setAlertPhone] = React.useState("98421-XXXXX");
  const [alertSet, setAlertSet] = React.useState(false);

  // Active commodity object
  const activeCommodity = mandiPrices.find((c) => c.id === selectedCommodityId) || mandiPrices[0];
  const activeComparisons = activeCommodity.comparisons || [];
  const chosenMarket = activeComparisons[selectedMarketIndex] || activeComparisons[0];

  // Normalize quantity into Quintals (1 Quintal = 100 kg)
  const normalizedQuintals = React.useMemo(() => {
    const q = parseFloat(quantityValue) || 1;
    if (quantityUnit === "bags50") return q * 0.5;
    if (quantityUnit === "bags75") return q * 0.75;
    if (quantityUnit === "tonnes") return q * 10;
    if (quantityUnit === "kgs") return q / 100;
    return q; // quintals
  }, [quantityValue, quantityUnit]);

  // Quality multiplier
  const gradeMultiplier = React.useMemo(() => {
    if (qualityGrade === "gradeA") return 1.08; // +8% Premium
    if (qualityGrade === "gradeC") return 0.90; // -10% Deduction
    return 1.0; // Standard Modal
  }, [qualityGrade]);

  // Transport rate calculation
  const transportObj = transportRates.find((t) => t.id === transportMode) || transportRates[1];
  const calculatedTransportCost = React.useMemo(() => {
    if (!chosenMarket) return 500;
    const distance = chosenMarket.distanceKm || 20;
    const base = transportObj.baseCost;
    const kmCost = distance * transportObj.perKmRate;
    return Math.round(base + kmCost);
  }, [chosenMarket, transportObj]);

  // Financial Calculations
  const calculations = React.useMemo(() => {
    const unitPricePerQtl = Math.round(chosenMarket.modalPrice * gradeMultiplier);
    const grossRevenue = Math.round(normalizedQuintals * unitPricePerQtl);
    
    // Mandi fee (APMC Cess ~ 1.0% + Weighing & unloading ~ 0.5%)
    const mandiCess = Math.round(grossRevenue * 0.015);
    const totalDeductions = calculatedTransportCost + mandiCess;
    const netPayout = Math.max(0, grossRevenue - totalDeductions);
    const effectiveNetPerQtl = Math.round(netPayout / (normalizedQuintals || 1));

    // Middleman comparison baseline (Village aggregators typically offer 18% below APMC modal)
    const middlemanPricePerQtl = Math.round(chosenMarket.modalPrice * 0.82);
    const middlemanRevenue = Math.round(normalizedQuintals * middlemanPricePerQtl);
    const profitAdvantage = netPayout - middlemanRevenue;

    return {
      unitPricePerQtl,
      grossRevenue,
      mandiCess,
      totalDeductions,
      netPayout,
      effectiveNetPerQtl,
      middlemanRevenue,
      profitAdvantage
    };
  }, [chosenMarket, gradeMultiplier, normalizedQuintals, calculatedTransportCost]);

  // Handle setting price alert
  const handleSetAlert = (e) => {
    e.preventDefault();
    setAlertSet(true);
    showToast(
      lang === "ta"
        ? `விலை எச்சரிக்கை பதிவு செய்யப்பட்டது: ₹${alertTargetPrice}/குவிண்டால் எட்டும்போது ${alertPhone} எண்ணிற்கு செய்தி அனுப்பப்படும்!`
        : `Price alert set: You will receive an SMS/WhatsApp on ${alertPhone} when ${activeCommodity.commodity} crosses ₹${alertTargetPrice}/Qtl!`,
      "success"
    );
  };

  // Filtered commodities for the radar view
  const filteredCommodities = React.useMemo(() => {
    return mandiPrices.filter((item) => {
      const matchesCategory = categoryFilter === "all" || item.category === categoryFilter;
      const matchesSearch =
        item.commodity.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.variety.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.market.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.tamilCommodity && item.tamilCommodity.includes(searchQuery));
      return matchesCategory && matchesSearch;
    });
  }, [categoryFilter, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 animate-fadeIn">
      {/* 1. Header Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-teal-900 to-green-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-emerald-500/20 to-transparent pointer-events-none"></div>
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/80 text-emerald-200 text-xs font-bold uppercase tracking-wider mb-3">
            <span>📈</span>
            <span>AgriMitra AI • Module 02</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {lang === "ta" 
              ? "மண்டிமேட் – வேளாண் சந்தை நுண்ணறிவு & விற்பனை மதிப்பு கணிப்பான்" 
              : "MandiMate – Smart Agricultural Market Intelligence"}
          </h1>
          <p className="text-emerald-100/90 text-sm sm:text-base mt-2 font-normal leading-relaxed">
            {lang === "ta"
              ? "ஒழுங்குமுறை விற்பனைக்கூட நேரடி விலை ஒப்பீடு, போக்குவரத்து செலவு கழிவுகள் மற்றும் இடைத்தரகர்களைத் தவிர்த்து அதிக லாபம் தரும் விற்பனைக் கணிப்பு."
              : "Live APMC price comparison across regional mandis, transport-factored net profit estimation, and intelligent selling window recommendations."}
          </p>
        </div>

        {/* Sub-Navigation Tabs */}
        <div className="relative z-10 mt-6 flex flex-wrap gap-2 pt-2 border-t border-emerald-800/60">
          <button
            onClick={() => setActiveSubTab("estimator")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeSubTab === "estimator"
                ? "bg-white text-emerald-950 shadow-md"
                : "bg-emerald-900/60 text-emerald-100 hover:bg-emerald-800/70"
            }`}
          >
            <span>💰</span>
            <span>{lang === "ta" ? "விற்பனை மதிப்பு & லாப கணிப்பான்" : "Selling-Value & Profit Estimator"}</span>
          </button>

          <button
            onClick={() => setActiveSubTab("comparison")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeSubTab === "comparison"
                ? "bg-white text-emerald-950 shadow-md"
                : "bg-emerald-900/60 text-emerald-100 hover:bg-emerald-800/70"
            }`}
          >
            <span>⚖️</span>
            <span>{lang === "ta" ? "மண்டிகள் நேரடி ஒப்பீடு" : "Multi-Mandi Price Comparison"}</span>
          </button>

          <button
            onClick={() => setActiveSubTab("radar")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeSubTab === "radar"
                ? "bg-white text-emerald-950 shadow-md"
                : "bg-emerald-900/60 text-emerald-100 hover:bg-emerald-800/70"
            }`}
          >
            <span>📡</span>
            <span>{lang === "ta" ? "சந்தை ரேடார் & விலை எச்சரிக்கை" : "Market Radar & Price Alerts"}</span>
          </button>
        </div>
      </div>

      {/* 2. TAB 1: SELLING-VALUE ESTIMATOR */}
      {activeSubTab === "estimator" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Inputs Form */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
            <h2 className="text-lg font-bold text-stone-900 flex items-center gap-2 border-b border-stone-100 pb-3">
              <span>🌾</span>
              <span>{lang === "ta" ? "விவசாய விளைபொருள் & அளவு விவரங்கள்" : "Produce & Quantity Details"}</span>
            </h2>

            {/* Select Commodity */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-stone-700 uppercase tracking-wider">
                {lang === "ta" ? "பயிரைத் தேர்ந்தெடுக்கவும்" : "Select Crop / Commodity"}
              </label>
              <select
                value={selectedCommodityId}
                onChange={(e) => {
                  setSelectedCommodityId(e.target.value);
                  setSelectedMarketIndex(0);
                }}
                className="w-full bg-stone-50 border border-stone-300 rounded-2xl px-4 py-3 text-sm font-bold text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                {mandiPrices.map((p) => (
                  <option key={p.id} value={p.id}>
                    {lang === "ta" ? `${p.tamilCommodity} (${p.tamilVariety})` : `${p.commodity} – ${p.variety}`}
                  </option>
                ))}
              </select>
            </div>

            {/* Quantity and Unit */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-700 uppercase tracking-wider">
                {lang === "ta" ? "விற்பனைக்கு உள்ள மொத்த அளவு" : "Total Harvest Quantity to Sell"}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
                <input
                  type="number"
                  min="1"
                  step="0.5"
                  value={quantityValue}
                  onChange={(e) => setQuantityValue(Math.max(1, parseFloat(e.target.value) || 1))}
                  className="sm:col-span-7 bg-stone-50 border border-stone-300 rounded-2xl px-4 py-3 text-base font-black text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <select
                  value={quantityUnit}
                  onChange={(e) => setQuantityUnit(e.target.value)}
                  className="sm:col-span-5 bg-stone-50 border border-stone-300 rounded-2xl px-3 py-3 text-xs font-bold text-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="quintals">{lang === "ta" ? "குவிண்டால் (100 kg)" : "Quintals (100 kg)"}</option>
                  <option value="bags50">{lang === "ta" ? "50 kg மூட்டைகள்" : "Bags (50 kg)"}</option>
                  <option value="bags75">{lang === "ta" ? "75 kg மூட்டைகள்" : "Bags (75 kg)"}</option>
                  <option value="tonnes">{lang === "ta" ? "மெட்ரிக் டன்கள்" : "Metric Tonnes"}</option>
                  <option value="kgs">{lang === "ta" ? "கிலோகிராம் (kg)" : "Kilograms (kg)"}</option>
                </select>
              </div>
              <p className="text-[11px] text-stone-500 font-medium">
                {lang === "ta" 
                  ? `கணக்கீட்டு அளவு: ${normalizedQuintals.toFixed(1)} குவிண்டால் (${(normalizedQuintals * 100).toLocaleString()} கிலோ)` 
                  : `Equivalent Weight: ${normalizedQuintals.toFixed(1)} Quintals (${(normalizedQuintals * 100).toLocaleString()} kg)`}
              </p>
            </div>

            {/* Quality Grade */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-700 uppercase tracking-wider">
                {lang === "ta" ? "விளைபொருளின் தரம்" : "Produce Quality Grade"}
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setQualityGrade("gradeA")}
                  className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                    qualityGrade === "gradeA"
                      ? "border-emerald-600 bg-emerald-50 text-emerald-950 font-black ring-2 ring-emerald-500/20"
                      : "border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-700 font-medium"
                  }`}
                >
                  <span className="block text-xs font-bold">{lang === "ta" ? "முதல் தரம்" : "Grade A"}</span>
                  <span className="text-[10px] text-emerald-700 font-bold">+8% Premium</span>
                </button>

                <button
                  type="button"
                  onClick={() => setQualityGrade("gradeB")}
                  className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                    qualityGrade === "gradeB"
                      ? "border-emerald-600 bg-emerald-50 text-emerald-950 font-black ring-2 ring-emerald-500/20"
                      : "border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-700 font-medium"
                  }`}
                >
                  <span className="block text-xs font-bold">{lang === "ta" ? "சராசரி தரம்" : "Grade B"}</span>
                  <span className="text-[10px] text-stone-500">Standard Modal</span>
                </button>

                <button
                  type="button"
                  onClick={() => setQualityGrade("gradeC")}
                  className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                    qualityGrade === "gradeC"
                      ? "border-emerald-600 bg-emerald-50 text-emerald-950 font-black ring-2 ring-emerald-500/20"
                      : "border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-700 font-medium"
                  }`}
                >
                  <span className="block text-xs font-bold">{lang === "ta" ? "கலவை தரம்" : "Grade C"}</span>
                  <span className="text-[10px] text-amber-700 font-bold">-10% Mixed</span>
                </button>
              </div>
            </div>

            {/* Target Mandi Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-700 uppercase tracking-wider">
                {lang === "ta" ? "விற்பனை செய்ய விரும்பும் மண்டி" : "Choose Destination Mandi"}
              </label>
              <div className="space-y-2">
                {activeComparisons.map((m, idx) => (
                  <button
                    key={m.market}
                    type="button"
                    onClick={() => setSelectedMarketIndex(idx)}
                    className={`w-full p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                      selectedMarketIndex === idx
                        ? "border-emerald-600 bg-emerald-50/80 ring-2 ring-emerald-500/20"
                        : "border-stone-200 bg-stone-50 hover:bg-stone-100"
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-stone-900">{m.market}</span>
                        <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                          {m.badge}
                        </span>
                      </div>
                      <p className="text-[11px] text-stone-500 mt-0.5">
                        {m.distanceKm} km {lang === "ta" ? "தொலைவு" : "from your farm"}
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="text-sm font-black text-emerald-900 block">
                        ₹{m.modalPrice.toLocaleString()}
                      </span>
                      <span className="text-[10px] text-stone-500">/ Quintal</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Transport Vehicle Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-700 uppercase tracking-wider">
                {lang === "ta" ? "போக்குவரத்து வாகனம்" : "Logistics & Transport Vehicle"}
              </label>
              <div className="grid grid-cols-2 gap-2">
                {transportRates.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTransportMode(t.id)}
                    className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-2.5 ${
                      transportMode === t.id
                        ? "border-emerald-600 bg-emerald-50 text-emerald-950 font-bold ring-2 ring-emerald-500/20"
                        : "border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-700"
                    }`}
                  >
                    <span className="text-xl">{t.icon}</span>
                    <div className="min-w-0">
                      <p className="text-xs font-bold truncate">
                        {lang === "ta" ? t.tamilName : t.name}
                      </p>
                      <p className="text-[10px] text-stone-500 truncate">
                        Cap: {t.capacityQuintals} Qtl
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Financial Breakdown & Profit Advantage Card */}
          <div className="lg:col-span-7 space-y-6">
            {/* Master Financial Payout Card */}
            <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 pb-4">
                <div>
                  <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">
                    {lang === "ta" ? "நிகர வருமானக் கணிப்பு" : "Net Take-Home Calculation"}
                  </span>
                  <h3 className="text-xl font-black text-stone-900">
                    {activeCommodity.commodity} ({activeCommodity.variety})
                  </h3>
                  <p className="text-xs text-stone-500">
                    {chosenMarket.market} • {normalizedQuintals.toFixed(1)} Quintals @ ₹{calculations.unitPricePerQtl}/Qtl
                  </p>
                </div>

                <div className="text-left sm:text-right">
                  <span className="text-[11px] text-stone-500 font-medium block">
                    {lang === "ta" ? "கையிருப்பு நிகர வருமானம்" : "Net Farmer Payout"}
                  </span>
                  <span className="text-3xl sm:text-4xl font-black text-emerald-700">
                    ₹{calculations.netPayout.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Deductions Breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200">
                  <span className="text-[10px] font-bold text-stone-500 uppercase block">
                    {lang === "ta" ? "மொத்த விற்பனை மதிப்பு" : "Gross Market Value"}
                  </span>
                  <p className="text-lg font-black text-stone-900 mt-1">
                    ₹{calculations.grossRevenue.toLocaleString()}
                  </p>
                  <span className="text-[10px] text-stone-500">
                    Before Mandi Deductions
                  </span>
                </div>

                <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200">
                  <span className="text-[10px] font-bold text-stone-500 uppercase block">
                    {lang === "ta" ? "போக்குவரத்து & கூலி" : "Transport & Freight"}
                  </span>
                  <p className="text-lg font-black text-amber-700 mt-1">
                    -₹{calculatedTransportCost.toLocaleString()}
                  </p>
                  <span className="text-[10px] text-stone-500">
                    {chosenMarket.distanceKm} km ({transportObj.name})
                  </span>
                </div>

                <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200">
                  <span className="text-[10px] font-bold text-stone-500 uppercase block">
                    {lang === "ta" ? "மண்டி கட்டணம் & எடை" : "APMC Cess & Weighing"}
                  </span>
                  <p className="text-lg font-black text-amber-700 mt-1">
                    -₹{calculations.mandiCess.toLocaleString()}
                  </p>
                  <span className="text-[10px] text-stone-500">
                    1.5% Regulated Market Fee
                  </span>
                </div>
              </div>

              {/* Profit Advantage vs Village Middleman Highlight */}
              <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-white rounded-3xl p-6 border-2 border-emerald-300 shadow-sm space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">💰</span>
                  <h4 className="text-base font-extrabold text-emerald-950">
                    {lang === "ta" 
                      ? "இடைத்தரகர் இல்லாமல் மண்டிமேட் மூலம் நீங்கள் பெறும் கூடுதல் லாபம்!" 
                      : "Direct Mandi Advantage vs Local Middleman Aggregators"}
                  </h4>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                  <div>
                    <p className="text-xs text-stone-600 leading-relaxed max-w-md">
                      {lang === "ta"
                        ? "கிராமப்புற இடைத்தரகர்கள் பொதுவாக மண்டி விலையை விட 18% குறைவாக வாங்குவர். மண்டிமேட் வழிகாட்டுதல் மூலம் நீங்கள் நேரடியாக விற்பனை செய்வதால் கிடைக்கும் நிகர லாபம்:"
                        : "Village traders usually buy at 18% below modal APMC rates. By using MandiMate's market intelligence to sell directly at the optimal mandi:"}
                    </p>
                    <p className="text-xs font-bold text-stone-700 mt-1">
                      Middleman Offer: ₹{calculations.middlemanRevenue.toLocaleString()} ➔ Mandi Net Payout: ₹{calculations.netPayout.toLocaleString()}
                    </p>
                  </div>

                  <div className="bg-emerald-600 text-white rounded-2xl p-4 text-center sm:text-right shrink-0 shadow-md">
                    <span className="text-[10px] font-bold uppercase tracking-wider block text-emerald-100">
                      {lang === "ta" ? "கூடுதல் நிகர லாபம்" : "Extra Pure Profit"}
                    </span>
                    <span className="text-2xl sm:text-3xl font-black block">
                      +₹{calculations.profitAdvantage.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Intelligent Market Advisory Banner */}
              <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200 flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <div className="space-y-1">
                  <h5 className="text-xs font-bold text-stone-900">
                    {lang === "ta" ? "மண்டிமேட் உகந்த விற்பனை நேரம் பரிந்துரை" : "MandiMate Intelligent Selling Window Advisory"}
                  </h5>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {lang === "ta" ? activeCommodity.tamilAdvisory : activeCommodity.advisory}
                  </p>
                  <p className="text-[11px] text-emerald-800 font-bold">
                    ✓ Recommended Action: Transport early morning before 07:00 AM for brisk lot auctions and minimum weighing queue.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="px-5 py-3 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>📄</span>
                  <span>{lang === "ta" ? "விற்பனை மதிப்பறிக்கையை அச்சிடுக" : "Print / Export Valuation Slip"}</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    showToast(
                      lang === "ta" 
                        ? `${chosenMarket.market} மண்டி செயலாளரின் எண்: 04362-234891 உடன் இணைக்கப்படுகிறது...` 
                        : `Connecting to ${chosenMarket.market} APMC secretary: 04362-234891...`,
                      "info"
                    );
                  }}
                  className="px-5 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs sm:text-sm border border-stone-300 transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>📞</span>
                  <span>{lang === "ta" ? "மண்டி செயலாளரை தொடர்பு கொள்ள" : "Call APMC Secretary"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. TAB 2: MULTI-MANDI PRICE COMPARISON */}
      {activeSubTab === "comparison" && (
        <div className="space-y-6">
          {/* Commodity Selection Chips */}
          <div className="bg-white rounded-3xl border border-stone-200 p-6 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-extrabold text-stone-900">
                  {lang === "ta" ? "பயிர்களைத் தேர்ந்தெடுத்து மண்டிகளை ஒப்பிடுக" : "Compare Regional Mandis for Selected Crop"}
                </h3>
                <p className="text-xs text-stone-500">
                  Side-by-side rates, daily arrivals, modal prices, and net payout per quintal
                </p>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-1.5">
                {[
                  { id: "all", label: lang === "ta" ? "அனைத்தும்" : "All" },
                  { id: "cereals", label: lang === "ta" ? "தானியங்கள்" : "Cereals" },
                  { id: "cash_crops", label: lang === "ta" ? "பணப்பயிர்கள்" : "Cash Crops" },
                  { id: "vegetables", label: lang === "ta" ? "காய்கறிகள்" : "Vegetables" },
                  { id: "fruits", label: lang === "ta" ? "பழங்கள்" : "Fruits" }
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setCategoryFilter(cat.id)}
                    className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      categoryFilter === cat.id
                        ? "bg-emerald-800 text-white shadow-xs"
                        : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Crop Chips */}
            <div className="flex flex-wrap gap-2 pt-2">
              {filteredCommodities.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedCommodityId(item.id)}
                  className={`px-3.5 py-2 rounded-2xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                    selectedCommodityId === item.id
                      ? "bg-emerald-600 text-white shadow-md scale-102"
                      : "bg-stone-50 hover:bg-stone-100 text-stone-800 border border-stone-200"
                  }`}
                >
                  <span>{item.category === "vegetables" ? "🍅" : item.category === "fruits" ? "🍌" : "🌾"}</span>
                  <span>{lang === "ta" ? item.tamilCommodity : item.commodity}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Commodity Details Header Banner */}
          <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-7 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                {activeCommodity.category.toUpperCase()} • {activeCommodity.variety}
              </span>
              <h2 className="text-2xl font-black text-stone-900 mt-1">
                {activeCommodity.commodity} ({activeCommodity.variety})
              </h2>
              <p className="text-xs text-stone-500">
                Central Govt MSP: <strong className="text-stone-900">₹{activeCommodity.msp.toLocaleString()}/Qtl</strong> • 
                State Benchmark Modal: <strong className="text-emerald-800">₹{activeCommodity.modalPrice.toLocaleString()}/Qtl</strong>
              </p>
            </div>

            {/* 7-Day Trend Chart Simulation */}
            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 flex items-center gap-4">
              <div>
                <span className="text-[10px] font-bold text-stone-500 uppercase block">7-Day Trend</span>
                <span className={`text-base font-black ${activeCommodity.trendDirection === "up" ? "text-emerald-700" : "text-amber-700"}`}>
                  {activeCommodity.trend} {activeCommodity.trendDirection === "up" ? "▲" : "▼"}
                </span>
              </div>
              <div className="flex items-end gap-1 h-8">
                {activeCommodity.trendHistory.map((val, idx) => {
                  const minH = Math.min(...activeCommodity.trendHistory);
                  const maxH = Math.max(...activeCommodity.trendHistory);
                  const pct = Math.max(25, Math.round(((val - minH) / (maxH - minH || 1)) * 100));
                  return (
                    <div
                      key={idx}
                      title={`Day ${idx + 1}: ₹${val}`}
                      className="w-2.5 bg-emerald-600 rounded-t"
                      style={{ height: `${pct}%` }}
                    ></div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mandi Cards Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {activeComparisons.map((m) => (
              <div
                key={m.market}
                className="bg-white rounded-3xl border border-stone-200 p-6 shadow-sm space-y-4 hover:border-emerald-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full uppercase">
                      {m.badge}
                    </span>
                    <span className="text-xs text-stone-500 font-bold">
                      {m.distanceKm} km away
                    </span>
                  </div>

                  <div>
                    <h4 className="text-base font-extrabold text-stone-900 leading-snug">
                      {m.market}
                    </h4>
                    <span className="text-2xl font-black text-emerald-950 block mt-1">
                      ₹{m.modalPrice.toLocaleString()}
                    </span>
                    <span className="text-xs text-stone-500">Modal Rate / Quintal</span>
                  </div>

                  {/* Range Bar */}
                  <div className="space-y-1 pt-2 border-t border-stone-100 text-xs">
                    <div className="flex justify-between text-[11px] text-stone-500 font-medium">
                      <span>Min: ₹{m.minPrice.toLocaleString()}</span>
                      <span>Max: ₹{m.maxPrice.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-600 h-full w-4/5 rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-100 space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-stone-600 font-medium">Transport Deduction:</span>
                    <span className="font-bold text-amber-800">-₹{m.transportCost}</span>
                  </div>
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-stone-900">Net Take-Home / Qtl:</span>
                    <span className="text-emerald-800 font-black">₹{m.netPerQtl.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. TAB 3: MARKET RADAR & PRICE ALERTS */}
      {activeSubTab === "radar" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* SMS / WhatsApp Price Alert Form */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2 border-b border-stone-100 pb-3">
              <span>🔔</span>
              <span>{lang === "ta" ? "இலவச வாட்ஸ்அப் / SMS விலை எச்சரிக்கை" : "Set Real-time Price Alerts"}</span>
            </h3>

            <p className="text-xs text-stone-600 leading-relaxed">
              {lang === "ta"
                ? "உங்கள் பயிர் நிர்ணயித்த இலக்கு விலையை எட்டும்போது உடனடி குறுஞ்செய்தி பெற்று சிறந்த நேரத்தில் விற்பனை செய்யுங்கள்."
                : "Never miss a price spike. Receive instant notification when your commodity reaches your desired selling price in your selected district."}
            </p>

            <form onSubmit={handleSetAlert} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-700 uppercase">
                  {lang === "ta" ? "பயிர்" : "Commodity"}
                </label>
                <select
                  value={selectedCommodityId}
                  onChange={(e) => setSelectedCommodityId(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 rounded-2xl px-3.5 py-2.5 text-xs font-bold text-stone-900"
                >
                  {mandiPrices.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.commodity} ({c.market})
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-700 uppercase">
                  {lang === "ta" ? "இலக்கு விலை (₹ / குவிண்டால்)" : "Target Trigger Price (₹ / Qtl)"}
                </label>
                <input
                  type="number"
                  value={alertTargetPrice}
                  onChange={(e) => setAlertTargetPrice(parseInt(e.target.value) || 0)}
                  className="w-full bg-stone-50 border border-stone-300 rounded-2xl px-4 py-2.5 text-sm font-black text-stone-900"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-700 uppercase">
                  {lang === "ta" ? "கைபேசி எண் (வாட்ஸ்அப் / SMS)" : "Mobile Number (WhatsApp/SMS)"}
                </label>
                <input
                  type="text"
                  value={alertPhone}
                  onChange={(e) => setAlertPhone(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 rounded-2xl px-4 py-2.5 text-sm font-bold text-stone-900"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>🔔</span>
                <span>{lang === "ta" ? "விலை எச்சரிக்கையை இயக்கு" : "Activate Price Alert"}</span>
              </button>
            </form>

            {alertSet && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs text-emerald-950 flex items-center gap-2">
                <span>✓</span>
                <span>
                  {lang === "ta" 
                    ? `செயலில் உள்ளது: ${activeCommodity.commodity} விலை ₹${alertTargetPrice} ஐ எட்டும்போது ${alertPhone} எண்ணிற்கு செய்தி வரும்.` 
                    : `Active: You'll be alerted when ${activeCommodity.commodity} crosses ₹${alertTargetPrice}/Qtl.`}
                </span>
              </div>
            )}
          </div>

          {/* APMC Regulated Market Committee Helpline Directory */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-5">
            <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2 border-b border-stone-100 pb-3">
              <span>🏛️</span>
              <span>{lang === "ta" ? "ஒழுங்குமுறை விற்பனைக்கூட தொடர்பு எண்கள்" : "APMC Regulated Market Committee Directory"}</span>
            </h3>

            <p className="text-xs text-stone-600 leading-relaxed">
              Direct contact coordinates for Market Committee Secretaries across key Tamil Nadu agricultural terminals:
            </p>

            <div className="space-y-3">
              {mandiHelplines.map((item) => (
                <div
                  key={item.market}
                  className="p-4 rounded-2xl border border-stone-200 bg-stone-50 flex items-center justify-between gap-3"
                >
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">{item.market}</h4>
                    <p className="text-[11px] text-stone-500">Secretary: <strong className="text-stone-700">{item.secretary}</strong></p>
                    <span className="text-[10px] text-emerald-700 font-semibold">{item.timing}</span>
                  </div>

                  <a
                    href={`tel:${item.phone}`}
                    onClick={(e) => {
                      e.preventDefault();
                      showToast(`Calling ${item.market} (${item.phone})...`, "info");
                    }}
                    className="px-3.5 py-2 rounded-xl bg-emerald-100 hover:bg-emerald-200 text-emerald-900 font-bold text-xs flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>📞</span>
                    <span>{item.phone}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
