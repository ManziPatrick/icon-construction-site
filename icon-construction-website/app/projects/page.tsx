"use client"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"
import { MapPin, CheckCircle } from "lucide-react"
import LayoutHeader from "@/components/layout-header"
import LayoutFooter from "@/components/layout-footer"
import Link from "next/link"

const projects = [
  {
    slug: "vision-city-construction",
    name: "Vision City Construction",
    category: "Residential",
    location: "Kigali",
    completion: "2016",
    value: "1,213,456,000 RWF",
    client: "RSSB/CCECC",
    role: "Subcontractor",
    image: "/placeholder.svg?height=300&width=400",
    details: "A landmark residential development in Kigali, Vision City features modern apartments and amenities. As a subcontractor, I-Con Ltd contributed to the construction of key infrastructure, ensuring timely delivery and adherence to quality standards. The project set a new benchmark for urban living in Rwanda."
  },
  {
    slug: "idp-model-village",
    name: "IDP Model Village",
    category: "Public",
    location: "Kirehe District",
    completion: "2017",
    value: "381,419,987 RWF",
    client: "KIREHE District/R.F",
    role: "Subcontractor",
    image: "/placeholder.svg?height=300&width=400",
    details: "Commissioned by Kirehe District, this public project provided safe, modern housing for internally displaced persons. I-Con Ltd constructed durable homes, community facilities, and essential infrastructure, supporting government efforts to improve living conditions and promote social integration."
  },
  {
    slug: "vocational-training-center",
    name: "Vocational Training Center",
    category: "Education",
    location: "Nyamasheke District",
    completion: "2013",
    value: "438,560,796 RWF",
    client: "Swisscontact/NLE-LTD",
    role: "Contractor",
    image: "/placeholder.svg?height=300&width=400",
    details: "Located in Nyamasheke District, this center was built to empower youth with practical skills. I-Con Ltd managed the construction of classrooms, workshops, and administrative buildings, creating a modern learning environment that supports Rwanda's workforce development goals."
  },
  {
    slug: "bpr-huye-branch-refurbishment",
    name: "BPR Huye Branch Refurbishment",
    category: "Commercial",
    location: "Huye District",
    completion: "2013",
    value: "350,180,012 RWF",
    client: "BPR",
    role: "Contractor",
    image: "/placeholder.svg?height=300&width=400",
    details: "I-Con Ltd was contracted to refurbish the BPR branch in Huye District, transforming the facility into a modern, customer-friendly banking environment. The project included interior renovations, accessibility improvements, and upgraded security systems."
  },
]

const categories = [
  ...Array.from(new Set(projects.map(p => p.category)))
]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(null)

  const filtered = selectedCategory === "All" ? projects : projects.filter(p => p.category === selectedCategory)

  const handleDownloadPortfolio = () => {
    window.open('/portfolio.pdf', '_blank');
  }

  return (
    <div className="min-h-screen bg-white">
      <LayoutHeader onDownloadPortfolio={handleDownloadPortfolio} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-black mb-8 text-center">Our Projects</h1>
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          <Button variant={selectedCategory === "All" ? "default" : "outline"} onClick={() => setSelectedCategory("All")}>All</Button>
          {categories.map((cat, idx) => (
            <Button key={idx} variant={selectedCategory === cat ? "default" : "outline"} onClick={() => setSelectedCategory(cat)}>{cat}</Button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filtered.map((project, idx) => (
            <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src={project.image || "/placeholder.svg"} alt={project.name} fill className="object-cover" />
                <Badge className="absolute top-4 left-4 bg-blue-600">{project.category}</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-black mb-2">{project.name}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-2">
                  <CheckCircle className="h-4 w-4 mr-1 text-blue-600" />
                  <span>Completed {project.completion}</span>
                </div>
                <div className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">Client:</span> {project.client}
                </div>
                <div className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">Value:</span> {project.value}
                </div>
                <Badge variant="outline" className="border-blue-600 text-blue-600">
                  {project.role}
                </Badge>
                <Link href={`/projects/${project.slug}`}>Learn More</Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <LayoutFooter onDownloadPortfolio={handleDownloadPortfolio} />
    </div>
  )
} 