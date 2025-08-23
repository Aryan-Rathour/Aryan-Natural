import type { Product, Category } from "./types"
import { businessInfo } from "./local-seo"

export function generateProductSchema(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images,
    sku: product.id,
    brand: {
      "@type": "Brand",
      name: "Right Basket",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Right Basket",
    },
    category: product.category,
    offers: {
      "@type": "Offer",
      url: `https://rightbasket.in/products/${product.slug}`,
      priceCurrency: "INR",
      price: product.price,
      priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
      availability: product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      seller: {
        "@type": "Organization",
        name: "Right Basket",
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "0",
          currency: "INR",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: 0,
            maxValue: 1,
            unitCode: "DAY",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 0,
            maxValue: 1,
            unitCode: "DAY",
          },
        },
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5",
      reviewCount: "25",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "Priya Sharma",
        },
        reviewBody: `Excellent quality ${product.name}! Fresh and authentic taste from Lucknow.`,
        datePublished: "2024-01-15",
      },
    ],
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Origin",
        value: product.origin,
      },
      {
        "@type": "PropertyValue",
        name: "Weight",
        value: `${product.weight} ${product.unit}`,
      },
    ],
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: businessInfo.name,
    url: businessInfo.website,
    logo: "https://rightbasket.in/logo.png",
    description: "Premium local products including organic grains, snacks, and traditional foods in Lucknow",
    address: {
      "@type": "PostalAddress",
      streetAddress: businessInfo.address.street,
      addressLocality: businessInfo.address.city,
      addressRegion: businessInfo.address.state,
      postalCode: businessInfo.address.postalCode,
      addressCountry: businessInfo.address.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: businessInfo.phone,
      contactType: "customer service",
      email: businessInfo.email,
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [
      "https://www.facebook.com/rightbasket",
      "https://www.instagram.com/rightbasket",
      "https://twitter.com/rightbasket",
    ],
  }
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Right Basket",
    url: "https://rightbasket.in",
    description: "Premium local products including organic grains, snacks, and traditional foods in Lucknow",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://rightbasket.in/products?search={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  }
}

export function generateCategorySchema(category: Category) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: category.name,
    description: category.description,
    url: `https://rightbasket.in/categories/${category.slug}`,
    mainEntity: {
      "@type": "ItemList",
      name: `${category.name} Products`,
      numberOfItems: category.products.length,
      itemListElement: category.products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          name: product.name,
          url: `https://rightbasket.in/products/${product.slug}`,
          image: product.image,
          offers: {
            "@type": "Offer",
            price: product.price,
            priceCurrency: "INR",
          },
        },
      })),
    },
  }
}

export function generateFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you deliver in Lucknow?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we deliver fresh local products across Lucknow including Hazratganj, Gomti Nagar, Indira Nagar, Aliganj, and many other areas with same-day delivery.",
        },
      },
      {
        "@type": "Question",
        name: "Are your products organic?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We source premium quality products from local farmers and producers. Many of our products are organic and traditionally grown without harmful chemicals.",
        },
      },
      {
        "@type": "Question",
        name: "What payment methods do you accept?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We accept cash on delivery, UPI payments, credit/debit cards, and net banking for your convenience.",
        },
      },
      {
        "@type": "Question",
        name: "How fresh are your products?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "All our products are sourced fresh from local producers in Lucknow and surrounding areas. We ensure quality and freshness with every delivery.",
        },
      },
    ],
  }
}
