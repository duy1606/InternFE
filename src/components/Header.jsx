import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState();
  const navigate = useNavigate();
  return (
    <header className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="flex items-center justify-between">
        <div
          onClick={() => navigate("/")}
          className="flex items-center space-x-2 cursor-pointer "
        >
          <img
            src="https://cdn1.fahasa.com/skin/frontend/ma_vanese/fahasa/images/fahasa-logo.png"
            alt="Logo"
            className="w-50 h-10 "
          />
        </div>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-6 text-gray-700">
          <a href="/" className="hover:text-blue-500 transition duration-300">
            Trang chủ
          </a>
          <a
            href="/favorite"
            className="hover:text-blue-500 transition duration-300"
          >
            Sản phẩm yêu thích
          </a>
          <a
            href="/view-history"
            className="hover:text-blue-500 transition duration-300"
          >
            Sản phẩm đã xem
          </a>
        </nav>

        {/* Nút menu mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-blue-600 text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Menu mobile dropdown */}
      {isOpen && (
        <div className="mt-2 flex flex-col space-y-2 md:hidden text-gray-700 transition-all duration-300">
          <a href="/" className="hover:text-blue-500">
            Trang chủ
          </a>
          <a href="/favorite" className="hover:text-blue-500">
            Sản phẩm yêu thích
          </a>
          <a href="view-history" className="hover:text-blue-500">
            Sản phẩm đã xem
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
