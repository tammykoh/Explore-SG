import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, Send, User, MapPin, Tag, Heart } from "lucide-react";

interface CommunityTip {
  id: string;
  author: string;
  country: string;
  style: "Cultural" | "Adventure" | "Bleisure" | "General";
  content: string;
  date: string;
  likes: number;
}

export default function CommunityBoard() {
  const [tips, setTips] = useState<CommunityTip[]>([
    {
      id: "1",
      author: "Clara",
      country: "Germany",
      style: "Cultural",
      content: "Just found out that Lau Pa Sat serves the best Satay after 7 PM when they close the entire street! Extremely safe and highly recommend for single diners since you can just grab a seat anywhere.",
      date: "2 hours ago",
      likes: 24
    },
    {
      id: "2",
      author: "Raj",
      country: "India",
      style: "Adventure",
      content: "If you're visiting Gardens by the Bay, go around 7:15 PM and secure a spot on the grass under the Supertrees. The light show (Garden Rhapsody) starts at 7:45 PM and it is absolutely mind-blowing!",
      date: "5 hours ago",
      likes: 42
    },
    {
      id: "3",
      author: "Liam",
      country: "United Kingdom",
      style: "Bleisure",
      content: "For business travelers who want a quick workout with stunning sights: rent a shared bicycle near Marina Bay Sands at 6 AM. The cycle loop around the bay takes only 25 minutes and is super peaceful.",
      date: "1 day ago",
      likes: 18
    },
    {
      id: "4",
      author: "Aiko",
      country: "Japan",
      style: "Cultural",
      content: "Do not miss the view from the rooftop garden at the National Gallery! It's completely free to access and offers some of the cleanest, most symmetrical viewpoints of the Padang and Marina Bay.",
      date: "2 days ago",
      likes: 31
    }
  ]);

  const [activeTab, setActiveTab] = useState<"All" | "Cultural" | "Adventure" | "Bleisure">("All");
  
  // Form State
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [style, setStyle] = useState<"Cultural" | "Adventure" | "Bleisure" | "General">("General");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleLike = (id: string) => {
    setTips(prev => prev.map(tip => tip.id === id ? { ...tip, likes: tip.likes + 1 } : tip));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !content) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newTip: CommunityTip = {
        id: Date.now().toString(),
        author: name,
        country: country || "Globe Explorer",
        style: style,
        content: content,
        date: "Just now",
        likes: 0
      };

      setTips(prev => [newTip, ...prev]);
      setName("");
      setCountry("");
      setStyle("General");
      setContent("");
      setIsSubmitting(false);
      setShowSuccess(true);
      
      setTimeout(() => setShowSuccess(false), 4000);
    }, 800);
  };

  const filteredTips = activeTab === "All" 
    ? tips 
    : tips.filter(tip => tip.style === activeTab);

  return (
    <div id="community-board" className="bg-white rounded-2xl border border-cloud overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12">
      
      {/* Left side: Shared Tips */}
      <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-cloud">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <MessageSquare className="w-5 h-5 text-singapore-red" />
            <h4 className="font-heading text-xl font-bold text-onyx">Live Solo Insights</h4>
          </div>
          
          {/* Tabs */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
            {(["All", "Cultural", "Adventure", "Bleisure"] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all shrink-0 ${
                  activeTab === tab 
                    ? "bg-singapore-red text-white" 
                    : "bg-cloud/60 text-slate hover:bg-cloud"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tips List */}
          <div className="space-y-4 max-h-[420px] overflow-y-auto pr-2">
            <AnimatePresence initial={false}>
              {filteredTips.map(tip => (
                <motion.div
                  key={tip.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="p-4 bg-stone-50 rounded-xl border border-cloud/75 hover:border-singapore-red/10 transition-all space-y-3"
                >
                  <p className="text-sm text-onyx/90 leading-relaxed font-sans italic">
                    "{tip.content}"
                  </p>
                  
                  <div className="flex justify-between items-center text-xs">
                    <div className="flex items-center gap-3 text-slate">
                      <span className="font-bold text-onyx flex items-center gap-1">
                        <User className="w-3 h-3 text-slate" /> {tip.author}
                      </span>
                      <span className="flex items-center gap-0.5">
                        <MapPin className="w-3 h-3 text-slate/80" /> {tip.country}
                      </span>
                      <span className="bg-cloud text-slate font-semibold px-2 py-0.5 rounded text-[10px] uppercase tracking-wider">
                        {tip.style}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-slate">{tip.date}</span>
                      <button
                        onClick={() => handleLike(tip.id)}
                        className="flex items-center gap-1 px-2 py-1 bg-white border border-cloud rounded-lg hover:border-red-200 text-slate hover:text-singapore-red transition-all cursor-pointer"
                      >
                        <Heart className="w-3 h-3 fill-current text-red-100 group-hover:text-singapore-red" />
                        <span className="font-bold text-[10px]">{tip.likes}</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Right side: Share Your Tip Form */}
      <div className="lg:col-span-5 p-6 sm:p-8 bg-stone-50/50 flex flex-col justify-center">
        <h4 className="font-heading text-lg font-bold text-onyx mb-1">
          Share Your Solo Wisdom
        </h4>
        <p className="text-xs text-slate mb-5">
          Have you unlocked a secret Singapore hack? Pay it forward to fellow solo travelers!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate uppercase tracking-wider mb-1.5">
              Your Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="e.g. Maya"
              className="w-full px-4 py-2.5 bg-white border border-cloud rounded-xl text-sm focus:outline-none focus:border-singapore-red focus:ring-1 focus:ring-singapore-red transition-all"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate uppercase tracking-wider mb-1.5">
                Country
              </label>
              <input
                type="text"
                value={country}
                onChange={e => setCountry(e.target.value)}
                placeholder="e.g. USA"
                className="w-full px-4 py-2.5 bg-white border border-cloud rounded-xl text-sm focus:outline-none focus:border-singapore-red focus:ring-1 focus:ring-singapore-red transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate uppercase tracking-wider mb-1.5">
                Travel Style
              </label>
              <select
                value={style}
                onChange={e => setStyle(e.target.value as any)}
                className="w-full px-3 py-2.5 bg-white border border-cloud rounded-xl text-sm focus:outline-none focus:border-singapore-red focus:ring-1 focus:ring-singapore-red transition-all"
              >
                <option value="General">General</option>
                <option value="Cultural">Cultural</option>
                <option value="Adventure">Adventure</option>
                <option value="Bleisure">Bleisure</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate uppercase tracking-wider mb-1.5">
              Your Tip / Experience
            </label>
            <textarea
              required
              rows={3}
              value={content}
              onChange={e => setContent(e.target.value)}
              placeholder="e.g. MRT train aircon can be freezing, always bring a light jacket or cardigan!"
              className="w-full px-4 py-2.5 bg-white border border-cloud rounded-xl text-sm focus:outline-none focus:border-singapore-red focus:ring-1 focus:ring-singapore-red transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-onyx hover:bg-singapore-red text-white text-sm font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-50 cursor-pointer"
          >
            {isSubmitting ? (
              <span>Sending...</span>
            ) : (
              <>
                <Send className="w-4 h-4" /> Share My Tip
              </>
            )}
          </button>
        </form>

        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-3 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl text-center font-medium"
            >
              🎉 Thank you! Your tip has been posted to the Live Board.
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
