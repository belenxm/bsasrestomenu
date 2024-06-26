import React from "react";
import Image from "next/image";
import Right from "../icons/Right";

const Hero = () => {
  return (
    <section className="hero mt-12">
      <div className="py-8">
        <h1 className="text-4xl font-semibold leading-10">
          Everything<br/> 
          is better<br/>
          with a <span className="text-primary">Pizza</span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="flex gap-4">
          <button className="bg-primary uppercase flex gap-2 items-center text-white px-4 py-2 rounded-full text-xs">Order now
            <Right />
          </button>
          <button className="flex gap-2 py-2 text-gray-700 font-semibold">Learn more
            <Right />
          </button>
        </div>
      </div>

      <div className="relative">
        <Image
          src={"/pizza.png"}
          layout={"fill"}
          objectFit={"contain"}
          alt={"food"}
        />
      </div>
    </section>
  );
};

export default Hero;
