import {
    Activity,
    CreditCard,
    DollarSign,
    Users,
} from "lucide-react"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { tours } from "@/data/tours"
import { bookings } from "@/data/bookings"


export default function Dashboard() {
    // Calculate stats
    const totalRevenue = bookings.reduce((acc, curr) => acc + (curr.status !== 'Cancelled' ? curr.amount : 0), 0);
    const activeTours = tours.filter(t => t.status === 'Active').length;
    const pendingBookings = bookings.filter(b => b.status === 'Pending').length;
    const totalBookings = bookings.length;

    // Get recent bookings (last 5)
    const recentBookings = [...bookings].reverse().slice(0, 5);

    // Calculate popular destinations (simple count based on tour name in bookings)
    const destinationCounts = bookings.reduce((acc, curr) => {
        acc[curr.tour] = (acc[curr.tour] || 0) + 1;
        return acc;
    }, {});

    // Convert to array and sort
    const popularDestinations = Object.entries(destinationCounts)
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);

    return (
        <>
            <div className="flex items-center">
                <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Total Revenue
                        </CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">PKR {totalRevenue.toLocaleString()}</div>
                        <p className="text-xs text-muted-foreground">
                            Based on confirmed bookings
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Bookings
                        </CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+{totalBookings}</div>
                        <p className="text-xs text-muted-foreground">
                            Total bookings received
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Tours Active
                        </CardTitle>
                        <Activity className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+{activeTours}</div>
                        <p className="text-xs text-muted-foreground">
                            Across all regions
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Pending Requests
                        </CardTitle>
                        <CreditCard className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+{pendingBookings}</div>
                        <p className="text-xs text-muted-foreground">
                            Requires attention
                        </p>
                    </CardContent>
                </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Recent Bookings</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-8">
                            {recentBookings.map((booking, i) => (
                                <div key={i} className="flex items-center">
                                    <div className="ml-4 space-y-1">
                                        <p className="text-sm font-medium leading-none">
                                            {booking.user}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            {booking.tour}
                                        </p>
                                    </div>
                                    <div className="ml-auto font-medium">PKR {booking.amount.toLocaleString()}</div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Popular Destinations</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-8">
                            {popularDestinations.map((dest, i) => (
                                <div key={i} className="flex items-center">
                                    <div className="ml-4 space-y-1">
                                        <p className="text-sm font-medium leading-none">
                                            {dest.name}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            {dest.count} Bookings
                                        </p>
                                    </div>
                                    <div className="ml-auto font-medium">Top {i + 1}</div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}
