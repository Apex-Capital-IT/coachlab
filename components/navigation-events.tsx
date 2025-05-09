"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function NavigationEvents() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    window.addEventListener("beforeunload", handleStart);
    router.events?.on("routeChangeStart", handleStart);
    router.events?.on("routeChangeComplete", handleComplete);
    router.events?.on("routeChangeError", handleComplete);

    return () => {
      window.removeEventListener("beforeunload", handleStart);
      router.events?.off("routeChangeStart", handleStart);
      router.events?.off("routeChangeComplete", handleComplete);
      router.events?.off("routeChangeError", handleComplete);
    };
  }, [router]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-2 rounded-lg bg-white p-6 shadow-lg">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#2a7d5f] border-t-transparent" />
        <p className="text-sm font-medium text-gray-700">Loading...</p>
      </div>
    </div>
  );
} 