import axios from "axios";

const BASE_URL = "/api";

// 모든 상품 조회
export function fetchProducts() {
  return axios.get(`${BASE_URL}/products`);
}

// 단일 상품 상세 조회
export function fetchProductById(id) {
  return axios.get(`${BASE_URL}/products/${id}`);
}

// 상품 생성
export function createProduct(data) {
  return axios.post(`${BASE_URL}/products`, data);
}

// 상품 수정
export function updateProduct(id, data) {
  return axios.put(`${BASE_URL}/products/${id}`, data);
}

// 상품 삭제
export function deleteProduct(id) {
  return axios.delete(`${BASE_URL}/products/${id}`);
}
