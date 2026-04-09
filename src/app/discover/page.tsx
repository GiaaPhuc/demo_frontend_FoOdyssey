import Link from "next/link";
// Nhớ cài lucide-react nếu chưa có: npm install lucide-react
import { Search, Camera, MapPin, Zap, UtensilsCrossed } from "lucide-react";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden bg-gray-50/50">
      {/* Background Decorator - Hiệu ứng nền mờ sang trọng */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-orange-50/70 to-transparent -z-10" />
      <div className="absolute top-0 -left-1/4 w-[500px] h-[500px] bg-orange-200/20 rounded-full blur-3xl -z-20" />
      <div className="absolute top-1/2 -right-1/4 w-[500px] h-[500px] bg-red-100/20 rounded-full blur-3xl -z-20" />

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-36 text-center">
        {/* Badge - Nhãn nhỏ */}
        <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-sm font-semibold tracking-wider text-orange-700 uppercase bg-orange-100/80 rounded-full shadow-inner border border-orange-200/50">
          <Zap className="w-4 h-4 text-orange-600" />
          AI-Powered Smart Food Tourism
        </span>

        {/* Main Headline - Tiêu đề lớn, Gradient phức tạp */}
        <h1 className="text-6xl md:text-8xl font-black text-gray-950 mb-10 leading-[1.05] tracking-tighter">
          Khám phá <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-500 to-orange-700 animate-gradient-xy">
            tinh hoa
          </span>{" "}
          ẩm thực
        </h1>

        {/* Sub-headline - Tiêu đề phụ, Chi tiết hơn */}
        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-16 leading-relaxed">
          FoOdyssey không chỉ là gợi ý nhà hàng. Chúng tôi mang đến trải nghiệm
          du lịch thông minh: quét thực đơn AI đa ngôn ngữ, lên lịch trình ẩm
          thực cá nhân hóa và khám phá những hương vị địa phương ẩn giấu mà bạn
          chưa từng biết đến.
        </p>

        {/* Search Bar - Ô tìm kiếm "khủng", Đổ bóng 3D */}
        <div className="relative max-w-3xl mx-auto mb-20 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

          <div className="relative flex items-center bg-white p-3 rounded-3xl shadow-2xl shadow-orange-200/50 border border-gray-100 group">
            <div className="flex items-center gap-3 flex-1 px-4">
              <Search className="w-6 h-6 text-gray-400 group-focus-within:text-orange-600 transition-colors" />
              <input
                type="text"
                placeholder="Tìm món ngon, nhà hàng hoặc địa điểm tại TP.HCM..."
                className="flex-1 py-4 text-lg outline-none text-gray-900 bg-transparent placeholder:text-gray-400"
              />
            </div>

            <button className="flex items-center gap-2.5 px-10 py-5 bg-gradient-to-br from-orange-600 to-red-600 text-white rounded-2xl text-lg font-extrabold hover:shadow-lg hover:from-orange-700 hover:to-red-700 hover:-translate-y-0.5 active:translate-y-0 active:shadow-md transition-all">
              Bắt đầu hành trình
            </button>
          </div>
        </div>

        {/* Quick Links / CTA - Nút kêu gọi hành động bổ sung */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-32">
          <Link
            href="/discover"
            className="w-full sm:w-auto px-10 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-700 hover:-translate-y-1 transition-all shadow-md"
          >
            Khám phá 500+ địa điểm
          </Link>
          <Link
            href="/scanner"
            className="w-full sm:w-auto group flex items-center gap-3 px-10 py-4 bg-white text-gray-950 border-2 border-gray-100 rounded-full font-semibold hover:bg-gray-50 hover:border-gray-200 transition-all"
          >
            <Camera className="w-5 h-5 text-gray-400 group-hover:text-orange-600 transition-colors" />
            Trải nghiệm quét Menu AI
          </Link>
        </div>

        {/* Feature Cards Section - Danh sách tính năng chi tiết, Card cao cấp */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-32 max-w-6xl mx-auto">
          {[
            {
              title: "Hệ thống gợi ý AI",
              desc: "Gợi ý cá nhân hóa dựa trên khẩu vị, ngân sách và lịch trình di chuyển thực tế.",
              color: "orange",
              icon: UtensilsCrossed,
            },
            {
              title: "Smart OCR & Dịch thuật",
              desc: "Nhận diện thực đơn đa ngôn ngữ, giải thích món ăn và cảnh báo dị ứng ngay trên camera.",
              color: "blue",
              icon: Zap,
            },
            {
              title: "Lập lịch trình thông minh",
              desc: "Tự động sắp xếp lịch trình ăn uống tối ưu, kết nối các điểm đến thuận tiện nhất.",
              color: "green",
              icon: MapPin,
            },
          ].map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="group relative p-10 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-orange-100 transition-all duration-300 text-left"
              >
                {/* Asymmetric Decorator - Hiệu ứng trang trí góc card */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 bg-${feature.color}-100/50 rounded-bl-full -z-10 group-hover:w-28 group-hover:h-28 transition-all`}
                />

                <div
                  className={`flex items-center justify-center w-16 h-16 mb-8 rounded-2xl bg-${feature.color}-50 border border-${feature.color}-100/70`}
                >
                  <Icon className={`w-8 h-8 text-${feature.color}-600`} />
                </div>

                <h3 className="text-2xl font-bold text-gray-950 mb-4 group-hover:text-orange-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.desc}
                </p>

                <div className="absolute bottom-4 right-4 text-gray-200 font-mono text-xs group-hover:text-orange-300 transition-colors">
                  {`/${(i + 1).toString().padStart(2, "0")}`}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
