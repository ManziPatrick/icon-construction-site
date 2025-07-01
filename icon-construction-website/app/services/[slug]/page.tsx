"use client"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Building2, Hammer, Zap, Droplets, Eye, Star, Users, FileText, Image as ImageIcon } from "lucide-react"
import Image from "next/image"

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

export default function ServiceDetailsPage() {
  const params = useParams()
  const slug = params?.slug
  const service = services.find(s => s.slug === slug)

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-blue-600 mb-4">Service Not Found</h1>
          <Link href="/services" className="text-blue-600 underline">Back to Services</Link>
        </div>
      </div>
    )
  }

  const Icon = service.icon

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative w-full h-[320px] md:h-[420px] lg:h-[500px] flex items-end justify-start overflow-hidden mb-8">
        <Image src="/placeholder.svg?height=800&width=1200" alt={service.title + ' banner'} fill className="object-cover w-full h-full" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />
        <div className="relative z-10 p-8 md:p-12">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
            <Icon className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow mb-2">{service.title}</h1>
          <p className="text-lg md:text-2xl text-blue-100 drop-shadow mb-2 max-w-2xl">{service.description}</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4">
        <Link href="/services" className="text-blue-600 underline mb-6 inline-block">&larr; Back to Services</Link>
        {/* Overview */}
        <section className="mb-12 bg-white rounded-xl p-6 shadow">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-semibold text-blue-700">Overview</h2>
          </div>
          <p className="text-gray-800 mb-2">{service.details}</p>
          <Image src="/placeholder.svg?height=400&width=600" alt="Service overview" width={600} height={400} className="rounded-xl shadow mb-4" />
        </section>
        {/* Features */}
        <section className="mb-12 bg-blue-50 rounded-xl p-6 shadow">
          <div className="flex items-center gap-2 mb-4">
            <Star className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-blue-700">Key Features</h2>
          </div>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Expert team with years of experience</li>
            <li>Modern equipment and technology</li>
            <li>Strict quality and safety standards</li>
          </ul>
        </section>
        {/* Benefits */}
        <section className="mb-12 bg-white rounded-xl p-6 shadow">
          <div className="flex items-center gap-2 mb-4">
            <Users className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-blue-700">Benefits</h2>
          </div>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Cost-effective and reliable solutions</li>
            <li>On-time project delivery</li>
            <li>Long-term value for clients</li>
          </ul>
        </section>
        {/* Process */}
        <section className="mb-12 bg-blue-50 rounded-xl p-6 shadow">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-blue-700">Our Process</h2>
          </div>
          <ol className="list-decimal pl-6 text-gray-700">
            <li>Consultation and needs assessment</li>
            <li>Design and planning</li>
            <li>Execution and quality control</li>
            <li>Project handover and support</li>
          </ol>
        </section>
        {/* Gallery */}
        <section className="mb-12 bg-white rounded-xl p-6 shadow">
          <div className="flex items-center gap-2 mb-4">
            <ImageIcon className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-blue-700">Service Gallery</h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <Image src="/placeholder.svg?height=400&width=600" alt="Service image 1" width={300} height={200} className="rounded shadow-lg" />
            <Image src="/placeholder.svg?height=400&width=600" alt="Service image 2" width={300} height={200} className="rounded shadow-lg" />
          </div>
        </section>
        {/* Use Cases */}
        <section className="mb-12 bg-blue-50 rounded-xl p-6 shadow">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-blue-700">Use Cases</h2>
          </div>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Commercial buildings and office complexes</li>
            <li>Residential housing developments</li>
            <li>Public infrastructure projects</li>
            <li>Industrial facilities</li>
          </ul>
        </section>
        {/* Testimonials */}
        <section className="mb-12 bg-white rounded-xl p-6 shadow">
          <div className="flex items-center gap-2 mb-4">
            <Star className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-blue-700">Testimonials</h2>
          </div>
          <div className="bg-blue-50 p-4 rounded mb-2">
            <p className="italic text-gray-800">“I-Con Ltd delivered our project on time and exceeded our expectations for quality and professionalism.”</p>
            <p className="text-sm text-blue-700 mt-2">— Happy Client</p>
          </div>
          <div className="bg-blue-50 p-4 rounded">
            <p className="italic text-gray-800">“Their team was responsive and innovative throughout the process.”</p>
            <p className="text-sm text-blue-700 mt-2">— Project Partner</p>
          </div>
        </section>
        {/* Download Brochure */}
        <section className="mb-12 bg-blue-50 rounded-xl p-6 shadow text-center">
          <a href="/service-brochure.pdf" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition text-lg"><FileText className="inline-block mr-2 mb-1" />Download Service Brochure</a>
        </section>
        {/* Contact CTA */}
        <section className="mb-12 bg-white rounded-xl p-6 shadow text-center">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Interested in this service?</h2>
          <Link href="/contact" className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition text-lg">Contact Us</Link>
        </section>
        {/* Related Services */}
        <section className="mb-12 bg-blue-50 rounded-xl p-6 shadow">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">Related Services</h2>
          <div className="flex flex-wrap gap-4">
            {services.filter(s => s.slug !== service.slug).slice(0, 3).map((s, idx) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="flex-1 min-w-[180px] bg-white hover:bg-blue-100 rounded p-4 shadow text-center transition">
                <div className="flex justify-center mb-2"><s.icon className="h-6 w-6 text-blue-600" /></div>
                <div className="font-semibold text-blue-700 mb-1">{s.title}</div>
                <div className="text-sm text-gray-600">{s.description}</div>
              </Link>
            ))}
          </div>
        </section>
        {/* Inquiry Form */}
        <section className="mb-12 max-w-xl mx-auto bg-white rounded-xl p-6 shadow">
          <h2 className="text-xl font-semibold text-blue-600 mb-4 text-center">Inquire About This Service</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-blue-700 mb-1">Name</label>
              <input type="text" className="w-full px-3 py-2 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div>
              <label className="block text-sm font-medium text-blue-700 mb-1">Email</label>
              <input type="email" className="w-full px-3 py-2 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div>
              <label className="block text-sm font-medium text-blue-700 mb-1">Message</label>
              <textarea rows={4} className="w-full px-3 py-2 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-3 rounded-full transition text-lg">Send Inquiry</button>
          </form>
        </section>
      </div>
    </div>
  )
} 