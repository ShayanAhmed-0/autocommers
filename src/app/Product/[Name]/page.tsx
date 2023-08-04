import React from 'react'
// import Cards from '@/components/Cards';
import Image from "next/image";
import { client } from "@/lib/sanityClient";
import { Image as IImage } from "sanity";
import { urlForImage } from '../../../../sanity/lib/image';
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import Counter from '@/components/Counter';
import Size from '@/components/Size';
import Col3 from '@/components/Col3';
// import Hero from '@/view/Hero';

// Define the type for the product data
interface IProduct {
  image: {
    asset: {
      _ref: string;
      _type: 'reference';
    };
  };
  _id:string
  price: number;
  title: string;
  type: string;
  id: number;
  category: {
    name: string;
  };
  productcare: string[];
  description: string;
  Sizes:string[];
  Colors:string[];
}

const page = async ({ params }: { params: { Name: string } }) => {
  const getProductData = async () => {
    const res = await client.fetch(
      `*[_type=="product" && title=="${params.Name}"]{   
        image,
        _id,
        type,
        Colors,
        description,
        id,
        price,
        Sizes,
        title,           
      }`
    );
    return res;
  };

  const data: IProduct[] = await getProductData();
  const res = data[0]
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

        <div>
          <Col3 price={res.price} id={res._id} Sizes={res.Sizes} Colors={res.Colors}/>
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
