import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../utils/Button";

const SpecialOffers = () => {
  return (
    <>
      <section className="flex justify-center items-center max-xl:flex-col-reverse gap-10 max-container">
        <div className="flex-1">
          <img
            src={offer}
            alt="offer"
            width={773}
            height={687}
            className="object-contain w-full"
          />
        </div>
        <div className="flex flex-col flex-1">
          <h2 className=" text-4xl font-palanquin capitalize font-bold lg:max-w-lg">
            <span className="text-coral-red inline-block mt-7">Special</span>
            Offer
          </h2>
          <p className="mt-6 lg:max-w-lg info-text">
            Embark on shopping journey that redefines your experience with
            unbeatable deals From premier selections to incredible savings, we
            offer unparalled value that set us apart.
          </p>
          <p className="mt-6 lg:max-w-lg info-text">
            Navigate a realm possibilities designed to fulfilled your unique
            desires, surpassing the loftiest expectations. Your journey with us
            is nothing short of exceptional.
          </p>
          <div className="mt-11 flex gap-6">
            <Button
              label="Shop Now"
              icon={arrowRight}
              className="px-7 py-4 border text-lg leading-none text-white bg-coral-red rounded-full border-coral-red"
            />
            <Button
              label="Learn more"
              className="px-7 py-4 border text-lg leading-none text-white bg-white rounded-full border-slate-gray"
              textColor='text-slate-gray'
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SpecialOffers;
