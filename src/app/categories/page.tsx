import AllCategories from "../_components/AllCategories/AllCategories";
import getAllCat from "@/apis/getAllCat";

export default async function Categories() {
  const data = await getAllCat();

  return (
    <div className="w-[80%] mx-auto">
      <h1 className="text-5xl text-center text-green-500 mb-10 mt-10">
        Categories
      </h1>
      <AllCategories data={data} />;
    </div>
  );
}
