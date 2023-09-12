const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <>
      <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-6">
        <div className="flex items-center w-11 h-11  bg-coral-red rounded-full justify-center">
          <img src={imgURL} alt={label} width={24} height={24} />
        </div>
        <h3 className="text-3xl font-bold font-palanquin mt-5 leading-normal">
          {label}
        </h3>
        <p className="text-slate-gray mt-3 font-montserrat text-lg leading-normal">
          {subtext}
        </p>
      </div>
    </>
  );
};

export default ServiceCard;
