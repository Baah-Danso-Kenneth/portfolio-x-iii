import React from 'react'
import { Button } from '@/components/ui/button'


function FewText() {
  return (
    <div className='flex flex-row border-t border-white border-b '>

        <div className='flex-1 p-10'>
            <h1 className='font-bowlby text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sit quaerat porro, fugit quisquam repellendus consequuntur nostrum architecto dolorem error.</h1>
            </div>
        <div className='h-auto w-[0.5] bg-white '/>
        <div className='flex-1 p-10'>
            <p className='font-dmMono text-[18px] font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolor consequuntur ea sint reiciendis error odit eos, 
                assumenda aspernatur mollitia delectus suscipit unde fugit? Tempore explicabo quaerat deserunt rerum voluptates.</p>

         <div className='relative mt-5'>
          <div className='absolute top-1 -right-13 -z-10 w-[20%] h-[100%]  rounded-[20] bg-[#fff]'/>
          <Button className='bg-primary-color text-white p-5 font-dmMono rounded-[20]'>lets vibe</Button>
        </div>

        </div>
    </div>
  )
}

export default FewText