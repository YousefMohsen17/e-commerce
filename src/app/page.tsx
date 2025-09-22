"use server";

import Slider from "./_components/Slider/Slider";
import Categories from "./_components/Categories/Categories";
import AllProducts from "./_components/AllProducts/AllProducts";
export default async function Home() {
  console.log("NEXTAUTH_URL:", process.env.NEXTAUTH_URL);
  console.log("API:", process.env.API);
  return (
    <section className="py-5 w-[80%] mx-auto">
      <Slider />
      <Categories />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2   ">
        <AllProducts />
      </div>
    </section>
  );
}
