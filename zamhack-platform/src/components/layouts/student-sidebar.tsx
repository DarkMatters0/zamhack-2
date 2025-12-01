"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Search,
  Briefcase,
  Users,
  MessageSquare,
  User,
  Settings,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { LogoutButton } from "@/components/logout-button"

const studentNavItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/challenges", label: "Browse Challenges", icon: Search },
  { href: "/my-challenges", label: "My Challenges", icon: Briefcase },
  { href: "/team", label: "My Team", icon: Users },
  { href: "/messages", label: "Messages", icon: MessageSquare },
  { href: "/profile", label: "Profile", icon: User },
  { href: "/settings", label: "Settings", icon: Settings },
]

export const StudentSidebar = () => {
  const pathname = usePathname()

  return (
    <div className="flex h-full flex-col border-r bg-sidebar">
      <div className="flex h-16 items-center border-b px-6">
        <h2 className="text-lg font-semibold">Student Portal</h2>
      </div>
      <nav className="flex-1 space-y-1 p-4">
        {studentNavItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </Link>
          )
        })}
      </nav>
      <div className="border-t p-4">
        <LogoutButton />
      </div>
    </div>
  )
}


