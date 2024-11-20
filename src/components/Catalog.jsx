 import React, { useState } from "react";

const Catalog = () => {
  const [activeTab, setActiveTab] = useState("Baju");

  const products = {
    Baju: [
      { id: 1, name: "Kaos Polos", image: "https://via.placeholder.com/150", price: "Rp 100.000" },
      { id: 2, name: "Kaos Lengan Panjang", image: "https://via.placeholder.com/150", price: "Rp 120.000" },
      { id: 3, name: "Kaos Custom", image: "https://via.placeholder.com/150", price: "Rp 150.000" },
      { id: 4, name: "Kaos Polos", image: "https://via.placeholder.com/150", price: "Rp 100.000" },
      { id: 5, name: "Kaos Lengan Panjang", image: "https://via.placeholder.com/150", price: "Rp 120.000" },
      { id: 6, name: "Kaos Custom", image: "https://via.placeholder.com/150", price: "Rp 150.000" },
      { id: 7, name: "Kaos Polos", image: "https://via.placeholder.com/150", price: "Rp 100.000" },
      { id: 8, name: "Kaos Lengan Panjang", image: "https://via.placeholder.com/150", price: "Rp 120.000" },
      { id: 9, name: "Kaos Custom", image: "https://via.placeholder.com/150", price: "Rp 150.000" },
    ],
    Topi: [
      { id: 1, name: "Topi Snapback", image: "https://via.placeholder.com/150", price: "Rp 50.000" },
      { id: 2, name: "Topi Fedora", image: "https://via.placeholder.com/150", price: "Rp 70.000" },
      { id: 3, name: "Topi Custom", image: "https://via.placeholder.com/150", price: "Rp 80.000" },
      { id: 4, name: "Topi Snapback", image: "https://via.placeholder.com/150", price: "Rp 50.000" },
      { id: 5, name: "Topi Fedora", image: "https://via.placeholder.com/150", price: "Rp 70.000" },
      { id: 6, name: "Topi Custom", image: "https://via.placeholder.com/150", price: "Rp 80.000" },
      { id: 7, name: "Topi Snapback", image: "https://via.placeholder.com/150", price: "Rp 50.000" },
      { id: 8, name: "Topi Fedora", image: "https://via.placeholder.com/150", price: "Rp 70.000" },
    ],
  };

  return (
    <section className="py-16 bg-gradient-to-b from-purple-700 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        {/* Tab Navigation */}
        <div className="flex justify-center space-x-4 mb-8">
          {Object.keys(products).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-lg ${
                activeTab === tab
                  ? "bg-white text-purple-700"
                  : "bg-purple-500 hover:bg-purple-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Product Cards */}
        <div className="flex overflow-x-scroll space-x-4 scrollbar-hide">
          {products[activeTab].map((product) => (
            <div
              key={product.id}
              className="flex-none w-60 bg-white text-black rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p className="text-gray-700">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;