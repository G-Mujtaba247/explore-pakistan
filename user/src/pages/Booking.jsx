import React, { useState, useEffect } from "react";
import axios from "axios";
import WebLayout from "../layout/WebLayout";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TravelDeals from "../components/TravelDeals";
import { useNavigate } from "react-router";


const Booking = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/v1/tours", {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (res.data.status) {
          setTours(res.data.tours);
        }
      } catch (error) {
        console.error("Failed to fetch tours:", error);
      }
    };
    fetchTours();
  }, []);

  const navigate = useNavigate();

  return (
    <WebLayout>
      <div className="min-h-screen bg-background text-foreground pb-20 pl-4 pr-4">

        {/* Page Heading */}
        <section className="text-center pt-28 pb-14 px-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Book Your Adventure
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our carefully selected tours across Pakistan.
          </p>
        </section>

        {/* Tours Grid */}
        <div className="container mx-auto px-6 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {tours.map((tour, index) => (
            <Card key={index} className="rounded-xl shadow-lg hover:shadow-xl transition overflow-hidden p-0 pb-6 m-0">

              {/* Card Image */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={tour.image ? `http://localhost:5000/uploads/${tour.image}` : "https://placehold.co/600x400"}
                  alt={tour.title}
                  className="w-full h-full object-cover rounded-t-xl p-0 m-0"
                />
              </div>

              {/* Card Content */}
              <CardHeader>
                <h2 className="text-xl font-semibold">{tour.title}</h2>
              </CardHeader>

              <CardContent className="space-y-3">
                <p className="text-muted-foreground text-sm line-clamp-3">{tour.description}</p>
                <p className="text-green-600 text-sm font-semibold">{tour.price}</p>
              </CardContent>

              {/* Button */}
              <CardFooter>
                <Button onClick={() => navigate("/booktour", {
                  state: {
                    id: tour._id,
                    title: tour.title,
                    price: tour.price
                  }
                })} className="w-full bg-green-600 hover:bg-green-700">Book Now</Button>
              </CardFooter>

            </Card>
          ))}
        </div>
        <TravelDeals />
      </div>

    </WebLayout>
  );
};

export default Booking;
