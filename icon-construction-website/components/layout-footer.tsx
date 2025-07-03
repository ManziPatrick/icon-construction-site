"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageCircle, Download } from "lucide-react"

export default function LayoutFooter({ onDownloadPortfolio }) {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Image src="/images/icon-logo.png" alt="I-Con Ltd Logo" width={50} height={33} className="mr-3" />
              <span className="text-xl font-bold">INTIMATE CONTRACTORS LTD (I-Con Ltd)</span>
            </div>
            <p className="text-gray-400 mb-4">Building Rwanda's future with excellence since 2013.</p>
            <div className="flex gap-2">
              <Button 
                onClick={onDownloadPortfolio}
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-black"
              >
                <Download className="h-4 w-4 mr-2" />
                Portfolio
              </Button>
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <a href="https://wa.me/250788404080" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/services" className="hover:text-blue-400">Building Construction</Link></li>
              <li><Link href="/services" className="hover:text-blue-400">Civil Works</Link></li>
              <li><Link href="/services" className="hover:text-blue-400">MEP Services</Link></li>
              <li><Link href="/services" className="hover:text-blue-400">Water & Sanitation</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-blue-400">About Us</Link></li>
              <li><Link href="/projects" className="hover:text-blue-400">Our Projects</Link></li>
              <li><Link href="/team" className="hover:text-blue-400">Team</Link></li>
              <li><Link href="/services" className="hover:text-blue-400">Services</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <p>Kigali, Rwanda</p>
              <p>+250 788 404 080</p>
              <p>+250 722 404 081</p>
              <p>i.con.ltd13@gmail.com</p>
              <div className="mt-4">
                <p className="text-sm">Business Hours:</p>
                <p className="text-sm">Mon - Fri: 8:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} I-Con Ltd. All rights reserved. Building Rwanda's Future with Excellence.</p>
          <p className="mt-2 text-sm">
            TIN: 102905847 | Registered in Rwanda since 2013
          </p>
        </div>
      </div>
    </footer>
  )
} 