"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

const SignUpSchema = Yup.object().shape({
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

  phone: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(8)
    .required("A phone number is required"),
});

const SignUp = () => {
  const router = useRouter();
  const signUpForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      axios
        .post("http://localhost:5000/user/add", values)
        .then((response) => {
          console.log(response.status);
          resetForm();
          toast.success("User Added Successfully");
          router.push("/login");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Failed to add User");
        });
    },
    validationSchema: SignUpSchema,
  });

  return (
    <div>
      <div className="font-[sans-serif] flex items-center md:h-fit py-4 rounded-lg bg-gray-50 ">
        <div className="w-full max-w-5xl mx-auto ">
          <div className="grid md:grid-cols-2 gap-20  shadow w-full sm:p-8 p-6 border border-gray-200 rounded-xl relative  ">
            <div>
              <div className="mb-16  ">
                <a href="">
                  <img
                    src="https://uxwing.com/wp-content/themes/uxwing/download/editing-user-action/signup-icon.png"
                    alt="logo"
                    className="w-32 inline-block ml-12 "
                  />
                </a>
              </div>
              <div className="space-y-8 hidden mx-2 sm:inline">
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 bg-blue-600 fill-white rounded-full p-1 shrink-0"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  <h4 className="text-gray-800 text-xl font-bold hidden mx-2 sm:inline">
                    Create Your Account
                  </h4>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 bg-blue-600 fill-white rounded-full p-1 shrink-0"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  <h4 className="text-gray-800 text-lg font-bold hidden mx-2 sm:inline">
                    Simple &amp; Secure Registration
                  </h4>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 bg-blue-600 fill-white rounded-full p-1 shrink-0"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  <h4 className="text-gray-800 text-lg font-bold hidden mx-2 sm:inline">
                    Terms and Conditions Agreement
                  </h4>
                </div>
              </div>
              <div className="flex items-center mt-6 -mx-2 ">
                <button
                  type="button"
                  className=" items-center justify-center w-full px-4 py-3 mx-2 text-lg font-medium text-white transition-colors duration-300 transform bg-blue-600 rounded-xl hover:bg-blue-400 focus:bg-blue-400 focus:outline-none hidden sm:inline"
                >
                  <svg
                    className="w-4 h-4 mx-2 fill-current hidden sm:inline"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
                  </svg>

                  <span className="hidden mx-2 sm:inline">
                    Sign up with Google
                  </span>
                </button>

                <a
                  href="#"
                  className="p-3 mx-2 text-sm font-medium text-gray-500 transition-colors duration-300 transform bg-gray-300 rounded-lg hover:bg-gray-200 hidden sm:inline"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-2xl shadow-md dark:bg-gray-800 font-[sans-serif]">
              <div className="px-8 py-8">
                <div className="flex justify-center mx-auto">
                  <h3 className="mt-0 text-2xl font-bold text-center text-gray-600 dark:text-gray-200">
                    Create Your Account
                  </h3>
                </div>

                <div className="mt-6 justify-between">
                  <div className="mt-3 md:flex md:items-center md:-mx-2">
                    <button className="flex justify-center w-full px-6 py-3 text-white bg-blue-500 rounded-lg md:w-auto md:mx-2 focus:outline-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="mx-2 text-md">Client</span>
                    </button>
                    <button className="flex justify-center w-full px-6 py-3 mt-4 text-blue-500 border border-blue-500 rounded-lg md:mt-0 md:w-auto md:mx-2 dark:border-blue-400 dark:text-blue-400 focus:outline-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <a
                        className="mx-2 text-md hidden lg:inline "
                        href="/login"
                      >
                        Worker
                      </a>
                    </button>
                  </div>
                </div>
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
                    <button
                      // type="button"
                      className="flex items-center justify-center w-full px-4 py-3 mx-2 text-lg font-medium text-white transition-colors duration-300 transform bg-blue-600 rounded-xl hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
                    >
                      {/* <svg class="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                    <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
                  </svg> */}
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="divider absolute left-0 right-0 mx-auto w-1 h-full border-2 border-gray-400 max-md:hidden" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
