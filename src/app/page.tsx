"use client";
import Image from 'next/image'
import Footer from './components/Footer'
import { AppDispatch, useAppSelector } from '@/redux/store'
import { BiSearchAlt } from 'react-icons/bi'
import { toggleSearch } from '../redux/features/weatherSlice'
import { useDispatch } from 'react-redux'

export default function Home() {

  const dispatch = useDispatch<AppDispatch>();
  const search = useAppSelector((state) => state.weatherReducer.value.isSuccess)

  const onClickToggle = () => {
      dispatch(toggleSearch())
  }

  return (
    <section className="flex mx-auto flex-col items-center">
      {/* 
      // {/* Introductory text */}
      <Image src='/logo.png' className='mt-20' width={300} height={300} alt='No image'/>
      <div className='text-center text-white mt-9 px-10 md:mt-15'>
        <h1 className='text-3xl font-medium'>
          Discover the Weather in any location
        </h1>
        <p className='py-4  leading-8'>
          Search a location and get to know the 
          forecastand a five day prediction.
        </p>
      </div>
      {search ?
            <div className="flex flex-row items-center justify-center">
                <div className='flex justify-between 
                      bg-white rounded-3xl h-[50px] 
                      items-center px-5 w-[350px] mb-20'>
                      <input type='text' className='outline-none border-none w-full' placeholder = 'Search a location'/>
                      <a href='/forecast'><BiSearchAlt/></a>
                  </div> 
                  <Image src='/pngwing.png' className='bg-transparent mb-12 -mt-4'  onClick={onClickToggle} width={50} height={50} alt='No image'/>
            </div> 
            : 
            <button className="rounded-full bg-gradient-to-r from-blue-600
            text- to-blue-300 w-[400px] mt-5 mb-10 p-5 items-center text-white md:mt-10" onClick={onClickToggle}>
             Get Started
           </button>
        }
    </section>
  )
}
