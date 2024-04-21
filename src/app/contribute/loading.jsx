"use client";

import React from "react";
import { InfinitySpin } from "react-loader-spinner";

function loading() {
  return (
    <div className="h-[100vh] flex justify-center items-center w-full m-auto bg-gradient-to-r from-purple-500 to-pink-500">
      <InfinitySpin
        visible={true}
        width="200"
        color="orange"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
}

export default loading;
