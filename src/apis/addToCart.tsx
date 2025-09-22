import { getMyToken } from "@/utils/token";
import axios from "axios";
import { toast } from "sonner";

export default async function addToCart(id: string) {
  try {
    const token = await getMyToken();
    const values = {
      productId: id,
    };
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_API}/cart`,
      values,
      {
        headers: {
          token: token as string,
        },
      }
    );

    if (response?.data.status === "success") {
      toast.success(response.data.message, {
        richColors: true,
        closeButton: true,
        duration: 3000,
      });
    }
    return response.data;
  } catch {
    toast.error("Failed To Add Product", {
      richColors: true,
      closeButton: true,
    });
    return null;
  }
}
