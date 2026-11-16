// FARMORA – Reusable Navbar Component
function Navbar({ currentTab, setCurrentTab, lang, setLang, user, openAuthModal, showToast }) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: t("home", lang), icon: "🏠" },
    { id: "waterwise", label: t("waterwise", lang), icon: "💧" },
    { id: "mandimate", label: t("mandimate", lang), icon: "📈" },
    { id: "farmvoice", label: t("farmvoice", lang), icon: "🎙️" },
    { id: "wastewealth", label: t("wastewealth", lang), icon: "♻️" },
    { id: "cropdoctor", label: t("cropdoctor", lang), icon: "🩺" },
    { id: "dashboard", label: t("dashboard", lang), icon: "📊" },
    { id: "weatherMandi", label: t("weatherMandi", lang), icon: "🌦️" },
    { id: "cropCalendar", label: t("cropCalendar", lang), icon: "📅" },
    { id: "aboutContact", label: t("aboutUs", lang), icon: "ℹ️" }
  ];

  const handleNavClick = (id) => {
    setCurrentTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCallHelpline = () => {
    showToast(
      lang === "ta" 
        ? "உழவர் உதவி எண் 1800-419-3276 உடன் இணைக்கப்படுகிறது..." 
        : "Connecting to Kisan Toll-Free Helpline 1800-419-3276...", 
      "info"
    );
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-white/95 backdrop-blur-md shadow-md border-b border-stone-200" 
        : "bg-white border-b border-stone-100"
    }`}>
      {/* Top Banner for Kisan Helpline & Language */}
      <div className="bg-emerald-900 text-white text-xs px-4 py-1.5 flex justify-between items-center tracking-wide">
        <div className="flex items-center space-x-3">
          <span className="flex items-center gap-1 font-medium text-emerald-200">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            {t("heroBadge", lang)}
          </span>
          <span className="hidden md:inline text-stone-300">|</span>
          <button 
            onClick={handleCallHelpline}
            className="hidden md:flex items-center gap-1 text-emerald-100 hover:text-white transition-colors cursor-pointer"
          >
            <span>📞</span> {t("helpline", lang)}: <strong className="text-white">1800-419-3276</strong>
          </button>
        </div>

        <div className="flex items-center space-x-3">
          {/* Language Switcher */}
          <button
            onClick={() => setLang(lang === "en" ? "ta" : "en")}
            className="flex items-center gap-1.5 bg-emerald-800 hover:bg-emerald-700 text-white px-2.5 py-0.5 rounded-full text-xs font-semibold border border-emerald-600 transition-all cursor-pointer"
            title="Toggle English / தமிழ்"
          >
            <span>🌐</span>
            <span>{t("langSwitch", lang)}</span>
          </button>

          {/* User Profile Badge */}
          {user ? (
            <div className="flex items-center gap-2 bg-emerald-800/80 px-2 py-0.5 rounded-full text-xs">
              <span>👨‍🌾</span>
              <span className="font-medium text-emerald-100">{user.name}</span>
            </div>
          ) : (
            <button
              onClick={openAuthModal}
              className="text-emerald-200 hover:text-white text-xs font-medium cursor-pointer underline underline-offset-2"
            >
              {t("login", lang)}
            </button>
          )}
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Brand Logo */}
          <div 
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-green-800 flex items-center justify-center text-white shadow-lg shadow-emerald-900/20 group-hover:scale-105 transition-transform">
              <span className="text-2xl">🌱</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-emerald-950 font-sans">
                  FARMORA
                </span>
                <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded">
                  AI
                </span>
              </div>
              <p className="text-[10px] sm:text-xs text-stone-500 font-medium -mt-1 hidden sm:block">
                {t("tagline", lang)}
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-1.5">
            {navLinks.map((link) => {
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? "bg-emerald-700 text-white shadow-sm shadow-emerald-700/30"
                      : "text-stone-700 hover:text-emerald-800 hover:bg-emerald-50/80"
                  }`}
                >
                  <span className="text-sm">{link.icon}</span>
                  <span>{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Desktop Right Action Buttons */}
          <div className="hidden lg:flex items-center space-x-2.5">
            <button
              onClick={() => handleNavClick("farmvoice")}
              className="flex items-center gap-1.5 bg-amber-50 text-amber-900 border border-amber-300 hover:bg-amber-100 px-3 py-2 rounded-lg text-xs font-bold transition-all shadow-sm cursor-pointer"
            >
              <span className="text-base animate-pulse">🎙️</span>
              <span>{lang === "ta" ? "குரல் வழி" : "Voice AI"}</span>
            </button>

            {user ? (
              <button
                onClick={() => handleNavClick("dashboard")}
                className="bg-emerald-800 text-white hover:bg-emerald-900 px-3.5 py-2 rounded-lg text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
              >
                <span>📊</span>
                <span>{t("dashboard", lang)}</span>
              </button>
            ) : (
              <button
                onClick={openAuthModal}
                className="bg-emerald-700 text-white hover:bg-emerald-800 px-3.5 py-2 rounded-lg text-xs font-bold transition-all shadow-md shadow-emerald-700/20 flex items-center gap-1.5 cursor-pointer"
              >
                <span>👨‍🌾</span>
                <span>{t("login", lang)}</span>
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => handleNavClick("farmvoice")}
              className="p-2 rounded-lg bg-amber-50 text-amber-900 border border-amber-300 text-base"
              title="Voice Assistant"
            >
              🎙️
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-700 hover:text-emerald-800 hover:bg-stone-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              <span className="text-2xl">{mobileMenuOpen ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-stone-200 px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`p-2.5 rounded-lg text-xs font-semibold text-left flex items-center gap-2 transition-all ${
                  currentTab === link.id
                    ? "bg-emerald-700 text-white"
                    : "bg-stone-50 text-stone-800 hover:bg-emerald-50"
                }`}
              >
                <span className="text-base">{link.icon}</span>
                <span className="truncate">{link.label}</span>
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-2 border-t border-stone-100">
            <button
              onClick={handleCallHelpline}
              className="w-full py-2.5 px-3 bg-emerald-50 text-emerald-900 rounded-lg text-xs font-bold flex items-center justify-center gap-2 border border-emerald-200"
            >
              <span>📞</span>
              <span>1800-419-3276 ({t("helpline", lang)})</span>
            </button>

            {!user && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openAuthModal();
                }}
                className="w-full py-2.5 px-3 bg-emerald-700 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-2"
              >
                <span>👨‍🌾</span>
                <span>{t("login", lang)}</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
