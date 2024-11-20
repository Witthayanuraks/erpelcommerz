import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen bg-gradient-to-b from-purple-500 to-purple-700 flex items-center justify-center text-center text-white"
    >
      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold">
          Selamat Datang di Website XI RPL 2
        </h1>
        <button className="px-6 py-3 bg-white text-purple-700 font-bold rounded-full hover:bg-gray-200 transition">
         Lanjutkan
        </button>
      </div>
    </section>
  );
};

export default Hero;
