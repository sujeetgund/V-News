import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import DateComponent from '../components/Date'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import TopStories from '../components/TopStories'
import { topStories } from '../typings'

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

const Home = ({ topStories }: Props) => {


  return (
    <div>
      <Head>
        <title>V News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='bg-white  border-b border-gray-300 sticky top-0 z-50'>
          <Header />
          <Navbar />
        </div>

        <DateComponent />

        <div className='max-w-7xl mx-auto'>
        <TopStories topStories={topStories} />
        </div>
      </main>

    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {

  const topStories = await fetch(`https://newsapi.org/v2/top-headlines?country=in&pageSize=5&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`)
    .then(res => res.json())
  return {
    props: {
      topStories
    },
  }
}

export default Home
