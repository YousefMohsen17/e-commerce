import ProductSlider from "@/app/_components/ProductSlider/ProductSlider";
import getSingleProducts from "@/apis/singleProduct";
import { FaHeart, FaStar } from "react-icons/fa6";
import AddCartButton from "@/app/_components/AddCartButton/AddCartButton";

export default async function ProductDetails({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const product = await getSingleProducts(id);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:w-[80%] w-[50%] py-10 mx-auto gap-5">
      <ProductSlider product={product} />
      <div className="flex flex-col justify-center">
        <h1 className="">{product.title}</h1>
        <p className="mt-2 ">{product.description}</p>
        <div className="flex justify-between mt-3">
          <p>{product.price} EGP</p>
          <p className="flex items-center gap-1">
            {product.ratingsAverage}
            <FaStar className="text-yellow-300" />
          </p>
        </div>
        <div className="flex items-center justify-between">
          <AddCartButton id={product.id} />

          <FaHeart className="ml-2 text-2xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
