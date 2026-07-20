import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Info, ArrowRight, Heart, Check, Clock, HelpCircle, Sparkles, Navigation } from "lucide-react";
import { Activity } from "../types";

interface MapPoint {
  id: string;
  title: string;
  tag: string;
  coordinates: { x: number; y: number };
  personaName: string;
  day: string;
  image: string;
  shortDesc: string;
  transit: string;
  bestTime: string;
  cost: string;
  activityObject: Activity;
}

interface SingaporeMapProps {
  onViewDetails: (activity: Activity) => void;
  favorites: string[];
  onToggleFavorite: (title: string) => void;
  completed: string[];
  onToggleCompleted: (title: string) => void;
}

export default function SingaporeMap({
  onViewDetails,
  favorites,
  onToggleFavorite,
  completed,
  onToggleCompleted,
}: SingaporeMapProps) {
  
  // Geographically plotted relative coordinates on a 800 x 400 SVG grid
  const mapPoints: MapPoint[] = [
    {
      id: "chinese_garden",
      title: "Chinese Garden & Jurong Lake",
      tag: "Nature & Serenity",
      coordinates: { x: 190, y: 220 },
      personaName: "Victor",
      day: "Day 1",
      image: "https://lh3.googleusercontent.com/aida/AP1WRLu7h1P3TXF7edl7oFoLBeRseldesj_AFRY1qwEg43-PZtzk7trWlbCMOryhxwgMNlCaST1ZqbdfFccs7Od_QYWdyh6Sps2Aja1NlX_jCupWT7p0BuK4IVOrimuFvDL4BxgYyYeNYJBwowegii4Jsxcbz-HszLo-AVJkYXcknkcTTMDIBD2lopOLFSgaSvqOIK4ukF0kFytJfHKS4bRCLBRotajYffsjxnNhmt8gah4vfVWVpqTjgOJCIMo",
      shortDesc: "A peaceful retreat in the western district. Beautiful imperial pagodas and bridges surrounded by tranquil lake waters, perfect for reflective walks.",
      transit: "Lakeside MRT (EW26), 5-min walk",
      bestTime: "7:00 AM – 10:00 AM (Cool morning hours)",
      cost: "Free Admission",
      activityObject: {
        day: "Day 1",
        tag: "Nature & Serenity",
        title: "Chinese Garden & Jurong Lake",
        description: "Spending Day 1 at the Chinese Garden and Jurong Lake Gardens for unmatched tranquility.",
        image: "https://lh3.googleusercontent.com/aida/AP1WRLu7h1P3TXF7edl7oFoLBeRseldesj_AFRY1qwEg43-PZtzk7trWlbCMOryhxwgMNlCaST1ZqbdfFccs7Od_QYWdyh6Sps2Aja1NlX_jCupWT7p0BuK4IVOrimuFvDL4BxgYyYeNYJBwowegii4Jsxcbz-HszLo-AVJkYXcknkcTTMDIBD2lopOLFSgaSvqOIK4ukF0kFytJfHKS4bRCLBRotajYffsjxnNhmt8gah4vfVWVpqTjgOJCIMo"
      }
    },
    {
      id: "clarke_quay",
      title: "Global Rhythms",
      tag: "Vibrant Nightlife",
      coordinates: { x: 375, y: 245 },
      personaName: "Brandon",
      day: "Night 3",
      image: "https://lh3.googleusercontent.com/aida/AP1WRLs-IuPpDKoQNr_Et5rTtL3nz67-2fg0ljJoWsU5bqa3htl5YnC5wyXYD2xlB6qfnEiCBfoMHlJm5RYmiiyWeVFJoZfbg9tPxpmY3VNceOKup9wiOE3spkLFNH79ZquV1zZHGh2XXr4PD1vLm7dgohOxVBRalD91RpFf5ZJoQODFQ10Go--x_BolyKQVRtMDj06cR8pyThWhecYMaAPNy-RATiFsgrTmETY6rXuHiIHs37bhljZLuiPc52w",
      shortDesc: "Clarke Quay's electric nightlife hub along the scenic Singapore River. Exceptionally safe for solo bar-hopping and meeting international travelers.",
      transit: "Clarke Quay MRT (NE5), Exit C",
      bestTime: "9:00 PM – Late",
      cost: "Varies ($15 - $40 bar cover)",
      activityObject: {
        day: "Night 3",
        tag: "Vibrant Nightlife",
        title: "Global Rhythms",
        description: "Experiencing the electric nightlife at world-class clubs.",
        image: "https://lh3.googleusercontent.com/aida/AP1WRLs-IuPpDKoQNr_Et5rTtL3nz67-2fg0ljJoWsU5bqa3htl5YnC5wyXYD2xlB6qfnEiCBfoMHlJm5RYmiiyWeVFJoZfbg9tPxpmY3VNceOKup9wiOE3spkLFNH79ZquV1zZHGh2XXr4PD1vLm7dgohOxVBRalD91RpFf5ZJoQODFQ10Go--x_BolyKQVRtMDj06cR8pyThWhecYMaAPNy-RATiFsgrTmETY6rXuHiIHs37bhljZLuiPc52w"
      }
    },
    {
      id: "chinatown",
      title: "Chinatown & Heritage",
      tag: "Heritage Heart",
      coordinates: { x: 385, y: 265 },
      personaName: "Emma",
      day: "Day 1",
      image: "https://lh3.googleusercontent.com/aida/AP1WRLuv49eh7rtCwTQKAx53ahgHuKNzMTfxkaPkdGb5SBsm9hoLDzVMUflGIQUZqncqQPMQJ05YzbE19gP7uSMOTi6Cod1f12Pn_22ntrCmVX6DA-tfW5WFN79IT0avh_s5mmioQRF267tnlkMdYsel-IhwgvRM8YWJMPxFef1f98U1-umHkAQpOiPfN-OQ-FnNXPQpeQwrSIt-nk-oBb2eYIJO8yUh2rn5cw9Q-4zloaLqcsrNXtXejT0-T78",
      shortDesc: "A bustling historic enclave. Features the awe-inspiring Buddha Tooth Relic Temple, retro street stalls, and incredible cheap eats at Maxwell Hawker Centre.",
      transit: "Chinatown MRT (NE4/DT19), Exit A",
      bestTime: "10:00 AM – 3:00 PM",
      cost: "Free (Temples are free to enter)",
      activityObject: {
        day: "Day 1",
        tag: "Heritage Heart",
        title: "Chinatown & Heritage",
        description: "Dive into the rich history of the early settlers at the Chinatown Heritage Centre before exploring the colorful shophouses.",
        image: "https://lh3.googleusercontent.com/aida/AP1WRLuv49eh7rtCwTQKAx53ahgHuKNzMTfxkaPkdGb5SBsm9hoLDzVMUflGIQUZqncqQPMQJ05YzbE19gP7uSMOTi6Cod1f12Pn_22ntrCmVX6DA-tfW5WFN79IT0avh_s5mmioQRF267tnlkMdYsel-IhwgvRM8YWJMPxFef1f98U1-umHkAQpOiPfN-OQ-FnNXPQpeQwrSIt-nk-oBb2eYIJO8yUh2rn5cw9Q-4zloaLqcsrNXtXejT0-T78"
      }
    },
    {
      id: "national_gallery",
      title: "National Gallery & Museum Hopping",
      tag: "Artistic Soul",
      coordinates: { x: 400, y: 245 },
      personaName: "Emma",
      day: "Day 3",
      image: "https://lh3.googleusercontent.com/aida/AP1WRLuNg6YIK5N2qHTkZsRw5nqgTAJvf4iZ4wZla4SNolbfUzadpNodjRR4A8TNm6jQQpwobJku7Gxb2TnjyUa4EZXLxSb40C-SnqWOehz1jo4OLZasS6kfYn1WpLEzkairee4UK0OwF0MAUmcWfVmpu4c51p3cBuGBfjvZfjXFs_0_AvAz7TR4Mpv5wgUVMS5grQzeckRy0Z3QeTKclEpEw7iKWo58SCWUQAjM7WOYJdpK2BZbXw-nzHUuEQY",
      shortDesc: "Housed in the former Supreme Court and City Hall buildings. Possesses the world's largest public collection of Singapore and Southeast Asian modern art.",
      transit: "City Hall MRT (NS25/EW13), Exit B",
      bestTime: "11:00 AM – 4:00 PM",
      cost: "$20 General Admission (Tourists)",
      activityObject: {
        day: "Day 3",
        tag: "Artistic Soul",
        title: "National Gallery & Museum Hopping",
        description: "Spend a contemplative day at the world's largest public collection of Singapore and Southeast Asian modern art. Perfect for a solo afternoon of reflection and inspiration.",
        image: "https://lh3.googleusercontent.com/aida/AP1WRLuNg6YIK5N2qHTkZsRw5nqgTAJvf4iZ4wZla4SNolbfUzadpNodjRR4A8TNm6jQQpwobJku7Gxb2TnjyUa4EZXLxSb40C-SnqWOehz1jo4OLZasS6kfYn1WpLEzkairee4UK0OwF0MAUmcWfVmpu4c51p3cBuGBfjvZfjXFs_0_AvAz7TR4Mpv5wgUVMS5grQzeckRy0Z3QeTKclEpEw7iKWo58SCWUQAjM7WOYJdpK2BZbXw-nzHUuEQY"
      }
    },
    {
      id: "little_india",
      title: "Little India & Kampong Gelam",
      tag: "Sensory Journey",
      coordinates: { x: 410, y: 225 },
      personaName: "Emma",
      day: "Day 2",
      image: "https://lh3.googleusercontent.com/aida/AP1WRLu-YqTb9IU2b8PAfOJOmwFLYfV8M5J2K3qcz_E-zvd5zZxE-c_-uZWXq35slRPiNmsIZfBs_9Ow-2L5ECT4U8jAbn_6YjCjf0YM3gwWwforOnGmj7SvkJ7qD38sYSEY096LFtFmusNYM0IOGNOUdxB9A9uytNjq5qswCMEeS46XgZvGdj0mwg-7b7a1O4RfErmL6FdhoacIx-K0gvZVAdbRTktKI4TWvdrCOaLQYeAo20PQ62YDoLT8PVw",
      shortDesc: "Vibrant spice markets and colorful flower garlands. Leads into the historic Kampong Gelam district for beautiful murals, coffee houses, and Sultan Mosque.",
      transit: "Little India MRT (NE7/DT12) or Bugis (EW12)",
      bestTime: "10:30 AM – 3:00 PM",
      cost: "Free (Tasting street snacks is cheap)",
      activityObject: {
        day: "Day 2",
        tag: "Sensory Journey",
        title: "Little India & Kampong Gelam",
        description: "A vibrant morning in Little India followed by an afternoon of street art and indie boutiques in the historic Kampong Gelam district.",
        image: "https://lh3.googleusercontent.com/aida/AP1WRLu-YqTb9IU2b8PAfOJOmwFLYfV8M5J2K3qcz_E-zvd5zZxE-c_-uZWXq35slRPiNmsIZfBs_9Ow-2L5ECT4U8jAbn_6YjCjf0YM3gwWwforOnGmj7SvkJ7qD38sYSEY096LFtFmusNYM0IOGNOUdxB9A9uytNjq5qswCMEeS46XgZvGdj0mwg-7b7a1O4RfErmL6FdhoacIx-K0gvZVAdbRTktKI4TWvdrCOaLQYeAo20PQ62YDoLT8PVw"
      }
    },
    {
      id: "marina_bay",
      title: "City Skyline",
      tag: "City Panorama",
      coordinates: { x: 415, y: 260 },
      personaName: "Brandon",
      day: "Day 1",
      image: "https://lh3.googleusercontent.com/aida/AP1WRLvTA5nMadGQF1d4bfM6R8crJEB8AV16DyglUXQNqB-R8A6MjZzaZaadRKaqD8m8oHgnL-wx3E66awsrnE7QtRs4Np8iaKuMObibXSSdFyI8QrT6X4LmcaDv3cDmAZeBEaVARScn5saOuVgUO1vINVMIq5zH3CrI1qthGO4zuhN_1QzJTwcCbHPE_P2Vw0CfL4pKzvb-Mnp-MeOiwI4x1TfOPZn_Qjyy2FlI1sZpSf93FmbewT_-0XDEETY",
      shortDesc: "The iconic postcard skyline of Singapore. Highlights include walking across Helix Bridge, visiting the Merlion, and watching sunset along the waterfront loop.",
      transit: "Bayfront MRT (CE1/DT16) or Raffles Place (EW14)",
      bestTime: "6:30 PM – 8:00 PM (Sunset/golden hour)",
      cost: "Free Waterfront Boardwalk",
      activityObject: {
        day: "Day 1",
        tag: "City Panorama",
        title: "City Skyline",
        description: "Explore the CBD and Marina Bay Sands waterfront.",
        image: "https://lh3.googleusercontent.com/aida/AP1WRLvTA5nMadGQF1d4bfM6R8crJEB8AV16DyglUXQNqB-R8A6MjZzaZaadRKaqD8m8oHgnL-wx3E66awsrnE7QtRs4Np8iaKuMObibXSSdFyI8QrT6X4LmcaDv3cDmAZeBEaVARScn5saOuVgUO1vINVMIq5zH3CrI1qthGO4zuhN_1QzJTwcCbHPE_P2Vw0CfL4pKzvb-Mnp-MeOiwI4x1TfOPZn_Qjyy2FlI1sZpSf93FmbewT_-0XDEETY"
      }
    },
    {
      id: "gardens_by_the_bay",
      title: "Garden Wonders",
      tag: "Botanic Wonder",
      coordinates: { x: 435, y: 270 },
      personaName: "Brandon",
      day: "Day 2",
      image: "https://lh3.googleusercontent.com/aida/AP1WRLtl-SC60FDG29OpzMyt-nDnpfEMJCIqUxZe2iB-PMnIQDlhzStfx3X_268HZzXGohhQ5FIwYk2RLkTJh2kl5TKJWDV8pCIsWNtLfspgkjd4yN04IhKzgANG0kt6XbzkPcj-1PfQfJPGXKOxtDoWE3ZQsA9GZZxZ3uFFS2vnh8EJHtYb8DlmDJhj-GiFup5izBGRNlp95A8aOMIoRJWGTBz3F6QWsMal-uKbK--0kieYs_miAhye0g-Uxw",
      shortDesc: "Futuristic architectural gardens. Cloud Forest Dome, the Flower Dome, and towering giant Supertrees illuminated beautifully in a nightly musical light show.",
      transit: "Bayfront MRT (CE1/DT16), Exit B",
      bestTime: "5:00 PM – 8:00 PM (Garden Rhapsody at 7:45 PM)",
      cost: "Free Outer Gardens / ~$28 for domes",
      activityObject: {
        day: "Day 2",
        tag: "Botanic Wonder",
        title: "Garden Wonders",
        description: "Evening at Gardens by the Bay and Supertree Grove.",
        image: "https://lh3.googleusercontent.com/aida/AP1WRLtl-SC60FDG29OpzMyt-nDnpfEMJCIqUxZe2iB-PMnIQDlhzStfx3X_268HZzXGohhQ5FIwYk2RLkTJh2kl5TKJWDV8pCIsWNtLfspgkjd4yN04IhKzgANG0kt6XbzkPcj-1PfQfJPGXKOxtDoWE3ZQsA9GZZxZ3uFFS2vnh8EJHtYb8DlmDJhj-GiFup5izBGRNlp95A8aOMIoRJWGTBz3F6QWsMal-uKbK--0kieYs_miAhye0g-Uxw"
      }
    },
    {
      id: "bespoke_dining",
      title: "Bespoke Dining",
      tag: "Gastronomy",
      coordinates: { x: 390, y: 285 },
      personaName: "Brandon",
      day: "Special",
      image: "https://lh3.googleusercontent.com/aida/AP1WRLtrldD0saDC1xeGrvnPfZvJbFS6EE0H6MubIQ6MW_5f5SIg0XeUdbr8pn_oXMi9-hA2dXvDKZpWhbkwxmY6BbACEOB7Qgu76PCZaE0XnKPL9PAM5Q3O6EJJDNz0yuuCzkrnCibC-YGcMyAYHemZV8S08S-J7Wm6rM0DKA8MhAD5TBtOzsfPZtjbwr6MVM0Blx1ijgtkdUv0_zjBPGcHiwpXXhLxFhEewZAxcsiUU0cb9sZS18No0OR0KZw",
      shortDesc: "Tanjong Pagar and the central business district boast some of the finest mixology bars and high-end dining spots, with welcoming counter seats for solo travelers.",
      transit: "Tanjong Pagar MRT (EW15) or Telok Ayer (DT18)",
      bestTime: "7:00 PM – 9:30 PM",
      cost: "$50 - $150 per person",
      activityObject: {
        day: "Special",
        tag: "Gastronomy",
        title: "Bespoke Dining",
        description: "Unique dining experiences that blend art and flavor.",
        image: "https://lh3.googleusercontent.com/aida/AP1WRLtrldD0saDC1xeGrvnPfZvJbFS6EE0H6MubIQ6MW_5f5SIg0XeUdbr8pn_oXMi9-hA2dXvDKZpWhbkwxmY6BbACEOB7Qgu76PCZaE0XnKPL9PAM5Q3O6EJJDNz0yuuCzkrnCibC-YGcMyAYHemZV8S08S-J7Wm6rM0DKA8MhAD5TBtOzsfPZtjbwr6MVM0Blx1ijgtkdUv0_zjBPGcHiwpXXhLxFhEewZAxcsiUU0cb9sZS18No0OR0KZw"
      }
    },
    {
      id: "pulau_ubin",
      title: "Pulau Ubin Exploration",
      tag: "Island Biking",
      coordinates: { x: 670, y: 135 },
      personaName: "Victor",
      day: "Day 2",
      image: "https://lh3.googleusercontent.com/aida/AP1WRLuuFWobYJuNoLoB5gEBQjuGZcfDRtIqL-Z8RgQdAzIdQRZj4Ew7nF3gejNiLSUkHyOTlghZz7ReQw44zttys1pqQGhIcUScx6xS3qP8VxXbCuoLjdiB1cO-uArpuxLjjlu1BFxJ1V9hhIyJjGmOBOhV_eoCfOMiVQ2giottZfaNd0GF3SytHntq_tb2zJHAfgVufucGJJuBE-vEojzWmFHDNpd6TB4oRATziKPG26Si4kopoyiAJ4-Y9Dk",
      shortDesc: "A rustic island sanctuary reflecting old kampong charm. Cycle through lush forest paths, coastal mangrove boardwalks, and beautiful tranquil quarry lookouts.",
      transit: "Bumboat from Changi Point Ferry Terminal ($4)",
      bestTime: "8:00 AM – 1:00 PM (Beat the tropical heat)",
      cost: "$8 Bumboat + $10 Bike Rental",
      activityObject: {
        day: "Day 2",
        tag: "Island Biking",
        title: "Pulau Ubin Exploration",
        description: "Exploring Pulau Ubin on two wheels for a glimpse of old-world Singapore charm.",
        image: "https://lh3.googleusercontent.com/aida/AP1WRLuuFWobYJuNoLoB5gEBQjuGZcfDRtIqL-Z8RgQdAzIdQRZj4Ew7nF3gejNiLSUkHyOTlghZz7ReQw44zttys1pqQGhIcUScx6xS3qP8VxXbCuoLjdiB1cO-uArpuxLjjlu1BFxJ1V9hhIyJjGmOBOhV_eoCfOMiVQ2giottZfaNd0GF3SytHntq_tb2zJHAfgVufucGJJuBE-vEojzWmFHDNpd6TB4oRATziKPG26Si4kopoyiAJ4-Y9Dk"
      }
    }
  ];

  const [selectedPoint, setSelectedPoint] = useState<MapPoint>(mapPoints[2]); // Default to Chinatown
  const [hoveredPointId, setHoveredPointId] = useState<string | null>(null);

  const isFavorite = favorites.includes(selectedPoint.title);
  const isCompleted = completed.includes(selectedPoint.title);

  return (
    <section id="interactive-map-section" className="bg-stone-50 py-20 border-y border-cloud scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Title */}
        <div className="mb-12 text-center max-w-2xl mx-auto space-y-3">
          <span className="font-sans text-xs font-semibold text-singapore-red uppercase tracking-widest flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4 animate-pulse" /> Geographic Itinerary Discovery
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-onyx tracking-tight">
            Interactive Solo Travel Map
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate leading-relaxed">
            Every premium milestone spot is geographically mapped below. Tap any marker to unlock instant transport coordinates, costs, and tailored solo insights.
          </p>
        </div>

        {/* Dashboard Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Map Column (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-cloud p-4 sm:p-6 shadow-sm flex flex-col justify-between relative overflow-hidden min-h-[360px] sm:min-h-[460px]">
            
            {/* Map Header Overlay info */}
            <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-cloud shadow-xs pointer-events-none max-w-[240px]">
              <span className="text-[10px] font-bold text-singapore-red uppercase tracking-wider block mb-0.5">Singapore Mainland</span>
              <p className="text-[11px] text-slate font-medium leading-tight">Click on any marker to explore local highlights.</p>
            </div>

            {/* Interactive Map Wrapper */}
            <div className="flex-1 w-full flex items-center justify-center py-6 relative">
              <svg
                viewBox="0 0 800 400"
                className="w-full h-auto max-h-[380px] drop-shadow-md select-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG Definitions for Gradients, Dropshadows, etc */}
                <defs>
                  <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
                    <feDropShadow dx="1" dy="3" stdDeviation="4" floodColor="#000" floodOpacity="0.08" />
                  </filter>
                  <linearGradient id="mainlandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fafaf9" />
                    <stop offset="100%" stopColor="#f5f5f4" />
                  </linearGradient>
                  <linearGradient id="activeMarkerGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#EE192F" />
                    <stop offset="100%" stopColor="#b91c1c" />
                  </linearGradient>
                </defs>

                {/* Faint Dotted Grid for Technical Visual Vibe */}
                <g stroke="#e7e5e4" strokeWidth="0.5" strokeDasharray="5,5" opacity="0.4">
                  <line x1="100" y1="0" x2="100" y2="400" />
                  <line x1="200" y1="0" x2="200" y2="400" />
                  <line x1="300" y1="0" x2="300" y2="400" />
                  <line x1="400" y1="0" x2="400" y2="400" />
                  <line x1="500" y1="0" x2="500" y2="400" />
                  <line x1="600" y1="0" x2="600" y2="400" />
                  <line x1="700" y1="0" x2="700" y2="400" />
                  <line x1="0" y1="100" x2="800" y2="100" />
                  <line x1="0" y1="200" x2="800" y2="200" />
                  <line x1="0" y1="300" x2="800" y2="300" />
                </g>

                {/* Transit Line Simulation (Faint lines to bind spots together) */}
                {/* East-West (Green) MRT Route line */}
                <path
                  d="M 120,240 Q 180,225 240,235 T 375,245 T 415,260 T 600,210"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2.5"
                  strokeDasharray="2,5"
                  opacity="0.6"
                />

                {/* Downtown Core Circle MRT Route line */}
                <path
                  d="M 375,245 A 25,25 0 1,1 435,270"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2.5"
                  strokeDasharray="2,5"
                  opacity="0.55"
                />

                {/* Simplified Singapore Mainland Shape */}
                <path
                  d="M 70,230 
                     C 70,230 90,210 120,215
                     C 145,210 165,185 200,180
                     C 240,175 260,155 300,150
                     C 340,145 380,140 430,140
                     C 480,140 520,150 550,145
                     C 580,140 600,155 630,155
                     C 660,155 680,160 710,170
                     C 740,180 755,180 770,195
                     C 780,205 785,220 775,235
                     C 765,245 745,260 715,270
                     C 685,280 655,285 635,290
                     C 615,295 575,295 545,290
                     C 515,285 485,290 455,290
                     C 425,290 405,295 385,300
                     C 365,305 335,305 305,300
                     C 275,295 245,295 225,295
                     C 205,295 185,285 165,280
                     C 145,275 115,265 95,255
                     C 75,245 70,235 70,230 Z"
                  fill="url(#mainlandGrad)"
                  stroke="#d6d3d1"
                  strokeWidth="2.5"
                  filter="url(#shadow)"
                  className="transition-colors duration-300"
                />

                {/* Pulau Ubin shape */}
                <path
                  d="M 645,130 C 655,125 680,125 690,132 C 695,136 685,144 675,144 C 660,144 650,138 645,130 Z"
                  fill="url(#mainlandGrad)"
                  stroke="#d6d3d1"
                  strokeWidth="2"
                  filter="url(#shadow)"
                />

                {/* Pulau Tekong shape */}
                <path
                  d="M 725,145 C 735,135 760,135 770,145 C 775,153 765,163 750,163 C 735,163 727,155 725,145 Z"
                  fill="url(#mainlandGrad)"
                  stroke="#d6d3d1"
                  strokeWidth="2"
                  filter="url(#shadow)"
                />

                {/* Sentosa Island shape */}
                <path
                  d="M 370,310 C 380,307 400,307 415,313 C 425,317 415,323 400,323 C 385,323 375,317 370,310 Z"
                  fill="url(#mainlandGrad)"
                  stroke="#d6d3d1"
                  strokeWidth="2"
                  filter="url(#shadow)"
                />

                {/* Render interactive markers */}
                {mapPoints.map((point) => {
                  const isActive = selectedPoint.id === point.id;
                  const isHovered = hoveredPointId === point.id;
                  const isDone = completed.includes(point.title);

                  return (
                    <g
                      key={point.id}
                      transform={`translate(${point.coordinates.x}, ${point.coordinates.y})`}
                      className="cursor-pointer group"
                      onClick={() => setSelectedPoint(point)}
                      onMouseEnter={() => setHoveredPointId(point.id)}
                      onMouseLeave={() => setHoveredPointId(null)}
                    >
                      {/* Pulsing glow ring behind selected or hovered markers */}
                      {(isActive || isHovered) && (
                        <circle
                          r="16"
                          fill="#EE192F"
                          opacity="0.25"
                          className="animate-ping"
                        />
                      )}

                      {/* Smaller stable background ring */}
                      <circle
                        r="8"
                        fill={isActive ? "#EE192F" : isDone ? "#10b981" : "#78716c"}
                        opacity={isActive || isHovered ? "0.4" : "0.15"}
                        className="transition-all duration-300"
                      />

                      {/* Precise Center marker point */}
                      <circle
                        r="5.5"
                        fill={isActive ? "url(#activeMarkerGrad)" : isDone ? "#059669" : "#44403c"}
                        stroke="#ffffff"
                        strokeWidth="1.5"
                        className="transition-all duration-300 shadow-sm"
                      />

                      {/* Tooltip Overlay (Visible on hover) */}
                      {isHovered && !isActive && (
                        <foreignObject
                          x="-80"
                          y="-42"
                          width="160"
                          height="35"
                          className="pointer-events-none z-50 overflow-visible"
                        >
                          <div className="bg-onyx/90 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded shadow-md text-center border border-white/10 leading-tight">
                            {point.title}
                          </div>
                        </foreignObject>
                      )}
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Map Legend */}
            <div className="border-t border-cloud pt-4 flex flex-wrap justify-between items-center gap-3 text-xs text-slate">
              <div className="flex gap-4">
                <span className="flex items-center gap-1.5 font-semibold">
                  <span className="w-2.5 h-2.5 rounded-full bg-singapore-red" /> Selected
                </span>
                <span className="flex items-center gap-1.5 font-semibold">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" /> Explored
                </span>
                <span className="flex items-center gap-1.5 font-semibold">
                  <span className="w-2.5 h-2.5 rounded-full bg-stone-500" /> Planned Spot
                </span>
              </div>
              <div className="flex gap-3 text-[10px] font-bold uppercase tracking-wider text-slate bg-stone-100 px-2.5 py-1 rounded-md">
                <span className="text-emerald-700">● MRT Linkages Map</span>
              </div>
            </div>
          </div>

          {/* Details Card Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full bg-white rounded-2xl border border-cloud overflow-hidden shadow-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPoint.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col h-full justify-between"
              >
                <div>
                  {/* Photo Banner with floating tags */}
                  <div className="h-44 relative overflow-hidden">
                    <img
                      src={selectedPoint.image}
                      alt={selectedPoint.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Upper Floating Tags */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                      <span className="text-[10px] bg-singapore-red text-white px-2.5 py-0.5 rounded font-bold uppercase tracking-widest">
                        {selectedPoint.day} • {selectedPoint.personaName}
                      </span>
                      
                      <button
                        onClick={() => onToggleFavorite(selectedPoint.title)}
                        className={`p-2 rounded-full shadow-md backdrop-blur-md transition-all ${
                          isFavorite
                            ? "bg-singapore-red text-white"
                            : "bg-white/90 text-onyx hover:text-singapore-red"
                        }`}
                        title={isFavorite ? "Remove favorite" : "Add favorite"}
                      >
                        <Heart className={`w-3.5 h-3.5 ${isFavorite ? "fill-current" : ""}`} />
                      </button>
                    </div>

                    {/* Lower Text */}
                    <div className="absolute bottom-4 left-4 text-white">
                      <span className="text-[10px] text-white/80 font-semibold block uppercase tracking-wider mb-0.5">{selectedPoint.tag}</span>
                      <h3 className="font-heading text-lg font-bold leading-tight">{selectedPoint.title}</h3>
                    </div>
                  </div>

                  {/* Summary / Metadata Details */}
                  <div className="p-6 space-y-5">
                    <p className="text-sm text-slate leading-relaxed">
                      {selectedPoint.shortDesc}
                    </p>

                    <div className="border-t border-cloud pt-4 space-y-3.5">
                      {/* Transit Line Info */}
                      <div className="flex gap-3 items-start">
                        <Navigation className="w-4 h-4 text-singapore-red shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[10px] text-slate font-bold uppercase tracking-wider block">Access &amp; Transit</span>
                          <span className="text-xs text-onyx font-semibold leading-normal">{selectedPoint.transit}</span>
                        </div>
                      </div>

                      {/* Optimal Timing */}
                      <div className="flex gap-3 items-start">
                        <Clock className="w-4 h-4 text-singapore-red shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[10px] text-slate font-bold uppercase tracking-wider block">Optimal Timing</span>
                          <span className="text-xs text-onyx font-semibold leading-normal">{selectedPoint.bestTime}</span>
                        </div>
                      </div>

                      {/* Estimated Cost */}
                      <div className="flex gap-3 items-start">
                        <span className="w-4 h-4 rounded bg-red-50 text-singapore-red text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">$</span>
                        <div>
                          <span className="text-[10px] text-slate font-bold uppercase tracking-wider block">Estimated Cost</span>
                          <span className="text-xs text-onyx font-semibold leading-normal">{selectedPoint.cost}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom interactive action triggers */}
                <div className="p-6 bg-stone-50 border-t border-cloud flex items-center justify-between gap-3 mt-auto">
                  {/* Mark explored */}
                  <button
                    onClick={() => onToggleCompleted(selectedPoint.title)}
                    className={`px-3 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer border ${
                      isCompleted
                        ? "bg-emerald-600 border-emerald-600 text-white"
                        : "bg-white border-cloud text-slate hover:text-emerald-600 hover:border-emerald-300"
                    }`}
                  >
                    {isCompleted ? (
                      <>
                        <Check className="w-3.5 h-3.5" /> Checked Off
                      </>
                    ) : (
                      "Mark Visited"
                    )}
                  </button>

                  <button
                    onClick={() => onViewDetails(selectedPoint.activityObject)}
                    className="flex-1 bg-onyx hover:bg-singapore-red text-white font-bold py-2.5 rounded-xl transition-all text-xs flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>View Full Tips</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
