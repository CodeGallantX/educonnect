import ProfilePic from "./ProfilePic";

const SearchBox = () => {
  return (
    <div className="w-full p-4 rounded-lg bg-gray-900">
      <div className="flex items-center space-x-4">
        <ProfilePic className="w-12 h-12" />
        <div className="flex-grow mx-4">
          <input
            type="search"
            id="searchBox"
            className="w-full max-w-lg rounded-md py-2 px-4 text-gray-600 text-white text-sm bg-gray-800 border border-gray-600 focus:outline-none focus:border focus:border-gray-300 transition duration-200 ease"
            placeholder="Search..."
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBox;