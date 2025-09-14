"use client";

import Link from "next/link";
import {
  User,
  ShoppingCart,
  Heart,
  Home,
  LogOut,
  Headphones,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Define props type
interface ProfileSidebarProps {
  name?: string;
  phone?: string;
}

export default function ProfileSidebar({
  name = "John Doe",
  phone = "+91 98765 43210",
}: ProfileSidebarProps) {
  return (
    <Sheet>
      {/* Trigger button for profile */}
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="btn-hover-scale">
          <User className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      {/* Sidebar Drawer */}
      <SheetContent side="right" className="w-72 sm:w-80 flex flex-col">
        {/* Header with name + phone */}
        <SheetHeader className="border-b pb-2">
          <SheetTitle>
            <div className="flex flex-col">
              <span className="text-base font-semibold">{name}</span>
              <span className="text-sm text-gray-500">{phone}</span>
            </div>
          </SheetTitle>
        </SheetHeader>

        {/* Menu items */}
        <div className="flex flex-col mt-4 space-y-2 flex-1">
          <Link
            href="/orders"
            className="flex items-center gap-2 px-2 py-2 hover:bg-gray-100 rounded-md"
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Orders</span>
          </Link>

          <Link
            href="/support"
            className="flex items-center gap-2 px-2 py-2 hover:bg-gray-100 rounded-md"
          >
            <Headphones className="h-4 w-4" />
            <span>Customer Support</span>
          </Link>

          <Link
            href="/referrals"
            className="flex items-center gap-2 px-2 py-2 hover:bg-gray-100 rounded-md"
          >
            <Heart className="h-4 w-4" />
            <span>Manage Referrals</span>
          </Link>

          <Link
            href="/addresses"
            className="flex items-center gap-2 px-2 py-2 hover:bg-gray-100 rounded-md"
          >
            <Home className="h-4 w-4" />
            <span>Addresses</span>
          </Link>

          <Link
            href="/profile"
            className="flex items-center gap-2 px-2 py-2 hover:bg-gray-100 rounded-md"
          >
            <User className="h-4 w-4" />
            <span>Profile</span>
          </Link>
        </div>

        {/* Logout fixed at bottom */}
        <div className="border-t pt-4">
          <button className="w-full text-left px-2 py-2 text-red-500 font-medium hover:bg-red-50 rounded-md flex items-center gap-2">
            <LogOut className="h-4 w-4" />
            Log Out
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
