export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-pink-50 via-white to-pink-50 py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Chăm sóc mèo cưng của bạn một cách <span className="text-pink-500">đúng đắn</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Hướng dẫn chi tiết và dễ hiểu cho những người mới bắt đầu nuôi mèo. Tìm hiểu cách chăm sóc, dinh dưỡng, và
              tạo môi trường thoải mái cho bạn lông yêu quý.
            </p>
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-semibold transition transform hover:scale-105">
              Bắt đầu ngay
            </button>
          </div>
          <div className="relative h-96 bg-pink-100 rounded-3xl flex items-center justify-center overflow-hidden">
            <div className="text-8xl">🐱</div>
          </div>
        </div>
      </div>
    </section>
  )
}
