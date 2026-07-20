export interface Activity {
  day: string;
  tag: string;
  title: string;
  description: string;
  image: string;
}

export interface Persona {
  id: string;
  name: string;
  role: string;
  description: string;
  image?: string;
  quote?: string;
  activities: Activity[];
}

export interface SafetyTip {
  category: string;
  title: string;
  description: string;
  icon: string;
}

