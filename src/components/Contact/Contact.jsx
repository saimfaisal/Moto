import { Mail, MapPin, Phone } from "lucide-react"

export default function Contact() {
  return (
    <div className="conatiner dark:bg-neutral-800 bg-slate-200 dark:text-white duration-300 sm:min-h-[500px] sm:grid-cols-2 place-items-center">
      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Contact Us Heading */}
          <div className="text-center mb-16">
            <h1 className="text-3xl font-semibold text-center font-serif 
                sm:text-4xl py-8">
              Contact Us
            </h1>
          </div>

          {/* Contact Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Email Section */}
            <div className="text-center group">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-primary group-hover:bg-primary/80  transition-colors duration-300">
                  <Mail className="w-12 h-12 md:w-16 md:h-16 dark:text-white" strokeWidth={1.5} />
                </div>
              </div>
              <h2 className="text-xl md:text-2xl font-bold dark:stext-white mb-4 uppercase tracking-wide">E-Mail</h2>
              <a
                href="mailto:info@washjunction.com"
                className="dark:text-white text-base md:text-lg 
                 transition-colors duration-300 break-all"
              >
                info@motobath.com
              </a>
            </div>

            {/* Address Section */}
            <div className="text-center group">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-primary group-hover:bg-primary/80 transition-colors duration-300">
                  <MapPin className="w-12 h-12 md:w-16 md:h-16  dark:text-white" strokeWidth={1.5} />
                </div>
              </div>
              <h2 className="text-xl md:text-2xl font-bold dark:text-white mb-4 uppercase tracking-wide">Address</h2>
              <p className="dark:text-white text-base md:text-lg">Lahore, Pakistan</p>
            </div>

            {/* Phone Section */}
            <div className="text-center group">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-primary group-hover:bg-primary/80 transition-colors duration-300">
                  <Phone className="w-12 h-12 md:w-16 md:h-16  dark:text-white" strokeWidth={1.5} />
                </div>
              </div>
              <h2 className="text-xl md:text-2xl font-bold dark:text-white mb-4 uppercase tracking-wide">Phone</h2>
              <a
                href="tel:+923229911991"
                className="dark:text-white text-base md:text-lg transition-colors duration-300"
              >
                0322-7000200
              </a>
            </div>
          </div>

          {/* Additional Contact Form Section */}
          <div className="mt-16 max-w-2xl mx-auto">
            <div className="dark:bg-text-white backdrop-blur-sm rounded-lg p-8 border border-primary dark:border-primary dark:text-white">
              <h3 className="text-2xl font-bold dark:text-white mb-6 text-center">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
                  <div>
                    <label className="block dark:text-white text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3  border border-primary rounded-lg text-black placeholder-dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block dark:text-white text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-dark:text-white border border-primary rounded-lg text-black placeholder-dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block dark:text-white text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 dark:bg-text-white border border-primary rounded-lg text-black placeholder-dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className= "btn  text-primary  px-5 py-2 rounded-md border-primary border-2 dark:bg-neutral-800 hover:bg-primary hover:text-white duration-300 dark:hover:bg-primary"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
<div>
  {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54388.13041148471!2d74.3473152!3d31.571968000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905aa15654d4b%3A0x3c163575197cfdc4!2scmh%20lahore!5e0!3m2!1sen!2s!4v1750765451042!5m2!1sen!2s" width="600" height="450"  allowFullScreen  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
</div>

        </div>
      </section>
    </div>
  )
}
