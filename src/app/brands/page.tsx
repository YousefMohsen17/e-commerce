import AllBrands from "../_components/AllBrands/AllBrands";

export default function Brands() {
  return (
    <>
      <h1 className="text-5xl text-center text-green-500 mb-10 mt-10">
        All Brands
      </h1>
      <div className="w-[80%] mx-auto">
        <AllBrands />
      </div>
    </>
  );
}
