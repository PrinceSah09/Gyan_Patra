import React from "react";
import Image from "next/image";
import { FaGooglePay } from "react-icons/fa6";
import { SiPhonepe } from "react-icons/si";
import { SiPaytm } from "react-icons/si";
import { ImPaypal } from "react-icons/im";

const imageStyle = {
  border: "1px solid #fff",
  width: "110%",
  height: "100%",
  objectFit: "cover",
};

function Contribute() {
  return (
    <div className="parent-div bg-gradient-to-r from-fuchsia-500 to-cyan-500 lg:h-[660px] flex items-center">
      <div className="main-container max-w-screen-xl mx-auto py-8 flex flex-col items-center lg:flex-row gap-8 bg-white/20 rounded-xl ">
        <div className="qr-code-div m-2 w-auto h-[400px] rounded-xl p-2 bg-slate-200/50">
          <Image
            src="/QR.png"
            height={300}
            width={800}
            style={imageStyle}
            alt="landscape art"
          />
        </div>

        <div className="second-div flex flex-col gap-8 px-4 lg:w-[70%] ">
          <div className="heading-text">
            <p className="font-bold text-3xl text-center rounded-md p-2">
              Your support is crucial in ensuring future for all childrens.
            </p>
          </div>
          <div className="icons-div text-3xl flex flex-row justify-between p-2 lg:px-14 rounded-md">
            <div className="lg:text-8xl text-4xl border p-4 rounded-full bg-green-600  text-white">
              <FaGooglePay />
            </div>
            <div className="lg:text-8xl text-4xl border p-4 rounded-full bg-purple-800  text-white items-center flex">
              <SiPhonepe />
            </div>
            <div className="lg:text-8xl text-4xl border p-4 rounded-full bg-white text-blue-600">
              <SiPaytm />
            </div>
            <div className="lg:text-8xl text-4xl border p-4 rounded-full bg-white text-blue-600">
              <ImPaypal />
            </div>
          </div>

          <div className="heading-text">
            <p className="font-bold text-lg border rounded-lg  bg-slate-300 text-center p-2">
              All rights, personal data and privacy are maintained by Gyanpatra.
              No information or data is shared. All rights are secured and safe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contribute;
