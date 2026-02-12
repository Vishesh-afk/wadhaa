import { 
  Sparkles, 
  Droplets, 
  Trash2, 
  UtensilsCrossed, 
  ShieldCheck, 
  Factory,
  Zap,
  Waves
} from 'lucide-react';

export const productsData = [
  {
    category: "Detergent Powder",
    id: "detergent-powder",
    icon: Sparkles,
    description: "Superior stain removal and fabric care formulations.",
    products: [
      {
        id: "wadha-detergent-powder-1kg",
        name: "Detergent Powder 1 Kg – Wadha",
        price: "Rs. 55.10 / Kg",
        moq: "200,000 Kg",
        desc: "With our vast experience and in-depth industry knowledge, we are engaged in offering a quality-assured range of Wadha Detergent Powder. The product provides effective cleaning performance and is suitable for daily laundry use.",
        specs: { 
          Brand: "Wadha", 
          Grade: "Medium", 
          Fragrance: "Lemon", 
          Color: "White", 
          Weight: "1 Kg", 
          Packaging: "Packet", 
          PackSize: "500 gm",
          Usage: "Laundry",
          Delivery: "3 Days",
          PackDetails: "Pouch Packing"
        }
      },
      {
        id: "toto-detergent-powder-1kg",
        name: "1 Kg TOTO Detergent Powder",
        price: "Rs. 39.17 / Pack",
        moq: "5,000 Packs",
        desc: "Best quality product in its segment. Superior performance compared to other detergent powders in the same price range. Comparable to detergent powders priced between Rs. 70–80. MRP: Rs. 60/-",
        specs: { 
          Brand: "Wheel", 
          Size: "1 Kg", 
          Color: "White", 
          Fragrance: "Lime", 
          Packaging: "Pouch", 
          Usage: "Laundry",
          ShelfLife: "9 Months",
          Origin: "Made in India",
          Capacity: "1000 Ton",
          Delivery: "5 Days",
          AvailableSizes: "2 Kg, 1 Kg, 500 gm, 350 gm"
        }
      },
      {
        id: "wadha-detergent-powder-5kg",
        name: "Detergent Washing Powder – 5 Kg",
        price: "Rs. 373.83 / Piece",
        moq: "25,000 Pieces",
        desc: "WADHA detergent powders ensure superior cleaning performance. Manufactured under hygienic conditions using a precise blend of Borax, Washing Soda, Bleach, Builders, and Perfumes, ensuring long shelf life and consistent effectiveness.",
        specs: { 
          Brand: "Wadha", 
          Weight: "5 Kg", 
          Grade: "Premium", 
          PackSize: "5 Kg",
          ShelfLife: "9 Months",
          Usage: "Laundry",
          Color: "White",
          Origin: "Made in India",
          KeyFeatures: "Color Safe, Enzymatic Formula, Germ Protection, Strong Stain Removal, Suitable for Hard Water, Brightening Action",
          Capacity: "2,500,000",
          Delivery: "5 Days",
          Packaging: "Pouch"
        }
      }
    ]
  },
  {
    category: "Detergent Cake",
    id: "detergent-cake",
    icon: Zap,
    description: "Powerful cleaning bars for hand-wash laundry.",
    products: [
      {
        id: "wadha-mahabar-detergent-cake-240g",
        name: "Detergent Cake 240 g – WADHA MAHABAR",
        price: "Rs. 7.85 / Piece",
        moq: "10,000 Pieces",
        desc: "Backed by rich industry experience, we are actively engaged in offering a premium quality 240 g Detergent Cake (Mahabar). It is known for strong stain-removal performance and is recognized as one of the largest cake sizes available in the market.",
        specs: { 
          Brand: "Wadha", 
          Weight: "250 gm", 
          PackSize: "240 g",
          Shape: "Rectangle", 
          Fragrance: "Lemon", 
          pHValue: "10", 
          Moisture: "3%",
          StainRemoval: "Yes",
          PackContains: "50 Pieces" 
        }
      },
      {
        id: "wadha-detergent-cake-240g",
        name: "Detergent Cake 240 g – WADHA",
        price: "Rs. 6.65 / Piece",
        moq: "25,000 Pieces",
        desc: "We are among the reputed organizations engaged in offering an optimum quality 240 g Detergent Cake with Rs. 10 MRP, suitable for both handwash and regular laundry needs.",
        specs: { 
          Brand: "Wadha", 
          Weight: "250 gm",
          PackSize: "240 gm",
          Shape: "Rectangle",
          Color: "Blue", 
          Fragrance: "Jasmine, Citrus", 
          Usage: "Cloth Washing",
          PackQty: "60 Pieces",
          PackType: "Box",
          Form: "Solid",
          pHValue: "10", 
          KeyFeatures: "Gentle on Hands and Clothes, Non-Sogging Formula, High Lather, Removes Tough Stains",
          Capacity: "10 Ton",
          Delivery: "10 Days",
          Packaging: "Standard Size 240 g"
        }
      },
      {
        id: "wadha-detergent-cake-110g",
        name: "Detergent Cake 110 g – WADHA",
        price: "Rs. 3.33 / Piece",
        moq: "50,000 Pieces",
        desc: "We offer a high-quality 110 g Detergent Cake with Rs. 5 MRP, specially designed for effective cleaning. Known as a large-size cake in its category, it delivers excellent performance and durability.",
        specs: { 
          Brand: "Wadha", 
          PackSize: "115 gm", 
          Shape: "Rectangle",
          Color: "Blue", 
          Fragrance: "Lemon", 
          Form: "Bar",
          ShelfLife: "2 Years", 
          Capacity: "100 Ton",
          Delivery: "5 Days" 
        }
      }
    ]
  },
  {
    category: "Toilet Cleaner",
    id: "toilet-cleaner",
    icon: Droplets,
    description: "Kill 99.9% germs with our high-viscosity blue formula.",
    products: [
      {
        id: "wadha-toilet-cleaner-500ml",
        name: "Toilet Cleaner – WADHA (500 ml)",
        price: "Rs. 45.45 / Bottle",
        moq: "1,000 Bottles",
        desc: "Backed by in-depth industry knowledge, we are engaged in offering a high-quality liquid toilet cleaner that effectively removes stains, kills germs, and ensures long-lasting freshness.",
        specs: { 
          Brand: "Wadha", 
          Form: "Liquid",
          Color: "Blue",
          PackSize: "500 ml",
          PackType: "Bottle",
          BottleMat: "HDPE",
          pHRange: "1–2", 
          Viscosity: "3000 cPs", 
          Biodegradable: "Yes", 
          Usage: "Toilet Cleaning",
          CartonQty: "24 Bottles", 
          Capacity: "50 Ton",
          Delivery: "3 Days",
          AvailablePacks: "500 ml, 5 L, 50 L"
        }
      },
      {
        id: "wadha-toilet-cleaner-200ml",
        name: "Toilet Cleaner – WADHA (200 ml)",
        price: "Rs. 23.64 / Bottle",
        desc: "An effective compact-size toilet cleaner, ideal for household and travel use, delivering powerful cleaning action in a convenient bottle.",
        specs: { 
          Brand: "Wadha", 
          Form: "Liquid", 
          Color: "Blue", 
          PackType: "Bottle",
          PackSize: "200 ml",
          Usage: "Toilet Cleaning"
        }
      },
      {
        id: "wadha-toilet-cleaner-5l",
        name: "Toilet Cleaner – WADHA (5 Litre)",
        price: "Rs. 288 / Bottle",
        desc: "Ideal for commercial and bulk usage, the 5-litre Wadha Toilet Cleaner provides powerful stain removal and hygiene maintenance at an economical cost.",
        specs: { 
          Brand: "Wadha", 
          Form: "Liquid",
          Color: "Blue",
          PackSize: "5 L", 
          PackType: "Can", 
          Usage: "Toilet Cleaning",
          Origin: "Made in India" 
        }
      }
    ]
  },
  {
    category: "Liquid Dishwash",
    id: "liquid-dishwash",
    icon: UtensilsCrossed,
    description: "Grease-cutting lemon formula for crystal clear dishes.",
    products: [
      {
        id: "wadha-dishwash-liquid-250ml",
        name: "Dishwash Liquid – WADHA (250 ml)",
        price: "Rs. 28.24 / Bottle",
        moq: "10,000 Bottles",
        desc: "WADHA Dishwash Liquid is among the best in its segment, delivering powerful grease-cutting action while being gentle on utensils. Offered at affordable rates, it ensures high cleaning efficiency with low consumption.",
        specs: { 
          Brand: "Wadha", 
          Usage: "Dish Washing",
          PackSize: "250 ml",
          Fragrance: "Lemon", 
          PackType: "Plastic Bottle", 
          Form: "Liquid",
          DilutionRate: "1 : 10"
        }
      },
      {
        id: "wadha-dishwash-liquid-500ml",
        name: "Dishwash Liquid – WADHA (500 ml)",
        price: "Rs. 75 / Bottle",
        desc: "The 500 ml variant is ideal for regular household usage, offering long-lasting performance and effective cleaning results.",
        specs: { 
          Brand: "Wadha", 
          Usage: "Dish Washing",
          PackSize: "500 ml",
          PackType: "Can",
          Form: "Liquid",
          Color: "Yellow", 
          Origin: "Made in India" 
        }
      },
      {
        id: "wadha-dishwash-liquid-5l",
        name: "Dishwash Liquid – WADHA (5 Litre)",
        price: "Rs. 288 / Bottle",
        desc: "Designed for bulk and commercial use, the 5-litre WADHA Dishwash Liquid offers superior grease removal at an economical cost, making it ideal for hotels, restaurants, and large households.",
        specs: { 
          Brand: "Wadha", 
          Usage: "Dish Washing",
          PackSize: "5 L", 
          PackType: "Bottle",
          Form: "Liquid",
          Fragrance: "Floral", 
          Origin: "Made in India" 
        }
      }
    ]
  },
  {
    category: "Liquid Phenyl",
    id: "liquid-phenyl",
    icon: Waves,
    description: "Disinfectant phenyls for hygienic living spaces.",
    products: [
      {
        id: "wadha-white-phenyl-5l",
        name: "White Phenyl – WADHA (5 Litre)",
        price: "Rs. 173.86 / Can",
        moq: "250 Cans",
        desc: "We are among the renowned organizations engaged in offering a premium quality range of 5 Litre White Phenyl. The product provides excellent cleaning performance, pleasant fragrance, and is suitable for homes, offices, hospitals, and commercial spaces.",
        specs: { 
          Brand: "Wadha", 
          Form: "Liquid",
          CleanType: "Floor Cleaning",
          Usage: "Floor Cleaning",
          PackSize: "5 L", 
          PackType: "Bottle",
          Colors: "Pink, Orange, Green, White", 
          QtyPerPack: "4 Bottles",
          Solubility: "Soluble in Water", 
          Origin: "Gondia" 
        }
      },
      {
        id: "wadha-phenyl-1l",
        name: "Phenyl – WADHA (1 Litre)",
        price: "Rs. 30.50 / Litre",
        moq: "5,000 Litres",
        desc: "Leveraging extensive industry expertise, we offer a broad range of WADHA Phenyl, formulated for effective cleaning, hygiene, and long-lasting freshness across multiple surfaces.",
        specs: { 
          Brand: "Wadha", 
          Form: "Liquid", 
          PackSize: "1 Litre",
          PackType: "Bottle",
          Color: "4 Variants",
          CleanType: "Floor, Kitchen & Toilet",
          Fragrance: "Pine", 
          ShelfLife: "2 Years", 
          pHValue: "7", 
          Purity: "100%",
          Solubility: "Soluble in Water",
          QtyPerPack: "12 Bottles",
          Capacity: "52 Ton",
          AvailablePacks: "1 L, 5 L, 20 L, 50 L & 200 L"
        }
      }
    ]
  },
  {
    category: "Third Party MFG",
    id: "contract-manufacturing",
    icon: Factory,
    description: "Custom contract manufacturing for your home care brand.",
    products: [
      {
        id: "contract-manufacturing-service",
        name: "Contract Manufacturing",
        price: "Consultation Required",
        desc: "Swami Industries offers professional end-to-end contract manufacturing services for home cleaning and industrial chemical solutions. Our state-of-the-art facilities and quality control ensure your brand meets the highest standards.",
        specs: { 
          Sector: "Home Care & Industrial", 
          Grade: "Premium / Customized", 
          Capacity: "Scalable",
          Services: "Formulation, Packaging, Branding",
          Location: "Gondia, India"
        }
      }
    ]
  }
];
