import React from 'react'
import { CustomButton } from '.'
import Image from 'next/image'

const Hero = () => {
  const HandleGo = () =>{

  }
  return (
    <div>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>
          Hello , am learning to use this Framework ....
        </h1>

        <p className='hero__subtitle'>
          I'm a Full Stack Web Developer, and i love building things that live on the internet.
        </p>

        <CustomButton 
            title='Go ...' 
            containerStyles='bg-primary-blue text-white rounded-full mt-10'
            handleClick={HandleGo}
            />
        
        <div className='hero__image-container'>
          <div className='hero__image'>
            <Image src='/hero.png' alt='hero' fill className='object-contain'/>
            <div className='hero__image-overlay' />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero
