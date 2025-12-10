import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
    return (
        <div className="space-y-6 max-w-4xl">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Contact Page</h2>
                <p className="text-muted-foreground">Manage your contact information and location.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                    <CardDescription>Update the contact details displayed on your website.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input id="phone" defaultValue="+1 (555) 123-4567" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" defaultValue="support@repaircms.com" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="address">Physical Address</Label>
                        <Textarea id="address" defaultValue="123 Repair Street, Fix City, FC 12345" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="map">Google Maps Embed URL</Label>
                        <Input id="map" placeholder="https://www.google.com/maps/embed?..." />
                        <p className="text-xs text-muted-foreground">Paste the 'src' attribute from the Google Maps embed code.</p>
                    </div>

                    <Button>Save Contact Info</Button>
                </CardContent>
            </Card>
        </div>
    );
}
