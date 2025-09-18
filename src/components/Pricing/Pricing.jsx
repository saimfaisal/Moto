import React from 'react';
import { Check, Star, Sparkles, Crown } from 'lucide-react';

const Pricing = () => {
  const pricingPlans = [
    {
      id: 1,
      name: "Basic Wash",
      price: "$15",
      duration: "45 mins",
      icon: "💧",
      gradient: "bg-gradient-to-br from-secondary to-muted",
      features: [
        "Exterior hand wash",
        "Wheel cleaning",
        "Window cleaning",
        "Towel dry",
        "Air freshener"
      ],
      popular: false,
      buttonText: "Select Basic",
      buttonClass: "btn  text-primary  px-5 py-2 rounded-md border-primary border-2 dark:bg-neutral-800 hover:bg-primary hover:text-white duration-300 dark:hover:bg-primary"
    },
    {
      id: 2,
      name: "Standard Clean",
      price: "$30",
      duration: "45 mins",
      icon: "🚗",
      gradient: "bg-gradient-ocean",
      features: [
        "Everything in Basic",
        "Interior vacuum",
        "Dashboard wipe",
        "Tire shine",
        "Floor mat cleaning",
        "Door jamb cleaning"
      ],
      popular: true,
      buttonText: "Select Standard",
      buttonClass: "btn  text-primary  px-5 py-2 rounded-md border-primary border-2 dark:bg-neutral-800 hover:bg-primary hover:text-white duration-300 dark:hover:bg-primary"
    },
    {
      id: 3,
      name: "Premium Detail",
      price: "$60",
      duration: "45 mins",
      icon: "✨",
      gradient: "bg-gradient-to-br from-primary to-primary-glow",
      features: [
        "Everything in Standard",
        "Clay bar treatment",
        "Wax application",
        "Leather conditioning",
        "Engine bay cleaning",
        "Odor elimination",
        "Headlight restoration"
      ],
      popular: false,
      buttonText: "Select Premium",
      buttonClass: "btn  text-primary  px-5 py-2 rounded-md border-primary border-2 dark:bg-neutral-800 hover:bg-primary hover:text-white duration-300 dark:hover:bg-primary"
    },
    {
      id: 4,
      name: "Ultimate Spa",
      price: "$120",
      duration: "45 hours",
      icon: "👑",
      gradient: "bg-gradient-premium",
      features: [
        "Everything in Premium",
        "Paint correction",
        "Ceramic coating",
        "Full interior shampoo",
        "Paint sealant",
        "Chrome polishing",
        "Premium air freshener",
        "6-month protection"
      ],
      popular: false,
      buttonText: "Go Ultimate",
      buttonClass: "btn  text-primary  px-5 py-2 rounded-md border-primary border-2 dark:bg-neutral-800 hover:bg-primary hover:text-white duration-300 dark:hover:bg-primary"
    }
  ];

  return (
    <section id='pricing'>
      <div id="pricing" className="py-20 dark:bg-black bg-white dark:text-white duration-300 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-transparent dark:from-accent/10 pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-primary text-lg font-semibold mb-3" data-aos="fade-up">
              Choose Your Package
            </p>
            <h2 
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Car Wash Pricing
            </h2>
            <p 
              className="text-muted-foreground max-w-2xl mx-auto text-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Professional car care services tailored to your needs. All packages include our satisfaction guarantee.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.id}
                className={`relative group ${plan.popular ? 'md:scale-105' : ''}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-lg flex items-center gap-1">
                      <Star className="w-4 h-4 fill-current" />
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Card */}
                <div className={`
                  relative h-full bg-card dark:bg-card rounded-2xl p-6 
                  transition-all duration-300 overflow-hidden
                  ${plan.popular ? 'shadow-card-hover border-2 border-primary' : 'shadow-card hover:shadow-card-hover border border-border'}
                  group-hover:transform group-hover:-translate-y-2
                `}>
                  {/* Background Pattern */}
                  <div className={`absolute inset-0 opacity-5 ${plan.gradient}`} />
                  
                  {/* Icon */}
                  <div className="relative mb-4">
                    <span className="text-5xl">{plan.icon}</span>
                    {plan.name === "Ultimate Spa" && (
                      <Crown className="absolute -top-2 -right-2 w-6 h-6 text-premium animate-pulse" />
                    )}
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  
                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">/ {plan.duration}</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    onClick={() => window.location.href = "/booking.html"}
                    className={`
                      w-full py-3 px-4 rounded-lg font-semibold
                      transition-all duration-300 transform
                      ${plan.buttonClass}
                      hover:scale-105 active:scale-95
                    `}
                  >
                    {plan.buttonText}
                    {plan.name === "Ultimate Spa" && (
                      <Sparkles className="inline-block ml-2 w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
