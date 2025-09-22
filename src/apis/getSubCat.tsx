import axios from "axios";

export default async function getSubCat(id: string) {
  const data = await axios.get(
    `https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`
  );
  return data.data;
}
