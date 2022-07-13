import Image from 'next/image'
import React from 'react'

import { CogIcon, QuestionMarkCircleIcon, SearchIcon } from '@heroicons/react/outline'
import { TbGridDots } from 'react-icons/tb'

function Header() {
    return (
        <div className='flex items-center justify-between p-3 bg-white'>
            <Image
                src='/logo.png'
                alt='V News'
                width={100}
                height={35}
                objectFit='contain'
            />

            <div className='flex items-center space-x-10'>
                <div className='flex items-center space-x-3 bg-[#F1F3F4] p-3 px-4 rounded-lg'>
                    <SearchIcon className='h-6 w-6 mx-2 text-gray-500' />
                    <input type="text" className='flex-grow outline-none bg-transparent w-96' placeholder='Search for topics, locations & sources' />
                </div>

                <div className='flex items-center space-x-1'>
                    <QuestionMarkCircleIcon className='iconButton' />
                    <CogIcon className='iconButton' />
                </div>
            </div>


            <div className='flex items-center space-x-3'>
                <TbGridDots className='iconButton' />
                <img src="/unknown.jpg" className='h-10 w-10 rounded-full object-contain' alt="" />
            </div>
        </div>
    )
}

export default Header