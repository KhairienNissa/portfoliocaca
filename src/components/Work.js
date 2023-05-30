import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/7.JPG";
import Img2 from "../assets/9.JPG";
import Img3 from "../assets/10.JPG";
import Img4 from "../assets/portfolio-img4.png";
import Img5 from "../assets/portfolio-img5.png";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <section className="section lg:my-56" id="work">
      <div className="container mx-auto">
        <div className="lg:flex lg:gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex-col flex mb-10 lg:mb-0 gap-y-10"
          >
            {/* text */}
            <div className="mb-12">
              <h2 className="h2 text-6xl leading-tight text-gradient2 font-bold">
                My Latest <br /> Work
              </h2>
            </div>

            {/* Aviary Park  */}
            <div className="group relative h-[330px] overflow-hidden border-2 border-white/50 rounded-xl ">
              <div className="group-hover:bg-black/90 bg-black/50 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                src={Img4}
                alt=""
                className="group-hover:scale-125 transition-all duration-500"
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-28 group-hover:md:bottom-16 transition-all duration-500 z-50">
                <span className="text-3xl text-gradient">
                  Aviary Park - unrealeased
                </span>
              </div>
              <div className="absolute -bottom-full left-12 right-12 group-hover:bottom-9 transition-all duration-500 z-50">
                <span className="text-lg text-white">
                  Frontend using Next Js, tailwind, framer motion
                </span>
              </div>
            </div>

            {/* Todo calculator */}
            <div className="group relative h-[330px] overflow-hidden border-2 border-white/50 rounded-xl ">
              <a
                href="https://github.com/KhairienNissa/Calculator-todo"
                className="group-hover:bg-black/90 bg-black/50 w-full h-full absolute z-40 transition-all duration-300"
              ></a>
              <img
                src={Img1}
                alt=""
                className="group-hover:scale-125 transition-all duration-500"
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-28 group-hover:md:bottom-16 transition-all duration-500 z-50">
                <span className="text-3xl text-gradient">
                  To-do calculator - undeploy
                </span>
              </div>
              <div className="absolute -bottom-full left-12 right-12 group-hover:bottom-9 transition-all duration-500 z-50">
                <span className="text-lg text-white">
                  Frontend using React Native
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-1 flex-col gap-y-10"
          >
            {/* Oura store */}
            <div className="group relative h-[330px] overflow-hidden border-2 hover:cursor-pointer border-white/50 rounded-xl">
              <a
                href="https://clone-oura-khairien.vercel.app/"
                className="group-hover:bg-black/90 bg-black/50 w-full h-full absolute z-40 transition-all duration-300"
              ></a>
              <img
                src={Img5}
                alt=""
                className="group-hover:scale-125 transition-all duration-500"
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-28 group-hover:md:bottom-16 transition-all duration-500 z-50">
                <span className="text-3xl text-gradient hover:cursor-pointer ">
                  Ourastore
                </span>
              </div>
              <div className="absolute -bottom-full left-12 right-12 group-hover:bottom-9 transition-all duration-500 z-50">
                <span className="text-lg text-white">
                  Frontend using Next Js and tailwind
                </span>
              </div>
            </div>

            {/* Dumbsound */}
            <div className="group relative h-[330px] overflow-hidden border-2 border-white/50 rounded-xl">
              <a
                href="https://dumbsound-khairien.netlify.app/"
                className="group-hover:bg-black/90 bg-black/50 w-full h-full absolute z-40 transition-all duration-300"
              ></a>
              <img
                src={Img3}
                alt=""
                className="group-hover:scale-125 transition-all duration-500"
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-3xl text-gradient">Dumbsound</span>
              </div>
              <div className="absolute -bottom-full left-12 right-12 group-hover:bottom-9 transition-all duration-500 z-50">
                <span className="text-lg text-white">
                  Fullstack using React Js, css, Javascript, Bootstrap, Node Js,
                  PostgresSQL, Socket.io, Express, PHPmyadmin
                </span>
              </div>
            </div>

            {/* dumb merch */}
            <div className="group relative h-[330px] overflow-hidden border-2 border-white/50 rounded-xl">
              <a
                href="https://dumbmerch-khairien.netlify.app/"
                className="group-hover:bg-black/90 bg-black/50 w-full h-full absolute z-40 transition-all duration-300"
              ></a>
              <img
                src={Img2}
                alt=""
                className="group-hover:scale-125 transition-all duration-500"
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-3xl text-gradient">DumbMerch</span>
              </div>
              <div className="absolute -bottom-full left-12 right-12 group-hover:bottom-9 transition-all duration-500 z-50">
                <span className="text-lg text-white">
                  Fullstack using React Js, css, Javascript, Bootstrap, Node Js,
                  PostgresSQL, Socket.io, Express, PHPmyadmin
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
