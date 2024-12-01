"use client"; 
import * as React from "react";
import { NavigationBar } from "../app/components/NavigationBar";
import { HeroButton } from "../app/components/HeroButton";
import { WorkedWith } from "../app/components/WorkedWith"; // Add this import

const Page: React.FC = () => {
  const handleGetStarted = () => {
    // Handle click event
  };

  return (
    <div className="flex flex-col bg-zinc-950 min-h-screen">
      <div className="flex flex-col w-full px-20 pb-11 bg-zinc-950 max-md:px-5 max-md:max-w-full">
        <NavigationBar />
        <div className="self-center mt-20 w-full max-w-[920px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {/* Left section */}
            <div className="flex flex-col w-[61%] max-md:w-full">
              <div className="flex flex-col justify-center items-start self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col max-w-full w-[492px]">
                  <div className="text-5xl font-extrabold text-white w-full max-md:text-4xl max-md:text-center">
                    Your Name Here
                  </div>
                  <div className="mt-2.5 text-sm tracking-normal leading-6 text-[#9C9C9C] max-md:max-w-full max-md:text-center">
                    Intro text: Lorem ipsum dolor sit amet, consectetur <br />
                    adipiscing elit, sed do eiusmod tempor incididunt ut <br />
                    labore et dolore magna aliqua.
                  </div>
                </div>
                <HeroButton label="Let's get started" onClick={handleGetStarted} />
              </div>
            </div>
            {/* Right section (Image) */}
            <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/5b27713b954a4bd98f91d2d083906fe1/effe0d26f9696d72bc54d9389f1271fbf62658c3711cf0cbb5a8975307dbe3d4?apiKey=5b27713b954a4bd98f91d2d083906fe1&"
                alt="Profile image"
                className="object-contain w-full aspect-square max-md:mt-8 max-md:w-full"
              />
            </div>
          </div>
        </div>
        <WorkedWith /> {/* Add WorkedWith component here */}
      </div>
    </div>
  );
};

export default Page;
