import { FaPlusCircle } from 'react-icons/fa'

const LeftPane = () => {
  return (
    <div className="p-4 sm:p-8 bg-gray-900 rounded-lg text-left text-white space-y-6 w-full">
      <div className="space-y-2">
      <h2 className="text-2xl font-semibold text-white">Welcome to Community</h2>
      <p className="text-sm">Join a community for peer learning and resources sharing</p>
      </div>
    <div className="flex flex-row items-center justify-start w-full space-x-3 sm:space-x-5 w-3/4 lg:w-2/3 xl:w-1/2">
    <a href="/create-community" className="text-white bg-transparent border border-gray-500 py-2 px-3 rounded-full space-x-2">
                <FaPlusCircle className="text-lg inline-block"/>
                <span className='text-sm'>Create community</span>
        </a>
        <a href="#discoveredCommunities" className="text-center text-white bg-transparent border border-gray-500 py-2 px-3 rounded-full">
                <span className='text-sm'>Discover communities</span>
        </a>
    </div>
    </div>
  )
}

export default LeftPane