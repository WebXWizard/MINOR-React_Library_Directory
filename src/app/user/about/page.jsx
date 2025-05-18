"use client";
import React from "react";

const About = () => {
  return (
    <div>
      {/* Hero */}
      <div className="relative overflow-hidden mt-1 bg-gradient-to-bl from-indigo-900 via-transparent font-[sans-serif] to-indigo-900">
        <div className="max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="max-w-2xl text-center mx-auto">
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl">
              React Library Hub Is Designed for
              <span className="text-blue-600"> You to Get More Simple</span>
            </h1>
          </div>
          <div className="mt-10 relative max-w-5xl mx-auto">
            <div className="w-full object-cover h-96 sm:h-[480px] bg-[url('https://i.pinimg.com/564x/52/9f/59/529f59b59e2e18b081d572f21208d38f.jpg')] bg-no-repeat bg-center bg-cover rounded-xl" />
            <div className="absolute inset-0 size-full">
              <div className="flex flex-col justify-center items-center size-full">
                <a
                  className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                  href="#"
                >
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
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  Play the overview
                </a>
              </div>
            </div>
            <div className="absolute bottom-12 -start-20 -z-[1] size-48 bg-gradient-to-b from-orange-500 to-white p-px rounded-lg">
              <div className="bg-white size-48 rounded-lg" />
            </div>
            <div className="absolute -top-12 -end-20 -z-[1] size-48 bg-gradient-to-t from-blue-600 to-cyan-400 p-px rounded-full">
              <div className="bg-white size-48 rounded-full" />
            </div>
          </div>
        </div>
      </div>
      {/* End Hero */}
    </div>
  );
};

export default About;
