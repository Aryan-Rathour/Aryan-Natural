// Re-export all data functions for easy importing
export * from "./categories"
export * from "."
export * from "../types"

// Update categories with their products
import { categories } from "./categories"
import { getProductsByCategory } from "./products"

// Populate categories with their products
categories.forEach((category) => {
  category.products = getProductsByCategory(category.slug)
})
