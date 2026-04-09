"use client";
import React, { useState } from "react";
import { MOCK_OCR_RESULTS } from "@/constants/ocr-results";
import { OCRResult } from "@/types";
// Nhớ cài lucide-react nếu chưa có: npm install lucide-react
import { Camera, Zap, FileText, CheckCircle2, Wand2 } from "lucide-react";

export default function ScannerPage() {
  const [isScanning, setIsScanning] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleScan = () => {
    setIsScanning(true);
    // Giả lập 3.5 giây quét AI hoành tráng
    setTimeout(() => {
      setIsScanning(false);
      setShowResult(true);
    }, 3500);
  };

  return (
    <div className="bg-gray-950 min-h-screen">
      {/* Page Header Section - Tiêu đề trang, Nền tối cho sang */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-20 text-center">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 text-sm font-semibold text-orange-500 uppercase tracking-widest bg-orange-950 rounded-full border border-orange-900">
          <Wand2 className="w-4 h-4 text-orange-400" />
          Powered by FoOdyssey AI Engine v1.5
        </span>
        <h1 className="text-5xl font-extrabold text-white mb-6 tracking-tighter">
          Máy quét thực đơn thông minh
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Đưa camera vào thực đơn để tự động nhận diện món ăn, giải thích ý
          nghĩa, dịch thuật và đề xuất lựa chọn tối ưu dựa trên sở thích của
          bạn.
        </p>
      </div>

      {/* Main Scanner Section - Giao diện Scanner "hàng khủng" */}
      <div className="max-w-3xl mx-auto px-6 pb-24">
        <div className="relative bg-black rounded-3xl aspect-[3/4] overflow-hidden shadow-2xl border-8 border-gray-900 group">
          {!showResult ? (
            <>
              {/* Camera Background Image - Ảnh nền camera giả lập, Phức tạp hơn */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1546241072-48010ad28c2c?q=80&w=800"
                  className="opacity-60 group-hover:opacity-75 transition-opacity w-full h-full object-cover"
                />
              </div>

              {/* Scanner Frame UI - Khung ngắm mục tiêu, Chi tiết hơn */}
              <div className="absolute inset-10 border-2 border-dashed border-white/20 rounded-xl pointer-events-none">
                <div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-orange-500 rounded-tl-xl" />
                <div className="absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-orange-500 rounded-tr-xl" />
                <div className="absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-orange-500 rounded-bl-xl" />
                <div className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-orange-500 rounded-br-xl" />

                {/* Center Target - Mục tiêu trung tâm */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Zap className="w-12 h-12 text-white/10 animate-pulse" />
                </div>
              </div>

              {/* Laser Scan Line - Tia Laser quét, Hiệu ứng phức tạp hơn (từ globals.css) */}
              {isScanning && (
                <div className="absolute inset-0 animate-scan z-10" />
              )}

              {/* Status Overlay - Lớp phủ thông báo AI Analyzing, Hoành tráng hơn */}
              {isScanning && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md z-20 pointer-events-none">
                  <div className="text-center p-8 bg-black rounded-3xl border border-orange-500/50 shadow-2xl animate-pulse">
                    <Wand2 className="w-16 h-16 text-orange-500 mx-auto mb-6" />
                    <h4 className="text-xl font-bold text-white mb-2">
                      AI Engine v1.5
                    </h4>
                    <p className="text-sm font-medium text-orange-400 tracking-widest uppercase">
                      Analyzing and Translating...
                    </p>
                    <div className="mt-4 w-40 h-1 bg-gray-800 rounded-full mx-auto overflow-hidden">
                      <div className="h-full bg-orange-600 animate-loading-bar" />
                    </div>
                  </div>
                </div>
              )}

              {/* Control Buttons - Nút điều khiển chuyên nghiệp */}
              <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center gap-6 px-10">
                <button
                  onClick={handleScan}
                  disabled={isScanning}
                  className={`relative flex items-center gap-3 px-8 py-4 rounded-xl text-lg font-bold border transition-all ${isScanning ? "bg-gray-500 border-gray-600 cursor-not-allowed opacity-50" : "bg-orange-600 border-orange-700 text-white hover:bg-orange-500 hover:-translate-y-0.5 active:translate-y-0 active:shadow-md active:bg-orange-700"}`}
                >
                  <Camera className="w-6 h-6" />
                  {isScanning ? "AI Engine Running..." : "Bắt đầu quét AI"}
                </button>
              </div>

              {/* Lens Details - Hiệu ứng thấu kính */}
              <div className="absolute top-4 left-4 text-xs font-mono text-white/50 z-20">
                F1.8 | 1/250 | ISO400
              </div>
              <div className="absolute top-4 right-4 text-xs font-mono text-orange-500 z-20">
                REC [●]
              </div>
            </>
          ) : (
            <div className="absolute inset-0 bg-white p-10 overflow-y-auto">
              <div className="flex items-center justify-between mb-10 pt-4">
                <h3 className="text-3xl font-black text-gray-950">
                  Kết quả phân tích
                </h3>
                <span className="flex items-center gap-2 px-4 py-1.5 text-xs font-bold text-green-700 uppercase tracking-widest bg-green-100 rounded-full border border-green-200">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  Thành công
                </span>
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed">
                Chúng tôi đã nhận diện thành công {MOCK_OCR_RESULTS.length} món
                ăn từ hình ảnh. Bạn có thể xem chi tiết từng món hoặc thêm chúng
                trực tiếp vào lịch trình.
              </p>

              {/* Result List - Danh sách kết quả chi tiết, Card cao cấp */}
              <div className="space-y-6">
                {MOCK_OCR_RESULTS.map((item: OCRResult) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center p-6 bg-orange-50/50 rounded-2xl border border-orange-100 hover:shadow-lg transition-all group"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <FileText className="w-5 h-5 text-orange-500" />
                        <p className="font-extrabold text-xl text-gray-950 group-hover:text-orange-700 transition-colors">
                          {item.detectedName}
                        </p>
                      </div>
                      <p className="text-[11px] text-orange-600 font-bold uppercase tracking-widest bg-orange-100 px-3 py-1 rounded-full">
                        Độ tin cậy: {(item.confidence * 100).toFixed(0)}%
                      </p>
                    </div>
                    <span className="font-black text-3xl text-orange-600">
                      {item.priceEstimate}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex gap-4">
                <button
                  onClick={() => setShowResult(false)}
                  className="flex-1 py-5 bg-gray-900 text-white rounded-2xl font-bold hover:bg-gray-700 transition-all text-lg"
                >
                  Quét ảnh khác
                </button>
                <button className="flex-1 py-5 bg-orange-600 text-white rounded-2xl font-bold hover:bg-orange-500 transition-all text-lg">
                  Lập lịch trình món này
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
