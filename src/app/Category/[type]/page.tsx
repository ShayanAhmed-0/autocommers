import Cards from '@/components/Cards';
import Image from "next/image";
import { client } from "@/lib/sanityClient";
import { Image as IImage } from "sanity";
import Hero from '@/view/Hero';

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
    <div>
      <h1>This is: {params.type} Category</h1>
      <div className='-mt-8'>
      <Hero/>
      </div>
      <div className='flex justify-center'>
        <div className='relative justify-center'>
        <div className='grid grid-cols-1 gap-16 mt-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data.map((item, index) => (
           <div key={item.id} style={{ marginTop: index % 2 === 0 ? '30px' : '150px' }}>
           <Cards item={item} />
         </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
