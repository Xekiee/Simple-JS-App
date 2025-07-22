const Card = ({ title, image }) => {
  return (
    <div>
      <div className="flex items-center justify-between card bg-base-100 w-auto h-50 shadow-sm opacity-80 ">
        <span className="card-title text-xs md:text-xl lg:text-3xl">
          {title}
        </span>
        <div className="card-body items-center text-center ">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </div>
        <div className="card-actions">
          <button className="btn btn-none h-5 mb-3 bg-transparent border border-primary px-4 py-4 rounded-2xl">
            <span className="text-xs">Demo </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
