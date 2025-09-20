"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/cart-context";
import Image from "next/image";
import { usePathname } from "next/navigation";

// import ProfileSidebar from "@/components/user/ProfileSidebar"; // 👈 Import your ProfileSidebar

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state } = useCart();

  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/categories", label: "Categories" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-primary-color sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="relative w-50 h-14">
            <Image
              src="/rbLogo.png"
              alt="Right Basket Logo"
              fill
              className="object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 nav-links">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative group ${
                  pathname === link.href
                    ? "text-primary font-semibold"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          {/* Cart & Profile & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <Link href="/cart">
              <Button
                variant="ghost"
                size="sm"
                className="relative cart-icon btn-hover-scale"
              >
                <ShoppingCart className="h-5 w-5" />
                {state.itemCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-accent text-accent-foreground animate-pulse">
                    {state.itemCount}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Profile Sidebar (👈 new component here) */}
            {/* <ProfileSidebar name="Shivank" phone="+91 98765 43210" /> */}
            <Link href="/profile">
              <User size={24} className="cursor-pointer" />
            </Link>
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden btn-hover-scale"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-slide-in-bottom">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                href="/products"
                className="text-foreground hover:text-primary transition-colors"
              >
                Products
              </Link>
              <Link
                href="/categories"
                className="text-foreground hover:text-primary transition-colors"
              >
                Categories
              </Link>
              <Link
                href="/about"
                className="text-foreground hover:text-primary transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
