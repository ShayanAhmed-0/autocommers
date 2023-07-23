import React from 'react'
import {BiSearch} from "react-icons/bi"
import Image from "next/image";
import im from "/public/Hero.png"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const Hero = () => {
  return (
    <div>
       <div className='mt-16'>
    <Image src={im} alt="bgpic" className='w-full h-[30vh] absolute '/>
    <div className='relative h-[35vh] items-center flex justify-center w-full'>

   <div className="flex items-center justify-center text-white border border-black rounded-r-full navc">
    <div className=''>
   <Select >
  <SelectTrigger className="w-auto lg:w-[250px] h-12">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent className='text-white navc'>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>
    </div>
    <input className='items-center w-full lg:w-[100vh] h-12 text-white navc pl-4 rounded-r-full border border-white ' type="text" placeholder="Search" />
    </div>
</div>
   </div>
    </div>
  )
}

export default Hero
