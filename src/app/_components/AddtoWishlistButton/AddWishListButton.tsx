"use client";
import addToWishList from "@/apis/addToWishList";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

export default function AddWishListButton({ id }: { id: string }) {
  const [clicked, setClicked] = useState(false);
  async function handleWishList(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    try {
      const data = await addToWishList(id);
      setClicked(true);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <FaHeart
      className={`${
        clicked ? "text-red-600" : ""
      } ml-2 text-2xl cursor-pointer`}
      onClick={(e) => handleWishList(e)}
    />
  );
}
