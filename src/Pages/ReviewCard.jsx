import { star } from "../assets/icons";
const ReviewCard = ({ customerName, imgURL, rating, feedback }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <img
          src={imgURL}
          alt="customer"
          className="w-[120px] h-[120px] object-contain rounded-full"
        />
        <p className="text-center max-w-sm info-text mt-6">{feedback}</p>
        <div className="flex gap-2 items-center mt-3">
          <img
            src={star}
            alt="rating"
            width={24}
            height={24}
            className="object-contain m-0"
          />
          <p className="text-slate-gray text-xl font-montserrat">({rating})</p>
        </div>
        <h3 className="font-bold text-3xl mt-1 text-center font-palanquin">
          {customerName}
        </h3>
      </div>
    </>
  );
};

export default ReviewCard;
