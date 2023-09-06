"use client";
import Image from 'next/image'
import sun from '../../../public/sunny-icon-0.png'
import { AppDispatch, useAppSelector } from '@/redux/store'
import { useDispatch } from 'react-redux'
import { fetchWeather } from '../../redux/features/weatherSlice';


const page = () => {

  // const dispatch = useDispatch();
  // const searchResult = useAppSelector((state) => state.weatherReducer.value.weatherResult);
  // const result = searchResult
  // dispatch(fetchWeather());
  return (
    <div className='items-center justify-center'>
      
        <div className='container mx-auto flex flex-row justify-center space-between text-white'>
          <div className='px-10 py-10'>
            <h3 className='text-2xl'>Nairobi, Kenya</h3>
            <p className='text-6xl py-5 px-5'>25°</p>
            <div className='rounded-full bg-black bg-opacity-10 py-2 px-4 w-20'>Sunny</div>
          </div>
          <Image src={sun} width={250} height={250}/>
        </div>
        {/* Humidity, Pressure and airspeed  */}
        <div className='flex flex-row py-3 mb-10 justify-center gap-16 text-white'>
          <div className='rounded-full bg-black bg-opacity-10 py-2 px-4 w-20'>Sunny</div>
          <div className='rounded-full bg-black bg-opacity-10 py-2 px-4 w-20'>Sunny</div>
          <div className='rounded-full bg-black bg-opacity-10 py-2 px-4 w-20'>Sunny</div>
        </div>
        {/* Today's prediction */}
        <h2 className='ml-10 text-white text-xl text-center'>Today</h2>
        <div className='py-10 flex flex-row space-x-10 text-white mx-auto justify-center'>
          <div className="flex flex-col py-1 items-center">
            <p>Now</p>
            <Image src={sun} width={50} height={50}/>
            <p>25°</p>
          </div>
          <div className="flex flex-col py-1 items-center">
            <p>9 AM</p>
            <Image src={sun} width={50} height={50}/>
            <p>25°</p>
          </div>
          <div className="flex flex-col py-1 items-center">
            <p>10 AM</p>
            <Image src={sun} width={50} height={50}/>
            <p>25°</p>
          </div>
          <div className="flex flex-col py-1 items-center">
            <p>11 AM</p>
            <Image src={sun} width={50} height={50}/>
            <p>25°</p>
          </div>
          <div className="flex flex-col py-1 items-center">
            <p>12 PM</p>
            <Image src={sun} width={50} height={50}/>
            <p>25°</p>
          </div>
        </div>

        {/* Five Day Prediction */}
        <div className="flex flex-col py-5 justify-center items-center text-white mb-10 bg-opacity-100">
          <div className="flex flex-row gap-30 items-center space-x-32 border-b-1.5 border-white">
            <p>Tuesday</p>
            <p>25°/15°</p>
            <Image src={sun} width={50} height={50}/>
          </div>
          <div className="flex flex-row gap-30 items-center space-x-32 border-b-1.5 border-white">
            <p>Tuesday</p>
            <p>25°/15°</p>
            <Image src={sun} width={50} height={50}/>
          </div>
          <div className="flex flex-row gap-30 items-center space-x-32 border-b-1.5 border-white">
            <p>Tuesday</p>
            <p>25°/15°</p>
            <Image src={sun} width={50} height={50}/>
          </div>
          <div className="flex flex-row gap-30 items-center space-x-32 border-b-1.5 border-white">
            <p>Tuesday</p>
            <p>25°/15°</p>
            <Image src={sun} width={50} height={50}/>
          </div>
          <div className="flex flex-row gap-30 items-center space-x-32 border-b-1.5 border-white">
            <p>Tuesday</p>
            <p>25°/15°</p>
            <Image src={sun} width={50} height={50}/>
          </div>
        </div>
    </div>
  )
}

export default page