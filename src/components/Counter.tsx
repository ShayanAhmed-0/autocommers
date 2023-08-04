"use client"
import { useState } from 'react'
import { HiMiniShoppingCart } from "react-icons/hi2";

const Counter = () => {
    const [count, setCount] = useState(1)
    const HandleChange = (e: any) => {
        e.preventDefault()
        console.log(count)
    }
    return (
        <form onSubmit={HandleChange} className="">
<div className='flex justify-center'>
            
            <div className='space-y-4'>
                <input className='p-2 font-bold text-center text-black ' onChange={(e: any) => setCount(e.target.value)} value={count} type="number" id="quantity" name="quantity" min="1" max="20" />
                    <p className='text-xs tracking-widest text-black/50'>(Enter any Quantity between 1-20)</p>
            
            </div>
            <div>

            <div className='flex items-center w-full p-3 pl-8 pr-8 -mt-1 space-x-4 tracking-widest text-white duration-1000 bg-black cursor-pointer rounded-xl hover:border-black hover:border-2 hover:bg-white hover:text-black'>
<HiMiniShoppingCart size={20}/>
            <input className='' type="submit" value={"CheckOut"} />
            </div>
            </div>
</div>
        </form>

    )
}

export default Counter
