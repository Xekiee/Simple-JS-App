import { Link } from "react-router-dom";

const Card = ({ title, image, link }) => {
  return (
    <div>
      <div className="flex items-center justify-between card bg-base-100 w-auto h-50 shadow-sm opacity-80 md:h-80 lg:h-100 lg:mr-5 ">
        <span className="card-title text-xs mt-3 md:text-xl lg:text-3xl">
          {title}
        </span>
        <div className="card-body items-center text-center h-10 w-25 md:w-37 md:h-15 lg:w-43 lg:h-20">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </div>
        <div className="card-actions">
          <Link to={link}>
            <button className="btn btn-none h-3 mb-3 bg-transparent border-2 border-base-content px-4 py-4 text-xs rounded-2xl hover:bg-base-content hover:text-base-100 transition-colors duration-200">
              <span>Demo </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
