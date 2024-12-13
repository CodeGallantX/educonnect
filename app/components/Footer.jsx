import { useNavigate } from "react-router-dom";
import { PiHouseBold, PiNotePencilBold } from "react-icons/pi";
import { IoGridOutline } from "react-icons/io5";
import { FaSignOutAlt } from "react-icons/fa";
import ProfilePic from './ProfilePic';

const Footer = () => {

  const navigate = useNavigate();

  return (
    <>
      <footer className="flex flex-row items-center justify-center space-x-3 py-6 text-white px-4 mx-auto bg-gray-900 fixed bottom-0 w-full">
        <nav className="md:hidden flex flex-row items-center justify-between space-x-8">
          <a
            href="/home"
            className="text-gray-400 hover:text-gray-600 hover:text-white"
          >
            <PiHouseBold className="text-2xl" />
          </a>
          <a
            href="/post"
            className="text-gray-400 hover:text-gray-600 hover:text-white"
          >
            <PiNotePencilBold className="text-2xl" />
          </a>
          <a href="/profile">
            <ProfilePic className="w-16 h-16"/>
          </a>
          <a
            href="/community"
            className="text-gray-400 hover:text-gray-600 hover:text-white"
          >
            <IoGridOutline className="text-2xl" />
          </a>
          
          <button
            onClick={() => navigate('/')}
            className="text-gray-400 hover:text-gray-600 hover:text-white"
          >
            <FaSignOutAlt className="text-2xl" />
          </button>
        </nav>
      </footer>
    </>
  );
};

export default Footer;