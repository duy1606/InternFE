import React, { useState, useEffect } from "react";
import BookDetailModal from "./BookDetailModal";

const SkeletonCard = () => (
  <div className="bg-white p-3 rounded-md shadow-sm animate-pulse">
    <div className="w-full h-80 bg-gray-300 rounded mb-3"></div>
    <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
  </div>
);

const SuggestionModal = ({ show, onClose, suggestions = [] }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const onCloseModal = () => {
    setShowModal(false);
  };

  const formatVND = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white/90 backdrop-blur-lg w-full max-w-md sm:max-w-xl lg:max-w-3xl mx-4 rounded-xl shadow-xl p-4 sm:p-6 relative animate-fade-in overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl cursor-pointer "
        >
          ×
        </button>

        <h2 className="text-lg sm:text-xl font-bold mb-4 text-center">
          Sản phẩm gợi ý
        </h2>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        ) : suggestions.length === 0 ? (
          <p className="text-gray-600 text-center">Không có sản phẩm gợi ý.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {suggestions.map((item, index) => (
              <div
                onClick={() => {
                  setShowModal(true);
                  setSelectedBook(item);
                }}
                key={index}
                className="p-3 rounded-md shadow-sm hover:shadow-md transition w-full cursor-pointer"
              >
                <img
                  src={item.imgURL}
                  alt={item.name}
                  className="w-full h-80 object-cover mb-2 rounded"
                />
                <h3
                  title={item.name}
                  className="font-semibold text-sm truncate max-w-full overflow-hidden whitespace-nowrap"
                >
                  {item.name}
                </h3>
                <p className="text-red-600 font-bold">
                  {formatVND(item.price)}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {showModal && (
        <BookDetailModal
          onClose={onCloseModal}
          show={showModal}
          book={selectedBook}
        />
      )}
    </div>
  );
};

export default SuggestionModal;
