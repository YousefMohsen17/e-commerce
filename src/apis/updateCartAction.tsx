import { getMyToken } from "@/utils/token";
import axios from "axios";

export default async function updateCartAction(id: string, count: number) {
  const token = await getMyToken();
  const value = {
    count: count,
  };
  const data = await axios.put(
    `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
    value,
    {
      headers: {
        token: token as string,
      },
    }
  );
  return data;
}
