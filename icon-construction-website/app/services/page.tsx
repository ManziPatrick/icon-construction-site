"use client"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Building2, Hammer, Zap, Droplets, Eye } from "lucide-react"
import LayoutHeader from "@/components/layout-header"
import LayoutFooter from "@/components/layout-footer"
import Link from "next/link"

const services = [
  {
    slug: "building-construction",
    icon: Building2,
    title: "Building Construction",
    description: "Residential and commercial construction projects with modern techniques",
    details: "We deliver high-quality residential and commercial buildings using modern construction techniques, sustainable materials, and a focus on client satisfaction. Our portfolio includes apartment complexes, office buildings, and custom homes, all completed to the highest standards of safety and durability."
  },
  {
    slug: "civil-works",
    icon: Hammer,
    title: "Civil Works",
    description: "Infrastructure development and civil engineering solutions",
    details: "Our civil engineering team specializes in infrastructure development, including roads, bridges, drainage systems, and public utilities. We manage every phase from design to execution, ensuring compliance with local regulations and international best practices."
  },
  {
    slug: "mep-services",
    icon: Zap,
    title: "MEP Services",
    description: "Mechanical, Electrical & Plumbing systems installation",
    details: "We provide comprehensive Mechanical, Electrical, and Plumbing (MEP) solutions for new and existing structures. Our engineers design and install efficient systems that ensure comfort, safety, and energy savings for all types of buildings."
  },
  {
    slug: "water-sanitation",
    icon: Droplets,
    title: "Water & Sanitation",
    description: "Clean water systems and sanitation infrastructure",
    details: "We design and construct clean water supply systems, sewage networks, and sanitation facilities for communities, schools, and businesses. Our projects improve public health and support sustainable urban and rural development."
  },
  {
    slug: "electrical-engineering",
    icon: Zap,
    title: "Electrical Engineering",
    description: "Power systems design and electrical installations",
    details: "Our electrical engineering services cover power distribution, lighting, backup systems, and renewable energy integration. We deliver safe, reliable, and cost-effective electrical solutions for projects of all sizes."
  },
  {
    slug: "project-supervision",
    icon: Eye,
    title: "Project Supervision",
    description: "Professional project management and design services",
    details: "Our experienced project managers oversee every aspect of construction, from planning and procurement to execution and quality control. We ensure projects are delivered on time, within budget, and to the client's specifications."
  },
]

export default function ServicesPage() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(null)

  const handleLearnMore = (service) => {
    setSelected(service)
    setOpen(true)
  }

  const handleDownloadPortfolio = () => {
    window.open('/portfolio.pdf', '_blank');
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <LayoutHeader onDownloadPortfolio={handleDownloadPortfolio} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-black mb-8 text-center">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Card key={idx} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link href={`/services/${service.slug}`}>Learn More</Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <LayoutFooter onDownloadPortfolio={handleDownloadPortfolio} />
    </div>
  )
} 