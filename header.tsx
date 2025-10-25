"use client"

import { useState } from "react"
import Link from "next/link"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-pink-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🐱</span>
            <h1 className="text-xl font-bold text-pink-600">Mèo Yêu</h1>
          </div>

          <nav className="hidden md:flex gap-8">
            <Link href="#services" className="text-gray-700 hover:text-pink-600 transition">
              Dịch vụ
            </Link>
            <Link href="#tips" className="text-gray-700 hover:text-pink-600 transition">
              Mẹo chăm sóc
            </Link>
            <Link href="#faq" className="text-gray-700 hover:text-pink-600 transition">
              Câu hỏi
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-pink-600 transition">
              Liên hệ
            </Link>
          </nav>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <Link href="#services" className="text-gray-700 hover:text-pink-600">
              Dịch vụ
            </Link>
            <Link href="#tips" className="text-gray-700 hover:text-pink-600">
              Mẹo chăm sóc
            </Link>
            <Link href="#faq" className="text-gray-700 hover:text-pink-600">
              Câu hỏi
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-pink-600">
              Liên hệ
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
