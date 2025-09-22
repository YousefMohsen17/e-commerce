import Image from "next/image";
import errorPicture from "../../public/screens/404.jpg";
export default function ErrorPage() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
      <Image src={errorPicture} alt="Not Found" />
    </div>
  );
}
