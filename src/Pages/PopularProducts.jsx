import { products } from "../constants";
import PopularProductCard from "./PopularProductCard";

const PopularProducts = () => {
  return (
    <>
      <section id="products" className="max-container max-sm:mt-12">
        <div className="flex flex-col gap-5 justify-start">
          <h2 className="font-bold text-4xl font-palanquin">
            Our <span className="text-coral-red">Popular</span> Products
          </h2>
          <p className="text-slate-gray font-montserrat lg:max-w-lg mt-2">
            Experience top-notch quality and style with our sought-after
            selections. Discover a world of comfort, design, and value.
          </p>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
            {products.map(product=>(
              <PopularProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularProducts;
