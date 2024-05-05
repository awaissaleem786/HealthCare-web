import React, { useState } from 'react';
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

const Cards = () => {

  const medicines = [
    { name: "Aspirin", weight: 500 },
    { name: "Paracetamol", weight: 250 },
    { name: "Ibuprofen", weight: 300 },
    { name: "Omeprazole", weight: 150 },
    { name: "Amoxicillin", weight: 200 }
  ];
  const [quantities, setQuantities] = useState(Array(medicines.length).fill(0));

  const decreaseQuantity = (index) => {
    if (quantities[index] > 0) {
      const updatedQuantities = [...quantities];
      updatedQuantities[index] -= 1;
      setQuantities(updatedQuantities);
    }
  };

  const increaseQuantity = (index) => {
    const totalWeight = quantities[index] * medicines[index].weight;
    if (totalWeight + medicines[index].weight <= 1000) {
      const updatedQuantities = [...quantities];
      updatedQuantities[index] += 1;
      setQuantities(updatedQuantities);
    }
  };

  const handleCancel = () => {
    setQuantities(Array(medicines.length).fill(0));
  };

  return (
    <div className="max-w-md mx-auto h-screen pt-16">
      {medicines.map((medicine, index) => (
        <div key={index} className="border border-gray-200 p-4 flex justify-between items-center mb-4">
          <div className="mr-4">{medicine.name} {medicine.weight}g</div>
          <div className="flex items-center  overflow-hidden">
            <button
              onClick={() => decreaseQuantity(index)}
              className="px-2 py-2 border-2 rounded-l hover:bg-gray-300"
            >
              <FaMinusCircle/>
            </button>
            <div className="px-2 py-2 w-10 text-center">{quantities[index]}</div>
            <button
              onClick={() => increaseQuantity(index)}
              disabled={quantities[index] * medicine.weight >= 1000}
              className={`bg-gray-200 px-2 py-2 rounded-l border-2 hover:bg-gray-300${quantities[index] * medicine.weight >= 1000 ?'opacity-50 cursor-not-allowed' : ''} `}
            >
              <FaPlusCircle/>
            </button>
          </div>
        </div>
      ))}
      <div className="flex justify-center mt-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2">
          Order
        </button>
        <button className="text-gray-400 hover:bg-gray-200 hover:text-black font-bold py-2 px-4 rounded" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Cards;
