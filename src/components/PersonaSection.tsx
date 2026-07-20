import { motion } from "motion/react";
import { Heart, CheckCircle2, MapPin, ExternalLink, Sparkles, Bike, Eye } from "lucide-react";
import { PERSONAS } from "../data";
import { Persona, Activity } from "../types";

interface PersonaSectionProps {
  favorites: string[];
  onToggleFavorite: (title: string) => void;
  completed: string[];
  onToggleCompleted: (title: string) => void;
  onViewItinerary: (activity: Activity) => void;
}

export default function PersonaSection({
  favorites,
  onToggleFavorite,
  completed,
  onToggleCompleted,
  onViewItinerary,
}: PersonaSectionProps) {
  
  // Custom styling helper to check states
  const isFav = (title: string) => favorites.includes(title);
  const isDone = (title: string) => completed.includes(title);

  return (
    <div id="personas-itineraries-container" className="space-y-24">
      
      {/* 1. Cultural Explorer: Emma */}
      <section id="persona-emma" className="bg-cloud/50 py-20 px-4 sm:px-8 md:px-16 border-y border-cloud">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <span className="font-sans text-xs font-semibold text-singapore-red uppercase tracking-widest block mb-2">
                Persona Profile
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-onyx tracking-tight">
                The Cultural Explorer: Emma
              </h2>
              <p className="font-sans text-base sm:text-lg text-slate mt-3 max-w-2xl leading-relaxed">
                Emma seeks deep cultural immersion, hidden heritage gems, and authentic local stories in the heart of the city.
              </p>
            </div>
            
            {/* Quick stats for Emma */}
            <div className="bg-white px-4 py-2.5 rounded-xl border border-cloud shadow-xs text-xs font-semibold text-slate flex gap-4">
              <span>Duration: <strong className="text-onyx">3 Days</strong></span>
              <span>Focus: <strong className="text-singapore-red">Heritage</strong></span>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {/* Day 1 (Chinatown) - 6 span */}
            <div id="emma-day1" className="col-span-12 md:col-span-6 bg-white rounded-2xl border border-cloud overflow-hidden group hover:shadow-md hover:border-singapore-red/20 transition-all flex flex-col h-full">
              <div className="h-64 sm:h-72 overflow-hidden relative">
                <img
                  alt="Chinatown exploration"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida/AP1WRLuv49eh7rtCwTQKAx53ahgHuKNzMTfxkaPkdGb5SBsm9hoLDzVMUflGIQUZqncqQPMQJ05YzbE19gP7uSMOTi6Cod1f12Pn_22ntrCmVX6DA-tfW5WFN79IT0avh_s5mmioQRF267tnlkMdYsel-IhwgvRM8YWJMPxFef1f98U1-umHkAQpOiPfN-OQ-FnNXPQpeQwrSIt-nk-oBb2eYIJO8yUh2rn5cw9Q-4zloaLqcsrNXtXejT0-T78"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <button
                    onClick={() => onToggleFavorite("Chinatown & Heritage")}
                    className={`p-2.5 rounded-full shadow-md backdrop-blur-md transition-all border ${
                      isFav("Chinatown & Heritage")
                        ? "bg-singapore-red text-white border-singapore-red"
                        : "bg-white/90 text-onyx border-cloud hover:text-singapore-red"
                    }`}
                    title={isFav("Chinatown & Heritage") ? "Remove from favorites" : "Save to favorites"}
                  >
                    <Heart className={`w-4 h-4 ${isFav("Chinatown & Heritage") ? "fill-current" : ""}`} />
                  </button>
                  <button
                    onClick={() => onToggleCompleted("Chinatown & Heritage")}
                    className={`p-2.5 rounded-full shadow-md backdrop-blur-md transition-all border ${
                      isDone("Chinatown & Heritage")
                        ? "bg-emerald-600 text-white border-emerald-600"
                        : "bg-white/90 text-onyx border-cloud hover:text-emerald-600"
                    }`}
                    title={isDone("Chinatown & Heritage") ? "Mark unvisited" : "Mark as visited"}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-cloud text-slate text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Day 1
                    </span>
                    <span className="text-xs font-bold text-singapore-red uppercase tracking-wide flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" /> Heritage Heart
                    </span>
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-onyx mb-3">
                    Chinatown &amp; Heritage
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-slate leading-relaxed mb-6">
                    Dive into the rich history of the early settlers at the Chinatown Heritage Centre before exploring the colorful shophouses.
                  </p>
                </div>

                <div className="flex justify-between items-center border-t border-cloud pt-4 mt-auto">
                  <span className="text-xs font-semibold text-slate flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-singapore-red" /> Chinatown MRT (NE4/DT19)
                  </span>
                  <button
                    onClick={() => onViewItinerary(PERSONAS[0].activities[0])}
                    className="text-xs font-bold text-singapore-red hover:underline flex items-center gap-1.5 cursor-pointer"
                  >
                    <Eye className="w-4 h-4" /> View Tips
                  </button>
                </div>
              </div>
            </div>

            {/* Day 2 (Little India) - 6 span */}
            <div id="emma-day2" className="col-span-12 md:col-span-6 bg-white rounded-2xl border border-cloud overflow-hidden group hover:shadow-md hover:border-singapore-red/20 transition-all flex flex-col h-full">
              <div className="h-64 sm:h-72 overflow-hidden relative">
                <img
                  alt="Little India sights"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida/AP1WRLu-YqTb9IU2b8PAfOJOmwFLYfV8M5J2K3qcz_E-zvd5zZxE-c_-uZWXq35slRPiNmsIZfBs_9Ow-2L5ECT4U8jAbn_6YjCjf0YM3gwWwforOnGmj7SvkJ7qD38sYSEY096LFtFmusNYM0IOGNOUdxB9A9uytNjq5qswCMEeS46XgZvGdj0mwg-7b7a1O4RfErmL6FdhoacIx-K0gvZVAdbRTktKI4TWvdrCOaLQYeAo20PQ62YDoLT8PVw"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <button
                    onClick={() => onToggleFavorite("Little India & Kampong Gelam")}
                    className={`p-2.5 rounded-full shadow-md backdrop-blur-md transition-all border ${
                      isFav("Little India & Kampong Gelam")
                        ? "bg-singapore-red text-white border-singapore-red"
                        : "bg-white/90 text-onyx border-cloud hover:text-singapore-red"
                    }`}
                    title={isFav("Little India & Kampong Gelam") ? "Remove from favorites" : "Save to favorites"}
                  >
                    <Heart className={`w-4 h-4 ${isFav("Little India & Kampong Gelam") ? "fill-current" : ""}`} />
                  </button>
                  <button
                    onClick={() => onToggleCompleted("Little India & Kampong Gelam")}
                    className={`p-2.5 rounded-full shadow-md backdrop-blur-md transition-all border ${
                      isDone("Little India & Kampong Gelam")
                        ? "bg-emerald-600 text-white border-emerald-600"
                        : "bg-white/90 text-onyx border-cloud hover:text-emerald-600"
                    }`}
                    title={isDone("Little India & Kampong Gelam") ? "Mark unvisited" : "Mark as visited"}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-cloud text-slate text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Day 2
                    </span>
                    <span className="text-xs font-bold text-singapore-red uppercase tracking-wide flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" /> Sensory Journey
                    </span>
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-onyx mb-3">
                    Little India &amp; Kampong Gelam
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-slate leading-relaxed mb-6">
                    A vibrant morning in Little India followed by an afternoon of street art and indie boutiques in the historic Kampong Gelam district.
                  </p>
                </div>

                <div className="flex justify-between items-center border-t border-cloud pt-4 mt-auto">
                  <span className="text-xs font-semibold text-slate flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-singapore-red" /> Bugis MRT (EW12/DT14)
                  </span>
                  <button
                    onClick={() => onViewItinerary(PERSONAS[0].activities[1])}
                    className="text-xs font-bold text-singapore-red hover:underline flex items-center gap-1.5 cursor-pointer"
                  >
                    <Eye className="w-4 h-4" /> View Tips
                  </button>
                </div>
              </div>
            </div>

            {/* Day 3 Highlight - 12 span (Flex layout row) */}
            <div id="emma-day3" className="col-span-12 bg-white rounded-2xl border border-cloud overflow-hidden flex flex-col lg:flex-row hover:shadow-md hover:border-singapore-red/20 transition-all">
              <div className="lg:w-1/2 h-80 lg:h-auto overflow-hidden relative">
                <img
                  alt="Museum visits"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida/AP1WRLuNg6YIK5N2qHTkZsRw5nqgTAJvf4iZ4wZla4SNolbfUzadpNodjRR4A8TNm6jQQpwobJku7Gxb2TnjyUa4EZXLxSb40C-SnqWOehz1jo4OLZasS6kfYn1WpLEzkairee4UK0OwF0MAUmcWfVmpu4c51p3cBuGBfjvZfjXFs_0_AvAz7TR4Mpv5wgUVMS5grQzeckRy0Z3QeTKclEpEw7iKWo58SCWUQAjM7WOYJdpK2BZbXw-nzHUuEQY"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <button
                    onClick={() => onToggleFavorite("National Gallery & Museum Hopping")}
                    className={`p-2.5 rounded-full shadow-md backdrop-blur-md transition-all border ${
                      isFav("National Gallery & Museum Hopping")
                        ? "bg-singapore-red text-white border-singapore-red"
                        : "bg-white/90 text-onyx border-cloud hover:text-singapore-red"
                    }`}
                    title={isFav("National Gallery & Museum Hopping") ? "Remove from favorites" : "Save to favorites"}
                  >
                    <Heart className={`w-4 h-4 ${isFav("National Gallery & Museum Hopping") ? "fill-current" : ""}`} />
                  </button>
                  <button
                    onClick={() => onToggleCompleted("National Gallery & Museum Hopping")}
                    className={`p-2.5 rounded-full shadow-md backdrop-blur-md transition-all border ${
                      isDone("National Gallery & Museum Hopping")
                        ? "bg-emerald-600 text-white border-emerald-600"
                        : "bg-white/90 text-onyx border-cloud hover:text-emerald-600"
                    }`}
                    title={isDone("National Gallery & Museum Hopping") ? "Mark unvisited" : "Mark as visited"}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="lg:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-cloud text-slate text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Day 3
                  </span>
                  <span className="text-xs font-bold text-singapore-red uppercase tracking-wide flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> Artistic Soul
                  </span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-onyx mb-4 tracking-tight">
                  National Gallery &amp; Museum Hopping
                </h3>
                <p className="font-sans text-sm sm:text-base text-slate mb-8 leading-relaxed">
                  Spend a contemplative day at the world's largest public collection of Singapore and Southeast Asian modern art. Perfect for a memorable afternoon of cultural exploration, cooling air conditioning, and peaceful inspiration.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center border-t border-cloud pt-6 mt-2">
                  <span className="text-xs font-semibold text-slate flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-singapore-red" /> City Hall MRT (NS25/EW13)
                  </span>
                  <button
                    onClick={() => onViewItinerary(PERSONAS[0].activities[2])}
                    className="w-full sm:w-auto bg-singapore-red/10 text-singapore-red hover:bg-singapore-red hover:text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Eye className="w-4 h-4" /> View Full Itinerary &amp; Tips
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Bleisure Professional: Brandon */}
      <section id="persona-brandon" className="py-12 px-4 sm:px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <span className="font-sans text-xs font-semibold text-singapore-red uppercase tracking-widest block mb-2">
                Persona Profile
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-onyx tracking-tight">
                The Bleisure Professional: Brandon
              </h2>
              <p className="font-sans text-base sm:text-lg text-slate mt-3 max-w-2xl leading-relaxed">
                Maximizing efficiency and relaxation between meetings, Brandon looks for premium experiences and iconic city views.
              </p>
            </div>
            
            <div className="bg-stone-100 px-4 py-2.5 rounded-xl border border-cloud shadow-xs text-xs font-semibold text-slate flex gap-4">
              <span>Timeframe: <strong className="text-onyx">Evening-Focused</strong></span>
              <span>Style: <strong className="text-singapore-red">Premium</strong></span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PERSONAS[1].activities.map((activity, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-cloud overflow-hidden group hover:shadow-md hover:border-singapore-red/20 transition-all flex flex-col"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    src={activity.image}
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Action Buttons */}
                  <div className="absolute top-3 right-3 flex gap-1.5">
                    <button
                      onClick={() => onToggleFavorite(activity.title)}
                      className={`p-2 rounded-full shadow-md backdrop-blur-md transition-all border ${
                        isFav(activity.title)
                          ? "bg-singapore-red text-white border-singapore-red"
                          : "bg-white/90 text-onyx border-cloud hover:text-singapore-red"
                      }`}
                    >
                      <Heart className={`w-3.5 h-3.5 ${isFav(activity.title) ? "fill-current" : ""}`} />
                    </button>
                    <button
                      onClick={() => onToggleCompleted(activity.title)}
                      className={`p-2 rounded-full shadow-md backdrop-blur-md transition-all border ${
                        isDone(activity.title)
                          ? "bg-emerald-600 text-white border-emerald-600"
                          : "bg-white/90 text-onyx border-cloud hover:text-emerald-600"
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="font-sans text-xs font-bold text-slate block mb-1">
                      {activity.day}
                    </span>
                    <h4 className="font-heading text-lg font-bold text-onyx group-hover:text-singapore-red transition-colors">
                      {activity.title}
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-slate mt-2 leading-relaxed">
                      {activity.description}
                    </p>
                  </div>

                  <button
                    onClick={() => onViewItinerary(activity)}
                    className="mt-4 pt-3 border-t border-cloud w-full text-left text-xs font-bold text-slate hover:text-singapore-red flex items-center justify-between cursor-pointer"
                  >
                    <span>View Quick Tip</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Adventurous Voyager: Victor */}
      <section id="persona-victor" className="bg-onyx text-white py-20 px-4 sm:px-8 md:px-16 rounded-3xl relative overflow-hidden">
        {/* Decorative background radial gradient */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-singapore-red/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Left Col: Info and Custom items */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div>
                <span className="font-sans text-xs font-semibold text-singapore-red uppercase tracking-widest block mb-2">
                  Persona Profile
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  The Adventurous Voyager: Victor
                </h2>
                <p className="font-sans text-base sm:text-lg text-stone-300 mt-4 leading-relaxed">
                  Victor is on a quest for the unconventional. He seeks the island's hidden nature trails, adrenaline-pumping activities, and the serenity of architectural masterpieces reflected in still waters.
                </p>
              </div>

              {/* Bento Items for Victor */}
              <div className="space-y-4">
                <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:border-singapore-red/30 transition-all relative group">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="p-2 bg-singapore-red/15 rounded-lg text-singapore-red">
                        <Sparkles className="w-5 h-5" />
                      </span>
                      <h4 className="font-heading text-lg font-bold text-white">Nature &amp; Serenity</h4>
                    </div>
                    
                    {/* Activity toggles */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => onToggleFavorite("Chinese Garden & Jurong Lake")}
                        className={`p-1.5 rounded-full border transition-all ${
                          isFav("Chinese Garden & Jurong Lake")
                            ? "bg-singapore-red text-white border-singapore-red"
                            : "bg-white/5 text-stone-300 border-white/10 hover:text-singapore-red"
                        }`}
                      >
                        <Heart className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => onToggleCompleted("Chinese Garden & Jurong Lake")}
                        className={`p-1.5 rounded-full border transition-all ${
                          isDone("Chinese Garden & Jurong Lake")
                            ? "bg-emerald-600 text-white border-emerald-600"
                            : "bg-white/5 text-stone-300 border-white/10 hover:text-emerald-400"
                        }`}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                  <p className="font-sans text-sm text-stone-300 pl-10">
                    Spending Day 1 at the Chinese Garden and Jurong Lake Gardens for unmatched tranquillity.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:border-singapore-red/30 transition-all relative group">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="p-2 bg-singapore-red/15 rounded-lg text-singapore-red">
                        <Bike className="w-5 h-5" />
                      </span>
                      <h4 className="font-heading text-lg font-bold text-white">Island Biking</h4>
                    </div>
                    
                    <div className="flex gap-2">
                      <button
                        onClick={() => onToggleFavorite("Pulau Ubin Exploration")}
                        className={`p-1.5 rounded-full border transition-all ${
                          isFav("Pulau Ubin Exploration")
                            ? "bg-singapore-red text-white border-singapore-red"
                            : "bg-white/5 text-stone-300 border-white/10 hover:text-singapore-red"
                        }`}
                      >
                        <Heart className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => onToggleCompleted("Pulau Ubin Exploration")}
                        className={`p-1.5 rounded-full border transition-all ${
                          isDone("Pulau Ubin Exploration")
                            ? "bg-emerald-600 text-white border-emerald-600"
                            : "bg-white/5 text-stone-300 border-white/10 hover:text-emerald-400"
                        }`}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                  <p className="font-sans text-sm text-stone-300 pl-10">
                    Exploring Pulau Ubin on two wheels for a glimpse of old-world Singapore charm and nature trails.
                  </p>
                </div>
              </div>

              {/* Explore Trek Action */}
              <div className="pt-4">
                <button
                  onClick={() => onViewItinerary(PERSONAS[2].activities[0])}
                  className="bg-white text-onyx hover:bg-singapore-red hover:text-white px-8 py-4 font-bold text-sm rounded-xl transition-all shadow-lg flex items-center gap-2 cursor-pointer"
                >
                  Explore Victor's Trek <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Col: Graphic and big Quote */}
            <div className="w-full lg:w-1/2">
              <div className="relative p-3 bg-white/5 border border-white/10 rounded-3xl">
                <img
                  alt="Victor's journey"
                  className="w-full h-80 sm:h-[420px] object-cover rounded-2xl shadow-2xl"
                  src="https://lh3.googleusercontent.com/aida/AP1WRLu7h1P3TXF7edl7oFoLBeRseldesj_AFRY1qwEg43-PZtzk7trWlbCMOryhxwgMNlCaST1ZqbdfFccs7Od_QYWdyh6Sps2Aja1NlX_jCupWT7p0BuK4IVOrimuFvDL4BxgYyYeNYJBwowegii4Jsxcbz-HszLo-AVJkYXcknkcTTMDIBD2lopOLFSgaSvqOIK4ukF0kFytJfHKS4bRCLBRotajYffsjxnNhmt8gah4vfVWVpqTjgOJCIMo"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -left-6 bg-singapore-red p-6 rounded-2xl shadow-xl max-w-xs hidden sm:block">
                  <p className="font-heading text-lg font-bold text-white italic leading-tight">
                    "Singapore's nature surprised me."
                  </p>
                  <span className="text-[10px] text-white/80 uppercase font-bold tracking-wider block mt-1">
                    - Victor, Adventurous Voyager
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
