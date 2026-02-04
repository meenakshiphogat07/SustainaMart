import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const EcoPointsWallet = () => {
  const { ecoPoints } = useContext(ShopContext);

  return (
    <div className="border-t pt-16 px-4">
      <Title text1="ECO" text2="WALLET" />

      <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded p-6 text-center">
        <p className="text-gray-600 text-sm mb-2">Available EcoPoints</p>
        <h2 className="text-4xl font-bold text-green-600 mb-4">
          {ecoPoints}
        </h2>

        <p className="text-sm text-gray-500">
          Use EcoPoints at checkout to get instant discounts
        </p>

        <div className="mt-6 border-t pt-4 text-sm text-gray-600">
          <p>10 EcoPoints = ₹10 discount</p>
          <p>Earn more by returning packaging</p>
        </div>
      </div>
    </div>
  );
};

export default EcoPointsWallet;
