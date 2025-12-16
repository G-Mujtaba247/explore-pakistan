import React, { useState, useEffect } from 'react';
import { Link, useLocation, Outlet, useNavigate } from 'react-router-dom';
import {
    LayoutDashboard,
    Home,
    Map,
    Calendar,
    Users,
    Menu,
    LogOut,
    LayoutTemplate,
    Settings
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Tours', path: '/dashboard/tours', icon: Map },
    { name: 'Bookings', path: '/dashboard/bookings', icon: Calendar },
    { name: 'Users', path: '/dashboard/users', icon: Users },
    { name: 'Webpages', path: '/dashboard/cms', icon: LayoutTemplate },
    { name: 'Settings', path: '/dashboard/settings', icon: Settings },
];


const Sidebar = ({ className, onClose, user, onLogout }) => {
    const location = useLocation();

    return (
        <div className={`flex flex-col h-full bg-card border-r ${className}`}>
            <div className="p-6 border-b">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                    Explore Admin
                </h1>
            </div>
            <nav className="flex-1 p-4 space-y-2">
                {navItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            onClick={onClose}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group
                ${isActive
                                    ? 'bg-primary text-primary-foreground shadow-md'
                                    : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                                }`}
                        >
                            <item.icon className={`w-5 h-5 ${isActive ? 'text-primary-foreground' : 'text-muted-foreground group-hover:text-foreground'}`} />
                            <span className="font-medium">{item.name}</span>
                        </Link>
                    );
                })}
            </nav>
            <div className="p-4 border-t">
                <div className="flex items-center gap-3 p-2 rounded-lg bg-muted/50">
                    <Avatar>
                        <AvatarImage src="" />
                        <AvatarFallback>{user?.name?.charAt(0) || "A"}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{user?.name || "Admin"}</p>
                        <p className="text-xs text-muted-foreground truncate">{user?.email || "admin@example.com"}</p>
                    </div>
                    <Button variant="ghost" size="icon" onClick={onLogout} title="Logout">
                        <LogOut className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default function AdminLayout() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const storedUser = localStorage.getItem("user");

        if (!token) {
            navigate("/login");
        } else if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <div className="min-h-screen bg-background flex">
            {/* Desktop Sidebar */}
            <aside className="hidden md:block w-64 fixed inset-y-0 z-50">
                <Sidebar user={user} onLogout={handleLogout} />
            </aside>

            {/* Mobile Sidebar */}
            <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
                <SheetContent side="left" className="p-0 w-64">
                    <Sidebar onClose={() => setIsMobileOpen(false)} user={user} onLogout={handleLogout} />
                </SheetContent>
            </Sheet>

            {/* Main Content */}
            <main className="flex-1 md:ml-64 flex flex-col min-h-screen transition-all duration-300">
                <header className="h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 px-6 flex items-center justify-between md:justify-end">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setIsMobileOpen(true)}
                    >
                        <Menu className="w-5 h-5" />
                    </Button>

                    <div className="flex items-center gap-4">
                        {/* Add header actions here like notifications, search, etc */}
                    </div>
                </header>

                <div className="flex-1 p-6 md:p-8 pt-6 max-w-7xl mx-auto w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}
