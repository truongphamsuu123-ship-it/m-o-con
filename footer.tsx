export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🐱</span>
              <h3 className="text-lg font-bold">Mèo Yêu</h3>
            </div>
            <p className="text-gray-400">Hướng dẫn chăm sóc mèo cho người mới bắt đầu</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Liên kết</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#services" className="hover:text-pink-400 transition">
                  Dịch vụ
                </a>
              </li>
              <li>
                <a href="#tips" className="hover:text-pink-400 transition">
                  Mẹo chăm sóc
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-pink-400 transition">
                  Câu hỏi
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Thông tin</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-pink-400 transition">
                  Về chúng tôi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition">
                  Chính sách
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition">
                  Điều khoản
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Liên hệ</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@meoyeu.com</li>
              <li>Điện thoại: 0123 456 789</li>
              <li>Địa chỉ: TP. Hồ Chí Minh</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Mèo Yêu. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}
