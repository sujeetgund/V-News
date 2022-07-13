import React, { useState, useEffect } from 'react'
import { ChevronRightIcon } from '@heroicons/react/outline'
import { topStories } from '../typings'

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
    const [color, setcolor] = useState(null)
    const colors = [
        'red', 'yellow', 'green', 'purple', 'pink'
    ]


    return (
        <div className='bg-white max-w-3xl rounded-xl shadow-md px-2'>
            <h3 className='flex items-center text-blue-500 text-[20px] m-2 mb-3 pt-2 mx-5'>
                Top Stories <ChevronRightIcon className='h-4 w-4 mt-1 ml-2' />
            </h3>
            <hr className='my-1' />
            {topStories && topStories.articles.map(item => (
                <div key={item.url}>
                    <div className='grid grid-cols-4 p-2'>
                        <div className='flex flex-col col-span-3 justify-between'>
                            <div>
                                <h4 className={`font-normal text-${shuffle(colors).pop()}-500`}>{item.source.name}</h4>
                                <a href={item.url} target='_blank' rel='noreferrer' className='font-medium text-xl hover:underline underline-offset-1 cursor-pointer mr-1'>{item.title}</a>
                            </div>
                            <div className='text-sm font-extralight'>
                                <TimeAgo date={item.publishedAt} />
                            </div>
                        </div>
                        <img
                            src={item.urlToImage}
                            width={200}
                            className="min-h-[125px] rounded-lg object-cover col-span-1"
                        />

                    </div>
                    <hr className='mt-5' />
                </div>))}
        </div>
    )
}

export default TopStories