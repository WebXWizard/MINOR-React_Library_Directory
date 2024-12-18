import React from "react";

const Home = () => {
  return (
    <div>
      {/* Navbar Start */}
      <div className="mx-auto max-w-screen-2xl px-2 md:px-4 mt-1 ml-1 mr-1 rounded-lg bg-zinc-900">
        <header className="flex text-xl items-center justify-between py-1 font-[sans-serif]">
          {/* logo - start */}
          <a
            href="/"
            className="inline-flex items-center gap-2 font-bold  lg:text-2xl"
            aria-label="logo"
          >
            <img
              className="w-auto h-12 "
              src="https://raw.githubusercontent.com/react-icons/react-icons/master/react-icons.svg"
              alt=""
            />
          </a>
          {/* logo - end */}
          {/* nav - start */}
          <nav className="hidden gap-12 lg:flex ">
            <a
              href="/"
              className="text-md font-semibold text-white hover:border-b-2  border-blue-400 "
            >
              Home
            </a>
            <a
              href="/admin/dashboard"
              className="text-md font-semibold text-white hover:border-b-2  border-blue-400 "
            >
              Admin
            </a>
            <a
              href="/about"
              className="inline-flex items-center gap-1 text-md font-semibold text-white hover:border-b-2  border-blue-400"
            >
              About
            </a>
            <a
              href="/browseLibraries"
              className="text-md font-semibold text-white hover:border-b-2  border-blue-400"
            >
              Browse Libraries
            </a>
            <a
              href="contact"
              className="text-md font-semibold text-white hover:border-b-2  border-blue-400"
            >
              Contact
            </a>
            <a
              href="/addLibrary"
              className="text-md font-semibold text-white hover:border-b-2  border-blue-400"
            >
              AddLibrary
            </a>
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
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-indigo-600 via-transparent font-[sans-serif] mt-1 rounded-lg bg-slate-100 overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
          {/* Announcement Banner */}
          <div className="flex justify-center">
            <a
              className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-lg text-gray-800 p-1 ps-3 rounded-full transition hover:border-gray-300 focus:outline-none focus:border-gray-300"
              href="#"
            >
              Join Us for More
              <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600">
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </a>
          </div>

          {/* End Announcement Banner */}
          {/* Title */}
          <div className="mt-5 max-w-2xl text-center mx-auto">
            <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
              Welcome to
              <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-800 text-transparent">
                The React Library Directory
              </span>
            </h1>
          </div>
          {/* End Title */}
          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-xl text-gray-500">
              The Library Hub Project aims to create a dynamic and inclusive
              community space that fosters a love for reading, learning, and
              collaboration.
            </p>
          </div>
          {/* Buttons */}
          <div className="mt-8 gap-3 flex justify-center">
            <a
              className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:from-violet-600 focus:to-blue-600 py-3 px-4"
              href="/browseLibraries"
            >
              Get Started
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
            <button
              type="button"
              href=""
              className="relative group p-2 ps-3 inline-flex items-center gap-x-2 text-sm font-mono rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
            >
              Browse Libraries
              <span className="flex justify-center items-center bg-gray-200 rounded-md size-7">
                <svg
                  className="shrink-0 size-4 group-hover:rotate-6 transition"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width={8} height={4} x={8} y={2} rx={1} ry={1} />
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                </svg>
              </span>
            </button>
          </div>
          {/* End Buttons */}
          <div className="mt-5 flex justify-center items-center gap-x-1 sm:gap-x-3">
            <span className="text-xl text-gray-600">Package Manager:</span>
            <span className="text-xl font-bold text-gray-900">npm</span>
            <svg
              className="size-5 text-gray-300"
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M6 13L10 3"
                stroke="currentColor"
                strokeLinecap="round"
              />
            </svg>
            <a
              className="inline-flex items-center gap-x-1 text-xl text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium"
              href="#"
            >
              Installation Guide
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/* End Hero */}

      {/* Features */}
      <div className="max-w-[85rem]  bg-slate-100 px-4 py-8 sm:px-6 lg:px-8 lg:py-2 mx-auto font-[sans-serif]">
        <div className="relative p-6 md:p-16">
          {/* Grid */}
          <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
            <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
              <h2 className="text-2xl text-gray-500 font-bold sm:text-4xl">
                Fully Customizable Hub to Match Your Unique Needs
              </h2>
              {/* Tab Navs */}
              <nav
                className="grid gap-4 mt-5 md:mt-10"
                aria-label="Tabs"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  type="button"
                  className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-none focus:bg-gray-200 p-4 md:p-5 rounded-xl active"
                  id="tabs-with-card-item-1"
                  aria-selected="true"
                  data-hs-tab="#tabs-with-card-1"
                  aria-controls="tabs-with-card-1"
                  role="tab"
                >
                  <span className="flex gap-x-6">
                    <svg
                      className="shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
                      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
                      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
                      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
                    </svg>
                    <span className="grow">
                      <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800">
                        Library Catalog
                      </span>
                      <span className="block mt-1 text-gray-800">
                        A well-organized database of React libraries, complete
                        with descriptions, usage examples, and links to
                        documentation.
                      </span>
                    </span>
                  </span>
                </button>
                <button
                  type="button"
                  className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-none focus:bg-gray-200 p-4 md:p-5 rounded-xl"
                  id="tabs-with-card-item-2"
                  aria-selected="false"
                  data-hs-tab="#tabs-with-card-2"
                  aria-controls="tabs-with-card-2"
                  role="tab"
                >
                  <span className="flex gap-x-6">
                    <svg
                      className="shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m12 14 4-4" />
                      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                    </svg>
                    <span className="grow">
                      <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800">
                        Integration Guides:
                      </span>
                      <span className="block mt-1 text-gray-800">
                        Detailed tutorials and guides on how to integrate
                        popular libraries into React projects, reducing setup
                        time and complexity
                      </span>
                    </span>
                  </span>
                </button>
                <button
                  type="button"
                  className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-none focus:bg-gray-200 p-4 md:p-5 rounded-xl"
                  id="tabs-with-card-item-3"
                  aria-selected="false"
                  data-hs-tab="#tabs-with-card-3"
                  aria-controls="tabs-with-card-3"
                  role="tab"
                >
                  <span className="flex gap-x-6">
                    <svg
                      className="shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                      <path d="M5 3v4" />
                      <path d="M19 17v4" />
                      <path d="M3 5h4" />
                      <path d="M17 19h4" />
                    </svg>
                    <span className="grow">
                      <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800">
                        Search and Filter Options
                      </span>
                      <span className="block mt-1 text-gray-800">
                        Users can easily search for libraries based on
                        categories, popularity, or specific features, helping
                        them find the right tools for their needs
                      </span>
                    </span>
                  </span>
                </button>
              </nav>
              {/* End Tab Navs */}
            </div>
            {/* End Col */}
            <div className="lg:col-span-6">
              <div className="relative">
                {/* Tab Content */}
                <div className="lg:col-span-4 mt-10 lg:mt-0">
                  <img
                    className="w-full rounded-xl"
                    src="https://i.pinimg.com/564x/07/82/09/07820922dee89d68b7e99102110ad43e.jpg"
                    alt="Hero Image"
                  />
                </div>

                {/* End Tab Content */}
                {/* SVG Element */}
                <div className="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
                  <svg
                    className="w-16 h-auto text-orange-500"
                    width={121}
                    height={135}
                    viewBox="0 0 121 135"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                      stroke="currentColor"
                      strokeWidth={10}
                      strokeLinecap="round"
                    />
                    <path
                      d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                      stroke="currentColor"
                      strokeWidth={10}
                      strokeLinecap="round"
                    />
                    <path
                      d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                      stroke="currentColor"
                      strokeWidth={10}
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                {/* End SVG Element */}
              </div>
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
          {/* Background Color */}
          <div className="absolute inset-0 grid grid-cols-12 size-full">
            <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-200 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full" />
          </div>
          {/* End Background Color */}
        </div>
      </div>
      {/* End Features */}

      {/* Testimonials with Footer */}
      <div className="max-w-[85rem]   bg-gradient-to-tl from-indigo-900 via-transparent px-4 py-10 sm:px-6 lg:px-8 lg:py-2 mx-auto font-[sans-serif]">
        {/* Grid */}
        <div className="md:grid md:grid-cols-2 md:gap-10 lg:gap-16 md:items-center">
          <div className="hidden md:block mb-12 md:mb-0 sm:px-6">
            <div className="relative">
              <img
                className="rounded-xl"
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=500&h=600&q=80"
                alt="Avatar"
              />
              {/* SVG Element */}
              <div className="absolute bottom-0 start-0 -z-[1] translate-y-10 -translate-x-14">
                <svg
                  className="max-w-40 h-auto text-gray-400"
                  width={696}
                  height={653}
                  viewBox="0 0 696 653"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="72.5" cy="29.5" r="29.5" fill="currentColor" />
                  <circle cx="171.5" cy="29.5" r="29.5" fill="currentColor" />
                  <circle cx="270.5" cy="29.5" r="29.5" fill="currentColor" />
                  <circle cx="369.5" cy="29.5" r="29.5" fill="currentColor" />
                  <circle cx="468.5" cy="29.5" r="29.5" fill="currentColor" />
                  <circle cx="567.5" cy="29.5" r="29.5" fill="currentColor" />
                  <circle cx="666.5" cy="29.5" r="29.5" fill="currentColor" />
                  <circle cx="29.5" cy="128.5" r="29.5" fill="currentColor" />
                  <circle cx="128.5" cy="128.5" r="29.5" fill="currentColor" />
                  <circle cx="227.5" cy="128.5" r="29.5" fill="currentColor" />
                  <circle cx="326.5" cy="128.5" r="29.5" fill="currentColor" />
                  <circle cx="425.5" cy="128.5" r="29.5" fill="currentColor" />
                  <circle cx="524.5" cy="128.5" r="29.5" fill="currentColor" />
                  <circle cx="623.5" cy="128.5" r="29.5" fill="currentColor" />
                  <circle cx="72.5" cy="227.5" r="29.5" fill="currentColor" />
                  <circle cx="171.5" cy="227.5" r="29.5" fill="currentColor" />
                  <circle cx="270.5" cy="227.5" r="29.5" fill="currentColor" />
                  <circle cx="369.5" cy="227.5" r="29.5" fill="currentColor" />
                  <circle cx="468.5" cy="227.5" r="29.5" fill="currentColor" />
                  <circle cx="567.5" cy="227.5" r="29.5" fill="currentColor" />
                  <circle cx="666.5" cy="227.5" r="29.5" fill="currentColor" />
                  <circle cx="29.5" cy="326.5" r="29.5" fill="currentColor" />
                  <circle cx="128.5" cy="326.5" r="29.5" fill="currentColor" />
                  <circle cx="227.5" cy="326.5" r="29.5" fill="currentColor" />
                  <circle cx="326.5" cy="326.5" r="29.5" fill="currentColor" />
                  <circle cx="425.5" cy="326.5" r="29.5" fill="currentColor" />
                  <circle cx="524.5" cy="326.5" r="29.5" fill="currentColor" />
                  <circle cx="623.5" cy="326.5" r="29.5" fill="currentColor" />
                  <circle cx="72.5" cy="425.5" r="29.5" fill="currentColor" />
                  <circle cx="171.5" cy="425.5" r="29.5" fill="currentColor" />
                  <circle cx="270.5" cy="425.5" r="29.5" fill="currentColor" />
                  <circle cx="369.5" cy="425.5" r="29.5" fill="currentColor" />
                  <circle cx="468.5" cy="425.5" r="29.5" fill="currentColor" />
                  <circle cx="567.5" cy="425.5" r="29.5" fill="currentColor" />
                  <circle cx="666.5" cy="425.5" r="29.5" fill="currentColor" />
                  <circle cx="29.5" cy="524.5" r="29.5" fill="currentColor" />
                  <circle cx="128.5" cy="524.5" r="29.5" fill="currentColor" />
                  <circle cx="227.5" cy="524.5" r="29.5" fill="currentColor" />
                  <circle cx="326.5" cy="524.5" r="29.5" fill="currentColor" />
                  <circle cx="425.5" cy="524.5" r="29.5" fill="currentColor" />
                  <circle cx="524.5" cy="524.5" r="29.5" fill="currentColor" />
                  <circle cx="623.5" cy="524.5" r="29.5" fill="currentColor" />
                  <circle cx="72.5" cy="623.5" r="29.5" fill="currentColor" />
                  <circle cx="171.5" cy="623.5" r="29.5" fill="currentColor" />
                  <circle cx="270.5" cy="623.5" r="29.5" fill="currentColor" />
                  <circle cx="369.5" cy="623.5" r="29.5" fill="currentColor" />
                  <circle cx="468.5" cy="623.5" r="29.5" fill="currentColor" />
                  <circle cx="567.5" cy="623.5" r="29.5" fill="currentColor" />
                  <circle cx="666.5" cy="623.5" r="29.5" fill="currentColor" />
                </svg>
              </div>
              {/* End SVG Element */}
            </div>
          </div>
          {/* End Col */}
          <div>
            {/* Blockquote */}
            <blockquote className="relative">
              <svg
                className="absolute top-0 start-0 transform -translate-x-8 -translate-y-4 size-24 text-gray-200"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                  fill="currentColor"
                />
              </svg>
              <div className="relative z-10">
                <p className="text-md font-semibold text-gray-800 tracking-wide uppercase mb-3">
                  Featured client
                </p>
                <p className="text-xl font-medium italic text-gray-800 md:text-2xl md:leading-normal xl:text-3xl xl:leading-normal">
                  To say that switching to this Library Hub has been
                  life-changing is an understatement. My business has tripled
                  and I got my life back.
                </p>
              </div>
              <footer className="mt-6">
                <div className="flex items-center">
                  <div className="md:hidden shrink-0">
                    <img
                      className="size-12 rounded-full"
                      src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                      alt="Avatar"
                    />
                  </div>
                  <div className="ms-4 md:ms-0">
                    <div className="text-base font-semibold text-gray-800">
                      Nicole Grazioso
                    </div>
                    <div className="text-xs text-gray-500">
                      Director Payments &amp; Risk | Airbnb
                    </div>
                  </div>
                </div>
              </footer>
              <div className="mt-8 lg:mt-14">
                <a
                  className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none"
                  href="#"
                >
                  Read the story
                </a>
              </div>
            </blockquote>
            {/* End Blockquote */}
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}

        {/* Footer Section */}
        <footer className=" relative flex justify-center max-w-[75rem] px-4 py-10 sm:px-6 lg:px-2 lg:py-2 mx-auto">
          <div className="container p-4 mx-auto md:p-8 lg:flex-row dark:divide-gray-600">
            <div className="flex flex-col justify-center pt-6 lg:pt-0 mt-10">
              <div className="flex justify-center space-x-8">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="Instagram"
                  className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-600 dark:text-gray-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
                  </svg>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="Pinterest"
                  className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-600 dark:text-gray-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    className="w-4 h-4"
                  >
                    <path d="M16.021 0c-8.828 0-15.984 7.156-15.984 15.984 0 6.771 4.214 12.552 10.161 14.88-0.141-1.266-0.266-3.203 0.052-4.583 0.292-1.25 1.875-7.943 1.875-7.943s-0.479-0.964-0.479-2.375c0-2.219 1.292-3.88 2.891-3.88 1.365 0 2.026 1.021 2.026 2.25 0 1.37-0.87 3.422-1.323 5.323-0.38 1.589 0.797 2.885 2.365 2.885 2.839 0 5.026-2.995 5.026-7.318 0-3.813-2.75-6.49-6.677-6.49-4.547 0-7.214 3.417-7.214 6.932 0 1.375 0.526 2.854 1.188 3.651 0.13 0.161 0.146 0.302 0.109 0.464-0.12 0.5-0.391 1.599-0.443 1.818-0.073 0.297-0.229 0.359-0.536 0.219-1.99-0.922-3.245-3.839-3.245-6.193 0-5.036 3.667-9.672 10.563-9.672 5.542 0 9.854 3.958 9.854 9.229 0 5.516-3.474 9.953-8.307 9.953-1.62 0-3.141-0.839-3.677-1.839l-1 3.797c-0.359 1.391-1.339 3.135-2 4.193 1.5 0.458 3.078 0.714 4.734 0.714 8.813 0 15.979-7.151 15.979-15.984 0-8.828-7.167-15.979-15.979-15.979z"></path>
                  </svg>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="Twitter"
                  className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-600 dark:text-gray-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    className="w-4 h-4"
                  >
                    <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
                  </svg>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="Facebook"
                  className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-600 dark:text-gray-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    className="w-4 h-4"
                  >
                    <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                  </svg>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="Gmail"
                  className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-600 dark:text-gray-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    className="w-4 h-4"
                  >
                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
        {/* Footer Section Ends */}
      </div>
      {/* End Testimonials */}
    </div>
  );
};

export default Home;
