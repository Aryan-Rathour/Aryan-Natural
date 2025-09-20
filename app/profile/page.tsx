"use client";

import { useState } from "react";

export default function ProfilePage() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }
    // TODO: Replace with API call to subscribe newsletter
    alert(`Subscribed with ${email}`);
    setEmail("");
  };

  const handleDeleteAccount = () => {
    const confirmed = confirm(
      "Deleting your account will remove all your orders, wallet amount, and any active referral. Are you sure?"
    );
    if (confirmed) {
      // TODO: Replace with API call to delete account
      alert("Your account has been deleted.");
    }
  };

  return (
    <div className="flex flex-col gap-6 p-4">
      <h1 className="text-2xl font-bold">Profile</h1>

      {/* User Name */}
      <div className="bg-white border rounded-lg p-4 shadow-sm flex flex-col gap-2">
        <p className="font-semibold">Shivank</p>
      </div>

      {/* Newsletter Subscription */}
      <div className="bg-white border rounded-lg p-4 shadow-sm flex flex-col gap-3">
        <h2 className="font-semibold text-lg">Subscribe to our Newsletter</h2>
        <label className="flex flex-col gap-1">
          Name *
          <input
            type="text"
            placeholder="Enter your name"
            className="border rounded-md p-2 w-full"
          />
        </label>
        <label className="flex flex-col gap-1">
          Email Address *
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-md p-2 w-full"
          />
        </label>
        <p className="text-sm text-gray-500">We promise not to spam you</p>
        <button
          onClick={handleSubscribe}
          className="bg-purple-600 text-white py-2 px-4 rounded-md w-fit"
        >
          Submit
        </button>
      </div>

      {/* Delete Account */}
      <div className="bg-white border rounded-lg p-4 shadow-sm flex flex-col gap-3">
        <h2 className="font-semibold text-lg text-red-600">Delete Account</h2>
        <p className="text-sm text-gray-600">
          Deleting your account will remove all your orders, wallet amount, and any active referral.
        </p>
        <button
          onClick={handleDeleteAccount}
          className="bg-red-500 text-white py-2 px-4 rounded-md w-fit hover:bg-red-600"
        >
          Delete Account
        </button>
      </div>
    </div>
  );
}
