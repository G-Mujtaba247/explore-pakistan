import { useEffect, useState } from "react";
import axios from "axios";
import {
    Activity,
    CreditCard,
    DollarSign,
    Users,
    Map
} from "lucide-react"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function Dashboard() {
    const [tours, setTours] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("token");
                const [toursRes, bookingsRes] = await Promise.all([
                    axios.get("http://localhost:5000/api/v1/tours"),
                    axios.get("http://localhost:5000/api/v1/bookings", {
                        headers: { Authorization: `Bearer ${token}` }
                    })
                ]);

                if (toursRes.data.success) {
                    setTours(toursRes.data.data);
                } else if (toursRes.data.tours) {
                    // Fallback if structure varies
                    setTours(toursRes.data.tours);
                }

                if (bookingsRes.data.success) {
                    setBookings(bookingsRes.data.data);
                }
            } catch (error) {
                console.error("Failed to fetch dashboard data", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Calculate stats
    const totalRevenue = bookings.reduce((acc, curr) => {
        // Parse price if it's a string like "2000" or "$2000"
        const price = typeof curr.price === 'string' ? parseFloat(curr.price.replace(/[^0-9.-]+/g, "")) : curr.price;
        return acc + (curr.status !== 'cancelled' ? (price || 0) : 0);
    }, 0);

    const activeTours = tours.length; // Assuming all listed tours are active
    const pendingBookings = bookings.filter(b => b.status === 'pending').length;
    const totalBookings = bookings.length;

    // Get recent bookings (last 5)
    // Assuming backend returns sorted, or we sort by date (descending)
    const recentBookings = [...bookings].reverse().slice(0, 5);

    // Calculate popular destinations
    const destinationCounts = bookings.reduce((acc, curr) => {
        const tourName = curr.tourName || "Unknown Tour";
        acc[tourName] = (acc[tourName] || 0) + 1;
        return acc;
    }, {});

    const popularDestinations = Object.entries(destinationCounts)
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);

    const stats = [
        {
            title: "Total Bookings",
            value: `+${totalBookings}`,
            change: "All time bookings",
            icon: Users,
        },
        {
            title: "Active Tours",
            value: `+${activeTours}`,
            change: "Currently available packages",
            icon: Map,
        },
        {
            title: "Total Revenue",
            value: `PKR ${totalRevenue.toLocaleString()}`,
            change: "Based on confirmed bookings",
            icon: DollarSign,
        },
        {
            title: "Pending Requests",
            value: `+${pendingBookings}`,
            change: "Requires attention",
            icon: Activity,
        },
    ];

    if (loading) {
        return <div className="p-8">Loading dashboard data...</div>;
    }

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                <p className="text-muted-foreground">Overview of Explore Pakistan performance.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                {stat.title}
                            </CardTitle>
                            <stat.icon className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <p className="text-xs text-muted-foreground">
                                {stat.change}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4 hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                        <CardTitle>Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <div className="h-[200px] flex items-center justify-center text-muted-foreground bg-muted/20 rounded-md border border-dashed">
                            Revenue Chart Placeholder
                        </div>
                    </CardContent>
                </Card>
                <Card className="col-span-3 hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                        <CardTitle>Recent Bookings</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-8">
                            {recentBookings.length === 0 ? (
                                <p className="text-sm text-muted-foreground">No bookings found.</p>
                            ) : (
                                recentBookings.map((booking, i) => (
                                    <div key={i} className="flex items-center">
                                        <div className="space-y-1">
                                            <p className="text-sm font-medium leading-none">{booking.tourName}</p>
                                            <p className="text-sm text-muted-foreground">
                                                {booking.userId?.email || "Guest"} - {booking.status}
                                            </p>
                                        </div>
                                        <div className="ml-auto font-medium text-sm text-muted-foreground">
                                            {booking.createdAt ? new Date(booking.createdAt).toLocaleDateString() : 'Just now'}
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Popular Destinations - kept as extra or removed? User said "design same as repairs". Repairs doesn't have this. 
                 I'll keep it but maybe below or remove it to be strictly "same". 
                 The prompt says "design is same... but data is different". 
                 Including extra components might violate "design is same". 
                 But "manage functionality" might imply keeping useful widgets. 
                 I will comment it out or remove it to match the requested design structure exactly. 
                 Repairs has 2 rows: Stats, then Chart+List. 
                 I've done that. */}
        </div>
    )
}
