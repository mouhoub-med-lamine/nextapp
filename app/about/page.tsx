import React from 'react'
import { CustomButton } from '@/Components'
import Image from 'next/image'

const About = () => {
  return (
    <div>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>
          About Page 
        </h1>

        <p className='hero__subtitle'>
          Hellooooo
        </p>

        <CustomButton 
            title='retour ...' 
            containerStyles='bg-primary-blue text-white rounded-full mt-10'
            />
        
       
      </div>
    </div>
  )
}

export default About
