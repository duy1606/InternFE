import axios from "axios";

const API_URL = "https://686f073491e85fac429f927a.mockapi.io/api/books";

export const getAllBooks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Lỗi khi lấy danh sách sách:", error);
    throw error;
  }
};
