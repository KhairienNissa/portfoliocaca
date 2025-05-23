import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="mb-40 mx-auto">
        <div className="md:flex lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat lg:h-[640px] h-[450px] mix-blend-lighten bg-top"
          ></motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-gradient2 font-extrabold text-3xl">
              About me.
            </h2>
            <h3 className="h3 mb-4">
              I'm a Front-end Developer at Cyberindo aditama (CBN)
            </h3>
            <p className="mb-6">
              I am an enthusiastic, creative, responsible, hard working person
              and sense of humour. I am a mature team worker and adaptable to
              all challenging situations. I am able to work well both in a team
              environment as well as using own initiative. I am able to work
              well under pressure and adhere to strict deadlines.
            </p>
            <div className="flex gap-x-6 g:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-white mb-2">
                  {inView ? <CountUp start={0} end={26} duration={10} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Months
                  <br />
                  Experienced
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-white mb-2">
                  {inView ? <CountUp start={0} end={9} duration={10} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects
                  <br />
                  Completed
                </div>
              </div>
            </div>
            {/* <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">Contact Me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
