import Button from "../utils/Button";

const Subscribe = () => {
  return (
    <>
      <section
        className="max-container flex justify-between items-center max-lg:flex-col max-lg:justify-start gap-10"
        id="contact-us"
      >
        <h3 className="font-bold font-palanquin text-4xl lg:max-w-lg leading-[68px]">
          Sign Up From
          <span className="text-coral-red"> Update </span>& Newsletter
        </h3>
        <div className="w-full flex items-center lg:w-[40%] max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
          <input
            type="text"
            placeholder="subscribe@nike.com"
            className="input rounded-full"
          />
          <div className="flex justify-center max-sm:w-full max-sm:justify-end">
            <Button
              label={"Sign Up"}
              className="px-7 py-4 border text-lg leading-none text-white bg-coral-red rounded-full border-coral-red w-full flex-1"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Subscribe;
