import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/7.JPG";
import Img2 from "../assets/9.JPG";
import Img3 from "../assets/10.JPG";
import Img4 from "../assets/portfolio-img4.png";
import Img5 from "../assets/portfolio-img5.png";
import Img6 from "../assets/sppi.png";
import Img7 from "../assets/cmp.png";
import { Link } from "react-router-dom";

const Work = () => {
  const data = [
    {
      image: Img4,
      name: "Aviary Park",
      link: "https://aviarypark.com/",
      desc: "Frontend using Next Js, tailwind, framer motion",
    },
    {
      image: Img6,
      name: "SPPI Website",
      link: "sppi.id",
      desc: "Frontend using Next Js, tailwind, framer motion, zustand",
    },
    {
      image: Img1,
      name: "To-do calculator",
      link: "https://github.com/KhairienNissa/Calculator-todo",
      desc: "Frontend using React Native",
    },
    {
      image: Img5,
      name: "Ourastore",
      link: "https://clone-oura-khairien.vercel.app/",
      desc: "Frontend using Next Js and tailwind",
    },
    {
      image: Img3,
      name: "Dumbsound",
      link: "https://dumbsound-khairien.netlify.app/",
      desc: "Fullstack using React Js, css, Javascript, Bootstrap, Node Js, PostgresSQL, Socket.io, Express, PHPmyadmin",
    },
    {
      image: Img2,
      name: "DumbMerch",
      link: "https://dumbmerch-khairien.netlify.app/",
      desc: "Fullstack using React Js, css, Javascript, Bootstrap, Node Js, PostgresSQL, Socket.io, Express, PHPmyadmin",
    },
    {
      image: Img7,
      name: "CBNCloud Website",
      link: "https://web-cmp.cbncloud.co.id/",
      desc: "Frontend using Next Js, bootstrap, tailwind, framer motion",
    },
  ];
  return (
    <section className="section lg:my-[250px]" id="work">
      <div className="container mx-auto">
        <div className="lg:flex lg:gap-x-10 ">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 ">
            <h2 className="h2 text-6xl leading-tight text-gradient2 font-bold">
              My Latest <br /> Work
            </h2>
            {data?.map((item, index) => (
              <motion.div
                variants={
                  index == 0 || index == 2 || index == 4 || index == 6
                    ? fadeIn("left", 0.3)
                    : fadeIn("right", 0.3)
                }
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                key={index}
                className="group relative h-[330px] overflow-hidden border-2 border-white/50 rounded-xl "
              >
                <a
                  href={item.link}
                  className="group-hover:bg-black/90 bg-black/50 w-full h-full absolute z-40 transition-all duration-300"
                ></a>
                <img
                  src={item.image}
                  alt=""
                  className="group-hover:scale-125 transition-all duration-500"
                />

                <div className="absolute -bottom-full left-12 group-hover:bottom-28 group-hover:md:bottom-16 transition-all duration-500 z-50">
                  <div className="text-3xl text-gradient">{item.name}</div>
                  <div className="text-lg text-white">{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
