import React from "react";
import { useLocation } from "react-router";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useNavigate } from "react-router";

const BookTour = () => {
    const navigate = useNavigate();
  const location = useLocation();
  const { name, price } = location.state || {};

  return (
    <div className="min-h-screen bg-background pt-28 pb-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">
        Book Your Tour
      </h1>

      <Card className="max-w-2xl mx-auto shadow-lg p-6 rounded-2xl">
        <CardHeader>
          <h2 className="text-xl font-semibold">Complete Your Booking</h2>
          <p className="text-sm text-muted-foreground">
            Please fill out your details to confirm your reservation.
          </p>
        </CardHeader>

        <form>
          <CardContent className="space-y-6">

            {/* Full Name */}
            <div className="space-y-2">
              <Label>Your Name</Label>
              <Input placeholder="Enter your full name" />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label>Phone Number</Label>
              <Input placeholder="+92xxxxxxxxxx" type="tel" />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label>Email Address</Label>
              <Input placeholder="Enter your email" type="email" />
            </div>

            {/* Selected Tour */}
            <div className="space-y-2">
              <Label>Selected Tour</Label>
              <Input value={name || "No tour selected"} disabled />
            </div>

            {/* Expense */}
            <div className="space-y-2">
              <Label>Expense (Per Solo)</Label>
              <Input value={price || "N/A"} disabled />
            </div>

            {/* Preferred Date */}
            <div className="space-y-2">
              <Label>Preferred Date</Label>
              <Input type="date" />
            </div>

          </CardContent>

          <CardFooter>
            <Button onClick={() => navigate("/")} className="w-full bg-green-600 hover:bg-green-700 text-white">
              Book Now
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default BookTour;
