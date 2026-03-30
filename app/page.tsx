import { ArrowLeftRight, Banknote } from "lucide-react";
import Link from "next/link";
export default function DashboardPage() {
  return (
    <div className="w-full max-w-7xl mx-auto flex justify-center items-center bg-white h-screen">
      {/* Page Title & ID Info */}
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md h-10 w-20 flex items-center justify-center">
        <Link href="/login">Login</Link>
      </button>
    </div>
  );
}
