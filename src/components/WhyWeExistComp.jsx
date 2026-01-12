import React from "react";

const WhyWeExistComp = () => {
  return (
    <div>
      <div className="text-center text-3xl">
        01::::::::::::::::::::02::::::::::::::::::::03
      </div>
      <div className="text-center my-40 flex flex-col gap-5">
        <p className="ibm-plex-sans-regular text-[14px]">The Solution</p>
        <h1 className="ibm-plex-serif-regular-italic text-[54px]">
          This is Why We Exist
        </h1>
        <p className="px-100 ibm-plex-sans-regular text-center ">
          Trust transforms everything engagement, innovation, performance, &
          culture. The Institute of Trusted Leadership scales this impact
          through research-backed methods, turning trusted leadership into the
          global standard.
        </p>
      </div>

      <div className="three-points flex justify-center mb-30">
        <div className="point-1">
          <h1 className="text-7xl ibm-plex-serif-medium inline-flex">1</h1>
          <div>
            <h2 className="text-3xl">ITL APPROACH</h2>
            <p className="w-100">
              Evidence-based methodology combining research, training, and
              consulting to build trusted leaders.
            </p>
          </div>

          <span>line joining1</span>
        </div>
        <div className="point-2">
          <h1 className="text-7xl ibm-plex-serif-medium">2</h1>
          <div>
            <h2 className="text-3xl">OUR ECOSYSTEM</h2>
            <p className="w-100">
              Four integrated divisions delivering comprehensive leadership
              solutions from awareness to transformation.
            </p>
          </div>

          <span>line joining2</span>
        </div>
        <div className="point-3">
          <h1 className="text-7xl ibm-plex-serif-medium">3</h1>
          <div>
            <h2 className="text-3xl">GLOBAL IMPACT</h2>
            <p className="w-100">
              UN SDG-aligned programs ensuring every initiative creates
              measurable social value.
            </p>
          </div>

          <span>line joining3</span>
        </div>
      </div>

      <p className="text-center">
        :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      </p>
    </div>
  );
};

export default WhyWeExistComp;
