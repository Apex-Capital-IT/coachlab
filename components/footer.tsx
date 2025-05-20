import Link from "next/link";
import { GraduationCap } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="container mx-auto px-4 py-4">
      <footer className="mt-6 bg-[white] border-[1px] border-black rounded-3xl p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Image
              src="/Logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full"
              priority
            />
            <span className="font-bold text-xl">CoachLab Mongolia</span>
          </div>

          <div className="flex flex-wrap gap-6">
            <Link
              href="/teachers"
              className="text-gray-600 md:text-base text-xs hover:text-black"
            >
              Teachers
            </Link>
            <Link
              href="/classes"
              className="text-gray-600 md:text-base text-xs hover:text-black"
            >
              Classes
            </Link>
            <Link
              href="/about"
              className="text-gray-600 md:text-base text-xs hover:text-black"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 md:text-base text-xs hover:text-black"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center text-sm text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} CoachLab Mongolia. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
