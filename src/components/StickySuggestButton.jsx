import { useState } from "react";
import { FaLightbulb } from "react-icons/fa";
import SuggestionModal from "./SuggestionModal";

const StickySuggestButton = () => {
  const [show, setShow] = useState(false);
  const onClose = () => {
    setShow(false);
  };
  const suggestList = [
    {
      name: "Giáo Trình Kinh Tế Bất Động Sản",
      imgURL:
        "https://cdn1.fahasa.com/media/catalog/product/9/7/9786047932900.jpg",
      price: 158000,
      shortDesc:
        "Cung cấp kiến thức nền tảng về thị trường và kinh tế bất động sản, phục vụ cho việc học các môn chuyên ngành và hiểu rõ vai trò của bất động sản trong nền kinh tế.",
      fullDesc:
        "Học phần giúp sinh viên hiểu tổng quan về bất động sản, vai trò trong nền kinh tế, quy luật vận hành thị trường và nguyên tắc quản lý nhà nước. Đây là nền tảng quan trọng cho việc học các môn chuyên sâu và vận dụng trong thực tiễn ngành bất động sản.",
      rate: "4",
      id: "1",
    },
    {
      name: "Giáo Trình Đàm Phán Quốc Tế",
      imgURL:
        "https://cdn1.fahasa.com/media/catalog/product/9/7/9786047945597.jpg",
      price: 102000,
      shortDesc:
        "Giáo trình Đàm phán quốc tế cung cấp kiến thức nền tảng và kỹ năng thực tiễn về quá trình đàm phán trong môi trường toàn cầu, từ lý thuyết cơ bản đến nghệ thuật thuyết phục và xử lý tình huống phức tạp.",
      fullDesc:
        "Giáo trình Đàm phán quốc tế cung cấp kiến thức toàn diện về bản chất, môi trường và các yếu tố ảnh hưởng đến đàm phán quốc tế. Giáo trình gồm hai phần: phần lý thuyết nền tảng và phần kỹ năng thực tiễn như tổ chức, chiến thuật, thuyết phục và đàm phán đa phương. Tài liệu phù hợp cho sinh viên và người làm việc trong lĩnh vực kinh tế, kinh doanh và đối ngoại.",
      rate: "3",
      id: "2",
    },
    {
      name: "Giáo Trình Cao Học Quản Trị Kinh Doanh",
      imgURL:
        "https://cdn1.fahasa.com/media/catalog/product/9/7/9786047939053.jpg",
      price: 280000,
      shortDesc:
        "Quản trị Kinh doanh quốc tế bậc Đại học, bao gồm 2 phần chính, 10 chương, cuối mỗi chương có câu hỏi ôn tập và thảo luận, và có các điển cứu để người đọc thực hành, trao đổi và áp dụng các kiến thức đã học.",
      fullDesc:
        "Kinh doanh quốc tế hiện là một ngành học được giảng dạy trong hầu hết các trường có liên quan đến quản trị kinh doanh nói chung, trong đó môn học Quản trị Kinh doanh quốc tế nhằm nghiên cứu kỹ môi trường kinh doanh quốc tế, từ đó hoạch định chiến lược kinh doanh phù hợp với từng giai đoạn phát triển của công ty tham gia các hoạt động kinh doanh quốc tế, cũng như thực hiện việc quản trị các hoạt động trong một đơn vị kinh doanh quốc tế. Trong bối cảnh đó, Giáo trình Cao học Quản trị Kinh doanh quốc tế được biên soạn nhằm đáp ứng nhu cầu học tập, trước hết của học viên ngành quản trị kinh doanh, ngành kinh doanh quốc tế, ngành thương mại, ngành du lịch nói chung, cũng như đáp ứng nhu cầu tham khảo của độc giả, giới doanh nhân, và của những người đang làm việc liên quan đến các hoạt động kinh doanh quốc tế. Giáo trình Sau Đại học Quản trị Kinh doanh quốc tế được biên soạn trên cơ sở phát triển xa hơn những kiến thức đã được nghiên cứu tại môn học",
      rate: "4",
      id: "3",
    },
  ];
  return (
    <>
      <button
        onClick={() => setShow(true)}
        className="fixed bottom-6 right-6 z-50 cursor-pointer flex items-center gap-2 bg-yellow-400 text-white px-4 py-3 rounded-full shadow-lg transition-opacity duration-300 opacity-50 hover:opacity-100"
      >
        <FaLightbulb />
        Gợi ý sản phẩm
      </button>
      {show && (
        <SuggestionModal
          show={show}
          onClose={onClose}
          suggestions={suggestList}
        ></SuggestionModal>
      )}
    </>
  );
};

export default StickySuggestButton;
