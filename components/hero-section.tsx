"use client"
import { useState, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import Link from "next/link"

// Testimonial data for professional services
const testimonials = [
  {
    id: 1,
    quote: "Found an amazing electrician through BeFarsi. Professional, punctual, and reasonably priced!",
    name: "Marie Dubois",
    title: "Homeowner, Brussels",
    avatarUrl: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    quote: "The plumber I hired was excellent. Fixed my issue quickly and explained everything clearly.",
    name: "Jan Vermeulen",
    title: "Property Manager, Antwerp",
    avatarUrl: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    quote: "Great platform to find reliable home services. The booking system is so convenient!",
    name: "Sophie Laurent",
    title: "Busy Professional, Ghent",
    avatarUrl: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    quote: "As a professional, BeFarsi has helped me grow my business significantly. Highly recommend!",
    name: "Ahmed Hassan",
    title: "Licensed Electrician",
    avatarUrl: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    quote: "The cleaning service I found was exceptional. My house has never looked better!",
    name: "Emma Rodriguez",
    title: "Working Mother, Leuven",
    avatarUrl: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 6,
    quote: "Professional legal advice at fair prices. The lawyer was knowledgeable and helpful.",
    name: "Thomas Mueller",
    title: "Small Business Owner",
    avatarUrl: "/placeholder.svg?height=40&width=40",
  },
]

// Double the testimonials for continuous scrolling
const doubledTestimonials = [...testimonials, ...testimonials]

// Service categories for slideshow
const slides = [
  {
    id: 1,
    title: "Find Trusted Professionals",
    subtitle: "Home Services & Repairs",
    image: "/placeholder.svg?height=400&width=600",
    category: "home-services",
  },
  {
    id: 2,
    title: "Expert Legal Services",
    subtitle: "Professional Consultation",
    image: "/placeholder.svg?height=400&width=600",
    category: "legal",
  },
  {
    id: 3,
    title: "Beauty & Wellness",
    subtitle: "Personal Care Services",
    image: "/placeholder.svg?height=400&width=600",
    category: "beauty",
  },
  {
    id: 4,
    title: "Technical Support",
    subtitle: "IT & Electronics Repair",
    image: "/placeholder.svg?height=400&width=600",
    category: "technical",
  },
  {
    id: 5,
    title: "Education & Training",
    subtitle: "Learn New Skills",
    image: "/placeholder.svg?height=400&width=600",
    category: "education",
  },
]

// Filter options for Belgium
const locations = [
  "All Locations",
  "Brussels",
  "Antwerp",
  "Ghent",
  "Leuven",
  "Bruges",
  "Liège",
  "Namur",
  "Hasselt",
  "Charleroi",
]
const categories = [
  "All Categories",
  "Technical & Repair Services",
  "Home Services",
  "Beauty & Wellness",
  "Business & Professionals",
  "Education & Training",
  "Transport & Moving",
  "Construction & Large Projects",
]

// Testimonial Card Component
function TestimonialCard({
  quote,
  name,
  title,
  avatarUrl,
}: {
  quote: string
  name: string
  title: string
  avatarUrl: string
}) {
  return (
    <div className="bg-[#131429]/80 backdrop-blur-sm border border-[#2a2c42] rounded-lg p-4 w-[280px] mx-1 h-[205.5px] flex flex-col">
      <p className="text-sm text-gray-300 mb-4 line-clamp-4 flex-grow">"{quote}"</p>
      <div className="flex items-center">
        <Avatar className="h-8 w-8 mr-2">
          <AvatarImage src={avatarUrl || "/placeholder.svg"} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium text-white">{name}</p>
          <p className="text-xs text-gray-400">{title}</p>
        </div>
      </div>
    </div>
  )
}

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedLocation, setSelectedLocation] = useState(locations[0])
  const [selectedCategory, setSelectedCategory] = useState(categories[0])
  const [searchQuery, setSearchQuery] = useState("")
  const [isHovered, setIsHovered] = useState(false)

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (selectedLocation !== "All Locations") params.set("location", selectedLocation)
    if (selectedCategory !== "All Categories") params.set("category", selectedCategory)
    if (searchQuery) params.set("q", searchQuery)

    window.location.href = `/professionals?${params.toString()}`
  }

  return (
    <section
      className="relative h-[475px] w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Colorful gradient background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(
            135deg,
            rgb(255, 255, 255) 0%,
            rgba(0, 123, 255, .7) 15%,
            rgb(242, 91, 255) 30%,
            rgb(0, 80, 165) 75%,
            rgb(10 12 57) 90%,
            #1b1f3b 90%
          )`,
        }}
      />

      {/* Background layer - Testimonial Rows */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {/* First row of testimonials */}
        <div className={`flex py-4 container mx-auto px-4 animate-marquee-right ${isHovered ? "animate-paused" : ""}`}>
          {doubledTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`row1-${testimonial.id}-${index}`}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              avatarUrl={testimonial.avatarUrl}
            />
          ))}
        </div>

        {/* Second row of testimonials */}
        <div className={`flex  container mx-auto px-4 animate-marquee-right ${isHovered ? "animate-paused" : ""}`}>
          {doubledTestimonials.reverse().map((testimonial, index) => (
            <TestimonialCard
              key={`row2-${testimonial.id}-${index}`}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              avatarUrl={testimonial.avatarUrl}
            />
          ))}
        </div>

        {/* Gradient overlays */}
        <div className="testimonial-cu__gradient"></div>
        <div className="testimonial-cu__gradient _2"></div>
      </div>

      {/* Foreground layer - Slideshow and Search */}
      <div className="absolute h-[496px] inset-0 z-20 flex">
        <div className="w-1/2 bg-blue h-full flex flex-col">
          {/* Slideshow Section (70% height) */}
          <div className="h-[77%] relative">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="relative h-full">
                  <div className="absolute inset-0 opacity-100 bg-gradient-to-r from-black/20 to-transparent z-10" />
                  <img
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 z-20 flex flex-col justify-center p-8 bg-gradient-to-l from-black/100">
                    <h1 className="text-4xl font-bold text-white mb-2">{slide.title}</h1>
                    <h3 className="text-xl text-gray-200 mb-4">{slide.subtitle}</h3>
                    <Link
                      href={`/services/${slide.category}`}
                      className="inline-block bg-sky-500 text-white px-6 py-3 rounded-lg hover:bg-sky-600 transition-colors w-fit"
                    >
                      Explore Services
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Search Bar Section (30% height) */}
          <div className="h-[23%] bg-black/40 backdrop-blur-md p-6 flex items-center">
            <div className="flex items-center space-x-4 w-full">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search for services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-white/10 text-white pl-10 py-2 rounded-lg border border-white/20 focus:outline-none focus:border-sky-500 placeholder-gray-400"
                />
              </div>

              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="bg-white/10 text-white px-4 py-2 rounded-lg border border-white/20 focus:outline-none focus:border-sky-500"
              >
                {locations.map((location) => (
                  <option key={location} value={location} className="text-black bg-white">
                    {location}
                  </option>
                ))}
              </select>

              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-white/10 text-white px-4 py-2 rounded-lg border border-white/20 focus:outline-none focus:border-sky-500"
              >
                {categories.map((category) => (
                  <option key={category} value={category} className="text-black bg-white">
                    {category}
                  </option>
                ))}
              </select>

              <Button onClick={handleSearch} className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-lg">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
