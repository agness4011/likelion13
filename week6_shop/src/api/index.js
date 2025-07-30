import axios from "axios";

const api = axios.create({
  baseURL: "/api", // 실제 백엔드 API 경로
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});

// 요청 인터셉터 (예: 토큰 자동 삽입)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// 응답 인터셉터 (예: 에러 전역 처리)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

// ✅ 여기를 추가해야 함!
export const APIService = {
  public: api,
};
export function fetchProducts() {
  return api.get("/products");
}
export function deleteProduct(id) {
  return api.delete(`/products/${id}`);
}
export function createProduct(data) {
  return api.post("/products", data);
}
