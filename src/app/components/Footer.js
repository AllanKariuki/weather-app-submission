import React from 'react'
import {  BiHomeAlt, BiUser, BiSearchAlt } from 'react-icons/bi'
import Link from 'next/link'

const Footer = () => {
  return (
        <div className='bottom-2 lg:bottom-8 mx-auto h-[86px] max-w-[260px] rounded-full bg-black/20 -mt-3
        backdrop-blur-2xl overflow-hidden flex justify-between items-center text-2xl text-white/50'>
            <Link href='/' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
                 <BiHomeAlt/>
             </Link>
             <Link href='/search' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
                 <BiSearchAlt/>
             </Link>
             <Link href='/' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
                <BiUser/>
             </Link>
        </div>
  )
}

export default Footer