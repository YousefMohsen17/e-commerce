import axios from "axios";

export default function getAllCat() {
  const data = axios.get("https://ecommerce.routemisr.com/api/v1/categories");
  return data;
}
