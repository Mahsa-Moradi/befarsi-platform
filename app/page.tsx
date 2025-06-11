"use client"

import NavBar from "@/components/nav-bar"
import FloatingShapes from "@/components/floating-shapes"
import HeroSection from "@/components/hero-section"
import { MessageCircle } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden text-white bg-white dark:bg-[rgb(19,20,41)] transition-colors duration-300">
      <FloatingShapes />

      <div className="container mx-auto px-4">
        <NavBar />
      </div>

      <HeroSection />

      {/* Services Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Popular Services in Belgium
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Home Services */}
          <Link href="/services/home-renovation">
            <Card className="bg-white/10 backdrop-blur-sm border-none dark:bg-white/10 hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <CardHeader>
                <CardTitle className="text-sky-300">Home Renovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  Kitchen, bathroom, and complete home renovation services by certified professionals.
                </p>
              </CardContent>
            </Card>
          </Link>

          {/* Cleaning */}
          <Link href="/services/cleaning">
            <Card className="bg-white/10 backdrop-blur-sm border-none dark:bg-white/10 hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <CardHeader>
                <CardTitle className="text-sky-300">Cleaning & Organization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  Professional house cleaning, deep cleaning, and organization services.
                </p>
              </CardContent>
            </Card>
          </Link>

          {/* Plumbing */}
          <Link href="/services/plumbing">
            <Card className="bg-white/10 backdrop-blur-sm border-none dark:bg-white/10 hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <CardHeader>
                <CardTitle className="text-sky-300">Plumbing Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  Emergency plumbing, installation, and maintenance by licensed plumbers.
                </p>
              </CardContent>
            </Card>
          </Link>

          {/* Electrical */}
          <Link href="/services/electrical">
            <Card className="bg-white/10 backdrop-blur-sm border-none dark:bg-white/10 hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <CardHeader>
                <CardTitle className="text-sky-300">Electrical Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  Electrical installation, repair, and safety inspections by certified electricians.
                </p>
              </CardContent>
            </Card>
          </Link>

          {/* Gardening */}
          <Link href="/services/gardening">
            <Card className="bg-white/10 backdrop-blur-sm border-none dark:bg-white/10 hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <CardHeader>
                <CardTitle className="text-sky-300">Garden & Landscaping</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  Garden design, maintenance, and landscaping services for your outdoor space.
                </p>
              </CardContent>
            </Card>
          </Link>

          {/* Legal */}
          <Link href="/services/legal">
            <Card className="bg-white/10 backdrop-blur-sm border-none dark:bg-white/10 hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <CardHeader>
                <CardTitle className="text-sky-300">Legal Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  Legal consultation, contracts, and representation by qualified lawyers.
                </p>
              </CardContent>
            </Card>
          </Link>

          {/* Photography */}
          <Link href="/services/photography">
            <Card className="bg-white/10 backdrop-blur-sm border-none dark:bg-white/10 hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <CardHeader>
                <CardTitle className="text-sky-300">Photography</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  Professional photography for events, portraits, and commercial projects.
                </p>
              </CardContent>
            </Card>
          </Link>

          {/* More Services */}
          <Link href="/services">
            <Card className="bg-white/10 backdrop-blur-sm border-none dark:bg-white/10 hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <CardHeader>
                <CardTitle className="text-sky-300">View All Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  Discover more professional services available in your area.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-100 dark:bg-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">About BeFarsi</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              BeFarsi connects you with verified professional service providers across Belgium. Whether you need home
              services, legal advice, or creative professionals, we help you find trusted experts in your area with
              transparent pricing and genuine reviews.
            </p>
            <div className="grid gap-6 md:grid-cols-3 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-sky-500 mb-2">500+</div>
                <p className="text-gray-600 dark:text-gray-400">Verified Professionals</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sky-500 mb-2">50+</div>
                <p className="text-gray-600 dark:text-gray-400">Service Categories</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sky-500 mb-2">1000+</div>
                <p className="text-gray-600 dark:text-gray-400">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">How It Works</h2>
        <div className="grid gap-8 md:grid-cols-4">
          <div className="text-center">
            <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Search</h3>
            <p className="text-gray-700 dark:text-gray-300">Find professionals by service type and location</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Compare</h3>
            <p className="text-gray-700 dark:text-gray-300">Review profiles, ratings, and pricing</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Book</h3>
            <p className="text-gray-700 dark:text-gray-300">Schedule your service with available professionals</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">4</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Review</h3>
            <p className="text-gray-700 dark:text-gray-300">Rate your experience and help others</p>
          </div>
        </div>
      </section>

      {/* CTA Section for Professionals */}
      <section className="py-16 bg-gradient-to-r from-sky-500 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Are You a Professional?</h2>
          <p className="text-xl mb-8 text-sky-100 max-w-2xl mx-auto">
            Join thousands of professionals who grow their business with BeFarsi. Get more clients, manage your
            schedule, and build your reputation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register/professional"
              className="bg-white text-sky-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Join as Professional
            </Link>
            <Link
              href="/dashboard"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-sky-600 transition-colors"
            >
              Professional Login
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100 dark:bg-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Get in Touch</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-white/10 border border-gray-200 dark:border-white/20 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-sky-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-white/10 border border-gray-200 dark:border-white/20 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-sky-500"
                />
              </div>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-white/10 border border-gray-200 dark:border-white/20 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-sky-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-sky-500 text-white px-6 py-3 rounded-lg hover:bg-sky-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Ticker/Marquee at bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-indigo-900/50 backdrop-blur-sm py-3 overflow-hidden z-40">
        <div className="animate-marquee whitespace-nowrap">
          <span className="mx-4 text-gray-200">
            Find Trusted Professionals in Belgium • Connect with Verified Service Providers •
          </span>
          <span className="mx-4 text-gray-200">BeFarsi: Your Gateway to Professional Services Since 2024 •</span>
          <span className="mx-4 text-gray-200">Quality Services, Transparent Pricing, Genuine Reviews •</span>
        </div>
      </div>

      {/* WhatsApp button */}
      <Link
        href="#contact"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg z-50"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </Link>
    </main>
  )
}
