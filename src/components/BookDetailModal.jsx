import React from "react";

const BookDetailModal = ({ show, onClose, book }) => {
  if (!show || !book) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-3xl rounded-xl shadow-lg p-6 relative animate-fade-in overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-black text-2xl font-bold cursor-pointer"
        >
          ×
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start text-center lg:text-left">
          <div className="lg:col-span-4 flex justify-center lg:justify-start h-full">
            <img
              src={book.imgURL}
              alt={book.name}
              className="w-full max-w-[300px] lg:max-w-[100%] h-full aspect-[3/4] object-cover"
            />
          </div>

          <div className="lg:col-span-8 space-y-3">
            <h2 className="text-xl font-bold">{book.name}</h2>
            <p className="text-red-600 font-semibold">
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(book.price)}
            </p>
            <p className="text-sm text-gray-700 whitespace-pre-line">
              <strong>Chi tiết:</strong> {book.fullDesc}
            </p>
            <p className="text-sm">
              <strong>Đánh giá:</strong>{" "}
              {Array.from({ length: book.rate }).map((_, i) => (
                <span key={i}>⭐</span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailModal;
