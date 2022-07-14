import React from 'react'

import DateObject from "react-date-object";

function DateComponent() {
    const date = new Date().getDate()
    const month = new Date().getMonth()
    const year = new Date().getFullYear()

    const today = new DateObject(new Date(year, month, date))
    return (
        <div className='max-w-7xl mx-auto mt-4 flex justify-between'>
            <div className="flex flex-col">
                <h3 className='text-3xl'>Your briefing</h3>
                <p className='text-gray-600 font-light text-sm'>{today.format("dddd, DD MMMM")}</p>
            </div>

            <div className='flex bg-white items-center px-3 py-1 rounded-xl shadow-md'>
                <img src="/weather.webp" className='h-20 w-20 object-contain' alt="" />
                <div className='flex flex-col'>
                    <p className='text-gray-600 text-md font-extralight'>Maharashtra</p>
                    <p className='text-gray-800 text-2xl font-medium'>22°C</p>
                </div>
            </div>
        </div>
    )
}

export default DateComponent