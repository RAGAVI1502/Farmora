// FARMORA – Hero, Features, Why Choose, and How It Works Component
function Hero({ setCurrentTab, lang, openAuthModal }) {
  const featureCards = [
    {
      id: "waterwise",
      badge: "Intelligent Irrigation",
      title: t("tool1Title", lang),
      subtitle: t("tool1Subtitle", lang),
      desc: t("tool1Desc", lang),
      icon: "💧",
      image: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=600&q=80",
      stats: "Saves up to 45% Irrigation Water",
      tamilStats: "45% வரை நீர் சேமிப்பு",
      color: "emerald"
    },
    {
      id: "mandimate",
      badge: "Market Intelligence",
      title: t("tool2Title", lang),
      subtitle: t("tool2Subtitle", lang),
      desc: t("tool2Desc", lang),
      icon: "📈",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80",
      stats: "+₹14,500 Extra Profit / Lot",
      tamilStats: "+₹14,500 கூடுதல் மண்டி லாபம்",
      color: "green"
    },
    {
      id: "farmvoice",
      badge: "Tamil & English Voice",
      title: t("tool3Title", lang),
      subtitle: t("tool3Subtitle", lang),
      desc: t("tool3Desc", lang),
      icon: "🎙️",
      image: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=600&q=80",
      stats: "Zero Typing • 100% Spoken Voice",
      tamilStats: "தமிழில் பேசி தீர்வு பெறலாம்",
      color: "amber"
    },
    {
      id: "wastewealth",
      badge: "Composting & Sharing",
      title: t("tool4Title", lang),
      subtitle: t("tool4Subtitle", lang),
      desc: t("tool4Desc", lang),
      icon: "♻️",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=600&q=80",
      stats: "Composting & Shared Equipment",
      tamilStats: "மட்கு உரம் & இயந்திரப் பகிர்வு",
      color: "emerald"
    },
    {
      id: "cropdoctor",
      badge: "Plant Pathology",
      title: t("tool5Title", lang),
      subtitle: t("tool5Subtitle", lang),
      desc: t("tool5Desc", lang),
      icon: "🩺",
      image: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=600&q=80",
      stats: "94.8% AI Diagnostic Precision",
      tamilStats: "94.8% நோய் கண்டறிதல் துல்லியம்",
      color: "teal"
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-12">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-800 text-white pt-12 pb-20 sm:pt-20 sm:pb-28">
        {/* Agricultural Background Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>

        {/* Glow Spheres */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-amber-500/15 rounded-full blur-2xl pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Innovation Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-800/80 border border-emerald-500/40 text-emerald-200 text-xs sm:text-sm font-semibold shadow-inner">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>{t("heroBadge", lang)}</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
                <span className="block text-white">
                  {t("heroTitle1", lang)}
                </span>
                <span className="block bg-gradient-to-r from-emerald-300 via-green-200 to-amber-200 bg-clip-text text-transparent">
                  {t("heroTitle2", lang)}
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg lg:text-xl text-emerald-100/90 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                {t("heroSubtitle", lang)}
              </p>

              {/* Call-to-Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <button
                  onClick={() => setCurrentTab("waterwise")}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-400 to-green-500 text-emerald-950 font-bold text-sm sm:text-base shadow-xl shadow-green-500/25 hover:from-emerald-300 hover:to-green-400 hover:scale-[1.02] transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>🚀</span>
                  <span>{t("getStarted", lang)}</span>
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById("features-section");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-emerald-800/80 text-white font-semibold text-sm sm:text-base border border-emerald-600/50 hover:bg-emerald-700 hover:border-emerald-500 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>🔍</span>
                  <span>{t("exploreTools", lang)}</span>
                </button>

                <button
                  onClick={() => setCurrentTab("farmvoice")}
                  className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-amber-500/20 text-amber-200 border border-amber-400/40 hover:bg-amber-500/30 font-semibold text-sm transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span className="text-lg">🎙️</span>
                  <span>{lang === "ta" ? "குரல் உதவியாளர்" : "Try Voice"}</span>
                </button>
              </div>

              {/* Verified Trust Badges */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-emerald-200/80">
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-400">✓</span> ICAR & TNAU Scientific Constants
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-400">✓</span> 100% Offline Capable Voice
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-400">✓</span> Free for Rural Farmers
                </span>
              </div>
            </div>

            {/* Right Card / Visual Showcase */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Visual Glass Frame */}
                <div className="relative rounded-2xl p-2 bg-gradient-to-b from-emerald-400/30 to-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
                  <div className="rounded-xl overflow-hidden bg-emerald-950 relative aspect-[4/3]">
                    <img
                      src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80"
                      alt="Farmer in lush green field using smart technology"
                      className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/30 to-transparent"></div>

                    {/* Live Telemetry Floating Pill 1 */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-lg border border-emerald-100 flex items-center gap-3 text-stone-900 animate-float">
                      <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-xl text-emerald-800">
                        💧
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider">
                          Water Saved
                        </p>
                        <p className="text-sm font-extrabold text-stone-900">
                          3,450 Liters / Acre
                        </p>
                      </div>
                    </div>

                    {/* Live Telemetry Floating Pill 2 */}
                    <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-lg border border-emerald-100 flex items-center gap-3 text-stone-900">
                      <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-xl text-amber-800">
                        🍃
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-amber-800 uppercase tracking-wider">
                          Disease Scanner
                        </p>
                        <p className="text-xs font-bold text-stone-800">
                          Paddy Blast Detected
                        </p>
                        <p className="text-[10px] text-emerald-600 font-semibold">
                          Organic Neem Plan Ready
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Key Statistics Counters Banner */}
          <div className="mt-14 pt-8 border-t border-emerald-700/60 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-emerald-800/40 border border-emerald-600/30 rounded-xl p-4 text-center">
              <p className="text-2xl sm:text-3xl font-extrabold text-white">42,000+</p>
              <p className="text-xs sm:text-sm text-emerald-200 mt-1 font-medium">{t("statFarmers", lang)}</p>
            </div>
            <div className="bg-emerald-800/40 border border-emerald-600/30 rounded-xl p-4 text-center">
              <p className="text-2xl sm:text-3xl font-extrabold text-emerald-300">3.4B L</p>
              <p className="text-xs sm:text-sm text-emerald-200 mt-1 font-medium">{t("statWaterSaved", lang)}</p>
            </div>
            <div className="bg-emerald-800/40 border border-emerald-600/30 rounded-xl p-4 text-center">
              <p className="text-2xl sm:text-3xl font-extrabold text-amber-300">94.8%</p>
              <p className="text-xs sm:text-sm text-emerald-200 mt-1 font-medium">{t("statAccuracy", lang)}</p>
            </div>
            <div className="bg-emerald-800/40 border border-emerald-600/30 rounded-xl p-4 text-center">
              <p className="text-2xl sm:text-3xl font-extrabold text-green-300">₹18.4 Cr</p>
              <p className="text-xs sm:text-sm text-emerald-200 mt-1 font-medium">{t("statWealth", lang)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FOUR MAIN FEATURES SECTION */}
      <section id="features-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>✨</span>
            <span>{lang === "ta" ? "முக்கிய AI தொகுதிகள்" : "Core AI Architecture"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            {t("featuresTitle", lang)}
          </h2>
          <p className="text-base sm:text-lg text-stone-600 mt-3 font-normal">
            {t("featuresSubtitle", lang)}
          </p>
        </div>

        {/* 4 Interactive Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureCards.map((feat) => (
            <div
              key={feat.id}
              onClick={() => setCurrentTab(feat.id)}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm card-hover-lift flex flex-col cursor-pointer group"
            >
              {/* Image Preview with Badge */}
              <div className="relative h-44 overflow-hidden bg-stone-100">
                <img
                  src={feat.image}
                  alt={feat.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Module Badge */}
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-emerald-900 text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm border border-emerald-100 flex items-center gap-1">
                  <span>{feat.icon}</span>
                  <span>{feat.badge}</span>
                </span>

                <span className="absolute bottom-3 left-3 right-3 text-white text-xs font-semibold truncate drop-shadow">
                  {lang === "ta" ? feat.tamilStats : feat.stats}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-stone-900 group-hover:text-emerald-700 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-700 mt-0.5">
                    {feat.subtitle}
                  </p>
                  <p className="text-xs text-stone-600 mt-2.5 leading-relaxed line-clamp-3">
                    {feat.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-emerald-800 group-hover:text-emerald-600">
                  <span>{t("launchTool", lang)}</span>
                  <span className="text-base group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WHY CHOOSE FARMORA SECTION */}
      <section className="bg-emerald-950 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="px-3 py-1 rounded-full bg-emerald-800 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              {lang === "ta" ? "சிறப்பம்சங்கள்" : "Engineered for Indian Agriculture"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              {t("whyTitle", lang)}
            </h2>
            <p className="text-sm sm:text-base text-emerald-200 mt-2 font-normal">
              {t("whySubtitle", lang)}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-emerald-900/60 border border-emerald-700/50 rounded-2xl p-6 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-2xl mb-4">
                💧
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                {t("benefit1Title", lang)}
              </h3>
              <p className="text-xs text-emerald-200 leading-relaxed font-normal">
                {t("benefit1Desc", lang)}
              </p>
            </div>

            <div className="bg-emerald-900/60 border border-emerald-700/50 rounded-2xl p-6 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 text-green-300 flex items-center justify-center text-2xl mb-4">
                🌿
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                {t("benefit2Title", lang)}
              </h3>
              <p className="text-xs text-emerald-200 leading-relaxed font-normal">
                {t("benefit2Desc", lang)}
              </p>
            </div>

            <div className="bg-emerald-900/60 border border-emerald-700/50 rounded-2xl p-6 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center text-2xl mb-4">
                🎙️
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                {t("benefit3Title", lang)}
              </h3>
              <p className="text-xs text-emerald-200 leading-relaxed font-normal">
                {t("benefit3Desc", lang)}
              </p>
            </div>

            <div className="bg-emerald-900/60 border border-emerald-700/50 rounded-2xl p-6 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-xl bg-emerald-400/20 text-emerald-300 flex items-center justify-center text-2xl mb-4">
                ♻️
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                {t("benefit4Title", lang)}
              </h3>
              <p className="text-xs text-emerald-200 leading-relaxed font-normal">
                {t("benefit4Desc", lang)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS 4-STEP WORKFLOW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="px-3 py-1 rounded-full bg-stone-200 text-stone-800 text-xs font-bold uppercase tracking-wider">
            {lang === "ta" ? "எளிய வழிகாட்டி" : "Farming Lifecycle"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 mt-3">
            {t("howTitle", lang)}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm relative">
            <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-xs flex items-center justify-center mb-4">
              01
            </span>
            <h3 className="text-base font-bold text-stone-900 mb-1">{t("step1Title", lang)}</h3>
            <p className="text-xs text-stone-600 leading-relaxed">{t("step1Desc", lang)}</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm relative">
            <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-xs flex items-center justify-center mb-4">
              02
            </span>
            <h3 className="text-base font-bold text-stone-900 mb-1">{t("step2Title", lang)}</h3>
            <p className="text-xs text-stone-600 leading-relaxed">{t("step2Desc", lang)}</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm relative">
            <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-xs flex items-center justify-center mb-4">
              03
            </span>
            <h3 className="text-base font-bold text-stone-900 mb-1">{t("step3Title", lang)}</h3>
            <p className="text-xs text-stone-600 leading-relaxed">{t("step3Desc", lang)}</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm relative">
            <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-xs flex items-center justify-center mb-4">
              04
            </span>
            <h3 className="text-base font-bold text-stone-900 mb-1">{t("step4Title", lang)}</h3>
            <p className="text-xs text-stone-600 leading-relaxed">{t("step4Desc", lang)}</p>
          </div>
        </div>
      </section>

      {/* 5. QUICK AGROTECH CALLOUT BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-emerald-800 via-emerald-700 to-green-700 text-white p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              {lang === "ta" 
                ? "உங்கள் நிலத்திற்கான துல்லிய பாசனத்தை இப்போதே தொடங்குங்கள்" 
                : "Ready to optimize your farm water & diagnose crop diseases?"}
            </h3>
            <p className="text-emerald-100 text-sm sm:text-base max-w-xl">
              {lang === "ta"
                ? "கட்டணமில்லா உழவர் கணக்கை உருவாக்கி உங்கள் மண் ஆரோக்கியம் மற்றும் சந்தை விலைகளை கண்காணிக்கவும்."
                : "Zero hardware required. Works on any smartphone or tablet browser with instant Tamil voice assistance."}
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={() => setCurrentTab("waterwise")}
              className="px-6 py-3 bg-white text-emerald-900 font-bold rounded-xl text-sm shadow-md hover:bg-emerald-50 transition-all cursor-pointer"
            >
              {lang === "ta" ? "நீர்ப்பாசன கணக்கீடு" : "Calculate Water"}
            </button>
            <button
              onClick={openAuthModal}
              className="px-6 py-3 bg-emerald-950/80 text-white font-semibold rounded-xl text-sm border border-emerald-500/30 hover:bg-emerald-950 transition-all cursor-pointer"
            >
              {lang === "ta" ? "விவசாயி பதிவு" : "Register Farm"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
