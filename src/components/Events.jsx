import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { SlCalender } from "react-icons/sl";
import { CiClock1 } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

const imageStyle = {
  border: "1px solid #fff",
  width: "450px",
  height: "fit-content",
};

function Events() {
  return (
    <div
      className="
                bg-gradient-to-r
                m-auto
                from-indigo-500 
                from-10%
                via-sky-500 
                via-30% 
                to-emerald-500
                to-90%
                lg:h-auto
                p-4
            "
    >
      <div className=" h-auto m-auto flex flex-col md:flex-row justify-center items-center gap-4 max-w-screen-xl md:flex-wrap">
        <h1 className="p-2 lg:text-4xl text-3xl font-bold">Upcoming Events</h1>

        {/* Card-1 */}
        <div className=" lg:flex-row flex gap-4 flex-col justify-center m-auto items-center border p-2 bg-zinc-200 rounded-md">
          <div classsname="rounded-md lg:w-[25%] bg-zinc-200/50 backdrop-blur-xl">
            <Image
              src="/landscape-2.jpg"
              height={600}
              width={700}
              style={imageStyle}
              alt="landscape art"
            />
          </div>

          <div className="lg:w-[85%] w-[100%] m-auto lg:h-auto rounded-md bg-zinc-300/50  backdrop-blur-xl py-4 ">
            <h1 className="ml-[30px] text-3xl font-bold mb-2 ">Events Name</h1>

            <div className="flex justify-between lg:mx-8 py-1 px-4 md:mt-4 ">
              <div className="flex flex-wrap md:justify-center flex-col gap-2 items-center">
                <div className="lg:text-[43px] text-3xl p">
                  <SlCalender />
                </div>
                <div className="mx-2 font-bold lg:text-lg">
                  <p className="  ">12/12/2024</p>
                </div>
              </div>

              <div className="flex flex-wrap md:justify-center flex-col gap-2 items-center">
                <div className="lg:text-[43px] text-3xl p">
                  <CiClock1 />
                </div>
                <div className="mx-2 font-bold lg:text-lg">
                  <p className="  ">12:00 PM</p>
                </div>
              </div>

              <div className="flex flex-wrap md:justify-center flex-col gap-2 items-center">
                <div className="lg:text-[43px] text-3xl p">
                  <IoLocationOutline />
                </div>
                <div className="mx-2 font-bold lg:text-lg">
                  <p className="  ">Bhagalpur</p>
                </div>
              </div>
            </div>

            <p className="lg:text-xl w-[90%] sm:text-lg m-auto mt-4">
              Dummy ipsum dolor sit amet consectetur adipisicing elit. Dicta
              maxime, omnis praesentium quis ratione suscipit quisquam? Impedit
              deserunt non fuga nostrum optio enim atque earum fugiat .{" "}
            </p>
            <Button className=" text-white mt-4 lg:ml-8 ml-4 font-bold py-4 rounded transition duration-300">
              Contact Us
            </Button>
          </div>
          <div className="bg-zinc-600"></div>
        </div>

        {/* Card-2 */}
        <div className=" lg:flex-row flex gap-4 flex-col justify-center m-auto items-center border p-2 bg-zinc-200 rounded-md">
          <div classsname="rounded-md lg:w-[25%] bg-zinc-200/50 backdrop-blur-xl">
            <Image
              src="/landscape-2.jpg"
              height={600}
              width={700}
              style={imageStyle}
              alt="landscape art"
            />
          </div>

          <div className="lg:w-[85%] w-[100%] m-auto lg:h-auto rounded-md bg-zinc-300/50 backdrop-blur-xl py-4 ">
            <h1 className="ml-[30px] text-3xl font-bold mb-2 ">Events Name</h1>

            <div className="flex justify-between lg:mx-8 py-1 px-4 md:mt-4 ">
              <div className="flex flex-wrap md:justify-center flex-col gap-2 items-center">
                <div className="lg:text-[43px] text-3xl p">
                  <SlCalender />
                </div>
                <div className="mx-2 font-bold lg:text-lg">
                  <p className="  ">12/12/2024</p>
                </div>
              </div>

              <div className="flex flex-wrap md:justify-center flex-col gap-2 items-center">
                <div className="lg:text-[43px] text-3xl p">
                  <CiClock1 />
                </div>
                <div className="mx-2 font-bold lg:text-lg">
                  <p className="  ">12:00 PM</p>
                </div>
              </div>

              <div className="flex flex-wrap md:justify-center flex-col gap-2 items-center">
                <div className="lg:text-[43px] text-3xl p">
                  <IoLocationOutline />
                </div>
                <div className="mx-2 font-bold lg:text-lg">
                  <p className="  ">Bhagalpur</p>
                </div>
              </div>
            </div>

            <p className="lg:text-xl w-[90%] sm:text-lg m-auto mt-4">
              Dummy ipsum dolor sit amet consectetur adipisicing elit. Dicta
              maxime, omnis praesentium quis ratione suscipit quisquam? Impedit
              deserunt non fuga nostrum optio enim atque earum fugiat .{" "}
            </p>
            <Button className=" text-white mt-4 lg:ml-8 ml-4 font-bold py-4 rounded transition duration-300">
              Contact Us
            </Button>
          </div>
          <div className="bg-zinc-600"></div>
        </div>

        {/* Card-3 */}
        <div className=" lg:flex-row flex gap-4 flex-col justify-center m-auto items-center border p-2 bg-zinc-200 rounded-md">
          <div classsname="rounded-md lg:w-[25%] bg-zinc-200/50 backdrop-blur-xl">
            <Image
              src="/landscape-2.jpg"
              height={600}
              width={700}
              style={imageStyle}
              alt="landscape art"
            />
          </div>

          <div className="lg:w-[85%] w-[100%] m-auto lg:h-auto rounded-md bg-zinc-300/50 backdrop-blur-xl py-4 ">
            <h1 className="ml-[30px] text-3xl font-bold mb-2 ">Events Name</h1>

            <div className="flex justify-between lg:mx-8 py-1 px-4 md:mt-4 ">
              <div className="flex flex-wrap md:justify-center flex-col gap-2 items-center">
                <div className="lg:text-[43px] text-3xl p">
                  <SlCalender />
                </div>
                <div className="mx-2 font-bold lg:text-lg">
                  <p className="  ">12/12/2024</p>
                </div>
              </div>

              <div className="flex flex-wrap md:justify-center flex-col gap-2 items-center">
                <div className="lg:text-[43px] text-3xl p">
                  <CiClock1 />
                </div>
                <div className="mx-2 font-bold lg:text-lg">
                  <p className="  ">12:00 PM</p>
                </div>
              </div>

              <div className="flex flex-wrap md:justify-center flex-col gap-2 items-center">
                <div className="lg:text-[43px] text-3xl p">
                  <IoLocationOutline />
                </div>
                <div className="mx-2 font-bold lg:text-lg">
                  <p className="  ">Bhagalpur</p>
                </div>
              </div>
            </div>

            <p className="lg:text-xl w-[90%] sm:text-lg m-auto mt-4">
              Dummy ipsum dolor sit amet consectetur adipisicing elit. Dicta
              maxime, omnis praesentium quis ratione suscipit quisquam? Impedit
              deserunt non fuga nostrum optio enim atque earum fugiat .{" "}
            </p>
            <Button className=" text-white mt-4 lg:ml-8 ml-4 font-bold py-4 rounded transition duration-300">
              Contact Us
            </Button>
          </div>
          <div className="bg-zinc-600"></div>
        </div>
      </div>
    </div>
  );
}

export default Events;
