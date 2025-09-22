import getAllCategories from "@/apis/getAllCategories";
import CategoriesSlider from "../CategoriesSlider/CategoriesSlider";

export default async function Categories() {
  const data = await getAllCategories();
  return <CategoriesSlider categories={data} />;
}
