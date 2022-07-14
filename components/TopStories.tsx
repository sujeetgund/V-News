import React from 'react'

import { ChevronRightIcon } from '@heroicons/react/outline'

import TimeAgo from 'react-timeago'
import { shuffle } from 'lodash'



interface Props {
    topStories: {
        status: string
        totalResults: number
        articles: Array<{
            source: {
                id: string
                name: string
            },
            author: string
            title: string
            description: string
            url: string
            urlToImage: string
            publishedAt: string
            content: string
        }>
    }
}

function TopStories({ topStories }: Props) {
    const colors = [
        'text-red-500', 'text-yellow-500', 'text-green-500', 'text-purple-500', 'text-pink-500', 'text-blue-500'
    ]

    return (
        <div className='bg-white max-w-3xl rounded-xl shadow-md px-2 col-span-4'>
            <h3 className='flex items-center hover:text-blue-500 cursor-pointer text-xl m-2 mb-3 pt-2 mx-5'>
                Top Stories <ChevronRightIcon className='h-4 w-4 mt-1 ml-2' />
            </h3>

            {topStories.articles && topStories.articles?.map(item => (
                <div key={item.url}>
                    <hr className='my-1' />
                    <div className='grid grid-cols-4 p-2'>
                        <div className='flex flex-col col-span-3 justify-between'>
                            <div>
                                <h4 className={`font-normal flex items-center text-sm ${shuffle(colors).pop()}`}>
                                    {item.source.name}
                                    {/* {Math.random() > 0.6 && <img src="/breaking-news.png" className='h-5 w-5 ml-2' alt="" />} */}
                                </h4>
                                <a href={item.url} target='_blank' rel='noreferrer' className='font-medium text-xl hover:underline underline-offset-1 cursor-pointer mr-1 line-clamp-2'>{item.title}</a>
                            </div>

                        </div>
                        <img
                            src={item.urlToImage || '/unavailable.png'}
                            width={200}
                            className="min-h-[125px] rounded-lg object-cover col-span-1"
                        />
                        <div className='text-xs font-extralight'>
                            <TimeAgo date={item.publishedAt} />
                        </div>

                    </div>

                </div>))}
        </div>
    )
}

export default TopStories