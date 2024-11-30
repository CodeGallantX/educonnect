import React from 'react'
import Link from 'next/link';
import CommunityCard from './CommunityCard'
import { FaPlusCircle } from 'react-icons/fa'

const LeftPane = () => {
  return (
    <div className="flex-col items-start justify-center w-full space-y-5">
        <Link href="/create-community" className="flex flex-row space-x-2 items-center justify-center text-white light:bg-gray-500 dark:bg-gray-900 py-2 px-3 rounded-full w-full">
                <FaPlusCircle className="text-lg inline-block"/>
                <span className='text-sm'>Create community</span>
        </Link>
        <div>
          <CommunityCard />
        </div>
        <div className='flex flex-col items-start justify-center text-sm text-white space-y-2'>
          <Link href="#">About us</Link>
          <Link href="#">Terms of Use</Link>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Settings</Link>
        </div>
        <div>
          <p className='text-sm text-white mt-auto'>© 2024 EduConnect. All rights reserved.</p>
        </div>
    </div>
  )
}

export default LeftPane