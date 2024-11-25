import Title from "@/components/title";
import { Link } from "react-router-dom";

export default function ErrorPage() {

    return (
      <div className="flex flex-col gap-12 items-center justify-center min-h-screen bg-gradient-to-r from-slate-900 to-purple-500 text-white">
        <Title text="Oops!" className="text-4xl" />
        <div className="w-full max-w-md">
          <p className="text-center text-gray-200">
            Something went wrong.
          </p>
          <p className="mt-4 text-center text-sm text-gray-300">
            <Link to={"/"} className="text-purple-400 hover:underline">
                Go back
            </Link>
          </p>
        </div>
      </div>
    );

}