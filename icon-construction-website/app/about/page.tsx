"use client"
import LayoutHeader from "@/components/layout-header"
import LayoutFooter from "@/components/layout-footer"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function AboutPage() {
  const handleDownloadPortfolio = () => {
    window.open('/portfolio.pdf', '_blank');
  }
  return (
    <div className="min-h-screen bg-white">
      <LayoutHeader onDownloadPortfolio={handleDownloadPortfolio} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-black mb-8 text-center">About INTIMATE CONTRACTORS LTD (I-Con Ltd)</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-gray-600 mb-6">
              INTIMATE CONTRACTORS LTD (I-Con Ltd) was established in 2013 with the express aim of alleviating poverty and creating opportunities, 
              embodying the essence of pro-active owner-manager culture in Rwanda.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Our Principle: Synergy</h3>
                <p className="text-gray-600">
                  Building a nation through job creation. We specialize in quality, cost-effective projects 
                  across building, civil, water and sanitation sectors throughout Rwanda.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Our Strength: Human Capital</h3>
                <p className="text-gray-600">
                  Our people are crucial in delivering services to clients. We invest in comprehensive training 
                  programs to constantly upgrade technical and management skills.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Management Focus</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-3 rounded">
                    <h4 className="font-medium text-blue-600">Quality</h4>
                    <p className="text-sm text-gray-600">Adherence to highest standards</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <h4 className="font-medium text-blue-600">Cost</h4>
                    <p className="text-sm text-gray-600">Cost-effective solutions</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <h4 className="font-medium text-blue-600">Time</h4>
                    <p className="text-sm text-gray-600">Timely project completion</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <h4 className="font-medium text-blue-600">Scope</h4>
                    <p className="text-sm text-gray-600">Comprehensive service delivery</p>
                  </div>
                </div>
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
            <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-black p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">TIN: 102905847</div>
              <div className="text-sm">Registered in Rwanda</div>
            </div>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-l-4 border-l-blue-600">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-black mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-4">
                To be a respectable building contractor delivering beyond expectation, always. We contribute to 
                sustainable economic growth and development through our procurement processes and skills transfer.
              </p>
              <p className="text-gray-600">
                We promote strict adherence to quality, health and safety standards while encouraging harmonious 
                personnel relationships to promote teamwork.
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-blue-600">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-black mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To play a major role in infrastructure development in Rwanda by creating partnerships with emerging 
                contractors and enhancing black economic empowerment policies through capacity building.
              </p>
              <div className="mt-4 p-4 bg-blue-50 rounded">
                <p className="text-blue-600 font-medium">
                  "If JESUS is involved in your Business, it does not matter who else is involved in your Business"
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="mt-16 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-black mb-4">Company Registration Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Legal Information</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Name: INTIMATE CONTRACTORS LTD</li>
                <li>TIN: 102905847</li>
                <li>Registration: 13/02/2013</li>
                <li>Category: Private Limited Company</li>
                <li>Paid-up Capital: 1,000,000 RWF</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Business Activities</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Construction of buildings (F4100)</li>
                <li>Construction of roads (F4210)</li>
                <li>Civil engineering projects (F4290)</li>
                <li>Specialized construction (F4390)</li>
                <li>Architectural services (M7110)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Directors</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Egide Manirakarama</li>
                <li>Bernard Mukeshimana</li>
                <li>Janviere Yadufashije</li>
                <li>Dieudonné Nizeyimana</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <LayoutFooter onDownloadPortfolio={handleDownloadPortfolio} />
    </div>
  )
} 