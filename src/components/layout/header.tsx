"use client";

import Image from "next/image";
import logo from "/public/logo.png"
import Link from "next/link";
import {BiSearch,BiCart} from "react-icons/bi"
// import { useUser, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import {LuAlignRight} from "react-icons/lu"
import {IoCloseOutline} from "react-icons/io5"
import { useState } from "react";




const Navbar = () => {
  const [open,setOpen] =useState(false)
  const [LAL,setLAL] =useState(false)
  const [EP,setEP] =useState(false)
  const [IP,setIP] =useState(false)
  const [CC,setCC] =useState(false)
  const [M,setM] =useState(false)
  const [U,setU] =useState(false)
  const [Other,setOther] =useState(false)


  // let components:string[]=["a","b","c"]
  let others:string[] = ['Jeep SUV and Bike', 'Bike Accessories', 'Jeep & Pickup Accessories', 'Jeep Lights', 'Storage Boxes', 'Keychains & Pouch', 'Keychains', 'Leather Key Covers', 'PVC Silicone Key Covers', 'Replacement Key Shell Cover', 'TPU Plastic Key Covers', 'Perfume & Fragrances', 'Aerosol Fresheners', 'Fancy Dashboard Perfumes', 'Gel & Wood Perfumes', 'Perfume Cards & Hangings', 'Perfume Diffusers and Ionisers', 'Vent & AC Perfumes', 'Security Gadgets', 'Anti-Theft Locks', 'Car Alarm', 'Parking Sensors', 'Spy Camera', 'Wheel', 'Alloy Rims', 'Brake Calliper Covers', 'Tire Pressure Monitoring System', 'Tyre Gauges', 'Tyre Valve Air Caps', 'Wheel Accessories', 'Wheel Centre Caps', 'Wheel Covers', 'Wheel Lugnuts', 'Wheel Tyres / Tires', 'Wheels Snow Chains', 'Bundle Offers & Flash Sale', 'Bundle Offers', 'Services ', 'Used Car Accessories']
  let LedAndLightening = ['Backlights/Backlamps', 'Bumper Fog Lamps', 'Day Time Running Lights', 'Dome/ Roof  SMD & LED', 'EL Glow Wires', 'Flasher Lights', 'Flexible DRL Switchbacks', 'Fog Lamp DRL Covers', 'Headlights/Headlamps', 'HID & LED Bulbs', 'Interior LED Lights', 'LED & Rubber Sill Plates', 'LED & SMD Lights', 'LED Bar Lights', 'LED Logos', 'Parking SMD & LED', 'Side Marker Lamps', 'Strip Lights', 'Switch & Buttons', 'Third Brake Lamps']
let ExteriorParts = ['Air Flows', 'Air Press & Sunvisors', 'Antenna', 'Bumper Protectors', 'Car Wraps , PPF & Tints', 'Chrome & Carbon Trims & Accessories', 'Chrome Handle Covers', 'Door Guards', 'Door Mouldings', 'License Number Plates & Frames', 'Monograms & Emblems', 'Mud Flaps & Spare Parts', 'Number Plate Tilter', 'Stickers', 'Window Chrome Weather Strips']
let INTERIORPARTS = ['Anti-Skid Nonslip Dashboard Mats', 'Arm Rests & Cushions', 'Ashtray', 'Back & Neck Care Cushions', 'Car Organisers & Accessories', 'Carpet Floor Mats', 'Console Box', 'Custom Fit PVC & Rubber Floor Mats', 'Dashboard Carpet', 'Dashboard Interior Decoration', 'Floor Mats 10D', 'Floor Mats 5D', 'Floor Mats 7D', 'Floor Mats 7D Eco', 'Floor Mats 8D', 'Floor Mats 9D', 'Floor Matting 7D & Rexine', 'Gear & Hand Brake Covers', 'Gear Shift Knobs', 'Hangings', 'Interior Chrome Trim & Accessories\t', 'Interior Protection Gadgets', 'Interior Protection Mats', 'Seat Belt Clips', 'Seat belts and Accessories', 'Seat Covers', 'Steering Wheel Covers', 'Sun Shades', 'Tissue Box', 'Trunk Mat 10D', 'Trunk Mat 5D', 'Trunk Mat 7D', 'Trunk Mat Foam PE+EVA', 'Universal PVC & Rubber Floor Mats']

let CARCARE = ['Additives & Lubricant Treatments', 'All Purpose Cleaners', 'Anti-Rust Sprays', 'Blowers & Tools', 'Car Care Gadgets', 'Car Glass & Ceramic Coatings', 'Car Polish & Wax', 'Car Shampoos Wash & Wax', 'Color Specified Wax', 'Detailing Brushes', 'Detailing Car Washers and Machines', 'Engine & Carburettor Cleaners', 'Interior Cleaning Polishes', 'Leather & Upholstery Cleaners', 'Micro Fiber Cloth & Accessories', 'Oil Performance & Engine Oil', 'Polisher Machine & Buffers', 'Radiator Coolants', 'Scratch & Paint Pen', 'Scratch & Swirls Restore', 'Screen Cleaning Wipers', 'Spray Paints', 'Steam Cleaners', 'Trims Restorer and Cleaner', 'Wheel & Tyre ', 'Windshield & Glass Wash']
let MOBILE = ['Charging Cables', 'Mobile Chargers | Charging Sockets', 'Mobile Holders', 'Power Banks']
let UTILITIES = ['Car Batteries | Car Remote Cells', 'Car Fridge', 'Car Hydraulic Lifting Jacks', 'Car Insulators | Liners', 'Double Sided  Tape & Adhesives', 'Horns & Sirens', 'Portable Fans & Heaters', 'Spare Wheel Covers', 'Tire Air Compressor Inflators', 'Top Covers', 'Vacuum Cleaner', 'Wiper Blades']
//   const { isSignedIn } = useUser();
  return (
    <div className="flex items-center justify-between p-4 mx-8 my-6 rounded-full shadow-lg shadow-black navc">
      <Link href={"/"}>
      <Image src={logo} alt="navbarImg" height={50} className="rounded-full" />
      </Link>
      <div className="hidden text-lg font-semibold lg:flex gap-x-10 ">

<div>
  <button onClick={()=>{
    if(LAL){
      setLAL(false)
    }else{
      setLAL(true)
      setEP(false)
      setIP(false)
      setCC(false)
      setM(false)
      setU(false)
      setOther(false)
    }
  }
    // ()=>LAL?setLAL(false):setLAL(true)
    }>
  LedAndLightening
  </button>
{
  !EP && !IP && !CC && !M && !U && LAL && !Other && 
  <div className="absolute left-0 z-10 justify-center w-full mt-10 ">
  <div className="flex justify-center">
  <ul className="grid grid-cols-4 p-4 pl-10 mt-2 bg-black/70 gap-x-10 gap-y-8">
      {
        LedAndLightening.map((items)=>{
          return(
            <li key={items} className="list-disc">{items}</li>
            )
          })
        }
    </ul>
  </div>
  </div>
}
</div>

<div>
  <button onClick={()=>{
    if(EP){
      setEP(false)
    }else{
      setLAL(false)
      setEP(true)
      setIP(false)
      setCC(false)
      setM(false)
      setU(false)
      setOther(false)
    }
  }}>
  ExteriorParts
  </button>
{
  EP && !IP && !CC && !M && !U && !LAL && !Other && 
  <div className="absolute left-0 z-10 justify-center w-full mt-10 ">
    <div className="flex justify-center">
    <ul className="grid grid-cols-4 p-4 pl-10 mt-2 bg-black/70 gap-x-10 gap-y-8">
      {
        ExteriorParts.map((items)=>{
          return(
            <li key={items} className="list-disc">{items}</li>
            )
          })
        }
    </ul>
        </div>
      </div>
}
</div>

<div>
  <button onClick={()=>{
    if(IP){
      setIP(false)
    }else{
      setLAL(false)
      setEP(false)
      setIP(true)
      setCC(false)
      setM(false)
      setU(false)
      setOther(false)
    }
  }}>
  INTERIORPARTS
  </button>
{
  !EP && IP && !CC && !M && !U && !LAL && !Other &&
  <div className="absolute left-0 z-10 justify-center w-full mt-10 ">
    <div className="flex justify-center">
    <ul className="grid grid-cols-4 p-4 pl-10 mt-2 bg-black/70 gap-x-10 gap-y-8">
      {
        INTERIORPARTS.map((items)=>{
          return(
            <li key={items} className="list-disc">{items}</li>
            )
          })
        }
    </ul>
        </div>
  </div>
}
</div>

<div>
  <button onClick={()=>{
    if(CC){
      setCC(false)
    }else{
      setLAL(false)
      setEP(false)
      setIP(false)
      setCC(true)
      setM(false)
      setU(false)
      setOther(false)
    }
  }}>
  CARCARE
  </button>
{
  !EP && !IP && CC && !M && !U && !LAL && !Other &&
  <div className="absolute left-0 z-10 justify-center w-full mt-10 ">
    <div className="flex justify-center">
    <ul className="grid grid-cols-4 p-4 pl-10 mt-2 bg-black/70 gap-x-10 gap-y-8">
      {
        CARCARE.map((items)=>{
          return(
            <li key={items} className="list-disc">{items}</li>
            )
          })
        }
    </ul>
        </div>
  </div>
}
</div>

<div>
  <button onClick={()=>{
    if(M){
      setM(false)
    }else{
      setLAL(false)
      setEP(false)
      setIP(false)
      setCC(false)
      setM(true)
      setU(false)
      setOther(false)
    }
  }}>
  MOBILE
  </button>
{
  !EP && !IP && !CC && M && !U && !LAL && !Other &&
  <div className="absolute left-0 z-10 justify-center w-full mt-10 ">
    <div className="flex justify-center">
    <ul className="grid grid-cols-4 p-4 pl-10 mt-2 bg-black/70 gap-x-10 gap-y-8">
      {
        MOBILE.map((items)=>{
          return(
            <li key={items} className="list-disc">{items}</li>
            )
          })
        }
    </ul>
        </div>
  </div>
}
</div>

<div>
  <button onClick={()=>{
    if(U){
      setU(false)
    }else{
      setLAL(false)
      setEP(false)
      setIP(false)
      setCC(false)
      setM(false)
      setU(true)
      setOther(false)
    }
  }}>
  UTILITIES
  </button>
{
!EP && !IP && !CC && !M && U && !LAL && !Other && 
<div className="absolute left-0 z-10 justify-center w-full mt-10 ">
<div className="flex justify-center">
<ul className="grid grid-cols-4 p-4 pl-10 mt-2 bg-black/70 gap-x-10 gap-y-8">
      {
        UTILITIES.map((items)=>{
          return(
            <li key={items} className="list-disc">{items}</li>
            )
          })
        }
    </ul>
        </div>
  </div>
}
</div>

<div>
  <button onClick={()=>{
    if(Other){
      setOther(false)
    }else{
      setLAL(false)
      setEP(false)
      setIP(false)
      setCC(false)
      setM(false)
      setU(false)
      setOther(true)
    }
  }}>
  others
  </button>
{
  !EP && !IP && !CC && !M && !U && !LAL && Other &&
  <div className="absolute left-0 z-10 justify-center w-full mt-10 ">
    <div className="flex justify-center">
    <ul className="grid grid-cols-4 p-4 pl-10 mt-2 bg-black/70 gap-x-10 gap-y-8">
      {
        others.map((items)=>{
          return(
            <li key={items} className="list-disc">{items}</li>
            )
          })
        }
    </ul>
        </div>
  </div>
}
</div>
</div>
     

<button className="absolute lg:hidden sm:right-28 right-12" onClick={()=>open?setOpen(false):setOpen(true)
}>
{
  open?(
    <IoCloseOutline size={22}/>
    ):
    (
    <LuAlignRight size={22}/>
  )
}
</button>

<div className="hidden mr-0 lg:mr-0 sm:flex">
<div className="flex items-center p-2 pl-4 pr-4 rounded-full gap-x-4">
            <h1 className="flex items-center justify-center text-black bg-gray-300 rounded-full w-9 h-9">
            <BiCart size={22}/>
            </h1>
          </div>
</div>

{/* hamburger options */}
{
  open && <div className="absolute z-10 p-4 space-y-4 mt-60 right-4 bg-slate-900 rounded-3xl">
    <div className="flex justify-center mr-0 lg:mr-0 sm:hidden">
<div className="flex items-center pl-4 pr-4 rounded-full">
            <h1 className="flex items-center justify-center text-black bg-gray-300 rounded-full w-9 h-9">
            <BiCart size={22}/>
            </h1>
          </div>
</div>
     <ul className="text-lg font-semibold lg:hidden">
        <Link href={"/Category/Female"}>
          <li className="flex justify-center">LedAndLightening</li>
        </Link>
        <Link className="flex justify-center" href={"/Category/Male"}>
          <li>ExteriorParts</li>
        </Link>
        <Link className="flex justify-center"  href={"/Category/Kids"}>
          <li>INTERIORPARTS</li>
        </Link>
        <Link className="flex justify-center"  href={"/Category/All-Products"}>
          <li>CARCARE</li>
        </Link>
        <Link className="flex justify-center"  href={"/Category/All-Products"}>
          <li>MOBILE</li>
        </Link>
        <Link className="flex justify-center"  href={"/Category/All-Products"}>
          <li>UTILITIES</li>
        </Link>
        <Link className="flex justify-center"  href={"/Category/All-Products"}>
          <li>others</li>
        </Link>
      </ul>

  </div>
}


    </div>
  );
};

export default Navbar;
