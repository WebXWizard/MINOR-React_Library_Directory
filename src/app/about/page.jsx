import React from "react";

const About = () => {
  return (
    <div>
      <>
        {/* Hero */}
        <div className="relative overflow-hidden mt-1 bg-gradient-to-bl from-indigo-900 via-transparent ">
          <div className="max-w-[65rem] mx-auto px-4 sm:px-6 lg:px-8 py-2">
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

        {/* About Us */}
        <div className="max-w-[90rem] bg-gradient-to-tr from-indigo-900 via-transparent py-10 sm:px-6 lg:px-8 lg:py-4 mx-auto font-[sans-serif]">
          <section className=" py-1 ">
            <div className="container flex md:flex-row flex-col mx-auto gap-16 rounded-lg mt-4 ">
              <div className="md:w-1/2">
                <div className="w-full flex justify-center items-center">
                  <img
                    className="rounded-xl w-full hidden md:block lg:block  border border-gray-100 mb-2 "
                    src=" https://cdn.dribbble.com/userupload/7161235/file/original-a9c6c5e6747b09b7487b18f3577ab6c4.png?resize=600x656"
                    alt=""
                  />
                </div>
              </div>
              <div className="max-w-5xl md:w-1/2 mx-auto ">
                {/* Grid */}
                <div className="grid md:grid-cols-1 lg:grid-cols- lg:gap-12 font-[sans-serif]">
                  <h1 className="block text-center text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl mt-2">
                    {/* <span className="text-indigo-600 ">About Our React Library</span> */}
                  </h1>
                  <div className="space-y-6 lg:space-y-10">
                    {/* Icon Block */}
                    <div className="flex gap-x-5 sm:gap-x-8">
                      <svg
                        className="shrink-0 mt-2 size-8 text-gray-800"
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
                        <rect width={18} height={10} x={3} y={11} rx={2} />
                        <circle cx={12} cy={5} r={2} />
                        <path d="M12 7v4" />
                        <line x1={8} x2={8} y1={16} y2={16} />
                        <line x1={16} x2={16} y1={16} y2={16} />
                      </svg>
                      <div className="grow">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                          Creative minds
                        </h3>
                        <p className="mt-1 text-gray-600">
                          We choose our teams carefully. Our people are the
                          secret to great work.
                        </p>
                      </div>
                    </div>
                    {/* End Icon Block */}
                    {/* Icon Block */}
                    <div className="flex gap-x-5 sm:gap-x-8">
                      <svg
                        className="shrink-0 mt-2 size-8 text-gray-800"
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
                        <path d="m7.5 4.27 9 5.15" />
                        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                        <path d="m3.3 7 8.7 5 8.7-5" />
                        <path d="M12 22V12" />
                      </svg>
                      <div className="grow">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                          Effortless updates
                        </h3>
                        <p className="mt-1 text-gray-600">
                          Benefit from automatic updates to all boards any time
                          you need to make a change to your website.
                        </p>
                      </div>
                    </div>
                    {/* End Icon Block */}
                    {/* Icon Block */}
                    <div className="flex gap-x-5 sm:gap-x-8">
                      <svg
                        className="shrink-0 mt-2 size-8 text-gray-800"
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
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                      </svg>
                      <div className="grow">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                          Strong empathy
                        </h3>
                        <p className="mt-1 text-gray-600">
                          We've user tested our own process by shipping over 1k
                          products for clients.
                        </p>
                      </div>
                    </div>
                    {/* End Icon Block */}
                  </div>
                  {/* End Col */}
                  <div className="space-y-6 lg:space-y-10">
                    {/* Icon Block */}
                    <div className="flex gap-x-5 sm:gap-x-8">
                      <svg
                        className="shrink-0 mt-2 size-8 text-gray-800"
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
                        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                        <path d="M4 22h16" />
                        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                      </svg>
                      <div className="grow">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                          Conquer the best
                        </h3>
                        <p className="mt-1 text-gray-600">
                          We stay lean and help your product do one thing well.
                        </p>
                      </div>
                    </div>
                    {/* End Icon Block */}
                    {/* Icon Block */}
                    <div className="flex gap-x-5 sm:gap-x-8">
                      <svg
                        className="shrink-0 mt-2 size-8 text-gray-800"
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
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx={9} cy={7} r={4} />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                      <div className="grow">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                          Designing for people
                        </h3>
                        <p className="mt-1 text-gray-600">
                          We actively pursue the right balance between
                          functionality and aesthetics, creating delightful
                          experiences.
                        </p>
                      </div>
                    </div>
                    {/* End Icon Block */}
                    {/* Icon Block */}
                    <div className="flex gap-x-5 sm:gap-x-8">
                      <svg
                        className="shrink-0 mt-2 size-8 text-gray-800"
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
                        <path d="M7 10v12" />
                        <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                      </svg>
                      <div className="grow">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                          Simple and affordable
                        </h3>
                        <p className="mt-1 text-gray-600">
                          From boarding passes to movie tickets, there's pretty
                          much nothing you can't store with this Library.
                        </p>
                      </div>
                    </div>
                    {/* End Icon Block */}
                  </div>
                  {/* End Col */}
                </div>
                {/* End Grid */}
              </div>
            </div>
            {/* End About Us */}
          </section>
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
        </div>
        {/* End About Us */}
      </>
    </div>
  );
};

export default About;
