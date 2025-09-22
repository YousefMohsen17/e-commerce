import { getMyToken } from "@/utils/token";
import axios from "axios";

export default async function getWishListProducts() {
  const token = await getMyToken();
  const { data } = await axios.get(
    "https://ecommerce.routemisr.com/api/v1/wishlist",
    {
      headers: {
        token: token as string,
      },
    }
  );
  return data;
}
