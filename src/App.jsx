import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
