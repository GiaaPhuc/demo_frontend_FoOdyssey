"use client";
import { useState, useEffect } from "react";
import { Restaurant } from "@/types";

export const useItinerary = () => {
  const [items, setItems] = useState<Restaurant[]>([]);

  // Tải dữ liệu từ LocalStorage khi khởi động
  useEffect(() => {
    const saved = localStorage.getItem("foodyssey_itinerary");
    if (saved) {
      setItems(JSON.parse(saved));
    }
  }, []);

  // Hàm thêm nhà hàng vào lịch trình
  const addToItinerary = (restaurant: Restaurant) => {
    const exists = items.find((i) => i.id === restaurant.id);
    if (!exists) {
      const newItems = [...items, restaurant];
      setItems(newItems);
      localStorage.setItem("foodyssey_itinerary", JSON.stringify(newItems));
      alert(`Đã thêm ${restaurant.name} vào lịch trình!`);
    } else {
      alert("Nhà hàng này đã có trong lịch trình rồi.");
    }
  };

  // Hàm xóa khỏi lịch trình
  const removeFromItinerary = (id: string) => {
    const newItems = items.filter((i) => i.id !== id);
    setItems(newItems);
    localStorage.setItem("foodyssey_itinerary", JSON.stringify(newItems));
  };

  return { items, addToItinerary, removeFromItinerary };
};
