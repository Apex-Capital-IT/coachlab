"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

export function NavigationProgress() {
  const [isNavigating, setIsNavigating] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setIsNavigating(true);
    
    const timeout = setTimeout(() => {
      setIsNavigating(false);
    }, 500);
    
    return () => clearTimeout(timeout);
  }, [pathname, searchParams]);

  if (!isNavigating) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-2 rounded-lg bg-white p-6 shadow-lg">
        <LoadingSpinner size={32} className="text-[#2a7d5f]" />
        <p className="text-sm font-medium text-gray-700">Loading...</p>
      </div>
    </div>
  );
} 