import { Calendar, Smile, Car } from "lucide-react"

export default function Component() {
  return (
    <div className="conatiner dark:bg-black bg-white dark:text-white duration-300 sm:min-h-[500px] sm:grid-cols-2 place-items-center">
      {/* Header Section */}
      <header className="text-center py-16 px-4">
        <h1
        data-aos="fade-up"
        className="text-4xl md:text-5xl lg:text-4xl font-bold font-serif dark:bg-black bg-white dark:text-white mb-8">
          Get your car washed in 3 easy steps
        </h1>
      </header>

      {/* Three Steps Section */}
      <section className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Step 1: Book a Wash */}
            <div 
             data-aos="fade-up"
           data-aos-delay = "500"
            className="text-center border-2 rounded-lg border-primary transform transition-transform duration-300 hover:scale-95 cursor-pointer">
              <div className="flex justify-center mb-6">
                <Calendar className=" w-16 h-16 md:w-20 md:h-20 dark:text-primary text-primary" strokeWidth={1.5} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold dark:bg-black bg-white dark:text-white mb-4 uppercase tracking-wide">
                Book a Wash
              </h2>
              <p className="dark:bg-black bg-white dark:text-white text-base md:text-lg leading-relaxed max-w-sm mx-auto">
                Provide your home or office address & a time that suits your schedule.
              </p>
            </div>

            {/* Step 2: Sit Back & Relax */}
            <div 
             data-aos="fade-up"
           data-aos-delay = "800"
            className="text-center  border-2 rounded-lg border-primary  transform transition-transform duration-300 hover:scale-95 cursor-pointer">
              <div className="flex justify-center mb-6">
                <Smile className="w-16 h-16 md:w-20 md:h-20 dark:text-primary text-primary" strokeWidth={1.5} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold dark:bg-black bg-white dark:text-white mb-4 uppercase tracking-wide">
                Sit Back & Relax
              </h2>
              <p className="dark:bg-black bg-white dark:text-white text-base md:text-lg leading-relaxed max-w-sm mx-auto">
                A fully equipped professionals will come to you and wash your car.
              </p>
            </div>

            {/* Step 3: Enjoy Your Car */}
            <div
             data-aos="fade-up"
           data-aos-delay = "1100"
            className="text-center  border-2 rounded-lg border-primary  transform transition-transform duration-300 hover:scale-95 cursor-pointer">
              <div className="flex justify-center mb-6">
                <Car className="w-16 h-16 md:w-20 md:h-20 dark:text-primary text-primary" strokeWidth={1.5} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold dark:bg-black bg-white dark:text-white mb-4 uppercase tracking-wide">
                Enjoy Your Car
              </h2>
              <p className="dark:bg-black bg-white dark:text-whitetext-base md:text-lg leading-relaxed max-w-sm mx-auto">
                It's the simplest, most cost effective and eco-friendly way to wash your car.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center px-4 pb-16">
        <button 
         data-aos="fade-up"
           data-aos-delay = "1400"
        className="btn  text-primary  px-5 py-2 rounded-md border-primary border-2 dark:bg-black hover:bg-primary hover:text-white duration-300 dark:hover:bg-primary">
          Book Your Wash Now
        </button>
      </section>
    </div>
  )
}
