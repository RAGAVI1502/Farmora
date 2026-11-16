// FARMORA – Master Root React Application
function App() {
  const [currentTab, setCurrentTab] = React.useState("home");
  const [lang, setLang] = React.useState(() => {
    return localStorage.getItem("farmora_lang") || "en";
  });
  const [user, setUser] = React.useState(() => {
    try {
      const stored = localStorage.getItem("farmora_user");
      return stored ? JSON.parse(stored) : null;
    } catch (e) {
      return null;
    }
  });
  const [authModalOpen, setAuthModalOpen] = React.useState(false);
  const [toast, setToast] = React.useState(null);

  // Sync language with localStorage
  const handleSetLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem("farmora_lang", newLang);
  };

  // Toast notification helper
  const showToast = (message, type = "info") => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  // Render active tab view
  const renderCurrentView = () => {
    switch (currentTab) {
      case "home":
        return (
          <Hero
            setCurrentTab={setCurrentTab}
            lang={lang}
            openAuthModal={() => setAuthModalOpen(true)}
          />
        );
      case "waterwise":
        return <WaterWiseAI lang={lang} showToast={showToast} />;
      case "mandimate":
        return <MandiMateAI lang={lang} showToast={showToast} />;
      case "farmvoice":
        return <FarmVoice lang={lang} setLang={handleSetLang} showToast={showToast} />;
      case "wastewealth":
        return <WasteToWealth lang={lang} showToast={showToast} />;
      case "cropdoctor":
        return <CropDoctorAI lang={lang} showToast={showToast} />;
      case "dashboard":
        return (
          <FarmerDashboard
            user={user}
            setCurrentTab={setCurrentTab}
            lang={lang}
            openAuthModal={() => setAuthModalOpen(true)}
            showToast={showToast}
          />
        );
      case "weatherMandi":
        return <MandiWeather lang={lang} showToast={showToast} />;
      case "cropCalendar":
        return <CropCalendar lang={lang} setCurrentTab={setCurrentTab} />;
      case "aboutContact":
        return <AboutContact lang={lang} showToast={showToast} />;
      default:
        return (
          <Hero
            setCurrentTab={setCurrentTab}
            lang={lang}
            openAuthModal={() => setAuthModalOpen(true)}
          />
        );
    }
  };

  return (
    <div className={`min-h-screen flex flex-col bg-[#fbf9f4] text-stone-900 ${lang === "ta" ? "font-tamil" : ""}`}>
      {/* 1. Global Navigation Bar */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        lang={lang}
        setLang={handleSetLang}
        user={user}
        openAuthModal={() => setAuthModalOpen(true)}
        showToast={showToast}
      />

      {/* 2. Main Page View Container */}
      <main className="flex-1">
        {renderCurrentView()}
      </main>

      {/* 3. Global Footer */}
      <Footer
        setCurrentTab={setCurrentTab}
        lang={lang}
        setLang={handleSetLang}
      />

      {/* 4. Floating Voice Assistant Quick Pill (Visible when not on voice tab) */}
      {currentTab !== "farmvoice" && (
        <button
          onClick={() => {
            setCurrentTab("farmvoice");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-emerald-700 to-green-600 hover:from-emerald-800 hover:to-green-700 text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl shadow-emerald-950/30 flex items-center gap-2.5 transition-all hover:scale-105 cursor-pointer ring-4 ring-emerald-500/20"
          title="Open Farm Voice Assistant"
        >
          <span className="text-xl sm:text-2xl animate-pulse">🎙️</span>
          <span className="hidden sm:inline text-xs font-black tracking-wide uppercase">
            {lang === "ta" ? "குரல் உதவியாளர்" : "Farm Voice"}
          </span>
        </button>
      )}

      {/* 5. Farmer Registration & Login Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        user={user}
        setUser={setUser}
        lang={lang}
        showToast={showToast}
      />

      {/* 6. Toast Notification Banner */}
      {toast && (
        <div className="fixed bottom-6 left-6 z-50 max-w-sm animate-bounce">
          <div className={`p-4 rounded-2xl shadow-xl border flex items-center gap-3 text-xs font-bold ${
            toast.type === "success"
              ? "bg-emerald-900 text-white border-emerald-700"
              : toast.type === "error"
              ? "bg-red-900 text-white border-red-700"
              : "bg-stone-900 text-white border-stone-700"
          }`}>
            <span className="text-lg">
              {toast.type === "success" ? "✅" : toast.type === "error" ? "❌" : "ℹ️"}
            </span>
            <span className="leading-snug">{toast.message}</span>
          </div>
        </div>
      )}
    </div>
  );
}

// Mount React Root
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
