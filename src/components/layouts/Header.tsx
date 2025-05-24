'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation';

import clsx from 'clsx';
import { CgMenuOreos } from "react-icons/cg";
import { useState } from 'react';
import { navLinks } from '@/lib/data';



function Header() {
    const pathname = usePathname();
    const [,setShowToggle] = useState(false)

  function handleToggleShow(){
    setShowToggle((prev)=>!prev)
  }

    

  return (
    <div>

    <div className=' hidden lg:block bg-wineTexture  border border-white border-b-0 border-l-0 border-r-0 '>

    <div className='flex items-center justify-between mt-1 border border-white-color border-l-0 text-white-color'>
        <div className='border p-3  border-t-0 border-b-0'>
            <Link href="/">
                  <h1 className='font-bowlby  text-primary-color text-4xl capitalize hover:scale-90 hover:font-playWright'>dev<span className='font-playWright text-white-color hover:font-bowlby hover:text-primary-color'>kenny</span></h1>
             </Link>
        </div>

        <div>
           <div className='flex  items-center text-[18px] font-dmMono capitalize'>
             {navLinks.map((items,index)=>(
                <Link className={clsx(`py-5 px-10 border-l border-white-color hover:bg-primary-color 
                 first:border-white-color ${index === navLinks.length-1 ? 'border-r': ''}`,{
                    'bg-softBlend uppercase':pathname===items.href
                 })} href={items.href} key={index}>
                    {items.name}
                </Link>
             ))}

           </div>
        </div>
    </div>
    </div>

    <div className='relative lg:hidden border'>
     <div className='text-zinc-800 flex items-center overflow-x-hidden justify-between'>
     <div className=' p-3 '>
            <Link href="/">
                  <h1 className='font-bowlby text-[20px] text-primary-color lg:text-4xl capitalize hover:scale-90 hover:font-playWright'>dev<span className='font-playWright text-white-color hover:font-bowlby hover:text-primary-color'>kenny</span></h1>
             </Link>
        </div>

        <CgMenuOreos onClick={handleToggleShow} className='text-3xl mr-5 text-white cursor-pointer'/>
     </div>

    </div>

    </div>
  )
}

export default Header