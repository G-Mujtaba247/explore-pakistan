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
import { bookings } from "@/data/bookings"

export default function BookingsPage() {
    // Filter bookings based on status
    const getFilteredBookings = (status) => {
        if (status === 'all') return bookings;
        if (status === 'active') return bookings.filter(b => b.status === 'Confirmed' || b.status === 'Pending');
        if (status === 'completed') return bookings.filter(b => b.status === 'Completed');
        if (status === 'cancelled') return bookings.filter(b => b.status === 'Cancelled');
        return bookings;
    }

    const renderTable = (data) => (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Tour</TableHead>
                    <TableHead className="hidden md:table-cell">Date</TableHead>
                    <TableHead className="hidden md:table-cell">Status</TableHead>
                    <TableHead className="hidden md:table-cell">Amount</TableHead>
                    <TableHead><span className="sr-only">Actions</span></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((booking) => (
                    <TableRow key={booking.id}>
                        <TableCell className="font-medium text-xs">{booking.id}</TableCell>
                        <TableCell className="font-medium">{booking.user}</TableCell>
                        <TableCell>{booking.tour}</TableCell>
                        <TableCell className="hidden md:table-cell">{booking.date}</TableCell>
                        <TableCell className="hidden md:table-cell">
                            <Badge variant={
                                booking.status === 'Confirmed' ? 'default' :
                                    booking.status === 'Pending' ? 'secondary' :
                                        booking.status === 'Cancelled' ? 'destructive' : 'outline'
                            }>
                                {booking.status}
                            </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">PKR {booking.amount.toLocaleString()}</TableCell>
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
                                    <DropdownMenuItem>Edit Status</DropdownMenuItem>
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
                    <TabsTrigger value="completed">Completed</TabsTrigger>
                    <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
                </TabsList>
            </div>
            {['all', 'active', 'completed', 'cancelled'].map((tab) => (
                <TabsContent key={tab} value={tab}>
                    <Card>
                        <CardHeader>
                            <CardTitle>Bookings</CardTitle>
                            <CardDescription>
                                Manage your bookings and view their status.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            {renderTable(getFilteredBookings(tab))}
                        </CardContent>
                        <CardFooter>
                            <div className="text-xs text-muted-foreground">
                                Showing <strong>{getFilteredBookings(tab).length}</strong> bookings
                            </div>
                        </CardFooter>
                    </Card>
                </TabsContent>
            ))}
        </Tabs>
    )
}
