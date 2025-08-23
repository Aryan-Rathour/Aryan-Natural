export const lucknowAreas = [
  "Hazratganj",
  "Gomti Nagar",
  "Indira Nagar",
  "Aliganj",
  "Mahanagar",
  "Rajajipuram",
  "Aminabad",
  "Chowk",
  "Alambagh",
  "Jankipuram",
  "Vikas Nagar",
  "Ashiyana",
  "Kalyanpur",
  "Chinhat",
  "Faizabad Road",
]

export const localKeywords = [
  "Lucknow local products",
  "traditional foods Lucknow",
  "organic grains Lucknow",
  "local snacks Lucknow",
  "Lucknow specialty foods",
  "authentic Lucknow food",
  "local food delivery Lucknow",
  "traditional Lucknow cuisine",
  "Uttar Pradesh local products",
  "Lucknow organic food",
]

export const businessInfo = {
  name: "Right Basket",
  address: {
    street: "Hazratganj",
    city: "Lucknow",
    state: "Uttar Pradesh",
    postalCode: "226001",
    country: "India",
  },
  phone: "+91 9876543210",
  email: "hello@rightbasket.in",
  website: "https://rightbasket.in",
  hours: {
    monday: "9:00 AM - 8:00 PM",
    tuesday: "9:00 AM - 8:00 PM",
    wednesday: "9:00 AM - 8:00 PM",
    thursday: "9:00 AM - 8:00 PM",
    friday: "9:00 AM - 8:00 PM",
    saturday: "9:00 AM - 8:00 PM",
    sunday: "10:00 AM - 6:00 PM",
  },
}

export function generateLocalSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: businessInfo.name,
    description: "Premium local products including organic grains, snacks, and traditional foods in Lucknow",
    url: businessInfo.website,
    telephone: businessInfo.phone,
    email: businessInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessInfo.address.street,
      addressLocality: businessInfo.address.city,
      addressRegion: businessInfo.address.state,
      postalCode: businessInfo.address.postalCode,
      addressCountry: businessInfo.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "26.8467",
      longitude: "80.9462",
    },
    areaServed: lucknowAreas.map((area) => ({
      "@type": "City",
      name: `${area}, Lucknow`,
    })),
    openingHours: ["Mo-Sa 09:00-20:00", "Su 10:00-18:00"],
    priceRange: "₹₹",
    paymentAccepted: ["Cash", "Credit Card", "UPI", "Net Banking"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Local Products",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Organic Grains & Traditional Foods",
          },
        },
      ],
    },
  }
}
