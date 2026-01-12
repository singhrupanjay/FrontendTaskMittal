import { useState } from "react";
import NavComponent from "./components/NavComponent";
import HeroComponent from "./components/HeroComponent";
import NorthStarComponent from "./components/NorthStarComponent";
import WhyWeExistComp from "./components/WhyWeExistComp";
import TransformLeadershipComp from "./components/TransformLeadershipComp";
import VisionComponent from "./components/VisionComponent";

function App() {
  return (
    <>
      <div className="mx-20 my-10">
        <NavComponent />

        <HeroComponent />
        <NorthStarComponent />
        <WhyWeExistComp />
        <TransformLeadershipComp />
        <VisionComponent />
      </div>
    </>
  );
}

export default App;
