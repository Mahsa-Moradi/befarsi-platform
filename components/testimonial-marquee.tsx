import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type TestimonialProps = {
  quote: string
  name: string
  title: string
  company: string
  avatarUrl: string
}

const testimonials: TestimonialProps[] = [
  {
    quote: "Found an amazing electrician through BeFarsi. Professional, punctual, and reasonably priced!",
    name: "Marie Dubois",
    title: "Homeowner",
    company: "Brussels",
    avatarUrl: "/placeholder.svg?height=40&width=40",
  },
  {
    quote: "The plumber I hired was excellent. Fixed my issue quickly and explained everything clearly.",
    name: "Jan Vermeulen",
    title: "Property Manager",
    company: "Antwerp",
    avatarUrl: "/placeholder.svg?height=40&width=40",
  },
  {
    quote: "Great platform to find reliable home services. The booking system is so convenient!",
    name: "Sophie Laurent",
    title: "Busy Professional",
    company: "Ghent",
    avatarUrl: "/placeholder.svg?height=40&width=40",
  },
  {
    quote: "As a professional, BeFarsi has helped me grow my business significantly. Highly recommend!",
    name: "Ahmed Hassan",
    title: "Licensed Electrician",
    company: "Leuven",
    avatarUrl: "/placeholder.svg?height=40&width=40",
  },
  {
    quote: "The cleaning service I found was exceptional. My house has never looked better!",
    name: "Emma Rodriguez",
    title: "Working Mother",
    company: "Bruges",
    avatarUrl: "/placeholder.svg?height=40&width=40",
  },
  {
    quote: "Professional legal advice at fair prices. The lawyer was knowledgeable and helpful.",
    name: "Thomas Mueller",
    title: "Small Business Owner",
    company: "Liège",
    avatarUrl: "/placeholder.svg?height=40&width=40",
  },
]

function TestimonialCard({ quote, name, title, company, avatarUrl }: TestimonialProps) {
  return (
    <div className="bg-[#131429] border border-[#2a2c42] rounded-lg p-4 w-[280px] mx-3 flex flex-col">
      <p className="text-sm text-gray-300 mb-4 flex-grow">"{quote}"</p>
      <div className="flex items-center">
        <Avatar className="h-8 w-8 mr-2">
          <AvatarImage src={avatarUrl || "/placeholder.svg"} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium text-white">{name}</p>
          <p className="text-xs text-gray-400">
            {title}, {company}
          </p>
        </div>
      </div>
    </div>
  )
}

type TestimonialMarqueeProps = {
  direction: "left" | "right"
  className?: string
}

export default function TestimonialMarquee({ direction, className = "" }: TestimonialMarqueeProps) {
  // Duplicate testimonials to ensure continuous scrolling
  const allTestimonials = [...testimonials, ...testimonials]

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div
        className={`flex whitespace-nowrap ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
      >
        {allTestimonials.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.name}-${index}`}
            quote={testimonial.quote}
            name={testimonial.name}
            title={testimonial.title}
            company={testimonial.company}
            avatarUrl={testimonial.avatarUrl}
          />
        ))}
      </div>
    </div>
  )
}
