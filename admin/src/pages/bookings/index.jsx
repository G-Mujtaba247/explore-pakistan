import { useEffect, useState } from "react";
import axios from "axios";
import {
    MoreHorizontal,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function BookingsPage() {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/v1/bookings");
                if (res.data.success) {
                    setBookings(res.data.data);
                }
            } catch (error) {
                console.error("Failed to fetch bookings");
            }
        };
        fetchBookings();
    }, []);

    // Filter bookings based on status
    const getFilteredBookings = (status) => {
        if (status === 'all') return bookings;
        return bookings.filter(b => b.status.toLowerCase() === status.toLowerCase());
    }

    const renderTable = (data) => (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Tour</TableHead>
                    <TableHead className="hidden md:table-cell">Date</TableHead>
                    <TableHead className="hidden md:table-cell">Status</TableHead>
                    <TableHead className="hidden md:table-cell">Amount</TableHead>
                    <TableHead><span className="sr-only">Actions</span></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((booking) => (
                    <TableRow key={booking._id}>
                        <TableCell className="font-medium">
                            {booking.userId?.name || booking.userId}
                            <div className="text-xs text-muted-foreground">{booking.userId?.email}</div>
                        </TableCell>
                        <TableCell>{booking.tourName}</TableCell>
                        <TableCell className="hidden md:table-cell">{new Date(booking.date).toLocaleDateString()}</TableCell>
                        <TableCell className="hidden md:table-cell">
                            <Badge variant={
                                booking.status === 'confirmed' ? 'default' :
                                    booking.status === 'pending' ? 'secondary' :
                                        booking.status === 'cancelled' ? 'destructive' : 'outline'
                            }>
                                {booking.status}
                            </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">{booking.price}</TableCell>
                        <TableCell>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button aria-haspopup="true" size="icon" variant="ghost">
                                        <MoreHorizontal className="h-4 w-4" />
                                        <span className="sr-only">Toggle menu</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                    <DropdownMenuItem>View Details</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );

    return (
        <Tabs defaultValue="all">
            <div className="flex items-center">
                <TabsList>
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="active">Active</TabsTrigger>
                    <TabsTrigger value="confirmed">Confirmed</TabsTrigger>
                    <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
                </TabsList>
            </div>
            {['all', 'active', 'confirmed', 'cancelled'].map((tab) => (
                <TabsContent key={tab} value={tab}>
                    <Card>
                        <CardHeader>
                            <CardTitle>Bookings</CardTitle>
                            <CardDescription>
                                Manage your bookings and view their status.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            {renderTable(getFilteredBookings(tab === 'active' ? 'pending' : tab))}
                        </CardContent>
                        <CardFooter>
                            <div className="text-xs text-muted-foreground">
                                Showing <strong>{getFilteredBookings(tab === 'active' ? 'pending' : tab).length}</strong> bookings
                            </div>
                        </CardFooter>
                    </Card>
                </TabsContent>
            ))}
        </Tabs>
    )
}
