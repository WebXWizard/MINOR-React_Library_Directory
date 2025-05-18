"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

const AdminSignUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters")
    .required("Name is required"),

  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .required("Password is required"),
});

const AdminSignUp = () => {
  const router = useRouter();
  const signUpForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      axios
        .post("http://localhost:5000/admin/add", values)
        .then((response) => {
          console.log(response.status);
          resetForm();
          toast.success("Admin Added Successfully");
          router.push("/user/adminLogin");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Failed to add Admin");
        });
    },
    validationSchema: AdminSignUpSchema,
  });

  return (
    <div>
      <div className="font-[sans-serif] flex items-center md:h-fit py-4 rounded-lg bg-gray-50 ">
        <div className="w-full max-w-4xl mx-auto ">
          <div className="grid md:grid-cols-2 gap-20 shadow w-full p-4 border border-gray-200 rounded-xl relative  ">
            <div className="grid grid-cols-1">
              <div className="">
                <div className="">
                  <div className=" mt-10 lg:mt-8">
                    <img
                      className="hidden md:block w-full rounded-xl "
                      src="https://cdni.iconscout.com/illustration/premium/thumb/sign-up-illustration-download-in-svg-png-gif-file-formats--log-register-form-user-interface-pack-design-development-illustrations-6430773.png"
                      alt="Hero Image"
                    />
                  </div>
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
                </div>
              </div>
            </div>
            <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-2xl shadow-md dark:bg-gray-800 font-[sans-serif]">
              <div className="px-8 py-8">
                <div className="flex justify-center mx-auto">
                  <h3 className="mt-0 text-2xl lg:text-3xl font-bold text-center text-indigo-600 dark:text-gray-200">
                    Add New Admin
                  </h3>
                </div>
                <div className="mt-6 justify-between"></div>
                <form onSubmit={signUpForm.handleSubmit}>
                  <div className="w-full mt-5">
                    <label className="block mb-2 text-xl "></label>
                    {signUpForm.errors.name && signUpForm.touched.name ? (
                      <div className="text-red-500 text-sm">
                        {signUpForm.errors.name}
                      </div>
                    ) : null}
                    <input
                      className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-white border rounded-xl dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                      type="text"
                      placeholder="Enter Your Name"
                      aria-label="Email Address"
                      id="name"
                      onChange={signUpForm.handleChange}
                      value={signUpForm.values.name}
                    />
                  </div>

                  <div className="w-full mt-4">
                    <label className="block mb-2 text-xl "></label>
                    {signUpForm.errors.email && signUpForm.touched.email ? (
                      <div className="text-red-500 text-sm">
                        {signUpForm.errors.email}
                      </div>
                    ) : null}
                    <input
                      className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-white border rounded-xl dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                      type="email"
                      placeholder="Email Address"
                      aria-label="Email Address"
                      id="email"
                      onChange={signUpForm.handleChange}
                      value={signUpForm.values.email}
                    />
                  </div>
                  <div className="w-full mt-4">
                    <label className="block mb-2 text-xl "></label>

                    {signUpForm.errors.password &&
                    signUpForm.touched.password ? (
                      <div className="text-red-500 text-sm">
                        {signUpForm.errors.password}
                      </div>
                    ) : null}
                    <input
                      className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-white border rounded-xl dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                      type="password"
                      placeholder="Enter Password"
                      aria-label="Password"
                      id="password"
                      onChange={signUpForm.handleChange}
                      value={signUpForm.values.password}
                    />
                  </div>
                  <div className="w-full mt-4">
                    <label className="block mb-2 text-xl "></label>
                    {signUpForm.errors.phone && signUpForm.touched.phone ? (
                      <div className="text-red-500 text-sm">
                        {signUpForm.errors.phone}
                      </div>
                    ) : null}
                    <input
                      className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-white border rounded-xl dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                      type="number"
                      placeholder="Enter Your Number"
                      aria-label="Password"
                      id="phone"
                      onChange={signUpForm.handleChange}
                      value={signUpForm.values.phone}
                    />
                  </div>
                  <div className="flex items-center justify-center mt-4">
                    <button className="flex items-center justify-center w-full px-3 py-2 mx-2 text-lg font-medium text-white transition-colors duration-300 transform bg-blue-600 rounded-xl hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
                      SignUp Now
                    </button>
                  </div>
                  <p className="text-md md:text-md font-light text-gray-600 dark:text-gray-400 p-2 font-[sans-serif]">
                    Already have an account?{" "}
                    <a
                      href="/user/login"
                      className="font-md font-semibold text-blue-600 hover:text-violet-800 dark:text-primary-500"
                    >
                      Login here
                    </a>
                  </p>
                </form>
              </div>
            </div>

            <div className="divider absolute left-0 right-0 mx-auto w-1 h-full border-2 border-gray-400 max-md:hidden" />
          </div>
        </div>
      </div>
       {/* Footer Section */}
      <footer className="w-full font-[sans-serif] bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/*Grid*/}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 gap-y-8 md:gap-8 py-10 max-w-sm mx-auto sm:max-w-3xl lg:max-w-full">
            <div className="col-span-full mb-2 lg:col-span-2 lg:mb-0">
              <a
                href="/"
                className="text-xl font-bold flex justify-center lg:justify-start"
              >
                React Library Directory
              </a>
              <p className="py-4 text-md text-gray-500 lg:max-w-xs text-center lg:text-left">
                Trusted in more than 100 countries &amp; 5 million customers.
                Have any query ?
              </p>
              <a
                href="/user/contactUs"
                className="py-2 px-5 h-9 block w-fit bg-indigo-600 rounded-full shadow-sm text-md text-white mx-auto transition-all  duration-500 hover:bg-indigo-700 lg:mx-0"
              >
                Contact us
              </a>
            </div>
            {/*End Col*/}
            <div className="lg:mx-auto text-left ">
              <h4 className="text-lg text-gray-900 font-medium mb-7">
                Company
              </h4>
              <ul className="text-md  transition-all duration-500">
                <li className="mb-6">
                  <a href="/" className="text-gray-600 hover:text-gray-900">
                    Home
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="/user/about"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/user/browseLibraries"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    Our Libraries
                  </a>
                </li>
              </ul>
            </div>
            {/*End Col*/}
            <div className="lg:mx-auto text-left ">
              <h4 className="text-lg text-gray-900 font-medium mb-7">
                Products
              </h4>
              <ul className="text-md  transition-all duration-500">
                <li className="mb-6">
                  <a
                    href="/user/browseLibraries"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    UI Components
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="/user/browseLibraries"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    UI Kits
                  </a>
                </li>
                <li>
                  <a
                    href="/user/browseLibraries"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    React Libraries
                  </a>
                </li>
              </ul>
            </div>
            {/*End Col*/}
            <div className="lg:mx-auto text-left ">
              <h4 className="text-lg text-gray-900 font-medium mb-7">
                Support
              </h4>
              <ul className="text-md  transition-all duration-500">
                <li className="mb-6">
                  <a
                    href="/user/contactUs"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Customer Support
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="/user/signup"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    Become a Member
                  </a>
                </li>
              </ul>
            </div>
            {/*End Col*/}
            <div className="lg:mx-auto text-left ">
              <h4 className="text-lg text-gray-900 font-medium mb-7">
                Subscribe
              </h4>
              <p className="text-md text-gray-500 leading-6 mb-7">
                Subscribe to get the latest news from us
              </p>
              <a
                href="/user/login"
                className="flex items-center justify-center gap-2 border border-indigo-600 rounded-full py-3 px-6 w-fit lg:mx-0  text-md text-indigo-600 font-semibold transition-all duration-500 hover:bg-indigo-50"
              >
                Subscribe
                <svg
                  width={15}
                  height={12}
                  viewBox="0 0 15 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.25 6L13.25 6M9.5 10.5L13.4697 6.53033C13.7197 6.28033 13.8447 6.15533 13.8447 6C13.8447 5.84467 13.7197 5.71967 13.4697 5.46967L9.5 1.5"
                    stroke="#4F46E5"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          {/*Grid*/}
          <div className="py-7 border-t border-gray-200">
            <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
              <span className="text-lg text-gray-500 ">
                ©<a href="https://pagedone.io/">React Library Directory</a>{" "}
                2025, All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AdminSignUp;
