"use client";

import { useState } from "react";
import { Pencil, Trash, MapPin } from "lucide-react";

type Address = {
  id: string;
  house: string;
  building: string;
  landmark: string;
  label: "Home" | "Work" | "Other";
  receiverName: string;
  phone: string;
};

const dummyAddresses: Address[] = [
  {
    id: "1",
    house: "123, 2nd Floor",
    building: "Sunshine Apartments, Block A",
    landmark: "Near City Mall",
    label: "Home",
    receiverName: "Shivank",
    phone: "8355078409",
  },
  {
    id: "2",
    house: "456, 5th Floor",
    building: "Green Residency, Block B",
    landmark: "Opposite Park",
    label: "Work",
    receiverName: "Shivank",
    phone: "8355078409",
  },
];

export default function AddressesPage() {
  const [addresses, setAddresses] = useState<Address[]>(dummyAddresses);
  const [newAddress, setNewAddress] = useState<Address>({
    id: "",
    house: "",
    building: "",
    landmark: "",
    label: "Home",
    receiverName: "",
    phone: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddAddress = () => {
    if (!newAddress.house || !newAddress.building || !newAddress.receiverName) {
      alert("Please fill required fields");
      return;
    }
    const id = Date.now().toString();
    setAddresses((prev) => [...prev, { ...newAddress, id }]);
    setNewAddress({
      id: "",
      house: "",
      building: "",
      landmark: "",
      label: "Home",
      receiverName: "",
      phone: "",
    });
    // Replace above with API call to save address in DB
  };

  const handleDelete = (id: string) => {
    setAddresses((prev) => prev.filter((addr) => addr.id !== id));
    // Replace with API call to delete address
  };

  const handleEdit = (id: string) => {
    const addr = addresses.find((a) => a.id === id);
    if (addr) setNewAddress(addr);
    // Can toggle a form for edit, then call API to update DB
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Add New Address Form */}
      <div className="bg-white border rounded-lg p-4 shadow-sm">
        <h2 className="font-semibold mb-3">Add New Address</h2>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            name="house"
            placeholder="House No. & Floor*"
            value={newAddress.house}
            onChange={handleInputChange}
            className="border rounded-md p-2 w-full"
          />
          <input
            type="text"
            name="building"
            placeholder="Building & Block No.*"
            value={newAddress.building}
            onChange={handleInputChange}
            className="border rounded-md p-2 w-full"
          />
          <input
            type="text"
            name="landmark"
            placeholder="Landmark & Area Name (Optional)"
            value={newAddress.landmark}
            onChange={handleInputChange}
            className="border rounded-md p-2 w-full"
          />
          <div className="flex gap-2">
            {(["Home", "Work", "Other"] as const).map((lbl) => (
              <button
                key={lbl}
                type="button"
                onClick={() => setNewAddress((prev) => ({ ...prev, label: lbl }))}
                className={`px-3 py-1 rounded-md border ${
                  newAddress.label === lbl ? "bg-purple-600 text-white" : "bg-gray-100"
                }`}
              >
                {lbl}
              </button>
            ))}
          </div>
          <input
            type="text"
            name="receiverName"
            placeholder="Receiver Name*"
            value={newAddress.receiverName}
            onChange={handleInputChange}
            className="border rounded-md p-2 w-full"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={newAddress.phone}
            onChange={handleInputChange}
            className="border rounded-md p-2 w-full"
          />
          <button
            onClick={handleAddAddress}
            className="bg-purple-600 text-white py-2 rounded-md w-full"
          >
            Add Address
          </button>

          {/* Select on map (placeholder for future API) */}
          <button className="flex items-center gap-2 mt-2 text-purple-600 border px-3 py-1 rounded-md w-fit">
            <MapPin size={18} /> Select on Map
          </button>
        </div>
      </div>

      {/* Saved Addresses */}
      <div className="flex flex-col gap-4">
        {addresses.map((addr) => (
          <div
            key={addr.id}
            className="bg-white border rounded-lg p-4 flex justify-between items-center shadow-sm"
          >
            <div>
              <p className="font-semibold">{addr.label}</p>
              <p>{addr.house}, {addr.building}</p>
              {addr.landmark && <p className="text-gray-500">{addr.landmark}</p>}
              <p className="text-gray-500">{addr.receiverName} - {addr.phone}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(addr.id)}
                className="p-2 border rounded-md hover:bg-gray-100"
              >
                <Pencil size={16} />
              </button>
              <button
                onClick={() => handleDelete(addr.id)}
                className="p-2 border rounded-md hover:bg-red-50 text-red-500"
              >
                <Trash size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
