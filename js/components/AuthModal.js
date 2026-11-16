// FARMORA – Farmer Registration & Authentication Modal
function AuthModal({ isOpen, onClose, user, setUser, lang, showToast }) {
  const [authMode, setAuthMode] = React.useState("login"); // 'login' or 'register'
  const [mobileNumber, setMobileNumber] = React.useState(user ? user.mobile : "9842100000");
  const [farmerName, setFarmerName] = React.useState(user ? user.name : "Murugan V");
  const [district, setDistrict] = React.useState(user ? user.district : "Thanjavur");
  const [primaryCrop, setPrimaryCrop] = React.useState(user ? user.primaryCrop : "Paddy (Ponni)");
  const [landSize, setLandSize] = React.useState(user ? user.landSize : 4.5);
  const [otpSent, setOtpSent] = React.useState(false);
  const [enteredOtp, setEnteredOtp] = React.useState("");

  if (!isOpen) return null;

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (!mobileNumber || mobileNumber.length < 10) {
      showToast(lang === "ta" ? "சரியான 10 இலக்க மொபைல் எண்ணை உள்ளிடவும்" : "Enter a valid 10-digit mobile number", "error");
      return;
    }
    setOtpSent(true);
    setEnteredOtp("1234"); // Pre-filled demo OTP for smooth presentation
    showToast(
      lang === "ta" 
        ? "உறுதிப்படுத்தல் OTP எண் 1234 உங்கள் மொபைலுக்கு அனுப்பப்பட்டது (Demo)" 
        : "Verification OTP '1234' sent to mobile (Demo)", 
      "info"
    );
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (enteredOtp !== "1234") {
      showToast(lang === "ta" ? "தவறான OTP எண், 1234 என உள்ளிடவும்" : "Invalid OTP. Use 1234 for demo", "error");
      return;
    }

    const userData = {
      name: farmerName || "Farmer",
      mobile: mobileNumber,
      district: district,
      primaryCrop: primaryCrop,
      landSize: parseFloat(landSize) || 4.5,
      farmerId: "TN-AGRI-" + Math.floor(100000 + Math.random() * 900000)
    };

    setUser(userData);
    localStorage.setItem("farmora_user", JSON.stringify(userData));
    showToast(
      lang === "ta" 
        ? `வெற்றிகரமாக உள்நுழைந்துள்ளீர்கள்! வணக்கம் ${userData.name}` 
        : `Welcome back, ${userData.name}! Logged in successfully.`, 
      "success"
    );
    onClose();
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("farmora_user");
    showToast(lang === "ta" ? "வெளியேறிவிட்டீர்கள்" : "Logged out successfully", "info");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-stone-200 space-y-5">
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b border-stone-100 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl">👨‍🌾</span>
            <div>
              <h3 className="text-base font-extrabold text-stone-900">
                {user 
                  ? (lang === "ta" ? "உழவர் சுயவிவரம்" : "Farmer Profile") 
                  : (authMode === "login" ? (lang === "ta" ? "உழவர் உள்நுழைவு" : "Farmer Login") : (lang === "ta" ? "புதிய விவசாய பதிவு" : "Register Farm"))}
              </h3>
              <p className="text-[11px] text-stone-500">
                {user ? user.farmerId : "Direct Mobile OTP Verification"}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-stone-700 text-xl font-bold cursor-pointer"
          >
            ✕
          </button>
        </div>

        {user ? (
          /* Already Logged In Profile View */
          <div className="space-y-4">
            <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-200 space-y-2 text-xs">
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Mobile:</strong> {user.mobile}</p>
              <p><strong>District:</strong> {user.district}</p>
              <p><strong>Primary Crop:</strong> {user.primaryCrop}</p>
              <p><strong>Farm Area:</strong> {user.landSize} Acres</p>
              <p><strong>Kisan ID:</strong> <span className="font-mono bg-white px-2 py-0.5 rounded border border-emerald-300">{user.farmerId}</span></p>
            </div>

            <button
              onClick={handleLogout}
              className="w-full py-2.5 bg-red-50 text-red-700 hover:bg-red-100 font-bold rounded-xl text-xs transition-colors cursor-pointer border border-red-200"
            >
              {lang === "ta" ? "கணக்கிலிருந்து வெளியேறு" : "Logout from Account"}
            </button>
          </div>
        ) : (
          /* Login / Register Form */
          <div className="space-y-4">
            {/* Tabs for Login vs Register */}
            <div className="flex bg-stone-100 p-1 rounded-xl">
              <button
                type="button"
                onClick={() => { setAuthMode("login"); setOtpSent(false); }}
                className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  authMode === "login" ? "bg-white text-emerald-900 shadow-xs" : "text-stone-600"
                }`}
              >
                {lang === "ta" ? "உள்நுழைவு" : "Quick Login"}
              </button>
              <button
                type="button"
                onClick={() => { setAuthMode("register"); setOtpSent(false); }}
                className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  authMode === "register" ? "bg-white text-emerald-900 shadow-xs" : "text-stone-600"
                }`}
              >
                {lang === "ta" ? "புதிய பதிவு" : "Register Farm"}
              </button>
            </div>

            {!otpSent ? (
              <form onSubmit={handleSendOtp} className="space-y-3.5">
                {authMode === "register" && (
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-stone-700 uppercase">
                      {lang === "ta" ? "உழவர் பெயர்" : "Farmer Full Name"}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Murugan V"
                      value={farmerName}
                      onChange={(e) => setFarmerName(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-xs font-semibold"
                    />
                  </div>
                )}

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-stone-700 uppercase">
                    {lang === "ta" ? "மொபைல் எண் (10 இலக்கங்கள்)" : "Mobile Phone Number"}
                  </label>
                  <div className="flex">
                    <span className="bg-stone-200 border border-stone-300 rounded-l-xl px-3 py-2 text-xs font-bold text-stone-700">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      maxLength="10"
                      placeholder="98421 00000"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-300 rounded-r-xl px-3 py-2 text-xs font-bold text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                {authMode === "register" && (
                  <>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="space-y-1">
                        <label className="text-[11px] font-bold text-stone-700 uppercase">District</label>
                        <select
                          value={district}
                          onChange={(e) => setDistrict(e.target.value)}
                          className="w-full bg-stone-50 border border-stone-300 rounded-xl px-2 py-2 text-xs font-semibold"
                        >
                          <option value="Thanjavur">Thanjavur</option>
                          <option value="Coimbatore">Coimbatore</option>
                          <option value="Madurai">Madurai</option>
                          <option value="Tiruchirappalli">Trichy</option>
                          <option value="Salem">Salem</option>
                        </select>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] font-bold text-stone-700 uppercase">Acreage</label>
                        <input
                          type="number"
                          step="0.5"
                          min="0.5"
                          value={landSize}
                          onChange={(e) => setLandSize(e.target.value)}
                          className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-xs font-semibold"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-stone-700 uppercase">Primary Crop</label>
                      <input
                        type="text"
                        placeholder="e.g. Paddy (Samba Ponni)"
                        value={primaryCrop}
                        onChange={(e) => setPrimaryCrop(e.target.value)}
                        className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-xs font-semibold"
                      />
                    </div>
                  </>
                )}

                <button
                  type="submit"
                  className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl text-xs transition-colors cursor-pointer shadow-md"
                >
                  {lang === "ta" ? "OTP எண் பெறுக" : "Send Verification OTP"}
                </button>
              </form>
            ) : (
              <form onSubmit={handleVerifyOtp} className="space-y-4 animate-fadeIn">
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-950">
                  <p>OTP sent to <strong>+91 {mobileNumber}</strong></p>
                  <p className="text-[10px] text-emerald-700 mt-0.5">Use demo code: <strong>1234</strong></p>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-stone-700 uppercase">
                    Enter 4-Digit OTP
                  </label>
                  <input
                    type="text"
                    required
                    maxLength="4"
                    value={enteredOtp}
                    onChange={(e) => setEnteredOtp(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2.5 text-center text-lg font-black tracking-widest text-emerald-950 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl text-xs transition-colors cursor-pointer shadow-md"
                >
                  {lang === "ta" ? "உள்நுழைவை உறுதி செய்" : "Verify & Access Dashboard"}
                </button>

                <button
                  type="button"
                  onClick={() => setOtpSent(false)}
                  className="w-full text-center text-xs text-stone-500 hover:text-stone-800"
                >
                  ← Change Mobile Number
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
