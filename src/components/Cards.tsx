import Image from "next/image";
import React,{FC} from "react";
import im from "/public/Hero.webp";
import { AiFillStar } from "react-icons/ai";
import { urlForImage } from '../../sanity/lib/image'

const Cards:FC<{item:any}> = ({item}) => {
  return (
    <div className="flex">
      <div className="p-4 duration-500 bg-slate-900 rounded-xl hover:scale-110">
      {item.image?.asset && (
          <Image
          className=""
          src={urlForImage(item.image).url()}
          alt="Card Image"
          width={350}
          height={485}
          />
          )}
        <div className="space-y-1">
<h1 className="flex items-center gap-2 mt-2 text-white/50"><AiFillStar className="text-red-400"/><span>4.60 
        </span>
    <span>
        India</span></h1>
        
          <h1 className="text-white cursor-pointer hover:text-purple-700">Lorem ipsum dolor</h1>
          <h2 className="text-white">240$</h2>
          <div className="flex items-center justify-between gap-4">
            <ul className="flex gap-4">
              <li className="w-3 h-3 bg-blue-500 rounded-full hover:outline-blue-500 hover:outline outline-offset-2 outline-1"></li>
              <li className="w-3 h-3 bg-yellow-500 rounded-full hover:outline-yellow-500 hover:outline outline-offset-2 outline-1"></li>
              <li className="w-3 h-3 bg-red-500 rounded-full hover:outline-red-500 hover:outline outline-offset-2 outline-1"></li>
              <li className="w-3 h-3 bg-green-500 rounded-full hover:outline-green-500 hover:outline outline-offset-2 outline-1"></li>
            </ul>
            <h1 className="flex gap-4 text-white/30">
              Size
              <div>
                <ul className="flex gap-4 text-white/50">
                  <li className="cursor-pointer hover:text-purple-700">S</li>
                  <li className="cursor-pointer hover:text-purple-700">M</li>
                  <li className="cursor-pointer hover:text-purple-700">L</li>
                  <li className="cursor-pointer hover:text-purple-700">XL</li>
                </ul>
              </div>
            </h1>
          </div>
          <div className="flex items-center justify-center gap-4 pt-4">
            <button className="p-2 pl-6 pr-6 text-white bg-pink-400 rounded-xl">
              Button
            </button>
      
          </div>
        </div>
     
     </div>
      </div>

  );
};

export default Cards;
