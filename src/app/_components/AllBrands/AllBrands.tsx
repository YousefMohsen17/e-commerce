import getAllBrands from "@/apis/getAllBrands";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default async function AllBrands() {
  const data = await getAllBrands();

  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2   ">
        {data.map((product, idx: number) => (
          <div key={idx}>
            <Card className="overflow-hidden group cursor-pointer transition-[box-shadow] duration-500 hover:shadow-sm hover:shadow-green-600 ">
              <CardHeader>
                <Image
                  width={500}
                  height={500}
                  src={product.image}
                  alt={product.name}
                />
              </CardHeader>
              <CardContent>
                <p className="text-green-500 text-center">{product.name}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}
