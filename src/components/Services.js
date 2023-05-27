import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed odit, ullam beatae saepe ipsa libero assumenda",
    link: "Learn More",
  },
  {
    name: "Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed odit, ullam beatae saepe ipsa libero assumenda",
    link: "Learn More",
  },
  {
    name: "Digital Marketing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed odit, ullam beatae saepe ipsa libero assumenda",
    link: "Learn More",
  },
];

const Services = () => {
  return (
    <div className="section" id="services">
      <div className="container mx-auto">
        <div className="lg:flex">
          {/* text */}
          <motion.div
          variants={fadeIn('right', 0.3)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.3 }}  className="flex-1 lg:bg-services bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
            <h2 className="h2 text-gradient font-semibold mb-6">What I do.</h2>
            <h3 className="h3 max-w-[450px] mb-16">I'm a Front-end Developer with over 1 year++ of
              experience.</h3>
            <button className="btn btn-link p-4">See My Work</button>
          </motion.div>

          {/* services */}
          <motion.div className="flex-1" variants={fadeIn('left', 0.3)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.3 }} >
            <div>
              {services?.map((item, index)=> (
               <div key={index} className="border-b border-white/20 h-[146px] mb-11 flex gap-x-6">
                <div className="max-w-[476px]">
                  <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">{item.name}</h4>
                  <p className="font-secondary leading-tight">{item.description}</p>
                </div>
                <div className="flex flex-col flex-1 item-end">
                <a href="#" className="btn w-9 h-9 mb-[42px] flex justify-center items-center mx-auto">
                  <BsArrowUpRight/>
                </a>
                <a href="#" className="text-white text-sm hover:text-gradient font-bold font-primary">{item.link}</a>
                </div>
               </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
