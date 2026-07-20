import { Persona, SafetyTip } from "./types";

export const HERO_BACKGROUND_IMAGE = "https://lh3.googleusercontent.com/aida/AP1WRLtU_JiVGXZ_YSRqhY8o6ajF4SLmdaG4z1ytb35F4agT4-9ZmrGwDidqF2GLM_BGUGQy_wmsWlyMPSnIo3b5IRP_C1b2V2v7GO-PL626xm4DSGXGk_9HzznquMRaVR6ci1jAoL9g6IbLseGded0XfC3ZRBd4ObO7vGPXLzDvOFQFAfZ2PsBYcNu2nWDm2ckuKo-PORC_-IknR7urpSLTNsZ5W7_3S2GnaRtC9hOq_ajsOoFBqRFATPlAL0M";

export const SAFETY_BANNER_IMAGE = "https://lh3.googleusercontent.com/aida/AP1WRLuuFWobYJuNoLoB5gEBQjuGZcfDRtIqL-Z8RgQdAzIdQRZj4Ew7nF3gejNiLSUkHyOTlghZz7ReQw44zttys1pqQGhIcUScx6xS3qP8VxXbCuoLjdiB1cO-uArpuxLjjlu1BFxJ1V9hhIyJjGmOBOhV_eoCfOMiVQ2giottZfaNd0GF3SytHntq_tb2zJHAfgVufucGJJuBE-vEojzWmFHDNpd6TB4oRATziKPG26Si4kopoyiAJ4-Y9Dk";

export const PERSONAS: Persona[] = [
  {
    id: "emma",
    name: "Emma",
    role: "The Cultural Explorer",
    description: "Emma seeks deep cultural immersion, hidden heritage gems, and authentic local stories in the heart of the city.",
    activities: [
      {
        day: "Day 1",
        tag: "Heritage Heart",
        title: "Chinatown & Heritage",
        description: "Dive into the rich history of the early settlers at the Chinatown Heritage Centre before exploring the colorful shophouses.",
        image: "https://lh3.googleusercontent.com/aida/AP1WRLuv49eh7rtCwTQKAx53ahgHuKNzMTfxkaPkdGb5SBsm9hoLDzVMUflGIQUZqncqQPMQJ05YzbE19gP7uSMOTi6Cod1f12Pn_22ntrCmVX6DA-tfW5WFN79IT0avh_s5mmioQRF267tnlkMdYsel-IhwgvRM8YWJMPxFef1f98U1-umHkAQpOiPfN-OQ-FnNXPQpeQwrSIt-nk-oBb2eYIJO8yUh2rn5cw9Q-4zloaLqcsrNXtXejT0-T78"
      },
      {
        day: "Day 2",
        tag: "Sensory Journey",
        title: "Little India & Kampong Gelam",
        description: "A vibrant morning in Little India followed by an afternoon of street art and indie boutiques in the historic Kampong Gelam district.",
        image: "https://lh3.googleusercontent.com/aida/AP1WRLu-YqTb9IU2b8PAfOJOmwFLYfV8M5J2K3qcz_E-zvd5zZxE-c_-uZWXq35slRPiNmsIZfBs_9Ow-2L5ECT4U8jAbn_6YjCjf0YM3gwWwforOnGmj7SvkJ7qD38sYSEY096LFtFmusNYM0IOGNOUdxB9A9uytNjq5qswCMEeS46XgZvGdj0mwg-7b7a1O4RfErmL6FdhoacIx-K0gvZVAdbRTktKI4TWvdrCOaLQYeAo20PQ62YDoLT8PVw"
      },
      {
        day: "Day 3",
        tag: "Artistic Soul",
        title: "National Gallery & Museum Hopping",
        description: "Spend a contemplative day at the world's largest public collection of Singapore and Southeast Asian modern art. Perfect for a memorable afternoon of cultural discovery and inspiration.",
        image: "https://lh3.googleusercontent.com/aida/AP1WRLuNg6YIK5N2qHTkZsRw5nqgTAJvf4iZ4wZla4SNolbfUzadpNodjRR4A8TNm6jQQpwobJku7Gxb2TnjyUa4EZXLxSb40C-SnqWOehz1jo4OLZasS6kfYn1WpLEzkairee4UK0OwF0MAUmcWfVmpu4c51p3cBuGBfjvZfjXFs_0_AvAz7TR4Mpv5wgUVMS5grQzeckRy0Z3QeTKclEpEw7iKWo58SCWUQAjM7WOYJdpK2BZbXw-nzHUuEQY"
      }
    ]
  },
  {
    id: "brandon",
    name: "Brandon",
    role: "The Bleisure Professional",
    description: "Maximizing efficiency and relaxation between meetings, Brandon looks for premium experiences and iconic city views.",
    activities: [
      {
        day: "Day 1",
        tag: "City Panorama",
        title: "City Skyline",
        description: "Explore the CBD and Marina Bay Sands waterfront.",
        image: "https://lh3.googleusercontent.com/aida/AP1WRLvTA5nMadGQF1d4bfM6R8crJEB8AV16DyglUXQNqB-R8A6MjZzaZaadRKaqD8m8oHgnL-wx3E66awsrnE7QtRs4Np8iaKuMObibXSSdFyI8QrT6X4LmcaDv3cDmAZeBEaVARScn5saOuVgUO1vINVMIq5zH3CrI1qthGO4zuhN_1QzJTwcCbHPE_P2Vw0CfL4pKzvb-Mnp-MeOiwI4x1TfOPZn_Qjyy2FlI1sZpSf93FmbewT_-0XDEETY"
      },
      {
        day: "Day 2",
        tag: "Botanic Wonder",
        title: "Garden Wonders",
        description: "Evening at Gardens by the Bay and Supertree Grove.",
        image: "https://lh3.googleusercontent.com/aida/AP1WRLtl-SC60FDG29OpzMyt-nDnpfEMJCIqUxZe2iB-PMnIQDlhzStfx3X_268HZzXGohhQ5FIwYk2RLkTJh2kl5TKJWDV8pCIsWNtLfspgkjd4yN04IhKzgANG0kt6XbzkPcj-1PfQfJPGXKOxtDoWE3ZQsA9GZZxZ3uFFS2vnh8EJHtYb8DlmDJhj-GiFup5izBGRNlp95A8aOMIoRJWGTBz3F6QWsMal-uKbK--0kieYs_miAhye0g-Uxw"
      },
      {
        day: "Night 3",
        tag: "Vibrant Nightlife",
        title: "Global Rhythms",
        description: "Experiencing the electric nightlife at world-class clubs.",
        image: "https://lh3.googleusercontent.com/aida/AP1WRLs-IuPpDKoQNr_Et5rTtL3nz67-2fg0ljJoWsU5bqa3htl5YnC5wyXYD2xlB6qfnEiCBfoMHlJm5RYmiiyWeVFJoZfbg9tPxpmY3VNceOKup9wiOE3spkLFNH79ZquV1zZHGh2XXr4PD1vLm7dgohOxVBRalD91RpFf5ZJoQODFQ10Go--x_BolyKQVRtMDj06cR8pyThWhecYMaAPNy-RATiFsgrTmETY6rXuHiIHs37bhljZLuiPc52w"
      },
      {
        day: "Special",
        tag: "Gastronomy",
        title: "Bespoke Dining",
        description: "Unique dining experiences that blend art and flavor.",
        image: "https://lh3.googleusercontent.com/aida/AP1WRLtrldD0saDC1xeGrvnPfZvJbFS6EE0H6MubIQ6MW_5f5SIg0XeUdbr8pn_oXMi9-hA2dXvDKZpWhbkwxmY6BbACEOB7Qgu76PCZaE0XnKPL9PAM5Q3O6EJJDNz0yuuCzkrnCibC-YGcMyAYHemZV8S08S-J7Wm6rM0DKA8MhAD5TBtOzsfPZtjbwr6MVM0Blx1ijgtkdUv0_zjBPGcHiwpXXhLxFhEewZAxcsiUU0cb9sZS18No0OR0KZw"
      }
    ]
  },
  {
    id: "victor",
    name: "Victor",
    role: "The Adventurous Voyager",
    description: "Victor is on a quest for the unconventional. He seeks the island's hidden nature trails, adrenaline-pumping activities, and the serenity of architectural masterpieces reflected in still waters.",
    image: "https://lh3.googleusercontent.com/aida/AP1WRLu7h1P3TXF7edl7oFoLBeRseldesj_AFRY1qwEg43-PZtzk7trWlbCMOryhxwgMNlCaST1ZqbdfFccs7Od_QYWdyh6Sps2Aja1NlX_jCupWT7p0BuK4IVOrimuFvDL4BxgYyYeNYJBwowegii4Jsxcbz-HszLo-AVJkYXcknkcTTMDIBD2lopOLFSgaSvqOIK4ukF0kFytJfHKS4bRCLBRotajYffsjxnNhmt8gah4vfVWVpqTjgOJCIMo",
    quote: "Singapore's nature surprised me.",
    activities: [
      {
        day: "Day 1",
        tag: "Nature & Serenity",
        title: "Chinese Garden & Jurong Lake",
        description: "Spending Day 1 at the Chinese Garden and Jurong Lake Gardens for unmatched tranquility.",
        image: "https://lh3.googleusercontent.com/aida/AP1WRLu7h1P3TXF7edl7oFoLBeRseldesj_AFRY1qwEg43-PZtzk7trWlbCMOryhxwgMNlCaST1ZqbdfFccs7Od_QYWdyh6Sps2Aja1NlX_jCupWT7p0BuK4IVOrimuFvDL4BxgYyYeNYJBwowegii4Jsxcbz-HszLo-AVJkYXcknkcTTMDIBD2lopOLFSgaSvqOIK4ukF0kFytJfHKS4bRCLBRotajYffsjxnNhmt8gah4vfVWVpqTjgOJCIMo"
      },
      {
        day: "Day 2",
        tag: "Island Biking",
        title: "Pulau Ubin Exploration",
        description: "Exploring Pulau Ubin on two wheels for a glimpse of old-world Singapore charm.",
        image: "https://lh3.googleusercontent.com/aida/AP1WRLuuFWobYJuNoLoB5gEBQjuGZcfDRtIqL-Z8RgQdAzIdQRZj4Ew7nF3gejNiLSUkHyOTlghZz7ReQw44zttys1pqQGhIcUScx6xS3qP8VxXbCuoLjdiB1cO-uArpuxLjjlu1BFxJ1V9hhIyJjGmOBOhV_eoCfOMiVQ2giottZfaNd0GF3SytHntq_tb2zJHAfgVufucGJJuBE-vEojzWmFHDNpd6TB4oRATziKPG26Si4kopoyiAJ4-Y9Dk"
      }
    ]
  }
];

export const SAFETY_TIPS: SafetyTip[] = [
  {
    category: "Personal Safety",
    title: "Unmatched Security",
    description: "Singapore has extremely low crime rates. It's safe to walk alone at night virtually anywhere, but basic precautions should still be observed.",
    icon: "ShieldAlert"
  },
  {
    category: "Laws & Customs",
    title: "Fines & Regulations",
    description: "Strict enforcement of littering laws, no chewing gum imports, and no eating/drinking on MRT trains. Always look for signage in public spaces.",
    icon: "Scale"
  },
  {
    category: "Public Transport",
    title: "Seamless MRT & Buses",
    description: "Simply tap your contactless Visa/Mastercard or mobile wallet (Apple/Google Pay) at any MRT gantry or bus card reader. No need for single-trip tickets.",
    icon: "Train"
  },
  {
    category: "Connectivity & Cash",
    title: "eSims & Cashless Pay",
    description: "Get a tourist eSIM at the airport or online. While credit cards are accepted almost everywhere, keep a small amount of cash (SGD $10-20) for local hawker stalls.",
    icon: "Wifi"
  },
  {
    category: "Emergency Contacts",
    title: "Crucial Hotlines",
    description: "Police: 999 | Fire & Ambulance: 995 | Non-emergency Ambulance: 1777 | Tourist Hotline: 1800-736-2000",
    icon: "PhoneCall"
  },
  {
    category: "Weather & Packing",
    title: "Tropical Climate Essentials",
    description: "Singapore is warm (around 31°C) and humid year-round, with sudden tropical showers. Carry a light umbrella, sunglasses, water bottle, and light, breathable clothing.",
    icon: "CloudRain"
  }
];
