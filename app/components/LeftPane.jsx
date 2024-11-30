import React from 'react'
import Link from 'next/link';
import CommunityCard from './CommunityCard'
import { FaPlusCircle } from 'react-icons/fa'

const LeftPane = () => {
  return (
    <div className="flex-col items-start justify-center w-full space-y-5">
        <Link href="/create-community" className=" flex flex-row space-x-2 items-center justify-center text-white light:bg-gray-500 dark:bg-gray-900 py-2 px-3 rounded-full w-full">
                <FaPlusCircle className="text-lg inline-block"/>
                <span className='text-sm'>Create community</span>
        </Link>
        <div>
          <CommunityCard />
        </div>
        <div></div>
    </div>
  )
}

export default LeftPane