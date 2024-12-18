"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
// import { useParams, Link } from "react-router-dom";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

const Browse = () => {
  const [product, setProduct] = useState([]);
  const [selLibrary, setSelLibrary] = useState(null);

  const fetchProduct = async () => {
    const res = await fetch("http://localhost:5000/library/getall");
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    if (res.status === 200) {
      // const data = await res.json();
      console.log(data);
      setProduct(data);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  const displayProduct = () => {
    return product.map((obj) => (
      <div className="container font-sans-serif">
        {/* <Link href={"/view/" + obj._id} className=""> */}
        <div className="">
          <div className="container mx-auto px-1 py-1">
            <div className="flex sm:justify-center gap-12 rounded-xl px-0 shadow-2xl ">
              <div className="bg-white dark:bg-gray-800 shadow-lg  rounded-lg overflow-hidden">
                <img
                  src={obj.url}
                  alt="Headless UI"
                  className="w-96 h-72 object-cover"
                />
                <div className="p-4 md:p-6 mb-2">
                  <h3 className="text-3xl font-bold font-[sans-serif] text-indigo-500 dark:text-indigo-400 mb-8">
                    {obj.name}
                  </h3>

                  <Button
                    onClick={() => {
                      open();
                      setSelLibrary(obj);
                    }}
                    className="inline-block w-full text-center bg-blue-500 text-white py-2 text-xl rounded-md hover:bg-blue-700 transition font-[sans-serif]"
                  >
                    Browse Library
                  </Button>
                </div>
              </div>

              {/* Add more items as needed, following the same structure */}
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="">
      {/* Dialogue Panel */}
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none font-sans-serif"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-2">
            {selLibrary !== null && (
              <DialogPanel
                transition
                className="w-full max-w-md rounded-xl bg-gray-200 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
              >
                <img
                  src={selLibrary.url}
                  alt=""
                  className=" mt-2 w-full h-72 object-cover rounded-xl mb-2"
                />
                <div className="space-y-4 text-gray-700  mb-4 text-lg two-lines">
                  <p className="text-gray-700 text-xl">
                    <strong>Library Name:</strong> {selLibrary.name}
                  </p>
                  <p className="text-gray-700 text-xl">
                    <strong>Category:</strong> {selLibrary.category}
                  </p>
                  <p className="text-gray-700 text-xl">
                    <strong>Package_Name:</strong> {selLibrary.package_name}
                  </p>
                  <p className="text-gray-700 text-xl">
                    <strong>Description:</strong> {selLibrary.description}
                  </p>
                </div>

                <div className="mt-6">
                  <a
                    href={selLibrary.link}
                    className="inline-block w-full text-center bg-indigo-800 text-white py-2 text-xl rounded-md hover:bg-gray-700 transition"
                  >
                    View Library
                  </a>
                </div>
              </DialogPanel>
            )}
          </div>
        </div>
      </Dialog>
      <div className="container">
         {/* Title */}
         <div className="mt-4 max-w-xl text-center mx-auto">
              <h1 className="block font-bold text-gray-800 text-3xl md:text-4xl lg:text-6xl">
                Explore{" "}
                <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-800 text-transparent">
                 Our React Libraries
                </span>
              </h1>
            </div>
           
        <input
          type="text"
          placeholder="Search Items"
          className="form-control w-75 mx-auto rounded-lg border border-black text-lg font-sans-serif  px-4 py-1 mt-4 ml-8"
        />
      </div>

      <div className="container ">
        <div className=" py-4 lg:ml-16 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {" "}
          {displayProduct()}{" "}
        </div>
      </div>
    </div>
  );
};

export default Browse;
