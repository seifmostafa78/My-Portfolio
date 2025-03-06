import { useState } from "react";
import grid1 from "../assets/grid1.png";
import grid4 from "../assets/grid4.png";
import copy from "../assets/copy.svg";
import tick from "../assets/tick.svg";
import Reveal from "./Reveal";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("seifmostafaa49@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <div
      className="max-w-[1200px] mx-auto flex justify-center px-4 text-gray-200 pb-8 md:py-12"
      id="about"
    >
      <Reveal>
        <h2 className="text-3xl font-bold mb-8 text-center">About</h2>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
          <div className="col-span-1">
            <div className="grid-container">
              <img
                src={grid1}
                alt="grid-1"
                className="w-full sm:h-[276px] h-fit object-contain"
              />

              <div>
                <p className="grid-headtext">Hi, I’m Seif Mostafa</p>
                <p className="grid-subtext">
                  Junior React Front-End Developer with skills in HTML, CSS,
                  JavaScript, and React library. Experienced in developing
                  interactive applications and modifying user interfaces.
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <div className="grid-container flex flex-col justify-evenly">
              <div>
                <p className="grid-headtext">
                  I’m very flexible with time zone communications & locations
                </p>
                <p className="grid-subtext">
                  I&apos;m based in Cairo, Egypt and open to remote work
                  worldwide.
                </p>
              </div>
              <img
                src={grid4}
                alt="grid-4"
                className="w-full md:h-[225px] sm:h-[276px] h-fit object-cover sm:object-top"
              />
              <div className="space-y-2">
                <p className="grid-subtext text-center">Contact me</p>
                <div className="copy-container" onClick={handleCopy}>
                  <img src={hasCopied ? tick : copy} alt="copy" />
                  <p className="lg:text-2xl md:text-xl font-medium text-white opacity-[0.7]">
                    seifmostafaa01@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default About;
