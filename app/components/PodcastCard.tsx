import Ent from '../assets/icons/entertainment.png'
import Image from 'next/image'
import { StaticImageData } from 'next/image';

const PodcastCard = ({image,name,title}:{image:StaticImageData,name:string,title:string}) => {
  return (
    <div className='rounded-[3px] bg-gray-800 shadow-lg p-1.5 max-w-[250px] w-full'>
      <Image src={image} alt={name} className='rounded-lg w-[216px]'/>
      <p className='text-[18px] font-semibold mt-1'>{title}</p>
      <p>By: Marc Maron</p>
      <Image src={Ent} alt='entertainment' className='mt-[14px]'/>
    </div>
  )
}

export default PodcastCard