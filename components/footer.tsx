import Link from "next/link"
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react"



export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
            
              <img
                alt="rightbasket logo"
                src="/rbLogo.png"
                />
            </div>
            <p className="text-secondary-foreground/80 mb-4">
              Bringing you the finest traditional Indian organic foods directly from Bihar's heartland.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/products" className="block hover:text-primary transition-colors">
                Products
              </Link>
              <Link href="/categories" className="block hover:text-primary transition-colors">
                Categories
              </Link>
              <Link href="/about" className="block hover:text-primary transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="block hover:text-primary transition-colors">
                Contact
              </Link>
              <Link href="/faq" className="block hover:text-primary transition-colors">
                FAQ
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Categories</h3>
            <div className="space-y-2">
              <Link href="/categories/murmura" className="block hover:text-primary transition-colors">
                Murmura
              </Link>
              <Link href="/categories/gurh" className="block hover:text-primary transition-colors">
                Gurh
              </Link>
              <Link href="/categories/chana" className="block hover:text-primary transition-colors">
                Chana
              </Link>
              <Link href="/categories/shattu" className="block hover:text-primary transition-colors">
                Shattu
              </Link>
              <Link href="/categories/chura" className="block hover:text-primary transition-colors">
                Chura
              </Link>
              <Link href="/categories/khell" className="block hover:text-primary transition-colors">
                Khell
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@aryannaturals.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1" />
                <span>Village Aryan, District Patna, Bihar 800001</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-secondary-foreground/80">
            © 2024 Right Basket. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
