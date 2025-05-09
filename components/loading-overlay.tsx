"use client";

export default function LoadingOverlay() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-2 rounded-lg bg-white p-6 shadow-lg">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#2a7d5f] border-t-transparent" />
        <p className="text-sm font-medium text-gray-700">Loading...</p>
      </div>
    </div>
  );
} 