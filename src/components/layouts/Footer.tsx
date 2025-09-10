
import Link from 'next/link';
import Image from 'next/image';
import { Smile, ArrowDownRight } from 'lucide-react';
import { navLinks, sociaLinks } from '@/lib/data';

function Footer() {
  return (
    <div className='h-auto border-t   font-dmMono'>
      <div className='flex flex-col md:flex-row border-b  dark:border-white'>
        
        {/* Logo Section */}
<div className='md:p-3 md:py-2 border-r-0 border-b-0 flex-[10%] dark:border-white flex items-center'>
    <Link href="#" className='flex items-center justify-center w-full'>
        <h1 className='font-bowlby text-primary-color text-4xl capitalize hover:scale-90 hover:font-playWright'>
            dev<span className='font-playWright text-white-color hover:font-bowlby hover:text-primary-color'>kenny</span>
        </h1>
    </Link>
</div>

        {/* Smile Icon Section */}
        <div className='py-2 md:border-l md:border-r flex justify-center items-center  flex-[20%]'>
          <Smile className='border-b border-white w-full  text-2xl md:text-3xl md:border-b-0 h-28 py-3'/>
        </div>

        {/* Navigation Links Section */}
        <div className='py-2 flex-[50%] border-b-0 border-r-0 md:border-r'>
          <div className='grid grid-cols-2 text-[12px] font-bold md:text-[18px] border-b-0 dark:border-white md:grid-cols-2 lg:grid-cols-4 gap-10 ml-10 md:ml-1 pt-10 md:p-5 uppercase font-nunito mb-5'>
            {navLinks.map(nav => (
              <Link href={nav.href} key={nav.name} className='hover:text-primary-color transition-colors'>
                {nav.name}
              </Link>
            ))}
          </div>
          <p className='text-center text-[7px] font-nunito md:text-[10px] lg:text-[12px] uppercase mb-3'>
            we love to code
          </p>
        </div>

        {/* Social Links Section */}
        <div className='border-t justify-center  flex-[20%] font-nunito uppercase md:border-0 border-white'>
          {sociaLinks.map(social => (
            <Link 
              href={social.href} 
              key={social.name} 
              className='flex justify-center items-center border-b py-3 text-[10px] md:text-[18px]  hover:text-red-500 last:border-b-0 dark:border-white transition-colors group'
            >
              <h1 className='mr-2 ml-5'>{social.name}</h1> 
              <ArrowDownRight className='h-6 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform duration-200'/>
            </Link>
          ))}
        </div> 
      </div>

      {/* Copyright Section */}
      <div className='uppercase f text-[13px] py-4'>
        <p className='text-center'>&copy; 2025 akatadeveloper</p>
      </div>
    </div>
  )
}

export default Footer