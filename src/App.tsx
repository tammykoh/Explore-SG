import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Heart,
  User,
  LogOut,
  ShieldCheck,
  Check,
  MapPin,
  ExternalLink,
  Menu,
  X,
  Compass,
  Award,
  ChevronRight,
  BookMarked,
  Share2,
  BookmarkCheck,
  AwardIcon,
  HelpCircle
} from "lucide-react";

import { PERSONAS } from "./data";
import { Activity } from "./types";
import SafetyModal from "./components/SafetyModal";
import DownloadModal from "./components/DownloadModal";
import ItineraryModal from "./components/ItineraryModal";
import CommunityBoard from "./components/CommunityBoard";
import PersonaSection from "./components/PersonaSection";

export default function App() {
  // Navigation & UI States
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSafetyOpen, setIsSafetyOpen] = useState(false);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginToast, setShowLoginToast] = useState(false);
  
  // Favorites & Completion trackers (Persisted in localStorage)
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem("solosg_favs");
    return saved ? JSON.parse(saved) : [];
  });
  
  const [completed, setCompleted] = useState<string[]>(() => {
    const saved = localStorage.getItem("solosg_completed");
    return saved ? JSON.parse(saved) : [];
  });

  const [showFavoritesDropdown, setShowFavoritesDropdown] = useState(false);

  useEffect(() => {
    localStorage.setItem("solosg_favs", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("solosg_completed", JSON.stringify(completed));
  }, [completed]);

  // Total activities across all personas
  const totalActivitiesCount = 9; // Emma (3) + Brandon (4) + Victor (2)

  const handleToggleFavorite = (title: string) => {
    setFavorites(prev =>
      prev.includes(title) ? prev.filter(t => t !== title) : [...prev, title]
    );
  };

  const handleToggleCompleted = (title: string) => {
    setCompleted(prev =>
      prev.includes(title) ? prev.filter(t => t !== title) : [...prev, title]
    );
  };

  const handleSignIn = () => {
    setIsLoggedIn(true);
    setShowLoginToast(true);
    setTimeout(() => setShowLoginToast(false), 4000);
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
  };

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="bg-background text-on-background font-sans min-h-screen flex flex-col selection:bg-singapore-red/10 selection:text-singapore-red">
      
      {/* 1. Header Navigation */}
      <nav className="fixed top-0 left-0 right-0 h-20 bg-white/95 backdrop-blur-md border-b border-cloud z-40 px-4 sm:px-8 md:px-16 flex justify-between items-center">
        <div className="flex items-center gap-10">
          {/* Logo */}
          <span
            onClick={() => handleScrollTo("root")}
            className="font-heading text-xl sm:text-2xl font-extrabold text-singapore-red cursor-pointer tracking-wider select-none hover:opacity-90 transition-opacity"
          >
            SOLO SG
          </span>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex gap-8 items-center">
            <button
              onClick={() => handleScrollTo("introduction")}
              className="font-sans text-sm font-semibold text-onyx hover:text-singapore-red transition-all cursor-pointer"
            >
              Explore
            </button>
            <button
              onClick={() => handleScrollTo("personas-itineraries-container")}
              className="font-sans text-sm font-semibold text-onyx hover:text-singapore-red transition-all cursor-pointer"
            >
              Itineraries
            </button>
            <button
              onClick={() => handleScrollTo("safety-insights")}
              className="font-sans text-sm font-semibold text-onyx hover:text-singapore-red transition-all cursor-pointer"
            >
              Insights
            </button>
            <button
              onClick={() => handleScrollTo("community-section")}
              className="font-sans text-sm font-semibold text-onyx hover:text-singapore-red transition-all cursor-pointer"
            >
              Community
            </button>
          </div>
        </div>

        {/* Right Nav Options */}
        <div className="flex items-center gap-3 sm:gap-4">
          
          {/* Favorites Pocket Toggle */}
          <div className="relative">
            <button
              onClick={() => setShowFavoritesDropdown(!showFavoritesDropdown)}
              className="p-2 text-onyx hover:text-singapore-red hover:bg-stone-50 rounded-full transition-all relative cursor-pointer"
              aria-label="Favorites list"
            >
              <Heart className={`w-5 h-5 ${favorites.length > 0 ? "text-singapore-red fill-current" : ""}`} />
              {favorites.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-singapore-red text-white text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                  {favorites.length}
                </span>
              )}
            </button>

            {/* Favorites Dropdown Drawer */}
            <AnimatePresence>
              {showFavoritesDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 mt-3 w-80 bg-white border border-cloud rounded-2xl shadow-xl z-50 p-4 overflow-hidden"
                >
                  <div className="flex justify-between items-center border-b border-cloud pb-2.5 mb-3">
                    <span className="text-xs font-bold text-onyx uppercase tracking-wider flex items-center gap-1.5">
                      <BookMarked className="w-4 h-4 text-singapore-red" /> My saved spots ({favorites.length})
                    </span>
                    <button
                      onClick={() => setShowFavoritesDropdown(false)}
                      className="text-slate hover:text-singapore-red text-xs font-semibold"
                    >
                      Close
                    </button>
                  </div>

                  {favorites.length === 0 ? (
                    <div className="py-8 text-center">
                      <Heart className="w-8 h-8 text-stone-200 mx-auto mb-2" />
                      <p className="text-xs text-slate font-medium leading-relaxed px-4">
                        Tap the heart icons on any itinerary to save your favorite Singapore spots!
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                      {favorites.map((fav, idx) => {
                        // Find matching activity to retrieve image & data
                        const matchedAct = PERSONAS.flatMap(p => p.activities).find(a => a.title === fav);
                        return (
                          <div
                            key={idx}
                            className="flex items-center justify-between p-2 hover:bg-stone-50 rounded-lg transition-all border border-transparent hover:border-cloud"
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              {matchedAct?.image ? (
                                <img
                                  src={matchedAct.image}
                                  alt=""
                                  className="w-9 h-9 object-cover rounded-md shrink-0"
                                  referrerPolicy="no-referrer"
                                />
                              ) : (
                                <div className="w-9 h-9 rounded-md bg-red-50 flex items-center justify-center shrink-0">
                                  <MapPin className="w-4 h-4 text-singapore-red" />
                                </div>
                              )}
                              <div className="min-w-0">
                                <p className="text-xs font-bold text-onyx truncate leading-snug">
                                  {fav}
                                </p>
                                <span className="text-[10px] text-slate block truncate">
                                  {matchedAct?.day || "Special Spot"}
                                </span>
                              </div>
                            </div>
                            <button
                              onClick={() => handleToggleFavorite(fav)}
                              className="text-slate hover:text-singapore-red p-1 text-[10px] font-bold"
                              title="Remove"
                            >
                              ✕
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* User Sign-In Action */}
          {isLoggedIn ? (
            <div className="flex items-center gap-2 border border-cloud bg-stone-50 pl-3 pr-2 py-1.5 rounded-full shadow-xs">
              <div className="w-6 h-6 rounded-full bg-singapore-red/10 text-singapore-red flex items-center justify-center text-xs font-bold">
                T
              </div>
              <span className="text-xs font-bold text-onyx hidden sm:inline">Tammy K.</span>
              <button
                onClick={handleSignOut}
                className="p-1 text-slate hover:text-singapore-red rounded-full hover:bg-cloud transition-all cursor-pointer"
                title="Sign Out"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={handleSignIn}
              className="bg-singapore-red text-white text-xs sm:text-sm font-semibold px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl hover:opacity-90 transition-all cursor-pointer shadow-sm"
            >
              Sign In
            </button>
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-onyx hover:bg-stone-50 rounded-lg md:hidden cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-20 left-0 right-0 bg-white border-b border-cloud z-30 md:hidden overflow-hidden shadow-lg"
          >
            <div className="flex flex-col p-4 space-y-3 font-sans text-sm font-semibold">
              <button
                onClick={() => handleScrollTo("introduction")}
                className="w-full text-left py-2 px-3 hover:bg-stone-50 hover:text-singapore-red rounded-lg transition-all cursor-pointer"
              >
                Explore
              </button>
              <button
                onClick={() => handleScrollTo("personas-itineraries-container")}
                className="w-full text-left py-2 px-3 hover:bg-stone-50 hover:text-singapore-red rounded-lg transition-all cursor-pointer"
              >
                Itineraries
              </button>
              <button
                onClick={() => handleScrollTo("safety-insights")}
                className="w-full text-left py-2 px-3 hover:bg-stone-50 hover:text-singapore-red rounded-lg transition-all cursor-pointer"
              >
                Insights
              </button>
              <button
                onClick={() => handleScrollTo("community-section")}
                className="w-full text-left py-2 px-3 hover:bg-stone-50 hover:text-singapore-red rounded-lg transition-all cursor-pointer"
              >
                Community
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Container */}
      <main className="mt-20 flex-1">
        
        {/* Login Welcome Toast Notification */}
        <AnimatePresence>
          {showLoginToast && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-onyx text-white border border-stone-800 px-6 py-3 rounded-2xl shadow-2xl text-xs sm:text-sm font-bold flex items-center gap-2.5 max-w-sm sm:max-w-none text-center"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Welcome back, tammykohrw@gmail.com!</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 2. Hero Header Banner */}
        <header className="relative h-[75vh] min-h-[500px] sm:min-h-[600px] w-full flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt="Solo Travel to Singapore"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida/AP1WRLtU_JiVGXZ_YSRqhY8o6ajF4SLmdaG4z1ytb35F4agT4-9ZmrGwDidqF2GLM_BGUGQy_wmsWlyMPSnIo3b5IRP_C1b2V2v7GO-PL626xm4DSGXGk_9HzznquMRaVR6ci1jAoL9g6IbLseGded0XfC3ZRBd4ObO7vGPXLzDvOFQFAfZ2PsBYcNu2nWDm2ckuKo-PORC_-IknR7urpSLTNsZ5W7_3S2GnaRtC9hOq_ajsOoFBqRFATPlAL0M"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-onyx/85 via-onyx/60 to-transparent" />
          </div>
          
          <div className="relative z-10 px-4 sm:px-8 md:px-16 max-w-7xl mx-auto w-full">
            <div className="max-w-2xl text-white space-y-6">
              <span className="inline-block bg-singapore-red px-3 py-1 font-sans text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded">
                Ultimate Guide
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-none text-white">
                Solo Travel to Singapore Guide
              </h1>
              <p className="font-sans text-sm sm:text-base md:text-lg text-white/90 leading-relaxed font-normal">
                Embark on a journey of self-discovery in the Lion City. From Michelin-starred street food to futuristic gardens, Singapore offers the world's most seamless and secure solo experience.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
                <button
                  onClick={() => handleScrollTo("introduction")}
                  className="bg-singapore-red text-white text-xs sm:text-sm font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:opacity-95 transition-all shadow-md cursor-pointer"
                >
                  Start Exploring
                </button>
                <button
                  onClick={() => setIsSafetyOpen(true)}
                  className="border border-white/60 text-white text-xs sm:text-sm font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-white hover:text-onyx transition-all backdrop-blur-xs cursor-pointer"
                >
                  Safety Guide
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* 3. Introduction Section */}
        <section id="introduction" className="py-24 px-4 sm:px-8 md:px-16 max-w-7xl mx-auto scroll-mt-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="w-full lg:w-1/2 space-y-6">
              <span className="font-sans text-xs font-semibold text-singapore-red uppercase tracking-widest block">
                Overview
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-onyx tracking-tight">
                Why Singapore is the Solo Traveler's Haven
              </h2>
              <p className="font-sans text-base text-slate leading-relaxed">
                Singapore consistently ranks as one of the safest, cleanest, and most efficient cities globally. For the solo traveler, this means unparalleled freedom to explore vibrant heritage districts, world-class museums, and lush nature reserves without hesitation or compromise.
              </p>
              
              {/* Interactive Features List */}
              <ul className="space-y-4 pt-2">
                <li className="flex items-start gap-3">
                  <span className="p-1 bg-red-50 text-singapore-red rounded-lg mt-0.5">
                    <Check className="w-4 h-4 font-extrabold" />
                  </span>
                  <span className="font-sans text-sm sm:text-base text-onyx font-medium">
                    Exceptional public transport system (MRT) connecting every corner of the island.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="p-1 bg-red-50 text-singapore-red rounded-lg mt-0.5">
                    <Check className="w-4 h-4 font-extrabold" />
                  </span>
                  <span className="font-sans text-sm sm:text-base text-onyx font-medium">
                    Multilingual environment with English as the primary language of communication.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="p-1 bg-red-50 text-singapore-red rounded-lg mt-0.5">
                    <Check className="w-4 h-4 font-extrabold" />
                  </span>
                  <span className="font-sans text-sm sm:text-base text-onyx font-medium">
                    Incredible variety of clean food at hawker centers, perfect for single diners.
                  </span>
                </li>
              </ul>
            </div>

            {/* Right Media Column - Adventure Dashboard tracker */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-cloud relative h-72">
                <img
                  alt="Singapore safety banner"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida/AP1WRLuuFWobYJuNoLoB5gEBQjuGZcfDRtIqL-Z8RgQdAzIdQRZj4Ew7nF3gejNiLSUkHyOTlghZz7ReQw44zttys1pqQGhIcUScx6xS3qP8VxXbCuoLjdiB1cO-uArpuxLjjlu1BFxJ1V9hhIyJjGmOBOhV_eoCfOMiVQ2giottZfaNd0GF3SytHntq_tb2zJHAfgVufucGJJuBE-vEojzWmFHDNpd6TB4oRATziKPG26Si4kopoyiAJ4-Y9Dk"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute bottom-4 left-4 text-xs font-bold text-white bg-onyx/50 px-3 py-1.5 rounded-md backdrop-blur-xs flex items-center gap-1">
                  <Compass className="w-3.5 h-3.5 text-singapore-red animate-spin" /> Merlion City Sights
                </span>
              </div>

              {/* Dynamic Tracker Dashboard card */}
              <div className="bg-stone-50 border border-cloud p-6 rounded-2xl space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-singapore-red" />
                    <h3 className="font-heading text-lg font-bold text-onyx">My Adventure Tracker</h3>
                  </div>
                  <span className="text-xs bg-singapore-red/10 text-singapore-red font-bold px-2.5 py-1 rounded-md">
                    {completed.length} / {totalActivitiesCount} Explored
                  </span>
                </div>

                <div className="w-full bg-cloud h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-singapore-red h-full rounded-full transition-all duration-500"
                    style={{ width: `${(completed.length / totalActivitiesCount) * 100}%` }}
                  />
                </div>

                <p className="text-xs text-slate font-medium leading-relaxed">
                  {completed.length === 0 ? (
                    "No spots ticked yet. Mark spots as visited inside the itineraries below to track your adventure!"
                  ) : completed.length === totalActivitiesCount ? (
                    "🎉 Brilliant! You've unlocked all 9 premium Singapore travel milestones!"
                  ) : (
                    `Keep going! You have unlocked ${completed.length} milestone spots. Tap 'View Tips' to read detailed routes.`
                  )}
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 4. Interactive Persona Profiles / Itineraries Section */}
        <div id="itineraries" className="scroll-mt-10">
          <PersonaSection
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            completed={completed}
            onToggleCompleted={handleToggleCompleted}
            onViewItinerary={(activity) => setSelectedActivity(activity)}
          />
        </div>

        {/* 5. Safety Insights Anchor / Callout Card */}
        <section id="safety-insights" className="py-20 bg-cloud/40 border-t border-cloud scroll-mt-10">
          <div className="max-w-4xl mx-auto text-center px-4 space-y-6">
            <span className="p-2.5 bg-red-100/60 text-singapore-red rounded-full inline-block">
              <ShieldCheck className="w-8 h-8" />
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-onyx tracking-tight">
              A Safe, Seamless Journey Awaits
            </h2>
            <p className="font-sans text-base text-slate leading-relaxed max-w-2xl mx-auto">
              With ultra-strict regulations, world-class clean transit, and English spoken everywhere, Singapore is the ideal proving ground for both first-time and seasoned solo adventurers. Read our comprehensive transit &amp; legal guides.
            </p>
            <button
              onClick={() => setIsSafetyOpen(true)}
              className="bg-onyx hover:bg-singapore-red text-white text-sm font-bold px-8 py-3.5 rounded-xl transition-all shadow-md cursor-pointer"
            >
              Open Safety &amp; Transit Guide
            </button>
          </div>
        </section>

        {/* 6. Live Community Share Section */}
        <section id="community-section" className="py-24 px-4 sm:px-8 md:px-16 max-w-7xl mx-auto scroll-mt-10">
          <div className="mb-12 text-center max-w-xl mx-auto space-y-3">
            <span className="font-sans text-xs font-semibold text-singapore-red uppercase tracking-widest">
              Community Board
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-onyx tracking-tight">
              Solo SG Global Explorer Club
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate leading-relaxed">
              Interact with real experiences shared by solo travellers around the world. Write your own tips to share!
            </p>
          </div>

          <CommunityBoard />
        </section>

        {/* 7. CTA App Section */}
        <section id="download-app" className="py-24 bg-stone-50 border-t border-cloud text-center px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-onyx tracking-tight leading-tight">
              Ready to Script Your Own Singapore Story?
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate max-w-xl mx-auto leading-relaxed">
              Download our comprehensive solo traveller app for offline maps, safety contacts, real-time community tips, and contactless transit guides.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => setIsDownloadOpen(true)}
                className="w-full sm:w-auto bg-singapore-red text-white px-8 sm:px-10 py-4 rounded-full font-bold text-sm sm:text-base flex items-center justify-center gap-2 hover:shadow-lg hover:opacity-95 transition-all cursor-pointer"
              >
                Get the App
              </button>
              <button
                onClick={() => handleScrollTo("community-section")}
                className="w-full sm:w-auto bg-white border border-cloud text-onyx px-8 sm:px-10 py-4 rounded-full font-bold text-sm sm:text-base hover:bg-cloud transition-all cursor-pointer"
              >
                Join Community
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* 8. Footer */}
      <footer className="bg-white border-t border-cloud py-12 px-4 sm:px-8 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
          <div className="max-w-sm space-y-4">
            <span
              onClick={() => handleScrollTo("root")}
              className="font-heading text-2xl font-bold text-singapore-red tracking-wider cursor-pointer select-none hover:opacity-90 block"
            >
              SOLO SG
            </span>
            <p className="font-sans text-sm text-slate leading-relaxed">
              Your premier guide to solo travel in Singapore. Navigating the city made simple, safe, and sophisticated.
            </p>
            <div className="flex gap-4 pt-2">
              <span className="text-xs text-slate font-semibold hover:text-singapore-red cursor-pointer transition-all">Facebook</span>
              <span className="text-xs text-slate font-semibold hover:text-singapore-red cursor-pointer transition-all">Instagram</span>
              <span className="text-xs text-slate font-semibold hover:text-singapore-red cursor-pointer transition-all">Twitter</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12 sm:gap-20">
            <div className="space-y-4">
              <h5 className="font-sans text-xs font-bold text-onyx uppercase tracking-wider">Resources</h5>
              <ul className="space-y-2.5 text-sm text-slate font-medium">
                <li>
                  <button
                    onClick={() => handleScrollTo("introduction")}
                    className="hover:text-singapore-red transition-all cursor-pointer text-left"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => alert("Contact support at: info@solosg.com")}
                    className="hover:text-singapore-red transition-all cursor-pointer text-left"
                  >
                    Contact Support
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setIsSafetyOpen(true)}
                    className="hover:text-singapore-red transition-all cursor-pointer text-left"
                  >
                    Safety Guide
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h5 className="font-sans text-xs font-bold text-onyx uppercase tracking-wider">Legal</h5>
              <ul className="space-y-2.5 text-sm text-slate font-medium">
                <li>
                  <button
                    onClick={() => alert("Simulated Privacy Policy. Your client data is kept strictly inside localStorage.")}
                    className="hover:text-singapore-red transition-all cursor-pointer text-left"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => alert("Simulated Terms of Service.")}
                    className="hover:text-singapore-red transition-all cursor-pointer text-left"
                  >
                    Terms of Service
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-cloud flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-slate">
          <p>© 2024 Solo SG. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-singapore-red cursor-pointer transition-all">Sitemap</span>
            <span className="hover:text-singapore-red cursor-pointer transition-all">Cookie Settings</span>
          </div>
        </div>
      </footer>

      {/* 9. Modals */}
      <SafetyModal isOpen={isSafetyOpen} onClose={() => setIsSafetyOpen(false)} />
      
      <DownloadModal isOpen={isDownloadOpen} onClose={() => setIsDownloadOpen(false)} />

      <ItineraryModal
        activity={selectedActivity}
        onClose={() => setSelectedActivity(null)}
        isCompleted={selectedActivity ? completed.includes(selectedActivity.title) : false}
        onToggleCompleted={() => {
          if (selectedActivity) {
            handleToggleCompleted(selectedActivity.title);
          }
        }}
      />

    </div>
  );
}
