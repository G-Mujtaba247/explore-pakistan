import React from 'react';
import { Button } from "./ui/button";

const Hero = () => {
    return (
        <div className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('/image1.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Dark Overlay for better text visibility */}
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center gap-6 mt-10">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight drop-shadow-lg">
                    Explore Pakistan <br />
                    and discover the <br />
                    beauty of the north
                </h1>

                <p className="text-base md:text-lg text-gray-100 max-w-2xl drop-shadow-md">
                    Find tours, book adventures, and travel with ease. From the peaks of Murree to the valleys of Swat, your next journey awaits.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <Button className="bg-white text-black hover:bg-gray-100 px-8 py-6 text-base font-medium rounded-lg border-0">
                        Search tours
                    </Button>
                    <Button variant="outline" className="bg-black/30 text-white border-white/30 hover:bg-black/50 hover:text-white px-8 py-6 text-base font-medium rounded-lg backdrop-blur-sm">
                        Learn more
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
