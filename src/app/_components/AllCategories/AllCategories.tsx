"use client";
import getSubCat from "@/apis/getSubCat";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";

export default function AllCategories({ data }: { data: object }) {
  const [content, setContent] = useState();
  async function handleSub(id: string) {
    const myData = await getSubCat(id);
    console.log(myData.data);
    setContent(
      myData.data.map((product: any, idx: number) => (
        <div key={idx}>
          <Card
            className="overflow-hidden group cursor-pointer transition-[box-shadow] duration-500 hover:shadow-sm hover:shadow-green-600 "
            onClick={() => handleSub(product._id)}
          >
            <CardHeader></CardHeader>
            <CardContent>
              <p className="text-green-500 text-center">{product.name}</p>
            </CardContent>
          </Card>
        </div>
      ))
    );
  }
  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2   ">
        {data.data.map((product, idx: number) => (
          <div key={idx}>
            <Card
              className="overflow-hidden group cursor-pointer transition-[box-shadow] duration-500 hover:shadow-sm hover:shadow-green-600 "
              onClick={() => handleSub(product._id)}
            >
              <CardHeader>
                <Image
                  width={500}
                  height={500}
                  src={product.image}
                  alt={product.name}
                  className="h-[400px] object-cover"
                />
              </CardHeader>
              <CardContent>
                <p className="text-green-500 text-center">{product.name}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
      <div className="mt-10 flex flex-col gap-2.5">{content}</div>
    </>
  );
}
