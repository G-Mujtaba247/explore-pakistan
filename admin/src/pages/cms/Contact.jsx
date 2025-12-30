import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { GET_CONTACT, CREATE_CONTACT, UPDATE_CONTACT } from '@/resources/server-API';
import { toast } from 'sonner';

export default function Contact() {
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        const fetchContactDetails = async () => {
            try {
                const response = await axios.get(GET_CONTACT);
                if (response.data.status === true && response.data.contact.length > 0) {
                    reset(response.data.contact[0]);
                }
            } catch (error) {
                console.log("Error fetching contact details:", error);
                toast.error("Failed to fetch contact details");
            }
        }
        fetchContactDetails();
    }, [reset]);

    const handleSaveContactDetails = async (data) => {
        try {
            if (data._id) {
                // Update existing contact
                const response = await axios.patch(`${UPDATE_CONTACT}/${data._id}`, data);
                if (response.data.status === true) {
                    reset(response.data.updatedContact);
                    toast.success("Contact information updated successfully!");
                } else {
                    toast.error("Failed to update contact information");
                }
            } else {
                // Create new contact
                const response = await axios.post(CREATE_CONTACT, data);
                if (response.data.status === true) {
                    reset(response.data.newContact);
                    toast.success("Contact information created successfully!");
                } else {
                    toast.error("Failed to create contact information");
                }
            }
        } catch (error) {
            console.log("Error: ", error);
            toast.error("An error occurred while saving contact information");
        }
    }

    return (
        <div className="space-y-6 max-w-4xl">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Contact Page</h2>
                <p className="text-muted-foreground">Manage your contact information and location displayed on the website.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                    <CardDescription>Update the contact details displayed on your website's contact page.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <form onSubmit={handleSubmit(handleSaveContactDetails)}>

                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="phone">Phone Number</Label>
                                <Input
                                    {...register("phone")}
                                    id="phone"
                                    placeholder="+92 300 1234567"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <Input
                                    {...register("email")}
                                    id="email"
                                    type="email"
                                    placeholder="info@explorepakistan.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="address">Physical Address</Label>
                            <Textarea
                                {...register("address")}
                                id="address"
                                placeholder="Enter your business address"
                                rows={3}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="map">Google Maps Embed URL (Optional)</Label>
                            <Input
                                {...register("map")}
                                id="map"
                                placeholder="https://www.google.com/maps/embed?..."
                            />
                            <p className="text-xs text-muted-foreground">
                                Paste the 'src' attribute from the Google Maps embed code to display a map on your contact page.
                            </p>
                        </div>

                        <Button type="submit" className="mt-4">Save Contact Information</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
