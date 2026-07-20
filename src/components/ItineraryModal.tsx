import { motion, AnimatePresence } from "motion/react";
import { X, MapPin, Clock, CircleDollarSign, Compass, Lightbulb, Check } from "lucide-react";
import { Activity } from "../types";

interface ItineraryModalProps {
  activity: Activity | null;
  onClose: () => void;
  isCompleted: boolean;
  onToggleCompleted: () => void;
}

export default function ItineraryModal({
  activity,
  onClose,
  isCompleted,
  onToggleCompleted,
}: ItineraryModalProps) {
  if (!activity) return null;

  // Render mock specific metadata based on the activity title
  const getExtendedTips = (title: string) => {
    switch (title) {
      case "Chinatown & Heritage":
        return {
          mrt: "Chinatown MRT Station (NE4 / DT19), Exit A",
          time: "Best from 10:00 AM to 4:00 PM (Museum and temples are fully open).",
          cost: "Free to wander. Chinatown Heritage Centre is SGD $15 (optional).",
          soloTip: "Grab a single seat at the legendary Hawker Chan (Cheapest Michelin Star meal) or Maxwell Food Centre for Hainanese Chicken Rice.",
          highlights: ["Chinatown Heritage Centre", "Buddha Tooth Relic Temple", "Maxwell Food Centre", "Colorful Shophouses"]
        };
      case "Little India & Kampong Gelam":
        return {
          mrt: "Little India MRT (NE7 / DT12) or Bugis MRT (EW12 / DT14)",
          time: "10:30 AM to late afternoon. Shophouses and cafes peak around 2 PM.",
          cost: "Free access. Temples and mosque entry is free (dress conservatively).",
          soloTip: "Walk along Haji Lane for incredible murals. Great cafes here with single bar-stools perfect for reading or planning.",
          highlights: ["Sri Veeramakaliamman Temple", "Haji Lane Murals", "Sultan Mosque", "Tekka Centre Biryani"]
        };
      case "National Gallery & Museum Hopping":
        return {
          mrt: "City Hall MRT (NS25 / EW13), Exit B",
          time: "10:00 AM to 7:00 PM. Weekdays are much quieter and peaceful.",
          cost: "Free for Singaporeans/PRs; General Admission is SGD $20 for tourists.",
          soloTip: "Head to the Coleman Rooftop Garden on the 5th floor. It has a gorgeous public garden with stunning panoramic skyline views that's perfectly quiet.",
          highlights: ["Southeast Asian Art Galleries", "Supreme Court Terrace", "Coleman Rooftop Garden", "Interactive Art Labs"]
        };
      case "City Skyline":
        return {
          mrt: "Raffles Place MRT (NS26 / EW14) or Bayfront MRT (CE1 / DT16)",
          time: "6:00 PM to 8:30 PM (Catch the sunset and the skyline turning on).",
          cost: "Free waterfront boardwalk. MBS SkyPark observation deck is SGD $26.",
          soloTip: "Walk the entire Marina Bay Loop (3.5km). It's incredibly safe, beautifully lit, and full of other solo runners and walkers.",
          highlights: ["Merlion Park", "Helix Bridge", "Marina Bay Sands Promenade", "Rooftop Bars"]
        };
      case "Garden Wonders":
        return {
          mrt: "Bayfront MRT Station (CE1 / DT16), Exit B",
          time: "Best from 5:00 PM to 8:30 PM (Catch the cooling evening and the light show).",
          cost: "Gardens are free. Cooled Conservatories (Cloud Forest & Flower Dome) are SGD $28.",
          soloTip: "The Supertree Light Show 'Garden Rhapsody' is at 7:45 PM and 8:45 PM. Lie down flat on the concrete circles directly under the trees for the ultimate perspective!",
          highlights: ["Cloud Forest Waterfall", "Flower Dome", "Supertree Grove", "Dragonfly Lake"]
        };
      case "Global Rhythms":
        return {
          mrt: "Clarke Quay MRT (NE5), Exit C",
          time: "9:00 PM onwards. Club entries peak around 11:30 PM.",
          cost: "Varies. Club cover charges typically include 1-2 drinks ($30 - $50).",
          soloTip: "Singapore's nightlife is exceptionally friendly and safe for solo travellers. Try out hostel pub crawls or bar seating at speakeasies like '28 HongKong Street' to meet folks.",
          highlights: ["Clarke Quay Waterfront", "Zouk Club", "Speakeasy Cocktail Bars", "Live Music Lounges"]
        };
      case "Bespoke Dining":
        return {
          mrt: "Raffles Place MRT or Tanjong Pagar MRT",
          time: "7:00 PM to 10:00 PM (Requires dinner reservations).",
          cost: "SGD $100 - $300 per person.",
          soloTip: "Ask for 'Counter Seating' or 'Bar Dining'. Chefs love interacting with solo diners and you often get a front-row view of the culinary magic.",
          highlights: ["Michelin Dining", "Omakase Experiences", "Artisanal Pairings", "Chef's Table Views"]
        };
      case "Chinese Garden & Jurong Lake":
        return {
          mrt: "Lakeside MRT (EW26) or Chinese Garden MRT (EW25)",
          time: "7:00 AM to 11:00 AM (Coolest part of the day, perfect for quiet strolls).",
          cost: "Free admission to both Jurong Lake Gardens and Chinese Garden.",
          soloTip: "Bring a light travel tripod. The wooden boardwalks and water reflections are world-class spots for solo portraits and landscape photography.",
          highlights: ["Chinese Garden Pagoda", "Floating Boardwalks", "ActiveSG Park", "Grasslands & Wildlife"]
        };
      case "Pulau Ubin Exploration":
        return {
          mrt: "Take MRT to Tampines (EW2), then Bus 29 to Changi Point Ferry Terminal. Take a bumboat (SGD $4) to Pulau Ubin.",
          time: "8:00 AM to 2:00 PM. Go early to beat the equatorial heat.",
          cost: "Bumboat is SGD $4 cash each way. Bike rentals on the island are SGD $10-$15.",
          soloTip: "Make sure you have CASH for bumbboats and local food. Bicycle shops are right by the jetty. Check the brakes and gears before setting off!",
          highlights: ["Chek Jawa Wetlands", "Rustic Kampung Houses", "Sensory Trail", "Scenic Quarry Viewpoints"]
        };
      default:
        return {
          mrt: "Bayfront MRT (CE1/DT16) or Central Bus Routes",
          time: "Flexible. Check local operational timings.",
          cost: "Generally free or low-cost.",
          soloTip: "Use the SG Active wallet or tap-and-pay for effortless access. Wear comfortable walking shoes.",
          highlights: ["Scenic Walks", "Local Food", "Cultural Spotlights"]
        };
    }
  };

  const tips = getExtendedTips(activity.title);

  return (
    <AnimatePresence>
      <div id="itinerary-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10 border border-cloud max-h-[90vh]"
        >
          {/* Header Image Background with Title */}
          <div className="h-48 sm:h-56 relative shrink-0">
            <img
              alt={activity.title}
              className="w-full h-full object-cover"
              src={activity.image}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            
            {/* Title / Close Overlay */}
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <span className="text-xs bg-singapore-red text-white font-bold px-2.5 py-1 rounded-md uppercase tracking-wider block w-fit mb-2">
                {activity.day || "Spot"} • {activity.tag || "Tips"}
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold leading-tight">
                {activity.title}
              </h3>
            </div>

            <button
              id="close-itinerary-modal"
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full transition-all"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content (Scrollable) */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            <p className="font-sans text-sm sm:text-base text-slate leading-relaxed">
              {activity.description}
            </p>

            {/* Checklist items */}
            <div className="bg-stone-50 border border-cloud p-4 rounded-xl flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-onyx">My Adventure Tracker</h4>
                <p className="text-xs text-slate">Check this off if you've explored or planned to visit this spot!</p>
              </div>
              <button
                onClick={onToggleCompleted}
                className={`px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  isCompleted
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "bg-white border border-cloud text-slate hover:border-emerald-300 hover:text-emerald-600"
                }`}
              >
                {isCompleted ? (
                  <>
                    <Check className="w-3.5 h-3.5" /> Added / Explored
                  </>
                ) : (
                  "Add to my plan"
                )}
              </button>
            </div>

            {/* Structured Advice Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-cloud flex gap-3">
                <MapPin className="w-5 h-5 text-singapore-red shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold text-slate uppercase tracking-wider">How to Get There</h5>
                  <p className="text-xs font-medium text-onyx mt-1 leading-relaxed">{tips.mrt}</p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-cloud flex gap-3">
                <Clock className="w-5 h-5 text-singapore-red shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold text-slate uppercase tracking-wider">Optimal Timing</h5>
                  <p className="text-xs font-medium text-onyx mt-1 leading-relaxed">{tips.time}</p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-cloud flex gap-3">
                <CircleDollarSign className="w-5 h-5 text-singapore-red shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold text-slate uppercase tracking-wider">Estimated Cost</h5>
                  <p className="text-xs font-medium text-onyx mt-1 leading-relaxed">{tips.cost}</p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-cloud flex gap-3">
                <Compass className="w-5 h-5 text-singapore-red shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold text-slate uppercase tracking-wider">Key Highlights</h5>
                  <ul className="text-xs font-medium text-onyx mt-1 list-disc pl-4 space-y-0.5">
                    {tips.highlights.map((h, i) => <li key={i}>{h}</li>)}
                  </ul>
                </div>
              </div>
            </div>

            {/* Pro Solo Hack */}
            <div className="p-4 rounded-xl bg-red-50/50 border border-red-100 flex gap-3">
              <Lightbulb className="w-5 h-5 text-singapore-red shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-bold text-red-900 uppercase tracking-wider">Pro Solo Hack</h5>
                <p className="text-xs text-amber-950 mt-1 leading-relaxed font-medium">
                  {tips.soloTip}
                </p>
              </div>
            </div>
          </div>

          {/* Footer controls */}
          <div className="p-4 bg-stone-50 border-t border-cloud flex justify-end">
            <button
              onClick={onClose}
              className="bg-onyx hover:bg-singapore-red text-white text-xs font-bold px-4 py-2 rounded-lg transition-all"
            >
              Done Reading
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
