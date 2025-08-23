export interface SEOConfig {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  noindex?: boolean
}

export function generateMetadata(config: SEOConfig) {
  return {
    title: `${config.title} | Right Basket - Local Products Lucknow`,
    description: config.description,
    keywords: config.keywords?.join(", "),
    alternates: {
      canonical: config.canonical || "/",
    },
    robots: {
      index: !config.noindex,
      follow: !config.noindex,
    },
    openGraph: {
      title: config.title,
      description: config.description,
      url: `https://rightbasket.in${config.canonical || "/"}`,
      siteName: "Right Basket",
      locale: "en_IN",
      type: "website",
    },
  }
}

export const lucknowKeywords = [
  "Lucknow",
  "Uttar Pradesh",
  "local products Lucknow",
  "organic food Lucknow",
  "traditional snacks Lucknow",
  "local delivery Lucknow",
]

export const productKeywords = [
  "murmura",
  "gurh",
  "jaggery",
  "chana",
  "shattu powder",
  "sprouted wheat flour",
  "roasted chana",
  "chura",
  "kheel",
  "gram",
  "organic grains",
  "traditional snacks",
  "natural sweeteners",
]
