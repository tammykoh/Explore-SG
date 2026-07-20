import { motion, AnimatePresence } from "motion/react";
import { X, Smartphone, Download, Map, Compass, Radio } from "lucide-react";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div id="download-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden z-10 border border-cloud"
          >
            {/* Top Close Button */}
            <button
              id="close-download-modal"
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-slate hover:text-singapore-red hover:bg-cloud rounded-full transition-all z-20"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header / Graphic */}
            <div className="bg-gradient-to-br from-singapore-red to-[#C80D1D] p-8 text-white text-center relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full" />
              
              <Smartphone className="w-12 h-12 mx-auto mb-4 animate-bounce" />
              <h3 className="font-heading text-2xl font-bold tracking-tight mb-2">
                Download Explore SG App
              </h3>
              <p className="text-sm text-white/80 max-w-sm mx-auto leading-relaxed">
                Take the ultimate Singapore travel companion with you. Works offline, keeps you safe, and coordinates transit.
              </p>
            </div>

            {/* App Features List */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-singapore-red shrink-0">
                    <Map className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-onyx text-sm sm:text-base">Offline Vector Maps</h4>
                    <p className="text-xs sm:text-sm text-slate">Navigate the MRT and narrow heritage lanes without internet.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-singapore-red shrink-0">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-onyx text-sm sm:text-base">Smart Companion Safety SOS</h4>
                    <p className="text-xs sm:text-sm text-slate">Instant access to local emergency contacts and safe-travel hubs.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-singapore-red shrink-0">
                    <Radio className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-onyx text-sm sm:text-base">Live Community Alerts</h4>
                    <p className="text-xs sm:text-sm text-slate">Get real-time crowd alerts for hawker centers and popular spots.</p>
                  </div>
                </div>
              </div>

              {/* QR Code Placeholder / Simulated Action */}
              <div className="p-4 bg-stone-50 border border-cloud rounded-xl flex items-center gap-5">
                <div className="w-24 h-24 bg-white border border-cloud rounded-lg p-2 flex items-center justify-center shrink-0">
                  {/* Styled QR Code Simulation */}
                  <div className="grid grid-cols-4 gap-1 w-full h-full opacity-80">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div
                        key={i}
                        className={`rounded-sm ${(i * 7 + 13) % 3 === 0 || (i % 5 === 0) ? "bg-onyx" : "bg-transparent"}`}
                        style={{
                          gridColumn: i === 0 || i === 3 || i === 12 ? "span 2" : "auto",
                          gridRow: i === 0 || i === 3 || i === 12 ? "span 2" : "auto"
                        }}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-1">Quick Scan</p>
                  <p className="text-xs sm:text-sm text-onyx font-medium leading-tight mb-2">Scan with your smartphone camera to download instantly</p>
                  <div className="flex gap-2">
                    <span className="text-[10px] bg-onyx text-white px-2 py-0.5 rounded-full font-medium">iOS App Store</span>
                    <span className="text-[10px] bg-onyx text-white px-2 py-0.5 rounded-full font-medium">Google Play</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => {
                  alert("Simulating app download! In a production app, this would redirect to Apple App Store or Google Play Store.");
                  onClose();
                }}
                className="w-full bg-singapore-red hover:opacity-95 text-white font-bold py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" /> Direct Download (.apk / .ipa)
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
