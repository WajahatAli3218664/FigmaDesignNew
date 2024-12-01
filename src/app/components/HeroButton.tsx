"use client"; // Ensure this directive is at the top of your file

import * as React from "react";
import { HeroButtonProps } from "./types";

// Define the HeroButton component
export const HeroButton: React.FC<HeroButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex gap-2.5 items-center justify-center w-[307.89px] h-[63px] mt-8 text-base font-bold text-[#FFFFFF] bg-[#3C760D] rounded border border-[#3C760D] border-solid shadow-[0px_8px_30px_rgba(63,142,0,0.5)] max-md:w-full max-md:px-5 max-md:py-3"
    >
      <span className="text-[21px]">{label}</span>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/5b27713b954a4bd98f91d2d083906fe1/136563ca6d83bebd6e68840bd858aeb3c3984c26f9331af020d50cc0092ae0da?apiKey=5b27713b954a4bd98f91d2d083906fe1&"
        alt="Button Icon"
        className="object-contain shrink-0 self-stretch my-auto w-1.5 aspect-[0.6]"
      />
    </button>
  );
};
