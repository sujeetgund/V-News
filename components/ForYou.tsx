import React from 'react'
import { ChevronRightIcon } from '@heroicons/react/outline'

import TimeAgo from 'react-timeago'

interface Props {
    forYou: {
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

function ForYou({ forYou }: Props) {
    return (
        <div className='bg-white max-w-lg rounded-xl shadow-md px-2 col-span-2 -ml-14'>
            <h3 className='flex items-center hover:text-blue-500 cursor-pointer text-xl m-2 mb-3 pt-2 mx-5'>
                Picks for You <ChevronRightIcon className='h-4 w-4 mt-1 ml-2' />
            </h3>

            {forYou && forYou.articles?.map(item => (
                <div key={item.url}>
                    <hr className='my-1' />
                    <div className='grid grid-cols-4 p-2 '>
                        <div className='flex flex-col col-span-3 justify-between'>
                            <div>
                                <h4 className={`font-normal text-xs`}>{item.source.name}</h4>
                                <a href={item.url} target='_blank' rel='noreferrer' className='font-medium text-md hover:underline underline-offset-1 cursor-pointer mr-1 line-clamp-2'>{item.title}</a>
                            </div>
                            <div className='text-xs font-extralight'>
                                <TimeAgo date={item.publishedAt} />
                            </div>
                        </div>
                        <img
                            src={item.urlToImage || '/unavailable.png'}
                            width={155}
                            className="rounded-lg object-cover col-span-1"
                        />

                    </div>

                </div>))}
        </div>
    )
}

export default ForYou