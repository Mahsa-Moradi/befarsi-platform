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

      {/* Comprehensive Footer */}
      <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Logo and Country Selector */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <img src="/placeholder.svg?height=32&width=32" alt="BeFarsi Logo" className="w-8 h-8" />
                <span className="font-bold text-xl text-gray-900 dark:text-white">BeFarsi</span>
              </div>

              {/* Country Selector */}
              <div className="mb-6">
                <select className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 text-sm text-gray-900 dark:text-white">
                  <option value="be">🇧🇪 Belgium</option>
                  <option value="nl">🇳🇱 Netherlands</option>
                  <option value="fr">🇫🇷 France</option>
                </select>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400">© 2025 BeFarsi Inc.</p>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">COMPANY</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-sky-500">
                    About BeFarsi
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-sm text-gray-600 dark:text-gray-400 hover:text-sky-500">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-sm text-gray-600 dark:text-gray-400 hover:text-sky-500">
                    Privacy & Notice
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm text-gray-600 dark:text-gray-400 hover:text-sky-500">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-sm text-gray-600 dark:text-gray-400 hover:text-sky-500">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="/mobile" className="text-sm text-gray-600 dark:text-gray-400 hover:text-sky-500">
                    Mobile Apps
                  </Link>
                </li>
                <li>
                  <Link href="/copyright" className="text-sm text-gray-600 dark:text-gray-400 hover:text-sky-500">
                    Copyright & Trademark
                  </Link>
                </li>
              </ul>
            </div>

            {/* Business Services */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">BUSINESS SERVICES</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/professionals" className="text-sm text-gray-600 dark:text-gray-400 hover:text-sky-500">
                    For Professionals
                  </Link>
                </li>
                <li>
                  <Link href="/pro-vs-basic" className="text-sm text-gray-600 dark:text-gray-400 hover:text-sky-500">
                    BeFarsi vs. BeFarsi Pro
                  </Link>
                </li>
                <li>
                  <Link href="/pro-features" className="text-sm text-gray-600 dark:text-gray-400 hover:text-sky-500">
                    BeFarsi Pro Features
                  </Link>
                </li>
                <li>
                  <Link href="/advertising" className="text-sm text-gray-600 dark:text-gray-400 hover:text-sky-500">
                    BeFarsi Pro Advertising
                  </Link>
                </li>
                <li>
                  <Link href="/business-tools" className="text-sm text-gray-600 dark:text-gray-400 hover:text-sky-500">
                    Business Management Tools
                  </Link>
                </li>
                <li>
                  <Link href="/brands" className="text-sm text-gray-600 dark:text-gray-400 hover:text-sky-500">
                    For Brands
                  </Link>
                </li>
                <li>
                  <Link href="/trade-program" className="text-sm text-gray-600 dark:text-gray-400 hover:text-sky-500">
                    Trade Program
                  </Link>
                </li>
                <li>
                  <Link href="/marketing-tools" className="text-sm text-gray-600 dark:text-gray-400 hover:text-sky-500">
                    Marketing Tools
                  </Link>
                </li>
              </ul>
            </div>

            {/* Get Help */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">GET HELP</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/orders" className="text-sm text-gray-600 dark:text-gray-400 hover:text-sky-500">
                    Your Orders
                  </Link>
                </li>
                <li>
                  <Link href="/booking" className="text-sm text-gray-600 dark:text-gray-400 hover:text-sky-500">
                    Booking & Scheduling
                  </Link>
                </li>
                <li>
                  <Link href="/payment" className="text-sm text-gray-600 dark:text-gray-400 hover:text-sky-500">
                    Payment Policy
                  </Link>
                </li>
                <li>
                  <Link href="/belgium" className="text-sm text-gray-600 dark:text-gray-400 hover:text-sky-500">
                    BeFarsi Belgium
                  </Link>
                </li>
                <li>
                  <Link href="/reviews" className="text-sm text-gray-600 dark:text-gray-400 hover:text-sky-500">
                    Review Professionals
                  </Link>
                </li>
                <li>
                  <Link href="/suggestions" className="text-sm text-gray-600 dark:text-gray-400 hover:text-sky-500">
                    Suggested Professionals
                  </Link>
                </li>
                <li>
                  <Link href="/accessibility" className="text-sm text-gray-600 dark:text-gray-400 hover:text-sky-500">
                    Accessibility
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-sm text-gray-600 dark:text-gray-400 hover:text-sky-500">
                    BeFarsi Support
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-sky-500">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/signin" className="text-sm text-gray-600 dark:text-gray-400 hover:text-sky-500">
                    Sign In
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect With Us */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">CONNECT WITH US</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/blog"
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-sky-500"
                  >
                    <div className="w-5 h-5 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                      <span className="text-xs">📝</span>
                    </div>
                    BeFarsi Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://twitter.com/befarsi"
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-sky-500"
                  >
                    <div className="w-5 h-5 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                      <span className="text-xs">🐦</span>
                    </div>
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://facebook.com/befarsi"
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-sky-500"
                  >
                    <div className="w-5 h-5 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                      <span className="text-xs">📘</span>
                    </div>
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://youtube.com/befarsi"
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-sky-500"
                  >
                    <div className="w-5 h-5 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                      <span className="text-xs">📺</span>
                    </div>
                    YouTube
                  </Link>
                </li>
                <li>
                  <Link
                    href="/rss"
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-sky-500"
                  >
                    <div className="w-5 h-5 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                      <span className="text-xs">📡</span>
                    </div>
                    RSS
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Border */}
          <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
                Find Trusted Professionals in Belgium • Connect with Verified Service Providers
              </p>
              <div className="flex items-center gap-4">
                <Link href="/terms" className="text-sm text-gray-600 dark:text-gray-400 hover:text-sky-500">
                  Terms
                </Link>
                <Link href="/privacy" className="text-sm text-gray-600 dark:text-gray-400 hover:text-sky-500">
                  Privacy
                </Link>
                <Link href="/cookies" className="text-sm text-gray-600 dark:text-gray-400 hover:text-sky-500">
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

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
