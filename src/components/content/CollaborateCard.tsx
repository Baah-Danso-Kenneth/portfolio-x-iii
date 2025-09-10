import React from 'react'
import { Button } from '../ui/button'

function CollaborateCard() {
  return (
    <div className='relative'>
      {/* Background white card - positioned behind */}
      <div className='bg-white absolute top-3 left-2 rounded-3xl w-full h-full -z-10'/>
      
      {/* Main content card - positioned in front */}
      <div className='bg-primary-color h-[60vh] border rounded-3xl border-white  py-10 flex flex-col items-center justify-center p-20 relative z-10 space-y-6'>
        <div className='text-center'>
          <h1 className='font-bowlby text-white text-2xl sm:text-3xl lg:text-6xl leading-tight'>
            i&apos;m available to collaborate on new projects 
          </h1>
        </div>

        <div className='text-center max-w-2xl'>
          <p className='text-sm sm:text-base font-dmMono text-white/90 leading-relaxed'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci 
            nulla aspernatur beatae tempora! Voluptatum autem eveniet expedita, earum ipsa molestiae.
          </p>
        </div>

        <div className='pt-4'>
          <div className='relative'>
            <div className='absolute top-1 w-[45%] right-0 -z-10 lg:w-full h-[100%] rounded-[20px] bg-base-color' />
            <Button className='relative border border-base-color text-base-color bg-white font-dmMono hover:bg-gray-100 font-medium px-8 py-4 rounded-[20px] transition-all duration-200 shadow-lg hover:shadow-xl'>
              lets connect
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CollaborateCard