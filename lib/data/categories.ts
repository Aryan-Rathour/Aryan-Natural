import type { Category } from "../types"

export const categories: Category[] = [
  {
    id: "grains",
    name: "Grains",
    slug: "grains",
    description:
      "Premium organic grains including sprouted wheat flour, traditional varieties, and healthy grain options sourced from local farmers in Lucknow and surrounding areas.",
    image: "/categories/grains-category.png",
    seoTitle: "Organic Grains in Lucknow - Sprouted Wheat Flour & Traditional Grains",
    seoDescription:
      "Buy premium organic grains in Lucknow including sprouted wheat flour, traditional grain varieties, and healthy options. Fresh, locally sourced, home delivered.",
    keywords: [
      "organic grains Lucknow",
      "sprouted wheat flour",
      "traditional grains",
      "healthy grains",
      "local grains Lucknow",
      "wheat flour Lucknow",
    ],
    products: [],
  },
  {
    id: "snacks",
    name: "Snacks",
    slug: "snacks",
    description:
      "Traditional and healthy snacks including murmura, roasted chana, chura, kheel, and other authentic local favorites perfect for any time of day.",
    image: "/categories/snacks-category.png",
    seoTitle: "Traditional Snacks Lucknow - Murmura, Roasted Chana & Local Favorites",
    seoDescription:
      "Authentic traditional snacks in Lucknow - murmura, roasted chana, chura, kheel and more. Healthy, fresh, and delivered to your doorstep.",
    keywords: [
      "traditional snacks Lucknow",
      "murmura",
      "roasted chana",
      "chura",
      "kheel",
      "healthy snacks Lucknow",
      "local snacks",
    ],
    products: [],
  },
  {
    id: "sweeteners",
    name: "Sweeteners",
    slug: "sweeteners",
    description:
      "Natural sweeteners including pure gurh (jaggery) and traditional sweetening options that are healthier alternatives to refined sugar.",
    image: "/categories/sweeteners-category.png",
    seoTitle: "Natural Sweeteners Lucknow - Pure Gurh & Jaggery",
    seoDescription:
      "Buy natural sweeteners in Lucknow including pure gurh (jaggery) and traditional options. Healthy alternatives to refined sugar, locally sourced.",
    keywords: [
      "natural sweeteners Lucknow",
      "gurh",
      "jaggery Lucknow",
      "pure jaggery",
      "healthy sweeteners",
      "traditional sweeteners",
    ],
    products: [],
  },
  {
    id: "pulses",
    name: "Pulses & Legumes",
    slug: "pulses",
    description:
      "High-quality pulses and legumes including various types of chana, gram, and other protein-rich options essential for a balanced diet.",
    image: "/categories/pulses-category.png",
    seoTitle: "Pulses & Legumes Lucknow - Chana, Gram & Protein-Rich Options",
    seoDescription:
      "Premium pulses and legumes in Lucknow including chana, gram, and protein-rich varieties. Fresh, high-quality, and nutritious options.",
    keywords: ["pulses Lucknow", "chana", "gram", "legumes Lucknow", "protein rich food", "dal Lucknow"],
    products: [],
  },
  {
    id: "specialty",
    name: "Specialty Items",
    slug: "specialty",
    description:
      "Unique specialty items including shattu powder and other traditional preparations that are hard to find elsewhere.",
    image: "/categories/specialty-category.png",
    seoTitle: "Specialty Food Items Lucknow - Shattu Powder & Traditional Preparations",
    seoDescription:
      "Unique specialty food items in Lucknow including shattu powder and traditional preparations. Authentic, hard-to-find local specialties.",
    keywords: [
      "specialty food Lucknow",
      "shattu powder",
      "traditional preparations",
      "unique food items",
      "local specialties Lucknow",
    ],
    products: [],
  },
]

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug)
}

export function getAllCategories(): Category[] {
  return categories
}
