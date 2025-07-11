import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { getAllBooks } from "../services/bookService";

const ProductList = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [priceFilter, setPriceFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true); // ✅ NEW

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      const books = await getAllBooks();
      setData(books);
      setFilteredData(books);
      setLoading(false); // ✅ Done loading
    };

    fetchBooks();
  }, []);

  useEffect(() => {
    handleSearch();
  }, [priceFilter, searchTerm, data]);

  const handlePriceFilter = (e) => {
    setPriceFilter(e.target.value);
  };

  const handleSearch = () => {
    let result = [...data];

    if (searchTerm) {
      result = result.filter((item) =>
        item.name?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (priceFilter === "under500") {
      result = result.filter((item) => item.price < 500000);
    } else if (priceFilter === "500to1000") {
      result = result.filter(
        (item) => item.price >= 500000 && item.price <= 1000000
      );
    } else if (priceFilter === "over1000") {
      result = result.filter((item) => item.price > 1000000);
    }

    setFilteredData(result);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Danh sách sản phẩm
      </h1>

      {/* Filter */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2">
          <label htmlFor="price" className="font-semibold">
            Lọc theo giá:
          </label>
          <select
            id="price"
            value={priceFilter}
            onChange={handlePriceFilter}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm"
          >
            <option value="">Tất cả</option>
            <option value="under500">Dưới 500k</option>
            <option value="500to1000">500k - 1 triệu</option>
            <option value="over1000">Trên 1 triệu</option>
          </select>
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Tìm kiếm sản phẩm..."
            className="border border-gray-300 rounded-md px-4 py-2 text-sm w-full md:w-64"
          />
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {loading ? (
          Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="animate-pulse bg-white p-4 rounded-lg shadow-md space-y-4"
            >
              <div className="bg-gray-300 h-40 w-full rounded-md" />
              <div className="h-4 bg-gray-300 rounded w-3/4" />
              <div className="h-3 bg-gray-200 rounded w-5/6" />
              <div className="h-4 bg-gray-300 rounded w-1/2" />
              <div className="flex gap-2 mt-4">
                <div className="h-8 bg-gray-300 w-1/2 rounded" />
                <div className="h-8 bg-gray-200 w-1/2 rounded" />
              </div>
            </div>
          ))
        ) : filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))
        ) : (
          <div className="col-span-full flex items-center justify-center h-64 text-gray-500 italic">
            Không tìm thấy sản phẩm phù hợp.
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
