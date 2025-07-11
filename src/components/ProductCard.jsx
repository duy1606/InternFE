import { useState } from "react";
import Notification from "./Notification";
import BookDetailModal from "./BookDetailModal";

const ProductCard = ({ product }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Định dạng tiền
  const formatVND = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };

  const onClose = () => {
    setShowModal(false);
  };

  //Click btn xem chi tiết

  const handleBtnDetail = () => {
    setShowModal(true);
    let history = JSON.parse(localStorage.getItem("view_history")) || [];
    const exists = history.some((item) => item.id === product.id);
    if (exists) return;

    history.push(product);
    localStorage.setItem("view_history", JSON.stringify(history));
  };

  // Click btn yêu thích
  const handleBtnLike = () => {
    let likeList = JSON.parse(localStorage.getItem("likeList")) || [];

    const exists = likeList.some((item) => item.id === product.id);
    if (exists) {
      setMessage("Sản phẩm đã có trong danh sách yêu thích");
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000);
      return;
    }

    likeList.push(product);
    localStorage.setItem("likeList", JSON.stringify(likeList));
    setMessage("Đã thêm vào yêu thích");
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-2xl transition">
      <img
        src={product.imgURL}
        alt={product.name}
        className="w-full h-80 object-cover rounded-xl mb-4 hover:scale-105 transition-all duration-500"
      />

      <h2
        className="text-lg font-semibold truncate max-w-full"
        title={product.name}
      >
        {product.name}
      </h2>

      <p className="text-sm text-gray-600 my-2">{product.shortDesc}</p>

      <div className="text-red-600 font-semibold mb-3">
        {formatVND(product.price)}
      </div>

      <div className="flex flex-wrap gap-2 mt-4 justify-center">
        <button
          onClick={() => handleBtnDetail()}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 text-sm transition cursor-pointer"
        >
          Xem chi tiết
        </button>
        <button
          onClick={handleBtnLike}
          className="bg-red-100 text-red-600 px-4 py-2 rounded-lg hover:bg-red-200 border border-red-600 text-sm transition cursor-pointer"
        >
          Yêu thích
        </button>
      </div>

      <Notification message={message} show={showPopup} />
      <BookDetailModal
        show={showModal}
        book={product}
        onClose={onClose}
      ></BookDetailModal>
    </div>
  );
};

export default ProductCard;
