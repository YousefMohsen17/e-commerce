import axios from "axios";

export default function getAllBrands() {
  const data = axios.get("https://ecommerce.routemisr.com/api/v1/brands");

  return data;
}
