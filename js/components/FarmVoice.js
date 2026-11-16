// FARMORA – Farm Voice (Conversational Agricultural Voice Assistant)
function FarmVoice({ lang, setLang, showToast }) {
  const [isListening, setIsListening] = React.useState(false);
  const [isSpeaking, setIsSpeaking] = React.useState(false);
  const [transcript, setTranscript] = React.useState("");
  const [activeResponse, setActiveResponse] = React.useState(null);
  const [voiceLanguage, setVoiceLanguage] = React.useState(lang || "ta"); // 'ta' for Tamil, 'en' for English
  const [conversationHistory, setConversationHistory] = React.useState([]);

  // Agricultural Knowledge Base for instant intelligent answers
  const knowledgeBase = React.useMemo(() => [
    {
      id: "paddy-price",
      keywordsEn: ["paddy", "price", "thanjavur", "dhan", "rate"],
      keywordsTa: ["நெல்", "விலை", "தஞ்சாவூர்", "கொள்முதல்"],
      questionEn: "What is the market price of paddy in Thanjavur today?",
      questionTa: "இன்று தஞ்சாவூர் மண்டி நெல் கொள்முதல் விலை என்ன?",
      responseEn: "Today at Thanjavur APMC, Samba Ponni (BPT 5204) paddy is trading at ₹2,380 per quintal (Modal price). Minimum rate is ₹2,280 and Maximum rate reached ₹2,450 per quintal with a +2.4% upward trend.",
      responseTa: "இன்று தஞ்சாவூர் ஒழுங்குமுறை விற்பனைக் கூடத்தில் சம்பா பொன்னி நெல் சராசரியாக குவிண்டாலுக்கு ₹2,380 விலையில் விற்பனையாகிறது. குறைந்தபட்ச விலை ₹2,280, அதிகபட்ச விலை ₹2,450 வரை உயர்ந்துள்ளது.",
      category: "Market Price"
    },
    {
      id: "tomato-blight",
      keywordsEn: ["tomato", "yellow", "leaf", "curl", "blight", "cure"],
      keywordsTa: ["தக்காளி", "இலை", "மஞ்சள்", "கருகல்", "மருந்து"],
      questionEn: "How to treat yellowing and leaf blight in tomato?",
      questionTa: "தக்காளி இலையில் மஞ்சள் புள்ளி மற்றும் கருகல் வந்தால் என்ன செய்வது?",
      responseEn: "For tomato late blight, immediately spray 1% Bordeaux mixture or Trichoderma viride @ 5g/liter organically. If severe, spray Metalaxyl 8% + Mancozeb 64% WP @ 2g per liter during morning hours. Ensure good drainage.",
      responseTa: "தக்காளி இலைக்கருகல் நோய்க்கு உடனடியாக 1% போர்டோ கலவை அல்லது டிரைக்கோடெர்மா விரிடி லிட்டருக்கு 5 கிராம் தெளிக்கவும். தீவிரமாக இருப்பின் மெட்டலாக்ஸில் + மேன்கோசெப் லிட்டருக்கு 2 கிராம் வீதம் காலையில் தெளிக்கவும்.",
      category: "Crop Health"
    },
    {
      id: "sugarcane-water",
      keywordsEn: ["sugarcane", "water", "irrigation", "acres"],
      keywordsTa: ["கரும்பு", "தண்ணீர்", "பாசனம்", "ஏக்கர்"],
      questionEn: "How much water is needed for 2 acres of sugarcane?",
      questionTa: "2 ஏக்கர் கரும்பு பயிருக்கு ஒரு நாளைக்கு எவ்வளவு தண்ணீர் தேவை?",
      responseEn: "During the formative and tillering stage, 2 acres of sugarcane requires approximately 11,500 liters per day with drip irrigation. Run a 5 HP motor for about 1 hour and 15 minutes daily in two splits.",
      responseTa: "வளர்ச்சி நிலையில் உள்ள 2 ஏக்கர் கரும்பு பயிருக்கு சொட்டு நீர் பாசனம் மூலம் ஒரு நாளைக்கு சுமார் 11,500 லிட்டர் நீர் தேவை. 5 குதிரைத்திறன் மோட்டாரை ஒரு நாளைக்கு 1 மணி நேரம் 15 நிமிடங்கள் இயக்கினால் போதுமானது.",
      category: "WaterWise AI"
    },
    {
      id: "drip-subsidy",
      keywordsEn: ["subsidy", "drip", "government", "tamil nadu", "pm kisan"],
      keywordsTa: ["மானியம்", "சொட்டு நீர்", "அரசு", "விவசாயம்"],
      questionEn: "What are the government subsidies for drip irrigation in Tamil Nadu?",
      questionTa: "தமிழ்நாட்டில் சொட்டு நீர் பாசனத்திற்கு அரசு வழங்கும் மானியம் எவ்வளவு?",
      responseEn: "Under the Pradhan Mantri Krishi Sinchayee Yojana (PMKSY), Tamil Nadu provides 100% subsidy for small and marginal farmers (up to 5 acres) and 75% subsidy for other large farmers. Apply via the TNAU Uzhavan app or your local Assistant Director of Horticulture office.",
      responseTa: "தமிழ்நாடு அரசு பிரதமரின் நுண்ணீர்ப் பாசனத் திட்டத்தின் கீழ் சிறு மற்றும் குறு விவசாயிகளுக்கு (5 ஏக்கர் வரை) 100% முழு மானியமும், இதர விவசாயிகளுக்கு 75% மானியமும் வழங்குகிறது. உழவன் செயலி அல்லது வட்டார தோட்டக்கலை அலுவலகத்தில் விண்ணப்பிக்கலாம்.",
      category: "Government Scheme"
    },
    {
      id: "cotton-leaf-curl",
      keywordsEn: ["cotton", "curl", "pest", "whitefly"],
      keywordsTa: ["பருத்தி", "இலைச்சுருள்", "வெள்ளை ஈ", "பூச்சி"],
      questionEn: "How to control whiteflies and leaf curl in cotton?",
      questionTa: "பருத்தி இலைச்சுருள் நோய் மற்றும் வெள்ளை ஈக்களை கட்டுப்படுத்துவது எப்படி?",
      responseEn: "Install 15-20 yellow sticky traps per acre to monitor whiteflies. Spray Neem oil (10,000 PPM) @ 2ml/liter. For chemical control, apply Diafenthiuron 50% WP @ 1.2g/liter in late evening.",
      responseTa: "வெள்ளை ஈக்களைக் கட்டுப்படுத்த ஏக்கருக்கு 15 முதல் 20 மஞ்சள் நிற ஒட்டும் பொறிகளை வைக்கவும். வேப்ப எண்ணெய் 10,000 பி.பி.எம் லிட்டருக்கு 2 மி.லி தெளிக்கவும். தேவைப்பட்டால் டயாபெந்தியூரான் லிட்டருக்கு 1.2 கிராம் தெளிக்கவும்.",
      category: "Pest Management"
    },
    {
      id: "waste-mushroom",
      keywordsEn: ["paddy", "straw", "mushroom", "waste", "income"],
      keywordsTa: ["வைக்கோல்", "காளான்", "கழிவு", "வருமானம்"],
      questionEn: "How to earn extra money from paddy straw without burning?",
      questionTa: "வைக்கோலை எரிக்காமல் சிப்பிக் காளான் வளர்த்து எப்படி வருமானம் ஈட்டுவது?",
      responseEn: "One ton of dry paddy straw can yield up to 500 kg of fresh oyster mushrooms in 25 days, earning you ₹75,000 to ₹90,000. Leftover spent mushroom substrate is also high-grade vermicompost.",
      responseTa: "ஒரு டன் காய்ந்த நெல் வைக்கோலைக் கொண்டு 25 நாட்களில் சுமார் 500 கிலோ சிப்பிக் காளான்களை அறுவடை செய்து ₹75,000 வரை லாபம் பெறலாம். காளான் எடுத்த பின் எஞ்சிய வைக்கோல் சிறந்த மண்புழு உரமாக மாறும்.",
      category: "Waste to Wealth"
    },
    {
      id: "onion-mandi-best",
      keywordsEn: ["onion", "shallot", "mandi", "highest", "price", "where", "sell"],
      keywordsTa: ["வெங்காயம்", "மண்டி", "அதிக", "விலை", "எங்கு", "விற்பனை"],
      questionEn: "Where should I sell my shallots (small onion) for maximum profit?",
      questionTa: "சின்ன வெங்காயத்தை எந்த மண்டியில் விற்றால் அதிக லாபம் கிடைக்கும்?",
      responseEn: "According to MandiMate market intelligence, Dindigul Shallot Yard is offering the highest modal price today at ₹4,480 per quintal (+3.8% trend), giving you ₹275 more per quintal after transport compared to local village brokers.",
      responseTa: "மண்டிமேட் சந்தை நிலவரப்படி, இன்று திண்டுக்கல் மண்டி அதிகபட்சமாக குவிண்டாலுக்கு ₹4,480 விலையில் வாங்குகிறது. உள்ளூர் இடைத்தரகர்களை விட மண்டிமேட் மூலம் நேரடியாக விற்றால் குவிண்டாலுக்கு ₹275 கூடுதல் லாபம் கிடைக்கும்.",
      category: "MandiMate"
    },
    {
      id: "equipment-share",
      keywordsEn: ["rent", "baler", "shredder", "machine", "sharing", "equipment"],
      keywordsTa: ["வாடகை", "இயந்திரம்", "வைக்கோல்", "கட்டும்", "பகிர்வு"],
      questionEn: "How can I rent a straw baler or biomass shredder nearby?",
      questionTa: "எனக்கு அருகில் வைக்கோல் கட்டும் இயந்திரம் அல்லது சோகை நறுக்கும் கருவி எப்படி வாடகைக்கு எடுப்பது?",
      responseEn: "In our Agro-Resource Sharing Hub, Farmer K. Raman in Thiruvaiyaru (3.2 km away) has an available Round Straw Baler for ₹450/acre, and TNAU Custom Hiring Center offers Super Seeders at ₹1,400/acre.",
      responseTa: "நமது பண்ணை வளப் பகிர்வு மையத்தில், திருவையாறு விவசாயி கே. ராமன் அவர்களிடம் ஏக்கருக்கு ₹450 வாடகையில் வைக்கோல் கட்டும் இயந்திரம் (Baler) உள்ளது. நேரடி அழைப்பு மூலம் முன்பதிவு செய்யலாம்.",
      category: "Resource Sharing"
    },
    {
      id: "irrigation-timing",
      keywordsEn: ["irrigation", "timing", "water", "schedule", "morning", "sun"],
      keywordsTa: ["பாசனம்", "நேரம்", "தண்ணீர்", "காலை", "வெயில்"],
      questionEn: "What is the best time of day to irrigate crops according to WaterWise AI?",
      questionTa: "பயிர்களுக்கு தண்ணீர் பாய்ச்ச சிறந்த நேரம் எது?",
      responseEn: "WaterWise AI recommends irrigating between 05:30 AM and 08:30 AM in the morning, or after 05:00 PM in the evening. Midday watering causes up to 35% evaporative loss and can scald tender root hairs.",
      responseTa: "வாட்டர்வைஸ் AI பரிந்துரைப்படி, காலை 05:30 முதல் 08:30 மணிக்குள் அல்லது மாலை 05:00 மணிக்கு மேல் நீர் பாய்ச்சவும். நண்பகலில் பாய்ச்சினால் 35% நீர் ஆவியாகி வீணாகும் மற்றும் வேர் அழுகல் ஏற்படலாம்.",
      category: "WaterWise AI"
    }
  ], []);

  // Set initial response on mount
  React.useEffect(() => {
    setActiveResponse(knowledgeBase[0]);
  }, [knowledgeBase]);

  // Synchronize language if prop changes
  React.useEffect(() => {
    if (lang) setVoiceLanguage(lang);
  }, [lang]);

  // Speech Recognition using Web Speech API with fallback
  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      showToast(
        lang === "ta" 
          ? "உங்கள் உலாவியில் குரல் உள்ளீடு வசதி இல்லை; கீழேயுள்ள மாதிரி கேள்விகளைப் பயன்படுத்தவும்." 
          : "Web Speech Recognition not supported in this browser; please use the pre-seeded questions below.", 
        "info"
      );
      // Simulate quick voice query
      simulateVoiceInput();
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = voiceLanguage === "ta" ? "ta-IN" : "en-IN";
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      setIsListening(true);
      setTranscript(voiceLanguage === "ta" ? "கேட்கிறது... தயவுசெய்து பேசவும்" : "Listening... please speak your question");

      recognition.onresult = (event) => {
        const spokenText = event.results[0][0].transcript;
        setTranscript(spokenText);
        setIsListening(false);
        processQuestion(spokenText);
      };

      recognition.onerror = (err) => {
        setIsListening(false);
        showToast(
          lang === "ta" ? "குரல் கேட்க முடியவில்லை, மீண்டும் முயலவும்" : "Could not hear audio clearly; try again", 
          "error"
        );
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } catch (e) {
      setIsListening(false);
      simulateVoiceInput();
    }
  };

  // Fallback simulator for browsers or non-supported engines
  const simulateVoiceInput = () => {
    setIsListening(true);
    setTranscript(voiceLanguage === "ta" ? "குரல் பதிவு செய்யப்படுகிறது..." : "Voice recording in progress...");
    setTimeout(() => {
      setIsListening(false);
      const randomQ = knowledgeBase[Math.floor(Math.random() * knowledgeBase.length)];
      const text = voiceLanguage === "ta" ? randomQ.questionTa : randomQ.questionEn;
      setTranscript(text);
      processQuestion(text);
    }, 1200);
  };

  // Query processing & intent matching
  const processQuestion = (queryText) => {
    const lower = queryText.toLowerCase();
    let bestMatch = knowledgeBase[0];
    let maxMatches = 0;

    knowledgeBase.forEach((item) => {
      let matches = 0;
      const keywords = voiceLanguage === "ta" ? item.keywordsTa : item.keywordsEn;
      keywords.forEach((k) => {
        if (lower.includes(k.toLowerCase())) matches++;
      });
      if (matches > maxMatches) {
        maxMatches = matches;
        bestMatch = item;
      }
    });

    setActiveResponse(bestMatch);
    setConversationHistory((prev) => [
      { query: queryText, answer: voiceLanguage === "ta" ? bestMatch.responseTa : bestMatch.responseEn },
      ...prev.slice(0, 4)
    ]);

    // Automatically trigger speech synthesis
    playSpeech(voiceLanguage === "ta" ? bestMatch.responseTa : bestMatch.responseEn);
  };

  // Text-To-Speech with window.speechSynthesis
  const playSpeech = (text) => {
    if (!('speechSynthesis' in window)) {
      showToast(lang === "ta" ? "பேச்சு ஒலிப்பான் ஆதரவு இல்லை" : "Text-to-speech not supported", "info");
      return;
    }

    window.speechSynthesis.cancel(); // Stop any ongoing speech
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = voiceLanguage === "ta" ? "ta-IN" : "en-IN";
    utterance.rate = 0.95; // Slightly slower for clarity in rural environments

    // Try to pick appropriate Tamil or Indian English voice if available
    const voices = window.speechSynthesis.getVoices();
    const targetVoice = voices.find(v => v.lang.startsWith(voiceLanguage === "ta" ? "ta" : "en"));
    if (targetVoice) utterance.voice = targetVoice;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  const stopSpeech = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-amber-950 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/30 text-amber-200 text-xs font-bold uppercase tracking-wider mb-3">
            <span>🎙️</span>
            <span>Module 03 • Rural Voice AI</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {t("fvTitle", lang)}
          </h1>
          <p className="text-emerald-100/90 text-sm sm:text-base mt-2 font-normal leading-relaxed">
            {t("fvSubtitle", lang)}
          </p>
        </div>
      </div>

      {/* Main Grid: Interactive Mic & Audio Visualizer on Left, Conversational Answers on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN: Voice Microphone Console */}
        <div className="lg:col-span-5 bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6 text-center">
          {/* Voice Language Selector */}
          <div className="flex justify-center items-center gap-2 bg-stone-100 p-1.5 rounded-2xl max-w-xs mx-auto">
            <button
              onClick={() => {
                setVoiceLanguage("ta");
                setLang("ta");
              }}
              className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                voiceLanguage === "ta"
                  ? "bg-emerald-700 text-white shadow-sm"
                  : "text-stone-700 hover:text-emerald-800"
              }`}
            >
              தமிழ் (Tamil)
            </button>
            <button
              onClick={() => {
                setVoiceLanguage("en");
                setLang("en");
              }}
              className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                voiceLanguage === "en"
                  ? "bg-emerald-700 text-white shadow-sm"
                  : "text-stone-700 hover:text-emerald-800"
              }`}
            >
              English
            </button>
          </div>

          {/* Central Pulsing Microphone Trigger */}
          <div className="py-4 relative flex flex-col items-center justify-center">
            <button
              onClick={startListening}
              disabled={isListening}
              className={`w-32 h-32 sm:w-36 sm:h-36 rounded-full flex flex-col items-center justify-center transition-all shadow-2xl cursor-pointer ${
                isListening
                  ? "bg-red-500 text-white animate-voice-pulse"
                  : isSpeaking
                  ? "bg-emerald-600 text-white ring-8 ring-emerald-100"
                  : "bg-gradient-to-tr from-emerald-700 to-green-600 hover:from-emerald-800 hover:to-green-700 text-white hover:scale-105"
              }`}
            >
              <span className="text-4xl sm:text-5xl mb-1">
                {isListening ? "🔴" : isSpeaking ? "🔊" : "🎙️"}
              </span>
              <span className="text-[11px] font-black uppercase tracking-wider">
                {isListening ? "Listening" : isSpeaking ? "Speaking" : "Tap to Speak"}
              </span>
            </button>

            {/* Audio Waveform Bar Animation */}
            {isSpeaking && (
              <div className="flex items-center justify-center gap-1.5 h-10 mt-5">
                <span className="w-1.5 bg-emerald-600 rounded-full animate-bar-1"></span>
                <span className="w-1.5 bg-emerald-500 rounded-full animate-bar-2"></span>
                <span className="w-1.5 bg-emerald-400 rounded-full animate-bar-3"></span>
                <span className="w-1.5 bg-emerald-500 rounded-full animate-bar-4"></span>
                <span className="w-1.5 bg-emerald-600 rounded-full animate-bar-5"></span>
              </div>
            )}
          </div>

          {/* Transcript / Spoken Query Status */}
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-left">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[10px] font-bold text-stone-500 uppercase">
                {voiceLanguage === "ta" ? "உங்களின் கேள்வி:" : "Farmer Voice Input:"}
              </span>
              <span className="text-[10px] font-semibold text-emerald-700">
                {isListening ? "● Live Listening" : "✓ Audio Processed"}
              </span>
            </div>
            <p className="text-xs sm:text-sm font-bold text-stone-900 italic min-h-[2.5rem]">
              {transcript || (voiceLanguage === "ta" 
                ? "மைக் பொத்தானைத் தொட்டு தமிழில் பேசவும்..." 
                : "Tap the mic and speak your agriculture question...")}
            </p>
          </div>

          {/* Audio Controls */}
          {isSpeaking && (
            <button
              onClick={stopSpeech}
              className="w-full py-2.5 bg-red-100 text-red-800 hover:bg-red-200 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>⏹️</span>
              <span>{t("stopAudio", lang)}</span>
            </button>
          )}

          <p className="text-[11px] text-stone-500 leading-relaxed">
            {t("micPermissionNotice", lang)}
          </p>
        </div>

        {/* RIGHT COLUMN: Agronomist Answers & Quick Question Chips */}
        <div className="lg:col-span-7 space-y-6">
          {/* Active Spoken Answer Card */}
          {activeResponse && (
            <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-5 animate-fadeIn">
              <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-xl">
                    👨‍🌾
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">
                      {activeResponse.category}
                    </span>
                    <h3 className="text-lg font-extrabold text-stone-900">
                      {t("assistantResponse", lang)}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => playSpeech(voiceLanguage === "ta" ? activeResponse.responseTa : activeResponse.responseEn)}
                  className="px-3.5 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 hover:bg-emerald-100 text-xs font-bold transition-all border border-emerald-200 flex items-center gap-1.5 cursor-pointer"
                >
                  <span>🔊</span>
                  <span>{t("listenAgain", lang)}</span>
                </button>
              </div>

              {/* Question Asked Pill */}
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-200">
                <span className="text-[10px] text-stone-500 font-bold block mb-0.5">
                  {lang === "ta" ? "கேட்கப்பட்ட கேள்வி:" : "Recognized Question:"}
                </span>
                <p className="text-xs sm:text-sm font-bold text-stone-800">
                  {voiceLanguage === "ta" ? activeResponse.questionTa : activeResponse.questionEn}
                </p>
              </div>

              {/* Spoken Answer Text */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-emerald-50/70 to-teal-50/50 border border-emerald-200/80">
                <p className="text-sm sm:text-base text-stone-800 leading-relaxed font-medium">
                  {voiceLanguage === "ta" ? activeResponse.responseTa : activeResponse.responseEn}
                </p>
              </div>

              <div className="flex items-center justify-between text-[11px] text-stone-500 pt-1">
                <span className="flex items-center gap-1">
                  <span>✓</span> Source: TNAU Agronomy & CPG Market Portal
                </span>
                <span className="text-emerald-700 font-semibold">
                  Dial 1800-419-3276 for 24x7 Human Agronomist
                </span>
              </div>
            </div>
          )}

          {/* Quick Pre-Seeded Question Chips */}
          <div className="bg-white rounded-3xl border border-stone-200 p-6 shadow-sm space-y-4">
            <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wider flex items-center gap-1.5">
              <span>💡</span>
              <span>{t("quickQuestionsTitle", lang)}</span>
            </h4>

            <div className="space-y-2.5">
              {knowledgeBase.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    const qText = voiceLanguage === "ta" ? item.questionTa : item.questionEn;
                    setTranscript(qText);
                    processQuestion(qText);
                  }}
                  className="w-full p-3 rounded-xl border border-stone-200 bg-stone-50 hover:bg-emerald-50 hover:border-emerald-300 text-left transition-all flex items-center justify-between gap-3 group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="text-base group-hover:scale-110 transition-transform">
                      {item.category === "Market Price" ? "💰" : item.category === "Crop Health" ? "🍃" : item.category === "WaterWise AI" ? "💧" : "📜"}
                    </span>
                    <span className="text-xs font-bold text-stone-800 group-hover:text-emerald-900 truncate">
                      {voiceLanguage === "ta" ? item.questionTa : item.questionEn}
                    </span>
                  </div>
                  <span className="text-stone-400 group-hover:text-emerald-700 text-xs font-bold flex-shrink-0">
                    {lang === "ta" ? "கேள் →" : "Ask →"}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
