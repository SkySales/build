import React from 'react'
import edu from '../assets/educ.png'
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import ProgressBar from "@ramonak/react-progress-bar";

const Education = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 2500,
      behavior: 'smooth'
    })
  }
  return (
    <div className='educpage w-full bg-gradient-to-t from-sky-400 py-16 px-4 rounded-lg'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-1 pl-6'>
            <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
                <MouseParallaxChild factorX={0.3} factorY={0.5}>
                <img className='animate-pulse pt-8 pr-2' src={edu} alt="" />
                </MouseParallaxChild>
            </MouseParallaxContainer>
            <div className='flex flex-col justify-center'>
                <p className='font-bold text-sky-700 font-mono text-xl'>Education</p>
                <h1 className='uppercase font-bold font-mono'>Learnings and Languages</h1>
                <p className='font-montserrat text-sm md:text-lg font-semibold pt-5 uppercase'>React Framework for Web App Development</p>
                <ProgressBar completed={60} bgColor="green" animateOnRender={true} />
                <p className='font-montserrat text-sm md:text-lg font-semibold pt-5 uppercase'>Node/Express & MySQL for Backend & Software Development</p>
                <ProgressBar completed={50} bgColor="indigo" animateOnRender={true} />
                <p className='font-montserrat text-sm md:text-lg font-semibold pt-5 uppercase'>Other Language like PHP,Python</p>
                <ProgressBar completed={30} bgColor="black" animateOnRender={true} />
            </div>
            <button className='text-white w-[150px] rounded-md font-medium my-5 mx-auto py-2 bg-gradient-to-r from-sky-300 to-blue-500 hover:from-violet-400 hover:to-orange-400 hover:animate-pulse' onClick={handleClick}>Work & Project</button>
        </div>
    </div>
  )
}

export default Education