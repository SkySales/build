import React, { useState } from 'react'
import Typed from 'react-typed';
import { MdNightlight, MdOutlineNightlight } from 'react-icons/md'
import AnimatedCursor from "react-animated-cursor"

const Hero = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 900,
      behavior: 'smooth'
    })
  }
  
  const firstPage = () => {
    return(
    <div className='bgdimg flex justify-between items-center h-24 mx-auto px-4 h-screen '>
      <div className='p-5'>
          <button className='py-2 w-[50px] font-medium font-mono text-xl md:text-3xl text-cyan-300 hover:text-blue-600 border-2 rounded-full border-cyan-300' onClick={() => {
              setPage(secPage())
            }}><MdOutlineNightlight/></button>
          <h2 className='text-xl md:text-3xl font-bold text-cyan-300 font-mono '>Hi, I'm <span className='font-bold text-sky-200 hover:animate-ping font-mono'>Marc Ross Amaba</span></h2>
          <div>
            <p className='text-xl md:text-xl font-bold font-mono font-sans'>
              Aspiring 
              <Typed className='text-xl md:text-xl font-bold text-cyan-300 p-2 animate-pulse' strings={['Software Engr.']} typeSpeed={120} backSpeed={80} loop />
            </p>
            <button className='p-5 bg-[#1120ad] w-[150px] rounded-md font-medium my-5 mx-auto py-2 bg-gradient-to-r from-sky-700 to-blue-500 hover:from-violet-400 hover:to-sky-400 hover:animate-pulse' onClick={handleClick}>About Me</button>
          </div>
      </div>
     </div>
    )
  }

  const secPage = () => {
    return(
      <div className='secbg flex justify-between items-center h-24 mx-auto px-4 h-screen '>
        <div className='p-5'>
            <button className='py-2 w-[50px] font-medium font-mono text-xl md:text-3xl text-cyan-300 hover:text-blue-600 rotate-180 border-2 rounded-full border-cyan-300' onClick={() => {
              setPage(firstPage())
            }}><MdNightlight/></button>
            <h2 className='text-xl md:text-3xl font-bold text-yellow-400 font-mono'>Hi, I'm <span className='font-bold text-yellow-200 hover:animate-ping font-mono'>Marc Ross Amaba</span></h2>
            <div>
              <p className='text-xl md:text-xl text-xl font-bold font-mono font-sans'>
                Aspiring 
                <Typed className='text-xl md:text-xl font-bold text-yellow-400 p-2 animate-pulse' strings={['Software Engr.']} typeSpeed={120} backSpeed={80} loop />
              </p>
              <button className='p-5 bg-[#1120ad] w-[150px] rounded-md font-medium my-5 mx-auto py-2 bg-gradient-to-r from-sky-700 to-blue-500 hover:from-violet-400 hover:to-sky-400 hover:animate-pulse' onClick={handleClick}>About Me</button>
            </div>
        </div>
     </div>
    )
  }

  const [page, setPage] = useState(firstPage())

  return (
    <div className='text-white h-screen'>
      {page}
      
      <AnimatedCursor
        innerSize={12}
        outerSize={12}
        color={"3, 255, 11"}
        outerAlpha={0.4}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
          'li'
        ]}
      />
    </div>
  )
}

export default Hero