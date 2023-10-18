import Search from '../assets/icons/search.svg'
import Image from 'next/image'
const Nav = () => {
  return (
    <div className="w-full bg-gray-800 shadow-md py-[17px] px-[27px] ">
        <section className='flex justify-between items-center'>
     <div className='flex justify-between rounded-lg border border-gray-700 p-1.5 bg-gray-100 h-[46px] w-[482px] px-[16px]'>
        <input type="text" placeholder='Search by Podcast Name, Host name, Categories, Tags...' className='w-[395px] bg-gray-100 outline-none' />
        <Image src={Search} alt="search" className='block'/>
     </div>
     <div className='flex items-center gap-[11px]'>
      <button className='rounded-[18px] bg-black shadow-md text-teal-400 px-[16px] py-[13px] mr-[calc(34px-11px)]'>Download the app</button>
       <button className='text-[#fff] rounded-[12px] bg-teal-400 py-[11px] px-[20px]'>SIGN UP</button>
       <button className='text-[#fff] rounded-[12px] border border-[white] py-[11px] px-[20px]'>LOG IN</button>
     </div>
     </section>
    </div>
  )
}

export default Nav