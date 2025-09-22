"use client";
import { MdDelete } from "react-icons/md";
import Image from "next/image";
import { useContext } from "react";
import { cartContext } from "@/context/CartContext";
import Loading from "../loading";
import { useRouter } from "next/navigation";
import { Wishlist as MyWishlist } from "@/types/cart.t";

export default function Wishlist() {
  const router = useRouter();
  const {
    products,
    loading,
    removeWishList,
    addProductToCart,
    getTheUserCart,
  } = useContext(cartContext);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="bg-slate-100 w-[80%] mx-auto p-5 ">
      <h1 className="font-bold mb-4">My wish List</h1>

      <div className="flex flex-col gap-3">
        {(products as MyWishlist[]).map(function (product, idx: number) {
          return (
            <div key={idx} className="flex items-center gap-3">
              <Image
                width={300}
                height={300}
                src={product.imageCover}
                alt={product.title}
              />
              <div className="flex flex-col gap-2">
                <h1 className="font-bold">{product.title}</h1>
                <p className="font-bold">{product.price} EGP</p>
                <p
                  className="text-red-500 cursor-pointer flex items-center"
                  onClick={() => removeWishList(product._id)}
                >
                  <MdDelete /> Remove
                </p>
              </div>
              <div className="ms-auto ">
                <button
                  className="border-2 border-green-400 p-5  cursor-pointer"
                  onClick={() => {
                    addProductToCart(product._id);
                    router.push("/cart");
                    getTheUserCart();
                  }}
                >
                  add to cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
