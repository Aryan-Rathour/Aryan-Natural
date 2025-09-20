"use client"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"

export default function Map() {
  return (
    <MapContainer
      center={[25.5941, 85.1376]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[25.5941, 85.1376]}>
        <Popup>
          Aryan Naturals Farm <br /> Rampur, Patna, Bihar
        </Popup>
      </Marker>
    </MapContainer>
  )
}
