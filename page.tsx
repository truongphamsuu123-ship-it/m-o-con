"use client"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Tips from "@/components/tips"
import FAQ from "@/components/faq"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ChatbotWidget from "@/components/chatbot-widget"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Tips />
      <FAQ />
      <Contact />
      <Footer />
      <ChatbotWidget />
    </main>
  )
}
