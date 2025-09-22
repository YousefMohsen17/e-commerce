import { getMyToken } from "@/utils/token";
import axios from "axios";

export default async function removeCartItemAction() {
  const token = await getMyToken();
  const data = await axios.delete(
    `https://ecommerce.routemisr.com/api/v1/cart`,
    {
      headers: {
        token: token as string,
      },
    }
  );
  return data;
}
