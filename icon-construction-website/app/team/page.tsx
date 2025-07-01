"use client"
import LayoutHeader from "@/components/layout-header"
import LayoutFooter from "@/components/layout-footer"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const team = [
  {
    name: "Egide Manirakarama",
    position: "Managing Director",
    qualification: "Civil Engineering, 19+ yrs experience",
    image: "/placeholder-user.jpg"
  },
  {
    name: "Bernard Mukeshimana",
    position: "Technical Director",
    qualification: "Civil Engineering, 10+ yrs experience",
    image: "/placeholder-user.jpg"
  },
  {
    name: "Juvens Havugimana",
    position: "Project Manager",
    qualification: "Civil Engineering, 4+ yrs with I-Con Ltd",
    image: "/placeholder-user.jpg"
  },
  {
    name: "Janviere Yadufashije",
    position: "Chief Accountant",
    qualification: "Finance, 4+ yrs with I-Con Ltd",
    image: "/placeholder-user.jpg"
  }
]

export default function TeamPage() {
  const handleDownloadPortfolio = () => {
    window.open('/portfolio.pdf', '_blank');
  }
  return (
    <div className="min-h-screen bg-white">
      <LayoutHeader onDownloadPortfolio={handleDownloadPortfolio} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-blue-700 mb-8 text-center">Our Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((person, idx) => (
            <Card key={idx} className="text-center border-blue-100 shadow-md">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Image src={person.image} alt={person.name} width={96} height={96} className="rounded-full object-cover border-4 border-blue-200" />
                </div>
                <h3 className="text-lg font-semibold text-blue-700 mb-1">{person.name}</h3>
                <p className="text-blue-600 font-medium mb-1">{person.position}</p>
                <p className="text-xs text-gray-500">{person.qualification}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <LayoutFooter onDownloadPortfolio={handleDownloadPortfolio} />
    </div>
  )
} 