'use client'
import Image from "next/image"
import Podcast from '../assets/icons/podcast.svg'
import { useState } from "react"
const TopCategories = () => {
    const [data,setData]=useState([
      {name:'Comedy',image:Podcast},
      {name:'Health & Fitness',image:Podcast},
      {name:'Love & Romance',image:Podcast},
      {name:'Education',image:Podcast},
      {name:'Religion',image:Podcast},
      {name:'Music',image:Podcast},
      {name:'Technology',image:Podcast},
      {name:'Government & Politics',image:Podcast},
     
    ])
  return (
    <div className="mt-[39px]">
        <div className="flex gap-[15px]">
            <Image src={Podcast} alt='podcast'/>
            <p className="text-[24px] font-bold text-[white]">Top categories</p>
        </div>
        <section className="flex items-center">
            <div className="basis-[70%] flex gap-[20px] flex-wrap mt-[37px]">
                {data.map((item,index)=>{
                    return (
                        <span key={index} className="flex justify-center gap-[4px] rounded-[22px] px-[18px] py-[16px] bg-gray-700 shadow-md max-w-[238px]">
                            <Image alt={`image${item.name}`} src={item.image}/>
                            <p className="text-[white] font-semibold">{item.name}</p>
                            
                        </span>
                    )
                })}
            </div>
            <div className="basis-[20%]">
                <p className="text-[#1EAEA3] font-bold">See all categories</p>
            </div>
        </section>
    </div>
  )
}

export default TopCategories