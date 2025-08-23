// Notification.jsx
"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotificationPopUp = ({ message = "Item added successfully!", onViewCart }) => {
  return (
<div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 flex items-center justify-between w-[70vw] max-w-md sm:max-w-lg md:max-w-xl bg-green-500 text-white px-4 py-1 rounded shadow-lg">
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
