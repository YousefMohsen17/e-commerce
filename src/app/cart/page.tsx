"use client";
import { MdDelete } from "react-icons/md";
import Image from "next/image";
import { useContext } from "react";
import { cartContext } from "@/context/CartContext";
import Loading from "../loading";
import Link from "next/link";

export default function Cart() {
  const {
    price,
    products,
    numOfCartItems,
    loading,
    removeCartItem,
    updateCart,
    clearCart,
    cartId,
  } = useContext(cartContext);
  if (loading) {
    return <Loading />;
  }
  if (products.length === 0) {
    return (
      <h1 className="text-2xl flex justify-center items-center h-screen">
        no products
      </h1>
    );
  }
  return (
    <div className="bg-slate-100 w-[80%] mx-auto p-5 ">
      <div className="flex justify-between mb-4">
        <h1 className="font-bold">Cart Shop</h1>
        <Link href={"/check-out/" + cartId}>
          <button className="bg-blue-500 cursor-pointer text-white p-2">
            {" "}
            checkout
          </button>
        </Link>
      </div>
      <button
        className="bg-red-500 cursor-pointer text-white p-2 mb-4"
        onClick={() => clearCart()}
      >
        clearCart
      </button>
      <div className="flex justify-between mb-4">
        <p>
          total price : <strong className="text-green-500">{price}</strong>
        </p>
        <p>
          total number of items :{" "}
          <strong className="text-green-500">{numOfCartItems}</strong>
        </p>
      </div>
      <div className="flex flex-col gap-3">
        {products?.map(function (product, idx: number) {
          return (
            <div key={idx} className="flex items-center gap-3">
              <Image
                width={300}
                height={300}
                src={product.product.imageCover}
                alt={product.product.title}
              />
              <div className="flex flex-col gap-2">
                <h1 className="font-bold">{product.product.title}</h1>
                <p className="font-bold">{product.price} EGP</p>
                <p
                  className="text-red-500 cursor-pointer flex items-center"
                  onClick={() => removeCartItem(product.product._id)}
                >
                  <MdDelete /> Remove
                </p>
              </div>
              <div className="ms-auto ">
                <p className="flex items-center gap-3">
                  <span
                    className="outline-1 outline-green-500 rounded-[50%] text-2xl p-1.5 inline-flex items-center justify-center w-[30px] h-[30px] cursor-pointer"
                    onClick={() =>
                      updateCart(product.product._id, product.count + 1)
                    }
                  >
                    {" "}
                    +
                  </span>{" "}
                  <span>{product.count}</span>
                  <span
                    className="outline-1 outline-green-500 rounded-[50%] text-2xl p-1.5 inline-flex items-center justify-center w-[30px] h-[30px] cursor-pointer"
                    onClick={() =>
                      updateCart(product.product._id, product.count - 1)
                    }
                  >
                    {" "}
                    -{" "}
                  </span>{" "}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
