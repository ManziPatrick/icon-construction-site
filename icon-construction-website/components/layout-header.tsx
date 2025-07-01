"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageCircle, Download, Menu, X } from "lucide-react"
import { useState } from "react"

export default function LayoutHeader({ onDownloadPortfolio }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm border-b-2 border-yellow-400 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Image
              src="/images/icon-logo.png"
              alt="I-Con Ltd Logo"
              width={60}
              height={40}
              className="mr-3"
              priority
            />
            <span className="text-xl font-bold text-black">I-Con Ltd</span>
          </div>
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-black hover:text-blue-600 transition-colors">Home</Link>
            <Link href="/about" className="text-black hover:text-blue-600 transition-colors">About</Link>
            <Link href="/services" className="text-black hover:text-blue-600 transition-colors">Services</Link>
            <Link href="/projects" className="text-black hover:text-blue-600 transition-colors">Projects</Link>
            <Link href="/team" className="text-black hover:text-blue-600 transition-colors">Team</Link>
            <Link href="/contact" className="text-black hover:text-blue-600 transition-colors">Contact</Link>
          </div>
          {/* Desktop Buttons */}
          <div className="hidden md:flex gap-2">
            <Button 
              onClick={onDownloadPortfolio}
              variant="outline" 
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              <Download className="h-4 w-4 mr-2" />
              Portfolio
            </Button>
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
              <a href="https://wa.me/250788404080" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>
          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-40 z-50" onClick={() => setMobileOpen(false)} />
      )}
      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-200 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-hidden={!mobileOpen}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <span className="text-xl font-bold text-black">I-Con Ltd</span>
          <button
            className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col space-y-4 p-4">
          <Link href="/" className="text-black hover:text-blue-600 text-lg" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link href="/about" className="text-black hover:text-blue-600 text-lg" onClick={() => setMobileOpen(false)}>About</Link>
          <Link href="/services" className="text-black hover:text-blue-600 text-lg" onClick={() => setMobileOpen(false)}>Services</Link>
          <Link href="/projects" className="text-black hover:text-blue-600 text-lg" onClick={() => setMobileOpen(false)}>Projects</Link>
          <Link href="/team" className="text-black hover:text-blue-600 text-lg" onClick={() => setMobileOpen(false)}>Team</Link>
          <Link href="/contact" className="text-black hover:text-blue-600 text-lg" onClick={() => setMobileOpen(false)}>Contact</Link>
        </nav>
        <div className="flex flex-col gap-2 p-4 border-t mt-4">
          <Button 
            onClick={() => { setMobileOpen(false); onDownloadPortfolio && onDownloadPortfolio(); }}
            variant="outline" 
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
          >
            <Download className="h-4 w-4 mr-2" />
            Portfolio
          </Button>
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
            <a href="https://wa.me/250788404080" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </nav>
  )
} 