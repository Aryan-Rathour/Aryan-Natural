export interface Category {
  id: string
  name: string
  slug: string
  description: string
  image: string
  seoTitle: string
  seoDescription: string
  keywords: string[]
  products: Product[]
}

export interface Product {
  id: string
  name: string
  slug: string
  description: string
  shortDescription: string
  price: number
  originalPrice?: number
  image: string
  images: string[]
  category: string
  categorySlug: string
  inStock: boolean
  weight: string
  unit: string
  nutritionalInfo?: NutritionalInfo
  benefits: string[]
  origin: string
  seoTitle: string
  seoDescription: string
  keywords: string[]
  featured: boolean
}

export interface NutritionalInfo {
  calories: number
  protein: number
  carbs: number
  fat: number
  fiber: number
  servingSize: string
}
