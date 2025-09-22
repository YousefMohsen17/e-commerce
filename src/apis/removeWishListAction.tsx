import { getMyToken } from "@/utils/token";
import axios from "axios";

export default async function removeWishListAction(id: string) {
  const token = await getMyToken();
  const { data } = await axios.delete(
    `https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,
    {
      headers: {
        token: token as string,
      },
    }
  );
  return data;
}
