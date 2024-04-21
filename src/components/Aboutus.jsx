import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const imageStyle = {
  // border: '1px solid #fff',
  // width: '100%',
  // height: '',
  objectFit: "contain",
};

function Aboutus() {
  return (
    <div
      className="
            bg-gradient-to-r from-violet-500 to-fuchsia-500
            py-6
            "
    >
      <div className="flex justify-center items-center max-w-screen-xl flex-col lg:mx-auto mx-4 gap-4 bg-white/30 backdrop-blur-xl rounded-lg py-8 lg:px-8">
        <h1 className="font-bold text-6xl">About Us</h1>
        <div className="flex lg:flex-row flex-col justify-center items-center gap-8 mx-2">
          <div className="h-auto lg:w-[50vh] m-auto flex flex-col justify-center items-center">
            <Image
              src={"/guideline.jpg"}
              width={400}
              height={400}
              alt="Picture of the author"
              style={imageStyle}
              className="rounded-full"
            />
          </div>
          <div className="text-md font-bold bg-white/50 px-4 rounded-lg h-auto py-2 w-[98%] justify-center items-center flex backdrop-blur-xl">
            <p>
              Dummy ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              unde omnis, fuga odit, eos dolore enim voluptate amet optio ea
              facilis voluptas quae repellat soluta atque accusamus, nihil
              asperiores harum praesentium suscipit. Quas repellat tempora
              reprehenderit suscipit debitis perspiciatis sint recusandae
              nesciunt ipsum error? DoDummy quam, itaque dolore corporis, enim
              alias saepe obcaecati optio mollitia id eaque. DoDummyque
              cupiditate sequi omnis nesciunt quos natus provident nisi quia hic
              exercitationem accusantium minima quasi quo quas, temporibus
              recusandae aliquid. Ullam asperiores dolores provident porro
              aliquid repellat distinctio error illo officia deleniti commodi
              numquam unde autem molestiae corrupti esse, quos animi quaerat
              omnis! Eos similique, veritatis cumque dolore magnam ratione neque
              vitae molestias ea suscipit fuga eius debitis nobis dolor harum
              voluptates fugit ipsam est. Ea.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
