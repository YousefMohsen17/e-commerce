import { Cart } from "@/types/cart.t";
import { getMyToken } from "@/utils/token";
import axios from "axios";

export default async function getUserCart() {
  const token = await getMyToken();
  const { data }: { data: Cart } = await axios.get(
    "https://ecommerce.routemisr.com/api/v1/cart",
    {
      headers: {
        token: token as string,
      },
    }
  );
  return data;
}
