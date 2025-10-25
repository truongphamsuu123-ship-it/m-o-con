"use client"

import { useState } from "react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Mèo con nên ăn bao nhiêu lần một ngày?",
      answer:
        "Mèo con (dưới 6 tháng) nên ăn 3-4 lần mỗi ngày. Từ 6 tháng đến 1 tuổi, giảm xuống 2-3 lần. Mèo trưởng thành ăn 1-2 lần mỗi ngày.",
    },
    {
      question: "Khi nào nên đưa mèo đi khám thú y lần đầu?",
      answer:
        "Nên đưa mèo con đi khám trong vòng 1-2 tuần sau khi mang về nhà. Thú y sẽ kiểm tra sức khỏe tổng quát và lên lịch tiêm chủng.",
    },
    {
      question: "Mèo có cần tắm không?",
      answer:
        "Mèo tự vệ sinh bằng cách liếm lông. Thường không cần tắm trừ khi bị bẩn hoặc có vấn đề da. Nếu tắm, dùng nước ấm và sản phẩm chuyên dụng cho mèo.",
    },
    {
      question: "Làm thế nào để mèo không cắn dây điện?",
      answer:
        "Che phủ dây điện bằng ống bảo vệ. Sử dụng xịt chống cắn có mùi không thích hợp. Cung cấp đồ chơi thay thế để mèo cắn.",
    },
    {
      question: "Mèo bao lâu mới quen với nhà mới?",
      answer:
        "Thường mất 2-4 tuần để mèo quen với môi trường mới. Hãy kiên nhẫn, tạo không gian an toàn và cho mèo thời gian để thích nghi.",
    },
    {
      question: "Nên chọn mèo cái hay mèo đực?",
      answer:
        "Cả hai đều tốt. Mèo cái thường nhỏ hơn và độc lập hơn. Mèo đực thường thân thiện hơn. Điều quan trọng là triệt sản/khiến vô sinh để tránh các vấn đề sức khỏe.",
    },
  ]

  return (
    <section id="faq" className="py-20 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Câu hỏi thường gặp</h2>
          <p className="text-lg text-gray-600">Giải đáp những thắc mắc phổ biến</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-pink-100 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 bg-gradient-to-r from-pink-50 to-white hover:from-pink-100 hover:to-pink-50 transition flex justify-between items-center"
              >
                <h3 className="text-lg font-semibold text-gray-900 text-left">{faq.question}</h3>
                <span className={`text-pink-600 transition transform ${openIndex === index ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </button>
              {openIndex === index && (
                <div className="p-6 bg-white border-t border-pink-100">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
