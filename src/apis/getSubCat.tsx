import { Subcategory } from "@/types/cart.t";

export default async function getSubCat(id: string) {
  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`
  );
  const { data }: { data: Subcategory[] } = await response.json();
  return data;
}
