import React from 'react'
import { GiIndiaGate } from 'react-icons/gi'
import { BiWorld } from 'react-icons/bi'
import { MdBusiness, MdScience, MdSportsCricket, MdLocalMovies, MdHealthAndSafety } from 'react-icons/md'
import { GrTechnology } from 'react-icons/gr'



function Navbar() {
    return (
        <div className='flex items-center justify-evenly space-x-8 max-w-7xl mx-auto p-2'>
            <div className='flex space-x-6 text-gray-600'>
                <p className='cursor-pointer hover:text-gray-800'>Home</p>
                <p className='cursor-pointer hover:text-gray-800'>For you</p>
                <p className='cursor-pointer hover:text-gray-800'>Following</p>
                <p className='cursor-pointer hover:text-gray-800'>News Showcase</p>
            </div>

            <p className='font-extralight text-gray-600'>|</p>

            <div className='flex space-x-6 text-gray-600'>
                <div className='cursor-pointer flex items-center hover:text-gray-900'>
                    <GiIndiaGate className='mr-1' />
                    India</div>
                <div className='cursor-pointer flex items-center hover:text-gray-900'>
                    <BiWorld className='mr-1' />
                    World</div>
                <div className='cursor-pointer flex items-center hover:text-gray-900'>
                    <MdBusiness className='mr-1' />
                    Business</div>
                <div className='cursor-pointer flex items-center hover:text-gray-900'>
                    <GrTechnology className='mr-1' />
                    Techonlogy</div>
                <div className='cursor-pointer flex items-center hover:text-gray-900'>
                    <MdLocalMovies className='mr-1' />
                    Entertainment</div>
                <div className='cursor-pointer flex items-center hover:text-gray-900'>
                    <MdSportsCricket className='mr-1' />
                    Sports</div>
                <div className='cursor-pointer flex items-center hover:text-gray-900'>
                    <MdScience className='mr-1' />
                    Science</div>
                <div className='cursor-pointer flex items-center hover:text-gray-900'>
                    <MdHealthAndSafety className='mr-1' />
                    Health</div>
            </div>
        </div>
    )
}

export default Navbar