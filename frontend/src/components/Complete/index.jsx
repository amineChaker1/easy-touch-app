import React from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
const Complete = () => {
  const { width, height } = useWindowSize();
  return (
    <>
      <Confetti width={width} height={height} />
      <div
        className="bg-black  flex justify-center items-center px-8"
        style={{ height: "100vh" }}
      >
        <span className=" text-white text-xl text-center">
          Thank You For Completing Your Order , We Will Call You In The Next
          Hours To Confirm{" "}
          <h1 className="text-sm mt-10 mx-4">
            {" "}
            With <span className="text-primary font-bold ">Easy Touch</span> You
            Get The Best Plates For The Least Effort{" "}
          </h1>
        </span>
      </div>
    </>
  );
};

export default Complete;
