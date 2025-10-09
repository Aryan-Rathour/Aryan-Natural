"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useCart } from "@/contexts/cart-context";
import { usePathname } from "next/navigation";

const NotificationPopUp = ({ onViewCart }) => {
  const { state } = useCart();
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  // ✅ Always call all hooks before any return

  useEffect(() => {
    if (state.items.length > 0) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [state.items]);

  // ✅ Hide on /cart page
  if (pathname === "/cart" || pathname === "/checkout") return null;

  // ✅ Hide if no item in cart
  if (!show) return null;

  // ✅ Create dynamic message
  const itemCount = state.items.length;
const message = `${itemCount} item${itemCount !== 1 ? "s" : ""} added`;

  return (
    <div className="z-50 fixed bottom-5 left-1/2 transform -translate-x-1/2 flex items-center justify-between w-[70vw] max-w-md sm:max-w-lg md:max-w-xl bg-green-500 text-white px-4 py-2 rounded shadow-lg">
      {/* Left side message */}
      <span className="font-medium">{message}</span>

      {/* Right side button */}
      <Link
        onClick={onViewCart}
        className="bg-white text-green-600 hover:bg-green-100 hover:text-green-700 px-3 py-1 rounded text-sm"
        href="/cart"
      >
        View Cart
      </Link>
    </div>
  );
};

export default NotificationPopUp;
