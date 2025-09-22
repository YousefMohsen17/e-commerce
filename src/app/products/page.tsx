import { Input } from "@/components/ui/input";
import AllProducts from "../_components/AllProducts/AllProducts";

export default function Products() {
  return (
    <>
      <div className="w-[80%] mx-auto mt-10 ">
        <Input placeholder="Search" className="mb-10" />
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2   ">
          <AllProducts />
        </div>
      </div>
    </>
  );
}
