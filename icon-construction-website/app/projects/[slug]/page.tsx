"use client"
import { useRouter } from "next/navigation"
import { useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, MapPin, ChevronLeft, ChevronRight, Image as ImageIcon, Star, Users, FileText } from "lucide-react"
import { useState } from "react"

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
    images: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200"
    ],
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
    images: [
      "/placeholder.svg?height=300&width=400"
    ],
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
    images: [
      "/placeholder.svg?height=300&width=400"
    ],
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
    images: [
      "/placeholder.svg?height=300&width=400"
    ],
    details: "I-Con Ltd was contracted to refurbish the BPR branch in Huye District, transforming the facility into a modern, customer-friendly banking environment. The project included interior renovations, accessibility improvements, and upgraded security systems."
  },
]

export default function ProjectDetailsPage() {
  const params = useParams()
  const slug = params?.slug
  const project = projects.find(p => p.slug === slug)
  const [imgIdx, setImgIdx] = useState(0)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-blue-600 mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-blue-600 underline">Back to Projects</Link>
        </div>
      </div>
    )
  }

  const hasMultiple = project.images.length > 1
  const prevImg = () => setImgIdx(i => (i === 0 ? project.images.length - 1 : i - 1))
  const nextImg = () => setImgIdx(i => (i === project.images.length - 1 ? 0 : i + 1))

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative w-full h-[320px] md:h-[420px] lg:h-[500px] flex items-end justify-start overflow-hidden mb-8">
        <Image src={project.images[0]} alt={project.name + ' banner'} fill className="object-cover w-full h-full" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />
        <div className="relative z-10 p-8 md:p-12">
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow mb-2">{project.name}</h1>
          <p className="text-lg md:text-2xl text-blue-100 drop-shadow mb-2 max-w-2xl">{project.details}</p>
          <Badge className="bg-blue-600 text-white text-base px-4 py-2 mt-2">{project.category}</Badge>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <Link href="/projects" className="text-blue-600 underline mb-6 inline-block">&larr; Back to Projects</Link>
        {/* Main Gallery */}
        <section className="mb-12 bg-blue-50 rounded-xl p-6 shadow">
          <div className="flex items-center gap-2 mb-4">
            <ImageIcon className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-semibold text-blue-700">Gallery</h2>
          </div>
          <div className="mb-6 relative flex items-center justify-center">
            {hasMultiple && (
              <button onClick={prevImg} className="absolute left-0 z-10 p-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition">
                <ChevronLeft className="h-6 w-6" />
              </button>
            )}
            <Image src={project.images[imgIdx]} alt={project.name + ' image'} width={700} height={450} className="rounded-xl shadow-lg mx-auto" />
            {hasMultiple && (
              <button onClick={nextImg} className="absolute right-0 z-10 p-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition">
                <ChevronRight className="h-6 w-6" />
              </button>
            )}
          </div>
          {/* Thumbnails */}
          {project.images.length > 1 && (
            <div className="flex gap-2 justify-center mb-6">
              {project.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setImgIdx(idx)}
                  className={`border-2 rounded shadow-sm focus:outline-none transition-all ${imgIdx === idx ? 'border-blue-600' : 'border-transparent'}`}
                  aria-label={`Show image ${idx + 1}`}
                >
                  <Image src={img} alt={`Thumbnail ${idx + 1}`} width={96} height={64} className="rounded object-cover" />
                </button>
              ))}
            </div>
          )}
        </section>
        {/* Project Info */}
        <section className="mb-12">
          <div className="flex flex-wrap gap-6 text-gray-700 mb-4">
            <div className="flex items-center"><MapPin className="h-5 w-5 mr-1 text-blue-600" /> {project.location}</div>
            <div className="flex items-center"><CheckCircle className="h-5 w-5 mr-1 text-blue-600" /> Completed {project.completion}</div>
            <div><span className="font-medium">Client:</span> {project.client}</div>
            <div><span className="font-medium">Value:</span> {project.value}</div>
            <div><span className="font-medium">Role:</span> {project.role}</div>
          </div>
        </section>
        {/* Overview */}
        <section className="mb-12 bg-white rounded-xl p-6 shadow">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-semibold text-blue-700">Project Overview</h2>
          </div>
          <p className="text-gray-800 mb-2">{project.details}</p>
          <p className="text-gray-700 mb-2">This project was a major milestone for I-Con Ltd, demonstrating our ability to deliver complex infrastructure on time and to the highest standards.</p>
        </section>
        {/* Challenges */}
        <section className="mb-12 bg-blue-50 rounded-xl p-6 shadow">
          <div className="flex items-center gap-2 mb-4">
            <Star className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-blue-700">Challenges</h2>
          </div>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Challenging site conditions and logistics</li>
            <li>Strict timeline and budget constraints</li>
            <li>Coordination with multiple stakeholders</li>
          </ul>
        </section>
        {/* Solutions */}
        <section className="mb-12 bg-white rounded-xl p-6 shadow">
          <div className="flex items-center gap-2 mb-4">
            <Users className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-blue-700">Our Solutions</h2>
          </div>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Innovative construction techniques and project management</li>
            <li>Close collaboration with the client and partners</li>
            <li>Use of high-quality, sustainable materials</li>
          </ul>
        </section>
        {/* Results/Impact */}
        <section className="mb-12 bg-blue-50 rounded-xl p-6 shadow">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-blue-700">Results & Impact</h2>
          </div>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Project delivered on time and within budget</li>
            <li>Significant positive impact on the local community</li>
            <li>Enhanced reputation for I-Con Ltd and the client</li>
          </ul>
        </section>
        {/* Extra Gallery */}
        <section className="mb-12 bg-white rounded-xl p-6 shadow">
          <div className="flex items-center gap-2 mb-4">
            <ImageIcon className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-blue-700">More Project Images</h2>
          </div>
          <div className="flex flex-wrap gap-4">
            {project.images.concat(project.images).map((img, idx) => (
              <Image key={idx} src={img} alt={project.name + ' extra image'} width={300} height={200} className="rounded shadow-lg" />
            ))}
          </div>
        </section>
        {/* Use Cases */}
        <section className="mb-12 bg-blue-50 rounded-xl p-6 shadow">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-blue-700">Use Cases</h2>
          </div>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Urban residential development</li>
            <li>Public infrastructure improvement</li>
            <li>Commercial facility upgrades</li>
            <li>Educational and community projects</li>
          </ul>
        </section>
        {/* Testimonials */}
        <section className="mb-12 bg-white rounded-xl p-6 shadow">
          <div className="flex items-center gap-2 mb-4">
            <Star className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-blue-700">Testimonials</h2>
          </div>
          <div className="bg-blue-50 p-4 rounded mb-2">
            <p className="italic text-gray-800">“I-Con Ltd's professionalism and attention to detail made our project a success.”</p>
            <p className="text-sm text-blue-700 mt-2">— Project Client</p>
          </div>
          <div className="bg-blue-50 p-4 rounded">
            <p className="italic text-gray-800">“The team delivered on time and exceeded our expectations.”</p>
            <p className="text-sm text-blue-700 mt-2">— Community Leader</p>
          </div>
        </section>
        {/* Download Brochure */}
        <section className="mb-12 bg-blue-50 rounded-xl p-6 shadow text-center">
          <a href="/project-brochure.pdf" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition text-lg"><FileText className="inline-block mr-2 mb-1" />Download Project Brochure</a>
        </section>
        {/* Contact CTA */}
        <section className="mb-12 bg-white rounded-xl p-6 shadow text-center">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Interested in a similar project?</h2>
          <Link href="/contact" className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition text-lg">Contact Us</Link>
        </section>
        {/* Related Projects */}
        <section className="mb-12 bg-blue-50 rounded-xl p-6 shadow">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">Related Projects</h2>
          <div className="flex flex-wrap gap-4">
            {projects.filter(p => p.slug !== project.slug).slice(0, 3).map((p, idx) => (
              <Link key={p.slug} href={`/projects/${p.slug}`} className="flex-1 min-w-[180px] bg-white hover:bg-blue-100 rounded p-4 shadow text-center transition">
                <div className="font-semibold text-blue-700 mb-1">{p.name}</div>
                <div className="text-sm text-gray-600">{p.category} in {p.location}</div>
              </Link>
            ))}
          </div>
        </section>
        {/* Inquiry Form */}
        <section className="mb-12 max-w-xl mx-auto bg-white rounded-xl p-6 shadow">
          <h2 className="text-xl font-semibold text-blue-600 mb-4 text-center">Inquire About This Project</h2>
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