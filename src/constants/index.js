import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  mathwork,
  eduskill,
  // Car images
  sclass1,
  bmw1,
  vclass1,
} from "../assets";

export const navLinks = [
  {
    id: "carpool",
    title: "Carpool",
    dropdown: [
      { id: "mercedes-sclass", title: "Mercedes S-Class" },
      { id: "bmw-7", title: "BMW 7" },
      { id: "mercedes-vclass", title: "Mercedes V-Class" },
    ],
  },
  {
    id: "services",
    title: "Services",
    dropdown: [
      { id: "chauffeurservice", title: "Chauffeur Service" },
      { id: "airporttransfer", title: "Airport Transfer" },
      { id: "vip-service", title: "VIP Service" },
    ],
  },
  {
    id: "tourism",
    title: "Tourism",
    dropdown: [
      { id: "beliebte-zielorte", title: "Beliebte Zielorte" },
      { id: "shoppingtours", title: "Shopping Tours" },
      { id: "freizeitparks", title: "Freizeitparks" },
      { id: "bauernhofe", title: "Bauernhöfe" },
    ],
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  {
    id: "mercedes-sclass",
    title: "Mercedes S-Class",
    icon: sclass1
  },
  {
    id: "mercedes-vclass",
    title: "Mercedes V-Class",
    icon: vclass1
  },
  {
    id: "bmw-7",
    title: "BMW 7",
    icon: bmw1
  },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Business Chauffeur Service",
    company_name: "Premium Chauffeur | Executive Transfer",
    icon: eduskill,
    iconBg: "#000000",
    date: "24/7 verfügbar",
    points: [
      "Exklusiver Chauffeurservice für Geschäftsreisende mit luxuriösen Mercedes S-Klasse und BMW 7er Fahrzeugen.",
      "Diskreter, zuverlässiger Limousinenservice mit erfahrenen Fahrern, die die Bedürfnisse von Geschäftskunden verstehen.",
      "Kostenlose Annehmlichkeiten wie WLAN, Erfrischungen und Tageszeitungen für eine produktive Reisezeit.",
      "Maßgeschneiderte Business Transfer Lösungen für Meetings, Konferenzen und Geschäftsreisen in ganz Deutschland.",
    ],
  },
  {
    title: "Airport Transfer Service",
    company_name: "Premium Chauffeur | Flughafentransfer",
    icon: mathwork,
    iconBg: "#000000",
    date: "Alle wichtigen Flughäfen",
    points: [
      "Nahtloser Flughafentransfer zu und von allen wichtigen Flughäfen mit Flugverfolgung und angepassten Abholzeiten.",
      "Meet-and-Greet-Service mit Namensschild und Unterstützung beim Gepäck für einen stressfreien Empfang.",
      "Komfortable, entspannte Reise nach langen Flügen in geräumigen Luxusfahrzeugen mit erfahrenen Chauffeuren.",
      "Luxustransfer vom Flughafen zu Ihrem Hotel, Geschäftstermin oder nach Hause - 24 Stunden täglich verfügbar.",
    ],
  },
  {
    title: "VIP Chauffeur Service",
    company_name: "Premium Chauffeur | VIP Transport",
    icon: edunet,
    iconBg: "#000000",
    date: "Höchste Diskretion",
    points: [
      "Exklusiver VIP Chauffeur Service mit Mercedes S-Klasse und BMW 7er für höchste Ansprüche und maximale Diskretion.",
      "Maßgeschneiderte Transportlösungen für Prominente, Führungskräfte und anspruchsvolle Kunden mit persönlichem Service.",
      "Erfahrene, mehrsprachige Chauffeure mit umfassender Ortskenntnis und höchsten Sicherheitsstandards.",
      "24h Premium Fahrservice für besondere Anlässe, Events und Veranstaltungen mit flexibler Routenplanung.",
    ],
  },
];

export const projects = [
  {
    name: "Beliebte Zielorte",
    description:
      "Entdecken Sie Deutschlands beliebteste Touristenziele mit unserem exklusiven Chauffeurservice. Wir bieten maßgeschneiderte Stadttouren in München, Hamburg, Berlin und Frankfurt mit professionellen Fahrern und luxuriösen Fahrzeugen.",
    tags: [
      { name: "Stadtrundfahrten", color: "blue-text-gradient" },
      { name: "Kulturtouren", color: "green-text-gradient" },
      { name: "Historische Stätten", color: "pink-text-gradient" },
      { name: "Sightseeing mit Chauffeur", color: "yellow-text-gradient" },
    ],
    image: weatherpedia,
    source_code_link: "",
  },
  {
    name: "Shopping Tours",
    description:
      "Exklusive Shopping-Erlebnisse mit unserem Luxus Limousinenservice zu den besten Einkaufszielen Deutschlands. Wir bieten VIP-Transport zu Outlet Centern wie Metzingen, Ingolstadt Village und Designer Outlets mit persönlicher Einkaufsberatung.",
    tags: [
      { name: "Luxus Shopping", color: "blue-text-gradient" },
      { name: "Outlet Center Touren", color: "green-text-gradient" },
      { name: "VIP Einkaufserlebnis", color: "pink-text-gradient" },
      { name: "Shopping mit Chauffeur", color: "yellow-text-gradient" },
    ],
    image: termpw,
    source_code_link: "",
  },
  {
    name: "Freizeitparks",
    description:
      "Besuchen Sie Deutschlands beste Freizeitparks mit unserem komfortablen Chauffeurservice. Wir bieten Transfers zu Europa-Park, Phantasialand, Heide Park und Legoland mit luxuriösen Fahrzeugen für Familien und Gruppen.",
    tags: [
      { name: "Familienausflüge", color: "blue-text-gradient" },
      { name: "Freizeitpark Transfer", color: "green-text-gradient" },
      { name: "Gruppenreisen", color: "pink-text-gradient" },
      { name: "Themenpark Touren", color: "yellow-text-gradient" },
    ],
    image: mhft,
    source_code_link: "",
  },
  {
    name: "Bauernhöfe",
    description:
      "Erleben Sie authentisches deutsches Landleben und ländliche Traditionen mit unserem Premium Chauffeurservice. Wir bieten geführte Hoftouren und Landausflüge zu traditionellen Bauernhöfen mit komfortablem Transport.",
    tags: [
      { name: "Landtourismus", color: "blue-text-gradient" },
      { name: "Bauernhofbesuche", color: "green-text-gradient" },
      { name: "Ländliche Ausflüge", color: "pink-text-gradient" },
      { name: "Traditionelle Höfe", color: "yellow-text-gradient" },
    ],
    image: payloadmaster,
    source_code_link: "",
  },
];
