"use client";

import { IoIosArrowBack, IoIosArrowForward, IoMdWallet } from "react-icons/io";
import { IoBookmarkOutline, IoPeopleSharp } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

const Testimonial = () => {
  return (
    <>
      <div className="bg-zinc-200 ">
        <div className="p-4 py-2 mx-auto w-full max-w-screen-xl lg:py-4">
          {/* Card Layout */}

          {/* Recommended exam section layout part-1*/}
          <div className="py-2 lg:py-4 mx-auto flex justify-between text-2xl font-bold">
            <h3 className="text-black">Testimonials</h3>
            {/* <h3 className="text-blue-500 hover:text-blue-900 transition delay-150"><Link href={"/homepage"}>See All</Link></h3> */}
          </div>
          {/* Recommended exam section layout all cards part-2*/}
          <div className="card-main-div h-[300px] w-auto flex gap-4 space-x-4 overflow-x-auto scrollbar-hide">
            {/* First card */}
            <div className="card-1 h-auto w-[370px] border border-black  rounded-xl flex-shrink-0">
              <Image
                src="https://i.pinimg.com/280x280_RS/60/aa/f6/60aaf6de5a1fd948969fb8c5f866c1ee.jpg"
                width={140}
                height={12}
                alt="Picture of the author"
                className="rounded-full h-[50%] m-auto my-4"
              />
              <h3 className="text-center text-2xl font-bold">John Doe</h3>
              <p className="ml-4 mt-2 mx-2  font-bold py-2 ">
                Dummy ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae ab esse dolores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Testimonial;
