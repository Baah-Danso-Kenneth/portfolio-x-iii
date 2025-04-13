import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function MainBaseContent() {
  return (
    <div className='mx-10 border p-10 border-t-0 border-b-0 relative'>
        <div><h1 className='font-dmMono text-4xl'>Hi i&apos;m kenneth Danso</h1></div>

        <div className='py-10 z-50'>
            <h1 className='text-[8rem] font-bowlby leading-[8rem] z-50'>i build  magical stuff using code</h1>
        </div>

        <div className='absolute top-0 right-0 transform rotate-45  '>
          <Image src="/images/sticker.png" alt="" className="z-20" width={450} height={250}/>
        </div>

        <div>
          <h1 className='font-dmMono'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi optio tempore quae modi, laborum, velit eaque odit omnis magnam maxime, cupiditate asperiores ad unde facere enim similique? Nihil totam rerum eligendi, reprehenderit eaque, incidunt necessitatibus eveniet tempore consequuntur nobis 
            quis corrupti a culpa, voluptatum nostrum ducimus pariatur alias aut consequatur.</h1>
        </div>

        <div className='relative mt-5'>
          <div className='absolute top-1 -right-13 -z-10 w-[10%] h-[100%] rounded-[20] bg-[#fff]'/>
          <Button className='bg-primary-color text-white p-5 font-dmMono rounded-[20]'>lets vibe</Button>
        </div>

        <div className='relative w-full mt-10'>
  <div className='absolute top-5 -right-4 -z-10 w-full h-[80vh] bg-[#ddd] rounded-[20]' />
  <Image
    src="/images/lines-of-code.jpeg"
    alt="code-block"
    className='w-full h-[80vh] object-cover rounded-[10px]'
    width={1280}
    height={720}
  />
</div>


    </div>
  )
}

export default MainBaseContent