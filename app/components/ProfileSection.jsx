import ProfilePic from './ProfilePic';

const Profile = () => {
    return (
        <div>
            <div className="flex flex-col space-y-4 sm:flex-row items-center justify-center sm:space-x-10">
                <ProfilePic className="w-32 h-32 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-[160px] lg:h-[160px] xl:w-[250px] xl:h-[250px] rounded-full object-cover" />
                <div className="space-y-2">
                    <h1 className="text-white text-4xl font-semibold">Christabel Orji</h1>
                    <button className="text-base text-gray-400">Edit your profile</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
