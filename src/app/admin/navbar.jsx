import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      {/* Navbar Start */}
      <div className="mx-auto max-w-screen-2xl px-2 md:px-4 mt-1 ml-1 mr-1 rounded-lg bg-zinc-900">
        <header className="flex text-xl items-center justify-between py-1 font-[sans-serif]">
          {/* logo - start */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-bold  lg:text-2xl"
            aria-label="logo"
          >
            <img
              className="w-auto h-12 "
              src="https://raw.githubusercontent.com/react-icons/react-icons/master/react-icons.svg"
              alt=""
            />
          </Link>
          {/* logo - end */}
          {/* nav - start */}
          <nav className="hidden gap-12 lg:flex ">
            <Link
              href="/"
              className="text-md font-semibold text-white hover:border-b-2  border-blue-400 "
            >
              Home
            </Link>
            <Link
              href="/admin/dashboard"
              className="text-md font-semibold text-white hover:border-b-2  border-blue-400 "
            >
              Admin
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-1 text-md font-semibold text-white hover:border-b-2  border-blue-400"
            >
              About
            </Link>
            <Link
              href="/browseLibraries"
              className="text-md font-semibold text-white hover:border-b-2  border-blue-400"
            >
              Browse Libraries
            </Link>
            <Link
              href="contact"
              className="text-md font-semibold text-white hover:border-b-2  border-blue-400"
            >
              Contact
            </Link>
            <Link
              href="/addLibrary"
              className="text-md font-semibold text-white hover:border-b-2  border-blue-400"
            >
              AddLibrary
            </Link>
          </nav>
          {/* nav - end */}
          {/* buttons - start */}
          <div className="ml-5 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start ">
            <a
              href="/login"
              className="inline-block rounded-lg px-4 py-3 text-center text-xl font-semibold text-white outline-none ring-indigo-300"
            >
              Sign in
            </a>
            <a
              href="/signup"
              className="inline-block rounded-xl bg-indigo-600 px-6 py-3 text-center text-xl font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-800 focus-visible:ring active:bg-indigo-700 "
            >
              Sign up
            </a>
          </div>
          <button
            // type="button"

            className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            Menu
          </button>
          {/* buttons - end */}
        </header>
      </div>
      {/* Navbar Ends */}
    </div>
  );
};

export default Navbar;
