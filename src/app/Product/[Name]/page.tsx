import React from 'react'
// import Cards from '@/components/Cards';
import Image from "next/image";
import { client } from "@/lib/sanityClient";
import { Image as IImage } from "sanity";
import { urlForImage } from '../../../../sanity/lib/image';

// import Hero from '@/view/Hero';

// Define the type for the product data
interface IProduct {
  productImage: IImage;
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

const page = async({params}:{params:{Name:string}}) => {
  const getProductData = async () => {
    const res = await client.fetch(
      `*[_type=="product" && title=="${params.Name}"]{   
        image,
        id,
        price,
        title,           
      }`
    );
    return res;
  };

  const data: IProduct[] = await getProductData();
  const res= data[0]
// console.log(res.productImage)
  return (
    <div>
      <h1>{params.Name}</h1>
      {/* <Image
              className="h-[80vh]"
              src={urlForImage(res.productImage)?.url()}
              alt="Card Image"
              width={600}
              height={400}
            /> */}
      {
        data.map((item:any)=>(
          <div key={item.id}>
           <h1>{item.title}</h1>
         </div>
          
        ))
      }
    </div>
  )
}

export default page
