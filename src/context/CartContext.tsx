"use client";
import { createContext, useEffect, useState } from "react";
import getUserCart from "@/apis/getUserCart";
import clearCartAction from "@/apis/clearCartAction";
import { ProductCart, Wishlist } from "@/types/cart.t";
import addToCart from "@/apis/addToCart";
import removeCartItemAction from "@/apis/removeCartItemAction";
import updateCartAction from "@/apis/updateCartAction";
import getWishListProducts from "@/apis/getWishListProducts";
import { usePathname } from "next/navigation";
import removeWishListAction from "@/apis/removeWishListAction";

type CartContextType = {
  price: number;
  products: ProductCart[] | Wishlist[];
  numOfCartItems: number;
  loading: boolean;
  cartId: string;
  addProductToCart: (id: string) => Promise<void>;
  removeCartItem: (id: string) => Promise<void>;
  updateCart: (id: string, count: number) => Promise<void>;
  clearCart: () => Promise<void>;
  init: () => void;
  getTheUserCart: () => Promise<void>;
  getTheUserWishlist: () => Promise<void>;
  removeWishList: (id: string) => Promise<void>;
};

export const cartContext = createContext<CartContextType>({
  price: 0,
  products: [],
  numOfCartItems: 0,
  loading: false,
  cartId: "",
  addProductToCart: () => Promise.resolve(),
  removeCartItem: () => Promise.resolve(),
  updateCart: () => Promise.resolve(),
  clearCart: () => Promise.resolve(),
  init: () => {},
  getTheUserCart: () => Promise.resolve(),
  getTheUserWishlist: () => Promise.resolve(),
  removeWishList: () => Promise.resolve(),
});

export const CartContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [numOfCartItems, setNumOfCartItems] = useState(0);
  const [products, setProducts] = useState<ProductCart[] | Wishlist[]>([]);
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [cartId, setCartId] = useState("");
  const pathname = usePathname();

  async function addProductToCart(id: string) {
    try {
      const data = await addToCart(id);
      await getTheUserCart();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  async function updateCart(id: string, count: number) {
    try {
      setLoading(true);
      const data = await updateCartAction(id, count);

      if (data) {
        setProducts(data?.data.data.products);

        setNumOfCartItems(data.data?.numOfCartItems);

        setPrice(data?.data.data.totalCartPrice);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  async function clearCart() {
    try {
      setLoading(true);
      const data = await clearCartAction();

      if (data) {
        setProducts([]);

        setNumOfCartItems(0);

        setPrice(0);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  async function removeCartItem(id: string) {
    try {
      setLoading(true);
      const data = await removeCartItemAction(id);

      if (data) {
        setProducts(data?.data.data.products);

        setNumOfCartItems(data.data?.numOfCartItems);

        setPrice(data?.data.data.totalCartPrice);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  async function removeWishList(id: string) {
    try {
      setLoading(true);
      const data = await removeWishListAction(id);
      if (data) {
        await getTheUserWishlist();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function getTheUserCart() {
    try {
      setLoading(true);
      const data = await getUserCart();

      if (data) {
        setProducts(data?.data.products);
        setNumOfCartItems(data.numOfCartItems);
        setPrice(data?.data.totalCartPrice);
        setCartId(data?.cartId);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  async function getTheUserWishlist() {
    try {
      setLoading(true);
      const data = await getWishListProducts();
      console.log(data);

      if (data) {
        setProducts(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  function init() {
    setCartId("");
    setProducts([]);
    setNumOfCartItems(0);
    setPrice(0);
  }
  useEffect(() => {
    if (pathname.includes("wishlist")) {
      getTheUserWishlist();
    } else {
      getTheUserCart();
    }
  }, [pathname]);
  return (
    <cartContext.Provider
      value={{
        price,
        products,
        numOfCartItems,
        loading,
        addProductToCart,
        removeCartItem,
        updateCart,
        clearCart,
        cartId,
        init,
        getTheUserCart,
        getTheUserWishlist,
        removeWishList,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
