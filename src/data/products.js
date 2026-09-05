import {
  Sparkles,
  Droplets,
  UtensilsCrossed,
  ShieldCheck,
  Factory,
  Zap,
  Waves,
  Wind
} from 'lucide-react';

// ── Product Videos ────────────────────────────────────────────────────────────
import vidWadhaDetergent from '../assets/WADHA_detergent_commercial_202607211448.mp4';
import vidTotoDetergent  from '../assets/TOTO_detergent_commercial_202607211447.mp4';
import vidTotoMatic      from '../assets/TOTO_Matic_Liquid_commercial_202607211447.mp4';
import vidDetergentCake  from '../assets/Detergent_cake_cleaning_soiled_s…_202607211447.mp4';
import vidToiletCleaner  from '../assets/WADHA_Toilet_Cleaner_10X_Power_202607211447.mp4';
import vidDishwashLiquid from '../assets/Dishwash_Power_Gel_cleaning_grease_202607211447.mp4';
import vidTotoDishwash   from '../assets/TOTO_Dishwash_Liquid_commercial_202607211447.mp4';
import vidDishwashBar    from '../assets/WADHA_Dishwash_Bar_commercial_202607211447.mp4';
import vidPhenyl         from '../assets/Phenyl_floor_cleaner_commercial_202607211447.mp4';
import vidGlassCleaner   from '../assets/WADHA_Glass_Cleaner_commercial_202607211450.mp4';

// ── WADHA Detergent Powder — single shared pack image for all sizes ───────────
import wadhaPowderImg from '../assets/wadha powder new.jpg';

// ── TOTO Detergent Powder — single shared pack image for all sizes ────────────
import totoPowderImg from '../assets/toto new.jpg';

// ── WADHA Detergent Cake / Bar (rin bar folder = WADHA Detergent Cake) ─────────
import wdhaCake_1 from '../assets/wadha/rin bar/b1.png';
import wdhaCake_2 from '../assets/wadha/rin bar/b2.png';
import wdhaCake_3 from '../assets/wadha/rin bar/b3.png';
import wdhaCake_4 from '../assets/wadha/rin bar/b4.png';
import wdhaCake_5 from '../assets/wadha/rin bar/hf_20260720_131049_fdea2ae9-a9d9-4e77-8e96-6e71b7f7b30c.png';
import wdhaCake_6 from '../assets/wadha/rin bar/hf_20260720_131114_0d9f6ee0-dc9b-408c-8300-b1b09b6f976a.png';

// ── TOTO Matic Liquid (toto liq folder = TOTO Matic Liquid) ───────────────────
import totoLiq_1 from '../assets/wadha/toto liq/t1.png';
import totoLiq_2 from '../assets/wadha/toto liq/t2.png';
import totoLiq_3 from '../assets/wadha/toto liq/t3.png';
import totoLiq_4 from '../assets/wadha/toto liq/t4.png';
import totoLiq_5 from '../assets/wadha/toto liq/t5.png';
import totoLiq_6 from '../assets/wadha/toto liq/hf_20260720_131452_79e4ddd0-1be9-478c-9e62-4823c992a65b.png';
import totoLiq_7 from '../assets/wadha/toto liq/hf_20260720_131507_db3f7ab2-9403-4d00-b62f-782c8d86f130.png';

// ── WADHA Toilet Cleaner (harpic folder = WADHA Toilet Cleaner) ───────────────
import toilet_1 from '../assets/wadha/harpic/hf_20260720_134321_497fffdc-5329-417b-8e2d-7aa66c889d99.png';
import toilet_2 from '../assets/wadha/harpic/hf_20260720_134340_ec70e1d5-26fc-4947-a273-a6bfe3958d7c.png';
import toilet_3 from '../assets/wadha/harpic/hf_20260720_134354_878da122-d8b0-4040-baef-6de75e2ca8ca.png';
import toilet_4 from '../assets/wadha/harpic/hf_20260720_134409_cf345c3a-6796-4a9d-9a10-34b93863a140.png';
import toilet_5 from '../assets/wadha/harpic/hf_20260720_134433_bc418742-4912-47ff-a883-5175aa1c1b47.png';

// ── WADHA Dishwash Liquid/Bottle (dish bottle folder = WADHA Dishwash bottle) ─
import wdhaDish_1 from '../assets/wadha/dish bottle/d1.png';
import wdhaDish_2 from '../assets/wadha/dish bottle/d2.png';
import wdhaDish_3 from '../assets/wadha/dish bottle/d3.png';
import wdhaDish_4 from '../assets/wadha/dish bottle/d4.png';
import wdhaDish_5 from '../assets/wadha/dish bottle/hf_20260720_132748_c9fbd681-004f-4c74-affd-c61b1bca4917.png';

// ── TOTO Dishwash Liquid (dishwash liq folder = TOTO Dishwash) ────────────────
import totoDish_1 from '../assets/wadha/dishwash liq/hf_20260720_135654_7a06ee63-5694-4698-9eed-0434f0703f38.png';
import totoDish_2 from '../assets/wadha/dishwash liq/hf_20260720_135709_ae2049d3-1e27-4144-82fb-6a45c44fd1de.png';
import totoDish_3 from '../assets/wadha/dishwash liq/hf_20260720_135735_335e67fe-86c9-4d4b-832d-5168ac6fc56a.png';
import totoDish_4 from '../assets/wadha/dishwash liq/hf_20260720_135810_f356302c-7df0-4831-b448-c97b08788735.png';
import totoDish_5 from '../assets/wadha/dishwash liq/hf_20260720_135824_93430adf-0558-49a2-bee8-47d419e3a4b0.png';

// ── WADHA Dishwash Bar (dishwash bar folder = WADHA Dishwash Bar) ─────────────
import dishBar_1 from '../assets/wadha/dishwash bar/hf_20260720_134810_32e303c1-15c9-4a88-9f3a-b30ea85e4f33.png';
import dishBar_2 from '../assets/wadha/dishwash bar/hf_20260720_134833_e82df7da-7d8e-4711-94cf-8ab0b42a8091.png';
import dishBar_3 from '../assets/wadha/dishwash bar/hf_20260720_134849_ae8b7d71-9e78-4248-83e1-bfd60f894622.png';
import dishBar_4 from '../assets/wadha/dishwash bar/hf_20260720_134908_3766d8ed-6e0f-4a54-9fa0-84631269270b.png';
import dishBar_5 from '../assets/wadha/dishwash bar/hf_20260720_134926_55f58c30-6f7a-483c-bd9d-69f8807709d8.png';
import dishBar_6 from '../assets/wadha/dishwash bar/hf_20260720_134941_93403e89-dd1a-490f-aeb0-331d86fc99c8.png';

// ── WADHA Phenyl (phny folder = WADHA Phenyl) ─────────────────────────────────
import phenyl_1 from '../assets/wadha/phny/c1.png';
import phenyl_2 from '../assets/wadha/phny/c2.png';
import phenyl_3 from '../assets/wadha/phny/c3.png';
import phenyl_4 from '../assets/wadha/phny/c4.png';
import phenyl_5 from '../assets/wadha/phny/c5.png';
import phenyl_6 from '../assets/wadha/phny/hf_20260720_131745_e247caac-58dc-4e8d-8c3e-248d100043ae.png';

// ── WADHA Glass Cleaner (colin folder = WADHA Glass Cleaner) ──────────────────
import glass_1 from '../assets/wadha/colin/hf_20260720_133639_ff7dd8f5-93cb-4d4e-9396-c3712a3eb66a.png';
import glass_2 from '../assets/wadha/colin/hf_20260720_133654_be768396-bfd7-4cae-b01f-88280ea806ad.png';
import glass_3 from '../assets/wadha/colin/hf_20260720_133711_fda8b37d-c677-46ce-9bd6-ee539ac2bc18.png';
import glass_4 from '../assets/wadha/colin/hf_20260720_133730_2006ac0f-273e-4325-a4ad-cacc89d69022.png';
import glass_5 from '../assets/wadha/colin/hf_20260720_133746_13f48b14-bf64-4462-af5d-c1339302e449.png';

// ─────────────────────────────────────────────────────────────────────────────
// PRODUCTS DATA — matches the WADHA PRODUCT CATALOG exactly
// Category order: Detergent Powder → Detergent Cake → Toilet Cleaner
//                 → Dishwash Liquid → Dishwash Bar → Floor Cleaner → Glass Cleaner
//                 → Contract Manufacturing
// ─────────────────────────────────────────────────────────────────────────────
export const productsData = [

  // ── 1. DETERGENT POWDER ────────────────────────────────────────────────────
  {
    category: "Detergent Powder",
    id: "detergent-powder",
    icon: Sparkles,
    description: "Superior stain removal and fabric care formulations.",
    products: [
      {
        id: "wadha-detergent-powder-5kg-artical",
        name: "Detergent Washing Powder – 5 Kg (Artical)",
        price: "Rs. 428.35 / Piece",
        moq: "600 Pieces",
        images: [wadhaPowderImg, vidWadhaDetergent],
        desc: "WADHA detergent powders ensure superior cleaning performance. Manufactured under hygienic conditions using a precise blend of Borax, Washing Soda, Bleach, Builders, and Perfumes, ensuring long shelf life and consistent effectiveness.",
        specs: {
          Brand: "Wadha",
          Weight: "5 Kg",
          Variant: "Artical",
          "Quality Grade": "Premium",
          "Packaging Size": "5 Kg",
          "Shelf Life": "2 Years",
          "Usage/Application": "Laundry",
          Color: "White",
          "Country of Origin": "Made in India",
          "Key Features": "Color Safe, Enzymatic Formula, Germ Protection, Strong Stain Removal, Hard Water Formula, Brightening Action",
          "Production Capacity": "25,00,000",
          "Delivery Time": "5 Days",
          "Packaging Details": "Pouch"
        }
      },
      {
        id: "wadha-detergent-powder-5kg-plan",
        name: "Detergent Washing Powder – 5 Kg (Plan)",
        price: "Rs. 295.95 / Piece",
        moq: "600 Pieces",
        images: [wadhaPowderImg, vidWadhaDetergent],
        desc: "WADHA 5 Kg detergent powder in the Plan grade — the same trusted formula offered at an economical rate for value-conscious buyers. Manufactured under hygienic conditions for consistent, dependable cleaning.",
        specs: {
          Brand: "Wadha",
          Weight: "5 Kg",
          Variant: "Plan",
          "Quality Grade": "Standard",
          "Packaging Size": "5 Kg",
          "Shelf Life": "2 Years",
          "Usage/Application": "Laundry",
          Color: "White",
          "Country of Origin": "Made in India",
          "Key Features": "Color Safe, Enzymatic Formula, Germ Protection, Strong Stain Removal, Hard Water Formula, Brightening Action",
          "Production Capacity": "25,00,000",
          "Delivery Time": "5 Days",
          "Packaging Details": "Pouch"
        }
      },
      {
        id: "wadha-detergent-powder-3kg-artical",
        name: "Detergent Washing Powder – 3 Kg (Artical)",
        price: "Rs. 257.01 / Piece",
        moq: "600 Pieces",
        images: [wadhaPowderImg, vidWadhaDetergent],
        desc: "WADHA 3 Kg detergent powder delivers the same superior cleaning performance in a mid-size economy pack. Manufactured under hygienic conditions using a precise blend of Borax, Washing Soda, Bleach, Builders, and Perfumes for consistent, long-lasting results.",
        specs: {
          Brand: "Wadha",
          Weight: "3 Kg",
          Variant: "Artical",
          "Quality Grade": "Premium",
          "Packaging Size": "3 Kg",
          "Shelf Life": "2 Years",
          "Usage/Application": "Laundry",
          Color: "White",
          "Country of Origin": "Made in India",
          "Key Features": "Color Safe, Enzymatic Formula, Germ Protection, Strong Stain Removal, Hard Water Formula, Brightening Action",
          "Delivery Time": "5 Days",
          "Packaging Details": "Pouch"
        }
      },
      {
        id: "wadha-detergent-powder-3kg-plan",
        name: "Detergent Washing Powder – 3 Kg (Plan)",
        price: "Rs. 177.57 / Piece",
        moq: "600 Pieces",
        images: [wadhaPowderImg, vidWadhaDetergent],
        desc: "WADHA 3 Kg detergent powder in the Plan grade — the same dependable formula at an economical rate. Manufactured under hygienic conditions for consistent, long-lasting cleaning results.",
        specs: {
          Brand: "Wadha",
          Weight: "3 Kg",
          Variant: "Plan",
          "Quality Grade": "Standard",
          "Packaging Size": "3 Kg",
          "Shelf Life": "2 Years",
          "Usage/Application": "Laundry",
          Color: "White",
          "Country of Origin": "Made in India",
          "Key Features": "Color Safe, Enzymatic Formula, Germ Protection, Strong Stain Removal, Hard Water Formula, Brightening Action",
          "Delivery Time": "5 Days",
          "Packaging Details": "Pouch"
        }
      },
      {
        id: "wadha-detergent-powder-1kg",
        name: "Detergent Powder 1 Kg – Wadha",
        price: "Rs. 60.75 / Kg",
        moq: "1,000 Kg",
        images: [wadhaPowderImg, vidWadhaDetergent],
        desc: "With our vast experience and in-depth industry knowledge, we are engaged in offering a quality-assured range of Wadha Detergent Powder. The product provides effective cleaning performance and is suitable for daily laundry use.",
        specs: {
          Brand: "Wadha",
          "Quality Grade": "Medium",
          Fragrance: "Floral",
          Color: "White",
          Weight: "1 Kg",
          "Packaging Type": "Packet",
          "Packaging Size": "1 Kg",
          "Usage/Application": "Laundry",
          "Delivery Time": "3 Days",
          "Packaging Details": "Pouch Packing"
        }
      },
      {
        id: "wadha-detergent-powder-500g",
        name: "Detergent Powder 500 g – Wadha",
        price: "Rs. 30.93 / Pack",
        moq: "1,000 Packs",
        images: [wadhaPowderImg, vidWadhaDetergent],
        desc: "A convenient 500 g pack of Wadha Detergent Powder delivering effective cleaning performance for everyday laundry — ideal for small households and trial packs.",
        specs: {
          Brand: "Wadha",
          "Quality Grade": "Medium",
          Fragrance: "Floral",
          Color: "White",
          Weight: "500 g",
          "Packaging Type": "Packet",
          "Packaging Size": "500 g",
          "Usage/Application": "Laundry",
          "Delivery Time": "3 Days",
          "Packaging Details": "Pouch Packing"
        }
      },
      {
        id: "wadha-detergent-powder-110g",
        name: "Detergent Powder Rs.10 Thella (110 g) – Wadha",
        price: "Rs. 7.01 / Piece",
        moq: "5,000 Pieces",
        images: [wadhaPowderImg, vidWadhaDetergent],
        desc: "The Rs.10 Thella is a 110 g single-use sachet of Wadha Detergent Powder — a pocket-friendly pack that delivers reliable cleaning power for daily laundry needs.",
        specs: {
          Brand: "Wadha",
          "Quality Grade": "Medium",
          Fragrance: "Floral",
          Color: "White",
          Weight: "110 g",
          "Packaging Type": "Sachet",
          "Packaging Size": "110 g",
          MRP: "Rs. 10",
          "Usage/Application": "Laundry",
          "Delivery Time": "3 Days",
          "Packaging Details": "Pouch Packing"
        }
      },
      {
        id: "toto-detergent-powder-3-4kg",
        name: "TOTO Detergent Powder – 3.4 Kg",
        price: "Rs. 149.53 / Pack",
        moq: "100 Packs",
        images: [totoPowderImg, vidTotoDetergent],
        desc: "TOTO Detergent Powder in a value 3.4 Kg pack — best quality in its segment, with superior performance compared to other powders in the same price range. Available in multiple pack sizes: 3.4 Kg, 1.7 Kg, 850 g, 410 g & 275 g.",
        specs: {
          Brand: "Toto",
          Size: "3.4 Kg",
          Fragrance: "Lemon",
          "Shelf Life": "2 Years",
          "Available Packs": "3.4 Kg, 1.7 Kg, 850 g, 410 g, 275 g",
          Packaging: "Pouch",
          "Delivery Time": "3-5 Days"
        }
      },
      {
        id: "toto-detergent-powder-1-7kg",
        name: "TOTO Detergent Powder – 1.7 Kg",
        price: "Rs. 74.77 / Pack",
        moq: "100 Packs",
        images: [totoPowderImg, vidTotoDetergent],
        desc: "TOTO Detergent Powder in a 1.7 Kg pack — best quality in its segment, with superior performance compared to other powders in the same price range. Available in multiple pack sizes: 3.4 Kg, 1.7 Kg, 850 g, 410 g & 275 g.",
        specs: {
          Brand: "Toto",
          Size: "1.7 Kg",
          Fragrance: "Lemon",
          "Shelf Life": "2 Years",
          "Available Packs": "3.4 Kg, 1.7 Kg, 850 g, 410 g, 275 g",
          Packaging: "Pouch",
          "Delivery Time": "3-5 Days"
        }
      },
      {
        id: "toto-detergent-powder-850g",
        name: "TOTO Detergent Powder – 850 g",
        price: "Rs. 39.16 / Pack",
        moq: "100 Packs",
        images: [totoPowderImg, vidTotoDetergent],
        desc: "TOTO Detergent Powder in an 850 g pack — best quality in its segment, with superior performance compared to other powders in the same price range. Available in multiple pack sizes: 3.4 Kg, 1.7 Kg, 850 g, 410 g & 275 g.",
        specs: {
          Brand: "Toto",
          Size: "850 g",
          Fragrance: "Lemon",
          "Shelf Life": "2 Years",
          "Available Packs": "3.4 Kg, 1.7 Kg, 850 g, 410 g, 275 g",
          Packaging: "Pouch",
          "Delivery Time": "3-5 Days"
        }
      },
      {
        id: "toto-detergent-powder-410g",
        name: "TOTO Detergent Powder – 410 g",
        price: "Rs. 20.06 / Pack",
        moq: "100 Packs",
        images: [totoPowderImg, vidTotoDetergent],
        desc: "TOTO Detergent Powder in a 410 g pack — best quality in its segment, with superior performance compared to other powders in the same price range. Available in multiple pack sizes: 3.4 Kg, 1.7 Kg, 850 g, 410 g & 275 g.",
        specs: {
          Brand: "Toto",
          Size: "410 g",
          Fragrance: "Lemon",
          "Shelf Life": "2 Years",
          "Available Packs": "3.4 Kg, 1.7 Kg, 850 g, 410 g, 275 g",
          Packaging: "Pouch",
          "Delivery Time": "3-5 Days"
        }
      },
      {
        id: "toto-detergent-powder-275g",
        name: "TOTO Detergent Powder – 275 g",
        price: "Rs. 13.71 / Pack",
        moq: "100 Packs",
        images: [totoPowderImg, vidTotoDetergent],
        desc: "TOTO Detergent Powder in a 275 g pack — best quality in its segment, with superior performance compared to other powders in the same price range. Available in multiple pack sizes: 3.4 Kg, 1.7 Kg, 850 g, 410 g & 275 g.",
        specs: {
          Brand: "Toto",
          Size: "275 g",
          Fragrance: "Lemon",
          "Shelf Life": "2 Years",
          "Available Packs": "3.4 Kg, 1.7 Kg, 850 g, 410 g, 275 g",
          Packaging: "Pouch",
          "Delivery Time": "3-5 Days"
        }
      }
    ]
  },

  // ── 2. LIQUID DETERGENT (TOTO Matic) ─────────────────────────────────────
  {
    category: "Liquid Detergent",
    id: "liquid-detergent",
    icon: Waves,
    description: "Concentrated liquid formula for all machine types — top & front load.",
    products: [
      {
        id: "toto-matic-liquid-1-5l",
        name: "Toto Matic Liquid – 1.5 L",
        price: "Rs. 99 / Pack",
        moq: "5,000 Packs",
        images: [totoLiq_1, vidTotoMatic, totoLiq_2, totoLiq_3, totoLiq_4, totoLiq_5, totoLiq_6, totoLiq_7],
        desc: "TOTO Matic Liquid Detergent delivers superior cleaning performance for all machine types — both top load and front load. The high-quality formula protects fabric, leaves a long-lasting fragrance, and ensures spotless results every wash.",
        specs: {
          Brand: "Toto",
          Size: "1.5 Litre",
          MRP: "Rs. 99",
          Usage: "Top Load & Front Load Machines",
          Type: "Liquid",
          Fragrance: "Fresh",
          "Delivery Time": "3 Days"
        }
      }
    ]
  },

  // ── 3. DETERGENT CAKE ──────────────────────────────────────────────────────
  {
    category: "Detergent Cake",
    id: "detergent-cake",
    icon: Zap,
    description: "Powerful cleaning bars for hand-wash laundry.",
    products: [
      {
        id: "wadha-mahabar-240g",
        name: "Detergent Cake 240 g – WADHA MAHABAR",
        price: "Rs. 7.85 / Piece",
        moq: "10,000 Pieces",
        images: [wdhaCake_1, vidDetergentCake, wdhaCake_2, wdhaCake_3, wdhaCake_4, wdhaCake_5, wdhaCake_6],
        desc: "Backed by rich industry experience, we are actively engaged in offering a premium quality 240 g Detergent Cake (Mahabar). It is known for strong stain-removal performance and is recognized as one of the largest cake sizes available in the market.",
        specs: {
          Brand: "Wadha",
          Weight: "250 gm",
          "Packaging Size": "240 g",
          Shape: "Rectangle",
          Fragrance: "Lemon",
          "pH Value": "10",
          "Moisture Content": "3%",
          "Removes Tough Stains": "Yes",
          "Pack Contains": "50 Pieces"
        }
      },
      {
        id: "wadha-cake-240g",
        name: "Detergent Cake 200 g – WADHA",
        price: "Rs. 7.85 / Piece",
        moq: "25,000 Pieces",
        images: [wdhaCake_1, vidDetergentCake, wdhaCake_2, wdhaCake_3, wdhaCake_4, wdhaCake_5, wdhaCake_6],
        desc: "We are among the reputed organizations engaged in offering an optimum quality 200 g Detergent Cake with Rs. 10 MRP, suitable for both handwash and regular laundry needs.",
        specs: {
          Brand: "Wadha",
          Weight: "200 gm",
          "Packaging Size": "200 g",
          Shape: "Rectangle",
          Color: "Blue",
          Fragrance: "Jasmine, Citrus",
          MRP: "Rs. 10",
          "Use/Application": "Cloth Washing",
          "Soaps per Pack": "60 Pieces",
          "Packaging Type": "Box",
          "Form Type": "Solid",
          "pH Value": "10",
          "Key Features": "Gentle on Hands, Non-Sogging, High Lather, Removes Tough Stains",
          "Production Capacity": "10 Ton",
          "Delivery Time": "10 Days",
          "Packaging Details": "Standard Size 200 g"
        }
      },
      {
        id: "wadha-cake-110g",
        name: "Detergent Cake 95 g – WADHA",
        price: "Rs. 3.93 / Piece",
        moq: "50,000 Pieces",
        images: [wdhaCake_1, vidDetergentCake, wdhaCake_2, wdhaCake_3, wdhaCake_4, wdhaCake_5, wdhaCake_6],
        desc: "We offer a high-quality 95 g Detergent Cake with Rs. 5 MRP, specially designed for effective cleaning. It delivers excellent performance and durability at a pocket-friendly price.",
        specs: {
          Brand: "Wadha",
          "Packaging Size": "95 g",
          Shape: "Rectangle",
          Color: "Blue",
          Fragrance: "Lemon",
          Form: "Bar",
          MRP: "Rs. 5",
          "Shelf Life": "2 Years",
          "Production Capacity": "100 Ton",
          "Delivery Time": "5 Days"
        }
      }
    ]
  },

  // ── 4. TOILET CLEANER ─────────────────────────────────────────────────────
  {
    category: "Toilet Cleaner",
    id: "toilet-cleaner",
    icon: Droplets,
    description: "Kill 99.9% germs with our high-viscosity blue formula.",
    products: [
      {
        id: "wadha-toilet-cleaner-200ml",
        name: "Toilet Cleaner – WADHA (200 ml)",
        price: "Rs. 23.64 / Bottle",
        images: [toilet_1, vidToiletCleaner, toilet_2, toilet_3, toilet_4, toilet_5],
        desc: "An effective compact-size toilet cleaner, ideal for household and travel use, delivering powerful cleaning action in a convenient bottle.",
        specs: {
          Brand: "Wadha",
          Form: "Liquid",
          Color: "Blue",
          "Packaging Type": "Bottle",
          "Packaging Size": "200 ml",
          "Usage/Application": "Toilet Cleaning"
        }
      },
      {
        id: "wadha-toilet-cleaner-500ml",
        name: "Toilet Cleaner – WADHA (500 ml)",
        price: "Rs. 45.45 / Bottle",
        moq: "1,000 Bottles",
        images: [toilet_1, vidToiletCleaner, toilet_2, toilet_3, toilet_4, toilet_5],
        desc: "Backed by in-depth industry knowledge, we are engaged in offering a high-quality liquid toilet cleaner that effectively removes stains, kills germs, and ensures long-lasting freshness.",
        specs: {
          Brand: "Wadha",
          Form: "Liquid",
          Color: "Blue",
          "Packaging Size": "500 ml",
          "Pack Type": "Bottle",
          "Bottle Material": "HDPE",
          "pH Range": "1–2",
          Viscosity: "3000 cPs",
          Biodegradable: "Yes",
          "Usage/Application": "Toilet Cleaning",
          "Carton Box": "24 Bottles",
          "Production Capacity": "50 Ton",
          "Delivery Time": "3 Days",
          "Available Packs": "200 ml, 500 ml, 5 L, 50 L"
        }
      },
      {
        id: "wadha-toilet-cleaner-5l",
        name: "Toilet Cleaner – WADHA (5 Litre)",
        price: "Rs. 288 / Bottle",
        images: [toilet_1, vidToiletCleaner, toilet_2, toilet_3, toilet_4, toilet_5],
        desc: "Ideal for commercial and bulk usage, the 5-litre Wadha Toilet Cleaner provides powerful stain removal and hygiene maintenance at an economical cost.",
        specs: {
          Brand: "Wadha",
          Form: "Liquid",
          Color: "Blue",
          "Packaging Size": "5 L",
          "Packaging Type": "Can",
          "Usage/Application": "Toilet Cleaning",
          "Country of Origin": "Made in India"
        }
      }
    ]
  },

  // ── 5. DISHWASH LIQUID ────────────────────────────────────────────────────
  {
    category: "Dishwash Liquid",
    id: "liquid-dishwash",
    icon: UtensilsCrossed,
    description: "Grease-cutting lemon formula for crystal clear dishes.",
    products: [
      {
        id: "wadha-dishwash-liquid-250ml",
        name: "Dishwash Liquid – WADHA (250 ml)",
        price: "Rs. 28.24 / Bottle",
        moq: "10,000 Bottles",
        images: [wdhaDish_1, vidDishwashLiquid, wdhaDish_2, wdhaDish_3, wdhaDish_4, wdhaDish_5],
        desc: "WADHA Dishwash Liquid is among the best in its segment, delivering powerful grease-cutting action while being gentle on utensils. Offered at affordable rates, it ensures high cleaning efficiency with low consumption.",
        specs: {
          Brand: "Wadha",
          "Usage/Application": "Dish Washing",
          "Packaging Size": "250 ml",
          Fragrance: "Lemon",
          "Pack Type": "Plastic Bottle",
          Form: "Liquid",
          "Dilution Rate": "1 : 10"
        }
      },
      {
        id: "wadha-dishwash-liquid-500ml",
        name: "Dishwash Liquid – WADHA (500 ml)",
        price: "Rs. 75 / Bottle",
        images: [wdhaDish_1, vidDishwashLiquid, wdhaDish_2, wdhaDish_3, wdhaDish_4, wdhaDish_5],
        desc: "The 500 ml variant is ideal for regular household usage, offering long-lasting performance and effective cleaning results.",
        specs: {
          Brand: "Wadha",
          "Usage/Application": "Dish Washing",
          "Packaging Size": "500 ml",
          "Packaging Type": "Can",
          Form: "Liquid",
          Color: "Yellow",
          "Country of Origin": "Made in India"
        }
      },
      {
        id: "wadha-dishwash-liquid-5l",
        name: "Dishwash Liquid – WADHA (5 Litre)",
        price: "Rs. 288 / Bottle",
        images: [wdhaDish_1, vidDishwashLiquid, wdhaDish_2, wdhaDish_3, wdhaDish_4, wdhaDish_5],
        desc: "Designed for bulk and commercial use, the 5-litre WADHA Dishwash Liquid offers superior grease removal at an economical cost, making it ideal for hotels, restaurants, and large households.",
        specs: {
          Brand: "Wadha",
          "Usage/Application": "Dish Washing",
          "Packaging Size": "5 L",
          "Packaging Type": "Bottle",
          Form: "Liquid",
          Fragrance: "Floral",
          "Country of Origin": "Made in India"
        }
      },
      {
        id: "toto-dishwash-liquid-1-5l",
        name: "Toto Dishwash Liquid – 1.5 L",
        price: "Rs. 99 / Pack",
        moq: "5,000 Packs",
        images: [totoDish_1, vidTotoDishwash, totoDish_2, totoDish_3, totoDish_4, totoDish_5],
        desc: "TOTO Dishwash Liquid in a convenient 1.5L value pack delivers powerful grease-cutting action — Chipchipa Tel Gayab! Ideal for everyday kitchen use with high lather and a refreshing lemon fragrance.",
        specs: {
          Brand: "Toto",
          "Usage/Application": "Dish Washing",
          "Packaging Size": "1.5 L",
          Fragrance: "Lemon",
          Form: "Liquid",
          MRP: "Rs. 99",
          "Country of Origin": "Made in India"
        }
      }
    ]
  },

  // ── 6. DISHWASH BAR ───────────────────────────────────────────────────────
  {
    category: "Dishwash Bar",
    id: "dishwash-bar",
    icon: Zap,
    description: "50% Maha Bachat — powerful bar for sparkling utensils.",
    products: [
      {
        id: "wadha-dishwash-bar-set",
        name: "Dishwash Bar – WADHA (₹30 · 4-Piece Set)",
        price: "Rs. 30 / Set",
        moq: "10,000 Sets",
        images: [dishBar_1, vidDishwashBar, dishBar_2, dishBar_3, dishBar_4, dishBar_5, dishBar_6],
        desc: "Our Wadha Dishwash Bar 4-piece value set (115 g each) delivers superior grease-cutting performance — Grease Hatao, Chamak Lao! High lather and a refreshing lemon fragrance in a convenient family pack.",
        specs: {
          Brand: "Wadha",
          Form: "Bar / Solid",
          "Usage/Application": "Dish Washing",
          Fragrance: "Lemon",
          "Pack Contains": "4 Bars · 115 g each",
          MRP: "Rs. 30",
          Feature: "50% Maha Bachat",
          Technology: "Power Technology",
          "Country of Origin": "Made in India"
        }
      },
      {
        id: "wadha-dishwash-bar-10",
        name: "Dishwash Bar – WADHA (₹10 · 100 g)",
        price: "Rs. 5.89 / Piece",
        moq: "10,000 Pieces",
        images: [dishBar_3, vidDishwashBar, dishBar_1, dishBar_2, dishBar_4, dishBar_5, dishBar_6],
        desc: "The ₹10 Wadha Dishwash Bar (100 g) cuts through tough grease with ease — Grease Hatao, Chamak Lao! A long-lasting solid bar with high lather and a refreshing lemon fragrance.",
        specs: {
          Brand: "Wadha",
          Form: "Bar / Solid",
          "Usage/Application": "Dish Washing",
          Fragrance: "Lemon",
          Weight: "100 g",
          MRP: "Rs. 10",
          Feature: "50% Maha Bachat",
          Technology: "Power Technology",
          "Country of Origin": "Made in India"
        }
      },
      {
        id: "wadha-dishwash-bar-5",
        name: "Dishwash Bar – WADHA (₹5 · 80 g)",
        price: "Rs. 5 / Piece",
        moq: "10,000 Pieces",
        images: [dishBar_5, vidDishwashBar, dishBar_1, dishBar_2, dishBar_3, dishBar_4, dishBar_6],
        desc: "The pocket-friendly ₹5 Wadha Dishwash Bar (80 g) offers powerful grease-cutting action in a compact solid bar — high lather and a refreshing lemon fragrance for sparkling utensils.",
        specs: {
          Brand: "Wadha",
          Form: "Bar / Solid",
          "Usage/Application": "Dish Washing",
          Fragrance: "Lemon",
          Weight: "80 g",
          MRP: "Rs. 5",
          Feature: "50% Maha Bachat",
          Technology: "Power Technology",
          "Country of Origin": "Made in India"
        }
      }
    ]
  },

  // ── 7. FLOOR CLEANER ──────────────────────────────────────────────────────
  {
    category: "Floor Cleaner",
    id: "floor-cleaner",
    icon: Waves,
    description: "Disinfectant floor cleaners for hygienic, fresh-smelling spaces.",
    products: [
      {
        id: "wadha-white-phenyl-5l",
        name: "White Floor Cleaner – WADHA (5 Litre)",
        price: "Rs. 173.86 / Can",
        moq: "250 Cans",
        images: [phenyl_1, vidPhenyl, phenyl_2, phenyl_3, phenyl_4, phenyl_5, phenyl_6],
        desc: "We are among the renowned organizations engaged in offering a premium quality range of 5 Litre White Floor Cleaner. The product provides excellent cleaning performance, pleasant fragrance, and is suitable for homes, offices, hospitals, and commercial spaces.",
        specs: {
          Brand: "Wadha",
          Form: "Liquid",
          "Clean Type": "Floor Cleaning",
          "Usage/Application": "Floor Cleaning",
          "Packaging Size": "5 L",
          "Packaging Type": "Bottle",
          "Colors Available": "Pink, Orange, Green, White",
          "Quantity per Pack": "4 Bottles",
          Solubility: "Soluble in Water",
          "Place of Origin": "Gondia"
        }
      },
      {
        id: "wadha-phenyl-1l",
        name: "Floor Cleaner – WADHA (1 Litre)",
        price: "Rs. 30.50 / Litre",
        moq: "5,000 Litres",
        images: [phenyl_1, vidPhenyl, phenyl_2, phenyl_3, phenyl_4, phenyl_5, phenyl_6],
        desc: "Leveraging extensive industry expertise, we offer a broad range of WADHA Floor Cleaner, formulated for effective cleaning, hygiene, and long-lasting freshness across multiple surfaces.",
        specs: {
          Brand: "Wadha",
          Form: "Liquid",
          "Packaging Size": "1 Litre",
          "Packaging Type": "Bottle",
          Color: "4 Variants",
          "Clean Type": "Floor, Kitchen & Toilet",
          "Fragrance Type": "Pine",
          "Shelf Life": "2 Years",
          "pH Value": "7",
          Purity: "100%",
          Solubility: "Soluble in Water",
          "Quantity per Pack": "12 Bottles",
          "Production Capacity": "52 Ton",
          "Available Packs": "1 L, 5 L, 20 L, 50 L & 200 L"
        }
      }
    ]
  },

  // ── 8. GLASS CLEANER ──────────────────────────────────────────────────────
  {
    category: "Glass Cleaner",
    id: "glass-cleaner",
    icon: Wind,
    description: "Crystal clear, streak-free shine — 3X Action formula.",
    products: [
      {
        id: "wadha-glass-cleaner-500ml",
        name: "Glass Cleaner – WADHA (500 ml)",
        price: "Contact for Price",
        moq: "5,000 Bottles",
        images: [glass_1, vidGlassCleaner, glass_2, glass_3, glass_4, glass_5],
        desc: "Our Wadha Glass Cleaner delivers a crystal-clear, streak-free finish on glass surfaces, mirrors, and tiles. With 3X Action formula, it removes smudges, fingerprints, dust, and grime effortlessly — bringing back the brilliant shine every time.",
        specs: {
          Brand: "Wadha",
          Form: "Liquid",
          "Usage/Application": "Glass, Mirrors, Tiles",
          Feature: "3X Action — Streak Free Shine",
          Fragrance: "Fresh",
          "Packaging Size": "500 ml",
          "Packaging Type": "Spray Bottle",
          "Country of Origin": "Made in India"
        }
      }
    ]
  },

  // ── 9. THIRD PARTY / CONTRACT MFG ────────────────────────────────────────
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
        images: [],
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
