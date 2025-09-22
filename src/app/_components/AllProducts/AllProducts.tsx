import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { FaStar } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import AddCartButton from "../AddCartButton/AddCartButton";
import AddWishListButton from "../AddtoWishlistButton/AddWishListButton";
import getAllProducts from "@/apis/getAllProduct";

export default async function AllProducts() {
  const data = await getAllProducts();

  return (
    <>
      {data.map((product, idx: number) => (
        <div key={idx}>
          <Link href={"/product-details/" + product.id}>
            <Card className="overflow-hidden group cursor-pointer transition-[box-shadow] duration-500 hover:shadow-sm hover:shadow-green-600 ">
              <CardHeader>
                <Image
                  width={500}
                  height={500}
                  src={product.imageCover}
                  alt={product.title}
                />
              </CardHeader>
              <CardContent>
                <p className="text-green-500">{product.category.name}</p>
                <p className="mt-2 font-bold line-clamp-1">{product.title}</p>
                <div className="flex justify-between mt-3">
                  <p>{product.price} EGP</p>
                  <p className="flex items-center gap-1">
                    {product.ratingsAverage}
                    <FaStar className="text-yellow-300" />
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <AddCartButton id={product.id} />
                <button>
                  <AddWishListButton id={product.id} />
                </button>
              </CardFooter>
            </Card>
          </Link>
        </div>
      ))}
    </>
  );
}
