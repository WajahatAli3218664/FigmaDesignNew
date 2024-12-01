import * as React from "react";
import { NavigationItem } from "./types";

const navigationItems: NavigationItem[] = [
  { label: "Home", link: "/" },
  { label: "Case Studies", link: "/case-studies" },
  { label: "Testimonials", link: "/testimonials" },
  { label: "Recent work", link: "/work" },
  { label: "Get In Touch", link: "/contact" }
];

export const NavigationBar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between px-20 w-full h-[78px] bg-zinc-900 text-neutral-400 rounded-lg max-md:px-5 max-md:w-full max-md:h-[60px] max-md:flex-col max-md:items-center">
      {/* Navigation Items */}
      <div className="flex gap-10 items-center max-md:flex-col max-md:gap-4">
        {navigationItems.map((item, index) => (
          <a
            key={item.label}
            href={item.link}
            className={`hover:text-white focus:text-white focus:outline-none ${
              index < navigationItems.length - 1 ? "mr-5" : ""
            } max-md:mr-0 max-md:text-center`}
            tabIndex={0}
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Logo */}
      <div className="flex justify-center max-md:mt-4">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/5b27713b954a4bd98f91d2d083906fe1/3c01ab42c5256028e2f6f00a6db97f41f4bd4207198bd69350fdaebff487eff3?apiKey=5b27713b954a4bd98f91d2d083906fe1&"
          alt="Company logo"
          className="object-contain max-w-[200px] max-md:max-w-[150px]"
        />
      </div>
    </nav>
  );
};
