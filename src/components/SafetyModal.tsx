import { motion, AnimatePresence } from "motion/react";
import { X, ShieldAlert, Scale, Train, Wifi, Phone, CloudRain } from "lucide-react";
import { SAFETY_TIPS } from "../data";

interface SafetyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SafetyModal({ isOpen, onClose }: SafetyModalProps) {
  // Map string to actual Lucide Icon
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldAlert":
        return <ShieldAlert className="w-6 h-6 text-singapore-red" />;
      case "Scale":
        return <Scale className="w-6 h-6 text-singapore-red" />;
      case "Train":
        return <Train className="w-6 h-6 text-singapore-red" />;
      case "Wifi":
        return <Wifi className="w-6 h-6 text-singapore-red" />;
      case "PhoneCall":
        return <Phone className="w-6 h-6 text-singapore-red" />;
      case "CloudRain":
        return <CloudRain className="w-6 h-6 text-singapore-red" />;
      default:
        return <ShieldAlert className="w-6 h-6 text-singapore-red" />;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="safety-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-4xl max-h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10 border border-cloud"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-5 border-b border-cloud bg-stone-50">
              <div>
                <span className="font-label-md text-xs text-singapore-red uppercase tracking-widest font-semibold block mb-1">
                  Travel Essential
                </span>
                <h3 className="font-heading text-2xl font-bold text-onyx tracking-tight">
                  Singapore Safety &amp; Transit Guide
                </h3>
              </div>
              <button
                id="close-safety-modal"
                onClick={onClose}
                className="p-2 text-slate hover:text-singapore-red hover:bg-cloud rounded-full transition-all"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content (Scrollable) */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-white space-y-8">
              <div className="p-4 bg-red-50/60 rounded-xl border border-red-100 flex gap-3 items-start">
                <ShieldAlert className="w-5 h-5 text-singapore-red shrink-0 mt-0.5" />
                <p className="text-sm text-amber-950 font-medium leading-relaxed">
                  <strong>First-time in Singapore?</strong> The country is legendary for cleanliness and low crime. However, rules are strict. Learn about the crucial regulations and public transport tips below to enjoy a seamless trip.
                </p>
              </div>

              {/* Bento-like Grid of tips */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {SAFETY_TIPS.map((tip, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="p-5 rounded-xl border border-cloud bg-stone-50/50 hover:bg-stone-50 hover:border-singapore-red/30 transition-all flex gap-4"
                  >
                    <div className="p-3 bg-white rounded-xl shadow-sm border border-cloud shrink-0 flex items-center justify-center h-12 w-12">
                      {getIcon(tip.icon)}
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate uppercase tracking-wider block mb-1">
                        {tip.category}
                      </span>
                      <h4 className="font-heading text-lg font-bold text-onyx mb-1.5 leading-snug">
                        {tip.title}
                      </h4>
                      <p className="text-sm text-slate leading-relaxed">
                        {tip.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-stone-50 border-t border-cloud flex justify-between items-center">
              <p className="text-xs text-slate font-medium">
                Keep this guide saved offline for handy access.
              </p>
              <button
                onClick={onClose}
                className="bg-singapore-red hover:opacity-95 text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-all"
              >
                Got it, thanks!
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
