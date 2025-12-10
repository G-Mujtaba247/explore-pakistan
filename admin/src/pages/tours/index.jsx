import {
    MoreHorizontal,
    Plus,
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
import { tours } from "@/data/tours"
import { Badge } from "@/components/ui/badge"

export default function ToursPage() {
    return (
        <>
            <div className="flex items-center">
                <div className="flex items-center gap-2">
                    <h1 className="text-lg font-semibold md:text-2xl">Tours & Packages</h1>
                </div>
                <Button className="ml-auto" size="sm">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Tour
                </Button>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Tours</CardTitle>
                    <CardDescription>
                        Manage your travel packages and modify their details.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="hidden w-[100px] sm:table-cell">
                                    Image
                                </TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="hidden md:table-cell">Price</TableHead>
                                <TableHead className="hidden md:table-cell">Rating</TableHead>
                                <TableHead>
                                    <span className="sr-only">Actions</span>
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {tours.map((tour) => (
                                <TableRow key={tour.id}>
                                    <TableCell className="hidden sm:table-cell">
                                        <img
                                            alt={tour.title}
                                            className="aspect-square rounded-md object-cover"
                                            height="64"
                                            src={tour.image}
                                            onError={(e) => { e.target.src = "https://placehold.co/600x400?text=No+Image" }}
                                            width="64"
                                        />
                                    </TableCell>
                                    <TableCell className="font-medium">
                                        {tour.title}
                                        {tour.subtitle && <p className="text-xs text-muted-foreground">{tour.subtitle}</p>}
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant={tour.status === 'Active' ? 'default' : 'secondary'}>
                                            {tour.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        {tour.price ? `PKR ${tour.price.toLocaleString()}` : 'N/A'}
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        {tour.rating > 0 ? `${tour.rating} / 5` : 'New'}
                                    </TableCell>
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
                                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                                <DropdownMenuItem>Delete</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
                <CardFooter>
                    <div className="text-xs text-muted-foreground">
                        Showing <strong>1-{tours.length}</strong> of <strong>{tours.length}</strong> tours
                    </div>
                </CardFooter>
            </Card>
        </>
    )
}
