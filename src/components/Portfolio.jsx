import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import { AiFillGithub, AiOutlineGithub } from "react-icons/ai";
import Reveal from "./Reveal";

const projects = [
  {
    img: project1,
    title: "LinkedIn-Clone",
    description:
      "React LinkedIn Clone is a modern web app where users can create posts with text, images, or video links, mimicking LinkedIn's functionality. It features user authentication (login/logout).",
    links: {
      site: "https://linkedin-clone-59e13.web.app/",
      github: "https://github.com/seifmostafa78/React-linkedin-clone",
    },
  },
  {
    img: project2,
    title: "E-Commerce",
    description:
      "React E-commerce is a modern web app built with React, allowing users to add products to the cart and manage them by increasing, decreasing, or removing items.",
    links: {
      site: "https://e-commerce-app-mocha-mu.vercel.app/",
      github: "https://github.com/seifmostafa78/React-E-Commerce",
    },
  },
  {
    img: project3,
    title: "Admin-Dashboard",
    description:
      "A responsive Admin Dashboard built with React, featuring Light and Dark Mode. It includes interactive components like charts and tables.",
    links: {
      site: "https://admin-dashboard-ivory-pi-78.vercel.app/",
      github: "https://github.com/seifmostafa78/React-Admin-Dashboard",
    },
  },
  {
    img: project4,
    title: "E-Commerce",
    description:
      "React E-Commerce with Advanced Filtering allows users to search, filter by price and category, and fetch real-time product data via Axios.",
    links: {
      site: "https://e-commerce-rose-xi.vercel.app/",
      github: "https://github.com/seifmostafa78/E-commerce",
    },
  },
  {
    img: project5,
    title: "Movie App",
    description:
      "The React Movie App uses Axios for efficient API calls to fetch movie data and Redux Toolkit for seamless state management.",
    links: {
      site: "https://rtk-movie-app-mu.vercel.app/",
      github: "https://github.com/seifmostafa78/React-RTK-Movie-App",
    },
  },
  {
    img: project6,
    title: "Amazon-Clone",
    description:
      "Amazon Clone is a React e-commerce app with Firebase authentication, a shopping cart, and Stripe payments. Users can log in, add products, checkout securely, and view.",
    links: {
      site: "https://clone-ff829.web.app/",
      github: "https://github.com/seifmostafa78/Amazon-Clone",
    },
  },
];

const Portfolio = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-4 md:px-12 md:my-20" id="portfolio">
      <h2 className="text-3xl font-bold text-gray-200 mb-8">Portfolio</h2>
      {projects.map((project, index) => (
        <Reveal>
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } mb-12`}
          >
            <div className="w-full md:w-1/2 p-4">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <a
                  href={project.links.site}
                  target="_blank"
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300"
                >
                  View Site
                </a>
                <a
                  href={project.links.github}
                  target="_blank"
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300"
                >
                  <AiOutlineGithub />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default Portfolio;
