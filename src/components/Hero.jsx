import profilepic from "../assets/profpic.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import { DiCss3, DiHtml5, DiJavascript1, DiReact } from "react-icons/di";
import { SiTailwindcss, SiTypescript, SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="mt-24 max-w-[1200px] mx-auto relative" id="hero">
      <div className="grid md:grid-cols-2 md:place-items-center gap-8 px-4 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={["Front-End Dev.", 1000, "React", 1000, "Next js", 1000]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-gray-400 text-4xl md:text-5xl italic- mb-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 text-5xl md:text-7xl tracking-tight mb-4"
          >
            HEY, I AM <br />
            <span className="text-purple-500">SEIF MOSTAFA</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 max-w-[300px] md:max-w-[500px] text-2xl mb-6"
          >
            I am a passionate frontend developer with junior experience in
            development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row items-center gap-6 my-4 md:mb-0"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
              }}
              onClick={() =>
                window.open(
                  "https://mail.google.com/mail/?view=cm&fs=1&to=seiif.dev@gmail.com&su=Hello&body=I want to contact you!",
                  "_blank"
                )
              }
              className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-purple-400 rounded-xl flex items-center gap-2"
            >
              <AiOutlineMail size={20} />
              Contact Me
            </motion.button>

            <div className="flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://github.com/seifmostafa78"
                target="_blank"
              >
                <AiOutlineGithub />
              </motion.a>

              <motion.a whileHover={{ scale: 1.2 }} href="#">
                <AiOutlineLinkedin />
              </motion.a>

              <motion.a whileHover={{ scale: 1.2 }} href="#">
                <AiOutlineInstagram />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.img
          src={profilepic}
          className="w-[300px] md:w-[450px] hidden md:block"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="flex flex-col md:flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24 gap-8"
      >
        <p className="text-gray-200">My Tech Stack</p>
        <div className="flex flex-wrap justify-center items-center gap-5">
          <DiHtml5 className="text-orange-600 mx-2" />
          <DiCss3 className="text-blue-600 mx-2" />
          <DiJavascript1 className="text-yellow-500 mx-2" />
          <DiReact className="text-blue-500 mx-2" />
          <SiNextdotjs
          size={58}
            className="text-black bg-gray-200 p-1 rounded-full mx-2"
          />
          <SiTypescript size={56} className="text-blue-600 mx-2" />
          <SiTailwindcss className="text-blue-400 mx-2" />
        </div>
      </motion.div>

      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  );
};

export default Hero;
