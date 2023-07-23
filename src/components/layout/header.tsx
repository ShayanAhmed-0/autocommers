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
//   const { isSignedIn } = useUser();
  return (
    <div className="flex items-center justify-between p-4 mx-8 my-6 rounded-full navc">
      <Link href={"/"}>
      <Image src={logo} alt="navbarImg" height={50} className="rounded-full" />
      </Link>
      <ul className="hidden text-lg font-semibold lg:flex gap-x-10 ">
        <Link href={"/Category/Female"}>
          <li>Link#1</li>
        </Link>
        <Link href={"/Category/Male"}>
          <li>Link#2</li>
        </Link>
        <Link href={"/Category/Kids"}>
          <li>Link#3</li>
        </Link>
        <Link href={"/Category/All Products"}>
          <li>Link#4</li>
        </Link>
      </ul>

{/* search */}
{/* <div className="items-center justify-center hidden border-2 lg:flex gap-x-2">
<BiSearch/>
<input type="text" placeholder="Search"/>
</div> */}



      {/* sign buttons */}
      {/* <div className="hidden mr-10 lg:mr-0 sm:flex">
        {isSignedIn ? (
          <div className="flex items-center p-2 pl-4 pr-4 bg-gray-400 rounded-full gap-x-4">
            <h1 className="flex items-center justify-center bg-gray-300 rounded-full w-9 h-9">
            <BiCart size={18}/>
            </h1>
           <UserButton/>
          </div>
        ) : (
          <div className="flex gap-x-5 ">
            <Button  className="bg-blue-200 rounded-xl hover:bg-blue-300">
              <Link href={"/SignUp"}>SignUp</Link>
            </Button>
            <Button className="bg-blue-200 rounded-xl hover:bg-blue-300">
              <Link href={"/SignIn"}>SignIn</Link>
            </Button>
          </div>
        )}
      </div> */}

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
          <li className="flex justify-center">Female</li>
        </Link>
        <Link className="flex justify-center" href={"/Category/Male"}>
          <li>Male</li>
        </Link>
        <Link className="flex justify-center"  href={"/Category/Kids"}>
          <li>Kids</li>
        </Link>
        <Link className="flex justify-center"  href={"/Category/All-Products"}>
          <li>All Products</li>
        </Link>
      </ul>

  </div>
}


    </div>
  );
};

export default Navbar;
