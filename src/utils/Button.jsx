const Button = ({ className, label, icon, textColor }) => {
  return (
    <>
      <button
        className={`${className} flex justify-center items-center font-montserrat gap-2`}
      >
        <span className={`${textColor ?? ""}`}>{label}</span>
        {icon && (
          <img src={icon} alt="" className="ml-2 rounded-full w-5 h-5" />
        )}
      </button>
    </>
  );
};

export default Button;
