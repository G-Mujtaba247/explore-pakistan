import React from 'react';
import { Button } from "./ui/button";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { NavLink } from 'react-router';

const Footer = () => {
    return (
        <footer className="w-full bg-white pb-3">
            {/* Main Container */}
            <div className=" border border-gray-200 rounded-xl p-4 md:p-12 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
                    {/* Logo Section - Left */}
                    <div className="md:col-span-3">
                       <img src="logo.png" alt="logo" className='w-50 h-50'/>
                    </div>

                    {/* Links Section - Middle */}
                    <div className="md:col-span-6 grid grid-cols-3 gap-4">
                        {/* Explore */}
                        <div>
                            <h3 className="font-bold mb-4">Explore</h3>
                            <ul className="space-y-3 text-gray-600 text-sm">
                                <li><NavLink to="/" className="hover:text-black transition-colors">Home</NavLink></li>
                                <li><NavLink to="/tours" className="hover:text-black transition-colors">Tours</NavLink></li>
                                <li><NavLink to="/about" className="hover:text-black transition-colors">About</NavLink></li>
                                <li><NavLink to="/contact" className="hover:text-black transition-colors">Contact</NavLink></li>
                                <li><NavLink to="/booktour" className="hover:text-black transition-colors">Bookings</NavLink></li>
                            </ul>
                        </div>
                        {/* Company */}
                        <div>
                            <h3 className="font-bold mb-4">Company</h3>
                            <ul className="space-y-3 text-gray-600 text-sm">
                                <li><NavLink to="/tours" className="hover:text-black transition-colors">Tours</NavLink></li>
                                <li><NavLink to="/booktour" className="hover:text-black transition-colors">Bookings</NavLink></li>
                                <li><NavLink to="/about" className="hover:text-black transition-colors">About</NavLink></li>
                                <li><NavLink to="/contact" className="hover:text-black transition-colors">Contact</NavLink></li>
                                <li><NavLink to="/support" className="hover:text-black transition-colors">Support</NavLink></li>
                            </ul>
                        </div>
                        {/* Help */}
                        <div>
                            <h3 className="font-bold mb-4">Help</h3>
                            <ul className="space-y-3 text-gray-600 text-sm">
                                <li><NavLink to="/faq" className="hover:text-black transition-colors">FAQ</NavLink></li>
                                <li><NavLink to="/contact" className="hover:text-black transition-colors">Contact</NavLink></li>
                                <li><NavLink to="/safety" className="hover:text-black transition-colors">Safety</NavLink></li>
                                <li><NavLink to="/policies" className="hover:text-black transition-colors">Policies</NavLink></li>
                                <li><NavLink to="/updates" className="hover:text-black transition-colors">Updates</NavLink></li>
                            </ul>
                        </div>
                    </div>

                    {/* Newsletter Section - Right */}
                    <div className="md:col-span-3">
                        <h3 className="font-bold mb-4">Newsletter</h3>
                        <p className="text-gray-600 mb-4 text-sm">Get the latest tour updates and travel tips delivered to your inbox.</p>
                        <div className="flex gap-2 mb-3">
                            <input
                                type="email"
                                placeholder="Enter email"
                                className="flex-1 px-5 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-black text-sm"
                            />
                            <Button className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 shadow-sm">Subscribe</Button>
                        </div>
                        <p className="text-[10px] text-gray-500 leading-tight">By subscribing you agree to our Privacy Policy and consent to receive updates.</p>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
                <p>© 2025 Explore Pakistan. All rights reserved.</p>
                <div className="flex gap-6 my-4 md:my-0">
                    <NavLink to="/privacy" className="hover:text-black transition-colors">Privacy Policy</NavLink>
                    <NavLink to="/terms" className="hover:text-black transition-colors">Terms of Service</NavLink>
                    <NavLink to="/cookies" className="hover:text-black transition-colors">Cookies Settings</NavLink>
                </div>
                <div className="flex gap-4 text-black">
                    <NavLink to="#" className="hover:text-blue-700 transition-colors"><FaFacebook size={20} /></NavLink>
                    <NavLink to="#" className="hover:text-red-700 transition-colors"><FaInstagram size={20} /></NavLink>
                    <NavLink to="#" className="hover:text-red-700 transition-colors"><FaYoutube size={20} /></NavLink>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
