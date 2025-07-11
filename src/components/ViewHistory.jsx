import React from "react";
import ProductCard from "./ProductCard";

const ViewHistory = () => {
  const data = JSON.parse(localStorage.getItem("view_history")) || [];
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Danh sách các sản phẩm đã xem
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.length > 0 ? (
          data.map((item, index) => <ProductCard key={index} product={item} />)
        ) : (
          <div className="col-span-full flex items-center justify-center h-64 text-gray-500 italic">
            Bạn chưa xem sản phẩm nào.
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewHistory;
