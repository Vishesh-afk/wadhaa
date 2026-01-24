import { 
  Sparkles, 
  Droplets, 
  Disc, 
  UtensilsCrossed, 
  Zap, 
  Factory 
} from 'lucide-react';

export const productsData = [
  {
    title: "Laundry Care",
    icon: Sparkles,
    items: [
      { name: "Detergent Powder", desc: "High efficiency formula for tough stains", href: "/products/detergent-powder" },
      { name: "Detergent Cake", desc: "Long lasting washing bars", href: "/products/detergent-cake" },
      { name: "Fabric Conditioner", desc: "Softness and fragrance booster", href: "/products/fabric-conditioner" },
      { name: "Liquid Detergent", desc: "Gentle on clothes, tough on dirt", href: "/products/liquid-detergent" }
    ]
  },
  {
    title: "Surface Cleaners",
    icon: Droplets,
    items: [
      { name: "Toilet Cleaner", desc: "Kills 99.9% germs", href: "/products/toilet-cleaner" },
      { name: "Liquid Phenyl", desc: "Hospital grade disinfectant", href: "/products/phenyl" },
      { name: "Floor Cleaner", desc: "Streak-free shine", href: "/products/floor-cleaner" },
      { name: "Glass Cleaner", desc: "Crystal clear surfaces", href: "/products/glass-cleaner" }
    ]
  },
  {
    title: "Dish Care",
    icon: UtensilsCrossed,
    items: [
      { name: "Liquid Dishwash", desc: "Lemon power grease cutter", href: "/products/liquid-dishwash" },
      { name: "Dish Wash Bar", desc: "Scrub pad free cleaning", href: "/products/dish-wash-bar" },
      { name: "Dishwasher Gel", desc: "Automatic machine liquid", href: "/products/dishwasher-gel" }
    ]
  },
  {
    title: "Industrial & Bulk",
    icon: Factory,
    items: [
      { name: "Third Party Mfg", desc: "Contract manufacturing services", href: "/services/manufacturing" },
      { name: "Bulk Chemicals", desc: "Raw materials supply", href: "/products/bulk" },
      { name: "Institutional Packs", desc: "50L and 200L drums", href: "/products/institutional" }
    ]
  }
];

export const companyData = [
  { name: "About Us", href: "/about" },
  { name: "Our Process", href: "/process" },
  { name: "Certifications", href: "/certifications" },
  { name: "Sustainability", href: "/sustainability" }
];
