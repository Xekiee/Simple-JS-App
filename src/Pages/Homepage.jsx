import { Routes, Route } from "react-router-dom";
import Footer from "../Components/Footer";
import Link from "../Components/Link";
import List from "../Components/List";
import Navbar from "../Components/Navbar";
import { ThemeProvider } from "../Components/LDContext";
const Homepage = () => {
  return (
    <ThemeProvider>
      <div className="bg-base-200 bg-center w-screen h-full">
        <div>
          <Navbar />
        </div>
        <hr className="w-[95%] mx-auto border-t-3 border-black-800 mt-8 mb-2 md:border-t-4 lg:border-t-6" />
        <div>
          <p className="text-center text-2xl font-bold mb-10 text-base-content md:text-4xl md:mb-12 lg:text-6xl lg:mb-14">
            App List
          </p>
          <List />
          <hr className="w-[95%] mx-auto border-t-3 border-black-800 mt-8 mb-2 md:border-t-4 lg:border-t-6" />
        </div>
        <div>
          <Link />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Homepage;
