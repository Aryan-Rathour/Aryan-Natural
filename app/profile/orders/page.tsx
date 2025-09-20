"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type OrderItem = {
  id: string;
  name: string;
  image: string;
  quantity: number;
  unit: string;
  price: number;
  total: number;
};

type Order = {
  id: string;
  orderNumber: string;
  items: OrderItem[];
  status: string;
  statusMessage?: string;
  deliveryAddress: string;
  orderPlaced: string;
  totalBill: number;
  showDetails?: boolean;
};

const dummyOrders: Order[] = [
  {
    id: "1",
    orderNumber: "#2006NMRN25974",
    items: [
      {
        id: "i1",
        name: "Potato",
        image: "/orders/potato.jpeg",
        quantity: 2,
        unit: "1 Pack (900 - 1000 Gm)",
        price: 36,
        total: 72,
      },
      {
        id: "i2",
        name: "Green Peas (Matar)",
        image: "/orders/green-peas.jpeg",
        quantity: 1,
        unit: "250 g",
        price: 8,
        total: 8,
      },
      {
        id: "i3",
        name: "Cauliflower",
        image: "/orders/cauliflower.jpeg",
        quantity: 1,
        unit: "1 pc",
        price: 9,
        total: 9,
      },
      {
        id: "i4",
        name: "Cabbage",
        image: "/orders/cabbage.jpeg",
        quantity: 1,
        unit: "1 pc",
        price: 7,
        total: 7,
      },
      {
        id: "i5",
        name: "Haldiram's Fatafat Bhel",
        image: "/orders/bhel.jpeg",
        quantity: 1,
        unit: "1 pack (150 g)",
        price: 40,
        total: 40,
      },
    ],
    status: "Cancelled",
    statusMessage:
      "Your payment was not completed. Any amount if debited will get refunded within 3-5 days. Please try placing the order again!",
    deliveryAddress: "3 Solutioneers Infotech",
    orderPlaced: "03 Mar 2025, 6:54 PM",
    totalBill: 265.44,
    showDetails: false,
  },
  // You can copy this object 4-5 times with small changes for multiple orders
];

export default function OrderPage() {
  const [orders, setOrders] = useState<Order[]>(dummyOrders);

  const toggleDetails = (id: string) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, showDetails: !order.showDetails } : order
      )
    );
  };

  return (
    <div className="flex flex-col gap-6">
      {orders.map((order) => (
        <div
          key={order.id}
          className="bg-white border rounded-lg shadow-sm p-4 flex flex-col gap-4"
        >
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold">{order.orderNumber}</p>
              <p className="text-sm text-gray-500">
                {order.items.length} items
              </p>
            </div>
            <div className="text-right">
              <p
                className={`font-medium ${
                  order.status === "Cancelled" ? "text-red-500" : "text-green-600"
                }`}
              >
                {order.status}
              </p>
              {order.statusMessage && (
                <p className="text-xs text-gray-500">{order.statusMessage}</p>
              )}
            </div>
            <button
              onClick={() => toggleDetails(order.id)}
              className="ml-4 p-1 rounded-full border"
            >
              {order.showDetails ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          </div>

          {/* Order Items */}
          {order.showDetails && (
            <div className="flex flex-col gap-3 border-t pt-3">
              {order.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 bg-gray-100 rounded-md relative">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.unit}</p>
                      <p className="text-sm text-gray-500">{item.quantity} unit(s)</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">₹{item.price}</p>
                    <p className="text-sm text-gray-500">₹{item.total}</p>
                  </div>
                </div>
              ))}

              {/* Bill Summary */}
              <div className="border-t pt-3 flex flex-col gap-2">
                <p className="font-medium text-gray-700">Bill Summary</p>
                <p className="text-sm">Total Bill: ₹{order.totalBill.toFixed(2)}</p>
                <p className="text-sm text-gray-500">
                  Delivery Address: {order.deliveryAddress}
                </p>
                <p className="text-sm text-gray-500">
                  Order Placed at: {order.orderPlaced}
                </p>
                <button className="mt-2 bg-purple-600 text-white py-1 px-3 rounded-md text-sm">
                  Order Again
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
