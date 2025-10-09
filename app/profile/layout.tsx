"use client";

import Link from "next/link";
import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import {
  User,
  ShoppingCart,
  Heart,
  Home,
  LogOut,
  Headphones,
  MenuIcon,
  XIcon,
} from "lucide-react";
import { Navbar } from "@/components/navbar";

export default function ProfileLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { name: "Orders", href: "/profile/orders", icon: ShoppingCart },
    { name: "Customer Support", href: "/profile/support", icon: Headphones },
    // { name: "Referrals", href: "/profile/referral", icon: Heart },
    { name: "Addresses", href: "/profile/addresses", icon: Home },
    { name: "Profile", href: "/profile", icon: User },
  ];

  return (
    <>
    <Navbar/>
      <div className="md:hidden flex justify-between items-center p-4 bg-white border-b">
        <button onClick={() => setSidebarOpen(true)}>
          <MenuIcon className="w-6 h-6" />
        </button>
        <p className="font-semibold">Profile</p>
      </div>

      <div className="flex min-h-screen bg-gray-50">
        <div
          className={`fixed inset-0 bg-black/50 z-40 transition-opacity ${
            sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setSidebarOpen(false)}
        />
        <aside
          className={`fixed left-0 top-0 h-full bg-white w-64 z-50 transform transition-transform duration-300 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {" "}
          {/* Sidebar items */}
          <div className="flex justify-between items-center p-4 border-b">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-purple-200 flex items-center justify-center">
                <User className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="font-semibold">Shivank</p>
                <p className="text-sm text-gray-500">6386444795</p>
              </div>
            </div>
            <button onClick={() => setSidebarOpen(false)}>
              <XIcon className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          {/* Zepto Daily Card */}
          {/* <div className="bg-green-800 text-white rounded-lg p-3 flex flex-col mb-4">
          <p className="text-sm">
            You would potentially save ₹500 per month with Zepto Daily
          </p>
          <button className="bg-yellow-400 text-black mt-2 py-1 px-3 rounded-md text-sm font-semibold">
            Get daily
          </button>
        </div> */}
          {/* Wallet */}
          {/* <div className="bg-white border rounded-lg p-3 mb-4">
          <p className="font-medium">Zepto Cash & Gift Card</p>
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-gray-500">Available Balance: ₹0</span>
            <button className="bg-black text-white px-3 py-1 rounded-md text-sm">
              Add Balance
            </button>
          </div>
        </div> */}
          {/* Free Cash */}
          <div className="bg-purple-100 text-purple-700 font-medium rounded-lg p-3 mb-6">
            Free Cash On Delivery
          </div>
          {/* Menu Links */}
          <nav className="flex flex-col gap-2 flex-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-2 px-2 py-2 rounded-md ${
                    isActive ? "bg-gray-200 font-medium" : "hover:bg-gray-100"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
          {/* Logout */}
          <div className="mt-auto border-t pt-4">
            <button className="flex items-center gap-2 text-red-500 hover:bg-red-50 px-2 py-2 rounded-md w-full text-left">
              <LogOut className="h-4 w-4" />
              Log Out
            </button>
          </div>
        </aside>

        {/* Sidebar */}
        <aside className="hidden md:flex w-1/3 lg:w-1/4 bg-white border-r flex-col p-4">
          {/* Profile Info */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-purple-200 flex items-center justify-center">
              <User className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="font-semibold">Shivank</p>
              <p className="text-sm text-gray-500">8355078409</p>
            </div>
          </div>

          {/* Zepto Daily Card */}
          {/* <div className="bg-green-800 text-white rounded-lg p-3 flex flex-col mb-4">
          <p className="text-sm">
            You would potentially save ₹500 per month with Zepto Daily
          </p>
          <button className="bg-yellow-400 text-black mt-2 py-1 px-3 rounded-md text-sm font-semibold">
            Get daily
          </button>
        </div> */}

          {/* Wallet */}
          {/* <div className="bg-white border rounded-lg p-3 mb-4">
          <p className="font-medium">Zepto Cash & Gift Card</p>
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-gray-500">Available Balance: ₹0</span>
            <button className="bg-black text-white px-3 py-1 rounded-md text-sm">
              Add Balance
            </button>
          </div>
        </div> */}

          {/* Free Cash */}
          <div className="bg-purple-100 text-purple-700 font-medium rounded-lg p-3 mb-6">
            Free Cash On Delivery
          </div>

          {/* Menu Links */}
          <nav className="flex flex-col gap-2 flex-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-2 px-2 py-2 rounded-md ${
                    isActive ? "bg-gray-200 font-medium" : "hover:bg-gray-100"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Logout */}
          <div className="mt-auto border-t pt-4">
            <button className="flex items-center gap-2 text-red-500 hover:bg-red-50 px-2 py-2 rounded-md w-full text-left">
              <LogOut className="h-4 w-4" />
              Log Out
            </button>
          </div>
        </aside>

        {/* Right Content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </>
  );
}
