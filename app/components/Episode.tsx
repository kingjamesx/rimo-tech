import EpisodeList from "./EpisodeList"
import Podcast from '../assets/icons/podcast.svg'
import Image from "next/image"
const Episode = () => {
    const EpisodeData=[1,2,3,4,5,6,7
    ]
  return (
    <div className="flex gap-[27px] mt-[58px] pb-10">
        <main className="basis-[70%] max-h-[632px] overflow-y-auto">
            <div className="flex justify-between">
            <span className="flex items-start gap-[5px]">
                <Image src={Podcast} alt='podcast' className="mt-2"/>
                <span>
              <p className="text-[white] font-bold text-[28px]">Latest episodes</p>
              <p className="text-[18px] font-meduim text-[white]">#Fresh out of the studio!</p>
              </span>
            </span>
            <span>
             <select name="" id="" className="bg-transparent border border-[#DCDCDC] p-4 outline-none rounded-[12px] text-[white]">
                <option value="">Filter by category</option>
             </select>
            </span>
            </div>
            {EpisodeData.map((item,index)=>{
                return(
                    <div key={item}>
                       <EpisodeList/>
                    </div>
                    
                )
            })}
        </main>
        <aside className="basis-[30%] ">
            <div className="rounded-sm bg-opacity-50 shadow-md bg-[#30303080] text-[white] ">
                <p className="text-[20px] font-bold pl-[14px] pt-[18px]">Made for you</p>
                <p className="text-[18px] font-medium max-w-[231px] pl-[14px] pb-[18px]">Episodes you don’t want to miss out on.</p>
            </div>
               <div className='my-custom-bg-class h-[447px] flex flex-col items-center justify-center px-[32px] text-[white]'>
               
                <p className="text-[24px] font-bold">Jump back in to enjoy!</p>
                <p className="text-[18px] font-medium text-center"> Join other publishers and listeners on Wokpa</p>
                <span className="flex gap-[11px] mt-[28px]">
                    <button className='text-[#fff] rounded-[12px] bg-teal-400 py-[11px] px-[20px]'>SIGN UP</button>
                    <button className='text-[#fff] rounded-[12px] border border-[white] py-[11px] px-[20px]' >LOG IN</button>

                </span>
            </div>
        </aside>
    </div>
  )
}

export default Episode