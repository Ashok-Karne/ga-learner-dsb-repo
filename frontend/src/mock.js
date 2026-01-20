// Mock data for Maitreyee Hydro Systems

export const companyInfo = {
  name: "Maitreyee Hydro Systems",
  tagline: "Your Trusted Partner in Hydro Solutions Since 2006",
  description: "We are a highly popular organization engaged in manufacturing and trading a wide range of premium quality hydro systems including Steam Bath Generators, Sauna Bath Systems, Swimming Pool Equipment, and Hydro Pneumatic Pumps.",
  yearEstablished: "2006",
  natureOfBusiness: "Manufacturer",
  legalStatus: "Proprietorship",
  annualTurnover: "₹40 Lakh",
  gstNo: "27ACJPK5215E1ZT",
  gstRegistrationDate: "01-07-2017",
  email: "info@maitreyeehydro.com",
  phone: "+91-8046077653",
  address: "Unit No. 345, B Wing, Orchard Road Mall, Royal Palms, Aarey Milk Colony, Goregaon East, Mumbai - 400065, Maharashtra, India",
  ceo: "Ashok Karne"
};

export const categories = [
  { id: 1, name: "All Products", slug: "all" },
  { id: 2, name: "Steam Bath Systems", slug: "steam-bath" },
  { id: 3, name: "Sauna Bath Systems", slug: "sauna-bath" },
  { id: 4, name: "Swimming Pool Equipment", slug: "swimming-pool" },
  { id: 5, name: "Booster Pumps", slug: "booster-pumps" },
  { id: 6, name: "Hydro Pneumatic Systems", slug: "hydro-pneumatic" }
];

export const products = [
  {
    id: 1,
    name: "Swimming Pool Cleaners",
    category: "swimming-pool",
    price: 7000,
    priceUnit: "Piece",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=500&q=80",
    description: "High-quality pool cleaning equipment for efficient maintenance. Automatic suction-based cleaning system for residential and commercial pools.",
    features: ["Automatic cleaning", "Energy efficient", "Durable construction", "Easy maintenance"]
  },
  {
    id: 2,
    name: "Pressure Booster Pump",
    category: "booster-pumps",
    price: 12000,
    priceUnit: "Piece",
    image: "https://images.unsplash.com/photo-1581092918484-8313e1b2524e?w=500&q=80",
    description: "Reliable pressure booster pump for domestic and commercial applications. Ensures consistent water pressure throughout your building.",
    features: ["High pressure output", "Silent operation", "Long lifespan", "Low power consumption"]
  },
  {
    id: 3,
    name: "Steam Bath Panel",
    category: "steam-bath",
    price: 15000,
    priceUnit: "Piece",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=500&q=80",
    description: "Advanced digital control panel for steam bath systems with temperature and time controls.",
    features: ["Digital display", "Temperature control", "Timer function", "Safety features"]
  },
  {
    id: 4,
    name: "Steam Shower Generator",
    category: "steam-bath",
    price: 24000,
    priceUnit: "Piece",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&q=80",
    description: "Premium steam generator for luxury steam shower experiences. Perfect for residential and spa applications.",
    features: ["Quick steam generation", "Auto-flush system", "Corrosion resistant", "Energy efficient"]
  },
  {
    id: 5,
    name: "Mitsu Booster Pump",
    category: "booster-pumps",
    price: 12000,
    priceUnit: "Piece",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=500&q=80",
    description: "High-performance Mitsu brand booster pump with superior build quality and reliability.",
    features: ["Japanese technology", "Whisper quiet", "Robust design", "Easy installation"]
  },
  {
    id: 6,
    name: "Commercial Sauna Bath",
    category: "sauna-bath",
    price: 150000,
    priceUnit: "Unit",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500&q=80",
    description: "Complete commercial sauna bath system with premium wood finish. Ideal for gyms, spas, and wellness centers.",
    features: ["Premium wood construction", "Digital controls", "Energy efficient heaters", "Custom sizes available"]
  },
  {
    id: 7,
    name: "Mitsu Hydro Pneumatic Pump System",
    category: "hydro-pneumatic",
    price: 200000,
    priceUnit: "Piece",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500&q=80",
    description: "Complete hydro pneumatic pumping system for buildings and complexes. Ensures constant water pressure across all floors.",
    features: ["Automatic operation", "Pressure regulation", "Multiple pump configuration", "Control panel included"]
  },
  {
    id: 8,
    name: "Swimming Pool Filtration Pump",
    category: "swimming-pool",
    price: 125000,
    priceUnit: "Piece",
    image: "https://images.unsplash.com/photo-1519235624215-85175d5e0622?w=500&q=80",
    description: "High-capacity pool filtration system with pump for crystal clear water. Suitable for medium to large pools.",
    features: ["Multi-stage filtration", "Energy saving motor", "Easy filter cleaning", "Corrosion resistant"]
  }
];

export const stats = [
  { label: "Years of Experience", value: "18+" },
  { label: "Happy Clients", value: "500+" },
  { label: "Products Range", value: "50+" },
  { label: "Annual Turnover", value: "₹40L+" }
];

export const testimonials = [
  {
    id: 1,
    name: "Divya",
    location: "Bengaluru, Karnataka",
    rating: 5,
    review: "Excellent quality Hydro Pneumatic Pumps. Very satisfied with the product and service.",
    productName: "Hydro Pneumatic Pumps",
    date: "04-July-19"
  }
];