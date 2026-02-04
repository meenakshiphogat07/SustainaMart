import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const ReturnPackaging = () => {
  const { addEcoPoints } = useContext(ShopContext);
  const [weight, setWeight] = useState("");
  const [error, setError] = useState("");

  const requests =
    JSON.parse(localStorage.getItem("returnRequests")) || [];

  const handleSubmit = () => {
    if (!weight || weight < 5) {
      setError("Minimum 5 kg packaging required");
      return;
    }

    const returnRequest = {
      id: Date.now(),
      weightKg: weight,
      status: "pending",
      createdAt: new Date().toISOString()
    };

    localStorage.setItem(
      "returnRequests",
      JSON.stringify([...requests, returnRequest])
    );

    alert(
      "♻️ Pickup request submitted. EcoPoints will be credited after verification."
    );

    setWeight("");
    setError("");
  };

  return (
    <div className="border-t pt-16 px-4">

      <Title text1="RETURN" text2="PACKAGING" />

      
      <div className="max-w-md mx-auto mt-10 bg-white shadow-md p-6 rounded">
        <p className="text-sm text-gray-600 mb-4">
          Return minimum <span className="font-semibold">5 kg</span> of
          SustainaMart packaging and earn EcoPoints.
        </p>

        <input
          type="number"
          placeholder="Enter packaging weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full border p-3 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        {error && (
          <p className="text-red-500 text-sm mb-2">{error}</p>
        )}

        <button
          onClick={handleSubmit}
          className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition"
        >
          Submit Return Request
        </button>

        <p className="text-xs text-gray-500 mt-4 text-center">
          * EcoPoints will be credited after pickup & verification
        </p>
      </div>

      <div className="max-w-md mx-auto mt-6">
        <h3 className="font-semibold mb-2">Your Return Requests</h3>

        {requests.length === 0 && (
          <p className="text-sm text-gray-500">
            No return requests yet.
          </p>
        )}

        {requests.map((req) => (
          <div
            key={req.id}
            className="border p-3 rounded mb-2 flex justify-between text-sm"
          >
            <span>{req.weightKg} kg</span>
            <span className="capitalize text-orange-600">
              {req.status}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ReturnPackaging;

