import React from "react";
import { useSelector } from "react-redux";
// import Lottie from "lottie-react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import animate_loading from "./animate_loading.json";
function Spinner() {
  let { isLoading } = useSelector((state) => state.spinnerSlice);
  return isLoading ? (
    <div
      style={{ backgroundColor: "#023047" }}
      className="LOADING h-screen w-screen fixed top-0 left-0 z-20 flex justify-center items-center"
    >
      {/* <Lottie
        animationData={animate_loading}
        className="ml-8"
        loop={true}
        width="100%"
        height="100%"
      /> */}

      <Player
        autoplay
        loop
        src={animate_loading}
        style={{ height: "300px", width: "300px" }}
      >
        {/* <Controls
          visible={true}
          buttons={["play", "repeat", "frame", "debug"]}
        /> */}
      </Player>
    </div>
  ) : (
    <></>
  );
}

export default Spinner;
