"use client"

import { useState } from "react"

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Chatbot iframe */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-96 h-96 rounded-lg shadow-2xl overflow-hidden z-50 border border-pink-200">
          <iframe
            src="https://cdn.botpress.cloud/webchat/v3.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/10/24/06/20251024062904-B3EUESXI.json"
            title="Botpress Chatbot"
            className="w-full h-full border-none"
            allow="microphone; camera"
          />
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 w-14 h-14 bg-pink-500 hover:bg-pink-600 text-white rounded-full shadow-lg flex items-center justify-center transition transform hover:scale-110 z-40"
        title="Mở chat"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
          </svg>
        )}
      </button>
    </>
  )
}
