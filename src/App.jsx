import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Catalog from "./components/Catalog";

const App = () => {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <Catalog />
      <section
        id="galeri"
        className="h-screen bg-white text-gray-800 flex items-center justify-center"
      >
        <div>
          <h2 className="text-3xl font-bold">Galeri</h2>
          <p className="mt-2 text-lg">Konten galeri akan muncul di sini.</p>
        </div>
      </section>
    </div>
  );
};

export default App;
