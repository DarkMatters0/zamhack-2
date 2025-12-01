import { AdminSidebar } from "@/components/layouts/admin-sidebar"
import { MobileNav } from "@/components/layouts/mobile-nav"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Desktop Sidebar */}
      <aside className="hidden w-64 flex-shrink-0 md:block">
        <AdminSidebar />
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Navbar */}
        <header className="flex h-16 items-center border-b bg-background px-4 md:px-6">
          <div className="flex items-center gap-4">
            <div className="md:hidden">
              <MobileNav title="Admin Portal">
                <AdminSidebar />
              </MobileNav>
            </div>
            <h1 className="text-lg font-semibold">Admin Portal</h1>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}

