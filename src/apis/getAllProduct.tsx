import { Product } from "../types/product.t";

export default async function getAllProducts() {
  const response = await fetch(
    "https://ecommerce.routemisr.com/api/v1/products"
  );
  const { data }: { data: Product[] } = await response.json();
  return data;
}
