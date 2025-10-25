export default function Tips() {
  const tips = [
    {
      title: "Chọn thức ăn chất lượng",
      content:
        "Mèo cần thức ăn giàu protein. Chọn thức ăn có thành phần chính là thịt, cá hoặc gia cầm. Tránh thức ăn có quá nhiều chất độn.",
    },
    {
      title: "Cung cấp nước sạch",
      content:
        "Mèo cần uống đủ nước mỗi ngày. Đặt bát nước ở nhiều nơi trong nhà. Một số mèo thích nước chảy, hãy cân nhắc mua máy phun nước.",
    },
    {
      title: "Tạo không gian riêng",
      content:
        "Mèo cần một nơi yên tĩnh để nghỉ ngơi. Chuẩn bị giường, cây mèo hoặc các góc ẩn nơi mèo cảm thấy an toàn.",
    },
    {
      title: "Chơi đều đặn",
      content:
        "Chơi với mèo ít nhất 15-30 phút mỗi ngày. Sử dụng đồ chơi tương tác như dây có lông vũ hoặc con chuột đồ chơi.",
    },
    {
      title: "Kiểm tra sức khỏe định kỳ",
      content: "Đưa mèo đi khám thú y ít nhất một lần mỗi năm. Tiêm chủng đầy đủ và kiểm tra sán, bọ chét.",
    },
    {
      title: "Chải lông thường xuyên",
      content:
        "Chải lông mèo 2-3 lần mỗi tuần để giảm rụng lông và ngăn ngừa búi lông. Mèo lông dài cần chải hàng ngày.",
    },
  ]

  return (
    <section id="tips" className="py-20 md:py-32 bg-pink-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Mẹo chăm sóc mèo</h2>
          <p className="text-lg text-gray-600">Những điều quan trọng bạn nên biết</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-2xl border border-pink-100 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold text-pink-600 mb-3">{tip.title}</h3>
              <p className="text-gray-600 leading-relaxed">{tip.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
