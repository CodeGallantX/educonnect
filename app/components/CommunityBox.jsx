import CommunityCard from './CommunityCard'
import { FaPlusCircle } from 'react-icons/fa'

const LeftPane = () => {
  return (
    <div className="py-8 px-8 bg-gray-900 rounded-lg text-left text-white space-y-6 w-full">
      <div className="space-y-2">
      <h2 className="text-2xl font-semibold text-white">Welcome to Community</h2>
      <p classsName="text-sm">Join a community for peer learning and resources sharing</p>
      </div>
    <div className="flex flex-row items-center justify-start w-full space-x-5 w-3/4 lg:w-2/3 xl:w-1/2">
    <a href="/community" className="flex flex-row space-x-2 items-center justify-center text-white light:bg-gray-500 dark:bg-transparent border dark:border-gray-500 py-2 px-3 rounded-full w-full">
                <FaPlusCircle className="text-lg inline-block"/>
                <span className='text-sm'>Create community</span>
        </a>
        <a href="#suggestedCommunities" className="flex flex-row space-x-2 items-center justify-center text-white light:bg-gray-500 dark:bg-transparent border dark:border-gray-500 py-2 px-3 rounded-full w-full">
                <span className='text-sm'>Discover communities</span>
        </a>
    </div>
    </div>
  )
}

export default LeftPane