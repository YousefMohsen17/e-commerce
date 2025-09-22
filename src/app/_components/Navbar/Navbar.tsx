"use client";
import Link from "next/link";
import logo from "../../../../public/screens/freshcart-logo.svg";
import Image from "next/image";
import { IoMdMenu } from "react-icons/io";
import { useContext, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { FaShoppingCart } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { cartContext } from "@/context/CartContext";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const { numOfCartItems } = useContext(cartContext);
  const { status } = useSession();

  return (
    <nav className="bg-slate-100 ">
      <div className="relative flex justify-between items-center py-5 w-[80%] mx-auto z-10">
        <Link href="/sign-in">
          <Image src={logo} alt="logo" />
        </Link>
        {status === "unauthenticated" && (
          <>
            <ul className="hidden lg:flex gap-4  ">
              <li className="text-gray-600 hover:text-gray-800 transition-all duration-300">
                <Link href={"/sign-up"}>register</Link>
              </li>
              <li className="text-gray-600 hover:text-gray-800 transition-all duration-300">
                <Link href={"/sign-in"}>log in</Link>
              </li>
            </ul>
          </>
        )}
        {status === "authenticated" && (
          <>
            <ul className="hidden lg:flex gap-4  ">
              <li className="text-gray-600 hover:text-gray-800 transition-all duration-300">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="text-gray-600 hover:text-gray-800 transition-all duration-300">
                <Link href={"/cart"}>Cart</Link>
              </li>
              <li className="text-gray-600 hover:text-gray-800 transition-all duration-300">
                <Link href={"/wishlist"}>Wish-list</Link>
              </li>
              <li className="text-gray-600 hover:text-gray-800 transition-all duration-300">
                <Link href={"/products"}>Products</Link>
              </li>
              <li className="text-gray-600 hover:text-gray-800 transition-all duration-300">
                <Link href={"/categories"}>Categories</Link>
              </li>
              <li className="text-gray-600 hover:text-gray-800 transition-all duration-300">
                <Link href={"/brands"}>Brands</Link>
              </li>
            </ul>
            <div className="flex gap-5 items-center">
              <div className="relative">
                <Link href={"/cart"}>
                  <Badge
                    className=" absolute top-[-10px] right-[-16px] h-7 w-7 rounded-[50%]   bg-green-500"
                    variant="outline"
                  >
                    {numOfCartItems}
                  </Badge>
                  <FaShoppingCart className="text-3xl"></FaShoppingCart>
                </Link>
              </div>
              <button
                className="hidden lg:block text-gray-600 hover:text-gray-900 transition-all duration-300 cursor-pointer"
                onClick={() =>
                  signOut({
                    callbackUrl: "/sign-in",
                  })
                }
              >
                log out
              </button>
            </div>
          </>
        )}
        <button
          className="lg:hidden cursor-pointer  text-2xl"
          onClick={() => setShowMenu(!showMenu)}
        >
          <IoMdMenu />
        </button>
      </div>

      <ul
        className={`bg-slate-100  flex flex-col items-center justify-center  transition-all duration-300  overflow-hidden absolute left-0 w-full py-5 gap-5  ${
          showMenu ? "translate-y-0  z-[1] " : "-translate-y-full z-[-1] "
        }`}
      >
        {status === "authenticated" && (
          <>
            <li className="text-gray-600 hover:text-gray-800 transition-all duration-300">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="text-gray-600 hover:text-gray-800 transition-all duration-300">
              <Link href={"/cart"}>Cart</Link>
            </li>
            <li className="text-gray-600 hover:text-gray-800 transition-all duration-300">
              <Link href={"/wishlist"}>Wish-list</Link>
            </li>
            <li className="text-gray-600 hover:text-gray-800 transition-all duration-300">
              <Link href={"/products"}>Products</Link>
            </li>
            <li className="text-gray-600 hover:text-gray-800 transition-all duration-300">
              <Link href={"/categories"}>Categories</Link>
            </li>
            <li className="text-gray-600 hover:text-gray-800 transition-all duration-300">
              <Link href={"/brands"}>Brands</Link>
            </li>

            <button
              className=" text-gray-600 hover:text-gray-900 transition-all duration-300 cursor-pointer"
              onClick={() =>
                signOut({
                  callbackUrl: "/sign-in",
                })
              }
            >
              log out
            </button>
          </>
        )}
        {status === "unauthenticated" && (
          <>
            <Link href={"/sign-up"}>
              <li className=" text-gray-600 hover:text-gray-800 transition-all duration-300">
                register
              </li>
            </Link>
            <Link href={"/sign-in"}>
              <li className=" text-gray-600 hover:text-gray-800 transition-all duration-300">
                log in
              </li>
            </Link>
          </>
        )}
      </ul>
    </nav>
  );
}
