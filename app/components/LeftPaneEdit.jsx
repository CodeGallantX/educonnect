import CommunityCard from './CommunityCard'
import { FaPlusCircle } from 'react-icons/fa'

const LeftPane = () => {
  return (
    <div className="flex-col items-start justify-center w-full space-y-5">
        <a href="/community" className="flex flex-row space-x-2 items-center justify-center text-white light:bg-gray-500 dark:bg-gray-900 py-2 px-3 rounded-full w-full">
                <FaPlusCircle className="text-lg inline-block"/>
                <span className='text-sm'>Create community</span>
        </a>
        <div>
          <CommunityCard />
        </div>
        <div className='flex flex-col items-start justify-center text-sm text-white space-y-2'>
          <a href="#">About us</a>
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Settings</a>
        </div>
        <div>
          <p className='text-sm text-white mt-auto'>© 2024 EduConnect. All rights reserved.</p>
        </div>
    </div>
  )
}

export default LeftPane