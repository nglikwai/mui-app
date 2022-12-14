import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ResponsiveAppBar from '../src/components/ResponsiveAppBar'
import Skeleton from '../src/components/Skeleton'
import Paginate from '../src/components/Paginate'
import List from '../src/components/List'
const Home: NextPage = () => {
  return (
    <div className='flex items-center justify-center flex-col '>
      < Head >
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head >
      <div className='w-full'>
        <ResponsiveAppBar />
      </div>
      <div  className="flex justify-between">

        <List />

        <div className='flex flex-col items-center bg-gray-50 pl-12 justify-between' >
          <Skeleton />

        </div>
      </div>
    </div >
  )
}

export default Home
