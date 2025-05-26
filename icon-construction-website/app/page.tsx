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
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

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
      name: "Kigali Commercial Center",
      category: "Commercial",
      location: "Kigali",
      completion: "2023",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Residential Complex Nyarutarama",
      category: "Residential",
      location: "Nyarutarama",
      completion: "2022",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Water Treatment Plant",
      category: "Infrastructure",
      location: "Musanze",
      completion: "2023",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "School Building Project",
      category: "Public",
      location: "Huye",
      completion: "2022",
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
      description: "Experienced professionals with local and international expertise",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
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
            <div className="hidden md:flex space-x-8">
              <Link href="#home" className="text-black hover:text-green-600 transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-black hover:text-green-600 transition-colors">
                About
              </Link>
              <Link href="#services" className="text-black hover:text-green-600 transition-colors">
                Services
              </Link>
              <Link href="#projects" className="text-black hover:text-green-600 transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="text-black hover:text-green-600 transition-colors">
                Contact
              </Link>
            </div>
            <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
              <a href="https://wa.me/250788404080" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
  id="home"
  className="relative bg-gradient-to-r from-green-600 to-green-700 text-white py-20 overflow-hidden"
>
  {/* Background image layer */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-20"
    style={{ backgroundImage: "url('/images/construction-bg.jpg')" }}
    aria-hidden="true"
  ></div>

  {/* Content layer */}
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
        I-Con Ltd is a leading construction company specializing in building construction,
        civil engineering, MEP services, and infrastructure development across Rwanda since 2013.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black">
          <a href="https://wa.me/250788404080" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-5 w-5 mr-2" />
            Get in Touch
          </a>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="border-white text-white hover:bg-white hover:text-green-600"
        >
          <Link href="#services">Our Services</Link>
        </Button>
      </div>
    </div>
  </div>
</section>


      {/* Services Highlight */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Our Core Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive construction and engineering solutions for Rwanda's development
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-green-600">
                <CardContent className="p-6">
                  <service.icon className="h-12 w-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-semibold text-black mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">About I-Con Ltd</h2>
              <p className="text-gray-600 mb-6">
                Established in 2013, I-Con Ltd has been at the forefront of Rwanda's construction and infrastructure
                development. We have built a reputation for excellence, innovation, and commitment to quality across all
                our projects.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    To deliver exceptional construction and engineering solutions that contribute to Rwanda's
                    sustainable development and economic growth.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">Our Vision</h3>
                  <p className="text-gray-600">
                    To be the leading construction company in Rwanda, recognized for quality, innovation, and positive
                    community impact.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="I-Con Ltd construction site"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-black p-4 rounded-lg">
                <div className="text-2xl font-bold">10+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive construction and engineering solutions tailored to meet Rwanda's development needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Our Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Showcasing our commitment to excellence through completed projects across Rwanda
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button variant="outline" className="border-green-600 text-green-600 bg-green-50">
              All Projects
            </Button>
            <Button variant="outline">Commercial</Button>
            <Button variant="outline">Residential</Button>
            <Button variant="outline">Infrastructure</Button>
            <Button variant="outline">Public</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={project.image || "/placeholder.svg"} alt={project.name} fill className="object-cover" />
                  <Badge className="absolute top-4 left-4 bg-green-600">{project.category}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-2">{project.name}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <CheckCircle className="h-4 w-4 mr-1 text-green-600" />
                    <span>Completed {project.completion}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose I-Con Ltd</h2>
            <p className="text-green-100 max-w-2xl mx-auto">
              Our commitment to excellence, safety, and innovation sets us apart in the construction industry
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strengths.map((strength, index) => (
              <div key={index} className="text-center">
                <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <strength.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{strength.title}</h3>
                <p className="text-green-100">{strength.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Contact Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ready to start your next project? Get in touch with our team today
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-semibold text-black mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-green-600 mr-3" />
                  <div>
                    <span className="text-gray-600 block">KG 9 Ave, Kigali</span>
                    <span className="text-gray-600 text-sm">Kigali City, Rwanda</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-600">+250 788 404 080</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-600">info@iconltd.rw</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-600">Mon - Fri: 8:00 AM - 6:00 PM</span>
                </div>
              </div>

              <Button asChild className="bg-green-600 hover:bg-green-700 text-white mt-6">
                <a href="https://wa.me/250788404080" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>

            {/* Contact Form */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Send us a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
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
                className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
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
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Image src="/images/icon-logo.png" alt="I-Con Ltd Logo" width={50} height={33} className="mr-3" />
                <span className="text-xl font-bold">I-Con Ltd</span>
              </div>
              <p className="text-gray-400 mb-4">Building Rwanda's future with excellence since 2013.</p>
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <a href="https://wa.me/250788404080" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#services" className="hover:text-green-400">
                    Building Construction
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-green-400">
                    Civil Works
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-green-400">
                    MEP Services
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-green-400">
                    Water & Sanitation
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#about" className="hover:text-green-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="hover:text-green-400">
                    Our Projects
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-green-400">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-green-400">
                    Services
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>Kigali, Rwanda</p>
                <p>+250 788 404 080</p>
                <p>info@iconltd.rw</p>
                <div className="mt-4">
                  <p className="text-sm">Business Hours:</p>
                  <p className="text-sm">Mon - Fri: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 I-Con Ltd. All rights reserved. Building Rwanda's Future with Excellence.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
