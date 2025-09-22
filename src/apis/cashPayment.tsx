import { getMyToken } from "@/utils/token";
import axios from "axios";

export default async function cashPayment(
  id: string,
  values: {
    details: string;
    phone: string;
    city: string;
  }
) {
  const token = await getMyToken();
  const data = await axios.post(
    `https://ecommerce.routemisr.com/api/v1/orders/${id}`,
    { shippingAddress: values },
    {
      headers: {
        token: token as string,
      },
    }
  );
  return data;
}
