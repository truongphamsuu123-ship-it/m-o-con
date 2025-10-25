export default function Services() {
  const services = [
    {
      icon: "🍽️",
      title: "Dinh dưỡng",
      description: "Hướng dẫn chọn thức ăn phù hợp, lịch ăn uống và các chất dinh dưỡng cần thiết cho mèo khỏe mạnh.",
    },
    {
      icon: "🏥",
      title: "Sức khỏe",
      description: "Thông tin về tiêm chủng, kiểm tra sức khỏe định kỳ và cách nhận biết dấu hiệu bệnh tật.",
    },
    {
      icon: "🧹",
      title: "Vệ sinh",
      description: "Cách tắm, cắt móng, chải lông và duy trì vệ sinh cho mèo cưng của bạn.",
    },
    {
      icon: "🎮",
      title: "Giải trí",
      description: "Ý tưởng trò chơi, đồ chơi và cách tạo môi trường vui vẻ cho mèo.",
    },
    {
      icon: "🏠",
      title: "Môi trường",
      description: "Thiết kế không gian sống an toàn, thoải mái và phù hợp cho mèo.",
    },
    {
      icon: "❤️",
      title: "Tâm lý",
      description: "Hiểu hành vi mèo, xây dựng mối quan hệ tốt và giải quyết các vấn đề hành vi.",
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Các lĩnh vực chăm sóc</h2>
          <p className="text-lg text-gray-600">Tất cả những gì bạn cần biết để chăm sóc mèo cưng</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-white border border-pink-100 hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
