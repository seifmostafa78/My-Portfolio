import { FaGithubSquare, FaTiktok, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1300px] mx-auto border-t-1 border-gray-800 flex flex-wrap gap-5 justify-between p-6 md:p-12 text-sm md:text-lg mt-15">
      <div className="flex items-center text-gray-400 gap-2 h-fit">
        <FaEnvelope />
        <p>seiif.dev@gmail.com</p>
      </div>
      <div className="space-y-4">
        {/* <h3 className="text-2xl text-gray-200 font-semibold">SEIF MOSTAFA</h3> */}
        <div className="flex flex-row gap-6 text-gray-400 text-4xl">
          <a href="https://github.com/seifmostafa78" target="_blank">
            <FaGithubSquare />
          </a>
          <a href="https://www.tiktok.com/@seif.dev0" target="_blank">
            <FaTiktok />
          </a>
        </div>
      </div>
      <p className="text-gray-400">© 2025 SEIF MOSTAFA.</p>
    </div>
  );
};

export default Footer;
