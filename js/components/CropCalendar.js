// FARMORA – Crop Calendar & Seasonal Planning Guide
function CropCalendar({ lang, setCurrentTab }) {
  const [activeSeason, setActiveSeason] = React.useState("samba"); // kuruvai, samba, rabi, zaid

  const seasons = [
    {
      id: "samba",
      name: "Samba / Thaladi Season (Late Kharif)",
      tamilName: "சம்பா / தாளடி பருவம் (ஆகஸ்ட் - ஜனவரி)",
      period: "August – January",
      focusCrop: "Long Duration Paddy (BPT 5204, CR 1009)",
      milestones: [
        { month: "August", stage: "Nursery Sowing & Land Puddling", desc: "Seed treatment with Pseudomonas @ 10g/kg. Prepare raised nursery beds with dap & neem cake." },
        { month: "September", stage: "Main Field Transplanting", desc: "Transplant 20-25 day old seedlings (2 seedlings/hill) with 20x10 cm spacing. Maintain 2cm water." },
        { month: "October", stage: "Active Tillering & Top Dressing", desc: "Apply first split Urea + Potash. Run WaterWise AI to schedule Alternate Wetting and Drying (AWD)." },
        { month: "November", stage: "Panicle Initiation & Weed Check", desc: "Critical irrigation stage; do not allow soil to crack. Monitor leaf blade for Blast symptoms using MandiMate." },
        { month: "December", stage: "Flowering & Grain Filling", desc: "Foliar spray of 1% DAP + 1% Potash to enhance grain luster and prevent unfilled chaffy grains." },
        { month: "January", stage: "Drain Water & Golden Harvest", desc: "Stop irrigation 10 days before harvest. Collect straw for Waste to Wealth mushroom and compost conversion." }
      ]
    },
    {
      id: "kuruvai",
      name: "Kuruvai Season (Early Kharif)",
      tamilName: "குறுவை பருவம் (ஜூன் - செப்டம்பர்)",
      period: "June – September",
      focusCrop: "Short Duration Paddy (ADT 43, ASD 16)",
      milestones: [
        { month: "June", stage: "Summer Plowing & Nursery Raising", desc: "Deep summer plowing to expose pest pupae. Sow pre-germinated seeds on wet nursery beds." },
        { month: "July", stage: "Transplanting & Herbicide", desc: "Early transplanting before Mettur canal release. Apply Pretilachlor @ 500ml/acre on day 3." },
        { month: "August", stage: "Grand Growth & Pest Scouting", desc: "Scout for stem borer and leaf folder. Install Trichogramma egg parasitoid cards @ 2 cards/acre." },
        { month: "September", stage: "Maturity & Mechanized Harvest", desc: "Combine harvesting. Sell directly to direct purchase centers (DPC) at guaranteed MSP." }
      ]
    },
    {
      id: "rabi",
      name: "Navarai / Rabi Dry Season",
      tamilName: "நவரை / நவதானிய பருவம் (டிசம்பர் - ஏப்ரல்)",
      period: "December – April",
      focusCrop: "Pulses (Blackgram, Greengram), Groundnut, Maize",
      milestones: [
        { month: "December", stage: "Relay Rice Fallow Sowing", desc: "Broadcast blackgram (VBN 8) into standing paddy field 4 days before harvest with residual soil moisture." },
        { month: "January", stage: "Germination & Foliar Spray", desc: "Spray 2% DAP or TNAU Pulse Wonder @ 2 kg/acre to boost branching and pod clusters." },
        { month: "February", stage: "Pod Borers & Mildew Check", desc: "Spray Neem oil 3% or Beauveria bassiana to control pod borers." },
        { month: "March", stage: "Pod Picking & Biomass Mulch", desc: "Harvest pulse pods; incorporate nitrogen-rich pulse foliage back into soil as green manure." }
      ]
    }
  ];

  const currentSeason = seasons.find((s) => s.id === activeSeason) || seasons[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-green-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/80 text-emerald-200 text-xs font-bold uppercase tracking-wider mb-3">
            <span>📅</span>
            <span>Agronomic Season Planner</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {t("ccTitle", lang)}
          </h1>
          <p className="text-emerald-100/90 text-sm sm:text-base mt-2 font-normal leading-relaxed">
            {t("ccSubtitle", lang)}
          </p>
        </div>
      </div>

      {/* Season Selection Tabs */}
      <div className="flex flex-wrap gap-3">
        {seasons.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveSeason(s.id)}
            className={`px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 ${
              activeSeason === s.id
                ? "bg-emerald-800 text-white shadow-md shadow-emerald-900/20"
                : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-50"
            }`}
          >
            <span>🌾</span>
            <span>{lang === "ta" ? s.tamilName : s.name}</span>
          </button>
        ))}
      </div>

      {/* Active Season Timeline Roadmap */}
      <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 pb-4">
          <div>
            <h2 className="text-xl font-extrabold text-stone-900">
              {lang === "ta" ? currentSeason.tamilName : currentSeason.name}
            </h2>
            <p className="text-xs text-emerald-700 font-semibold mt-0.5">
              Target Cultivations: {currentSeason.focusCrop}
            </p>
          </div>
          <span className="text-xs font-bold text-stone-600 bg-stone-100 px-3 py-1.5 rounded-xl">
            Season Window: {currentSeason.period}
          </span>
        </div>

        {/* Milestone Steps Timeline */}
        <div className="relative border-l-2 border-emerald-500/40 ml-4 sm:ml-6 space-y-8 pl-6 sm:pl-8 py-2">
          {currentSeason.milestones.map((m, idx) => (
            <div key={idx} className="relative group">
              {/* Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-5 h-5 rounded-full bg-emerald-600 border-4 border-white shadow-sm group-hover:scale-125 transition-transform"></div>

              <div className="bg-stone-50 group-hover:bg-emerald-50/50 p-4 sm:p-5 rounded-2xl border border-stone-200 group-hover:border-emerald-300 transition-all space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-xs font-black uppercase tracking-wider text-emerald-800">
                    Month: {m.month}
                  </span>
                  <span className="text-xs font-bold text-stone-900">
                    {m.stage}
                  </span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed font-normal">
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Module Callouts */}
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span className="text-emerald-950 font-semibold">
            Synchronize this calendar with WaterWise AI for automatic pump scheduling.
          </span>
          <button
            onClick={() => setCurrentTab("waterwise")}
            className="px-4 py-2 bg-emerald-700 text-white font-bold rounded-xl hover:bg-emerald-800 transition-colors cursor-pointer flex-shrink-0"
          >
            Launch WaterWise AI →
          </button>
        </div>
      </div>
    </div>
  );
}
