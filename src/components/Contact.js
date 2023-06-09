import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <section className="lg:mt-44 y-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-center items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-gradient font-semibold  mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>

          {/* form */}
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col fap-y-6 pb-24 p-6 items-center"
          >
            <input
              type="text"
              className="bg-transparent outline-none border-b py-3 w-full placeholder:text-white focus:border-accent transition-all"
              placeholder="Your email"
            />

            <input
              type="text"
              className="bg-transparent outline-none border-b py-3 w-full placeholder:text-white focus:border-accent transition-all"
              placeholder="Your email"
            />

            <textarea
              className="bg-transparent outline-none border-b py-12 w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Your message"
            ></textarea>

            <button className="btn btn-lg">Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
