"use client"

import { useState } from "react"
import { LogOut } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
// Import the correctly named function
import { signOut } from "@/app/logout/actions"

export const LogoutButton = () => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogout = async () => {
    setIsLoading(true)
    try {
      await signOut()
      // Handle redirect purely on the client
      router.push("/login")
      router.refresh()
    } catch (error) {
      console.error("Logout failed:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      variant="ghost"
      className="w-full justify-start gap-2 text-muted-foreground hover:text-foreground"
      onClick={handleLogout}
      disabled={isLoading}
    >
      <LogOut className="h-4 w-4" />
      <span>{isLoading ? "Logging out..." : "Log out"}</span>
    </Button>
  )
}