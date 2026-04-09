"use client";
export default function ItineraryPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-center">
      <div className="bg-white p-12 rounded-3xl border-2 border-dashed border-gray-200">
        <div className="text-6xl mb-6">📅</div>
        <h2 className="text-2xl font-bold mb-2">Chưa có lịch trình</h2>
        <p className="text-gray-500 mb-8">
          Hãy thêm các nhà hàng yêu thích để lập kế hoạch cho chuyến đi của bạn.
        </p>
        <a
          href="/discover"
          className="text-orange-600 font-bold hover:underline"
        >
          Khám phá ngay →
        </a>
      </div>
    </div>
  );
}
