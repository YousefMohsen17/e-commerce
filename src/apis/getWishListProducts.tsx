import { Wishlist } from "@/types/cart.t";
import { getMyToken } from "@/utils/token";

export default async function getWishListProducts() {
  const token = await getMyToken();
  console.log(token);
  const respons = await fetch(
    "https://ecommerce.routemisr.com/api/v1/wishlist",
    {
      headers: {
        token: token as string,
      },
    }
  );
  const { data }: { data: Wishlist[] } = await respons.json();
  return data;
}
