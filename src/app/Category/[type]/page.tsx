import Cards from '@/components/Cards';
import Image from "next/image";
import { client } from "@/lib/sanityClient";
import { Image as IImage } from "sanity";
import Hero from '@/view/Hero';
import Link from 'next/link';

interface IProduct {
  image: IImage;
  price: number;
  title: string;
  id: number;
}

const page = async ({ params }: { params: { type: string } }) => {
  const getProductData = async () => {
    const res = await client.fetch(
      `*[_type=="product"]{   
        image,
        id,
        price,
        title,           
      }`
    );
    return res;
  };

  const data: IProduct[] = await getProductData();

  return (
    <div className=''>
      <h1 className='flex justify-center pt-8 text-2xl font-bold text-black'>{params.type}</h1>
      <div className='flex justify-center w-full max-w-screen-lg p-10 mx-auto border-l-4 border-r-4 border-black/50'>
      <input
                className=" items-center w-full lg:w-[100vh] text-xl h-10 shadow-lg shadow-black text-white navc pl-4"
                type="text"
                placeholder="Search"
              />
      {/* <Hero/> */}
      </div>
      <div className='flex justify-center'>
        <div className='relative justify-center'>
        <div className='grid grid-cols-1 gap-16 mt-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data.map((item, index) => (
            <div key={item.id} style={{ marginTop: index % 2 === 0 ? '30px' : '150px' }}>
             <Link href={`/Product/${item.title}`}>
           <Cards item={item} />
            </Link>
         </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
