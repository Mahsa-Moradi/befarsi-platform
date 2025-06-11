"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"

const megaMenuData = [
  {
    title: "Technical & Repair Services",
    items: ["Electrician", "Plumber", "Home Appliance Repair", "Mobile Mechanic", "Window/Door Installer"],
  },
  {
    title: "Home Services",
    items: ["House Cleaning", "Gardening & Landscaping", "Pet Care", "Babysitter / Elderly Care"],
  },
  {
    title: "Beauty & Wellness",
    items: ["Hairdresser", "Nail Technician", "Masseur", "Skin & Beauty Services", "Personal Trainer"],
  },
  {
    title: "Business & Professionals",
    items: ["Accountant / Financial Advisor", "Lawyer", "Translator", "Graphic / Web Designer", "Career Consultant"],
  },
  {
    title: "Additions & Installations",
    items: [
      "TV Wall Mount Install",
      "Window Installation",
      "Flooring Installation",
      "Appliance Installers",
      "Fence Installation",
    ],
  },
  {
    title: "Education & Training",
    items: ["Private Tutor", "Language Classes", "Music Lessons", "Driving Instructor"],
  },
  {
    title: "Transport & Moving",
    items: ["Moving Services", "Private Driver", "Van / Truck Rental"],
  },
  {
    title: "Construction & Large Projects",
    items: ["Construction Worker", "Tiler / Painter", "Mason / Plasterer", "Architect / Interior Designer"],
  },
]

export function MegaMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null)

  // Close on click outside or ESC
  useEffect(() => {
    if (!open) return
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose()
      }
    }
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("mousedown", handleClick)
    document.addEventListener("keydown", handleEsc)
    return () => {
      document.removeEventListener("mousedown", handleClick)
      document.removeEventListener("keydown", handleEsc)
    }
  }, [open, onClose])

  // Animation classes
  const panelClass = `transition-all duration-300 z-50 absolute left-1/2 -translate-x-1/2 mt-2 w-[95vw] max-w-6xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 shadow-xl rounded-xl p-6
    ${open ? "opacity-100 pointer-events-auto scale-100 translate-y-0" : "opacity-0 pointer-events-none scale-95 -translate-y-4"}
  `

  return (
    <div ref={ref} className={panelClass} style={{ top: "100%" }} aria-hidden={!open} tabIndex={-1}>
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
        {megaMenuData.map((col) => (
          <div key={col.title}>
            <div className="font-semibold mb-2 text-gray-900 dark:text-white">{col.title}</div>
            <ul className="space-y-1">
              {col.items.map((item) => (
                <li key={item}>
                  <Link
                    href={`/services/${item.toLowerCase().replace(/\s+/g, "-").replace(/[/&]/g, "")}`}
                    className="block px-1 py-1 rounded text-gray-700 dark:text-gray-300 hover:bg-sky-100 dark:hover:bg-sky-800 transition-colors"
                    onClick={onClose}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* Mobile: vertical accordion */}
      <div className="md:hidden">
        {megaMenuData.map((col) => (
          <details key={col.title} className="mb-2">
            <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer py-2 px-2 rounded hover:bg-sky-100 dark:hover:bg-sky-800">
              {col.title}
            </summary>
            <ul className="pl-4 pb-2">
              {col.items.map((item) => (
                <li key={item}>
                  <Link
                    href={`/services/${item.toLowerCase().replace(/\s+/g, "-").replace(/[/&]/g, "")}`}
                    className="block px-1 py-1 rounded text-gray-700 dark:text-gray-300 hover:bg-sky-100 dark:hover:bg-sky-800 transition-colors"
                    onClick={onClose}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        ))}
      </div>
    </div>
  )
}
