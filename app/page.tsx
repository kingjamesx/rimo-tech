import Star from './assets/icons/star.svg'
import Image from 'next/image'
import Image1 from './assets/images/image1.jpeg'
import TopCategories from './components/TopCategories'
import Episode from './components/Episode'
import AccountModal from './components/AccountModal'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';
import PodcastCard from './components/PodcastCard'

export default function Home() {
  return (
    <main>
      <ToastContainer />
      <AccountModal/>
      <div className='flex gap-[4px] items-center mt-[34px]'>
        <Image src={Star} alt='star'/>
        <p className='text-[28px] font-bold text-[white]'>Pick of the week</p>
      </div>
      <section className='flex gap-[20px] items-center text-[white]'>
         <main className='mt-[26px] '>
          <div className='max-w-[508px] max-h-[380px] rounded-lg overflow-hidden'>
          <Image src={Image1} alt='frankly-banner' className='object-contain'/>
          </div>
        
          
         </main>
         <aside className='basis-[60%]'>
          <div className='flex items-center justify-between'>
            <span>
            <p className='text-[24px] font-bold'>Top podcasts</p>
            </span>
            <span>
               <p className='font-bold text-[#1EAEA3]'>See all</p>
            </span>
          </div>
          <div className='flex gap-4'>
            {['1','2','3'].map(item=>{
              return (
                <div key={item} >
                <PodcastCard/>
                </div>
              )
            })}
          </div>
         </aside>
      </section>
      <TopCategories />
      <Episode />
    </main>
  )
}
