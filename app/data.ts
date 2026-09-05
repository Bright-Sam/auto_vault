export type Car = {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  type: string;
  fuel: 'Electric' | 'Hybrid' | 'Plug-in Hybrid';
  transmission: string;
  engine: string;
  drive: string;

  range: string;
  battery: string;
  charging: string;

  seats: number;
  mileage: string;
  colour: string;
  status: 'In Stock' | 'In Transit' | 'Reserved';
  warranty: string;
  description: string;
  img: string;
  features: string[];
};

export const brands = [
  "BYD",
  "Zeekr",
  "XPeng",
  "GAC Aion",
  "Geely",
  "Deepal",
  "Chery",
  "Neta",
  "Voyah",
];

export const money = (value: number) =>
  `GH₵ ${value.toLocaleString('en-GH')}`;

export const cars: Car[] = [

  // ================= BYD =================

  {
    id: 'byd-atto-3',
    brand: 'BYD',
    model: 'Atto 3',
    year: 2026,
    price: 420000,
    type: 'Electric SUV',
    fuel: 'Electric',
    transmission: 'Single-speed Automatic',
    engine: '150 kW Electric Motor',
    drive: 'FWD',
    range: '420 km',
    battery: '60.48 kWh Blade Battery',
    charging: '80 kW DC Fast Charging',
    seats: 5,
    mileage: 'New',
    colour: 'White',
    status: 'In Stock',
    warranty: '6 years / 150,000 km',
    description: 'A stylish and practical electric SUV featuring BYD Blade Battery technology and a premium technology-focused cabin.',
    img: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1600&q=90',
    features: ['Panoramic sunroof', '360° camera', 'Adaptive cruise control', 'Rotating touchscreen', 'Vehicle-to-load charging']
  },

  {
    id: 'byd-seal',
    brand: 'BYD',
    model: 'Seal',
    year: 2026,
    price: 520000,
    type: 'Electric Sedan',
    fuel: 'Electric',
    transmission: 'Single-speed Automatic',
    engine: '230 kW Electric Motor',
    drive: 'RWD',
    range: '570 km',
    battery: '82.5 kWh Blade Battery',
    charging: '150 kW DC Fast Charging',
    seats: 5,
    mileage: 'New',
    colour: 'Blue',
    status: 'In Stock',
    warranty: '6 years / 150,000 km',
    description: 'A sleek performance electric sedan combining long range, rapid charging and advanced driving technology.',
    img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=90',
    features: ['15.6-inch rotating display', 'Panoramic roof', 'Premium audio', 'Adaptive cruise control', 'Wireless charging']
  },

  {
    id: 'byd-dolphin',
    brand: 'BYD',
    model: 'Dolphin',
    year: 2026,
    price: 310000,
    type: 'Electric Hatchback',
    fuel: 'Electric',
    transmission: 'Single-speed Automatic',
    engine: '150 kW Electric Motor',
    drive: 'FWD',
    range: '427 km',
    battery: '60.48 kWh Blade Battery',
    charging: '88 kW DC Fast Charging',
    seats: 5,
    mileage: 'New',
    colour: 'Pink',
    status: 'In Stock',
    warranty: '6 years / 150,000 km',
    description: 'A compact and efficient electric hatchback designed for modern city driving.',
    img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=90',
    features: ['Rotating touchscreen', '360° camera', 'Wireless charging', 'LED lights', 'Smart key']
  },

  {
    id: 'byd-seal-u-dmi',
    brand: 'BYD',
    model: 'Seal U DM-i',
    year: 2026,
    price: 490000,
    type: 'Plug-in Hybrid SUV',
    fuel: 'Plug-in Hybrid',
    transmission: 'E-CVT',
    engine: '1.5L Hybrid + Electric Motor',
    drive: 'FWD',
    range: '1,100 km Combined',
    battery: '18.3 kWh Blade Battery',
    charging: 'AC + DC Charging',
    seats: 5,
    mileage: 'New',
    colour: 'Grey',
    status: 'In Transit',
    warranty: '6 years / 150,000 km',
    description: 'A versatile plug-in hybrid SUV offering electric driving with long-distance flexibility.',
    img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1600&q=90',
    features: ['Panoramic roof', '360° camera', 'Adaptive cruise control', 'Large touchscreen', 'Vehicle-to-load']
  },


  // ================= ZEEKR =================

  {
    id: 'zeekr-x',
    brand: 'Zeekr',
    model: 'X',
    year: 2026,
    price: 480000,
    type: 'Electric SUV',
    fuel: 'Electric',
    transmission: 'Single-speed Automatic',
    engine: '200 kW Electric Motor',
    drive: 'RWD',
    range: '440 km',
    battery: '66 kWh Lithium-ion Battery',
    charging: '150 kW DC Fast Charging',
    seats: 5,
    mileage: 'New',
    colour: 'White',
    status: 'In Stock',
    warranty: '5 years / 150,000 km',
    description: 'A premium compact electric SUV with futuristic styling and advanced safety technology.',
    img: 'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1600&q=90',
    features: ['Frameless doors', '360° camera', 'Premium audio', 'Panoramic roof', 'ADAS']
  },

  {
    id: 'zeekr-001',
    brand: 'Zeekr',
    model: '001',
    year: 2026,
    price: 680000,
    type: 'Electric Shooting Brake',
    fuel: 'Electric',
    transmission: 'Single-speed Automatic',
    engine: '400 kW Dual Motor',
    drive: 'AWD',
    range: '620 km',
    battery: '100 kWh Battery',
    charging: '200 kW DC Fast Charging',
    seats: 5,
    mileage: 'New',
    colour: 'Black',
    status: 'In Transit',
    warranty: '5 years / 150,000 km',
    description: 'A high-performance luxury EV delivering exceptional range, power and futuristic technology.',
    img: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=90',
    features: ['Air suspension', 'Premium audio', 'Panoramic glass roof', 'ADAS', 'Fast charging']
  },


  // ================= XPENG =================

  {
    id: 'xpeng-g6',
    brand: 'XPeng',
    model: 'G6',
    year: 2026,
    price: 510000,
    type: 'Electric Coupe SUV',
    fuel: 'Electric',
    transmission: 'Single-speed Automatic',
    engine: '210 kW Electric Motor',
    drive: 'RWD',
    range: '570 km',
    battery: '87.5 kWh Battery',
    charging: '280 kW DC Fast Charging',
    seats: 5,
    mileage: 'New',
    colour: 'Silver',
    status: 'In Stock',
    warranty: '5 years / 150,000 km',
    description: 'A futuristic electric coupe SUV built on an advanced 800V charging architecture.',
    img: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1600&q=90',
    features: ['800V architecture', 'XPILOT ADAS', 'Panoramic roof', 'Smart cockpit', 'Fast charging']
  },

  {
    id: 'xpeng-g9',
    brand: 'XPeng',
    model: 'G9',
    year: 2026,
    price: 720000,
    type: 'Luxury Electric SUV',
    fuel: 'Electric',
    transmission: 'Single-speed Automatic',
    engine: '405 kW Dual Motor',
    drive: 'AWD',
    range: '650 km',
    battery: '98 kWh Battery',
    charging: '300 kW DC Fast Charging',
    seats: 5,
    mileage: 'New',
    colour: 'Black',
    status: 'Reserved',
    warranty: '5 years / 150,000 km',
    description: 'A flagship luxury electric SUV featuring ultra-fast charging and advanced intelligent driving.',
    img: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1600&q=90',
    features: ['Air suspension', 'Massage seats', 'Premium audio', 'Advanced ADAS', 'Ultra-fast charging']
  },


  // ================= GAC AION =================

  {
    id: 'aion-y-plus',
    brand: 'GAC Aion',
    model: 'Y Plus',
    year: 2026,
    price: 350000,
    type: 'Electric SUV',
    fuel: 'Electric',
    transmission: 'Single-speed Automatic',
    engine: '150 kW Electric Motor',
    drive: 'FWD',
    range: '490 km',
    battery: '63.2 kWh Battery',
    charging: 'Fast DC Charging',
    seats: 5,
    mileage: 'New',
    colour: 'Green',
    status: 'In Stock',
    warranty: '5 years / 150,000 km',
    description: 'A spacious and efficient family-friendly electric SUV with impressive cabin space.',
    img: 'https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1600&q=90',
    features: ['Panoramic roof', 'Large touchscreen', '360° camera', 'Smart connectivity', 'Fast charging']
  },

  {
    id: 'aion-v',
    brand: 'GAC Aion',
    model: 'V',
    year: 2026,
    price: 470000,
    type: 'Electric SUV',
    fuel: 'Electric',
    transmission: 'Single-speed Automatic',
    engine: '180 kW Electric Motor',
    drive: 'FWD',
    range: '520 km',
    battery: '75 kWh Battery',
    charging: '180 kW DC Fast Charging',
    seats: 5,
    mileage: 'New',
    colour: 'Blue',
    status: 'In Transit',
    warranty: '5 years / 150,000 km',
    description: 'A technology-focused electric SUV designed for comfortable long-distance travel.',
    img: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1600&q=90',
    features: ['ADAS', 'Panoramic roof', 'Digital cockpit', 'Wireless charging', 'Fast charging']
  },


  // ================= GEELY =================

  {
    id: 'geely-ex5',
    brand: 'Geely',
    model: 'EX5',
    year: 2026,
    price: 390000,
    type: 'Electric SUV',
    fuel: 'Electric',
    transmission: 'Single-speed Automatic',
    engine: '160 kW Electric Motor',
    drive: 'FWD',
    range: '430 km',
    battery: '60.2 kWh LFP Battery',
    charging: '100 kW DC Fast Charging',
    seats: 5,
    mileage: 'New',
    colour: 'White',
    status: 'In Stock',
    warranty: '6 years / 150,000 km',
    description: 'A practical and refined electric SUV with excellent efficiency and family-friendly comfort.',
    img: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1600&q=90',
    features: ['Panoramic roof', '360° camera', 'Adaptive cruise control', 'Digital cockpit', 'Fast charging']
  },

  {
    id: 'geely-galaxy-e5',
    brand: 'Geely',
    model: 'Galaxy E5',
    year: 2026,
    price: 370000,
    type: 'Electric SUV',
    fuel: 'Electric',
    transmission: 'Single-speed Automatic',
    engine: '160 kW Electric Motor',
    drive: 'FWD',
    range: '530 km',
    battery: '60.2 kWh Aegis Battery',
    charging: 'Fast DC Charging',
    seats: 5,
    mileage: 'New',
    colour: 'Grey',
    status: 'In Stock',
    warranty: '6 years / 150,000 km',
    description: 'A smart and efficient electric SUV featuring Geely advanced battery safety technology.',
    img: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=90',
    features: ['Smart cockpit', 'ADAS', 'Panoramic roof', 'Wireless charging', '360° camera']
  },


  // ================= DEEPAL =================

  {
    id: 'deepal-s07',
    brand: 'Deepal',
    model: 'S07',
    year: 2026,
    price: 480000,
    type: 'Electric SUV',
    fuel: 'Electric',
    transmission: 'Single-speed Automatic',
    engine: '190 kW Electric Motor',
    drive: 'RWD',
    range: '485 km',
    battery: '66.8 kWh Battery',
    charging: 'Fast DC Charging',
    seats: 5,
    mileage: 'New',
    colour: 'Orange',
    status: 'In Stock',
    warranty: '5 years / 150,000 km',
    description: 'A stylish technology-focused electric SUV with futuristic design and intelligent features.',
    img: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&w=1600&q=90',
    features: ['AR-HUD', '360° camera', 'ADAS', 'Panoramic roof', 'Smart cockpit']
  },

  {
    id: 'deepal-l07',
    brand: 'Deepal',
    model: 'L07',
    year: 2026,
    price: 460000,
    type: 'Electric Sedan',
    fuel: 'Electric',
    transmission: 'Single-speed Automatic',
    engine: '185 kW Electric Motor',
    drive: 'RWD',
    range: '530 km',
    battery: '66.8 kWh Battery',
    charging: 'Fast DC Charging',
    seats: 5,
    mileage: 'New',
    colour: 'Silver',
    status: 'In Transit',
    warranty: '5 years / 150,000 km',
    description: 'An elegant electric sedan combining aerodynamic design and intelligent technology.',
    img: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1600&q=90',
    features: ['AR-HUD', 'Premium audio', 'ADAS', 'Smart cockpit', 'Fast charging']
  },


  // ================= CHERY =================

  {
    id: 'chery-omoda-e5',
    brand: 'Chery',
    model: 'Omoda E5',
    year: 2026,
    price: 440000,
    type: 'Electric SUV',
    fuel: 'Electric',
    transmission: 'Single-speed Automatic',
    engine: '150 kW Electric Motor',
    drive: 'FWD',
    range: '430 km',
    battery: '61 kWh Battery',
    charging: '80 kW DC Fast Charging',
    seats: 5,
    mileage: 'New',
    colour: 'White',
    status: 'In Stock',
    warranty: '6 years / 150,000 km',
    description: 'A stylish electric crossover blending modern design, comfort and efficient performance.',
    img: 'https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?auto=format&fit=crop&w=1600&q=90',
    features: ['Dual screens', '360° camera', 'ADAS', 'Wireless charging', 'Panoramic roof']
  },

  {
    id: 'chery-tiggo-8-csh',
    brand: 'Chery',
    model: 'Tiggo 8 CSH',
    year: 2026,
    price: 580000,
    type: 'Plug-in Hybrid SUV',
    fuel: 'Plug-in Hybrid',
    transmission: 'Hybrid Transmission',
    engine: '1.5L Turbo Hybrid',
    drive: 'FWD',
    range: '1,200 km Combined',
    battery: '19.3 kWh Battery',
    charging: 'AC + DC Charging',
    seats: 7,
    mileage: 'New',
    colour: 'Black',
    status: 'In Transit',
    warranty: '6 years / 150,000 km',
    description: 'A premium seven-seat plug-in hybrid SUV built for family comfort and long-distance travel.',
    img: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1600&q=90',
    features: ['7 seats', 'Panoramic roof', 'Sony audio', '360° camera', 'ADAS']
  },


  // ================= NETA =================

  {
    id: 'neta-x',
    brand: 'Neta',
    model: 'X',
    year: 2026,
    price: 360000,
    type: 'Electric SUV',
    fuel: 'Electric',
    transmission: 'Single-speed Automatic',
    engine: '120 kW Electric Motor',
    drive: 'FWD',
    range: '480 km',
    battery: '63 kWh Battery',
    charging: 'Fast DC Charging',
    seats: 5,
    mileage: 'New',
    colour: 'White',
    status: 'In Stock',
    warranty: '5 years / 150,000 km',
    description: 'A value-focused electric SUV offering excellent range and modern technology.',
    img: 'https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?auto=format&fit=crop&w=1600&q=90',
    features: ['Large touchscreen', '360° camera', 'ADAS', 'Wireless charging', 'Smart key']
  },

  {
    id: 'neta-aya',
    brand: 'Neta',
    model: 'Aya',
    year: 2026,
    price: 240000,
    type: 'Electric Hatchback',
    fuel: 'Electric',
    transmission: 'Single-speed Automatic',
    engine: '70 kW Electric Motor',
    drive: 'FWD',
    range: '318 km',
    battery: '40 kWh Battery',
    charging: 'DC Fast Charging',
    seats: 5,
    mileage: 'New',
    colour: 'Blue',
    status: 'In Stock',
    warranty: '5 years / 150,000 km',
    description: 'An affordable compact electric car ideal for efficient urban transportation.',
    img: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1600&q=90',
    features: ['Digital dashboard', 'Touchscreen', 'Reverse camera', 'Smart connectivity', 'Fast charging']
  },


  // ================= VOYAH =================

  {
    id: 'voyah-free',
    brand: 'Voyah',
    model: 'Free',
    year: 2026,
    price: 750000,
    type: 'Luxury Electric SUV',
    fuel: 'Electric',
    transmission: 'Single-speed Automatic',
    engine: '360 kW Dual Motor',
    drive: 'AWD',
    range: '500 km',
    battery: '100 kWh Battery',
    charging: 'Fast DC Charging',
    seats: 5,
    mileage: 'New',
    colour: 'Black',
    status: 'Reserved',
    warranty: '5 years / 150,000 km',
    description: 'A premium luxury electric SUV combining powerful performance with advanced comfort technology.',
    img: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=1600&q=90',
    features: ['Air suspension', 'Massage seats', 'Premium audio', 'Panoramic roof', 'Advanced ADAS']
  },

  {
    id: 'voyah-dream',
    brand: 'Voyah',
    model: 'Dream',
    year: 2026,
    price: 950000,
    type: 'Luxury Electric MPV',
    fuel: 'Electric',
    transmission: 'Single-speed Automatic',
    engine: '320 kW Dual Motor',
    drive: 'AWD',
    range: '500 km',
    battery: '108 kWh Battery',
    charging: 'Fast DC Charging',
    seats: 7,
    mileage: 'New',
    colour: 'Black',
    status: 'In Transit',
    warranty: '5 years / 150,000 km',
    description: 'A flagship luxury electric MPV offering executive-level comfort for families and business travel.',
    img: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=90',
    features: ['Executive captain seats', 'Massage seats', 'Premium audio', 'Panoramic roof', 'Air suspension']
  }
];

/*export const money = (value: number) =>
  `GH₵ ${value.toLocaleString("en-GH")}`;*/

export const getCar = (id: string) =>
  cars.find((car) => car.id === id);