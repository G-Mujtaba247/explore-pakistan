import React from "react";
import WebLayout from "../layout/WebLayout";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TravelDeals from "../components/TravelDeals";


const Booktour = () => {
  const tours = [
  {
    name: "Hunza Valley",
    image: "hunza.jpg",
    description: "Snow-capped peaks, crystal-clear rivers, and breathtaking Karakoram landscapes.",
    price: "PKR 35,000 (solo)"
  },
  {
    name: "Skardu",
    image: "skardu.jpg",
    description: "Explore serene lakes, towering mountains, and the gateway to K2.",
    price: "PKR 42,000 (solo)"
  },
  {
    name: "Swat Valley",
    image: "sawat1.jpg",
    description: "The Switzerland of Pakistan—lush green valleys and peaceful rivers.",
    price: "PKR 28,000 (solo)"
  },
  {
  name: "Islamabad",
  image: "margalla.jpg",
  description: "The serene capital city known for its Margalla Hills, modern architecture, and ambiance.",
  price: "PKR 18,000 (solo)"
},
  {
    name: "Kumrat Valley",
    image: "kumrat.jpg",
    description: "Tall deodar forests, riverside camping, and unforgettable wilderness views.",
    price: "PKR 30,000 (solo)"
  },
  {
  name: "Multan",
  image: "multan1.jpg",
  description: "The city of saints featuring stunning Sufi shrines, handicrafts, and historical landmarks.",
  price: "PKR 20,000 (solo)"
},
  
  {
    name: "Gwadar",
    image: "gwadar.jpeg",
    description: "Golden beaches, blue waters, and serene sunsets on the Arabian coastline.",
    price: "PKR 40,000 (solo)"
  },
{
  name: "Lahore Heritage",
  image: "Lahore.jpg",
  description: "Explore the rich Mughal history, majestic forts, and vibrant culture of Lahore.",
  price: "PKR 22,000 (solo)"
},
];



  return (
    <WebLayout>
      <div className="min-h-screen bg-background text-foreground pb-20 pl-4 pr-4">
        
        {/* Page Heading */}
        <section className="text-center pt-28 pb-18 px-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Book Your Adventure
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our carefully selected tours across Pakistan.
          </p>
        </section>

        {/* Tours Grid */}
        <div className="container mx-auto px-4 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {tours.map((tour, index) => (
            <Card key={index} className="rounded-xl shadow-lg hover:shadow-xl transition overflow-hidden p-0 pb-6 m-0">
              
              {/* Card Image */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.name}
                  className="w-full h-full rounded-t-xl p-0 m-0"
                />
              </div>

              {/* Card Content */}
              <CardHeader>
                <h2 className="text-xl font-semibold">{tour.name}</h2>
              </CardHeader>

              <CardContent className="space-y-3">
                <p className="text-muted-foreground text-sm">{tour.description}</p>
                <p className="text-gray-500 text-sm font-medium">{tour.price}</p>
              </CardContent>

              {/* Button */}
              <CardFooter>
                <Button className="w-full bg-green-600 hover:bg-green-700">Book Now</Button>
              </CardFooter>

            </Card>
          ))}
        </div>
        <TravelDeals />
      </div>
      
    </WebLayout>
  );
};

export default Booktour;
