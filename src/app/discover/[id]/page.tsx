"use client";
import { useParams } from "next/navigation";
import { MOCK_RESTAURANTS } from "@/constants/restaurants";
import { useItinerary } from "@/hooks/useItinerary";
import Image from "next/image";

export default function RestaurantDetail() {
  const { id } = useParams();
  const { addToItinerary } = useItinerary();

  const restaurant = MOCK_RESTAURANTS.find((r) => r.id === id);

  if (!restaurant)
    return <div className="p-10 text-center">Không tìm thấy nhà hàng</div>;

  return (
    <div className="max-w-4xl mx-auto p-4 py-10">
      <img
        src={restaurant.image}
        className="w-full h-80 object-cover rounded-3xl mb-6 shadow-lg"
      />
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">
            {restaurant.name}
          </h1>
          <p className="text-gray-500 mt-2">{restaurant.address}</p>
        </div>
        <button
          onClick={() => addToItinerary(restaurant)}
          className="bg-orange-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-orange-700 transition-colors shadow-md"
        >
          + Thêm vào lịch trình
        </button>
      </div>

      <div className="bg-white p-6 rounded-2xl border mb-8">
        <h2 className="font-bold text-xl mb-4">Giới thiệu</h2>
        <p className="text-gray-600 leading-relaxed">
          {restaurant.description}
        </p>
      </div>

      <h2 className="font-bold text-2xl mb-4">Thực đơn nổi bật</h2>
      <div className="grid gap-4">
        {restaurant.menu.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 bg-white border rounded-xl hover:border-orange-200 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                {item.image && (
                  <img
                    src={item.image}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <span className="font-semibold text-gray-800">{item.name}</span>
            </div>
            <span className="font-bold text-orange-600">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
