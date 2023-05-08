import React from 'react';
import {FaGithubSquare, FaReact} from 'react-icons/fa'
import Tilt from 'react-parallax-tilt';

const Cards = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 5500,
      behavior: 'smooth'
    })
  }
  return (
    <div className='w-full py-[10rem] px-4 bg-gradient-to-b from-sky-400 to-sky-500 rounded-lg'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8'>
          <Tilt>
          <div className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 shadow-xl flex flex-col p-4 my-4 border-b-2 border-r-2 border-zinc-700 rounded-lg hover:scale-105 duration-300'>
              <h2 className='text-2xl font-bold text-center py-8'>Frontend Skill Sets</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>React and Tailwind CSS</p>
                  <p className='py-2 border-b mx-8'>API Calls</p>
                  <p className='py-2 border-b mx-8'>Some Basic Functions</p>
              </div>
          </div>
        </Tilt>
        <Tilt>
        <div className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 shadow-xl flex flex-col p-4 my-4 border-b-2 border-r-2 border-zinc-700 rounded-lg hover:scale-105 duration-300'>
              <h2 className='text-2xl font-bold text-center py-8'>Backend Skill Sets</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Node and Express JS</p>
                  <p className='py-2 border-b mx-8'>API Route</p>
                  <p className='py-2 border-b mx-8'>MySQL Database</p>
              </div>
          </div>
        </Tilt>
          <Tilt>
          <div className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 shadow-xl flex flex-col p-4 my-4 border-b-2 border-r-2 border-zinc-700 rounded-lg hover:scale-105 duration-300'>
              <h2 className='text-2xl font-bold text-center py-8'>Cloud Hosting</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>AWS Amazon Linux</p>
                  <p className='py-2 border-b mx-8'>OVH Windows</p>
                  <p className='py-2 border-b mx-8'>Ubuntu Host Linux</p>
              </div>
          </div>
          </Tilt>
          <Tilt>
          <div className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 shadow-xl flex flex-col p-4 my-4 border-b-2 border-r-2 border-zinc-700 rounded-lg hover:scale-105 duration-300'>
              <h2 className='text-2xl font-bold text-center py-8'>OS Experience</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Amazon Linux</p>
                  <p className='py-2 border-b mx-8'>Windows 10</p>
                  <p className='py-2 border-b mx-8'>Ubuntu Linux</p>
              </div>
          </div>
          </Tilt>
          <button className='text-white w-[150px] rounded-md font-medium my-8 mx-auto py-2 bg-gradient-to-r from-sky-300 to-blue-500 hover:from-violet-400 hover:to-orange-400 hover:animate-pulse' onClick={handleClick}>Contact Me</button>
      </div>
    </div>
  );
};

export default Cards;