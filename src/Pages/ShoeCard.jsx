const ShoeCard = ({ bigShoeImg, imgUrl, changeBigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgUrl) {
      changeBigShoeImg(imgUrl.bigShoe);
    }
  };
  return (
    <>
      <div
        className={`border-2 rounded-xl ${
          bigShoeImg.toString() === imgUrl.bigShoe.toString() ? "border-coral-red" : "border-transparent"
        } cursor-pointer max-sm:flex-1`}
        onClick={handleClick}
      >
        <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 roudned-xl max-sm:p-4">
          <img
            src={imgUrl.thumbnail}
            alt="shoe collection"
            width={127}
            height={103}
            className="object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default ShoeCard;
