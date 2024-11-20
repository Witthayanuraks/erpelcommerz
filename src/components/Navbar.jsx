import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-purple-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-lg font-bold">XI RPL 2</div>
        <ul className="flex space-x-6">
          <li>
            <a href="#home" className="hover:text-gray-300">
              Beranda
            </a>
          </li>
          <li>
            <a href="#galeri" className="hover:text-gray-300">
              Galeri
            </a>
          </li>
          <li>
            <a href="#catalog" className="hover:text-gray-300">
              Katalog
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
