"use client";

import cashPayment from "@/apis/cashPayment";
import onlinePayment from "@/apis/onlinePayment";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cartContext } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { useContext, useRef } from "react";
import { toast } from "sonner";

export default function Checkout() {
  const details = useRef<HTMLInputElement>(null);
  const phone = useRef<HTMLInputElement>(null);
  const city = useRef<HTMLInputElement>(null);
  const detailsValue = details.current?.value || "";
  const phoneValue = phone.current?.value || "";
  const cityValue = city.current?.value || "";
  const { cartId, init } = useContext(cartContext);
  const router = useRouter();
  async function handleCashPayment() {
    const values = {
      details: detailsValue,
      phone: phoneValue,
      city: cityValue,
    };
    if (!values.details || !values.phone || !values.city) return;
    try {
      await cashPayment(cartId, values);
      init();
      toast.success("Order Placed Successfully", {
        richColors: true,
        closeButton: true,
        duration: 3000,
      });
      router.push("/");
    } catch {
      toast.error("Failed To Place Order", {
        richColors: true,
        closeButton: true,
        duration: 3000,
      });
    }
  }
  async function handleOnlinePayment() {
    const values = {
      details: detailsValue,
      phone: phoneValue,
      city: cityValue,
    };
    if (!values.details || !values.phone || !values.city) return;
    try {
      const data = await onlinePayment(cartId, values);
      console.log(data);
      init();
      toast.success("Order Placed Successfully", {
        richColors: true,
        closeButton: true,
        duration: 3000,
      });
      if (data.status === "success") window.location.href = data.session.url;
    } catch {
      toast.error("Failed To Place Order", {
        richColors: true,
        closeButton: true,
        duration: 3000,
      });
    }
  }
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="flex flex-col gap-6 w-[80%] mx-auto mt-3.5">
        <div>
          <label> Details</label>
          <Input type="text" ref={details} required />
        </div>
        <div>
          <label> phone</label>
          <Input type="tel" ref={phone} required />
        </div>
        <div>
          <label> City</label>
          <Input type="text" ref={city} required />
        </div>
        <Button
          className="ms-auto bg-green-500 hover:bg-green-600 cursor-pointer"
          onClick={handleCashPayment}
        >
          Cash Payment
        </Button>
        <Button
          className="ms-auto bg-green-500 hover:bg-green-600 cursor-pointer"
          onClick={handleOnlinePayment}
        >
          Online Payment
        </Button>
      </div>
    </form>
  );
}
