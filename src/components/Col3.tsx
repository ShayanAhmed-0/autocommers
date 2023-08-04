"use client"
import React, { useState } from 'react'
import Counter from './Counter'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const Col3 = ({price,id,Sizes,Colors}:{price:number,id:string,Sizes:string[],Colors:string[]}) => {
    const [sizes,setSizes]=useState(Sizes[0])
    const [color,setColor]=useState(Colors[0])
    const [T,setT]=useState(false)
    const [CT,setCT]=useState(false)
  return (
    <div>
        <div className='flex justify-between'>
            <h1>Price <span>{price}</span></h1>
            <h1>Was: <del>$123</del></h1>
        </div>
        <div>
           <button className='p-2 pl-5 pr-5 border-2' onClick={()=>T?setT(false):setT(true)}>{sizes}</button>
       {
        T && <div  className='absolute p-2 pl-5 pr-5 text-white bg-black '>
            <ul className='space-y-3'>
            {
                Sizes.map((i)=><li key={i}><button onClick={()=>setSizes(i)}>{i}</button></li>)
            }
            </ul>
        </div>
}

<button className='p-2 pl-5 pr-5 border-2' onClick={()=>CT?setCT(false):setCT(true)}>{color}</button>
       {
        CT && <div  className='absolute p-4 text-white bg-black ml-[57px] '>
            <ul className='space-y-3'>
            {
                Colors.map((i)=><li key={i}><button onClick={()=>setColor(i)}>{i}</button></li>)
            }
            </ul>
        </div>
}
        </div>
        <div>
        <Counter pId={id} size={sizes} color={color}/>
        </div>
    </div>
  )
}

export default Col3
