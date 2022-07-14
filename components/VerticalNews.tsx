import { ChevronRightIcon } from '@heroicons/react/outline'
import React from 'react'
import { FaRegNewspaper } from 'react-icons/fa'
import { News } from '../typings'
import Timeago from 'react-timeago'

interface Props {
    heading: string
    data: News
}
function Verticaldata({ heading, data }: Props) {
    return (
        <div className='bg-white mx-2 my-3 p-2 rounded-xl'>
            <h4 className='flex items-center p-2 hover:text-blue-600 cursor-pointer text-lg'>
                {heading} <ChevronRightIcon className='h-4 w-4' />
            </h4>

            <div>
                {data.articles && data.articles?.map(item => (
                    <div className='hover:bg-gray-100' key={item.url}>
                        <hr />
                        <div className='grid grid-cols-4 p-2'>
                            <div className='flex flex-col col-span-3 justify-between'>
                                <div>
                                    <h4 className={`font-normal text-xs`}>{item.source.name}</h4>
                                    <a href={item.url} target='_blank' rel='noreferrer' className='font-medium text-md hover:underline underline-offset-1 cursor-pointer mr-1 line-clamp-2'>{item.title}</a>
                                </div>

                            </div>
                            <img
                                src={item.urlToImage || '/unavailable.png'}
                                className="rounded-xl object-cover w-20 h-16"
                            />

                            <div className='text-xs text-gray-500 font-extralight flex justify-between w-full col-span-4 mt-2'>
                                <Timeago date={item.publishedAt} />
                                {/* {Math.random() > 0.6 && <FaRegNewspaper className='text-lg  font-bold m-1' />} */}
                            </div>
                        </div>
                       
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Verticaldata