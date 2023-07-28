import React from "react";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";
import im from "/public/Hero.webp";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Hero = () => {
  return (
    <div>
      <div className="mt-10">
        <Image src={im} alt="bgpic" className='w-full h-[50vh] absolute '/>
        <div className="py-1 bg-white/40"></div>
        <div className="relative h-[35vh] items-center flex justify-center w-full">
          <div>
            <div className="pb-6">
              <h1 className="flex justify-center mb-4 text-3xl font-extrabold md:text-5xl lg:text-6xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-zinc-400 via-red-50 from-zinc-400">
                  Better Data
                </span>
              </h1>
            </div>

            <div className="flex items-center justify-center text-white rounded-r-full shadow-lg navc shadow-black">
              <div className="">
                <Select>
                  <SelectTrigger className="w-auto lg:w-[250px] h-16 text-2xl border-none">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent className="text-white navc">
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <input
                className="items-center w-full lg:w-[100vh] text-xl h-16 text-white navc pl-4 rounded-r-full"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
