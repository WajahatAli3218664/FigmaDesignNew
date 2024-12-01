import * as React from "react";

export const WorkedWith: React.FC = () => {
  return (
    <div className="flex flex-col items-end px-20 py-10 bg-zinc-950">
      <div className="self-start mt-14 ml-16 text-sm text-white max-md:mt-10 max-md:ml-2.5">
        Worked with
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/5b27713b954a4bd98f91d2d083906fe1/ead698830f95283f11e389b6f894f872ac27ae98e7563959e87f00010510e36b?apiKey=5b27713b954a4bd98f91d2d083906fe1&"
        alt="Logos of companies we've worked with"
        className="object-contain mt-5 aspect-[15.38] max-w-full w-[920px] max-md:w-full ml-auto"
      />
    </div>
  );
};
