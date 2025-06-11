"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full relative"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun
        className={`sun-color h-[1.2rem] w-[1.2rem] transition-all duration-300 ${
          theme === "dark" ? "scale-0 rotate-90" : "scale-100 rotate-0"
        }`}
      />
      <Moon
        className={`absolute h-[1.2rem] w-[1.2rem] transition-all duration-300 ${
          theme === "dark" ? "scale-100 rotate-0" : "scale-0 -rotate-90"
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
