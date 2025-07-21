import React from "react";

const Link = () => {
  return (
    <div className="flex flex-col items-center bg-base-100 w-auto h-30 mx-4 my-8 rounded-2xl md:h-70 md:mx-10 md:my-10 lg:my-12 lg:mx-16 lg:h-110">
      <div className="flex text-base mt-2 md:text-3xl md:mt-8 md:mb-8 lg:text-6xl lg:mt-10 lg:mb-10">
        <i className="bi bi-lightbulb-fill text-yellow-400 mr-4"></i>
        <p>Learn JavaScript by building!</p>
      </div>
      <div>
        <div className="flex  justify-center mx-10 my-2 text-base md:text-3xl md:mx-30 md:my-6 lg:mx-45 lg:my-10 lg:text-5xl ">
          <i className="bi bi-link mr-4 "></i>
          <a href="">Github</a>
        </div>
        <hr className="w-auto mx-auto border-t-2 border-black-800 mb-2 md:border-t-4 lg:border-t-6" />
        <div className="flex  justify-center mx-10 my-2 text-base md:text-3xl md:mx-30 md:my-6 lg:mx-45 lg:my-10 lg:text-5xl ">
          <i className="bi bi-link mr-4"></i>
          <a href="">Porfolio</a>
        </div>
      </div>
    </div>
  );
};

export default Link;
