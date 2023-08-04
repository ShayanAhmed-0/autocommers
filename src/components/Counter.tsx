"use client"
import { useState } from 'react'
import { HiMiniShoppingCart } from "react-icons/hi2";



const Counter = ({pId,size,color}:{pId:string,size:string,color:string}) => {
    const [count, setCount] = useState(1)
    const HandleChange = async(e: any) => {
        e.preventDefault()
            const res = await fetch("/api/cart",{
              method: "POST",
              body: JSON.stringify({
                product_id:pId,
                quantity:count,
                color:color,
                size:size
              })
            })
            const result= await res.json()
          }
    return (
        <form onSubmit={HandleChange} className="">
<div className='flex justify-center'>
            
            <div className='space-y-4'>
                <label htmlFor="">Quantity</label>
                <input className='p-2 ml-2 font-bold text-center text-black ' onChange={(e: any) => setCount(e.target.value)} value={count} type="number" id="quantity" name="quantity" min="1" max="20" />
                    <p className='text-xs tracking-widest text-black/50'>(Enter any Quantity between 1-20)</p>
            
            </div>
            <div>

            <div className='flex items-center w-full p-3 pl-8 pr-8 mt-3 space-x-4 tracking-widest text-white duration-1000 bg-black cursor-pointer rounded-xl hover:border-black hover:border-2 hover:bg-white hover:text-black'>
<HiMiniShoppingCart size={20}/>
            <input className='' type="submit" value={"CheckOut"} />
            {/* <p>your color is: {color} and your size is: {size} and the quantity is: {count}</p> */}
            </div>
            </div>
</div>
        </form>

    )
}

export default Counter
