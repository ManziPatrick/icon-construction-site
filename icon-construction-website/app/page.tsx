"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Building2,
  Hammer,
  Zap,
  Droplets,
  Eye,
  Users,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  Award,
  Shield,
  Timer,
  Download,
  FileText,
  HardHat,
  Leaf,
  Handshake,
  BookOpen,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import LayoutHeader from "@/components/layout-header"
import LayoutFooter from "@/components/layout-footer"

export default function HomePage() {
  const services = [
    {
      icon: Building2,
      title: "Building Construction",
      description: "Residential and commercial construction projects with modern techniques",
    },
    {
      icon: Hammer,
      title: "Civil Works",
      description: "Infrastructure development and civil engineering solutions",
    },
    {
      icon: Zap,
      title: "MEP Services",
      description: "Mechanical, Electrical & Plumbing systems installation",
    },
    {
      icon: Droplets,
      title: "Water & Sanitation",
      description: "Clean water systems and sanitation infrastructure",
    },
    {
      icon: Zap,
      title: "Electrical Engineering",
      description: "Power systems design and electrical installations",
    },
    {
      icon: Eye,
      title: "Project Supervision",
      description: "Professional project management and design services",
    },
  ]

  const projects = [
    {
      name: "Vision City Construction",
      category: "Residential",
      location: "Kigali",
      completion: "2016",
      value: "1,213,456,000 RWF",
      client: "RSSB/CCECC",
      role: "Subcontractor",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "IDP Model Village",
      category: "Public",
      location: "Kirehe District",
      completion: "2017",
      value: "381,419,987 RWF",
      client: "KIREHE District/R.F",
      role: "Subcontractor",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Vocational Training Center",
      category: "Education",
      location: "Nyamasheke District",
      completion: "2013",
      value: "438,560,796 RWF",
      client: "Swisscontact/NLE-LTD",
      role: "Contractor",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "BPR Huye Branch Refurbishment",
      category: "Commercial",
      location: "Huye District",
      completion: "2013",
      value: "350,180,012 RWF",
      client: "BPR",
      role: "Contractor",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const strengths = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Committed to delivering superior quality in every project",
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Strict adherence to safety standards and protocols",
    },
    {
      icon: Timer,
      title: "Timely Delivery",
      description: "Projects completed on schedule with efficient management",
    },
    {
      icon: Users,
      title: "Skilled Team",
      description: "20+ experienced professionals with local expertise",
    },
  ]

  const policies = [
    {
      icon: HardHat,
      title: "Occupational Health & Safety",
      description: "Adherence to OHS standards with comprehensive safety protocols"
    },
    {
      icon: Leaf,
      title: "Environmental Policy",
      description: "Minimizing environmental impact and restoring natural flora"
    },
    {
      icon: Handshake,
      title: "Affirmative Action",
      description: "30% female component and vocational training programs"
    },
    {
      icon: BookOpen,
      title: "Quality Statement",
      description: "Synergy-driven approach to infrastructure development"
    }
  ]

  const keyPersonnel = [
    {
      name: "Egide Manirakarama",
      position: "Managing Director",
      qualification: "Bachelor in Civil Engineering",
      experience: "19+ years in construction"
    },
    {
      name: "Bernard Mukeshimana",
      position: "Technical Director",
      qualification: "Bachelor in Civil Engineering",
      experience: "10+ years in construction"
    },
    {
      name: "Juvens Havugimana",
      position: "Project Manager",
      qualification: "Bachelor in Civil Engineering",
      experience: "4+ years with I-Con Ltd"
    },
    {
      name: "Janviere Yadufashije",
      position: "Chief Accountant",
      qualification: "Bachelor in Finance",
      experience: "4+ years with I-Con Ltd"
    }
  ]

  const handleDownloadPortfolio = () => {
    window.open('/portfolio.pdf', '_blank');
  }

  return (
    <div className="min-h-screen bg-white">
      <LayoutHeader onDownloadPortfolio={handleDownloadPortfolio} />
      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20 overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/construction-bg.jpg')" }}
          aria-hidden="true"
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <Image
                src="/images/icon-logo.png"
                alt="I-Con Ltd Logo"
                width={120}
                height={80}
                className="drop-shadow-lg"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Building Rwanda's Future with Excellence
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Specializing in quality, cost-effective projects across building, civil, water and sanitation sectors throughout Rwanda since 2013.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleDownloadPortfolio}
                size="lg" 
                className="bg-white hover:bg-gray-100 text-blue-600"
              >
                <FileText className="h-5 w-5 mr-2" />
                Download Portfolio
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                <Link href="/projects">Our Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Highlights */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
              <h3 className="text-lg font-semibold mb-2">Years in Business</h3>
              <p className="text-gray-600">Established in 2013 with a proven track record</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
              <h3 className="text-lg font-semibold mb-2">Skilled Professionals</h3>
              <p className="text-gray-600">Dedicated team with technical expertise</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">1B+</div>
              <h3 className="text-lg font-semibold mb-2">RWF Projects Completed</h3>
              <p className="text-gray-600">Delivering quality infrastructure solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Summaries Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Summary */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center flex flex-col justify-between">
            <div>
                <h3 className="text-xl font-bold mb-2">About Us</h3>
                <p className="text-gray-600 mb-4">Learn about our mission, vision, and the story behind I-Con Ltd's commitment to building Rwanda's future.</p>
              </div>
              <a href="/about">
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Learn More</button>
              </a>
            </div>
            {/* Services Summary */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Our Services</h3>
                <p className="text-gray-600 mb-4">Discover our comprehensive construction, engineering, and project management services tailored for Rwanda's development.</p>
              </div>
              <a href="/services">
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">View All Services</button>
              </a>
              </div>
            {/* Projects Summary */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Projects</h3>
                <p className="text-gray-600 mb-4">See highlights of our completed projects, from residential developments to public infrastructure across Rwanda.</p>
              </div>
              <a href="/projects">
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">View Projects</button>
              </a>
            </div>
            {/* Team Summary */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center flex flex-col justify-between">
            <div>
                <h3 className="text-xl font-bold mb-2">Our Team</h3>
                <p className="text-gray-600 mb-4">Meet the experienced professionals who drive our success in Rwanda's construction sector.</p>
              </div>
              <a href="/team">
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Meet the Team</button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <LayoutFooter onDownloadPortfolio={handleDownloadPortfolio} />
    </div>
  )
}