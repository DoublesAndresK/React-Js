import Button from "../utils/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "./ShoeCard";
import { useState } from "react";

const Hero = () => {
  const [cgShoe, setCgShoe] = useState(bigShoe1);
  const handleChangeImg = (imgShoe) => {
    setCgShoe(imgShoe);
  };
  return (
    <>
      <section
        className="w-full flex xl:flex-row flex-col justify-center min-h-screen max-container gap-10"
        id="home"
      >
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-36">
          <p className="text-coral-red text-xl font-montserrat">
            Our Summer Collection
          </p>
          <h1 className="mt-10 text-8xl font-palanquin max-sm:text-[72px] max-sm:leading-[82] font-bold">
            <span className="xl:bg-white pr-10 z-10 relative xl:whitespace-nowrap">
              The New Arrival
            </span>
            <br />
            <span className="text-coral-red inline-block mt-7">Nike</span>Shoes
          </h1>
          <p className="mt-6 font-montserrat text-slate-gray text-lg leading-8 mb-14 sm:max-w-sm">
            Discover stylish Nike arrivals, quality comfort and innovation for
            your active life.
          </p>
          <Button
            label="Shop Now"
            icon={arrowRight}
            className="px-7 py-4 border text-lg leading-none text-white bg-coral-red rounded-full border-coral-red"
          />
          <div className="w-full flex justify-start items-start flex-wrap mt-20 gap-16">
            {statistics.map((statistic, index) => (
              <div key={index}>
                <p className="font-bold font-palanquin text-4xl">
                  {statistic.value}
                </p>
                <p className="text-slate-gray font-montserrat leading-7">
                  {statistic.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative justify-center items-center flex flex-1 xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
          <img
            src={cgShoe}
            alt="shoe"
            width={610}
            height={500}
            className="object-contain z-10"
          />
          <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
            {shoes.map((shoe, index) => (
              <div className="" key={index}>
                <ShoeCard
                  bigShoeImg={cgShoe}
                  changeBigShoeImg={handleChangeImg}
                  imgUrl={shoe}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
