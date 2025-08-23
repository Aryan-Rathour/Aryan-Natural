import type { Product } from "../types"

export const products: Product[] = [
  {
    id: "murmura",
    name: "Murmura (Puffed Rice)",
    slug: "murmura",
    description:
      "Fresh, crispy murmura (puffed rice) perfect for snacking or making bhel puri. Light, airy, and full of flavor, our murmura is made from high-quality rice and processed hygienically.",
    shortDescription: "Fresh, crispy puffed rice perfect for snacking",
    price: 45,
    originalPrice: 55,
    image: "/products/murmura.png",
    images: ["/products/murmura.png", "/products/murmura-2.jpg"],
    category: "Snacks",
    categorySlug: "snacks",
    inStock: true,
    weight: "500",
    unit: "grams",
    benefits: ["Low in calories", "Gluten-free", "Easy to digest", "Rich in carbohydrates"],
    origin: "Lucknow, Uttar Pradesh",
    seoTitle: "Fresh Murmura (Puffed Rice) in Lucknow - Crispy & Healthy Snack",
    seoDescription:
      "Buy fresh murmura (puffed rice) in Lucknow. Crispy, healthy snack perfect for bhel puri. High-quality, hygienically processed, home delivered.",
    keywords: ["murmura Lucknow", "puffed rice", "healthy snacks", "bhel puri", "crispy snacks"],
    featured: true,
  },
  {
    id: "gurh",
    name: "Pure Gurh (Jaggery)",
    slug: "gurh",
    description:
      "Traditional pure gurh (jaggery) made from fresh sugarcane juice. Rich in minerals and a healthy alternative to refined sugar. Perfect for sweets, tea, or direct consumption.",
    shortDescription: "Pure jaggery made from fresh sugarcane juice",
    price: 85,
    originalPrice: 95,
    image: "/products/gurh.png",
    images: ["/products/gurh.png", "/products/gurh-2.jpg"],
    category: "Sweeteners",
    categorySlug: "sweeteners",
    inStock: true,
    weight: "1",
    unit: "kg",
    nutritionalInfo: {
      calories: 383,
      protein: 0.4,
      carbs: 98.0,
      fat: 0.1,
      fiber: 0,
      servingSize: "100g",
    },
    benefits: ["Rich in iron", "Natural minerals", "Healthier than sugar", "Aids digestion"],
    origin: "Uttar Pradesh",
    seoTitle: "Pure Gurh (Jaggery) in Lucknow - Natural Sweetener & Sugar Alternative",
    seoDescription:
      "Buy pure gurh (jaggery) in Lucknow. Natural sweetener made from fresh sugarcane. Rich in minerals, healthier than sugar, home delivered.",
    keywords: ["gurh Lucknow", "jaggery", "natural sweetener", "pure jaggery", "healthy sugar alternative"],
    featured: true,
  },
  {
    id: "roasted-chana",
    name: "Roasted Chana",
    slug: "roasted-chana",
    description:
      "Perfectly roasted chana (chickpeas) that are crunchy, nutritious, and delicious. High in protein and fiber, making it an ideal healthy snack for any time of the day.",
    shortDescription: "Crunchy roasted chickpeas, high in protein",
    price: 65,
    image: "/products/roasted-chana.png",
    images: ["/products/roasted-chana.png", "/products/roasted-chana-2.jpg"],
    category: "Snacks",
    categorySlug: "snacks",
    inStock: true,
    weight: "500",
    unit: "grams",
    nutritionalInfo: {
      calories: 164,
      protein: 8.9,
      carbs: 27.4,
      fat: 2.6,
      fiber: 7.6,
      servingSize: "100g",
    },
    benefits: ["High in protein", "Rich in fiber", "Good for digestion", "Helps in weight management"],
    origin: "Lucknow, Uttar Pradesh",
    seoTitle: "Roasted Chana in Lucknow - Healthy Protein-Rich Snack",
    seoDescription:
      "Buy roasted chana (chickpeas) in Lucknow. Crunchy, protein-rich healthy snack. Perfect for weight management, home delivered fresh.",
    keywords: ["roasted chana Lucknow", "chickpeas", "protein snacks", "healthy snacks", "roasted chickpeas"],
    featured: true,
  },
  {
    id: "shattu-powder",
    name: "Shattu Powder",
    slug: "shattu-powder",
    description:
      "Traditional shattu powder made from roasted grains and pulses. A nutritious and energizing drink mix that's perfect for breakfast or as a healthy beverage anytime.",
    shortDescription: "Traditional nutritious drink mix from roasted grains",
    price: 120,
    image: "/products/shattu-powder.png",
    images: ["/products/shattu-powder.png", "/products/shattu-powder-2.jpg"],
    category: "Specialty Items",
    categorySlug: "specialty",
    inStock: true,
    weight: "500",
    unit: "grams",
    benefits: ["High energy", "Rich in nutrients", "Easy to digest", "Traditional recipe"],
    origin: "Bihar/Uttar Pradesh",
    seoTitle: "Shattu Powder in Lucknow - Traditional Nutritious Drink Mix",
    seoDescription:
      "Buy authentic shattu powder in Lucknow. Traditional nutritious drink mix made from roasted grains. High energy, healthy breakfast option.",
    keywords: [
      "shattu powder Lucknow",
      "traditional drink mix",
      "nutritious powder",
      "healthy breakfast",
      "energy drink",
    ],
    featured: true,
  },
  {
    id: "sprouted-wheat-flour",
    name: "Sprouted Wheat Flour",
    slug: "sprouted-wheat-flour",
    description:
      "Premium sprouted wheat flour that's more nutritious and easier to digest than regular wheat flour. Perfect for making rotis, bread, and other healthy preparations.",
    shortDescription: "Nutritious sprouted wheat flour, easier to digest",
    price: 95,
    image: "/products/sprouted-wheat-flour.png",
    images: ["/products/sprouted-wheat-flour.png", "/products/sprouted-wheat-flour-2.jpg"],
    category: "Grains",
    categorySlug: "grains",
    inStock: true,
    weight: "1",
    unit: "kg",
    benefits: ["Higher nutrition", "Easier digestion", "Rich in enzymes", "Better absorption"],
    origin: "Uttar Pradesh",
    seoTitle: "Sprouted Wheat Flour in Lucknow - Nutritious & Easy to Digest",
    seoDescription:
      "Buy sprouted wheat flour in Lucknow. More nutritious than regular flour, easier to digest. Perfect for healthy rotis and bread.",
    keywords: [
      "sprouted wheat flour Lucknow",
      "healthy flour",
      "nutritious flour",
      "easy digest flour",
      "organic flour",
    ],
    featured: false,
  },
  {
    id: "chura",
    name: "Chura (Flattened Rice)",
    slug: "chura",
    description:
      "Fresh chura (flattened rice) that's light, nutritious, and versatile. Perfect for making poha, snacks, or sweet preparations. Easy to cook and digest.",
    shortDescription: "Fresh flattened rice, light and nutritious",
    price: 40,
    image: "/products/chura.png",
    images: ["/products/chura.png", "/products/chura-2.jpg"],
    category: "Snacks",
    categorySlug: "snacks",
    inStock: true,
    weight: "500",
    unit: "grams",
    benefits: ["Light and easy to digest", "Quick cooking", "Versatile ingredient", "Low in fat"],
    origin: "Uttar Pradesh",
    seoTitle: "Fresh Chura (Flattened Rice) in Lucknow - Light & Nutritious",
    seoDescription:
      "Buy fresh chura (flattened rice) in Lucknow. Light, nutritious, perfect for poha. Quick cooking, easy to digest, home delivered.",
    keywords: ["chura Lucknow", "flattened rice", "poha", "light snacks", "easy cooking"],
    featured: false,
  },
  {
    id: "kheel",
    name: "Kheel (Puffed Rice)",
    slug: "kheel",
    description:
      "Traditional kheel (puffed rice) that's crispy and light. Perfect for making traditional sweets, snacks, or eating directly. A healthy, low-calorie option.",
    shortDescription: "Traditional crispy puffed rice",
    price: 50,
    image: "/products/kheel.png",
    images: ["/products/kheel.png", "/products/kheel-2.jpg"],
    category: "Snacks",
    categorySlug: "snacks",
    inStock: true,
    weight: "500",
    unit: "grams",
    benefits: ["Low in calories", "Crispy texture", "Traditional preparation", "Gluten-free"],
    origin: "Uttar Pradesh",
    seoTitle: "Traditional Kheel (Puffed Rice) in Lucknow - Crispy & Light Snack",
    seoDescription:
      "Buy traditional kheel (puffed rice) in Lucknow. Crispy, light, low-calorie snack. Perfect for traditional sweets and snacks.",
    keywords: ["kheel Lucknow", "puffed rice", "traditional snacks", "low calorie", "crispy snacks"],
    featured: false,
  },
  {
    id: "gram",
    name: "Gram (Chickpeas)",
    slug: "gram",
    description:
      "High-quality gram (chickpeas) that are protein-rich and versatile. Perfect for making dal, curries, or grinding into besan. Fresh and carefully selected.",
    shortDescription: "High-quality protein-rich chickpeas",
    price: 75,
    image: "/products/gram.png",
    images: ["/products/gram.png", "/products/gram-2.jpg"],
    category: "Pulses & Legumes",
    categorySlug: "pulses",
    inStock: true,
    weight: "1",
    unit: "kg",
    nutritionalInfo: {
      calories: 164,
      protein: 8.9,
      carbs: 27.4,
      fat: 2.6,
      fiber: 7.6,
      servingSize: "100g",
    },
    benefits: ["High in protein", "Rich in fiber", "Good source of folate", "Helps control blood sugar"],
    origin: "Uttar Pradesh",
    seoTitle: "Fresh Gram (Chickpeas) in Lucknow - Protein-Rich Pulses",
    seoDescription:
      "Buy fresh gram (chickpeas) in Lucknow. High-quality, protein-rich pulses perfect for dal and curries. Carefully selected, home delivered.",
    keywords: ["gram Lucknow", "chickpeas", "pulses", "protein rich", "dal", "besan"],
    featured: false,
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((product) => product.categorySlug === categorySlug)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured)
}

export function getAllProducts(): Product[] {
  return products
}

export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase()
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.keywords.some((keyword) => keyword.toLowerCase().includes(lowercaseQuery)),
  )
}
