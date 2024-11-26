import Link from 'next/link';

const Onboarding = () => {
    return (
        <div className="min-h-screen flex flex-col items-start justify-end space-y-8 bg-gray-800 p-6">
            <div className='relative h-full w-full flex flex-col items-start justify-end'>
                {/* <div className='absolute bottom-0 w-full opacity-40 h-2/5 bg-black blur'></div> */}
                <div className='absolute text-white w-full left-1/2 -translate-x-1/2'>
                    <div className="flex flex-col space-y-4 items-start text-left">
                        <h1 className="text-2xl text-white font-semibold">Ask Questions with Ease</h1>
                        <p className="text-sm text-white font-light">Post questions in any subject and get clear, reliable answers from students and contributors. Learning starts with a single question.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start w-full justify-center space-y-2">
                <Link href="/register" className="w-full">
                    <button className='w-full bg-primary text-white text-center py-3 px-4 rounded-lg' type="button">
                        Get started
                    </button>
                </Link>
                <p className="text-white w-full text-sm">Already have an account? <Link href="/login" className='font-bold underline transition duration-300 ease-in-out'>Log in</Link></p>
            </div>
        </div>
    )
}

export default Onboarding