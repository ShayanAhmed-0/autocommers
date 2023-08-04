import React from 'react'
// import Cards from '@/components/Cards';
import Image from "next/image";
import { client } from "@/lib/sanityClient";
import { Image as IImage } from "sanity";
import { urlForImage } from '../../../../sanity/lib/image';
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import Counter from '@/components/Counter';
// import Hero from '@/view/Hero';

// Define the type for the product data
interface IProduct {
  image: {
    asset: {
      _ref: string;
      _type: 'reference';
    };
  };
  price: number;
  title: string;
  type: string;
  id: number;
  category: {
    name: string;
  };
  productcare: string[];
  description: string;
}

const page = async ({ params }: { params: { Name: string } }) => {
  const getProductData = async () => {
    const res = await client.fetch(
      `*[_type=="product" && title=="${params.Name}"]{   
        image,
        type,
        description,
        id,
        price,
        title,           
      }`
    );
    return res;
  };

  const data: IProduct[] = await getProductData();
  const res = data[0]
  console.log(res)
  const imageUrl = urlForImage(res.image.asset).url();
  return (
    <div className=''>
<div className='mt-10 font-bold text-black border-t-2 border-black/40'>
<h1 className='flex justify-center pt-8 pb-8 text-3xl tracking-widest'>Product Details</h1>

     <div className='grid grid-cols-1 gap-5 md:grid-cols-3 wrapper'>
        <div className='flex items-center justify-center '>
          <div className='space-y-10'>
            <h1>{res.title}</h1>
            <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates eaque esse laudantium cum at commodi labore fugit ullam necessit</h1>
          </div>
        </div>

        <div className='flex items-center justify-center border-l-2 border-r-2 border-black/40'>
          <Image className='' src={imageUrl} alt="Pimg" width={300} height={200} />
        </div>

        <div className='flex items-center justify-center mt-16'>
          <div className='flex-1 '>
            <div className='space-y-4'>
              <div className='flex items-center justify-between '>
                <h1  className='text-xl'>Price: ${res.price}</h1>
                <h1 className='flex gap-2 text-black/50'>
                  <h1 className=''>
                    Was:
                    </h1>
                    <del>$123</del></h1>
              </div>
              
              <div className='flex gap-4 pt-10 item-center'>
                <h1 className='text-xl'>
                  Quantity:
                </h1>
                <Counter />
              </div>
              
            </div>
          </div>
        </div>

        {/* {
          data.map((item:any)=>(
            <div key={item.id}>
            <h1>{item.title}</h1>
            </div>
            
            ))
          } */}

      </div>
    </div>
          </div>
  )
}

export default page
