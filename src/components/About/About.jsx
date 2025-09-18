import React from 'react'
import car2 from '../../assets/car2.png'
const About = () => {
  const scrollToPricing = () => {
    const section = document.getElementById("pricing");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }}
  return (
    <div>
        <div className="conatiner dark:bg-neutral-800 bg-slate-200 dark:text-white duration-300 sm:min-h-[600px] sm:grid-cols-2 place-items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
                <div 
                 data-aos-duration ="1500"
                  data-aos="slide-right"
                  data-aos-once="false"
                >
                    <img src={car2} alt="" 
                    className='sm:scale-105 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]'
                    />
                </div>
                <div>
                    <div 
                    className='space-y-5 sm:p-16 pb-6'> 
                        <h1 
                          data-aos = "fade-up"
                        className='text-3xl sm:text-4xl font-serif font-bold'>About</h1>
                        <p   data-aos = "fade-up"
                            data-aos-delay = "600"
                    
                    >Motobath are pioneer in giving car detailing service in Lahore at your door step. We commit to give high quality services to our customers. We are a team of professional who will give a new look to your ride as we believe cleanliness reflect your personality.</p>
                        <p 
                          data-aos = "fade-up"
                          data-aos-delay = "800"
                        >Our professional cleaners dedicated not simply cleaning your car but restoring your vehicles original appearance, we offer services starting with the basic hand wash all the way to interior and exterior finish restoration.</p>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About