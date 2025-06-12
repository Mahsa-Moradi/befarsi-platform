"use client"

import { useState } from "react"
import NavBar from "@/components/nav-bar"
import FloatingShapes from "@/components/floating-shapes"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, MapPin, Award, Shield, ChevronRight } from "lucide-react"
import Link from "next/link"

// Mock data for professionals
const professionals = [
  {
    id: 1,
    name: "Goldstone Remodeling",
    rating: 4.9,
    reviews: 127,
    location: "Brussels, Belgium",
    image: "/placeholder.svg?height=200&width=300",
    verified: true,
    awards: ["Best of BeFarsi 2024"],
    description: "Specializing in luxury home renovations and custom builds with over 15 years of experience.",
    services: ["Architecture", "Interior Design", "Construction"],
    badges: ["Verified License", "Best of BeFarsi"],
  },
  {
    id: 2,
    name: "DC Builders Group",
    rating: 4.8,
    reviews: 89,
    location: "Antwerp, Belgium",
    image: "/placeholder.svg?height=200&width=300",
    verified: true,
    awards: ["Best of BeFarsi 2023"],
    description: "Full-service construction company specializing in residential and commercial projects.",
    services: ["Construction", "Renovation", "Project Management"],
    badges: ["Verified License"],
  },
  {
    id: 3,
    name: "GTN Designs & Remodeling Inc",
    rating: 4.7,
    reviews: 156,
    location: "Ghent, Belgium",
    image: "/placeholder.svg?height=200&width=300",
    verified: true,
    awards: [],
    description: "Award-winning design and build firm creating exceptional spaces for over 20 years.",
    services: ["Design", "Remodeling", "Custom Homes"],
    badges: ["Verified License"],
  },
  {
    id: 4,
    name: "Studio S Squared Architecture, Inc",
    rating: 4.9,
    reviews: 203,
    location: "Leuven, Belgium",
    image: "/placeholder.svg?height=200&width=300",
    verified: true,
    awards: ["Best of BeFarsi 2024", "Best of BeFarsi 2023"],
    description: "Contemporary architectural design firm focused on sustainable and innovative solutions.",
    services: ["Architecture", "Sustainable Design", "Planning"],
    badges: ["Verified License", "Best of BeFarsi"],
  },
  {
    id: 5,
    name: "VELUX Corporation",
    rating: 4.6,
    reviews: 94,
    location: "Bruges, Belgium",
    image: "/placeholder.svg?height=200&width=300",
    verified: true,
    awards: [],
    description: "Leading manufacturer and installer of skylights and roof windows.",
    services: ["Skylights", "Roof Windows", "Installation"],
    badges: ["Verified License"],
  },
  {
    id: 6,
    name: "Berton Builders",
    rating: 4.8,
    reviews: 167,
    location: "Liège, Belgium",
    image: "/placeholder.svg?height=200&width=300",
    verified: true,
    awards: ["Best of BeFarsi 2024"],
    description: "Premium custom home builder with expertise in luxury residential construction.",
    services: ["Custom Homes", "Luxury Construction", "Design-Build"],
    badges: ["Verified License", "Best of BeFarsi"],
  },
]

const projectTypes = [
  { name: "Kitchen Remodel", image: "/placeholder.svg?height=100&width=150" },
  { name: "Bathroom Remodel", image: "/placeholder.svg?height=100&width=150" },
  { name: "Whole House Remodel", image: "/placeholder.svg?height=100&width=150" },
  { name: "Room Addition", image: "/placeholder.svg?height=100&width=150" },
]

export default function ServicesPage() {
  const [location, setLocation] = useState("")
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])
  const [selectedProjectTypes, setSelectedProjectTypes] = useState<string[]>([])

  const handleFilterChange = (filter: string, checked: boolean) => {
    if (checked) {
      setSelectedFilters([...selectedFilters, filter])
    } else {
      setSelectedFilters(selectedFilters.filter((f) => f !== filter))
    }
  }

  return (
    <main className="min-h-screen relative overflow-hidden text-white bg-white dark:bg-[rgb(19,20,41)] transition-colors duration-300">
      <FloatingShapes />

      <div className="container mx-auto px-4">
        <NavBar />
      </div>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
          <Link href="/" className="hover:text-sky-500">
            Home
          </Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link href="/services" className="hover:text-sky-500">
            Services
          </Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-gray-900 dark:text-white">
            Architects, Architecture Firms, & Building Designers Near Me
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-700 to-emerald-800 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Get Matched with Local Professionals</h1>
            <p className="text-emerald-100 mb-8">
              Answer a few questions about your project and get matched with qualified professionals in your area.
            </p>

            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="Enter your location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-3 text-gray-900 bg-white border-0 rounded-l-md focus:ring-2 focus:ring-emerald-300"
                />
              </div>
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-r-md font-semibold">
                Get Started
              </Button>
            </div>

            <div className="flex justify-center items-center gap-8 mt-8 text-emerald-100">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-300 rounded-full"></div>
                <span className="text-sm">Get matched with pros</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-300 rounded-full"></div>
                <span className="text-sm">Get quotes for free</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-300 rounded-full"></div>
                <span className="text-sm">Hire the right pro for your project</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Type Selection */}
      <section className="py-8 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Which of the following best matches your project?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {projectTypes.map((type) => (
              <Card key={type.name} className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <img
                    src={type.image || "/placeholder.svg"}
                    alt={type.name}
                    className="w-full h-20 object-cover rounded-md mb-3"
                  />
                  <p className="text-sm font-medium text-gray-900 dark:text-white text-center">{type.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              {/* Location Filter */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Location</h3>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="brussels">Brussels</SelectItem>
                    <SelectItem value="antwerp">Antwerp</SelectItem>
                    <SelectItem value="ghent">Ghent</SelectItem>
                    <SelectItem value="leuven">Leuven</SelectItem>
                    <SelectItem value="bruges">Bruges</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Business & Building Designers */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Business & Building Designers</h3>
                <div className="space-y-2">
                  {["Architects", "Building Designers", "Design-Build Firms", "Drafting Services"].map((filter) => (
                    <div key={filter} className="flex items-center space-x-2">
                      <Checkbox
                        id={filter}
                        checked={selectedFilters.includes(filter)}
                        onCheckedChange={(checked) => handleFilterChange(filter, checked as boolean)}
                      />
                      <label htmlFor={filter} className="text-sm text-gray-700 dark:text-gray-300">
                        {filter}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Professional Filters */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Professional Filters</h3>
                <div className="space-y-2">
                  {["Verified License", "Background Checked", "Best of BeFarsi Winner"].map((filter) => (
                    <div key={filter} className="flex items-center space-x-2">
                      <Checkbox
                        id={filter}
                        checked={selectedFilters.includes(filter)}
                        onCheckedChange={(checked) => handleFilterChange(filter, checked as boolean)}
                      />
                      <label htmlFor={filter} className="text-sm text-gray-700 dark:text-gray-300">
                        {filter}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Type */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Project Type</h3>
                <div className="space-y-2">
                  {[
                    "House Plans",
                    "New Home",
                    "Home Addition",
                    "Whole House Remodeling",
                    "Kitchen",
                    "Bathroom",
                    "Outdoor",
                    "Commercial",
                  ].map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <Checkbox
                        id={type}
                        checked={selectedProjectTypes.includes(type)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedProjectTypes([...selectedProjectTypes, type])
                          } else {
                            setSelectedProjectTypes(selectedProjectTypes.filter((t) => t !== type))
                          }
                        }}
                      />
                      <label htmlFor={type} className="text-sm text-gray-700 dark:text-gray-300">
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rating Filter */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Rating</h3>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center space-x-2">
                      <Checkbox id={`rating-${rating}`} />
                      <label
                        htmlFor={`rating-${rating}`}
                        className="flex items-center text-sm text-gray-700 dark:text-gray-300"
                      >
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                        <span className="ml-2">& up</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Featured Services for Architects, Architecture Firms, & Building Designers Near Me
              </h2>
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="reviews">Most Reviews</SelectItem>
                  <SelectItem value="distance">Distance</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Professional Listings */}
            <div className="space-y-6">
              {professionals.map((pro) => (
                <Card key={pro.id} className="bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Professional Image */}
                      <div className="md:w-48 flex-shrink-0">
                        <img
                          src={pro.image || "/placeholder.svg"}
                          alt={pro.name}
                          className="w-full h-32 md:h-40 object-cover rounded-lg"
                        />
                      </div>

                      {/* Professional Info */}
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{pro.name}</h3>

                            {/* Rating and Reviews */}
                            <div className="flex items-center gap-4 mb-2">
                              <div className="flex items-center">
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`w-4 h-4 ${
                                        i < Math.floor(pro.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                                      }`}
                                    />
                                  ))}
                                </div>
                                <span className="ml-2 text-sm font-medium text-gray-900 dark:text-white">
                                  {pro.rating}
                                </span>
                                <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">
                                  ({pro.reviews} reviews)
                                </span>
                              </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-3">
                              <MapPin className="w-4 h-4 mr-1" />
                              {pro.location}
                            </div>

                            {/* Badges */}
                            <div className="flex flex-wrap gap-2 mb-3">
                              {pro.verified && (
                                <Badge variant="secondary" className="bg-green-100 text-green-800">
                                  <Shield className="w-3 h-3 mr-1" />
                                  Verified License
                                </Badge>
                              )}
                              {pro.awards.map((award) => (
                                <Badge key={award} variant="secondary" className="bg-blue-100 text-blue-800">
                                  <Award className="w-3 h-3 mr-1" />
                                  {award}
                                </Badge>
                              ))}
                            </div>

                            {/* Description */}
                            <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">{pro.description}</p>

                            {/* Services */}
                            <div className="flex flex-wrap gap-2">
                              {pro.services.map((service) => (
                                <Badge key={service} variant="outline" className="text-xs">
                                  {service}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex flex-col gap-2 mt-4 md:mt-0">
                            <Button className="bg-sky-500 hover:bg-sky-600 text-white">Send Message</Button>
                            <Button variant="outline">View Portfolio</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                {[1, 2, 3, 4, 5].map((page) => (
                  <Button
                    key={page}
                    variant={page === 1 ? "default" : "outline"}
                    size="sm"
                    className={page === 1 ? "bg-sky-500 text-white" : ""}
                  >
                    {page}
                  </Button>
                ))}
                <span className="text-gray-500">...</span>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <section className="bg-emerald-700 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Get connected with the right professional for your project.
          </h2>
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <Input
              type="text"
              placeholder="Enter your location"
              className="flex-1 px-4 py-3 text-gray-900 bg-white border-0 rounded-l-md"
            />
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-r-md font-semibold">
              Get Started
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
