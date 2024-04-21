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
          <div className="py-2 lg:py-4 mx-auto flex justify-between text-2xl font-bold">
            <h3 className="text-black">Testimonials</h3>
          </div>
          <div className="card-main-div h-[300px] w-auto flex gap-2 space-x-4 overflow-x-auto scrollbar-hide">
            {/* First card */}
            <div className="card-1 h-auto w-[370px] border border-black  rounded-xl flex-shrink-0">
              <Image
                src="/landscape-1.jpg"
                width={150}
                height={12}
                alt="Picture of the author"
                className="rounded-full h-[50%] m-auto my-4"
              />
              <h3 className="text-center text-2xl font-bold">John Doe</h3>
              <p className="ml-4 mt-2 font-bold  ">
                Dummy ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae a.
              </p>
            </div>
            <div className="card-1 h-auto w-[370px] border border-black  rounded-xl flex-shrink-0">
              <Image
                src="/landscape-1.jpg"
                width={150}
                height={12}
                alt="Picture of the author"
                className="rounded-full h-[50%] m-auto my-4"
              />
              <h3 className="text-center text-2xl font-bold">John Doe</h3>
              <p className="ml-4 mt-2 font-bold  ">
                Dummy ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae a.
              </p>
            </div>{" "}
            <div className="card-1 h-auto w-[370px] border border-black  rounded-xl flex-shrink-0">
              <Image
                src="/landscape-1.jpg"
                width={150}
                height={12}
                alt="Picture of the author"
                className="rounded-full h-[50%] m-auto my-4"
              />
              <h3 className="text-center text-2xl font-bold">John Doe</h3>
              <p className="ml-4 mt-2 font-bold  ">
                Dummy ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae a.
              </p>
            </div>{" "}
            <div className="card-1 h-auto w-[370px] border border-black  rounded-xl flex-shrink-0">
              <Image
                src="/landscape-1.jpg"
                width={150}
                height={12}
                alt="Picture of the author"
                className="rounded-full h-[50%] m-auto my-4"
              />
              <h3 className="text-center text-2xl font-bold">John Doe</h3>
              <p className="ml-4 mt-2 font-bold  ">
                Dummy ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae a.
              </p>
            </div>{" "}
            <div className="card-1 h-auto w-[370px] border border-black  rounded-xl flex-shrink-0">
              <Image
                src="/landscape-1.jpg"
                width={150}
                height={12}
                alt="Picture of the author"
                className="rounded-full h-[50%] m-auto my-4"
              />
              <h3 className="text-center text-2xl font-bold">John Doe</h3>
              <p className="ml-4 mt-2 font-bold  ">
                Dummy ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae a.
              </p>
            </div>{" "}
            <div className="card-1 h-auto w-[370px] border border-black  rounded-xl flex-shrink-0">
              <Image
                src="/landscape-1.jpg"
                width={150}
                height={12}
                alt="Picture of the author"
                className="rounded-full h-[50%] m-auto my-4"
              />
              <h3 className="text-center text-2xl font-bold">John Doe</h3>
              <p className="ml-4 mt-2 font-bold  ">
                Dummy ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae a.
              </p>
            </div>{" "}
            <div className="card-1 h-auto w-[370px] border border-black  rounded-xl flex-shrink-0">
              <Image
                src="/landscape-1.jpg"
                width={150}
                height={12}
                alt="Picture of the author"
                className="rounded-full h-[50%] m-auto my-4"
              />
              <h3 className="text-center text-2xl font-bold">John Doe</h3>
              <p className="ml-4 mt-2 font-bold  ">
                Dummy ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae a.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Testimonial;
