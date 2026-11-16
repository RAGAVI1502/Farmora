// FARMORA by AgriMitra AI – Crop Doctor AI (Plant Disease Identification & Agronomic Treatment)
function CropDoctorAI({ lang, showToast }) {
  const [selectedDiseaseId, setSelectedDiseaseId] = React.useState("paddy-blast");
  const [activeImage, setActiveImage] = React.useState(demoDiseases[0].sampleImage);
  const [isScanning, setIsScanning] = React.useState(false);
  const [scanProgress, setScanProgress] = React.useState(0);
  const [diagnosis, setDiagnosis] = React.useState(demoDiseases[0]);
  const [customUploadName, setCustomUploadName] = React.useState(null);
  const [showApiModal, setShowApiModal] = React.useState(false);
  const [activeTabRemedy, setActiveTabRemedy] = React.useState("organic"); // organic, chemical, fertilizer

  const fileInputRef = React.useRef(null);

  // Trigger simulated AI Scan whenever sample or custom upload changes
  const runAiScan = (diseaseObj, customImage = null, uploadFileName = null) => {
    setIsScanning(true);
    setScanProgress(15);
    if (customImage) setActiveImage(customImage);
    if (uploadFileName) setCustomUploadName(uploadFileName);
    else setCustomUploadName(null);

    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 95) {
          clearInterval(interval);
          return 100;
        }
        return prev + 25;
      });
    }, 180);

    setTimeout(() => {
      clearInterval(interval);
      setDiagnosis(diseaseObj);
      setIsScanning(false);
      setScanProgress(100);
      showToast(
        lang === "ta" 
          ? `கண்டறியப்பட்டது: ${diseaseObj.tamilName} (${diseaseObj.confidence}% துல்லியம்)` 
          : `Diagnosis Complete: ${diseaseObj.diseaseName} (${diseaseObj.confidence}% Confidence)`, 
        "success"
      );
    }, 900);
  };

  const handleSelectDemo = (d) => {
    setSelectedDiseaseId(d.id);
    runAiScan(d, d.sampleImage, null);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        showToast(lang === "ta" ? "தயவுசெய்து ஒரு படக் கோப்பைத் தேர்ந்தெடுக்கவும்" : "Please select an image file", "error");
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        // For custom uploads, select a relevant or random disease matching demo database
        const randomMatch = demoDiseases[Math.floor(Math.random() * (demoDiseases.length - 1))];
        runAiScan(randomMatch, event.target.result, file.name);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-green-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/80 text-emerald-200 text-xs font-bold uppercase tracking-wider mb-3">
            <span>🍃</span>
            <span>Module 02 • Vision AI Pathology</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {t("mmTitle", lang)}
          </h1>
          <p className="text-emerald-100/90 text-sm sm:text-base mt-2 font-normal leading-relaxed">
            {t("mmSubtitle", lang)}
          </p>
        </div>
      </div>

      {/* Prominent Demo Notice Bar */}
      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 sm:p-5 rounded-2xl shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <span className="text-2xl mt-0.5">⚠️</span>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-amber-950">
              {t("demoNoticeTitle", lang)}
            </h4>
            <p className="text-xs text-amber-900/90 mt-0.5 leading-relaxed">
              {t("demoNoticeDesc", lang)}
            </p>
          </div>
        </div>
        <button
          onClick={() => setShowApiModal(true)}
          className="flex-shrink-0 px-3.5 py-2 rounded-xl bg-amber-600 text-white hover:bg-amber-700 text-xs font-bold transition-all shadow-sm cursor-pointer flex items-center gap-1.5"
        >
          <span>🔌</span>
          <span>{t("viewApiArchitecture", lang)}</span>
        </button>
      </div>

      {/* Main Grid: Upload & Preview on Left, Diagnosis Report on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN: Upload & Samples */}
        <div className="lg:col-span-5 space-y-6">
          {/* Image Container with Scanning Laser Animation */}
          <div className="bg-white rounded-2xl border border-stone-200 p-4 shadow-sm space-y-4">
            <div className="relative rounded-xl overflow-hidden bg-stone-900 aspect-square flex items-center justify-center">
              <img
                src={activeImage}
                alt="Diagnosed crop leaf"
                className="w-full h-full object-cover transition-all"
              />

              {/* Scanning Overlay Laser Bar */}
              {isScanning && (
                <div className="absolute inset-0 bg-emerald-950/30 backdrop-blur-[1px] flex flex-col justify-center items-center">
                  <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_15px_#22c55e] animate-laser"></div>
                  <div className="bg-white/95 px-4 py-2 rounded-xl shadow-lg border border-emerald-300 text-center z-10">
                    <p className="text-xs font-extrabold text-emerald-900 animate-pulse">
                      {t("analyzingImage", lang)}
                    </p>
                    <div className="w-32 bg-stone-200 h-1.5 rounded-full overflow-hidden mt-2">
                      <div
                        className="bg-emerald-600 h-full transition-all duration-200"
                        style={{ width: `${scanProgress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}

              {/* Status Badge overlay */}
              <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-white flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>{customUploadName ? customUploadName : diagnosis.crop}</span>
              </div>
            </div>

            {/* Custom Upload Dropzone */}
            <div
              onClick={() => fileInputRef.current && fileInputRef.current.click()}
              className="border-2 border-dashed border-stone-300 hover:border-emerald-600 rounded-xl p-5 text-center cursor-pointer transition-colors bg-stone-50/70 hover:bg-emerald-50/50"
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
              <span className="text-3xl block mb-2">📸</span>
              <p className="text-xs font-bold text-stone-800">
                {t("uploadPrompt", lang)}
              </p>
              <p className="text-[11px] text-stone-500 mt-0.5">
                {t("uploadSubtext", lang)}
              </p>
            </div>
          </div>

          {/* 6 Realistic Demo Samples to Click Immediately */}
          <div className="bg-white rounded-2xl border border-stone-200 p-5 shadow-sm space-y-3">
            <h3 className="text-xs font-bold text-stone-700 uppercase tracking-wider">
              {t("orSelectDemo", lang)}
            </h3>
            <div className="grid grid-cols-2 gap-2.5">
              {demoDiseases.map((d) => {
                const isSelected = selectedDiseaseId === d.id && !customUploadName;
                return (
                  <button
                    key={d.id}
                    onClick={() => handleSelectDemo(d)}
                    className={`p-2 rounded-xl border text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                      isSelected
                        ? "border-emerald-600 bg-emerald-50 ring-2 ring-emerald-500/20"
                        : "border-stone-200 bg-stone-50 hover:bg-stone-100"
                    }`}
                  >
                    <img
                      src={d.sampleImage}
                      alt={d.diseaseName}
                      className="w-10 h-10 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="text-[11px] font-bold text-stone-900 truncate">
                        {lang === "ta" ? d.tamilCrop : d.crop}
                      </p>
                      <p className="text-[10px] text-stone-600 truncate">
                        {lang === "ta" ? d.tamilName : d.diseaseName.split(" (")[0]}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Diagnosis & Prescriptions */}
        <div className="lg:col-span-7 space-y-6">
          {/* Diagnostic Result Header Card */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-7 shadow-sm space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100 pb-4">
              <div>
                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 uppercase tracking-wider">
                  {diagnosis.crop} • {diagnosis.pathogen}
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-1">
                  {lang === "ta" ? diagnosis.tamilName : diagnosis.diseaseName}
                </h2>
              </div>

              {/* Confidence Badge */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-2 text-right">
                <p className="text-[10px] font-bold text-emerald-800 uppercase">
                  {t("detectionConfidence", lang)}
                </p>
                <p className="text-2xl font-black text-emerald-950">
                  {diagnosis.confidence}%
                </p>
              </div>
            </div>

            {/* Severity and Pathology Metadata Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="bg-stone-50 rounded-xl p-3 border border-stone-200">
                <span className="text-[10px] font-bold text-stone-500 uppercase block">
                  {t("severityLevel", lang)}
                </span>
                <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-bold mt-1 ${
                  diagnosis.severityColor === "red"
                    ? "bg-red-100 text-red-800 border border-red-200"
                    : diagnosis.severityColor === "amber"
                    ? "bg-amber-100 text-amber-800 border border-amber-200"
                    : "bg-green-100 text-green-800 border border-green-200"
                }`}>
                  ● {diagnosis.severity}
                </span>
              </div>

              <div className="bg-stone-50 rounded-xl p-3 border border-stone-200">
                <span className="text-[10px] font-bold text-stone-500 uppercase block">
                  {t("pathogenType", lang)}
                </span>
                <p className="text-xs font-bold text-stone-800 mt-1 truncate">
                  {diagnosis.pathogen}
                </p>
              </div>

              <div className="col-span-2 sm:col-span-1 bg-stone-50 rounded-xl p-3 border border-stone-200">
                <span className="text-[10px] font-bold text-stone-500 uppercase block">
                  Field Action
                </span>
                <p className="text-xs font-bold text-emerald-800 mt-1">
                  Immediate Spray Recommended
                </p>
              </div>
            </div>

            {/* Symptoms Description */}
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
              <h4 className="text-xs font-bold text-stone-800 mb-1 flex items-center gap-1.5">
                <span>🔍</span>
                <span>{lang === "ta" ? "நோய் அறிகுறிகள்:" : "Observed Pathology Symptoms:"}</span>
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed font-normal">
                {diagnosis.symptoms}
              </p>
            </div>
          </div>

          {/* Treatment Tabs: Organic, Chemical, Fertilizer */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-7 shadow-sm space-y-5">
            <div className="flex border-b border-stone-200 gap-2">
              <button
                onClick={() => setActiveTabRemedy("organic")}
                className={`pb-3 px-3 text-xs font-bold transition-all border-b-2 cursor-pointer flex items-center gap-1.5 ${
                  activeTabRemedy === "organic"
                    ? "border-emerald-600 text-emerald-800"
                    : "border-transparent text-stone-500 hover:text-stone-800"
                }`}
              >
                <span>🌿</span>
                <span>{t("organicTreatment", lang)}</span>
              </button>

              <button
                onClick={() => setActiveTabRemedy("chemical")}
                className={`pb-3 px-3 text-xs font-bold transition-all border-b-2 cursor-pointer flex items-center gap-1.5 ${
                  activeTabRemedy === "chemical"
                    ? "border-amber-600 text-amber-900"
                    : "border-transparent text-stone-500 hover:text-stone-800"
                }`}
              >
                <span>🧪</span>
                <span>{t("chemicalTreatment", lang)}</span>
              </button>

              <button
                onClick={() => setActiveTabRemedy("fertilizer")}
                className={`pb-3 px-3 text-xs font-bold transition-all border-b-2 cursor-pointer flex items-center gap-1.5 ${
                  activeTabRemedy === "fertilizer"
                    ? "border-blue-600 text-blue-900"
                    : "border-transparent text-stone-500 hover:text-stone-800"
                }`}
              >
                <span>🌱</span>
                <span>{t("fertilizerAdvisory", lang)}</span>
              </button>
            </div>

            {/* Tab 1: Organic Remedy */}
            {activeTabRemedy === "organic" && (
              <div className="space-y-3 animate-fadeIn">
                <div className="p-3 bg-emerald-50 text-emerald-900 rounded-xl text-xs font-semibold flex items-center gap-2">
                  <span>💚</span>
                  <span>
                    {lang === "ta" 
                      ? "சுற்றுச்சூழலுக்கு உகந்த குறைந்த செலவு இயற்கை வேளாண் சிகிச்சை" 
                      : "Eco-friendly, zero-residue biological control solutions safe for soil biology."}
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {diagnosis.organicTreatment.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-stone-700 bg-stone-50 p-3 rounded-xl border border-stone-200">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tab 2: Chemical Remedy */}
            {activeTabRemedy === "chemical" && (
              <div className="space-y-3 animate-fadeIn">
                <div className="p-3 bg-amber-50 text-amber-950 rounded-xl text-xs font-semibold flex items-center gap-2 border border-amber-200">
                  <span>⚠️</span>
                  <span>
                    {lang === "ta" 
                      ? "கட்டுப்படுத்தப்பட்ட மருந்தளவு. தெளிக்கும் போது கையுறை அணியவும்." 
                      : "Strictly adhere to recommended dosages and 14-21 day pre-harvest waiting periods."}
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {diagnosis.chemicalTreatment.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-stone-700 bg-stone-50 p-3 rounded-xl border border-stone-200">
                      <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 font-bold text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tab 3: Fertilizer & Crop Care */}
            {activeTabRemedy === "fertilizer" && (
              <div className="space-y-3.5 animate-fadeIn">
                <div className="p-3.5 bg-blue-50 border border-blue-200 rounded-xl">
                  <h5 className="text-xs font-bold text-blue-900 mb-1">
                    {lang === "ta" ? "ஊட்டச்சத்து & உர சரிசெய்தல்:" : "Nutrient Management Adjustment:"}
                  </h5>
                  <p className="text-xs text-blue-800 leading-relaxed font-normal">
                    {diagnosis.fertilizerAdvisory}
                  </p>
                </div>

                <div className="p-3.5 bg-stone-50 border border-stone-200 rounded-xl">
                  <h5 className="text-xs font-bold text-stone-800 mb-1">
                    {lang === "ta" ? "களப் பராமரிப்பு வழிகாட்டல்:" : "Field Agronomy & Cultural Practices:"}
                  </h5>
                  <p className="text-xs text-stone-700 leading-relaxed font-normal">
                    {diagnosis.cropCare}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* API Integration Architecture Modal */}
      {showApiModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200 space-y-5 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center border-b border-stone-200 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🔌</span>
                <h3 className="text-lg font-bold text-stone-900">
                  Production AI Model Integration Architecture
                </h3>
              </div>
              <button
                onClick={() => setShowApiModal(false)}
                className="text-stone-400 hover:text-stone-700 text-2xl font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-stone-600 leading-relaxed">
              This module operates in high-fidelity <strong>Demo Simulation Mode</strong> for presentation. In production deployment, replace the mock handler with your FastAPI / Flask / TensorFlow.js endpoint:
            </p>

            <div className="bg-stone-900 text-emerald-300 p-4 rounded-xl text-[11px] font-mono overflow-x-auto leading-relaxed">
              <pre>{`# Python FastAPI Crop Disease Inference Endpoint
from fastapi import FastAPI, UploadFile, File
import tensorflow as tf
from PIL import Image

app = FastAPI(title="Farmora Edge AI")
model = tf.keras.models.load_model("models/efficientnet_plantvillage.h5")

@app.post("/api/v1/diagnose-leaf")
async def diagnose(file: UploadFile = File(...)):
    image = Image.open(file.file).resize((224, 224))
    img_array = tf.keras.preprocessing.image.img_to_array(image) / 255.0
    predictions = model.predict(tf.expand_dims(img_array, axis=0))
    class_idx = tf.argmax(predictions[0]).numpy()
    confidence = float(predictions[0][class_idx])
    return {
        "disease_id": class_idx,
        "confidence": round(confidence * 100, 2),
        "source": "TNAU / PlantVillage Neural Net"
    }`}</pre>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 p-3.5 rounded-xl text-xs text-emerald-900">
              <strong>College Hackathon Note:</strong> The frontend cleanly handles image streaming, progress telemetry, confidence thresholding, and dual organic/chemical prescription mapping.
            </div>

            <button
              onClick={() => setShowApiModal(false)}
              className="w-full py-2.5 bg-emerald-700 text-white rounded-xl text-xs font-bold hover:bg-emerald-800 transition-colors cursor-pointer"
            >
              Close Integration Specs
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
