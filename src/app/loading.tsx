import { FaSpinner } from "react-icons/fa";

export default function Loading() {
  return (
    <div className="animate-spin text-8xl flex justify-center items-center h-screen">
      <FaSpinner />
    </div>
  );
}
