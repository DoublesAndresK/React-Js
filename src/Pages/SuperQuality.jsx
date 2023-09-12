import { shoe8 } from "../assets/images";
import Button from "../utils/Button";

const SuperQuality = () => {
  return (
    <>
      <section
        id="about-us"
        className="w-full flex max-container gap-10 max-lg:flex-col max-lg:justify-start justify-between items-center"
      >
        <div className="flex flex-col flex-1">
          <h2 className=" text-4xl font-palanquin capitalize font-bold lg:max-w-lg">
            We Provide You
            <span className="text-coral-red inline-block mt-7 mx-2">Super</span>
            <span className="text-coral-red inline-block mt-7">
              Quality </span>{" "}
            Shoes
          </h2>
          <p className="mt-6 lg:max-w-lg info-text">
            Ensuring premium comfort and style, our meticulously crafted
            footwear is designed to elevate your experience, providing you with
            unmatched quality innovation, and a touch of elegance.
          </p>
          <p className="mt-6 lg:max-w-lg info-text">
            Our dedication to detail and excellence ensures your satisfication
          </p>
          <div className="mt-11">
            <Button
              label="Shop Now"
              className="px-7 py-4 border text-lg leading-none text-white bg-coral-red rounded-full border-coral-red"
            />
          </div>
        </div>
        <div className="flex flex-1 justify-center items-center">
          <img
            src={shoe8}
            className="object-contain"
            width={570}
            height={520}
            alt="superquality"
          />
        </div>
      </section>
    </>
  );
};

export default SuperQuality;
