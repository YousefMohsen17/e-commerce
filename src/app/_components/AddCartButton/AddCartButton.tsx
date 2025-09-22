"use client";
import { Button } from "@/components/ui/button";
import { cartContext } from "@/context/CartContext";
import { useContext, useState } from "react";

export default function AddCartButton({ id }: { id: string }) {
  const [loading, setLoading] = useState(false);
  const { addProductToCart } = useContext(cartContext);
  async function handleAddToCart(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    try {
      setLoading(true);
      await addProductToCart(id);
    } finally {
      setLoading(false);
    }
  }
  return (
    <Button
      className="bg-green-500 transition-all duration-500 grow-1 hover:bg-green-600 cursor-pointer translate-y-[200%] group-hover:translate-y-0"
      onClick={(e) => handleAddToCart(e)}
      disabled={loading}
    >
      {loading ? "Adding to Cart..." : "+ Add"}
    </Button>
  );
}
