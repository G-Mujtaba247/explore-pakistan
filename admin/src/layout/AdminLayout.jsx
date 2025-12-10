import { Link, Outlet, useLocation } from "react-router-dom"
import {
    Bell,
    CircleUser,
    Home,
    Map,
    Menu,
    Package,
    Calendar,
    Search,
    Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function AdminLayout() {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? "bg-muted text-primary" : "text-muted-foreground hover:text-primary";
    }

    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <div className="hidden border-r bg-muted/40 md:block">
                <div className="flex h-full max-h-screen flex-col gap-2">
                    <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                        <Link to="/dashboard" className="flex items-center gap-2 font-semibold">
                            <Map className="h-6 w-6" />
                            <span className="">Explore Admin</span>
                        </Link>
                        <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                            <Bell className="h-4 w-4" />
                            <span className="sr-only">Toggle notifications</span>
                        </Button>
                    </div>
                    <div className="flex-1">
                        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                            <Link
                                to="/dashboard"
                                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${isActive('/dashboard')}`}
                            >
                                <Home className="h-4 w-4" />
                                Dashboard
                            </Link>
                            <Link
                                to="/dashboard/tours"
                                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${isActive('/dashboard/tours')}`}
                            >
                                <Map className="h-4 w-4" />
                                Tours & Packages
                            </Link>
                            <Link
                                to="/dashboard/bookings"
                                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${isActive('/dashboard/bookings')}`}
                            >
                                <Calendar className="h-4 w-4" />
                                Bookings
                            </Link>
                            <Link
                                to="/dashboard/users"
                                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${isActive('/dashboard/users')}`}
                            >
                                <Users className="h-4 w-4" />
                                Users
                            </Link>
                            <Link
                                to="/dashboard/cms"
                                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${isActive('/dashboard/cms') || isActive('/dashboard/cms/home') ? "bg-muted text-primary" : "text-muted-foreground hover:text-primary"}`}
                            >
                                <Calendar className="h-4 w-4" />
                                Webpages
                            </Link>

                        </nav>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="shrink-0 md:hidden"
                            >
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="flex flex-col">
                            <nav className="grid gap-2 text-lg font-medium">
                                <Link
                                    to="#"
                                    className="flex items-center gap-2 text-lg font-semibold"
                                >
                                    <Map className="h-6 w-6" />
                                    <span className="sr-only">Explore Admin</span>
                                </Link>
                                <Link
                                    to="/dashboard"
                                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                                >
                                    <Home className="h-5 w-5" />
                                    Dashboard
                                </Link>
                                <Link
                                    to="/dashboard/tours"
                                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                                >
                                    <Map className="h-5 w-5" />
                                    Tours
                                </Link>
                                <Link
                                    to="/dashboard/bookings"
                                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                                >
                                    <Calendar className="h-5 w-5" />
                                    Bookings
                                </Link>
                                <Link
                                    to="/dashboard/users"
                                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                                >
                                    <Users className="h-5 w-5" />
                                    Users
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <div className="w-full flex-1">
                        <form>
                            <div className="relative">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="search"
                                    placeholder="Search..."
                                    className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                                />
                            </div>
                        </form>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="secondary" size="icon" className="rounded-full">
                                <CircleUser className="h-5 w-5" />
                                <span className="sr-only">Toggle user menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </header>
                <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
