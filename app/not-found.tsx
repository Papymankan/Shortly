import Header from "@/components/Header"; // update the path if needed
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full min-h-screen bg-white relative flex flex-col">
      {/* Header */}
      <div className="absolute top-0 w-full z-10">
        <Header />
      </div>

      {/* Center Content */}
      <div className="flex flex-1 justify-center items-center px-4 mt-24">
        <div className="text-center space-y-7">
          <h1 className="text-6xl md:text-7xl font-bold animate-pulse text-cyan">
            404 - Page Not Found
          </h1>
          <p className="text-lg text-gray-600">
            Oops! The page you are looking for doesn’t exist.
          </p>
          <Link
            href={"/"}
            className="rounded-full bg-cyan px-8 py-3 text-white duration-200 hover:opacity-70 inline-block"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
