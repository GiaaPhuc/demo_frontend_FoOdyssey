import { OCRResult } from "../types";

export const MOCK_OCR_RESULTS: OCRResult[] = [
  {
    id: "ocr-1",
    detectedName: "Phở Tái Bò Viên",
    confidence: 0.98, // 98% độ tin cậy
    priceEstimate: "65.000đ",
  },
  {
    id: "ocr-2",
    detectedName: "Cơm Tấm Sườn Bì Chả",
    confidence: 0.95,
    priceEstimate: "55.000đ",
  },
  {
    id: "ocr-3",
    detectedName: "Trà Đá",
    confidence: 0.99,
    priceEstimate: "5.000đ",
  },
  {
    id: "ocr-4",
    detectedName: "Khăn Lạnh",
    confidence: 0.92,
    priceEstimate: "2.000đ",
  },
];
