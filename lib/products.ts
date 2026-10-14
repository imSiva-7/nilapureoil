// lib/products.ts
export type Product = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  highlights: { title: string; description: string }[];
  specs: { label: string; value: string }[];
};

export const products: Product[] = [
  {
    slug: "groundnut-oil",
    name: "Ground Nut Oil",
    category: "Cold-Pressed Oil",
    tagline: "Our signature oil — aromatic, pure, rich in flavor.",
    description:
      "The oil that started it all. We cold-press premium groundnuts to extract pure, unrefined oil that retains its natural aroma and nutrients. No heat, no chemicals — just the way it should be.",
    image: "/images/products/groundnut-oil.webp",
    highlights: [
      { title: "Flavor profile", description: "Rich nutty aroma, naturally sweet, perfect for authentic Indian cooking." },
      { title: "Best for", description: "Frying, tempering, and traditional South Indian recipes." },
      { title: "Process", description: "Cold-pressed, filtered naturally, and bottled fresh." },
    ],
    specs: [
      { label: "1Kg", value: "₹350" },
      { label: "500ml", value: "₹175" },
      { label: "Process", value: "Cold-pressed, unrefined" },
      { label: "Storage", value: "Store in a cool, dark place" },
    ],
  },
  {
    slug: "coconut-oil",
    name: "Coconut Oil",
    category: "Cold-Pressed Oil",
    tagline: "Pure coconut oil — traditional extraction, natural goodness.",
    description:
      "Extracted from fresh coconuts using traditional cold-pressing methods. Rich in natural nutrients and perfect for cooking, hair care, and skin care. Pure, natural, and chemical-free.",
    image: "/images/products/coconut-oil.webp",
    highlights: [
      { title: "Flavor profile", description: "Natural coconut aroma, light and versatile." },
      { title: "Best for", description: "Cooking, hair care, skin care, and traditional remedies." },
      { title: "Method", description: "Cold-pressed from fresh coconuts." },
    ],
    specs: [
      { label: "1Kg", value: "₹560" },
      { label: "500ml", value: "₹280" },
      { label: "Process", value: "Cold-pressed" },
      { label: "Storage", value: "Store in a cool place" },
    ],
  },
  {
    slug: "gingelly-oil",
    name: "Gingelly Oil",
    category: "Cold-Pressed Oil",
    tagline: "Premium sesame oil — rich, aromatic, and nutritious.",
    description:
      "Also known as sesame oil, our gingelly oil is cold-pressed from carefully selected sesame seeds. Rich in antioxidants and essential nutrients, perfect for traditional South Indian cooking and Ayurvedic applications.",
    image: "/images/products/gingelly-oil.webp",
    highlights: [
      { title: "Flavor profile", description: "Nutty, aromatic with a distinctive sesame flavor." },
      { title: "Best for", description: "Tempering, massages, and traditional cooking." },
      { title: "Benefits", description: "Rich in antioxidants, supports bone health." },
    ],
    specs: [
      { label: "1Kg", value: "₹560" },
      { label: "500ml", value: "₹280" },
      { label: "Process", value: "Cold-pressed from sesame seeds" },
      { label: "Storage", value: "Store in a cool, dark place" },
    ],
  },
  {
    slug: "velakku-oil",
    name: "Velakku Oil",
    category: "Cold-Pressed Oil",
    tagline: "Traditional lamp oil — pure castor oil for rituals and wellness.",
    description:
      "Pure castor oil, traditionally used in lamps and for therapeutic purposes. Cold-pressed from premium castor seeds, this versatile oil is essential for traditional rituals, hair care, and natural remedies.",
    image: "/images/products/velakku-oil.webp",
    highlights: [
      { title: "Uses", description: "Traditional lamps, hair growth, skin care." },
      { title: "Best for", description: "Religious rituals, Ayurvedic treatments, hair care." },
      { title: "Purity", description: "100% pure castor oil, no additives." },
    ],
    specs: [
      { label: "1Kg", value: "₹600" },
      { label: "500ml", value: "₹300" },
      { label: "Process", value: "Cold-pressed from castor seeds" },
      { label: "Storage", value: "Store in a cool place" },
    ],
  },
  {
    slug: "cow-ghee",
    name: "100% Pure Cow Ghee",
    category: "Dairy Product",
    tagline: "Traditional ghee made from pure cow milk.",
    description:
      "Crafted using the traditional bilona method from 100% pure cow milk. Slow-churned butter is gently heated to create golden, aromatic ghee rich in nutrients and flavor. The way our grandparents made it.",
    image: "/images/products/ghee.webp",
    highlights: [
      { title: "Flavor profile", description: "Golden, nutty, aromatic with a rich traditional taste." },
      { title: "Best for", description: "Cooking, drizzling over rice and rotis, and Ayurvedic wellness." },
      { title: "Method", description: "Traditional bilona method, made in small batches." },
    ],
    specs: [
      { label: "1 Ltr", value: "₹925" },
      { label: "500ml", value: "₹475" },
      { label: "Process", value: "Bilona method, hand-churned" },
      { label: "Storage", value: "Store at room temperature, away from moisture" },
    ],
  },
  {
    slug: "naatu-sakkarai",
    name: "Naatu Sakkarai",
    category: "Natural Sweetener",
    tagline: "Traditional jaggery — unrefined sweetness from pure sugarcane.",
    description:
      "Made from concentrated sugarcane juice with no added chemicals or refinement. Rich in iron and minerals, this traditional sweetener brings depth and warmth to any dish or beverage. Pure, natural, and authentic.",
    image: "/images/products/jaggery.webp",
    highlights: [
      { title: "Flavor profile", description: "Deep caramel notes, earthy sweetness, mineral-rich." },
      { title: "Best for", description: "Traditional sweets, chai, desserts, and health tonics." },
      { title: "Benefits", description: "Rich in iron, aids digestion, natural energy source." },
    ],
    specs: [
      { label: "1Kg", value: "₹80" },
      { label: "Process", value: "Traditionally boiled, unrefined" },
      { label: "Storage", value: "Store in an airtight container" },
      { label: "Note", value: "Price subject to harvest quality" },
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}