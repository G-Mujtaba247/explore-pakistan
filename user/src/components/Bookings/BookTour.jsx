import React from "react";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";


const BookTour = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id, title, price } = location.state || {}; // Expecting 'title' and 'id' from Booking.jsx

  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    email: "",
    date: ""
  });
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    // Pre-fill user data
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setFormData(prev => ({ ...prev, name: user.name, email: user.email }));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");

    if (!user || !token) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    try {
      const payload = {
        userId: user._id,
        tourId: id,
        tourName: title,
        price: price, // sending price string for now
        date: formData.date
        // phone is not in my model yet, but can be added or stored in notes
      };

      const res = await axios.post("http://localhost:5000/api/v1/booking", payload, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (res.data.success) {
        alert("Booking submitted successfully!");
        navigate("/booking");
      } else {
        alert("Booking failed: " + res.data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting booking");
    } finally {
      setLoading(false);
    }
  };

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

        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">

            {/* Full Name */}
            <div className="space-y-2">
              <Label>Your Name</Label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label>Phone Number</Label>
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+92xxxxxxxxxx"
                type="tel"
                required
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label>Email Address</Label>
              <Input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                type="email"
              />
            </div>

            {/* Selected Tour */}
            <div className="space-y-2">
              <Label>Selected Tour</Label>
              <Input value={title || "No tour selected"} disabled />
            </div>

            {/* Expense */}
            <div className="space-y-2">
              <Label>Expense (Per Solo)</Label>
              <Input value={price || "N/A"} disabled />
            </div>

            {/* Preferred Date */}
            <div className="space-y-2">
              <Label>Preferred Date</Label>
              <Input
                name="date"
                value={formData.date}
                onChange={handleChange}
                type="date"
                required
              />
            </div>

          </CardContent>

          <CardFooter>
            <Button type="submit" disabled={loading} className="w-full bg-green-600 hover:bg-green-700 text-white">
              {loading ? "Booking..." : "Book Now"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default BookTour;
