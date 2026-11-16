// FARMORA – Reusable Agricultural Tech Footer
function Footer({ setCurrentTab, lang, setLang }) {
  return (
    <footer className="bg-emerald-950 text-white border-t border-emerald-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-700 flex items-center justify-center text-white text-2xl shadow-lg">
                🌱
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                FARMORA
              </span>
              <span className="text-[10px] bg-emerald-800 text-emerald-300 font-bold px-2 py-0.5 rounded border border-emerald-700">
                AI PLATFORM
              </span>
            </div>

            <p className="text-xs text-emerald-200/80 max-w-sm leading-relaxed">
              {lang === "ta"
                ? "ஃபார்மோரா என்பது சிறு மற்றும் குறு விவசாயிகளுக்கு அதிகாரமளிக்கும் நவீன வேளாண் தொழில்நுட்ப தளமாகும். துல்லிய நீர்ப்பாசனம், நோய் கண்டறிதல் மற்றும் தமிழ் குரல் உதவியாளர் மூலம் பசுமையான எதிர்காலத்தை உருவாக்குகிறது."
                : "Farmora equips smallholder farmers with precision FAO-56 irrigation engines, Edge Vision plant pathology, conversational Tamil voice intelligence, and circular agro-waste monetization."}
            </p>

            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={() => setLang(lang === "en" ? "ta" : "en")}
                className="px-3 py-1.5 rounded-xl bg-emerald-900 border border-emerald-700 text-xs font-semibold hover:bg-emerald-800 transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span>🌐</span>
                <span>Language: {lang === "ta" ? "தமிழ் (Tamil)" : "English"}</span>
              </button>
            </div>
          </div>

          {/* Core AI Modules Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-emerald-300 uppercase tracking-widest">
              Smart AI Modules
            </h4>
            <ul className="space-y-2 text-xs text-emerald-100/80">
              <li>
                <button
                  onClick={() => { setCurrentTab("waterwise"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  className="hover:text-emerald-300 transition-colors text-left cursor-pointer"
                >
                  💧 WaterWise AI (Irrigation)
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setCurrentTab("mandimate"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  className="hover:text-emerald-300 transition-colors text-left cursor-pointer"
                >
                  🍃 MandiMate AI (Crop Doctor)
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setCurrentTab("farmvoice"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  className="hover:text-emerald-300 transition-colors text-left cursor-pointer"
                >
                  🎙️ Farm Voice Assistant
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setCurrentTab("wastewealth"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  className="hover:text-emerald-300 transition-colors text-left cursor-pointer"
                >
                  ♻️ Waste to Wealth Circular Engine
                </button>
              </li>
            </ul>
          </div>

          {/* Agronomy & Market Tools */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-emerald-300 uppercase tracking-widest">
              Farmer Services
            </h4>
            <ul className="space-y-2 text-xs text-emerald-100/80">
              <li>
                <button
                  onClick={() => { setCurrentTab("dashboard"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  className="hover:text-emerald-300 transition-colors text-left cursor-pointer"
                >
                  📊 Farmer Command Center
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setCurrentTab("weatherMandi"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  className="hover:text-emerald-300 transition-colors text-left cursor-pointer"
                >
                  🌦️ Micro-Climate & Spray Windows
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setCurrentTab("weatherMandi"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  className="hover:text-emerald-300 transition-colors text-left cursor-pointer"
                >
                  💰 Live APMC Mandi Prices
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setCurrentTab("cropCalendar"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  className="hover:text-emerald-300 transition-colors text-left cursor-pointer"
                >
                  📅 Seasonal Crop Calendar
                </button>
              </li>
            </ul>
          </div>

          {/* Kisan Helpline & Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-amber-300 uppercase tracking-widest">
              Toll-Free Kisan Help
            </h4>
            <div className="p-3 bg-emerald-900/60 rounded-xl border border-emerald-700/60 space-y-1.5">
              <p className="text-base font-black text-white">📞 1800-419-3276</p>
              <p className="text-[11px] text-emerald-200">24x7 Multi-lingual Agronomy Support</p>
            </div>
            <p className="text-[11px] text-emerald-300/80">
              WhatsApp Community: +91 94420-XXXXX
            </p>
          </div>
        </div>

        {/* Academic Hackathon Disclaimer & Copyright */}
        <div className="pt-8 border-t border-emerald-900 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-xs text-emerald-300/70">
          <p className="max-w-3xl leading-relaxed">
            {t("footerDisclaimer", lang)}
          </p>
          <p className="flex-shrink-0 font-medium">
            © 2026 FARMORA AgriTech. Built with ❤️ for Indian Farmers.
          </p>
        </div>
      </div>
    </footer>
  );
}
