export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4 rounded-2xl bg-white px-8 py-6 shadow-2xl">
        {/* Spinner */}
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-[#2a7d5f] border-t-transparent"></div>
          <div className="absolute inset-1 rounded-full bg-white"></div>
        </div>

        {/* Text */}
        <p className="text-base font-semibold text-gray-800 tracking-wide">
          Түр хүлээнэ үү...
        </p>
      </div>
    </div>
  );
}
