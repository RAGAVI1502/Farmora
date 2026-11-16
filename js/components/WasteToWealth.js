// FARMORA by AgriMitra AI – Waste to Wealth (Composting, Biomass Reuse & Resource Sharing)
function WasteToWealth({ lang, showToast }) {
  const [activeW2WTab, setActiveW2WTab] = React.useState("biomass"); // "biomass" | "composting" | "sharing"
  
  // Biomass Reuse States
  const [selectedWasteId, setSelectedWasteId] = React.useState("rice-straw");
  const [quantityTons, setQuantityTons] = React.useState(3.0);
  const [activeStepTab, setActiveStepTab] = React.useState(1);
  const [buyerModalOpen, setBuyerModalOpen] = React.useState(false);
  const [selectedBuyer, setSelectedBuyer] = React.useState(null);

  // Composting Hub States
  const [selectedCompostProtocolId, setSelectedCompostProtocolId] = React.useState("vermicompost");
  const [brownTons, setBrownTons] = React.useState(2.0); // Carbon source
  const [greenTons, setGreenTons] = React.useState(1.0); // Nitrogen source (cattle dung/green waste)

  // Resource Sharing States
  const [sharingCategory, setSharingCategory] = React.useState("equipment"); // "equipment" | "biomassExchange"
  const [shareModalOpen, setShareModalOpen] = React.useState(false);
  const [listingForm, setListingForm] = React.useState({
    itemTitle: "",
    ownerName: "",
    village: "",
    rate: "",
    phone: ""
  });

  const waste = wasteData.find((w) => w.id === selectedWasteId) || wasteData[0];
  const compostProtocol = compostingProtocols.find((c) => c.id === selectedCompostProtocolId) || compostingProtocols[0];

  // Dynamic calculations for Biomass
  const totalValue = Math.round(quantityTons * waste.valuePerTon);
  const totalCo2Averted = Math.round(quantityTons * waste.co2SavedPerTon);
  const potentialHighMarginUpper = Math.round(quantityTons * (waste.valuePerTon * 2.8));

  // Composting Yield & C:N Ratio
  const totalCompostProducedKg = Math.round((brownTons + greenTons) * 450); // ~45% conversion efficiency
  const calculatedCnRatio = Math.round((brownTons * 60 + greenTons * 15) / (brownTons + greenTons));

  const handleConnectBuyer = (buyer) => {
    setSelectedBuyer(buyer);
    setBuyerModalOpen(true);
  };

  const handleBookEquipment = (eq) => {
    showToast(
      lang === "ta"
        ? `${eq.name} முன்பதிவு கோரிக்கை உரிமையாளர் ${eq.owner} (${eq.phone}) க்கு அனுப்பப்பட்டது!`
        : `Booking request for ${eq.name} sent to owner ${eq.owner} (${eq.phone})!`,
      "success"
    );
  };

  const handleSubmitListing = (e) => {
    e.preventDefault();
    if (!listingForm.itemTitle || !listingForm.phone) {
      showToast(lang === "ta" ? "விவரங்களை முழுமையாக நிரப்பவும்" : "Please complete required fields", "error");
      return;
    }
    setShareModalOpen(false);
    showToast(
      lang === "ta"
        ? `உங்கள் பதிவு சமூக பகிர்வு மையத்தில் வெளியிடப்பட்டது: "${listingForm.itemTitle}"`
        : `Listing published to Community Sharing Hub: "${listingForm.itemTitle}"`,
      "success"
    );
    setListingForm({ itemTitle: "", ownerName: "", village: "", rate: "", phone: "" });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 animate-fadeIn">
      {/* 1. Header Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-teal-900 to-green-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-emerald-500/20 to-transparent pointer-events-none"></div>
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/80 text-emerald-200 text-xs font-bold uppercase tracking-wider mb-3">
            <span>♻️</span>
            <span>AgriMitra AI • Module 04</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {lang === "ta"
              ? "வேளாண் கழிவிலிருந்து செல்வம் – உரம், மறுபயன்பாடு & பகிர்வு"
              : "Farm Waste to Wealth – Composting, Biomass Reuse & Resource Sharing"}
          </h1>
          <p className="text-emerald-100/90 text-sm sm:text-base mt-2 font-normal leading-relaxed">
            {lang === "ta"
              ? "பயிர்க் கழிவுகளை எரிக்காமல் மதிப்புமிக்க காளான், மண்புழு உரமாக மாற்றுதல் மற்றும் அண்டை விவசாயிகளுடன் கருவிகளைப் பகிரும் பசுமை தளம்."
              : "Eliminate crop residue burning through high-margin biomass conversion, scientific on-farm composting, and cooperative community machinery sharing."}
          </p>
        </div>

        {/* 3 Core Sub-Tabs */}
        <div className="relative z-10 mt-6 flex flex-wrap gap-2 pt-2 border-t border-emerald-800/60">
          <button
            onClick={() => setActiveW2WTab("biomass")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeW2WTab === "biomass"
                ? "bg-white text-emerald-950 shadow-md"
                : "bg-emerald-900/60 text-emerald-100 hover:bg-emerald-800/70"
            }`}
          >
            <span>🌾</span>
            <span>{lang === "ta" ? "பயோமாஸ் மறுபயன்பாடு & வருமானம்" : "Biomass Reuse & Monetization"}</span>
          </button>

          <button
            onClick={() => setActiveW2WTab("composting")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeW2WTab === "composting"
                ? "bg-white text-emerald-950 shadow-md"
                : "bg-emerald-900/60 text-emerald-100 hover:bg-emerald-800/70"
            }`}
          >
            <span>🪱</span>
            <span>{lang === "ta" ? "அறிவியல் மட்கு உர மையம்" : "Scientific Composting Hub"}</span>
          </button>

          <button
            onClick={() => setActiveW2WTab("sharing")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeW2WTab === "sharing"
                ? "bg-white text-emerald-950 shadow-md"
                : "bg-emerald-900/60 text-emerald-100 hover:bg-emerald-800/70"
            }`}
          >
            <span>🤝</span>
            <span>{lang === "ta" ? "வேளாண் வளப் பகிர்வு மையம்" : "Agro-Resource Sharing Hub"}</span>
          </button>
        </div>
      </div>

      {/* 2. SUB-TAB 1: BIOMASS REUSE & MONETIZATION */}
      {activeW2WTab === "biomass" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: Residue Selector & Quantity Slider */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
            <h2 className="text-lg font-bold text-stone-900 flex items-center gap-2 border-b border-stone-100 pb-3">
              <span>🚜</span>
              <span>{t("selectWasteType", lang)}</span>
            </h2>

            {/* Waste Type Grid Selector */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {wasteData.map((w) => (
                <button
                  key={w.id}
                  type="button"
                  onClick={() => setSelectedWasteId(w.id)}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-3 ${
                    selectedWasteId === w.id
                      ? "border-emerald-600 bg-emerald-50 text-emerald-950 font-bold ring-2 ring-emerald-500/20"
                      : "border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-700"
                  }`}
                >
                  <span className="text-2xl">{w.icon}</span>
                  <div className="min-w-0">
                    <p className="text-xs font-bold truncate">
                      {lang === "ta" ? w.tamilName : w.name}
                    </p>
                    <p className="text-[10px] text-stone-500 truncate">
                      {w.avgQuantityPerAcre}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Quantity Slider */}
            <div className="space-y-3 pt-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-stone-700 uppercase tracking-wider">
                  {t("enterWasteQuantity", lang)}
                </label>
                <span className="text-base font-black text-emerald-900 bg-emerald-100 px-3 py-1 rounded-xl">
                  {quantityTons} {lang === "ta" ? "டன்கள்" : "Tons"}
                </span>
              </div>
              <input
                type="range"
                min="0.5"
                max="30"
                step="0.5"
                value={quantityTons}
                onChange={(e) => setQuantityTons(parseFloat(e.target.value))}
                className="w-full accent-emerald-600 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-stone-400 font-medium">
                <span>0.5 Ton</span>
                <span>15 Tons</span>
                <span>30 Tons</span>
              </div>
            </div>

            {/* Live Economic & Environmental Impact Card */}
            <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-stone-600">
                  {t("potentialIncome", lang)}:
                </span>
                <span className="text-xl font-black text-emerald-700">
                  ₹{totalValue.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center border-t border-stone-200/60 pt-2">
                <span className="text-xs font-bold text-stone-600">
                  High-Margin Potential (Mushroom/Briquette):
                </span>
                <span className="text-sm font-extrabold text-amber-800">
                  Up to ₹{potentialHighMarginUpper.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center border-t border-stone-200/60 pt-2">
                <span className="text-xs font-bold text-stone-600">
                  {t("co2Averted", lang)}:
                </span>
                <span className="text-sm font-black text-emerald-900">
                  {totalCo2Averted.toLocaleString()} kg CO₂
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: High-Margin Products & Step-by-Step DIY */}
          <div className="lg:col-span-7 space-y-6">
            {/* High-Margin Value-Added Products */}
            <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-5">
              <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2 border-b border-stone-100 pb-3">
                <span>💎</span>
                <span>{t("productsGenerated", lang)}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {waste.highValueProducts.map((prod, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl border border-stone-200 bg-stone-50 flex flex-col justify-between space-y-3"
                  >
                    <div>
                      <h4 className="text-xs font-bold text-stone-900 leading-snug">
                        {lang === "ta" ? prod.tamilName : prod.name}
                      </h4>
                      <p className="text-[11px] text-stone-500 mt-1">
                        {prod.yieldMultiplier}
                      </p>
                    </div>
                    <div className="pt-2 border-t border-stone-200/60">
                      <span className="text-xs font-extrabold text-emerald-800 block">
                        {prod.estimatedRevenue}
                      </span>
                      <span className="text-[10px] text-stone-400">
                        {prod.timeRequired}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step-by-step DIY Conversion Guide */}
            <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-5">
              <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2 border-b border-stone-100 pb-3">
                <span>📋</span>
                <span>{t("stepByStepGuide", lang)} ({waste.name})</span>
              </h3>

              <div className="space-y-3">
                {waste.diySteps.map((s) => (
                  <div key={s.step} className="p-4 rounded-2xl border border-stone-200 bg-stone-50 flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-emerald-800 text-white flex items-center justify-center text-xs font-bold shrink-0">
                      {s.step}
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-stone-900">
                        {lang === "ta" ? s.tamilTitle : s.title}
                      </h4>
                      <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Verified Buyers & Off-Takers */}
            <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                <span>🏭</span>
                <span>{t("marketBuyers", lang)}</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {waste.verifiedBuyers.map((b, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl border border-stone-200 bg-stone-50 space-y-1.5">
                    <h5 className="text-xs font-bold text-stone-900">{b.name}</h5>
                    <p className="text-[11px] text-stone-500">{b.location} • {b.type}</p>
                    <button
                      onClick={() => handleConnectBuyer(b)}
                      className="text-[11px] font-bold text-emerald-700 hover:underline cursor-pointer"
                    >
                      Connect Buyer →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. SUB-TAB 2: SCIENTIFIC COMPOSTING HUB */}
      {activeW2WTab === "composting" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Method Selector & C:N Ratio Balancer */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
            <h2 className="text-lg font-bold text-stone-900 flex items-center gap-2 border-b border-stone-100 pb-3">
              <span>🪱</span>
              <span>{lang === "ta" ? "மட்கு உர முறை & மூலப்பொருள் சமநிலை" : "Composting Methodology & Feedstock"}</span>
            </h2>

            {/* Protocol Buttons */}
            <div className="space-y-2">
              {compostingProtocols.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedCompostProtocolId(p.id)}
                  className={`w-full p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-3 ${
                    selectedCompostProtocolId === p.id
                      ? "border-emerald-600 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-500/20"
                      : "border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-700"
                  }`}
                >
                  <span className="text-2xl">{p.icon}</span>
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">
                      {lang === "ta" ? p.tamilTitle : p.title}
                    </h4>
                    <p className="text-[10px] text-stone-500 mt-0.5">
                      Cycle: {p.durationDays} Days • Ideal C:N: {p.cnRatio}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Interactive C:N Ratio Balancer */}
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200 space-y-4">
              <h3 className="text-xs font-bold text-stone-900 uppercase tracking-wider flex items-center gap-2">
                <span>⚖️</span>
                <span>{lang === "ta" ? "கார்பன் - நைட்ரஜன் (C:N) சமநிலை கணிப்பான்" : "Carbon to Nitrogen (C:N) Balancer"}</span>
              </h3>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-stone-700">
                  <span>Browns / Carbon (Straw, Trash, Leaves):</span>
                  <span className="text-emerald-800">{brownTons} Tons</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="10"
                  step="0.5"
                  value={brownTons}
                  onChange={(e) => setBrownTons(parseFloat(e.target.value))}
                  className="w-full accent-amber-700 cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-stone-700">
                  <span>Greens / Nitrogen (Cattle Dung, Slurry):</span>
                  <span className="text-emerald-800">{greenTons} Tons</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="5"
                  step="0.5"
                  value={greenTons}
                  onChange={(e) => setGreenTons(parseFloat(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
              </div>

              {/* Calculated Results */}
              <div className="pt-3 border-t border-stone-200/80 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-stone-600 font-medium">Estimated Pile C:N Ratio:</span>
                  <span className={`font-bold ${calculatedCnRatio >= 25 && calculatedCnRatio <= 35 ? "text-emerald-700" : "text-amber-700"}`}>
                    {calculatedCnRatio}:1 {calculatedCnRatio >= 25 && calculatedCnRatio <= 35 ? "✓ Optimal" : "⚠️ Needs Adjusting"}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-stone-600 font-medium">Expected Finished Compost:</span>
                  <span className="font-black text-emerald-900">
                    {totalCompostProducedKg.toLocaleString()} kg (~{(totalCompostProducedKg / 50).toFixed(0)} Bags)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Selected Method Step Guide & Agronomic Value */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 pb-4">
                <div>
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full uppercase">
                    Protocol Guide
                  </span>
                  <h3 className="text-xl font-black text-stone-900 mt-1">
                    {lang === "ta" ? compostProtocol.tamilTitle : compostProtocol.title}
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    {lang === "ta" ? compostProtocol.tamilDescription : compostProtocol.description}
                  </p>
                </div>
                <div className="text-left sm:text-right shrink-0">
                  <span className="text-[10px] text-stone-500 uppercase block font-bold">Fertilizer Value</span>
                  <span className="text-xs font-black text-emerald-800">{compostProtocol.npkRating}</span>
                </div>
              </div>

              {/* Steps */}
              <div className="space-y-3">
                {compostProtocol.steps.map((st) => (
                  <div key={st.step} className="p-4 rounded-2xl border border-stone-200 bg-stone-50 flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-emerald-700 text-white flex items-center justify-center text-xs font-bold shrink-0">
                      {st.step}
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-stone-900">{st.title}</h4>
                      <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">{st.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. SUB-TAB 3: AGRO-RESOURCE SHARING HUB */}
      {activeW2WTab === "sharing" && (
        <div className="space-y-6">
          {/* Top Controls & Category Filter */}
          <div className="bg-white rounded-3xl border border-stone-200 p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-stone-900">
                {lang === "ta" ? "சமூக வேளாண் உபகரணங்கள் & பயோமாஸ் பகிர்வு" : "Community Agro-Machinery & Biomass Sharing"}
              </h3>
              <p className="text-xs text-stone-500 mt-0.5">
                Rent nearby straw balers, shredders, or trade excess crop residues directly with farmers
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex bg-stone-100 p-1 rounded-2xl">
                <button
                  onClick={() => setSharingCategory("equipment")}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    sharingCategory === "equipment"
                      ? "bg-white text-emerald-950 shadow-xs"
                      : "text-stone-600 hover:text-stone-900"
                  }`}
                >
                  🚜 Machinery Sharing ({resourceSharingListings.equipment.length})
                </button>
                <button
                  onClick={() => setSharingCategory("biomassExchange")}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    sharingCategory === "biomassExchange"
                      ? "bg-white text-emerald-950 shadow-xs"
                      : "text-stone-600 hover:text-stone-900"
                  }`}
                >
                  🌾 Biomass Board ({resourceSharingListings.biomassExchange.length})
                </button>
              </div>

              <button
                onClick={() => setShareModalOpen(true)}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all cursor-pointer flex items-center gap-1.5"
              >
                <span>➕</span>
                <span>{lang === "ta" ? "புதிய பதிவு சேர்க்க" : "Post a Share"}</span>
              </button>
            </div>
          </div>

          {/* Equipment Grid */}
          {sharingCategory === "equipment" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {resourceSharingListings.equipment.map((eq) => (
                <div
                  key={eq.id}
                  className="bg-white rounded-3xl border border-stone-200 p-6 shadow-sm space-y-4 hover:border-emerald-300 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl">{eq.icon}</span>
                      <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full">
                        {eq.availability}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-stone-900 leading-snug">
                        {lang === "ta" ? eq.tamilName : eq.name}
                      </h4>
                      <p className="text-[11px] text-stone-500 mt-1">
                        Owner: <strong className="text-stone-800">{lang === "ta" ? eq.tamilOwner : eq.owner}</strong>
                      </p>
                      <p className="text-[10px] text-stone-400">
                        {eq.village} • {eq.distanceKm} km away
                      </p>
                    </div>

                    <div className="pt-2 border-t border-stone-100">
                      <span className="text-xs font-black text-emerald-800 block">
                        {eq.rate}
                      </span>
                      <span className="text-[10px] text-stone-500">
                        ⭐ {eq.rating} ({eq.totalShares} completed shares)
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleBookEquipment(eq)}
                    className="w-full py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>📞</span>
                    <span>Book or Rent ({eq.phone})</span>
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Biomass Exchange Board */}
          {sharingCategory === "biomassExchange" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {resourceSharingListings.biomassExchange.map((b) => (
                <div
                  key={b.id}
                  className="bg-white rounded-3xl border border-stone-200 p-6 shadow-sm space-y-4 hover:border-emerald-300 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold bg-amber-50 text-amber-800 px-2 py-0.5 rounded-full">
                        {b.type}
                      </span>
                      <span className="text-xs text-stone-500">{b.location}</span>
                    </div>

                    <h4 className="text-sm font-bold text-stone-900">
                      {lang === "ta" ? b.tamilTitle : b.title}
                    </h4>

                    <p className="text-xs text-emerald-800 font-extrabold mt-1">
                      {b.price || b.offering}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      showToast(`Contacting ${b.phone}...`, "info");
                    }}
                    className="w-full py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs border border-stone-200 transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>💬</span>
                    <span>Direct Call ({b.phone})</span>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Share Modal */}
      {shareModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-4 shadow-2xl">
            <div className="flex justify-between items-center border-b border-stone-100 pb-3">
              <h3 className="text-base font-bold text-stone-900">
                {lang === "ta" ? "கருவி / கழிவு பகிர்வை பதிவேற்றுக" : "Post Equipment or Residue Listing"}
              </h3>
              <button
                onClick={() => setShareModalOpen(false)}
                className="text-stone-400 hover:text-stone-600 text-xl font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmitListing} className="space-y-3">
              <div className="space-y-1">
                <label className="text-xs font-bold text-stone-700 uppercase">Item Title</label>
                <input
                  type="text"
                  placeholder="e.g. Straw Baler / 4 Tons Sugarcane Trash"
                  value={listingForm.itemTitle}
                  onChange={(e) => setListingForm({ ...listingForm, itemTitle: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-xs font-bold text-stone-900"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-stone-700 uppercase">Your Name</label>
                <input
                  type="text"
                  placeholder="e.g. Farmer Sundaram"
                  value={listingForm.ownerName}
                  onChange={(e) => setListingForm({ ...listingForm, ownerName: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-xs font-bold text-stone-900"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-stone-700 uppercase">Village / District</label>
                <input
                  type="text"
                  placeholder="e.g. Thiruvaiyaru, Thanjavur"
                  value={listingForm.village}
                  onChange={(e) => setListingForm({ ...listingForm, village: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-xs font-bold text-stone-900"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-stone-700 uppercase">Rental Rate / Selling Price</label>
                <input
                  type="text"
                  placeholder="e.g. ₹400 / Acre or ₹1,200 / Ton"
                  value={listingForm.rate}
                  onChange={(e) => setListingForm({ ...listingForm, rate: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-xs font-bold text-stone-900"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-stone-700 uppercase">Contact Mobile</label>
                <input
                  type="text"
                  placeholder="e.g. 98421-XXXXX"
                  value={listingForm.phone}
                  onChange={(e) => setListingForm({ ...listingForm, phone: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-xs font-bold text-stone-900"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all cursor-pointer mt-2"
              >
                Publish to Community
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Buyer Connect Modal */}
      {buyerModalOpen && selectedBuyer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-4 shadow-2xl">
            <div className="flex justify-between items-center border-b border-stone-100 pb-3">
              <h3 className="text-base font-bold text-stone-900">
                {selectedBuyer.name}
              </h3>
              <button
                onClick={() => setBuyerModalOpen(false)}
                className="text-stone-400 hover:text-stone-600 text-xl font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>
            <p className="text-xs text-stone-600">
              Verified Agri-Recycler located in <strong>{selectedBuyer.location}</strong> specializing in <strong>{selectedBuyer.type}</strong>.
            </p>
            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs text-emerald-950 font-bold space-y-1">
              <p>Direct Procurement Hotline: {selectedBuyer.contact}</p>
              <p className="text-[11px] text-emerald-700">Payment terms: Spot cash / RTGS transfer on weighbridge receipt.</p>
            </div>
            <button
              onClick={() => {
                setBuyerModalOpen(false);
                showToast(`Dialing ${selectedBuyer.name}...`, "info");
              }}
              className="w-full py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs cursor-pointer hover:bg-emerald-500"
            >
              Call Buyer Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
