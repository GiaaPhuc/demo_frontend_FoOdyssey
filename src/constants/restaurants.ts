import { Restaurant } from "../types";

export const MOCK_RESTAURANTS: Restaurant[] = [
  {
    id: "res-1",
    name: "Phở Gia Truyền Phú Vương",
    address: "339 Lê Văn Sỹ, Tân Bình, TP.HCM",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?q=80&w=800",
    category: ["Phở", "Bữa sáng", "Truyền thống"],
    description:
      "Nổi tiếng với nước dùng thanh ngọt, thịt bò tươi ngon và không gian đậm chất Sài Gòn xưa.",
    menu: [
      {
        id: "m1",
        name: "Phở Tái",
        price: "65.000đ",
        image:
          "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?q=80&w=200",
      },
      {
        id: "m2",
        name: "Phở Nạm",
        price: "65.000đ",
        image:
          "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?q=80&w=200",
      },
      {
        id: "m3",
        name: "Phở Đặc Biệt",
        price: "85.000đ",
        image:
          "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?q=80&w=200",
      },
    ],
  },
  {
    id: "res-2",
    name: "Bún Bò Huế Chú Há",
    address: "160 Võ Văn Tần, Quận 3, TP.HCM",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1624300629298-e9de39c13be5?q=80&w=800",
    category: ["Bún Bò", "Đặc sản", "Cay"],
    description:
      "Sợi bún to chuẩn vị Huế, nước dùng đậm đà sa tế và mắm ruốc thơm lừng.",
    menu: [
      { id: "m4", name: "Bún Bò Thập Cẩm", price: "75.000đ", image: "" },
      { id: "m5", name: "Bún Chả Cua", price: "60.000đ", image: "" },
    ],
  },
];
