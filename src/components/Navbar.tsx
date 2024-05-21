import { useState } from "react";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import bg from '../assets/images/bg.png';
import SearchBar from "./SearchBar";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  const { isAuthenticated } = useAuth0();

  const toggleProfileMenu = () => {
    setIsProfileVisible(!isProfileVisible);
  };

  return (
    <nav className="bg-gradient-to-b from-indigo-600 to-purple-700 z-10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 relative flex h-16 items-center justify-between">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <a href="/" className="navbar-global text-white">Akashic Collections</a>
          <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white z-10" aria-controls="mobile-menu" aria-expanded="false">
            <span className="absolute -inset-0.5"></span>
            <span className="sr-only">Open main menu</span>
          </button>
        </div>
        <div className="flex-shrink-0 flex items-center">
          <a href="/">
            <img 
              className="h-20 w-auto rounded-md" 
              src={bg} 
              alt="Company Logo"
              style={{ filter: 'hue-rotate(270deg) brightness(70%) saturate(150%)' }} 
            />
          </a>
        </div>
        <div className="hidden sm:block sm:ml-6">
          <div className="flex space-x-4">
            <Link 
              to="/dashboard" 
              className="bg-blue-700 text-black hover:text-blue-300 rounded-md px-3 py-2 text-sm font-medium hover:bg-purple-900"
            >
              Dashboard
            </Link>
            <Link 
              to="/membership" 
              className="bg-blue-700 text-black hover:text-blue-300 rounded-md px-3 py-2 text-sm font-medium hover:bg-purple-900"
            >
              Membership
            </Link>
          </div>
        </div>
        <SearchBar />
        <div className="relative ml-3">
          <button
            onClick={toggleProfileMenu}
            className="flex items-center px-3 py-2 text-blue-600 border rounded border-zinc-800 bg-purple-800 hover:text-black hover:bg-purple-900 hover:border-black"
          >
            <FontAwesomeIcon icon={faUser} />
          </button>
          {isProfileVisible && (
            <div className="absolute border border-black bg-purple-900 right-0 mt-2 rounded shadow-lg">
              {isAuthenticated ? (
                <>
                  <LogoutButton className="p-3 rounded bg-purple-900 hover:bg-blue-900 hover:text-black cursor-pointer z-10">
                    <Link
                      to="/"
                      className="hover:bg-blue-900 place-items-center mt-4 lg:inline-block lg:mt-0 text-black hover:text-blue-300"
                    >
                      Logout
                    </Link>
                  </LogoutButton>
                  <hr className="border-t border-black my-2" />
                  <div className="p-3 rounded bg-purple-900 hover:bg-blue-900 hover:text-black cursor-pointer z-10">
                    <Link
                      to="/profile"
                      className="p-3 rounded hover:bg-blue-900 hover:text-blue-300 cursor-pointer"
                    >
                      Profile
                    </Link>
                  </div>
                </>
              ) : (
                <LoginButton className="p-3 rounded bg-purple-900 hover:bg-blue-900 hover:text-black cursor-pointer z-10">
                  <Link
                    to="/"
                    className="flex place-items-center mt-4 lg:inline-block lg:mt-0 text-black hover:text-blue-300 hover:bg-blue-900"
                  >
                    Login
                  </Link>
                </LoginButton>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;