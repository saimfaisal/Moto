import React from 'react';
import engine from "../../assets/engine.jpeg"; // ✅ Correct
import headlight from '../../assets/headlight.jpeg';
import tire from '../../assets/tire.jpeg';
import wax from '../../assets/wax.jpeg';
import fullwax from "../../assets/fullwax.jpeg"; 
import handwash from '../../assets/handwash.jpeg';
import inter from '../../assets/inter.jpeg';
import vacum from "../../assets/vacum.jpeg";

import yellowcar from '../../assets/yellowcar.png';

const detailingServices = [
  {
    id: 1,
    title: "HEADLIGHTS",
    image: headlight,  // Fixed: removed curly braces
    alt: "Headlight polishing service",
    description: "Professional headlight restoration and polishing",
  },
  {
    id: 2,
    title: "ENGINE WASH",
    image: engine,  // Fixed: removed curly braces
    alt: "Engine cleaning service",
    description: "Deep engine bay cleaning and degreasing",
  },
  {
    id: 3,
    title: "TIRE SHINE",
    image: tire,  // Fixed: removed curly braces
    alt: "Tire shining service",
    description: "Premium tire cleaning and shine treatment",
  },
  {
    id: 4,
    title: "CAR WAX",
    image: wax,  // Fixed: removed curly braces
    alt: "Car waxing service",
    description: "Professional car waxing and paint protection",
  },

  {
    id: 5,
    title: "PAINT PROTECTION FILM",
    image: fullwax,  // Fixed: removed curly braces
    alt: "Headlight polishing service",
    description: "Protect the paint from scratches, chips, and other damage.",
  },
  {
    id: 6,
    title: "INTERIOR WIPE",
    image: inter,  // Fixed: removed curly braces
    alt: "Engine cleaning service",
    description: "All-in-one wipes for dashboards, consoles, and more",
  },
  {
    id: 7,
    title: "HAND WASH",
    image: handwash,  // Fixed: removed curly braces
    alt: "Tire shining service",
    description: " Highlights the desirable result",
  },
  {
    id: 8,
    title: "VACUUM INTERIOR",
    image: vacum,  // Fixed: removed curly braces
    alt: "Car waxing service",
    description: "Restores freshness, improves hygiene, protects upholstery.",
  },
  
];

const DetailingServices = () => {
  return (
    <div className="conatiner dark:bg-neutral-800 bg-slate-200 dark:text-white duration-300 sm:min-h-[500px] sm:grid-cols-2 place-items-center">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 
          data-aos="fade-up"
          className="text-3xl font-semibold text-center font-serif 
                sm:text-4xl py-8">Professional Car Detailing Services</h2>
          <p 
           data-aos="fade-up"
           data-aos-delay = "500"
          className=" text-lg">Expert care for every part of your vehicle</p>
        </div>

        {/* Services Grid using Map Method */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {detailingServices.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-center group cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              {/* Circular Image Container */}
              <div 
              data-aos="fade-up"
           data-aos-delay = "800"
              className="relative w-48 h-48 md:w-56 md:h-56 overflow-hidden rounded-full border-4 border-primary mb-6 group-hover:border-primary transition-colors duration-300">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Service Title */}
              <h3
              data-aos="fade-up"
           data-aos-delay = "1000"
              className="text-xl md:text-2xl font-bold tracking-wider mb-2 group-hover:transition-colors duration-300">
                {service.title}
              </h3>

              {/* Service Description */}
              <p
              data-aos="fade-up"
           data-aos-delay = "1200"
              className="text-center text-sm md:text-base px-2">{service.description}</p>
            </div>
          ))}
        </div>

       
      </div>
    </div>
  );
};

export default DetailingServices;