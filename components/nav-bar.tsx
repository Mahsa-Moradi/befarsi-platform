"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { MegaMenu } from "@/components/mega-menu"

const services = [
  {
    category: "Technical & Repair Services",
    icon: "🔧",
    items: ["Electrician", "Plumber", "Home Appliance Repair", "Mobile Mechanic", "Window/Door Installer"],
  },
  {
    category: "Home Services",
    icon: "🏡",
    items: ["House Cleaning", "Gardening & Landscaping", "Pet Care", "Babysitter / Elderly Care"],
  },
  {
    category: "Beauty & Wellness",
    icon: "🎨",
    items: ["Hairdresser", "Nail Technician", "Masseur", "Skin & Beauty Services", "Personal Trainer"],
  },
  {
    category: "Business & Professionals",
    icon: "💼",
    items: ["Accountant / Financial Advisor", "Lawyer", "Translator", "Graphic / Web Designer", "Career Consultant"],
  },
  {
    category: "Education & Training",
    icon: "🏫",
    items: ["Private Tutor", "Language Classes", "Music Lessons", "Driving Instructor"],
  },
  {
    category: "Transport & Moving",
    icon: "🚚",
    items: ["Moving Services", "Private Driver", "Van / Truck Rental"],
  },
  {
    category: "Construction & Large Projects",
    icon: "🛠️",
    items: ["Construction Worker", "Tiler / Painter", "Mason / Plasterer", "Architect / Interior Designer"],
  },
]

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [megaMenuOpen, setMegaMenuOpen] = useState(false)
  const pathname = usePathname()
  const servicesBtnRef = useRef<HTMLButtonElement>(null)

  // Close mega menu on route change
  useEffect(() => {
    setMegaMenuOpen(false)
  }, [pathname])

  // Keyboard accessibility: close on ESC
  useEffect(() => {
    if (!megaMenuOpen) return
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setMegaMenuOpen(false)
    }
    document.addEventListener("keydown", handleEsc)
    return () => document.removeEventListener("keydown", handleEsc)
  }, [megaMenuOpen])

  // Helper to check if a nav item is active
  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true
    return pathname === href
  }

  return (
    <>
      <style jsx global>{`
        @keyframes neon-underline-spin {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
        .neon-underline {
          position: relative;
        }
        .neon-underline::after {
          content: "";
          display: block;
          position: absolute;
          left: 0;
          right: 0;
          bottom: -4px;
          height: 1px;
          border-radius: 2px;
          background: linear-gradient(90deg, #007bff, #00e0ff, #007bff 70%);
          background-size: 200% 100%;
          box-shadow: 0 0 8px 2px #007bff, 0 0 16px 4px #00e0ff;
          opacity: 0;
          transform: scaleX(0.7);
          transition: opacity 0.3s, transform 0.3s;
          z-index: 1;
          animation: neon-underline-spin 3s linear infinite;
        }
        .neon-underline:hover::after,
        .neon-underline.active::after {
          opacity: 1;
          transform: scaleX(1);
        }
        .hover\\:bg-accent:hover {
          background-color: hsla(213.6, 97.5%, 32%, 0.57) !important;
        }
      `}</style>
      <header className="py-4 md:py-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 z-50">
            <img src="/placeholder.svg?height=32&width=32" alt="BeFarsi Logo" className="w-8 h-8" />
            <span className="font-bold text-lg md:text-xl text-gray-900 dark:text-white">BeFarsi</span>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900 dark:text-white" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900 dark:text-white" />
            )}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className={`text-sm text-gray-700 dark:text-gray-300 hover:text-sky-300 relative group neon-underline${
                isActive("/") ? " active" : ""
              }`}
            >
              Home
            </Link>

            <Link
              href="/professionals"
              className={`text-sm text-gray-700 dark:text-gray-300 hover:text-sky-300 relative group neon-underline${
                isActive("/professionals") ? " active" : ""
              }`}
            >
              Find Professionals
            </Link>

            {/* Services with MegaMenu */}
            <div className="relative">
              <button
                ref={servicesBtnRef}
                onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                className={`text-gray-900 dark:text-white hover:text-sky-300 neon-underline hover:bg-accent px-4 py-2 rounded transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 flex items-center gap-1${
                  pathname.startsWith("/services") ? " active" : ""
                }`}
              >
                Services <ChevronDown className="ml-2 h-4 w-4" />
              </button>
              <MegaMenu open={megaMenuOpen} onClose={() => setMegaMenuOpen(false)} />
            </div>

            <Link
              href="/about"
              className={`text-sm text-gray-700 dark:text-gray-300 hover:text-sky-300 relative group neon-underline${
                isActive("/about") ? " active" : ""
              }`}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className={`text-sm text-gray-700 dark:text-gray-300 hover:text-sky-300 relative group neon-underline${
                isActive("/contact") ? " active" : ""
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile navigation */}
          {isMobileMenuOpen && (
            <div className="fixed inset-0 bg-white dark:bg-slate-900 z-40 flex items-center justify-center md:hidden">
              <div className="flex flex-col items-center gap-6">
                <Link
                  href="/"
                  className="text-lg text-gray-900 dark:text-white relative group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>

                <Link
                  href="/professionals"
                  className="text-lg text-gray-900 dark:text-white relative group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Find Professionals
                </Link>

                {/* Mobile Services Dropdown */}
                <div className="py-2">
                  <div className="text-gray-900 dark:text-white font-medium mb-2">Services</div>
                  <div className="pl-4 space-y-2">
                    {services.map((service) => (
                      <div key={service.category} className="space-y-1">
                        <div className="text-sky-300">
                          <span className="mr-2">{service.icon}</span>
                          {service.category}
                        </div>
                        <div className="pl-6 space-y-1">
                          {service.items.map((item) => (
                            <Link
                              key={item}
                              href={`/services/${item.toLowerCase().replace(/\s+/g, "-")}`}
                              className="block py-1 text-gray-700 dark:text-white/80 hover:text-sky-300"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {item}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="/about"
                  className="text-lg text-gray-900 dark:text-white relative group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className="text-lg text-gray-900 dark:text-white relative group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          )}

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            {/* Login Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="bg-white/10 border-gray-200 dark:border-white/20 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-white/100"
                >
                  Login <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white dark:bg-slate-900 border-gray-200 dark:border-gray-800">
                <DropdownMenuItem asChild>
                  <Link href="/auth/login?role=client" className="text-gray-900 dark:text-white">
                    Client Login
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/auth/login?role=professional" className="text-gray-900 dark:text-white">
                    Professional Login
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button className="bg-sky-700 text-white hover:bg-sky-600 dark:bg-sky-700 dark:text-white dark:hover:bg-sky-600">
              <Link href="/auth/signup">Sign Up</Link>
            </Button>
          </div>
        </nav>
      </header>
    </>
  )
}
