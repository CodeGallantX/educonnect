import React from 'react';
import Link from 'next/link';
import { MdCheckCircle } from 'react-icons/md';
import { BiSolidBoltCircle } from "react-icons/bi";

const ProAdvertisement = () => {
    return (
        <div className="bg-gray-900 p-4 rounded-lg text-white">
            <div className="flex flex-col justify-center items-start space-y-3">
                <div className="space-y-0 text-center sm:text-left">
                    <h2 className="text-2xl font-bold">Upgrade to Premium</h2>
                </div>

                <div className="space-y-2 w-full">
                    <h3 className="text-xl font-semibold">$25/monthly</h3>
                    <ul className="list-none ml-1 space-y-2 text-sm">
                        <li className="flex items-center space-x-2">
                            <MdCheckCircle className="text-green-500 text-lg" />
                            <span>AI Chatbot for Instant Help</span>
                        </li>
                        <li className="flex items-center space-x-2 text-sm">
                            <MdCheckCircle className="text-green-500 text-lg" />
                            <span>One-on-One Talk with Professors & Mentors</span>
                        </li>
                        <li className="flex items-center space-x-2 text-sm">
                            <MdCheckCircle className="text-green-500 text-lg" />
                            <span>Personalized Learning Paths</span>
                        </li>
                        <li className="flex items-center space-x-2 text-sm">
                            <MdCheckCircle className="text-green-500 text-lg" />
                            <span>Advanced AI-Powered Tools & Resources</span>
                        </li>
                        <li className="flex items-center space-x-2 text-sm">
                            <MdCheckCircle className="text-green-500 text-lg" />
                            <span>Exclusive Webinars & Masterclasses</span>
                        </li>
                    </ul>
                </div>
                <p className="text-sm">Offer valid for a limited time only.</p>
                <Link href="#" className="text-white flex flex-row items-center justify-center space-x-1 mt-2 py-2 w-full px-6 bg-primary rounded-lg font-medium hover:bg-green-500 transition-all duration-300
                ">
                    <BiSolidBoltCircle className="text-xl" />
                    <span className="text-sm">Upgrade Now</span>
                </Link>
            </div>
        </div>
    );
};

export default ProAdvertisement;
