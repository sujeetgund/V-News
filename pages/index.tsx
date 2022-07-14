import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { TbAdjustmentsHorizontal } from 'react-icons/tb'
import DateComponent from '../components/Date'
import ForYou from '../components/ForYou'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import TopStories from '../components/TopStories'
import VerticalNews from '../components/VerticalNews'
import { News } from '../typings'

interface Props {
  topStories: News
  forYou: News
  topicIndia: News
  topicWorld: News
  topicBusiness: News
  topicSports: News
  topicTechnology: News
  topicEntertainment: News
}

const Home = ({ topStories, forYou, topicIndia, topicWorld, topicBusiness, topicSports, topicTechnology, topicEntertainment }: Props) => {

// console.log(topStories)
  return (
    <div>
      <Head>
        <title>FastMedia</title>
      </Head>
      <main>
        <div className='bg-white  border-b border-gray-300 sticky top-0 z-50'>
          <Header />
          <Navbar />
        </div>

        <DateComponent />

        <div className='max-w-7xl mx-auto grid grid-cols-6 my-3'>
          <TopStories topStories={topStories} />
          <ForYou forYou={forYou} />
        </div>

        <div>
          <div className='max-w-7xl mx-auto mt-10 mb-6 flex justify-between'>
            <div className="flex flex-col">
              <h3 className='text-3xl'>Your topics</h3>
            </div>
            <button className='flex bg-blue-600 text-white items-center px-3 py-1 rounded-full'>
              <TbAdjustmentsHorizontal className='mr-1' />
              Customise
            </button>
          </div>

          <div className='flex justify-evenly items-center max-w-7xl mx-auto'>
            <VerticalNews heading='India' data={topicIndia} />
            <VerticalNews heading='World' data={topicWorld} />
            <VerticalNews heading='Business' data={topicBusiness} />
          </div>
          <div className='flex justify-evenly items-center max-w-7xl mx-auto'>
            <VerticalNews heading='Entertainment' data={topicEntertainment} />
            <VerticalNews heading='Technology' data={topicTechnology} />
            <VerticalNews heading='Sports' data={topicSports} />
          </div>

        </div>
      </main>

    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {

  const topStories = await fetch(`https://newsapi.org/v2/top-headlines?country=in&pageSize=4&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`).then(res => res.json());

  const forYou = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=general&pageSize=6&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`).then(res => res.json());

  const topicIndia = await fetch(`https://newsapi.org/v2/everything?q=india&pageSize=3&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`).then(res => res.json());

  const topicWorld = await fetch(`https://newsapi.org/v2/everything?q=world&pageSize=3&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`).then(res => res.json());

  const topicBusiness = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=business&pageSize=3&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`).then(res => res.json());

  const topicTechnology = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=technology&pageSize=3&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`).then(res => res.json());

  const topicEntertainment = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=entertainment&pageSize=3&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`).then(res => res.json());

  const topicSports = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=sports&pageSize=3&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`).then(res => res.json());

  return {
    props: {
      topStories,
      forYou,
      topicIndia,
      topicWorld,
      topicBusiness,
      topicTechnology,
      topicEntertainment,
      topicSports
    },
  }
}

export default Home
