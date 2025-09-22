import { Category } from "@/types/category.t";

export default async function getAllCat() {
  const response = await fetch(
    "https://ecommerce.routemisr.com/api/v1/categories"
  );
  const { data }: { data: Category[] } = await response.json();

  return data;
}
