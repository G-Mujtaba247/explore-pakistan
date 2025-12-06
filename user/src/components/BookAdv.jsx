import React from 'react';
import { Button } from './ui/button';
import { useNavigate } from "react-router";

const BookAdv = () => {
    const navigate = useNavigate();
    return (
        <section className="py-10 px-4 max-w-7xl mx-30 mb-0 bg-blue-50">
            <div className="relative w-full h-[350px] rounded-2xl overflow-hidden flex items-center justify-center">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/Booking.jpg')" }}
                >
                    {/* Dark overlay for text readability */}
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                {/* Content */}
                <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                        Ready to book your adventure?
                    </h2>
                    <p className="text-base md:text-lg text-white mb-8 drop-shadow-md">
                        Browse our collection of tours and secure your spot on the mountain today.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Button onClick={()=> navigate("/tours")} className="bg-white text-black hover:bg-green-700 px-8 py-3 hover:text-white text-base font-medium rounded-md shadow-lg">
                            Search
                        </Button>
                        <Button onClick={()=> navigate("/booking")} className="bg-green-600 text-white hover:bg-green-700 px-8 py-3 text-base font-medium rounded-md shadow-lg">
                            Browse
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookAdv;
