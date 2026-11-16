// FARMORA – About Us, Hackathon Credentials & Farmer Support Contact
function AboutContact({ lang, showToast }) {
  const [feedbackName, setFeedbackName] = React.useState("");
  const [feedbackPhone, setFeedbackPhone] = React.useState("");
  const [feedbackMessage, setFeedbackMessage] = React.useState("");
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    showToast(
      lang === "ta" 
        ? "உங்கள் செய்தி பெறப்பட்டது! வேளாண் அறிவியல் மையம் விரைவில் உங்களைத் தொடர்பு கொள்ளும்." 
        : "Message received! Our regional KVK agronomy officer will contact you within 24 hours.", 
      "success"
    );
    setFeedbackName("");
    setFeedbackPhone("");
    setFeedbackMessage("");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-teal-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/80 text-emerald-200 text-xs font-bold uppercase tracking-wider mb-3">
            <span>🎓</span>
            <span>College AgriTech Hackathon Showcase 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {t("aboutTitle", lang)}
          </h1>
          <p className="text-emerald-100/90 text-sm sm:text-base mt-2 font-normal leading-relaxed">
            Pioneering digital agricultural transformation for small and marginal farmers through precision hydrology, computer vision pathology, and circular agro-waste monetization.
          </p>
        </div>
      </div>

      {/* 1. HACKATHON PROJECT SHOWCASE: PROBLEM & SOLUTION ARCHITECTURE */}
      <section className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="border-b border-stone-100 pb-4">
          <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest">
            Engineering & Agronomy Innovation
          </span>
          <h2 className="text-2xl font-black text-stone-900 mt-1">
            {t("hackathonTitle", lang)}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Problem Statement */}
          <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-xl bg-red-100 text-red-800 font-bold text-sm flex items-center justify-center">
                ⚠️
              </span>
              <h3 className="text-base font-bold text-stone-900">
                {t("problemStatement", lang)}
              </h3>
            </div>
            <ul className="space-y-2 text-xs text-stone-600 leading-relaxed list-disc list-inside">
              <li><strong>Inefficient Water Management:</strong> Uncontrolled flood irrigation and lack of crop-specific water calculations lead to groundwater depletion and power wastage.</li>
              <li><strong>Lack of Reliable Market Prices:</strong> Farmers lack transparent wholesale price comparison across regional APMC mandis, losing up to 20% to village middlemen.</li>
              <li><strong>Language & Technology Barriers:</strong> Complex web portals and typing interfaces exclude rural farmers who need timely farming advice in their regional languages like Tamil.</li>
              <li><strong>Underutilization of Agricultural Waste:</strong> Millions of tons of crop residues are burned or discarded annually, causing environmental pollution and missing valuable composting and monetization opportunities.</li>
            </ul>
          </div>

          {/* Solution Architecture */}
          <div className="bg-emerald-50/70 rounded-2xl p-5 border border-emerald-200 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 font-bold text-sm flex items-center justify-center">
                🌱
              </span>
              <h3 className="text-base font-bold text-emerald-950">
                {t("solutionArch", lang)}
              </h3>
            </div>
            <ul className="space-y-2 text-xs text-emerald-900 leading-relaxed list-disc list-inside">
              <li><strong>1. WaterWise AI:</strong> Provides crop-based water requirement calculations (FAO-56 Penman-Monteith) and intelligent irrigation recommendations with pump runtime schedules.</li>
              <li><strong>2. MandiMate:</strong> Offers agricultural market price comparison and selling-value estimation with transport deductions to support informed marketing decisions.</li>
              <li><strong>3. FarmVoice AI:</strong> Provides accessible voice-based agricultural assistance in regional languages, including Tamil and English, with real-time audio synthesis.</li>
              <li><strong>4. Farm Waste to Wealth:</strong> Promotes sustainable agricultural waste utilization through scientific composting, biomass reuse (mushrooms & bio-fuel), and community resource-sharing opportunities.</li>
            </ul>
          </div>
        </div>

        {/* UN SDG Alignment Grid */}
        <div className="pt-4 border-t border-stone-100 space-y-3">
          <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wider">
            {t("sdgAlignment", lang)}
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-stone-50 border border-stone-200 p-3 rounded-xl text-center">
              <span className="text-2xl block mb-1">🌾</span>
              <p className="text-xs font-bold text-stone-900">SDG 2: Zero Hunger</p>
              <span className="text-[10px] text-stone-500">Enhanced yields</span>
            </div>
            <div className="bg-stone-50 border border-stone-200 p-3 rounded-xl text-center">
              <span className="text-2xl block mb-1">💧</span>
              <p className="text-xs font-bold text-stone-900">SDG 6: Clean Water</p>
              <span className="text-[10px] text-stone-500">45% water savings</span>
            </div>
            <div className="bg-stone-50 border border-stone-200 p-3 rounded-xl text-center">
              <span className="text-2xl block mb-1">♻️</span>
              <p className="text-xs font-bold text-stone-900">SDG 12: Circular Bio</p>
              <span className="text-[10px] text-stone-500">Zero burning</span>
            </div>
            <div className="bg-stone-50 border border-stone-200 p-3 rounded-xl text-center">
              <span className="text-2xl block mb-1">🌍</span>
              <p className="text-xs font-bold text-stone-900">SDG 13: Climate Action</p>
              <span className="text-[10px] text-stone-500">Lower carbon footprint</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FARMER SUPPORT & CONTACT FORM */}
      <section className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-100 pb-4">
          <div>
            <h2 className="text-2xl font-black text-stone-900">
              {t("contactTitle", lang)}
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              {t("contactSubtitle", lang)}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="tel:18004193276"
              className="px-4 py-2 bg-emerald-100 text-emerald-900 rounded-xl text-xs font-extrabold flex items-center gap-1.5 hover:bg-emerald-200 transition-colors"
            >
              <span>📞</span>
              <span>1800-419-3276 (Toll-Free)</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Contact Details & Helplines */}
          <div className="md:col-span-5 space-y-4">
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
              <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                Emergency Farmer Channels
              </h4>
              <div className="space-y-2 text-xs text-stone-600">
                <p>📍 <strong>AgriTech Innovation Hub:</strong> Tamil Nadu Agricultural University (TNAU) Incubation Cell</p>
                <p>📧 <strong>Email Support:</strong> support@farmora-agri.org</p>
                <p>📱 <strong>WhatsApp Farmer Help:</strong> +91 94420-XXXXX</p>
                <p>⏰ <strong>Agronomist Duty Hours:</strong> 24 Hours / 7 Days</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 space-y-1">
              <p className="font-bold">🌿 Rural Kisan Outreach Program</p>
              <p className="text-[11px] text-emerald-800">
                Our field volunteers regularly conduct live village workshops on drip scheduling, bio-decomposer kits, and mushroom spawning.
              </p>
            </div>
          </div>

          {/* Direct Feedback Form */}
          <div className="md:col-span-7 bg-stone-50/70 p-6 rounded-2xl border border-stone-200">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-stone-700 uppercase">
                    {lang === "ta" ? "உங்கள் பெயர்" : "Your Name"}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Selvam R"
                    value={feedbackName}
                    onChange={(e) => setFeedbackName(e.target.value)}
                    className="w-full bg-white border border-stone-300 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-stone-700 uppercase">
                    {lang === "ta" ? "மொபைல் எண்" : "Mobile Phone"}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 98421 XXXXX"
                    value={feedbackPhone}
                    onChange={(e) => setFeedbackPhone(e.target.value)}
                    className="w-full bg-white border border-stone-300 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-stone-700 uppercase">
                  {lang === "ta" ? "உங்கள் விவசாயக் கேள்வி / கருத்து" : "Your Question / Farm Query"}
                </label>
                <textarea
                  rows="3"
                  required
                  placeholder={lang === "ta" ? "பயிர் நோய் அல்லது பாசனம் குறித்த வினவலை உள்ளிடவும்..." : "Describe your crop condition or query for our agronomists..."}
                  value={feedbackMessage}
                  onChange={(e) => setFeedbackMessage(e.target.value)}
                  className="w-full bg-white border border-stone-300 rounded-xl px-3 py-2 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl text-xs transition-colors cursor-pointer shadow-md"
              >
                {t("sendFeedback", lang)}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
