"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    projectDetails: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    // Reset form or show success message
  }

  return (
    <div className="flex flex-col items-center text-center">
      {/* CTA Button */}
      <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2 rounded mb-6 uppercase text-sm tracking-wider">
        GET STARTED
      </Button>

      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold mb-8 max-w-2xl">Connect with Professional Service Providers</h1>

      {/* Subheading */}
      <h2 className="text-xl mb-8 text-gray-300">Tell us about your project:</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="w-full space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-sm text-gray-300">
              First Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="bg-[#131429] border-[#2a2c42] text-white"
              placeholder="Your first name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-sm text-gray-300">
              Last Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="bg-[#131429] border-[#2a2c42] text-white"
              placeholder="Your last name"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm text-gray-300">
            Email <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-[#131429] border-[#2a2c42] text-white"
            placeholder="your.email@example.com"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="projectDetails" className="text-sm text-gray-300">
            Service needed:
          </Label>
          <Textarea
            id="projectDetails"
            name="projectDetails"
            value={formData.projectDetails}
            onChange={handleChange}
            className="bg-[#131429] border-[#2a2c42] text-white min-h-[120px]"
            placeholder="Describe the service you need..."
          />
        </div>

        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3">
          Find Professionals
        </Button>
      </form>
    </div>
  )
}
