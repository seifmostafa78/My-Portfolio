import Reveal from "./Reveal";

const Contact = () => {
  return (
    <div className="px-6 md:px-12 max-w-[1000px] mx-auto md:my-12" id="contact">
      <Reveal>
        <div>
          <form
            action="https://getform.io/f/aolmzjob"
            method="POST"
            className="max-w-6xl"
            id="form"
          >
            <h2 className="text-3xl font-bold text-gray-200 mb-8">
              Let´s connect!
            </h2>
            <input
              type="text"
              id="name"
              placeholder="Your Name ..."
              name="name"
              className="mb-5 w-full rounded-md border border-purple-600 outline-none text-white py-2 pl-2 pr-4"
            />
            <input
              type="email"
              id="email"
              placeholder="Your Email ..."
              name="email"
              className="mb-5 w-full rounded-md border border-purple-600 outline-none text-white py-2 pl-2 pr-4"
            />
            <textarea
              name="textarea"
              id="textarea"
              cols="30"
              rows="4"
              placeholder="Your Message ..."
              className="mb-5 w-full rounded-md border border-purple-600 outline-none text-white py-2 pl-2 pr-4"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-purple-600 hover:bg-purple-800 transition-all duration-200 cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
