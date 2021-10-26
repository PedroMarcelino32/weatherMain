import React from 'react';
import { Link } from 'react-router-dom';
import Toggle from './theme-toggle';

const NavBar = () => {
  const [isMenuOpened, setIsMenuOpened] = React.useState(false);

  const toggleButton = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  return (
    <nav className="dark:text-white mb-4">
      <div className="bg-gradient-to-r from-blue-100 dark:from-black via-green-200 dark:via-transparent to-indigo-400 dark:to-gray-700 w-auto h-6"></div>
      <div className="2xl:max-w-6xl xl:max-w-4xl lg:max-w-4xl md:max-w-2xl mx-auto sm:px-6 md:px-0 lg:px-2 xl:px-0">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center justify-between md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-indigo-700 dark:text-white hover:text-white hover:bg-indigo-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleButton}
            >
              <span className="sr-only">
                {isMenuOpened ? 'Close main menu' : 'Open main menu'}
              </span>
              {isMenuOpened ? (
                <svg
                  className="block bg-green-200 dark:bg-transparent h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block bg-green-200  dark:bg-transparent h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
            <Toggle />
          </div>
          <div className="hidden md:contents">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 bg-green-200 dark:bg-transparent stroke-current text-indigo-500 dark:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
              />
            </svg>
            <Link to="/">
              <h3 className="ml-1 text-xl font-semibold">reactWeather</h3>
            </Link>
            <div className="flex-1 flex items-center justify-end sm:items-stretch sm:justify-end">
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4 items-center">
                  <Link
                    to="/about"
                    className="text-gray-500 dark:text-white hover:text-gray-700 dark:hover:text-gray-600 px-3 py-2 rounded-md text-lg font-medium"
                  >
                    About
                  </Link>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </nav>
  );
};

export default NavBar;
