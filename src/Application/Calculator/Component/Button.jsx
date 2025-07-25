const Button = ({ text, onClick }) => {
  return (
    <div>
      <button
        className="h-12 w-11 bg-none border-2 border-primary/40 rounded-xl flex justify-center items-center"
        onClick={onClick}
      >
        {text}{" "}
      </button>
    </div>
  );
};

export default Button;
