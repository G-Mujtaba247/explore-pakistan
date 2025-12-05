import React from "react";
import { Star } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import WebLayout from "../layout/WebLayout";

// ------------------ DATA ------------------

const upcomingTours = [
  {
    id: 1,
    title: "Skardu Valley",
    image: "/skardu.jpg",
    description: "Experience towering peaks and serene landscapes."
  },
  {
    id: 2,
    title: "Kumrat Forest",
    image: "/kumrat.jpg",
    description: "A pristine valley filled with thick forests and clear rivers."
  },
  {
    id: 3,
    title: "Gwadar Beach Escape",
    image: "/gawadar.png",
    description: "Sandy beaches, crystal-clear water and catchy sunsets."
  }
];

const recentTours = [
  {
    id: 1,
    title: "Hunza Autumn Experience",
    image: "/hunza.jpg",
    rating: 5,
    description: "Golden trees, crisp air and peaceful atmosphere."
  },
  {
    id: 2,
    title: "Fairy Meadows Trek",
    image: "/nanga.jpg",
    rating: 4,
    description: "Walk through lush meadows with Nanga Parbat at your side."
  },
  {
    id: 3,
    title: "Neelum Valley Tour",
    image: "/neelum.jpg",
    rating: 4,
    description: "Turquoise rivers, quiet villages and mountains."
  },
  {
    id: 4,
    title: "Swat Spring Retreat",
    image: "/sawatSpring.jpg",
    rating: 5,
    description: "Blooming valleys and peaceful rivers to refresh your soul."
  },
  {
    id: 5,
    title: "Naran Kaghan Adventure",
    image: "/Kaghan.jpg",
    rating: 4,
    description: "Lakes, mountains, and scenic routes all in one tour."
  },
  {
    id: 6,
    title: "Ratti Gali Lake Hike",
    image: "/ratti.jpg",
    rating: 5,
    description: "A magical lake surrounded by alpine meadows."
  },
  {
    id: 7,
    title: "Chitral Kalash Heritage Trip",
    image: "/kalash.jpg",
    rating: 5,
    description: "Experience tribal culture and mountain beauty."
  },
  {
    id: 8,
    title: "Malam Jabba Ski Tour",
    image: "/mallam.jpg",
    rating: 4,
    description: "Enjoy skiing, chair lifts and snowy landscapes."
  },
  {
    id: 9,
    title: "Ziarat Quaid Residency Tour",
    image: "/ziarrat.jpg",
    rating: 4,
    description: "Juniper forests and peaceful landscapes."
  },
  {
    id: 10,
    title: "Ormara Beach Camping",
    image: "/omarra.webp",
    rating: 5,
    description: "Star-gazing, bonfire and unforgettable beach nights."
  }
];

// Star Rating Component
const StarRating = ({ rating }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={18}
        className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
      />
    ))}
  </div>
);

// ------------------ COMPONENT ------------------

const Tour = () => {
  return (
    <>
    <WebLayout>
    <div className="max-w-7xl mx-auto space-y-6 pt-16  py-16 mt-10">

      {/* ---------- UPCOMING TOURS ---------- */}
      <section>
        <h2 className="text-4xl font-bold mb-4 text-center">Upcoming Tours</h2>
        <p className="text-center text-gray-600 mb-10">
          Exciting new destinations are almost ready for you to explore.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upcomingTours.map(tour => (
            <Card
              key={tour.id}
              className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border rounded-xl p-0 m-0 pb-4">
              <AspectRatio ratio={16 / 9}>
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover rounded-t-xl"
                />
              </AspectRatio>

              <CardHeader>
                <CardTitle className="text-xl">{tour.title}</CardTitle>
                <CardDescription>{tour.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <Button className="w-full bg-green-600 text-white hover:bg-green-700">
                  Coming Soon
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-10" />

      {/* ---------- RECENT TOURS ---------- */}
      <section>
        <h2 className="text-4xl font-bold mb-4 text-center">Recent Tours</h2>
        <p className="text-center text-gray-600 mb-10">
          Here's what travelers recently explored with us.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-16">
          {recentTours.map(tour => (
            <Card
              key={tour.id}
              className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border rounded-xl"
            >
              <AspectRatio ratio={16 / 9}>
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover rounded-t-xl"
                />
              </AspectRatio>

              <CardHeader>
                <CardTitle className="text-lg font-semibold">{tour.title}</CardTitle>
                <CardDescription>{tour.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <StarRating rating={tour.rating} />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

    </div>
    </WebLayout>
    </>
  );
};

export default Tour;
