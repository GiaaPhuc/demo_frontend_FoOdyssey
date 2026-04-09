// Định nghĩa cấu trúc món ăn
export interface MenuItem {
  id: string;
  name: string;
  price: string;
  image: string;
  description?: string;
}

// Định nghĩa cấu trúc nhà hàng
export interface Restaurant {
  id: string;
  name: string;
  address: string;
  rating: number;
  image: string;
  category: string[];
  description: string;
  menu: MenuItem[];
}

// Định nghĩa kết quả quét OCR giả lập
export interface OCRResult {
  id: string;
  detectedName: string;
  confidence: number;
  priceEstimate: string;
}
