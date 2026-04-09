"use client";
import React from "react";

interface OCRScannerProps {
  isScanning: boolean;
  imageSource?: string;
}

export const OCRScanner = ({ isScanning, imageSource }: OCRScannerProps) => {
  return (
    <div className="relative w-full aspect-[4/3] bg-gray-900 rounded-2xl overflow-hidden border-4 border-gray-800 shadow-2xl">
      {/* Ảnh giả lập camera */}
      <img
        src={
          imageSource ||
          "https://images.unsplash.com/photo-1546241072-48010ad28c2c?q=80&w=800"
        }
        className={`w-full h-full object-cover transition-opacity duration-500 ${isScanning ? "opacity-70" : "opacity-100"}`}
        alt="Menu Scanner"
      />

      {/* Khung ngắm mục tiêu */}
      <div className="absolute inset-8 border-2 border-white/20 rounded-lg pointer-events-none">
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-orange-500"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-orange-500"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-orange-500"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-orange-500"></div>
      </div>

      {/* Tia Laser quét (Chỉ hiện khi đang scan) */}
      {isScanning && <div className="animate-scan z-10"></div>}

      {/* Overlay thông báo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {isScanning && (
          <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-orange-500/50">
            <span className="text-white text-xs font-bold animate-pulse uppercase tracking-widest">
              AI Analyzing...
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
