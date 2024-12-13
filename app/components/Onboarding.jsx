import Link from 'next/link';

const Onboarding = () => {
    return (
        <div className="min-h-screen md:hidden flex flex-col items-start justify-end space-y-8 light:bg-gray-200 dark:bg-gray-800">
            <div className='relative h-[100vh] w-full flex flex-col items-start justify-end'>
                <div className='absolute bottom-0 w-full opacity-40 h-1/3 bg-black blur z-10'></div>
                <img 
                    // src="https://media.istockphoto.com/id/1588289977/photo/happy-black-females-student-during-a-class-in-lecture-hall-looking-at-camera.jpg?s=612x612&w=0&k=20&c=o2l4DsMWHhZ3Oqq8hxrGoKqJfC1S2kAfnjUHlRJuD-k=" 
                    src="https://media.istockphoto.com/id/2160333909/photo/multiracial-group-of-university-students-sitting-in-the-cafeteria-studying-together-after.jpg?s=612x612&w=0&k=20&c=YsttfMlL_cNQg1T37F6O7_sqDjkHR8fEBsx26O4h1iQ=" 
                    className='absolute w-full h-full object-cover z-0'
                    alt="Onboarding illustration" />
                <div className='absolute w-full bottom-1/4 translate-y-16 left-1/2 -translate-x-1/2 p-6 pb-2 z-20'>
                    <div className="flex flex-col space-y-3 items-start text-left text-white">
                        <h1 className="text-2xl font-semibold">Ask Questions with Ease</h1>
                        <p className="text-sm font-light">Post questions in any subject and get clear, reliable answers from students and contributors. Learning starts with a single question.</p>
                    </div>
                </div>
            <div className="absolute bottom-8 z-20 flex flex-col items-start w-full justify-center space-y-2 p-6 pb-0">
                <Link href="/register" className="w-full">
                    <button className='w-full bg-primary text-white text-center py-3 px-4 rounded-lg' type="button">
                        Get started
                    </button>
                </Link>
                <p className="w-full text-sm text-white">Already have an account? <Link href="/login" className='font-bold underline transition duration-300 ease-in-out'>Log in</Link></p>
            </div>
            </div>
        </div>
    )
}

export default Onboarding;