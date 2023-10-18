import Image from "next/image"
import Logo from '../assets/icons/wopka.png'
import Podcast from '../assets/icons/podcast.svg'
const SideBar = () => {
    const sideItems=[
        {name:'Discover',image:Podcast},
        {name:'Top 50 podcasts',image:Podcast},
        {name:'Categories',image:Podcast},
        {name:'Add your podcast',image:Podcast},
        {name:'Your Library',image:Podcast},
        {name:'Your playlist',image:Podcast},
        {name:'Recently played',image:Podcast},
        {name:'Discover',image:Podcast},
        {name:'Subscription & Hosts',image:Podcast},

    ]
    const sideLinks=[
        {name:'Wokpa for podcasters',image:Podcast},
        {name:'Wokpa for advertisers',image:Podcast},
        {name:'Read our blogs',image:Podcast},

    ]
  return (
    <div className=" w-[232px] h-[100%] fixed bg-[#303030]">
        <Image src={Logo} alt='logo'/>
        <ul className="text-[white] text-bold flex flex-col gap-[24px]">
            {sideItems.map((item,index)=>{
                if(item.name!=='Your Library'){
                    return(<li key={item.name} className="flex gap-[4px] px-[14px] cursor-pointer ">
                        <Image src={item.image} alt={item.name} />
                        <p>{item.name}</p>
                    </li>)
                }else{
                    return(<li key={item.name}>
                     <p>{item.name}</p>
                    </li>)
                }
            })}
        </ul>
        <hr  className="bg-gradient-to-r from-gray-400 to-transparent mt-[24px] block"/>
          <span className="">
            <ul className="text-[white] font-medium text-[15px] flex flex-col gap-[24px] mt-[12px] ">
                {sideLinks.map((item)=>{
                    return (
                        <li key={item.name} className="px-[14px] gap-[4px]">
                            <span className="flex gap-[4px]">
                            <Image src={item.image} alt={item.name} />
                        <p>{item.name}</p>
                            </span>
                        </li>
                    )
                })}
            </ul>
          </span>
    </div>
  )
}

export default SideBar