import React from 'react';
import { ArrowRight } from 'lucide-react';

const benefitsData = [
    {
        id: 1,
        label: "Affordable",
        title: "Best prices in the market",
        description: "Quality tours without breaking the bank. We believe great travel should be accessible.",
        image: "/Market.jpeg",
        link: "#"
    },
    {
        id: 2,
        label: "Safe travels",
        title: "Your security is our priority",
        description: "Experienced guides and vetted accommodations ensure peace of mind on every journey.",
        image: "/Safety.webp",
        link: "#"
    },
    {
        id: 3,
        label: "Expert guides",
        title: "Local knowledge and passion",
        description: "Our guides know these mountains like the back of their hand and love sharing their stories.",
        image: "/Guides.webp",
        link: "#"
    }
];

const BenefitCard = ({ benefit }) => {
    return (
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
                {/* Label */}
                <p className="text-sm font-semibold text-gray-700 mb-3">{benefit.label}</p>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 leading-tight">{benefit.title}</h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed">{benefit.description}</p>

                {/* Learn Link */}
                <a
                    href={benefit.link}
                    className="inline-flex items-center gap-1 text-sm font-medium text-black hover:underline"
                >
                    Learn <ArrowRight size={16} />
                </a>
            </div>

            {/* Image */}
            <div className="h-64 overflow-hidden">
                <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
            </div>
        </div>
    );
};

const Benefits = () => {
    return (
        <section className="py-16 px-4 max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
                <p className="text-sm font-semibold uppercase tracking-wider mb-2">Benefits</p>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Why travel with us</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    We <span className="font-semibold">handle the details</span> so you can <span className="font-semibold">focus on the adventure</span>.
                </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {benefitsData.map(benefit => (
                    <BenefitCard key={benefit.id} benefit={benefit} />
                ))}
            </div>
        </section>
    );
};

export default Benefits;
