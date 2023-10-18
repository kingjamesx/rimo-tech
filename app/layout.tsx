import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from './components/Nav'
import { Providers } from './store/provider'
import SideBar from './components/SideBar'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wokpa',
  description: 'the new wokpa site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <body>
        
       <Providers >
        
      <main className='flex justify-between bg-[#212121] max-w-[1500px] mx-auto ' id="large-screen-message">
        <div className='w-[232px] '>
        <SideBar/> 

        </div>
      <section className='w-[calc(100%-232px)]'>
      <Nav/>
      <div className={inter.className}>{children}</div>
      </section>
      </main>
      </Providers>
      <div id="small-screen-message" className="hidden">
  Please view this website on a desktop for the best experience.
</div>

      
      
      </body>
     
    </html>
  )
}
