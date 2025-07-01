"use client"
import LayoutHeader from "@/components/layout-header"
import LayoutFooter from "@/components/layout-footer"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, Mail, MapPin, Clock } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  const handleDownloadPortfolio = () => {
    window.open('/portfolio.pdf', '_blank');
  }
  return (
    <div className="min-h-screen bg-gray-50">
      <LayoutHeader onDownloadPortfolio={handleDownloadPortfolio} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-black mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to start your next project? Get in touch with our team today.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold text-black mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                <div>
                  <span className="text-gray-600 block">Kigali, Rwanda</span>
                  <span className="text-gray-600 text-sm">Kicukiro District</span>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-600 mr-3" />
                <span className="text-gray-600">+250 788 404 080</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-600 mr-3" />
                <span className="text-gray-600">+250 722 404 081</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-600 mr-3" />
                <span className="text-gray-600">i.con.ltd13@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-600 mr-3" />
                <span className="text-gray-600">jullaegis@yahoo.com</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-blue-600 mr-3" />
                <span className="text-gray-600">Mon - Fri: 8:00 AM - 6:00 PM</span>
              </div>
            </div>
            <div className="mt-6 flex gap-4">
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                <a href="https://wa.me/250788404080" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
              <Button 
                onClick={handleDownloadPortfolio}
                variant="outline" 
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              >
                Portfolio
              </Button>
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold text-black mb-4">Send us a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Send Message
              </Button>
            </form>
          </div>
        </div>
        {/* Google Map */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-black mb-4 text-center">Find Us in Kigali</h3>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15949.924156982891!2d30.0445!3d-1.9441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e797%3A0x4a87a383ca7292c8!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="I-Con Ltd Office Location in Kigali, Rwanda"
              className="w-full"
            />
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-600 mb-2">Visit our office in the heart of Kigali</p>
            <Button
              asChild
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              <a
                href="https://maps.google.com/?q=Kigali,Rwanda"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <MapPin className="h-4 w-4 mr-2" />
                Get Directions
              </a>
            </Button>
          </div>
        </div>
      </div>
      <LayoutFooter onDownloadPortfolio={handleDownloadPortfolio} />
    </div>
  )
} 